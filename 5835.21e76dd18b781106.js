"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5835],{5835:(S,d,i)=>{i.r(d),i.d(d,{HomePageModule:()=>Z});var h=i(6895),_=i(4719),p=i(5616),s=i(8359),e=i(6738),f=i(5861),v=i(591);class P{}var y=i(2982);let k=(()=>{class o{constructor(a){var n=this;this.networkService=a,this.authState=new v.X(null),this.init=t=>new Promise((l,r)=>{try{this.loadScript("GOOGLE","https://accounts.google.com/gsi/client",()=>{var g;google.accounts.id.initialize({client_id:t.client_id,auto_select:!!t.auto_select&&t.auto_select,login_uri:t.login_uri,native_callback:t.native_callback,cancel_on_tap_outside:!t.cancel_on_tap_outside||t.cancel_on_tap_outside,prompt_parent_id:t.prompt_parent_id,nonce:t.nonce,context:t.context?t.context:"signin",state_cookie_domain:t.state_cookie_domain,ux_mode:t.ux_mode?t.ux_mode:"popup",allowed_parent_origin:t.allowed_parent_origin,intermediate_iframe_close_callback:t.intermediate_iframe_close_callback,itp_support:!!t.itp_support&&t.itp_support,callback:(g=(0,f.Z)(function*(u){console.log(u);const m=yield n.networkService.googleAuthentication({idToken:u.credential});console.log(m)}),function(m){return g.apply(this,arguments)})}),l()})}catch(g){r(g)}})}loadScript(a,n,t,l=null){if(typeof document<"u"&&!document.getElementById(a)){let r=document.createElement("script");r.async=!0,r.src=n,r.onload=t,l||(l=document.head),l.appendChild(r)}}renderButton(a,n){console.log(a),google.accounts.id.renderButton(a,{type:n.type?n.type:"standard",theme:n.theme?n.theme:"outline",size:n.size?n.size:"large",text:n.text?n.text:"signin_with",shape:n.shape?n.shape:"rectangular",logo_alignment:n.logo_alignment?n.logo_alignment:"left",width:n.width,locale:n.locale})}createSocialUser(a){console.log(a);const n=new P;n.idToken=a;const t=this.decodeJwt(a);return n.id=t.sub,n.name=t.name,n.email=t.email,n.photoUrl=t.picture,n.firstName=t.given_name,n.lastName=t.family_name,n}decodeJwt(a){const t=a.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),l=decodeURIComponent(window.atob(t).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(l)}}return o.\u0275fac=function(a){return new(a||o)(e.LFG(y.S))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const b=["signinbutton"],w=[{path:"",component:(()=>{class o{constructor(a){this.authService=a}ngAfterViewInit(){console.log(this.signInButton),this.authService.init({client_id:"934173952337-ejc5hhli75b4vmghqjjc6jiufomptit2.apps.googleusercontent.com",auto_select:!0,itp_support:!0,login_uri:"https://api.postobarato.tk/googleauth/"}).then(()=>{this.authService.renderButton(this.signInButton.nativeElement,{type:"standard",shape:"pill",locale:"pt-BR"})})}soon(){}signout(){}hardsignout(){}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(k))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],viewQuery:function(a,n){if(1&a&&e.Gf(b,5),2&a){let t;e.iGM(t=e.CRH())&&(n.signInButton=t.first)}},decls:27,vars:0,consts:[[1,"main"],["src","assets/map-background.png",1,"backdrop"],[1,"title","ion-text-center"],[1,"sign-in"],["signinbutton",""],["routerLink","/map"],[1,"note"],[3,"click"],[1,"store-buttons"],["src","assets/google-play.png",1,"badge",3,"click"],["src","assets/app-store.svg",1,"badge","apple-badge",3,"click"],[1,"credits","ion-text-center"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div",2)(3,"h1"),e._uU(4,"PostoBarato"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"Sua comunidade de pre\xe7os de combust\xedveis"),e.qZA()(),e.TgZ(7,"div",3),e._UZ(8,"div",null,4),e.TgZ(10,"p")(11,"a",5),e._uU(12," Entrar sem logar "),e.qZA()(),e.TgZ(13,"p",6),e._uU(14," (N\xe3o \xe9 poss\xedvel cadastrar, apenas consultar) "),e.qZA(),e.TgZ(15,"button",7),e.NdJ("click",function(){return n.signout()}),e._uU(16,"Sign out"),e.qZA(),e.TgZ(17,"button",7),e.NdJ("click",function(){return n.hardsignout()}),e._uU(18,"Hard Sign out"),e.qZA()(),e.TgZ(19,"div",8)(20,"img",9),e.NdJ("click",function(){return n.soon()}),e.qZA(),e.TgZ(21,"img",10),e.NdJ("click",function(){return n.soon()}),e.qZA()(),e.TgZ(22,"div",11)(23,"p"),e._uU(24," Google Play e o logotipo do Google Play s\xe3o marcas registradas da Google LLC. "),e.qZA(),e.TgZ(25,"p"),e._uU(26," App Store e o logotipo da Apple s\xe3o marcas registradas da Apple Inc. "),e.qZA()()())},dependencies:[p.Fo,s.yS],styles:[".main[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;overflow:hidden;position:relative}.backdrop[_ngcontent-%COMP%]{position:absolute;left:0;top:0;opacity:.6;max-width:unset;margin-left:50%;transform:translate(-50%)}.title[_ngcontent-%COMP%]{position:relative;width:100%;color:#215a60;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.sign-in[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;position:relative;-webkit-backdrop-filter:brightness(.5);backdrop-filter:brightness(.5);width:100%;padding:15px}.sign-in[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}asl-google-signin-button[_ngcontent-%COMP%]{margin-bottom:15px}.note[_ngcontent-%COMP%]{color:var(--ion-text-color);font-size:smaller}.store-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;padding:10px;position:relative}.badge[_ngcontent-%COMP%]{max-width:50%;height:auto}.apple-badge[_ngcontent-%COMP%]{padding:2%;width:100%}.credits[_ngcontent-%COMP%]{position:relative;width:100%;padding:0;font-size:9px;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}"]}),o})()}];let x=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.Bz.forChild(w),s.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.ez,_.u5,p.Pc,x]}),o})()}}]);