"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2080],{2080:(k,c,n)=>{n.r(c),n.d(c,{HomePageModule:()=>y});var p=n(6895),d=n(4719),g=n(5616),s=n(8359),u=n(5861),e=n(6738),m=n(7556),f=n(1258),v=n(2982);const h=["signinbutton"],P=[{path:"",component:(()=>{class o{constructor(t,a,i,l){this.authService=t,this.googleAuthService=a,this.networkService=i,this.router=l}ionViewDidEnter(){var t=this;return(0,u.Z)(function*(){var a;console.log("IONVIEWDIDENTER"),(yield t.authService.isLoggedIn())?t.router.navigate(["/map"]):(yield t.googleAuthService.init({client_id:"934173952337-ejc5hhli75b4vmghqjjc6jiufomptit2.apps.googleusercontent.com",auto_select:!0,itp_support:!0,login_uri:"https://api.postobarato.tk/googleauth/",callback:(a=(0,u.Z)(function*(i){const M=(yield t.networkService.googleAuthentication({googleToken:i.credential})).data;t.authService.setToken(M),t.router.navigate(["/map"])}),function(l){return a.apply(this,arguments)})}),t.googleAuthService.renderButton(t.signInButton.nativeElement,{type:"standard",shape:"pill",locale:"pt-BR"}))})()}soon(){}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.e),e.Y36(f.M),e.Y36(v.S),e.Y36(s.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],viewQuery:function(t,a){if(1&t&&e.Gf(h,5),2&t){let i;e.iGM(i=e.CRH())&&(a.signInButton=i.first)}},decls:23,vars:0,consts:[[1,"main"],["src","assets/map-background.png",1,"backdrop"],[1,"title","ion-text-center"],[1,"sign-in"],["signinbutton",""],["routerLink","/map"],[1,"note"],[1,"store-buttons"],["src","assets/google-play.png",1,"badge",3,"click"],["src","assets/app-store.svg",1,"badge","apple-badge",3,"click"],[1,"credits","ion-text-center"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div",2)(3,"h1"),e._uU(4,"PostoBarato"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"Sua comunidade de pre\xe7os de combust\xedveis"),e.qZA()(),e.TgZ(7,"div",3),e._UZ(8,"div",null,4),e.TgZ(10,"p")(11,"a",5),e._uU(12," Entrar sem logar "),e.qZA()(),e.TgZ(13,"p",6),e._uU(14," (N\xe3o \xe9 poss\xedvel cadastrar, apenas consultar) "),e.qZA()(),e.TgZ(15,"div",7)(16,"img",8),e.NdJ("click",function(){return a.soon()}),e.qZA(),e.TgZ(17,"img",9),e.NdJ("click",function(){return a.soon()}),e.qZA()(),e.TgZ(18,"div",10)(19,"p"),e._uU(20," Google Play e o logotipo do Google Play s\xe3o marcas registradas da Google LLC. "),e.qZA(),e.TgZ(21,"p"),e._uU(22," App Store e o logotipo da Apple s\xe3o marcas registradas da Apple Inc. "),e.qZA()()())},dependencies:[g.Fo,s.yS],styles:[".main[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;overflow:hidden;position:relative}.backdrop[_ngcontent-%COMP%]{position:absolute;left:0;top:0;opacity:.6;max-width:unset;margin-left:50%;transform:translate(-50%)}.title[_ngcontent-%COMP%]{position:relative;width:100%;color:#215a60;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.sign-in[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;position:relative;-webkit-backdrop-filter:brightness(.5);backdrop-filter:brightness(.5);width:100%;padding:15px}.sign-in[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}asl-google-signin-button[_ngcontent-%COMP%]{margin-bottom:15px}.note[_ngcontent-%COMP%]{color:var(--ion-text-color);font-size:smaller}.store-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;padding:10px;position:relative}.badge[_ngcontent-%COMP%]{max-width:50%;height:auto}.apple-badge[_ngcontent-%COMP%]{padding:2%;width:100%}.credits[_ngcontent-%COMP%]{position:relative;width:100%;padding:0;font-size:9px;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}"]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.Bz.forChild(P),s.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.ez,d.u5,g.Pc,b]}),o})()}}]);