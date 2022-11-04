"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6303],{6303:(b,d,c)=>{c.r(d),c.d(d,{HomePageModule:()=>T});var m=c(6895),h=c(4719),u=c(5616),s=c(8359),g=c(5861),t=c(6738),f=c(591),p=c(2982);let _=(()=>{class n{constructor(e){var o=this;this.networkService=e,this.authState=new f.X(null),this.decodedToken={},this.isLoggedIn=(0,g.Z)(function*(){if(console.log(o.decodedToken),console.log(o.decodedToken.exp),console.log((new Date).getTime()/1e3),o.decodedToken.exp<(new Date).getTime()/1e3)return console.log("TRUE"),!0;try{const i=yield o.networkService.refreshToken();return console.log(i),o.setToken(i),!0}catch{return!1}}),this.isTokenNotExpired=()=>this.decodedToken.exp<(new Date).getTime(),this.setToken=i=>{console.log(i),this.idToken=i,this.decodedToken=this.decodeJwt(i)}}decodeJwt(e){const i=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(window.atob(i).split("").map(function(l){return"%"+("00"+l.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(r)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(p.S))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),v=(()=>{class n{constructor(){this.init=e=>new Promise((o,i)=>{try{this.loadScript("GOOGLE","https://accounts.google.com/gsi/client",()=>{google.accounts.id.initialize({client_id:e.client_id,auto_select:!!e.auto_select&&e.auto_select,login_uri:e.login_uri,native_callback:e.native_callback,cancel_on_tap_outside:!e.cancel_on_tap_outside||e.cancel_on_tap_outside,prompt_parent_id:e.prompt_parent_id,nonce:e.nonce,context:e.context?e.context:"signin",state_cookie_domain:e.state_cookie_domain,ux_mode:e.ux_mode?e.ux_mode:"popup",allowed_parent_origin:e.allowed_parent_origin,intermediate_iframe_close_callback:e.intermediate_iframe_close_callback,itp_support:!!e.itp_support&&e.itp_support,callback:e.callback}),o()})}catch(r){i(r)}})}loadScript(e,o,i,r=null){if(typeof document<"u"&&!document.getElementById(e)){let l=document.createElement("script");l.async=!0,l.src=o,l.onload=i,r||(r=document.head),r.appendChild(l)}}renderButton(e,o){console.log(e),google.accounts.id.renderButton(e,{type:o.type?o.type:"standard",theme:o.theme?o.theme:"outline",size:o.size?o.size:"large",text:o.text?o.text:"signin_with",shape:o.shape?o.shape:"rectangular",logo_alignment:o.logo_alignment?o.logo_alignment:"left",width:o.width,locale:o.locale})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const k=["signinbutton"],y=[{path:"",component:(()=>{class n{constructor(e,o,i,r){this.authService=e,this.googleAuthService=o,this.networkService=i,this.router=r}ngAfterViewInit(){var e=this;return(0,g.Z)(function*(){var o;(yield e.authService.isLoggedIn())?(console.log("NAVIGATING"),e.router.navigate(["/map"])):e.googleAuthService.init({client_id:"934173952337-ejc5hhli75b4vmghqjjc6jiufomptit2.apps.googleusercontent.com",auto_select:!0,itp_support:!0,login_uri:"https://api.postobarato.tk/googleauth/",callback:(o=(0,g.Z)(function*(i){const l=(yield e.networkService.googleAuthentication({googleToken:i.credential})).data;e.authService.setToken(l)}),function(r){return o.apply(this,arguments)})}).then(()=>{e.googleAuthService.renderButton(e.signInButton.nativeElement,{type:"standard",shape:"pill",locale:"pt-BR"})})})()}soon(){}signout(){}hardsignout(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_),t.Y36(v),t.Y36(p.S),t.Y36(s.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],viewQuery:function(e,o){if(1&e&&t.Gf(k,5),2&e){let i;t.iGM(i=t.CRH())&&(o.signInButton=i.first)}},decls:27,vars:0,consts:[[1,"main"],["src","assets/map-background.png",1,"backdrop"],[1,"title","ion-text-center"],[1,"sign-in"],["signinbutton",""],["routerLink","/map"],[1,"note"],[3,"click"],[1,"store-buttons"],["src","assets/google-play.png",1,"badge",3,"click"],["src","assets/app-store.svg",1,"badge","apple-badge",3,"click"],[1,"credits","ion-text-center"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2)(3,"h1"),t._uU(4,"PostoBarato"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"Sua comunidade de pre\xe7os de combust\xedveis"),t.qZA()(),t.TgZ(7,"div",3),t._UZ(8,"div",null,4),t.TgZ(10,"p")(11,"a",5),t._uU(12," Entrar sem logar "),t.qZA()(),t.TgZ(13,"p",6),t._uU(14," (N\xe3o \xe9 poss\xedvel cadastrar, apenas consultar) "),t.qZA(),t.TgZ(15,"button",7),t.NdJ("click",function(){return o.signout()}),t._uU(16,"Sign out"),t.qZA(),t.TgZ(17,"button",7),t.NdJ("click",function(){return o.hardsignout()}),t._uU(18,"Hard Sign out"),t.qZA()(),t.TgZ(19,"div",8)(20,"img",9),t.NdJ("click",function(){return o.soon()}),t.qZA(),t.TgZ(21,"img",10),t.NdJ("click",function(){return o.soon()}),t.qZA()(),t.TgZ(22,"div",11)(23,"p"),t._uU(24," Google Play e o logotipo do Google Play s\xe3o marcas registradas da Google LLC. "),t.qZA(),t.TgZ(25,"p"),t._uU(26," App Store e o logotipo da Apple s\xe3o marcas registradas da Apple Inc. "),t.qZA()()())},dependencies:[u.Fo,s.yS],styles:[".main[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;overflow:hidden;position:relative}.backdrop[_ngcontent-%COMP%]{position:absolute;left:0;top:0;opacity:.6;max-width:unset;margin-left:50%;transform:translate(-50%)}.title[_ngcontent-%COMP%]{position:relative;width:100%;color:#215a60;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.sign-in[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;position:relative;-webkit-backdrop-filter:brightness(.5);backdrop-filter:brightness(.5);width:100%;padding:15px}.sign-in[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}asl-google-signin-button[_ngcontent-%COMP%]{margin-bottom:15px}.note[_ngcontent-%COMP%]{color:var(--ion-text-color);font-size:smaller}.store-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;padding:10px;position:relative}.badge[_ngcontent-%COMP%]{max-width:50%;height:auto}.apple-badge[_ngcontent-%COMP%]{padding:2%;width:100%}.credits[_ngcontent-%COMP%]{position:relative;width:100%;padding:0;font-size:9px;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}"]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(y),s.Bz]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.ez,h.u5,u.Pc,P]}),n})()}}]);