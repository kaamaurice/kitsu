import{n,g as c,E as r,j as l,m as h,b as o}from"./index-BwEaJeWL.js";import{E as d}from"./EntityChat-D4v8y9GJ.js";const _={name:"page-left-side-layout"};var m=function(){var t=this,s=t._self._c;return s("div",{ref:"page",staticClass:"columns fixed-page"},[s("div",{staticClass:"column left-side-column"},[t._t("side")],2),s("div",{staticClass:"column main-column"},[t._t("main")],2)])},u=[],f=n(_,m,u,!1,null,null);const y=f.exports,g={name:"entity-chats",mixins:[c],components:{EntityChat:d,EntityThumbnail:r,PageLeftSideLayout:y,Spinner:l},data(){return{chats:[],entity:null,loading:{list:!1}}},async mounted(){this.loading.list=!0,this.chats=await this.getEntityChats(),this.$route.query.entity_id?this.selectFromQuery():this.selectFirstChat(),this.loading.list=!1},computed:{...h(["productionMap","user"]),chatList(){return[...this.chats].sort((e,t)=>e.last_message?t.last_message?e.last_message===t.last_message?e.entity_name.localeCompare(t.entity_name):e.last_message<t.last_message:-1:1)}},methods:{...o(["getEntityChats"]),selectFirstChat(){if(this.chats.length>0){const e=this.chats[this.chats.length-1];this.entity={id:e.object_id}}},selectFromQuery(){const e=this.chats.find(t=>t.object_id===this.$route.query.entity_id);e?this.entity={id:e.object_id}:this.selectFirstChat()},selectChat(e){this.entity={id:e.object_id},this.$nextTick(()=>{this.$refs.entityChat.focusMessageBox()}),this.$router.push({query:{entity_id:e.object_id}})},chatClass(e){return{"chat-item":!0,selected:this.entity&&this.entity.id===e.object_id}},getChatProjectName(e){return this.productionMap.get(e.project_id).name},getChatDate(e){return e.last_message?this.formatDate(e.last_message):this.$t("chats.no_message_yet")}},socket:{events:{async"chat:joined"(e){!this.chats.some(t=>t.id===e.chat_id)&&this.user.id===e.person_id&&(this.chats=await this.getEntityChats())},"chat:left"(e){this.chats.some(t=>t.id===e.chat_id)&&this.user.id===e.person_id&&(this.chats=this.chats.filter(t=>t.id!==e.chat_id))},"chat:new-message"(e){const t=this.chats.find(s=>s.id===e.chat_id);t&&(t.last_message=e.last_message)}}},metaInfo(){return{title:`${this.$t("chats.title")} - Kitsu`}}};var p=function(){var t=this,s=t._self._c;return s("page-left-side-layout",{scopedSlots:t._u([{key:"side",fn:function(){return[s("div",{staticClass:"chat-column"},[t.loading.list?s("spinner",{staticClass:"mt1"}):s("div",{staticClass:"chat-list"},t._l(t.chatList,function(i){return s("div",{key:i.id,class:t.chatClass(i),on:{click:function(a){return t.selectChat(i)}}},[s("div",{staticClass:"flexrow"},[s("entity-thumbnail",{staticClass:"flexrow-item mr1",attrs:{height:40,"empty-height":40,"empty-width":60,entity:{id:i.object_id,preview_file_id:i.preview_file_id}}}),s("div",{staticClass:"flexcolumn flexrow-item ml1"},[s("div",{staticClass:"chat-item-project-name"},[t._v(" "+t._s(t.getChatProjectName(i))+" ")]),s("div",{staticClass:"chat-item-title"},[t._v(" "+t._s(i.entity_name)+" ")]),s("div",{staticClass:"chat-item-subtitle"},[t._v(" "+t._s(t.getChatDate(i))+" ")])])],1)])}),0)],1)]},proxy:!0},{key:"main",fn:function(){var i;return[s("div",{staticClass:"selected-entity-chat"},[s("entity-chat",{ref:"entityChat",attrs:{entity:t.entity,name:(i=t.chatList.find(a=>a.object_id===t.entity.id))==null?void 0:i.entity_name}})],1)]},proxy:!0}])})},C=[],v=n(g,p,C,!1,null,"08698b6b");const $=v.exports;export{$ as default};
//# sourceMappingURL=EntityChats-DWCVml1w.js.map