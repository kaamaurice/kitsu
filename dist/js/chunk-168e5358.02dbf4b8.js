(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-168e5358"],{"2b61":function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{class:{modal:!0,"is-active":e.active}},[t("div",{staticClass:"modal-background",on:{click:function(a){return e.$emit("cancel")}}}),t("div",{staticClass:"modal-content"},[t("div",{staticClass:"box content"},[t("h1",{staticClass:"title"},[e._v(" "+e._s(e.title)+" ")]),t("p",[e._v(" "+e._s(e.$t("main.csv.select_file"))+" ")]),t("file-upload",{ref:"uploadAvatarField",attrs:{label:e.$t("main.csv.upload_file"),accept:".png,.jpg,.jpeg"},on:{fileselected:e.onFileSelected}}),e.isError?t("p",{staticClass:"error"},[e._v(" "+e._s(e.$t("profile.avatar.error_upload"))+" ")]):e._e(),t("modal-footer",{attrs:{"error-text":e.$t("productions.metadata.error"),"is-loading":e.isLoading,"is-disabled":!e.formData},on:{confirm:e.onConfirmClicked,cancel:function(a){return e.$emit("cancel")}}})],1)])])},o=[],i=t("5530"),n=t("2f62"),r=t("d065"),l=t("4085"),c=t("d5c9"),d={name:"change-avatar-modal",mixins:[r["a"]],components:{FileUpload:l["a"],ModalFooter:c["a"]},props:["active","cancelRoute","isLoading","isError","title"],data:function(){return{formData:null}},computed:Object(i["a"])({},Object(n["c"])([])),methods:Object(i["a"])(Object(i["a"])({},Object(n["b"])([])),{},{onFileSelected:function(e){this.formData=e,this.$emit("fileselected",e)},onConfirmClicked:function(){this.$emit("confirm",this.formData)}}),watch:{active:function(){this.formData=null,this.$refs.uploadAvatarField.reset()}}},f=d,u=(t("6810"),t("0c7c")),p=Object(u["a"])(f,s,o,!1,null,"0203a630",null);a["a"]=p.exports},"3adc3":function(e,a,t){"use strict";t("d962")},"421c":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"profile page"},[t("div",{staticClass:"profile-content"},[t("div",{staticClass:"has-text-centered profile-header"},[t("div",{staticClass:"profile-header-content has-text-centered"},[t("people-avatar",{ref:"avatar",attrs:{"no-cache":!0,person:this.user,size:150,"font-size":60}}),e.isLdap?e._e():t("p",[t("button",{staticClass:"button is-link change-avatar-button",on:{click:e.showAvatarModal}},[e._v(" "+e._s(e.$t("profile.change_avatar"))+" ")])]),t("h1",[e._v(" "+e._s(e.$t("profile.title"))+" ")])],1)]),t("div",{staticClass:"profile-body"},[t("h2",[e._v(" "+e._s(e.$t("profile.info_title"))+" ")]),t("text-field",{attrs:{label:e.$t("people.fields.first_name"),disabled:e.isLdap},model:{value:e.form.first_name,callback:function(a){e.$set(e.form,"first_name",a)},expression:"form.first_name"}}),t("text-field",{attrs:{label:e.$t("people.fields.last_name"),disabled:e.isLdap},model:{value:e.form.last_name,callback:function(a){e.$set(e.form,"last_name",a)},expression:"form.last_name"}}),t("text-field",{attrs:{label:e.$t("people.fields.email"),disabled:e.isLdap},model:{value:e.form.email,callback:function(a){e.$set(e.form,"email",a)},expression:"form.email"}}),t("text-field",{attrs:{label:e.$t("people.fields.phone")},model:{value:e.form.phone,callback:function(a){e.$set(e.form,"phone",a)},expression:"form.phone"}}),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v(" "+e._s(e.$t("profile.timezone"))+" ")]),t("span",{staticClass:"select is-medium"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.form.timezone,expression:"form.timezone"}],on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.form,"timezone",a.target.multiple?t:t[0])}}},e._l(e.timezones,(function(a){return t("option",{key:a},[e._v(" "+e._s(a)+" ")])})),0)])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v(" "+e._s(e.$t("profile.language"))+" ")]),t("span",{staticClass:"select is-medium"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.form.locale,expression:"form.locale"}],domProps:{value:e.form.locale},on:{change:[function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.form,"locale",a.target.multiple?t:t[0])},e.localeChanged]}},[t("option",{attrs:{value:"zh_Hans_CN"}},[e._v("Chinese")]),t("option",{attrs:{value:"zh_Hant_TW"}},[e._v("Chinese (TW)")]),t("option",{attrs:{value:"nl_NL"}},[e._v("Dutch")]),t("option",{attrs:{value:"en_US"}},[e._v("English")]),t("option",{attrs:{value:"fr_FR"}},[e._v("French")]),t("option",{attrs:{value:"de_DE"}},[e._v("German")]),t("option",{attrs:{value:"pt_BR"}},[e._v("Portuguese (Brasilian)")]),t("option",{attrs:{value:"fa_IR"}},[e._v("Persian")]),t("option",{attrs:{value:"es_ES"}},[e._v("Spanish")]),t("option",{attrs:{value:"ru_RU"}},[e._v("Russian")])])])]),t("div",{staticClass:"field"},[t("combobox-boolean",{attrs:{label:e.$t("profile.notifications_enabled")},model:{value:e.form.notifications_enabled,callback:function(a){e.$set(e.form,"notifications_enabled",a)},expression:"form.notifications_enabled"}})],1),t("div",{staticClass:"field"},[t("combobox-boolean",{attrs:{label:e.$t("profile.notifications_slack_enabled")},model:{value:e.form.notifications_slack_enabled,callback:function(a){e.$set(e.form,"notifications_slack_enabled",a)},expression:"form.notifications_slack_enabled"}})],1),"true"===e.form.notifications_slack_enabled?t("text-field",{attrs:{label:e.$t("profile.notifications_slack_user")},model:{value:e.form.notifications_slack_userid,callback:function(a){e.$set(e.form,"notifications_slack_userid",a)},expression:"form.notifications_slack_userid"}}):e._e(),t("button",{class:{button:!0,"save-button":!0,"is-medium":!0,"is-loading":e.isSaveProfileLoading},on:{click:function(a){return e.saveProfile({form:e.form})}}},[e._v(" "+e._s(e.$t("profile.save.button"))+" ")]),t("p",{class:{error:!0,"is-hidden":!e.isSaveProfileLoadingError}},[e._v(" "+e._s(e.$t("profile.save.error"))+" ")]),t("h2",[e._v(" "+e._s(e.$t("profile.password_title"))+" ")]),t("text-field",{attrs:{label:e.$t("people.fields.old_password"),type:"password"},model:{value:e.passwordForm.oldPassword,callback:function(a){e.$set(e.passwordForm,"oldPassword",a)},expression:"passwordForm.oldPassword"}}),t("text-field",{attrs:{label:e.$t("people.fields.password"),type:"password"},model:{value:e.passwordForm.password,callback:function(a){e.$set(e.passwordForm,"password",a)},expression:"passwordForm.password"}}),t("text-field",{attrs:{label:e.$t("people.fields.password_2"),type:"password"},model:{value:e.passwordForm.password2,callback:function(a){e.$set(e.passwordForm,"password2",a)},expression:"passwordForm.password2"}}),t("button",{class:{button:!0,"save-button":!0,"is-medium":!0,"is-loading":e.changePassword.isLoading},on:{click:function(a){return e.passwordChangeRequested()}}},[e._v(" "+e._s(e.$t("profile.change_password.button"))+" ")]),t("p",{class:{"change-password-message":!0,error:!0,"is-hidden":e.changePassword.isValid}},[e._v(" "+e._s(e.$t("profile.change_password.unvalid"))+" ")]),t("p",{class:{"change-password-message":!0,success:!0,"is-hidden":!e.changePassword.isSuccess}},[e._v(" "+e._s(e.$t("profile.change_password.success"))+" ")]),t("p",{class:{"change-password-message":!0,error:!0,"is-hidden":!e.changePassword.isError}},[e._v(" "+e._s(e.$t("profile.change_password.error"))+" ")])],1)]),t("change-avatar-modal",{attrs:{active:e.changeAvatar.isModalShown,"is-loading":e.changeAvatar.isLoading,"is-error":e.changeAvatar.isLoadingError,"form-data":e.changeAvatar.formData,title:e.$t("profile.avatar.title")},on:{fileselected:e.selectFile,confirm:e.uploadAvatarFile,cancel:e.hideAvatarModal}})],1)},o=[],i=t("5530"),n=(t("4de4"),t("7f45")),r=t.n(n),l=t("2f62"),c=t("4636"),d=t("2b61"),f=t("eb8c"),u=t("7bf8"),p={name:"profile",components:{ComboboxBoolean:c["a"],PeopleAvatar:f["a"],ChangeAvatarModal:d["a"],TextField:u["a"]},data:function(){return{form:{first_name:"",last_name:"",notifications_enabled:"false",notifications_slack_enabled:"false",notifications_slack_userid:"",email:"",phone:"",timezone:"Europe/Paris",locale:"French"},passwordForm:{oldPassword:"",password:"",password2:""},changeAvatar:{isModalShown:!1,isLoading:!1,isLoadingError:!1,formData:null}}},watch:{user:function(){Object.assign(this.form,this.user)}},computed:Object(i["a"])(Object(i["a"])({},Object(l["c"])(["changePassword","isCurrentUserAdmin","isLdap","isSaveProfileLoading","isSaveProfileLoadingError","user"])),{},{departments:function(){return[{name:"Animation"},{name:"Modeling"}]},timezones:function(){return r.a.tz.names().filter((function(e){return e.indexOf("/")>0&&e.indexOf("Etc")<0}))}}),methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["saveProfile","checkNewPasswordValidityAndSave","uploadAvatar"])),{},{localeChanged:function(){this.$i18n.locale=this.form.locale.substring(0,2),"zh_Hans_CN"===this.form.locale?r.a.locale("zh_CN"):"zh_Hant_TW"===this.form.locale?r.a.locale("zh_TW"):r.a.locale(this.form.locale.substring(0,2))},passwordChangeRequested:function(){var e=this;this.checkNewPasswordValidityAndSave({form:this.passwordForm,callback:function(){e.passwordForm={oldPassword:"",password:"",password2:""}}})},selectFile:function(e){this.$store.commit("CHANGE_AVATAR_FILE",e)},uploadAvatarFile:function(){var e=this;this.changeAvatar.isLoading=!0,this.changeAvatar.isError=!1,this.uploadAvatar((function(a){a&&(e.changeAvatar.isError=!0),e.changeAvatar.isLoading=!1,e.$refs.avatar.reloadAvatar(),e.hideAvatarModal()}))},hideAvatarModal:function(){this.changeAvatar.isModalShown=!1},showAvatarModal:function(){this.changeAvatar.isModalShown=!0}}),mounted:function(){this.form=Object.assign(this.form,this.user),this.form.notifications_enabled=this.form.notifications_enabled?"true":"false",this.form.notifications_slack_enabled=this.form.notifications_slack_enabled?"true":"false"},metaInfo:function(){return{title:"".concat(this.$t("profile.title")," - Kitsu")}}},m=p,v=(t("3adc3"),t("0c7c")),_=Object(v["a"])(m,s,o,!1,null,"534565ea",null);a["default"]=_.exports},6810:function(e,a,t){"use strict";t("8d44")},"8d44":function(e,a,t){},d962:function(e,a,t){}}]);
//# sourceMappingURL=chunk-168e5358.02dbf4b8.js.map