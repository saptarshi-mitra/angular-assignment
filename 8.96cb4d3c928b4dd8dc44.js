(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{JB9C:function(i,t,e){"use strict";e.r(t),e.d(t,"HomepageModule",(function(){return h}));var n=e("ofXK"),a=e("tyNb"),c=e("fXoL"),b=e("GR6g");function o(i,t){if(1&i&&(c.Kb(0,"div",5),c.Kb(1,"button",6),c.Ub(),c.Kb(2,"svg",7),c.Ib(3,"path",8),c.Jb(),c.ic(4,"\xa0Cart "),c.Tb(),c.Kb(5,"span",9),c.ic(6),c.Jb(),c.Jb(),c.Jb()),2&i){const i=c.Vb();c.xb(6),c.jc(i.noOfItems)}}function r(i,t){1&i&&(c.Kb(0,"div",10),c.ic(1," Please wait while we fetch awesome deals... "),c.Jb())}function s(i,t){1&i&&(c.Kb(0,"div",11),c.ic(1," Please wait while we fetch awesome deals... "),c.Jb())}function l(i,t){if(1&i&&(c.Kb(0,"ul"),c.Kb(1,"li"),c.ic(2),c.Jb(),c.Jb()),2&i){const i=t.$implicit;c.xb(2),c.jc(i)}}function d(i,t){1&i&&c.Ib(0,"img",32)}function m(i,t){1&i&&(c.Kb(0,"p"),c.ic(1,"No Cost EMI"),c.Jb())}const g=function(i){return["/home/item",i]};function p(i,t){if(1&i&&(c.Kb(0,"div",12),c.Kb(1,"div",13),c.Kb(2,"div",14),c.Kb(3,"div",15),c.Ib(4,"img",16),c.Jb(),c.Kb(5,"div",17),c.Ib(6,"input",18),c.Kb(7,"label",19),c.ic(8,"Add to Compare"),c.Jb(),c.Jb(),c.Jb(),c.Kb(9,"div",20),c.Kb(10,"div",21),c.Kb(11,"h5",22),c.Kb(12,"a",23),c.ic(13),c.Jb(),c.Jb(),c.Kb(14,"p"),c.Kb(15,"span",24),c.ic(16),c.Ib(17,"ion-icon",25),c.Jb(),c.ic(18),c.Jb(),c.gc(19,l,3,1,"ul",26),c.Jb(),c.Jb(),c.Kb(20,"div",27),c.Kb(21,"div",28),c.Kb(22,"span",29),c.ic(23),c.Jb(),c.ic(24,"\xa0"),c.gc(25,d,1,0,"img",30),c.gc(26,m,2,0,"p",31),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&i){const i=t.$implicit;c.xb(4),c.Zb("src",i.img,c.ec),c.Zb("alt",i.details.name),c.xb(8),c.Yb("routerLink",c.ac(11,g,i.id)),c.xb(1),c.jc(i.details.name),c.xb(3),c.jc(i.details.rating),c.xb(2),c.lc("\xa0",i.details.totalRating," Ratings & ",i.details.review," Reviews"),c.xb(1),c.Yb("ngForOf",i.details.description),c.xb(4),c.kc("\u20b9",i.price,""),c.xb(2),c.Yb("ngIf",i.isFlipkartAssured),c.xb(1),c.Yb("ngIf",i.offers.noCostEMI)}}const f=[{path:"",component:(()=>{class i{constructor(i){this._service=i}ngOnInit(){this._service.getMobiles().subscribe(i=>this.mobiles=i),this._service.castCart.subscribe(i=>this.cart=i),this.noOfItems=this.cart.reduce((i,t)=>i+t.qty,0)}}return i.\u0275fac=function(t){return new(t||i)(c.Hb(b.a))},i.\u0275cmp=c.Bb({type:i,selectors:[["app-homepage"]],decls:5,vars:4,consts:[[1,"container"],["class","mb-3 text-right",4,"ngIf"],["class","container animate__animated animate__flipInX loading",4,"ngIf"],["class","container animate__animated animate__flipOutY loading",4,"ngIf"],["class","card mb-12 p-3",4,"ngFor","ngForOf"],[1,"mb-3","text-right"],["type","button","routerLink","/home/cart",1,"btn","btn-primary"],["width","1em","height","1em","viewBox","0 0 16 16","fill","currentColor","xmlns","http://www.w3.org/2000/svg",1,"bi","bi-cart3"],["fill-rule","evenodd","d","M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"],[1,"badge","badge-light"],[1,"container","animate__animated","animate__flipInX","loading"],[1,"container","animate__animated","animate__flipOutY","loading"],[1,"card","mb-12","p-3"],[1,"row","no-gutters"],[1,"col-md-2"],[1,"text-center"],[1,"card-img","card-image","mx-auto","mobileImage",3,"src","alt"],[1,"compare"],["type","checkbox","name","check"],["for","check"],[1,"col-md-7"],[1,"card-body"],[1,"card-title"],[3,"routerLink"],[1,"badge","badge-success"],["name","star"],[4,"ngFor","ngForOf"],[1,"col-md-2","pt-3"],[1,"card-text"],[1,"price"],["src","https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png","height","22px","width","80px",4,"ngIf"],[4,"ngIf"],["src","https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png","height","22px","width","80px"]],template:function(i,t){1&i&&(c.Kb(0,"div",0),c.gc(1,o,7,1,"div",1),c.gc(2,r,2,0,"div",2),c.gc(3,s,2,0,"div",3),c.gc(4,p,27,13,"div",4),c.Jb()),2&i&&(c.xb(1),c.Yb("ngIf",t.cart.length>0),c.xb(1),c.Yb("ngIf",!t.mobiles),c.xb(1),c.Yb("ngIf",t.mobiles),c.xb(1),c.Yb("ngForOf",t.mobiles))},directives:[n.k,n.j,a.b,a.c],styles:[""]}),i})()}];let u=(()=>{class i{}return i.\u0275mod=c.Fb({type:i}),i.\u0275inj=c.Eb({factory:function(t){return new(t||i)},imports:[[a.d.forChild(f)],a.d]}),i})(),h=(()=>{class i{}return i.\u0275mod=c.Fb({type:i}),i.\u0275inj=c.Eb({factory:function(t){return new(t||i)},imports:[[n.b,u]]}),i})()}}]);