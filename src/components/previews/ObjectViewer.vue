<template>
  <div
    class="model-container"
    :class="{
      light: light && !readOnly
    }"
    :style="{
      height: defaultHeight ? defaultHeight + 'px' : '100%',
      width: '100%'
    }"
  >
    <div class="loading-background" v-if="isLoading">
      <spinner class="spinner" />
    </div>
    <model-viewer
      camera-controls
      ref="model"
      class="model-viewer"
      loading="eager"
      :environment-image="backgroundUrl"
      :skybox-image="isEnvironmentSkybox ? backgroundUrl : ''"
      :src="previewUrl"
      :variant-name="isWireframe ? 'variant-wireframe' : null"
      @before-render="createWireframeVariant($event.target.model)"
      @load="onLoad()"
      @finished="onVideoEnd()"
      v-show="!isLoading"
    />
  </div>
</template>

<script>
import('@google/model-viewer')

import { mapGetters } from 'vuex'

import { formatFrame } from '@/lib/video'

import { domMixin } from '@/components/mixins/dom'

import Spinner from '@/components/widgets/Spinner.vue'

export default {
  name: 'object-viewer',

  mixins: [domMixin],

  components: {
    Spinner
  },

  props: {
    previewUrl: {
      default: null,
      type: String
    },
    isRepeating: {
      type: Boolean,
      default: false
    },
    light: {
      default: false,
      type: Boolean
    },
    currentFrame: {
      type: Number,
      default: 0
    },
    nbFrames: {
      type: Number,
      default: 0
    },
    readOnly: {
      default: false,
      type: Boolean
    },
    defaultHeight: {
      default: 0,
      type: Number
    },
    backgroundUrl: {
      type: String
    },
    isEnvironmentSkybox: {
      default: false,
      type: Boolean
    },
    isWireframe: {
      default: false,
      type: Boolean
    }
  },

  emits: [
    'duration-changed',
    'frame-update',
    'play-ended'
  ],

  computed: {
    ...mapGetters(['currentProduction']),

    model() {
      return this.$refs.model
    },
  
    fps() {
      return parseFloat(this.currentProduction?.fps) || 30
    },

    frameDuration() {
      return Math.round((1 / this.fps) * 10000) / 10000
    }
  },

  mounted() {
    this.isLoading = true
  },

  methods: {
    formatFrame,
  
    /**
     * Create a wireframe variant of each material of a 3D model
     * @param {Model} model - model from model-viewer component
     */
    createWireframeVariant(model) {
      const maxIndex = model.materials.length
      for (let i = 0; i < maxIndex; i++) {
        const variantMaterial = model.createMaterialInstanceForVariant(
          i,
          `material-wireframe-${i}`,
          'variant-wireframe',
          this.isWireframe
        )
        if (!variantMaterial) {
          continue
        }
        const texture = variantMaterial.normalTexture
        const materialsSymbol = Object.getOwnPropertySymbols(texture).find(
          symbol => symbol.description === 'materials'
        )
        const materials = texture[materialsSymbol]
        materials.forEach(material => {
          material.wireframe = true
          material.color.setHex(0xc0c0c0)
          material.emissive?.setHex(0xc0c0c0)
          material.emissiveMap = null
          material.envMapIntensity = 0
        })
      }
    },

    getLastPushedCurrentTime() {
      const length = this.$options.currentTimeCalls.length
      if (length > 0) {
        return this.$options.currentTimeCalls[length - 1]
      } else {
        return this.currentTimeRaw
      }
    },

    setCurrentFrame(frame) {
      this.setCurrentTime(frame * this.frameDuration)
    },

    setCurrentTimeRaw(currentTime) {
      if (currentTime < this.frameDuration) currentTime = 0
      this.model.currentTime = currentTime
    },

    setCurrentTime(currentTime) {
      if (!this.$options.currentTimeCalls) {
        this.$options.currentTimeCalls = []
      }
      this.$options.currentTimeCalls.push(currentTime)
      this.runSetCurrentTime()
    },

    runSetCurrentTime() {
      if (this.$options.currentTimeCalls.length === 0) {
        this.$options.running = false
      } else {
        this.$options.running = true
        const currentTime = this.$options.currentTimeCalls.shift()
        if (this.model.currentTime !== currentTime) {
          this.model.currentTime = Number(currentTime.toPrecision(4)) + 0.001
        }
        setTimeout(() => {
          this.runSetCurrentTime()
        }, 10)
      }
    },

    onLoad() {
      if (this.model.availableAnimations.length > 0) {
        this.model.animationName = this.model.availableAnimations[0]
        this.model.play()
        this.videoDuration = this.model.duration
        this.model.pause()
        this.setCurrentTime(0)
        this.$emit('duration-changed', this.videoDuration)
        this.$emit('frame-update', 0)
        this.isLoading = false
      }
    },

    play() {
      if (!this.isPlaying && this.videoDuration === this.model.currentTime) {
        this.setCurrentTime(0)
      }
      this.model.play({repetitions: 1})
      this.runEmitTimeUpdateLoop()
    },

    getFrameFromPlayer() {
      let currentTimeRaw = 0
      if (this.model) {
        currentTimeRaw = this.model.currentTime
      } else {
        currentTimeRaw = 0
      }
      if (currentTimeRaw === 0) {
        return 0
      }
      let frame = Math.ceil(currentTimeRaw / this.frameDuration) + 1
      frame = Number(frame.toPrecision(4))
      frame = Math.min(frame, this.nbFrames)
      return frame
    },

    runEmitTimeUpdateLoop() {
      clearInterval(this.$options.playLoop)
      this.$options.playLoop = setInterval(
        this.emitFrameChange,
        this.frameDuration
      )
    },

    emitFrameChange() {
      const frame = this.getFrameFromPlayer()
      this.$emit('frame-update', frame)
    },

    pause() {
      this.model.pause()
      clearInterval(this.$options.playLoop)
      this.emitFrameChange()
    },

    goPreviousFrame() {
      const nextFrame = this.currentFrame - 1
      if (nextFrame < 0) return
      this.model.currentTime = nextFrame * this.frameDuration + 0.001
      this.$emit('frame-update', nextFrame)
      return nextFrame
    },

    goNextFrame() {
      const nextFrame = this.currentFrame + 1
      if (nextFrame >= this.nbFrames) return
      this.model.currentTime = nextFrame * this.frameDuration + 0.001
      this.$emit('frame-update', nextFrame)
      return nextFrame
    },

    onVideoEnd() {
      this.isPlaying = false
      clearInterval(this.$options.playLoop)
      if (this.isRepeating) {
        this.model.currentTime = 0
        this.play()
      } else {
        this.$emit('play-ended')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-background {
  background: #00000088;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.spinner {
  margin: auto;
}

.model-viewer {
  height: 100%;
  width: 100%;
  background-color: #333;
  --progress-bar-color: #999;

  &.light {
    height: 200px;
  }
}
</style>
