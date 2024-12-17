import{ap as Q,q as R,s as K,ao as Y,b4 as W,B as I,O as G,E as J,b5 as X,b6 as Z,a1 as j,b7 as x,b8 as ee,ax as se,T as te,V as ie,b9 as ne,m as N,b as $,aG as ae,_ as O,r as l,k as oe,o as n,c as o,e as p,f as h,n as B,t as f,l as y,d as r,F as g,g as k,p as q,$ as z,w as le,a3 as F,A as re,a9 as de,ba as ue,ak as ce,bb as he,bc as me,bd as pe,be as fe,ar as Se,al as ye,bf as ge,aa as ke,an as Ce,S as qe,av as Me,bg as De,bh as Te,aw as ve,J as be,aB as we,ab as Ee,Y as Le,ac as Ae}from"./index-BX9gKNNR.js";import{E as Ve}from"./EditSequenceModal-DbMbL5dN.js";const Pe={name:"sequence-list",mixins:[Q,R,K,Y,W],props:{displayedSequences:{type:Array,default:()=>[]},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},validationColumns:{type:Array,default:()=>[]},departmentFilter:{type:Array,default:()=>[]}},emits:["create-tasks","delete-clicked","edit-clicked","metadata-changed"],data(){return{type:"sequence",hiddenColumns:{},lastHeaderMenuDisplayed:null,lastMetadaDataHeaderMenuDisplayed:null,lastHeaderMenuDisplayedIndexInGrid:null,lastSelectedSequence:null,lastSelection:null,metadataDisplayHeaders:{estimation:!0,timeSpent:!0},offsets:{},stickedColumns:{}}},components:{ButtonSimple:I,DescriptionCell:G,EntityThumbnail:J,MetadataHeader:X,MetadataInput:Z,RowActionsCell:j,TableHeaderMenu:x,TableMetadataHeaderMenu:ee,TableMetadataSelectorMenu:se,TableInfo:te,ValidationCell:ie,ValidationHeader:ne},computed:{...N(["currentEpisode","currentProduction","currentSequence","displayedSequencesEstimation","displayedSequencesLength","displayedSequencesTimeSpent","isBigThumbnails","isCurrentUserAdmin","isCurrentUserManager","isCurrentUserSupervisor","isCurrentUserClient","isSingleSequence","isSequenceDescription","isSequenceEstimation","isSequenceResolution","isSequenceTime","isShowAssignations","isShowInfos","nbSelectedTasks","selectedTasks","sequenceMap","sequenceFilledColumns","sequenceMetadataDescriptors","sequences","sequenceSearchText","sequenceSelectionGrid","sequences","taskMap","taskTypeMap","user"]),isEmptyList(){return this.displayedSequences&&this.displayedSequences.length===0&&!this.isLoading&&!this.isError&&(!this.sequenceSearchText||this.sequenceSearchText.length===0)},isListVisible(){return!this.isLoading&&!this.isError&&this.displayedSequencesLength>0},visibleColumns(){let e=2;return e+=!this.isCurrentUserClient&&this.isShowInfos&&this.isSequenceDescription?1:0,e+=this.visibleMetadataDescriptors.length,e+=!this.isCurrentUserClient&&this.isShowInfos&&this.isSequenceTime&&this.metadataDisplayHeaders.timeSpent?1:0,e+=!this.isCurrentUserClient&&this.isShowInfos&&this.isSequenceEstimation&&this.metadataDisplayHeaders.estimation?1:0,e+=this.displayedValidationColumns.length,e},displayedValidationColumns(){return this.validationColumns.filter(e=>this.sequenceFilledColumns[e]&&(!this.hiddenColumns[e]||this.isShowInfos))},metadataDescriptors(){return this.sequenceMetadataDescriptors},localStorageStickKey(){return`stick-sequences-${this.currentProduction.id}`}},methods:{...$(["setSequenceSelection"]),isSelected(e,s){return this.sequenceSelectionGrid[e]&&this.sequenceSelectionGrid[e][s]},sequencePath(e){return this.getPath("sequence",e)},getPath(e,s){const c=this.currentProduction.id,S=this.currentEpisode?this.currentEpisode.id:null;return ae(s,c,e,S)}},watch:{displayedSequences(){this.$options.lineIndex={}},validationColumns(){this.initHiddenColumns(this.validationColumns,this.hiddenColumns)},stickedColumns(){this.updateOffsets()},isLoading(){this.updateOffsets()},isBigThumbnails(){this.updateOffsets()}}},Ue={class:"data-list"},_e={class:"datatable"},He={class:"datatable-head",id:"datatable-sequence"},Be={scope:"col",class:"name sequence-name datatable-row-header",ref:"th-sequence"},Fe={class:"flexrow"},Ie={class:"flexrow-item"},Ne={key:1,scope:"col",class:"description selectable"},$e={key:2,scope:"col",class:"resolution"},Oe=["title"],ze={scope:"col",class:"actions",ref:"actionsSection"},Qe={class:"datatable-body"},Re={class:"flexrow"},Ke=["title"],Ye={key:3,class:"resolution"},We=["value","onInput","onKeyup"],Ge={key:1,class:"metadata-value selectable"},Je=["title"],Xe={key:5,class:"time-spent selectable"},Ze={key:6,class:"estimation selectable"},je={key:9,class:"actions"},xe={key:0,class:"has-text-centered"},es={class:"info"},ss={key:1,class:"has-text-centered nb-sequences"},ts={key:0};function is(e,s,c,S,t,m){const A=l("table-header-menu"),D=l("table-metadata-header-menu"),M=l("button-simple"),T=l("metadata-header"),v=l("validation-header"),V=l("table-metadata-selector-menu"),P=l("entity-thumbnail"),U=l("router-link"),b=l("metadata-input"),w=l("validation-cell"),E=l("description-cell"),L=l("row-actions-cell"),_=l("table-info"),H=oe("columns-resizable");return n(),o("div",Ue,[p("div",{class:"datatable-wrapper",ref:"body",onScrollPassive:s[15]||(s[15]=(...i)=>e.onBodyScroll&&e.onBodyScroll(...i))},[h(A,{ref:"headerMenu","is-minimized":t.hiddenColumns[t.lastHeaderMenuDisplayed],"is-edit-allowed":e.isCurrentUserManager,"is-sticked":t.stickedColumns[t.lastHeaderMenuDisplayed],onMinimizeClicked:s[0]||(s[0]=i=>e.onMinimizeColumnToggled()),onDeleteAllClicked:s[1]||(s[1]=i=>e.onDeleteAllTasksClicked()),onSortByClicked:s[2]||(s[2]=i=>e.onSortByTaskTypeClicked()),onSelectColumn:s[3]||(s[3]=i=>e.onSelectColumn("sequence")),onToggleStick:s[4]||(s[4]=i=>e.stickColumnClicked())},null,8,["is-minimized","is-edit-allowed","is-sticked"]),h(D,{ref:"headerMetadataMenu","is-edit-allowed":e.isCurrentUserManager,"is-sticked":t.stickedColumns[t.lastMetadaDataHeaderMenuDisplayed],onEditClicked:s[5]||(s[5]=i=>e.onEditMetadataClicked()),onDeleteClicked:s[6]||(s[6]=i=>e.onDeleteMetadataClicked()),onSortByClicked:s[7]||(s[7]=i=>e.onSortByMetadataClicked()),onToggleStick:s[8]||(s[8]=i=>e.metadataStickColumnClicked(i))},null,8,["is-edit-allowed","is-sticked"]),p("table",_e,[B((n(),o("thead",He,[p("tr",null,[p("th",Be,[p("div",Fe,[p("span",Ie,f(e.$t("sequences.fields.name")),1),(e.isCurrentUserManager||e.isCurrentUserSupervisor)&&!c.isLoading?(n(),y(M,{key:0,class:"is-small flexrow-item",icon:"plus",text:"",onClick:e.onAddMetadataClicked},null,8,["onClick"])):r("",!0)])],512),e.isShowInfos?(n(!0),o(g,{key:0},k(e.stickedVisibleMetadataDescriptors,(i,d)=>(n(),y(T,{ref_for:!0,ref:`editor-${d}`,key:i.id,descriptor:i,left:t.offsets["editor-"+d]?`${t.offsets["editor-"+d]}px`:"0","is-stick":"",onShowMetadataHeaderMenu:a=>e.showMetadataHeaderMenu(i.id,a)},null,8,["descriptor","left","onShowMetadataHeaderMenu"]))),128)):r("",!0),(n(!0),o(g,null,k(e.stickedDisplayedValidationColumns,(i,d)=>(n(),y(v,{ref_for:!0,ref:`validation-${d}`,key:i,"hidden-columns":t.hiddenColumns,"column-id":i,"validation-style":e.getValidationStyle(i),left:t.offsets["validation-"+d]?`${t.offsets["validation-"+d]}px`:"0",type:"editor","is-stick":"",onShowHeaderMenu:a=>e.showHeaderMenu(i,d,a)},null,8,["hidden-columns","column-id","validation-style","left","onShowHeaderMenu"]))),128)),!e.isCurrentUserClient&&e.isShowInfos&&e.isSequenceDescription?(n(),o("th",Ne,f(e.$t("sequences.fields.description")),1)):r("",!0),e.isSequenceResolution&&e.isShowInfos?(n(),o("th",$e,f(e.$t("shots.fields.resolution")),1)):r("",!0),e.isShowInfos?(n(!0),o(g,{key:3},k(e.nonStickedVisibleMetadataDescriptors,i=>(n(),y(T,{key:i.id,descriptor:i,onShowMetadataHeaderMenu:d=>e.showMetadataHeaderMenu(i.id,d)},null,8,["descriptor","onShowMetadataHeaderMenu"]))),128)):r("",!0),!e.isCurrentUserClient&&e.isShowInfos&&e.isSequenceTime&&t.metadataDisplayHeaders.timeSpent?(n(),o("th",{key:4,scope:"col",class:"time-spent",ref:"th-spent"},f(e.$t("sequences.fields.time_spent")),513)):r("",!0),!e.isCurrentUserClient&&e.isShowInfos&&e.isSequenceEstimation&&t.metadataDisplayHeaders.estimation?(n(),o("th",{key:5,scope:"col",class:"estimation",title:e.$t("main.estimation"),ref:"th-spent"},f(e.$t("main.estimation_short")),9,Oe)):r("",!0),c.isLoading?r("",!0):(n(!0),o(g,{key:6},k(e.nonStickedDisplayedValidationColumns,(i,d)=>(n(),y(v,{key:i,"hidden-columns":t.hiddenColumns,"column-id":i,"validation-style":e.getValidationStyle(i),type:"sequences",onShowHeaderMenu:a=>{e.showHeaderMenu(i,d,a)}},null,8,["hidden-columns","column-id","validation-style","onShowHeaderMenu"]))),128)),p("th",ze,[e.isCurrentUserManager&&c.displayedSequences.length>0&&!c.isLoading?(n(),y(M,{key:0,class:q({"is-small":!0,highlighted:e.isEmptyTask}),icon:"plus",text:e.$t("tasks.create_tasks"),onClick:s[9]||(s[9]=i=>e.$emit("create-tasks"))},null,8,["class","text"])):r("",!0),e.isShowInfos?B((n(),y(V,{key:1,descriptors:e.sequenceMetadataDescriptors,exclude:{timeSpent:!e.isSequenceTime,estimation:!e.isSequenceEstimation},namespace:"sequences",modelValue:t.metadataDisplayHeaders,"onUpdate:modelValue":s[10]||(s[10]=i=>t.metadataDisplayHeaders=i)},null,8,["descriptors","exclude","modelValue"])),[[z,e.columnSelectorDisplayed]]):r("",!0),e.sequenceMetadataDescriptors.length>0&&e.isShowInfos?(n(),y(M,{key:2,class:"is-small is-pulled-right mr05",icon:"down",onClick:e.toggleColumnSelector},null,8,["onClick"])):r("",!0)],512)])])),[[H]]),p("tbody",Qe,[!c.isLoading&&m.isListVisible?(n(!0),o(g,{key:0},k(c.displayedSequences,(i,d)=>(n(),o("tr",{class:q(["datatable-row",{canceled:i.canceled}]),scope:"row",key:i.id},[p("th",{class:q({"datatable-row-header":!0,"sequence-name":!0,name:!0,strong:!i.canceled})},[p("div",Re,[h(P,{entity:i,width:e.isBigThumbnails?150:50,height:e.isBigThumbnails?100:33,"empty-width":e.isBigThumbnails?150:50,"empty-height":e.isBigThumbnails?100:34},null,8,["entity","width","height","empty-width","empty-height"]),h(U,{tabindex:"-1",title:i.name,to:m.sequencePath(i.id)},{default:le(()=>[F(f(i.name),1)]),_:2},1032,["title","to"])])],2),e.isShowInfos&&!c.isLoading?(n(!0),o(g,{key:0},k(e.stickedVisibleMetadataDescriptors,(a,u)=>(n(),o("td",{ref_for:!0,ref:`editor-${d}-${u}`,class:"metadata-descriptor datatable-row-header",title:i.data?i.data[a.field_name]:"",style:re({"z-index":1e3-d,left:t.offsets["editor-"+u]?`${t.offsets["editor-"+u]}px`:"0"}),key:i.id+"-"+a.id},[h(b,{entity:i,descriptor:a,onMetadataChanged:s[11]||(s[11]=C=>e.$emit("metadata-changed",C)),indexes:{i:d,j:u}},null,8,["entity","descriptor","indexes"])],12,Ke))),128)):r("",!0),c.isLoading?r("",!0):(n(!0),o(g,{key:1},k(e.stickedDisplayedValidationColumns,(a,u)=>(n(),y(w,{ref_for:!0,ref:`validation-${d}-${u}`,key:a+"-"+i.id,class:q({"validation-cell":!t.hiddenColumns[a],"hidden-validation-cell":t.hiddenColumns[a],"datatable-row-header":!0}),column:e.taskTypeMap.get(a),"column-y":u,entity:i,"is-assignees":e.isShowAssignations,"is-static":!0,left:t.offsets["validation-"+u]?`${t.offsets["validation-"+u]}px`:"0",minimized:t.hiddenColumns[a],"row-x":d,selected:m.isSelected(d,u),sticked:!0,"task-test":e.taskMap.get(i.validations.get(a)),onSelect:s[12]||(s[12]=C=>e.onTaskSelected(C,!0)),onUnselect:s[13]||(s[13]=C=>e.onTaskUnselected(C,!0))},null,8,["class","column","column-y","entity","is-assignees","left","minimized","row-x","selected","task-test"]))),128)),!e.isCurrentUserClient&&e.isShowInfos&&e.isSequenceDescription?(n(),y(E,{key:2,class:"description",entry:i,editable:e.isCurrentUserManager,onDescriptionChanged:a=>e.onDescriptionChanged(i,a)},null,8,["entry","editable","onDescriptionChanged"])):r("",!0),e.isSequenceResolution&&e.isShowInfos?(n(),o("td",Ye,[e.isCurrentUserManager?(n(),o("input",{key:0,class:q({"input-editor":!0,error:!e.isValidResolution(i)}),value:e.getMetadataFieldValue({field_name:"resolution"},i),onInput:a=>e.onMetadataFieldChanged(i,{field_name:"resolution"},a),onKeyup:de(a=>e.onInputKeyUp(a,e.getIndex(d,e.k),e.descriptorLength+3),["ctrl"])},null,42,We)):(n(),o("span",Ge,f(e.getMetadataFieldValue({field_name:"resolution"},i)),1))])):r("",!0),e.isShowInfos?(n(!0),o(g,{key:4},k(e.nonStickedVisibleMetadataDescriptors,(a,u)=>(n(),o("td",{class:"metadata-descriptor",title:i.data?i.data[a.field_name]:"",key:i.id+"-"+a.id},[h(b,{entity:i,descriptor:a,indexes:{i:d,j:u},onMetadataChanged:s[14]||(s[14]=C=>e.$emit("metadata-changed",C))},null,8,["entity","descriptor","indexes"])],8,Je))),128)):r("",!0),!e.isCurrentUserClient&&e.isShowInfos&&e.isSequenceTime&&t.metadataDisplayHeaders.timeSpent?(n(),o("td",Xe,f(e.formatDuration(i.timeSpent)),1)):r("",!0),!e.isCurrentUserClient&&e.isShowInfos&&e.isSequenceEstimation&&t.metadataDisplayHeaders.estimation?(n(),o("td",Ze,f(e.formatDuration(i.estimation)),1)):r("",!0),c.isLoading?r("",!0):(n(!0),o(g,{key:7},k(e.nonStickedDisplayedValidationColumns,(a,u)=>(n(),y(w,{ref_for:!0,ref:`validation-${d}-${u+e.stickedDisplayedValidationColumns.length}`,class:q({"validation-cell":!t.hiddenColumns[a],"hidden-validation-cell":t.hiddenColumns[a]}),key:`${a}-${i.id}`,column:e.taskTypeMap.get(a),entity:i,"task-test":e.taskMap.get(i.validations?i.validations.get(a):null),minimized:t.hiddenColumns[a],selected:m.isSelected(d,u+e.stickedDisplayedValidationColumns.length),"row-x":d,"column-y":u,"is-assignees":e.isShowAssignations,onSelect:e.onTaskSelected,onUnselect:e.onTaskUnselected},null,8,["class","column","entity","task-test","minimized","selected","row-x","column-y","is-assignees","onSelect","onUnselect"]))),128)),e.isCurrentUserManager?(n(),y(L,{key:8,entry:i,onDeleteClicked:a=>e.$emit("delete-clicked",i),onEditClicked:a=>e.$emit("edit-clicked",i)},null,8,["entry","onDeleteClicked","onEditClicked"])):(n(),o("td",je))],2))),128)):r("",!0)])])],544),h(_,{"is-loading":c.isLoading,"is-error":c.isError},null,8,["is-loading","is-error"]),m.isEmptyList&&!e.isCurrentUserClient&&!c.isLoading?(n(),o("div",xe,[s[16]||(s[16]=p("p",{class:"info"},[p("img",{src:ue})],-1)),p("p",es,f(e.$t("sequences.empty_list_client")),1)])):r("",!0),!m.isEmptyList&&!c.isLoading?(n(),o("p",ss,[F(f(e.displayedSequencesLength)+" "+f(e.$tc("sequences.number",e.displayedSequencesLength))+" ",1),e.displayedSequencesTimeSpent>0&&e.displayedSequencesEstimation>0?(n(),o("span",ts," ("+f(e.formatDuration(e.displayedSequencesTimeSpent))+" "+f(e.$tc("main.days_spent",e.displayedSequencesTimeSpent))+", "+f(e.formatDuration(e.displayedSequencesEstimation))+" "+f(e.$tc("main.man_days",e.displayedSequencesEstimation))+") ",1)):r("",!0)])):r("",!0)])}const ns=O(Pe,[["render",is],["__scopeId","data-v-ba464346"]]),as={name:"sequences",mixins:[ce,he],components:{AddMetadataModal:me,AddThumbnailsModal:pe,BigThumbnailsButton:fe,BuildFilterModal:Se,ButtonSimple:I,ComboboxDepartment:ye,CreateTasksModal:ge,DeleteModal:ke,EditSequenceModal:Ve,SequenceList:ns,HardDeleteModal:Ce,SearchField:qe,SearchQueryList:Me,SortingInfo:De,ShowAssignationsButton:Te,ShowInfosButton:ve,TaskInfo:be},data(){return{type:"sequence",deleteAllTasksLockText:null,descriptorToEdit:{},departmentFilter:[],sequenceToDelete:null,sequenceToEdit:null,formData:null,genericColumns:["Metadata column name (text value)","Task type name (task status name value)","Task type name + comment (text value)"],historyEdit:{},initialLoading:!0,isSearchActive:!1,optionalColumns:["Description"],pageName:"Sequences",parsedCSV:[],selectedDepartment:"ALL",taskTypeForTaskDeletion:null,modals:{isAddMetadataDisplayed:!1,isAddThumbnailsDisplayed:!1,isBuildFilterDisplayed:!1,isCreateTasksDisplayed:!1,isDeleteDisplayed:!1,isDeleteMetadataDisplayed:!1,isDeleteAllTasksDisplayed:!1,isImportRenderDisplayed:!1,isImportDisplayed:!1,isNewDisplayed:!1},loading:{addMetadata:!1,addThumbnails:!1,creatingTasks:!1,creatingTasksStay:!1,del:!1,deleteAllTasks:!1,deleteMetadata:!1,edit:!1,importing:!1,savingSearch:!1,sequence:!1,stay:!1},errors:{addMetadata:!1,creatingTasks:!1,deleteAllTasks:!1,deleteMetadata:!1,edit:!1,importing:!1,importingError:null}}},beforeUnmount(){this.clearSelectedSequences()},created(){this.setLastProductionScreen("sequences")},mounted(){let e="";this.sequenceSearchText&&this.sequenceSearchText.length>0&&this.searchField.setValue(this.sequenceSearchText),this.$route.query.search&&this.$route.query.search.length>0&&(e=`${this.$route.query.search}`),e==="undefined"&&(e=""),this.$refs["sequence-list"].setScrollPosition(this.sequenceListScrollPosition),this.onSearchChange(),this.$refs["sequence-list"].setScrollPosition(this.sequenceListScrollPosition),!this.isCurrentUserManager&&this.user.departments.length>0?(this.selectedDepartment="MY_DEPARTMENTS",this.departmentFilter=this.user.departments):this.departmentFilter=[];const s=()=>{this.initialLoading=!1,this.$refs["sequence-list"]&&(this.$refs["sequence-search-field"].setValue(e),this.onSearchChange(),this.$refs["sequence-list"].setScrollPosition(this.sequenceListScrollPosition),this.$refs["sequence-list"].selectTaskFromQuery())};this.sequenceMap.size<1||this.sequenceValidationColumns.length===0||this.sequenceMap.values().next().project_id!==this.currentProduction.id?this.loadSequencesWithTasks().then(()=>{this.initialLoading=!1,s()}).catch(console.error):(this.isSequencesLoading||(this.initialLoading=!1),s())},computed:{...N(["currentEpisode","currentProduction","currentSection","displayedSequences","departmentMap","departments","sequenceMap","sequences","sequenceSearchQueries","isCurrentUserClient","isCurrentUserManager","isSequenceDescription","isSequenceEstimation","isSequenceTime","isSequencesLoading","isSequencesLoadingError","isShowAssignations","isTVShow","openProductions","productionSequenceTaskTypes","sequenceMap","sequenceFilledColumns","sequenceSearchText","sequenceValidationColumns","sequenceListScrollPosition","sequenceSorting","taskTypeMap","user"]),renderColumns(){const e=[...this.dataMatchers,...this.optionalColumns];return this.productionSequenceTaskTypes.forEach(s=>{e.push(s.name),e.push(`${s.name} comment`)}),e},filteredSequences(){const e={};return this.displayedSequences.forEach(s=>{const c=s.name;e[c]=!0}),e},metadataDescriptors(){return this.sequenceMetadataDescriptors}},methods:{...$(["addMetadataDescriptor","createTasks","changeSequenceSort","clearSelectedSequences","commentTaskWithPreview","deleteAllTasks","deleteSequence","deleteMetadataDescriptor","editSequence","getSequencesCsvLines","hideAssignations","loadSequencesWithTasks","newSequence","removeSequenceSearch","saveSequenceSearch","setLastProductionScreen","setPreview","setSequenceSearch","showAssignations","uploadSequenceFile"]),confirmAddMetadata(e){this.loading.addMetadata=!0,e.entity_type="Sequence",this.addMetadataDescriptor(e).then(()=>{this.loading.addMetadata=!1,this.modals.isAddMetadataDisplayed=!1}).catch(s=>{console.error(s),this.loading.addMetadata=!1,this.errors.addMetadata=!0})},showNewModal(){this.sequenceToEdit={},this.modals.isNewDisplayed=!0},confirmDeleteSequence(){this.loading.del=!0,this.errors.del=!1,this.deleteSequence(this.sequenceToDelete).then(()=>{this.loading.del=!1,this.modals.isDeleteDisplayed=!1}).catch(e=>{console.error(e),this.loading.del=!1,this.errors.del=!0})},runTasksCreation(e,s){return this.errors.creatingTasks=!1,this.createTasks({type:"sequences",task_type_id:e.task_type_id,project_id:this.currentProduction.id,selectionOnly:s})},reset(){this.initialLoading=!1,this.loadSequencesWithTasks(e=>{e&&console.error(e),this.initialLoading=!1})},resetEditModal(){const e={name:""};this.openProductions.length>0&&(e.production_id=this.openProductions[0].id),this.sequenceToEdit=e},applySearch(e){this.setSequenceSearch(e),this.setSearchInUrl(),this.isSearchActive=!0},saveSearchQuery(e){this.loading.savingSearch||(this.loading.savingSearch=!0,this.saveSequenceSearch(e).catch(console.error).finally(()=>{this.loading.savingSearch=!1}))},removeSearchQuery(e){this.removeSequenceSearch(e).catch(console.error)},onExportClick(){this.getSequencesCsvLines().then(e=>{const s=[we().format("YYYY-MM-DD"),"kitsu",this.currentProduction.name,this.$t("sequences.title")],c=Ee.slugify(s.join("_")),S=[this.$t("sequences.fields.name"),this.$t("sequences.fields.description")];this.currentSequence&&S.splice(0,0,"Sequence"),Le([...this.currentProduction.descriptors]).filter(t=>t.entity_type==="Sequence").forEach(t=>{S.push(t.name)}),this.isSequenceTime&&S.push(this.$t("sequences.fields.time_spent")),this.isSequenceEstimation&&S.push(this.$t("main.estimation_short")),this.sequenceValidationColumns.forEach(t=>{S.push(this.taskTypeMap.get(t).name),S.push("Assignations")}),Ae.buildCsvFile(c,[S].concat(e))})},async onFieldChanged({entry:e,fieldName:s,value:c}){const S={id:e.id,description:e.description,[s]:c};await this.editSequence(S),this.onSearchChange(!1)},async onMetadataChanged({entry:e,descriptor:s,value:c}){const S={id:e.id,data:{[s.field_name]:c}};await this.editSequence(S),this.onSearchChange(!1)},onEditClicked(e){this.sequenceToEdit=e,this.modals.isNewDisplayed=!0},onDeleteClicked(e){this.sequenceToDelete=e,this.modals.isDeleteDisplayed=!0},confirmEditSequence(e){this.loading.edit=!0,this.errors.edit=!1,e.id?this.editSequence(e).then(()=>{this.loading.edit=!1,this.modals.isNewDisplayed=!1,this.onSearchChange(!1)}).catch(s=>{console.error(s),this.loading.edit=!1,this.errors.edit=!0}):(e.project_id=this.currentProduction.id,this.currentEpisode&&(e.episode_id=this.currentEpisode.id),this.newSequence(e).then(()=>{this.loading.edit=!1,this.modals.isNewDisplayed=!1}).catch(s=>{console.error(s),this.loading.edit=!1,this.errors.edit=!0}))},deleteText(){const e=this.sequenceToDelete;return e?this.$t("sequences.delete_text",{name:e.name}):""}},watch:{$route(){if(!this.$route.query)return;const e=this.$route.query.search,s=this.$refs["sequence-search-field"].getValue();e!==s&&(this.searchField.setValue(e),this.applySearch(e))},currentProduction(){this.$refs["sequence-search-field"].setValue(""),this.$store.commit("SET_SEQUENCE_LIST_SCROLL_POSITION",0),this.initialLoading=!1,this.reset()},currentEpisode(){this.$refs["sequence-search-field"].setValue(""),this.$store.commit("SET_SEQUENCE_LIST_SCROLL_POSITION",0),this.initialLoading=!1,this.reset()},currentSection(){var e,s;(this.isTVShow&&this.displayedSequences.length===0||((e=this.displayedSequences[0])==null?void 0:e.episode_id)!==((s=this.currentEpisode)==null?void 0:s.id))&&(this.$refs["sequence-search-field"].setValue(""),this.$store.commit("SET_SEQUENCE_LIST_SCROLL_POSITION",0),this.initialLoading=!1,this.reset())},isSequencesLoading(){if(!this.isSequencesLoading){let e="";this.$route.query.search&&this.$route.query.search.length>0&&(e=`${this.$route.query.search}`),this.initialLoading=!1,this.$refs["sequence-search-field"].setValue(e),this.$nextTick(()=>{this.applySearch(e)}),this.$refs["sequence-list"]&&this.$refs["sequence-list"].setScrollPosition(this.sequenceListScrollPosition)}}},head(){var e,s;return this.isTVShow?{title:`${((e=this.currentProduction)==null?void 0:e.name)||""} - ${((s=this.currentEpisode)==null?void 0:s.name)||""} | ${this.$t("sequences.title")} - Kitsu`}:{title:`${this.currentProduction.name} | ${this.$t("sequences.title")} - Kitsu`}}},os={class:"columns fixed-page"},ls={class:"column main-column"},rs={class:"sequences page"},ds={class:"sequence-list-header page-header"},us={class:"flexrow"},cs={key:0,class:"flexrow flexrow-item"},hs={key:1,class:"flexrow"},ms={class:"query-list mt1"},ps={id:"side-column",class:"column side-column"};function fs(e,s,c,S,t,m){var a;const A=l("search-field"),D=l("button-simple"),M=l("combobox-department"),T=l("show-assignations-button"),v=l("show-infos-button"),V=l("big-thumbnails-button"),P=l("search-query-list"),U=l("sorting-info"),b=l("sequence-list"),w=l("task-info"),E=l("delete-modal"),L=l("hard-delete-modal"),_=l("create-tasks-modal"),H=l("add-metadata-modal");l("add-thumbnails-modal");const i=l("build-filter-modal"),d=l("edit-sequence-modal");return n(),o("div",os,[p("div",ls,[p("div",rs,[p("div",ds,[p("div",us,[h(A,{ref:"sequence-search-field","can-save":!0,active:t.isSearchActive,onChange:e.onSearchChange,onSave:m.saveSearchQuery,placeholder:"ex: e01 sequence=wip"},null,8,["active","onChange","onSave"]),h(D,{class:"flexrow-item",title:e.$t("entities.build_filter.title"),icon:"filter",onClick:s[0]||(s[0]=()=>t.modals.isBuildFilterDisplayed=!0)},null,8,["title"]),s[9]||(s[9]=p("div",{class:"filler"},null,-1)),e.isCurrentUserClient?r("",!0):(n(),o("div",cs,[e.departments.length>0?(n(),y(M,{key:0,class:"combobox-department flexrow-item","selectable-departments":e.selectableDepartments("Sequence"),"display-all-and-my-departments":!0,rounded:"",modelValue:t.selectedDepartment,"onUpdate:modelValue":s[1]||(s[1]=u=>t.selectedDepartment=u)},null,8,["selectable-departments","modelValue"])):r("",!0),h(T,{class:"flexrow-item"}),h(v,{class:"flexrow-item"}),h(V,{class:"flexrow-item"})])),e.isCurrentUserManager?(n(),o("div",hs,[h(D,{class:"flexrow-item",text:e.$t("sequences.new_sequence"),icon:"plus",onClick:m.showNewModal},null,8,["text","onClick"])])):r("",!0)]),p("div",ms,[!e.isSequencesLoading&&!t.initialLoading?(n(),y(P,{key:0,queries:e.sequenceSearchQueries,type:"sequence",onChangeSearch:e.changeSearch,onRemoveSearch:m.removeSearchQuery},null,8,["queries","onChangeSearch","onRemoveSearch"])):r("",!0)])]),(a=e.sequenceSorting)!=null&&a.length?(n(),y(U,{key:0,sorting:e.sequenceSorting,onClearSorting:s[2]||(s[2]=u=>e.onChangeSortClicked(null))},null,8,["sorting"])):r("",!0),h(b,{ref:"sequence-list","displayed-sequences":e.displayedSequences,"is-loading":e.isSequencesLoading||t.initialLoading,"is-error":e.isSequencesLoadingError,"validation-columns":e.sequenceValidationColumns,"department-filter":t.departmentFilter,onAddMetadata:e.onAddMetadataClicked,onChangeSort:e.onChangeSortClicked,onCreateTasks:e.showCreateTasksModal,onDeleteAllTasks:e.onDeleteAllTasksClicked,onDeleteClicked:m.onDeleteClicked,onDeleteMetadata:e.onDeleteMetadataClicked,onEditClicked:m.onEditClicked,onEditMetadata:e.onEditMetadataClicked,onFieldChanged:m.onFieldChanged,onMetadataChanged:m.onMetadataChanged,onScroll:e.saveScrollPosition,onKeepTaskPanelOpen:e.onKeepTaskPanelOpenChanged},null,8,["displayed-sequences","is-loading","is-error","validation-columns","department-filter","onAddMetadata","onChangeSort","onCreateTasks","onDeleteAllTasks","onDeleteClicked","onDeleteMetadata","onEditClicked","onEditMetadata","onFieldChanged","onMetadataChanged","onScroll","onKeepTaskPanelOpen"])])]),B(p("div",ps,[h(w,{task:e.selectedTasks.values().next().value,"entity-type":"Sequence","with-actions":""},null,8,["task"])],512),[[z,e.isTaskSidePanelOpen]]),h(E,{ref:"delete-sequence-modal",active:t.modals.isDeleteDisplayed,"is-loading":t.loading.del,"is-error":t.errors.del,text:m.deleteText(),"error-text":e.$t("sequences.delete_error"),onCancel:s[3]||(s[3]=u=>t.modals.isDeleteDisplayed=!1),onConfirm:m.confirmDeleteSequence},null,8,["active","is-loading","is-error","text","error-text","onConfirm"]),h(E,{ref:"delete-metadata-modal",active:t.modals.isDeleteMetadataDisplayed,"is-loading":t.loading.deleteMetadata,"is-error":t.errors.deleteMetadata,text:e.$t("productions.metadata.delete_text"),"error-text":e.$t("productions.metadata.delete_error"),onCancel:s[4]||(s[4]=u=>t.modals.isDeleteMetadataDisplayed=!1),onConfirm:e.confirmDeleteMetadata},null,8,["active","is-loading","is-error","text","error-text","onConfirm"]),h(L,{ref:"delete-all-tasks-modal",active:t.modals.isDeleteAllTasksDisplayed,"is-loading":t.loading.deleteAllTasks,"is-error":t.errors.deleteAllTasks,text:e.deleteAllTasksText(),"error-text":e.$t("tasks.delete_all_error"),"lock-text":t.deleteAllTasksLockText,"selection-option":!0,onCancel:s[5]||(s[5]=u=>t.modals.isDeleteAllTasksDisplayed=!1),onConfirm:e.confirmDeleteAllTasks},null,8,["active","is-loading","is-error","text","error-text","lock-text","onConfirm"]),h(_,{active:t.modals.isCreateTasksDisplayed,"is-loading":t.loading.creatingTasks,"is-loading-stay":t.loading.creatingTasksStay,"is-error":t.errors.creatingTasks,title:e.$t("tasks.create_tasks_sequence"),text:e.$t("tasks.create_tasks_sequence_explaination"),"error-text":e.$t("tasks.create_tasks_sequence_failed"),onCancel:e.hideCreateTasksModal,onConfirm:e.confirmCreateTasks,onConfirmAndStay:e.confirmCreateTasksAndStay},null,8,["active","is-loading","is-loading-stay","is-error","title","text","error-text","onCancel","onConfirm","onConfirmAndStay"]),h(H,{active:t.modals.isAddMetadataDisplayed,"is-loading":t.loading.addMetadata,"is-error":t.errors.addMetadata,"descriptor-to-edit":t.descriptorToEdit,"entity-type":"Sequence",onCancel:e.closeMetadataModal,onConfirm:m.confirmAddMetadata},null,8,["active","is-loading","is-error","descriptor-to-edit","onCancel","onConfirm"]),r("",!0),h(i,{ref:"build-filter-modal",active:t.modals.isBuildFilterDisplayed,"entity-type":"sequence",onCancel:s[6]||(s[6]=u=>t.modals.isBuildFilterDisplayed=!1),onConfirm:e.confirmBuildFilter},null,8,["active","onConfirm"]),h(d,{active:t.modals.isNewDisplayed,"is-loading":t.loading.edit,"is-error":t.errors.edit,"sequence-to-edit":t.sequenceToEdit,onCancel:s[7]||(s[7]=u=>t.modals.isNewDisplayed=!1),onConfirm:m.confirmEditSequence},null,8,["active","is-loading","is-error","sequence-to-edit","onConfirm"]),h(L,{active:t.modals.isDeleteDisplayed,"is-loading":t.loading.del,"is-error":t.errors.del,text:m.deleteText(),"error-text":e.$t("sequences.delete_error"),"lock-text":t.sequenceToDelete?t.sequenceToDelete.name:"",onCancel:s[8]||(s[8]=u=>t.modals.isDeleteDisplayed=!1),onConfirm:m.confirmDeleteSequence},null,8,["active","is-loading","is-error","text","error-text","lock-text","onConfirm"])])}const gs=O(as,[["render",fs],["__scopeId","data-v-4b7edb75"]]);export{gs as default};
//# sourceMappingURL=Sequences-BB4ScRsD.js.map