(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76dc1e2c"],{"0cb2":function(t,e,s){"use strict";s("57f1")},"0dd7":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns fixed-page asset"},[s("div",{staticClass:"page column main-column"},[s("div",{staticClass:"page-header flexrow"},[s("router-link",{staticClass:"flexrow-item has-text-centered back-link ml1",attrs:{to:t.assetsPath}},[s("corner-left-up-icon")],1),s("span",{staticClass:"flexrow-item ml2"},[t.currentAsset?s("entity-thumbnail",{staticClass:"entity-thumbnail",attrs:{entity:t.currentAsset,"empty-width":100,"empty-height":60,width:100}}):t._e()],1),s("div",{staticClass:"flexrow-item"},[s("page-title",{staticClass:"entity-title",attrs:{text:t.title}})],1),s("div",{staticClass:"filler"}),t.currentAsset&&t.currentAsset.ready_for&&"None"!==t.currentAsset.ready_for?s("div",{staticClass:"ready-for flexrow block mr0"},[s("span",{staticClass:"flexrow-item"},[t._v(" "+t._s(t.$t("assets.fields.ready_for"))+" ")]),s("task-type-name",{staticClass:"flexrow-item",attrs:{"task-type":t.taskTypeMap.get(t.currentAsset.ready_for),"current-production-id":this.currentProduction.id}})],1):t._e()],1),s("div",{staticClass:"flexrow infos"},[s("div",{staticClass:"flexrow-item block flexcolumn"},[s("page-subtitle",{attrs:{text:t.$t("assets.tasks")}}),s("entity-task-list",{staticClass:"task-list",attrs:{entries:t.currentAsset?t.currentAsset.tasks:[],"is-loading":!t.currentAsset,"is-error":!1},on:{"task-selected":t.onTaskSelected}})],1),s("div",{staticClass:"flexrow-item block flexcolumn"},[s("div",{staticClass:"flexrow"},[s("page-subtitle",{attrs:{text:t.$t("main.info")}}),s("div",{staticClass:"filler"}),s("div",{staticClass:"flexrow-item has-text-right"},[t.isCurrentUserManager?s("button-simple",{attrs:{icon:"edit"},on:{click:function(e){t.modals.edit=!0}}}):t._e()],1)],1),s("div",{staticClass:"table-body"},[t.currentAsset?s("table",{staticClass:"datatable"},[s("tbody",{staticClass:"table-body"},[s("tr",{staticClass:"datatable-row"},[s("td",{staticClass:"field-label"},[t._v(t._s(t.$t("assets.fields.description")))]),s("description-cell",{attrs:{entry:t.currentAsset,full:!0}})],1),t._l(t.assetMetadataDescriptors,(function(e){return s("tr",{key:e.id,staticClass:"datatable-row"},[s("td",{staticClass:"field-label"},[t._v(t._s(e.name))]),s("td",[t._v(" "+t._s(t.currentAsset.data?t.currentAsset.data[e.field_name]:"")+" ")])])}))],2)]):t._e()])])]),s("div",{staticClass:"asset-data block"},[s("div",{staticClass:"flexrow"},[s("combobox-styled",{staticClass:"section-combo flexrow-item",attrs:{options:t.entityNavOptions},model:{value:t.currentSection,callback:function(e){t.currentSection=e},expression:"currentSection"}}),s("div",{staticClass:"filler"}),s("span",{directives:[{name:"show",rawName:"v-show",value:"schedule"===t.currentSection,expression:"currentSection === 'schedule'"}],staticClass:"flexrow-item mt05"},[t._v(" "+t._s(t.$t("schedule.zoom_level"))+": ")]),s("combobox-number",{directives:[{name:"show",rawName:"v-show",value:"schedule"===t.currentSection,expression:"currentSection === 'schedule'"}],staticClass:"zoom-level flexrow-item ",attrs:{options:t.zoomOptions,"is-simple":""},model:{value:t.zoomLevel,callback:function(e){t.zoomLevel=e},expression:"zoomLevel"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"casting"===t.currentSection,expression:"currentSection === 'casting'"}],staticClass:"asset-casted-in"},[t.currentAsset?s("div",[t.currentAsset.castInShotsBySequence&&t.currentAsset.castInShotsBySequence[0].length>0?s("div",t._l(t.currentAsset.castInShotsBySequence,(function(e){return e[0].sequence_name?s("div",{key:e.length>0?e[0].sequence_name:"",staticClass:"sequence-shots"},[s("div",{staticClass:"shot-sequence"},[t._v(" "+t._s(e.length>0?e[0].sequence_name:"")+" ")]),s("div",{staticClass:"shot-list"},t._l(e,(function(e){return s("router-link",{key:e.shot_id,staticClass:"shot-link",attrs:{to:t.shotPath(e)}},[s("entity-thumbnail",{staticClass:"entity-thumbnail",attrs:{entity:e,square:!0,"empty-width":103,"empty-height":103,"with-link":!1}}),s("div",[s("span",[t._v(t._s(e.shot_name))]),e.nb_occurences>1?s("span",[t._v(" ("+t._s(e.nb_occurences)+") ")]):t._e()])],1)})),1)]):t._e()})),0):s("div",[t._v(" "+t._s(t.$t("assets.no_cast_in"))+" ")])]):s("table-info",{attrs:{"is-loading":t.castIn.isLoadin,"is-error":t.castIn.isError}}),t.currentAsset&&t.currentAsset.castingAssetsByType&&t.currentAsset.castingAssetsByType[0].length>0?s("div",[s("page-subtitle",{attrs:{text:"Linked"}}),t.currentAsset.castingAssetsByType&&t.currentAsset.castingAssetsByType[0].length>0?s("div",t._l(t.currentAsset.castingAssetsByType,(function(e){return s("div",{key:e.length>0?e[0].asset_type_name:"",staticClass:"type-assets"},[s("div",{staticClass:"asset-type"},[t._v(" "+t._s(e.length>0?e[0].asset_type_name:"")+" ("+t._s(e.length)+") ")]),s("div",{staticClass:"asset-list"},t._l(e,(function(e){return s("router-link",{key:e.id,staticClass:"asset-link",attrs:{to:{name:"asset",params:{production_id:t.currentProduction.id,asset_id:e.asset_id}}}},[s("entity-thumbnail",{staticClass:"entity-thumbnail",attrs:{entity:e,square:!0,"empty-width":103,"empty-height":103,"with-link":!1}}),s("div",[s("span",[t._v(t._s(e.asset_name))]),e.nb_occurences>1?s("span",[t._v(" ("+t._s(e.nb_occurences)+") ")]):t._e()])],1)})),1)])})),0):t._e()],1):t._e()],1),t.scheduleItems[0].children.length>0?s("div",{directives:[{name:"show",rawName:"v-show",value:"schedule"===t.currentSection,expression:"currentSection === 'schedule'"}],staticClass:"schedule mt1"},[s("div",{staticClass:"wrapper"},[s("schedule",{ref:"schedule-widget",attrs:{"start-date":t.tasksStartDate,"end-date":t.tasksEndDate,hierarchy:t.scheduleItems,"zoom-level":t.zoomLevel,"is-loading":!1,"is-estimation-linked":!0,"hide-root":!0,"with-milestones":!1}})],1)]):t._e(),"preview-files"===t.currentSection?s("entity-preview-files",{attrs:{entity:t.currentAsset}}):t._e(),"activity"===t.currentSection?s("entity-news",{attrs:{entity:t.currentAsset}}):t._e(),"time-logs"===t.currentSection?s("entity-time-logs",{attrs:{entity:t.currentAsset}}):t._e()],1)]),t.currentTask?s("div",{staticClass:"column side-column"},[s("task-info",{attrs:{task:t.currentTask}})],1):t._e(),s("edit-asset-modal",{ref:"edit-asset-modal",attrs:{active:t.modals.edit,"is-loading":t.loading.edit,"is-error":t.errors.edit,"asset-to-edit":t.currentAsset},on:{cancel:function(e){t.modals.edit=!1},confirm:t.confirmEditAsset}})],1)},n=[],r=s("2f62"),a=s("f58f"),c=s("31f2"),o=s("0a35"),l=s("de40"),u=s("1e4c"),d=s("9751"),h=s("0fcb"),p=s("813f"),m=s("22a2"),f=s("b2f9"),v=s("4ee3"),_=s("0024"),y=s("bb21"),b=s("8d07"),g=s("8751"),A=s("d7c7"),w=s("e60b"),C=s("274f"),k=s("9d94");function x(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function S(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?x(Object(s),!0).forEach((function(e){T(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function T(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var P={name:"asset",mixins:[a["a"],c["a"]],components:{ButtonSimple:l["a"],ComboboxNumber:u["a"],CornerLeftUpIcon:o["p"],ComboboxStyled:d["a"],DescriptionCell:h["a"],EditAssetModal:p["a"],EntityNews:m["a"],EntityPreviewFiles:f["a"],EntityThumbnail:y["a"],EntityTaskList:_["a"],EntityTimeLogs:v["a"],PageSubtitle:g["a"],PageTitle:b["a"],Schedule:A["a"],TableInfo:w["a"],TaskInfo:k["default"],TaskTypeName:C["a"]},data:function(){return{currentAsset:null,currentTask:null,castIn:{isLoading:!1,isError:!1},errors:{edit:!1},loading:{edit:!1},modals:{edit:!1,preview:!1}}},mounted:function(){var t=this;this.clearSelectedTasks(),this.getCurrentAsset().then((function(e){t.currentAsset=e,t.currentSection=t.route.query.section||"casting",t.castIn.isLoading=!0,t.castIn.isError=!1,t.currentAsset?t.loadAssetCastIn(t.currentAsset).then((function(){return t.loadAssetCasting(t.currentAsset)})).then((function(){t.castIn.isLoading=!1})).catch((function(e){t.castIn.isLoading=!1,t.castIn.isError=!0,console.error(e)})):t.resetData()})).catch(console.error)},computed:S(S({},Object(r["c"])(["assetMap","assetSearchText","assetMetadataDescriptors","currentEpisode","currentProduction","getTaskTypePriority","isTVShow","isCurrentUserManager","route","taskMap","taskTypeMap","shotId"])),{},{title:function(){return this.currentAsset?"".concat(this.currentAsset.asset_type_name," / ")+"".concat(this.currentAsset.name):"Loading..."},assetThumbnailPath:function(){var t=this.currentAsset.preview_file_id;return"/api/pictures/originals/preview-files/".concat(t,".png")},isPreview:function(){return this.currentAsset&&this.currentAsset.preview_file_id&&this.currentAsset.preview_file_id.length>0},previousAssetPath:function(){var t=this,e=Array.from(this.assetMap.values());if(0===e.length)return{name:"open-productions"};var s=e.findIndex((function(e){return e&&t.currentAsset&&e.id===t.currentAsset.id})),i=0!==s?s-1:e.length-1,n=e[i];if(!n)return{name:"open-productions"};var r={name:"asset",params:{production_id:this.currentProduction.id,asset_id:n.id},query:{search:""}};return this.currentEpisode&&(r.name="episode-asset",r.params.episode_id=this.currentEpisode.id),r},nextAssetPath:function(){var t=this,e=Array.from(this.assetMap.values());if(0===e.length)return{name:"open-productions"};var s=e.findIndex((function(e){return e&&t.currentAsset&&e.id===t.currentAsset.id})),i=s===e.length-1?0:s+1,n=e[i];if(!n)return{name:"open-productions"};var r={name:"asset",params:{production_id:this.currentProduction.id,asset_id:n.id},query:{search:""}};return this.currentEpisode&&(r.name="episode-asset",r.params.episode_id=this.currentEpisode.id),r},assetsPath:function(){var t={name:"assets",params:{production_id:this.currentProduction.id},query:{search:this.assetSearchText||""}};return this.currentEpisode&&(t.name="episode-assets",t.params.episode_id=this.currentEpisode.id),t}}),methods:S(S({},Object(r["b"])(["clearSelectedTasks","editAsset","loadAsset","loadAssets","loadAssetCastIn","loadAssetCasting","loadShots","setCurrentEpisode"])),{},{changeTab:function(t){this.selectedTab=t},getCurrentAsset:function(){var t=this;return new Promise((function(e,s){var i=t.route.params.asset_id;i||e(null);var n=t.assetMap.get(i)||null;return n?e(n):i?t.loadAsset(i).then(e):void 0}))},onEditClicked:function(){this.modals.edit=!0},confirmEditAsset:function(t){var e=this;t.id=this.currentAsset.id,this.loading.edit=!0,this.errors.edit=!1,this.editAsset(t).then((function(){e.loading.edit=!1,e.modals.edit=!1})).catch((function(t){console.error(t),e.loading.edit=!1,e.errors.edit=!0}))},resetData:function(){var t=this;this.castIn.isLoading=!0,"main"===this.$route.params.episode_id&&this.setCurrentEpisode("main"),this.$nextTick((function(){t.getCurrentAsset().then((function(e){return t.currentAsset=e,t.loadAssetCastIn(t.currentAsset)})).then((function(){return t.loadAssetCasting(t.currentAsset)})).then((function(){t.castIn.isLoading=!1})).catch((function(e){t.castIn.isError=!0,t.castIn.isLoading=!1,console.error(e)}))}))},shotPath:function(t){return{name:t.episode_id?"episode-shot":"shot",params:{production_id:this.currentProduction.id,shot_id:t.shot_id,episode_id:t.episode_id?t.episode_id:void 0}}}}),watch:{},metaInfo:function(){return{title:"".concat(this.title," - Kitsu")}}},E=P,I=(s("0cb2"),s("0c7c")),O=Object(I["a"])(E,i,n,!1,null,"cc8a4c08",null);e["default"]=O.exports},"57f1":function(t,e,s){}}]);
//# sourceMappingURL=chunk-76dc1e2c.ee02d909.js.map