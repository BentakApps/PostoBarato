"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1173],{1173:(L,b,u)=>{u.r(b),u.d(b,{AnpPageModule:()=>Y});var f=u(6895),_=u(4719),c=u(5616),v=u(8359),m=u(5861),t=u(6738),A=u(4742),x=u(2982),C=u(8261),P=u(4530),S=u(6533),T=u(9455);function N(o,p){if(1&o&&(t.TgZ(0,"ion-select-option",19),t._uU(1),t.qZA()),2&o){const n=p.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n," ")}}function M(o,p){if(1&o&&(t.TgZ(0,"ion-select-option",19),t._uU(1),t.qZA()),2&o){const n=p.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n," ")}}function w(o,p){1&o&&t._UZ(0,"app-db-station")}function U(o,p){if(1&o&&(t.TgZ(0,"div")(1,"div",54),t.YNc(2,w,1,0,"app-db-station",16),t.qZA()()),2&o){const n=p.index,r=t.oxw(5);t.xp6(1),t.Q6J("formGroupName",n),t.xp6(1),t.Q6J("ngIf",r.showModel)}}function q(o,p){if(1&o&&(t.TgZ(0,"div",51),t._uU(1," FROM DB: "),t.TgZ(2,"ion-list",52),t.YNc(3,U,3,2,"div",53),t.ALo(4,"toFormArray"),t.qZA()()),2&o){const n=t.oxw(2).$implicit;t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,1,n.get("DBStations")).controls)}}function k(o,p){if(1&o&&(t.TgZ(0,"div")(1,"div",54),t._UZ(2,"app-db-station"),t.qZA()()),2&o){const n=p.index;t.xp6(1),t.Q6J("formGroupName",n)}}function F(o,p){if(1&o){const n=t.EpF();t.TgZ(0,"div",55)(1,"div",6),t.NdJ("click",function(){t.CHM(n);const s=t.oxw(2).$implicit,d=t.oxw(2);return t.KtG(d.moveCamera(s.get("placesStations").get("lat").value,s.get("placesStations").get("lng").value))}),t._uU(2," FROM PLACES: "),t.qZA(),t.TgZ(3,"div",56)(4,"ion-grid",32)(5,"ion-row",33)(6,"ion-col",34)(7,"ion-label",9),t._uU(8,"geo_address: "),t.qZA(),t._UZ(9,"ion-input",57),t.qZA()(),t.TgZ(10,"ion-row",33)(11,"ion-col",34)(12,"ion-label",9),t._uU(13,"lat: "),t.qZA(),t._UZ(14,"ion-input",58),t.qZA(),t.TgZ(15,"ion-col",42)(16,"ion-label",9),t._uU(17,"lng: "),t.qZA(),t._UZ(18,"ion-input",59),t.qZA()()(),t.TgZ(19,"ion-list",60),t.YNc(20,k,3,1,"div",53),t.ALo(21,"toFormArray"),t.qZA()()()}if(2&o){const n=t.oxw(2).$implicit;t.xp6(20),t.Q6J("ngForOf",t.lcZ(21,1,n.get("placesStations").get("db_matches")).controls)}}function O(o,p){if(1&o&&(t.TgZ(0,"div",29)(1,"ion-list",30)(2,"ion-item",31)(3,"ion-grid",32)(4,"ion-row",33)(5,"ion-col",34)(6,"ion-label",9),t._uU(7,"busname: "),t.qZA(),t._UZ(8,"ion-input",35),t.qZA(),t.TgZ(9,"ion-col",36)(10,"ion-label",9),t._uU(11,"name: "),t.qZA(),t._UZ(12,"ion-input",37),t.qZA()(),t.TgZ(13,"ion-row",33)(14,"ion-col",34)(15,"ion-label",9),t._uU(16,"address: "),t.qZA(),t._UZ(17,"ion-input",38),t.qZA(),t.TgZ(18,"ion-col",36)(19,"ion-label",9),t._uU(20,"brand: "),t.qZA(),t._UZ(21,"ion-input",39),t.qZA()(),t.TgZ(22,"ion-row",33)(23,"ion-col",40)(24,"ion-label",9),t._uU(25,"route: "),t.qZA(),t._UZ(26,"ion-input",41),t.qZA(),t.TgZ(27,"ion-col",42)(28,"ion-label",9),t._uU(29,"number: "),t.qZA(),t._UZ(30,"ion-input",43),t.qZA(),t.TgZ(31,"ion-col",42)(32,"ion-label",9),t._uU(33,"complement: "),t.qZA(),t._UZ(34,"ion-input",44),t.qZA()(),t.TgZ(35,"ion-row",33)(36,"ion-col",34)(37,"ion-label",9),t._uU(38,"neighborhood: "),t.qZA(),t._UZ(39,"ion-input",45),t.qZA(),t.TgZ(40,"ion-col",36)(41,"ion-label",9),t._uU(42,"postal_code: "),t.qZA(),t._UZ(43,"ion-input",46),t.qZA()(),t.TgZ(44,"ion-row",33)(45,"ion-col",34)(46,"ion-label",9),t._uU(47,"city: "),t.qZA(),t._UZ(48,"ion-input",47),t.qZA(),t.TgZ(49,"ion-col",36)(50,"ion-label",9),t._uU(51,"state: "),t.qZA(),t._UZ(52,"ion-input",48),t.qZA()()()()(),t.YNc(53,q,5,3,"div",49),t.ALo(54,"toFormArray"),t.YNc(55,F,22,3,"div",50),t.qZA()),2&o){const n=t.oxw(),r=n.index,s=n.$implicit,d=t.oxw(2);t.Q6J("formGroupName",r),t.xp6(53),t.Q6J("ngIf",t.lcZ(54,3,s.get("DBStations")).controls.length>0),t.xp6(2),t.Q6J("ngIf",d.hasPlacesStations(s))}}function J(o,p){if(1&o&&(t.TgZ(0,"ion-item",27),t.YNc(1,O,56,5,"div",28),t.qZA()),2&o){const n=p.index,r=t.oxw(2);t.xp6(1),t.Q6J("ngIf",+r.page==n||""==r.page)}}function D(o,p){if(1&o){const n=t.EpF();t.TgZ(0,"div")(1,"div",20)(2,"ion-list",21),t.YNc(3,J,2,1,"ion-item",22),t.ALo(4,"toFormArray"),t.qZA(),t.TgZ(5,"ion-row",23)(6,"ion-button",24),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.getExcelStations())}),t._uU(7,"Reload"),t.qZA(),t.TgZ(8,"ion-button",25),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.getStations())}),t._uU(9,"Get stations"),t.qZA(),t.TgZ(10,"ion-button",25),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.applyPrices())}),t._uU(11,"Apply prices"),t.qZA(),t.TgZ(12,"ion-button",26),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.onSubmit())}),t._uU(13,"Submit"),t.qZA()()()()}if(2&o){const n=t.oxw();t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(2),t.Q6J("ngForOf",t.lcZ(4,2,n.form.get("stations")).controls)}}const Z=function(){return{size:"cover"}},G=[{path:"",component:(()=>{class o{constructor(n,r,s,d,h,y){var e=this;this.appService=n,this.networkService=r,this.mapService=s,this.stationService=d,this.fb=h,this.toastController=y,this.form=this.fb.group({stations:this.fb.array([])}),this.directory=[],this.cities=[],this.selectedFile="",this.selectedCity="",this.pageNumber=0,this.page="",this.moveCamera=(a,i)=>{this.lat=a,this.lng=i,this.mapService.map.animateCamera({target:{lat:this.lat,lng:this.lng}}),this.mapService.simpleMarker.remove(),this.mapService.addSimpleMarker(this.lat,this.lng)},this.deleteFile=(0,m.Z)(function*(){e.directory=(yield e.networkService.deleteFile(e.selectedFile)).data}),this.onFileChange=function(){var a=(0,m.Z)(function*(i){e.appService.showLoading(),e.selectedFile=i.detail.value,e.selectedFile&&(e.cities=(yield e.networkService.getCities(e.selectedFile)).data),e.appService.hideLoading()});return function(i){return a.apply(this,arguments)}}(),this.onFileUpload=function(){var a=(0,m.Z)(function*(i){e.appService.showLoading();const l=i.target.files[0],g=new FormData;g.append("file",l,l.name);const I=yield e.networkService.uploadExcel(g);e.directory=I.data,e.appService.hideLoading()});return function(i){return a.apply(this,arguments)}}(),this.onClickReset=a=>{a.target.value=""},this.onCityChange=function(){var a=(0,m.Z)(function*(i){e.selectedCity=i.detail.value,yield e.getExcelStations()});return function(i){return a.apply(this,arguments)}}(),this.getExcelStations=(0,m.Z)(function*(){e.appService.showLoading(),e.form=e.fb.group({stations:e.fb.array([])});try{const a=(yield e.networkService.getExcelStations(e.selectedFile,e.selectedCity)).data;for(let i of a){const l=e.fb.group({busname:[{value:i.busname,disabled:!0}],brand:[{value:i.brand,disabled:!0}],name:[{value:i.name,disabled:!0}],address:[{value:i.address,disabled:!0}],route:[{value:i.route,disabled:!0}],number:[{value:i.number,disabled:!0}],complement:[{value:i.complement,disabled:!0}],neighborhood:[{value:i.neighborhood,disabled:!0}],city:[{value:i.city,disabled:!0}],state:[{value:i.state,disabled:!0}],postal_code:[{value:i.cep,disabled:!0}],DBStations:e.getDBForm(i),placesStations:e.getPlacesForm(i)});e.form.get("stations").controls.push(l)}if(a.length>0){let i,l;e.pageNumber>a.length&&(e.pageNumber=a.length),a[e.pageNumber].DBData.length>0?(i=+a[e.pageNumber].DBData[0].lat,l=+a[e.pageNumber].DBData[0].lng):a[e.pageNumber].placesData?(i=+a[e.pageNumber].placesData.lat,l=+a[e.pageNumber].placesData.lng):(i=-15.800739,l=-47.861314),e.lat=i,e.lng=l,e.mapService.map||(yield e.mapService.createMap("map-canvas",i,l,"duplicates")),e.mapService.addSimpleMarker(i,l)}}catch(a){console.error(a),yield e.appService.errorAlert(a.response.data.error)}e.appService.hideLoading()}),this.getDBForm=a=>{const i=[];for(let l of a.DBData)i.push(this.fb.group({id:[{value:l.id,disabled:!0}],place_id:[l.place_id],name:[l.name],address:[l.address],route:[l.route],number:[l.number],neighborhood:[l.neighborhood],city:[l.city],state:[l.state],country:[l.country],postal_code:[l.postal_code],pano_id:[l.pano_id],heading:[l.heading],lat:[l.lat],lng:[l.lng],must_delete:[0],possible_duplicate:[l.possible_duplicate]}));return this.fb.array(i)},this.getPlacesForm=a=>{let i={};if(a.placesData){const l=[];for(let g of a.placesData.db_matches)l.push(this.fb.group({id:[{value:g.id,disabled:!0}],place_id:[g.place_id],name:[g.name],address:[g.address],route:[g.route],number:[g.number],neighborhood:[g.neighborhood],city:[g.city],state:[g.state],country:[g.country],postal_code:[g.postal_code],pano_id:[g.pano_id],heading:[g.heading],lat:[g.lat],lng:[g.lng],must_delete:[0],possible_duplicate:[g.possible_duplicate],distance:[{value:g.distance,disabled:!0}]}));i={geo_address:[{value:a.placesData.geo_address,disabled:!0}],lat:[{value:a.placesData.lat,disabled:!0}],lng:[{value:a.placesData.lng,disabled:!0}],db_matches:this.fb.array(l)}}return this.fb.group(i)},this.hasPlacesStations=a=>Object.keys(a.get("placesStations").controls).length>0,this.getStations=(0,m.Z)(function*(){yield e.stationService.getStations(e.lat,e.lng,e.lat,e.lng),yield(yield e.toastController.create({message:"Stations created",duration:1500,position:"bottom"})).present()}),this.previousPage=()=>{""==this.page?this.pageNumber=0:this.pageNumber>0&&this.pageNumber--,this.page=this.pageNumber.toString()},this.nextPage=()=>{""==this.page?this.pageNumber=0:this.pageNumber++,this.page=this.pageNumber.toString()},this.applyPrices=(0,m.Z)(function*(){yield e.networkService.applyPrices(e.selectedFile)})}ngOnInit(){var n=this;return(0,m.Z)(function*(){n.directory=(yield n.networkService.getDirectory()).data,n.showModel=!0})()}ngAfterViewInit(){}onSubmit(){var n=this;return(0,m.Z)(function*(){console.log(n.form);const r=[];for(let d of n.form.get("stations").controls){const h=d.get("DBStations");for(let a of h.controls){const i={};for(let l in a.controls)(a.get(l).dirty||"place_id"==l)&&(i[l]=a.get(l).value);Object.keys(i).length>1&&r.push(i)}const e=d.get("placesStations").get("db_matches");if(e)for(let a of e.controls){const i={};for(let l in a.controls)(a.get(l).dirty||"place_id"==l)&&(i[l]=a.get(l).value);Object.keys(i).length>1&&r.push(i)}}console.log(r);const s=yield n.networkService.postExceptions(r);console.log(s),yield n.networkService.applyExceptions(),yield n.getExcelStations()})()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(A.z),t.Y36(x.S),t.Y36(C.S),t.Y36(P.v),t.Y36(_.QS),t.Y36(c.yF))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-anp"]],decls:35,vars:9,consts:[["slot","start"],[1,"toolbar"],["interface","popover",3,"interfaceOptions","ionChange"],[3,"value",4,"ngFor","ngForOf"],["for","fileInput"],["type","file","id","fileInput",1,"ion-hide",3,"change","click"],[3,"click"],[1,"xycenter",2,"flex-direction","column"],[1,"ion-no-padding","xycenter"],[1,"station-label","ion-no-margin"],[1,"ion-no-margin",3,"ngModel","ngModelChange"],[1,"xycenter",2,"width","100px"],["size","small",1,"square-button",3,"click"],[1,"station-input",3,"ngModel","ngModelChange"],[1,"main"],["id","map-canvas",1,"map"],[4,"ngIf"],["id","footer"],["src","//www.profitabledisplayformat.com/watchnew?key=5016b984cb0dea604afd3a1eb085b274","width","320","height","50","frameborder","0","scrolling","no"],[3,"value"],[3,"formGroup"],["formArrayName","stations",1,"station-list"],["class","station-item",4,"ngFor","ngForOf"],[1,"ion-justify-content-between"],["color","warning",3,"click"],["color","secondary",3,"click"],["color","primary",3,"click"],[1,"station-item"],["class","fields-list",3,"formGroupName",4,"ngIf"],[1,"fields-list",3,"formGroupName"],[1,"fields-list"],[1,"excel-station-item"],[1,"ion-no-padding"],[1,"ion-no-padding","ion-justify-content-between"],[1,"ion-no-padding","ion-justify-content-start","ion-align-items-center"],["type","text","formControlName","busname",1,"station-input"],["size","4",1,"ion-no-padding","ion-justify-content-end","ion-align-items-center"],["type","text","formControlName","name",1,"station-input"],["type","text","formControlName","address",1,"station-input"],["type","text","formControlName","brand",1,"station-input"],["size","6",1,"ion-no-padding","ion-justify-content-start","ion-align-items-center"],["type","text","formControlName","route",1,"station-input"],[1,"ion-no-padding","ion-justify-content-end","ion-align-items-center"],["type","text","formControlName","number",1,"station-input"],["type","text","formControlName","complement",1,"station-input"],["type","text","formControlName","neighborhood",1,"station-input"],["type","text","formControlName","postal_code",1,"station-input"],["type","text","formControlName","city",1,"station-input"],["type","text","formControlName","state",1,"station-input"],["class","from-db",4,"ngIf"],["class","from-places",4,"ngIf"],[1,"from-db"],["formArrayName","DBStations"],[4,"ngFor","ngForOf"],[3,"formGroupName"],[1,"from-places"],["formGroupName","placesStations"],["type","text","formControlName","geo_address",1,"station-input"],["type","text","formControlName","lat",1,"station-input"],["type","text","formControlName","lng",1,"station-input"],["formArrayName","db_matches"]],template:function(n,r){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3," PostoBarato "),t.qZA(),t.TgZ(4,"ion-buttons",0),t._UZ(5,"ion-back-button"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"div",1)(8,"ion-select",2),t.NdJ("ionChange",function(d){return r.onFileChange(d)}),t.YNc(9,N,2,2,"ion-select-option",3),t.qZA(),t.TgZ(10,"ion-button")(11,"label",4),t._uU(12,"Upload"),t.qZA(),t.TgZ(13,"input",5),t.NdJ("change",function(d){return r.onFileUpload(d)})("click",function(d){return r.onClickReset(d)}),t.qZA()(),t.TgZ(14,"ion-button",6),t.NdJ("click",function(){return r.deleteFile()}),t.TgZ(15,"label"),t._uU(16," Delete "),t.qZA()(),t.TgZ(17,"div",7)(18,"div",8)(19,"ion-label",9),t._uU(20,"show db "),t.qZA(),t.TgZ(21,"ion-checkbox",10),t.NdJ("ngModelChange",function(d){return r.showModel=d}),t.qZA()(),t.TgZ(22,"div",11)(23,"ion-button",12),t.NdJ("click",function(){return r.previousPage()}),t._uU(24,"-"),t.qZA(),t.TgZ(25,"ion-input",13),t.NdJ("ngModelChange",function(d){return r.page=d}),t.qZA(),t.TgZ(26,"ion-button",12),t.NdJ("click",function(){return r.nextPage()}),t._uU(27,"+"),t.qZA()()(),t.TgZ(28,"ion-select",2),t.NdJ("ionChange",function(d){return r.onCityChange(d)}),t.YNc(29,M,2,2,"ion-select-option",3),t.qZA()(),t.TgZ(30,"div",14),t._UZ(31,"div",15),t.YNc(32,D,14,4,"div",16),t.qZA()(),t.TgZ(33,"ion-footer",17),t._UZ(34,"iframe",18),t.qZA()),2&n&&(t.xp6(8),t.Q6J("interfaceOptions",t.DdM(7,Z)),t.xp6(1),t.Q6J("ngForOf",r.directory),t.xp6(12),t.Q6J("ngModel",r.showModel),t.xp6(4),t.Q6J("ngModel",r.page),t.xp6(3),t.Q6J("interfaceOptions",t.DdM(8,Z)),t.xp6(1),t.Q6J("ngForOf",r.cities),t.xp6(3),t.Q6J("ngIf",!r.appService.isLoading))},dependencies:[f.sg,f.O5,_.JJ,_.JL,_.On,c.oU,c.YG,c.Sm,c.nz,c.wI,c.W2,c.fr,c.jY,c.Gu,c.pK,c.Ie,c.Q$,c.q_,c.Nd,c.t9,c.n0,c.wd,c.sr,c.w,c.QI,c.j9,c.cs,_.sg,_.u,_.x0,_.CE,S.b,T.X],styles:["ion-thumbnail[_ngcontent-%COMP%]{width:500px;height:100%}.main[_ngcontent-%COMP%]{display:flex;flex-direction:row}.map[_ngcontent-%COMP%]{width:500px;height:650px}.station-list[_ngcontent-%COMP%]{height:610px;overflow:scroll;width:100%}.fields-list[_ngcontent-%COMP%]{overflow:scroll;width:100%}.control-list[_ngcontent-%COMP%]{height:100%}.station-item[_ngcontent-%COMP%]{--padding-top:0;--padding-bottom:0;--min-height:auto}.excel-station-item[_ngcontent-%COMP%]{--padding-top:0;--padding-bottom:0;--min-height:auto;--background:darkblue}.from-db[_ngcontent-%COMP%]{background-color:green}.from-places[_ngcontent-%COMP%]{background-color:#ff0}.station-label[_ngcontent-%COMP%]{font-size:10px}.station-input[_ngcontent-%COMP%]{--padding-top:0;--padding-bottom:0;--placeholder-opacity:1;font-size:14px}ion-col[_ngcontent-%COMP%]{display:flex;flex-direction:row}.toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between}ion-select[_ngcontent-%COMP%]{flex-grow:1}.wider-popover[_ngcontent-%COMP%]   .popover-content[_ngcontent-%COMP%]{width:100%}label[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;padding-right:15.4px;padding-left:15.4px}ion-button[_ngcontent-%COMP%]{--padding-start:0;--padding-end:0}.square-button[_ngcontent-%COMP%]{height:18px;width:18px}"]}),o})()}];let B=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[v.Bz.forChild(G),v.Bz]}),o})();var Q=u(9),j=u(5503);let Y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.ez,_.u5,c.Pc,B,_.UX,Q.B,j.D]}),o})()}}]);