import{a$ as i,b as a,n as r}from"./index-RVfaNk9n.js";const o={name:"reset-password",components:{MailIcon:i},data(){return{email:"",isLoading:!1,isError:!1,isSuccess:!1}},mounted(){this.email=this.$store.state.login.email,this.isLoading=!1,this.isSuccess=!1},methods:{...a(["resetPassword"]),confirmResetPassword(){this.isLoading=!0,this.isError=!1,this.isSuccess=!1,this.resetPassword(this.email).then(()=>{this.isLoading=!1,this.isSuccess=!0}).catch(()=>{this.isLoading=!1,this.isError=!0,this.isSuccess=!1})}},metaInfo(){return{title:this.$t("login.reset_password_title")}}};var l=function(){var s=this,t=s._self._c;return t("div",{staticClass:"hero is-fullheight"},[t("div",{staticClass:"container has-text-centered"},[t("div",{staticClass:"box has-text-left"},[t("div",{staticClass:"has-text-centered"},[t("h1",{staticClass:"title"},[s._v(" "+s._s(s.$t("login.reset_password_title"))+" ")])]),t("div",{staticClass:"field mt2"},[t("p",{staticClass:"control has-icon"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"},{name:"focus",rawName:"v-focus"}],staticClass:"input is-medium email",attrs:{type:"email",placeholder:s.$t("login.fields.email")},domProps:{value:s.email},on:{keyup:function(e){return!e.type.indexOf("key")&&s._k(e.keyCode,"enter",13,e.key,"Enter")?null:s.confirmResetPassword.apply(null,arguments)},input:function(e){e.target.composing||(s.email=e.target.value)}}}),t("span",{staticClass:"icon"},[t("mail-icon",{attrs:{size:20}})],1)])]),t("p",{staticClass:"control"},[s.isSuccess?s._e():t("a",{staticClass:"button main-button is-fullwidth",class:{"is-loading":s.isLoading},on:{click:s.confirmResetPassword}},[s._v(" "+s._s(s.$t("login.reset_password"))+" ")])]),s.isError?t("p",{staticClass:"error"},[s._v(" "+s._s(s.$t("login.reset_password_failed"))+" ")]):s._e(),s.isSuccess?t("p",{staticClass:"success"},[s._v(" "+s._s(s.$t("login.reset_password_succeed"))+" ")]):s._e(),t("p",{staticClass:"has-text-centered"},[t("router-link",{attrs:{to:{name:"login"}}},[s.isSuccess?t("span",[s._v(" "+s._s(s.$t("login.back_to_login"))+" ")]):t("span",[s._v(" "+s._s(s.$t("login.login_page"))+" ")])])],1)])])])},n=[],c=r(o,l,n,!1,null,"1bf38ec5");const m=c.exports;export{m as default};
//# sourceMappingURL=ResetPassword-Dvk1wVhC.js.map