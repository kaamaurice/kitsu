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
    <model-viewer
      autoplay
      camera-controls
      class="model-viewer"
      loading="eager"
      :environment-image="backgroundUrl"
      :skybox-image="isEnvironmentSkybox ? backgroundUrl : ''"
      :src="previewUrl"
      :variant-name="isWireframe ? 'variant-wireframe' : null"
      @before-render="createWireframeVariant($event.target.model)"
    />
  </div>
</template>

<script>
import('@google/model-viewer')

export default {
  name: 'object-viewer',

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

  emits: ['frame-update', 'play-ended', 'video-end'],

  computed: {
    model() {
      return this.$event.target.model
    }
  },

  methods: {
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

    play() {
      if (
        !this.isPlaying &&
        this.videoDuration === this.model.currentTime &&
        this.name.indexOf('comparison') < 0
      ) {
        this.setCurrentTime(0)
      }
      this.model.play()
      if (this.name.indexOf('comparison') < 0) {
        this.runEmitTimeUpdateLoop()
      }
    },

    pause() {
      this.model.pause()
      clearInterval(this.$options.playLoop)
      this.model.currentTime = this.currentFrame * this.frameDuration
      this.$emit('frame-update', this.currentFrame)
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
        this.$emit('video-end')
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
