"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[797],{160:function(t,e,r){r.d(e,{IQ:function(){return o},Jh:function(){return p},Pg:function(){return i},XT:function(){return u},gy:function(){return f}});var n=r(861),a=r(757),c=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"e46f406ff40897ad9456c1375654d5d9"};var u=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("trending/all/day");case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/search/movie",{params:{query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},797:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(87),i=r(689),o=r(160),p=r(791),f={list:"cast_list__dKtzs",item:"cast_item__FkLJ9",collapse:"cast_collapse__AtOzo",name:"cast_name__wcjgu"},l=r(184),d=function(){var t=(0,p.useState)({}),e=(0,a.Z)(t,2),r=e[0],c=e[1],d=(0,p.useState)(!1),h=(0,a.Z)(d,2),m=h[0],v=h[1],x=(0,i.UO)().id;return(0,p.useEffect)((function(){function t(){return(t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.IQ)(x);case 2:e=t.sent,c(e),v(!0),console.log(e);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[x]),(0,l.jsxs)("div",{children:[(0,l.jsx)(u.rU,{to:"/movies/".concat(x),children:(0,l.jsx)("button",{className:f.collapse,children:"Collapse"})}),!m&&(0,l.jsx)("h1",{children:"Loading"}),m&&(0,l.jsx)("div",{children:(0,l.jsx)("ul",{className:f.list,children:r.cast.map((function(t){var e=t.id,r=t.name,n=t.character,a=t.profile_path;return(0,l.jsxs)("li",{className:f.item,children:[(0,l.jsx)("img",{className:f.img,src:"https://image.tmdb.org/t/p/w780/".concat(a),alt:r,height:"180"}),(0,l.jsx)("p",{className:f.name,children:r}),(0,l.jsxs)("p",{className:f.hero,children:["Character: ",n]})]},e)}))})})]})}}}]);
//# sourceMappingURL=797.c6500e07.chunk.js.map