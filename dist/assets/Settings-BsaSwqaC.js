import{_ as v,a5 as k,a8 as c,m as p,b as y,r as _,o as n,c as m,e as a,a9 as g,t as l,d as h,f as r,p as V}from"./index-BX9gKNNR.js";import{C as A}from"./ChangeAvatarModal-BJU5osGy.js";const w={name:"settings",components:{ChangeAvatarModal:A,ComboboxBoolean:k,TextField:c},data(){return{organisationLogoPath:"",form:{chat_token_discord:"",chat_token_slack:"",chat_webhook_mattermost:"",has_avatar:!1,hd_by_default:"false",hours_by_day:0,name:"",timesheets_locked:"false",use_original_file_name:"false",format_duration_in_hours:"false",dark_theme_by_default:"false"},errors:{save:!1,saveAvatar:!1,webhook_error:!1},loading:{save:!1,saveAvatar:!1},modals:{avatar:!1}}},mounted(){this.organisationLogoPath=`/api/pictures/thumbnails/organisations/${this.organisation.id}.png`},computed:{...p(["organisation"])},methods:{...y(["changeAvatar","deleteOrganisationLogo","saveOrganisation","uploadOrganisationLogo"]),checkWebhook(){return!this.form.chat_webhook_mattermost||this.form.chat_webhook_mattermost.match("/hooks/[a-zA-Z0-9]+$")?(this.errors.webhook_error=!1,!0):(this.errors.webhook_error=!0,!1)},hideAvatarModal(){this.modals.avatar=!1},showAvatarModal(){this.modals.avatar=!0},saveSettings(){if(this.checkWebhook()){this.loading.save=!0,this.errors.save=!1;const t={...this.form,hd_by_default:this.form.hd_by_default==="true",timesheets_locked:this.form.timesheets_locked==="true",use_original_file_name:this.form.use_original_file_name==="true",format_duration_in_hours:this.form.format_duration_in_hours==="true",dark_theme_by_default:this.form.dark_theme_by_default==="true"};this.saveOrganisation(t).catch(e=>{console.error(e),this.errors.save=!0}).finally(()=>{this.loading.save=!1})}},uploadAvatarFile(t){this.loading.saveAvatar=!0,this.errors.saveAvatar=!1,this.uploadOrganisationLogo(t).then(()=>{setTimeout(()=>{this.modals.avatar=!1;const e=Date.now();this.organisationLogoPath=`/api/pictures/thumbnails/organisations/${this.organisation.id}.png?t=${e}`},500)}).catch(e=>{console.error(e),this.errors.saveAvatar=!0}).finally(()=>{this.loading.saveAvatar=!1})},removeAvatar(){this.loading.save=!0,this.errors.save=!1,this.deleteOrganisationLogo().catch(t=>{console.error(t),this.errors.save=!0}).finally(()=>{this.loading.save=!1})}},watch:{organisation:{immediate:!0,handler(){this.form={chat_token_discord:this.organisation.chat_token_discord,chat_token_slack:this.organisation.chat_token_slack,chat_webhook_mattermost:this.organisation.chat_webhook_mattermost,has_avatar:this.organisation.has_avatar,hd_by_default:this.organisation.hd_by_default?"true":"false",hours_by_day:this.organisation.hours_by_day,name:this.organisation.name,timesheets_locked:this.organisation.timesheets_locked?"true":"false",use_original_file_name:this.organisation.use_original_file_name?"true":"false",format_duration_in_hours:this.organisation.format_duration_in_hours?"true":"false",dark_theme_by_default:this.organisation.dark_theme_by_default?"true":"false"}}}},head(){return{title:`${this.$t("settings.title")} - Kitsu`}}},C={class:"settings page"},M={class:"settings-form"},U={class:"field"},L={class:"label"},S={key:0,class:"logo-wrapper"},O=["src"],B={key:1,class:"no-logo"},P={key:2},F={class:"mattermost_integrations"},N={key:0,class:"error has-text-centered"},q=["disabled"],z={key:0,class:"error has-text-centered mt2"};function D(t,e,T,W,o,i){var f;const d=_("text-field"),u=_("combobox-boolean"),b=_("change-avatar-modal");return n(),m("div",C,[a("div",M,[a("form",{class:"settings-header",onSubmit:e[2]||(e[2]=g(()=>{},["prevent"]))},[a("h2",null,l(t.$t("main.studio")),1),a("div",U,[a("label",L,l(t.$t("settings.logo")),1),o.form.has_avatar?(n(),m("div",S,[a("img",{src:o.organisationLogoPath},null,8,O)])):(n(),m("p",B,[a("em",null,l(t.$t("settings.no_logo")),1)])),a("p",null,[a("button",{type:"button",class:"button set-logo-button",onClick:e[0]||(e[0]=(...s)=>i.showAvatarModal&&i.showAvatarModal(...s))},l(t.$t("settings.set_logo")),1)]),o.form.has_avatar?(n(),m("p",P,[a("button",{type:"button",class:"button is-link remove-logo-button",onClick:e[1]||(e[1]=(...s)=>i.removeAvatar&&i.removeAvatar(...s))},l(t.$t("settings.remove_logo")),1)])):h("",!0)])],32),a("form",{ref:"form",onSubmit:e[13]||(e[13]=g((...s)=>i.saveSettings&&i.saveSettings(...s),["prevent"]))},[a("h2",null,l(t.$t("settings.title")),1),r(d,{class:"mt2",label:t.$t("settings.fields.name"),required:!0,modelValue:o.form.name,"onUpdate:modelValue":e[3]||(e[3]=s=>o.form.name=s),modelModifiers:{trim:!0}},null,8,["label","modelValue"]),r(d,{label:t.$t("settings.fields.hours_by_day"),min:1,max:24,required:!0,type:"number",modelValue:o.form.hours_by_day,"onUpdate:modelValue":e[4]||(e[4]=s=>o.form.hours_by_day=s)},null,8,["label","modelValue"]),r(u,{label:t.$t("settings.fields.use_original_name"),modelValue:o.form.use_original_file_name,"onUpdate:modelValue":e[5]||(e[5]=s=>o.form.use_original_file_name=s)},null,8,["label","modelValue"]),r(u,{label:t.$t("settings.fields.show_hd_default"),modelValue:o.form.hd_by_default,"onUpdate:modelValue":e[6]||(e[6]=s=>o.form.hd_by_default=s)},null,8,["label","modelValue"]),r(u,{label:t.$t("settings.fields.timesheets_locked"),modelValue:o.form.timesheets_locked,"onUpdate:modelValue":e[7]||(e[7]=s=>o.form.timesheets_locked=s)},null,8,["label","modelValue"]),r(u,{label:t.$t("settings.fields.format_duration_in_hours"),modelValue:o.form.format_duration_in_hours,"onUpdate:modelValue":e[8]||(e[8]=s=>o.form.format_duration_in_hours=s)},null,8,["label","modelValue"]),r(u,{label:t.$t("settings.fields.dark_theme_by_default"),modelValue:o.form.dark_theme_by_default,"onUpdate:modelValue":e[9]||(e[9]=s=>o.form.dark_theme_by_default=s)},null,8,["label","modelValue"]),a("h2",null,l(t.$t("settings.integrations")),1),r(d,{label:t.$t("settings.fields.slack_token"),modelValue:o.form.chat_token_slack,"onUpdate:modelValue":e[10]||(e[10]=s=>o.form.chat_token_slack=s),modelModifiers:{trim:!0}},null,8,["label","modelValue"]),r(d,{label:t.$t("settings.fields.discord_token"),modelValue:o.form.chat_token_discord,"onUpdate:modelValue":e[11]||(e[11]=s=>o.form.chat_token_discord=s),modelModifiers:{trim:!0}},null,8,["label","modelValue"]),a("div",F,[r(d,{label:t.$t("settings.fields.mattermost_webhook"),modelValue:o.form.chat_webhook_mattermost,"onUpdate:modelValue":e[12]||(e[12]=s=>o.form.chat_webhook_mattermost=s),modelModifiers:{trim:!0}},null,8,["label","modelValue"]),o.errors.webhook_error===!0?(n(),m("div",N,[a("em",null,l(t.$t("settings.webhook_error")),1)])):h("",!0)]),a("button",{class:V(["button save-button is-medium",{"is-loading":o.loading.save}]),disabled:o.loading.save||!((f=t.$refs.form)!=null&&f.checkValidity())},l(t.$t("settings.save.button")),11,q),o.errors.save?(n(),m("p",z,[a("em",null,l(t.$t("settings.save.error")),1)])):h("",!0)],544)]),r(b,{active:o.modals.avatar,"is-loading":o.loading.saveAvatar,"is-error":o.errors.saveAvatar,title:t.$t("settings.change_logo"),onConfirm:i.uploadAvatarFile,onCancel:i.hideAvatarModal},null,8,["active","is-loading","is-error","title","onConfirm","onCancel"])])}const I=v(w,[["render",D],["__scopeId","data-v-a50e6463"]]);export{I as default};
//# sourceMappingURL=Settings-BsaSwqaC.js.map