"use strict";(self.webpackChunkbreaking_bad_app=self.webpackChunkbreaking_bad_app||[]).push([[671],{2695:function(t,n,e){e.d(n,{Z:function(){return f}});var r,a=e(4132),i=e(9439),c=e(2791),s=new WeakMap,o=function(t){t.forEach((function(t){if(s.has(t.target)){var n=s.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(r.unobserve(t.target),s.delete(t.target),n())}}))},u=function(){return void 0===r&&(r=new IntersectionObserver(o,{rootMargin:"100px",threshold:"0.15"})),r},l=e(184),d=function(t){var n,e,r=t.url,a=t.thumb,o=t.width,d=t.height,h=t.customClass,f=void 0===h?"":h,x=t.title,m=void 0===x?"Element image":x,g=(0,c.useState)(!1),p=(0,i.Z)(g,2),v=p[0],j=p[1],b=(0,c.useState)(!1),w=(0,i.Z)(b,2),Z=w[0],N=w[1],k=(0,c.useRef)();n=k,e=function(){N(!0)},(0,c.useEffect)((function(){var t=n.current,r=u();return s.set(t,e),r.observe(t),function(){s.delete(t),r.unobserve(t)}}),[e,n]);return(0,l.jsx)("div",{className:"image-container",ref:k,style:{paddingBottom:"".concat(d/o*100,"%"),width:"100%"},children:Z&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("img",{className:"image thumb ".concat(v?"isLoaded":""," ").concat(f),src:a,alt:m}),(0,l.jsx)("img",{className:"image ".concat(v?"isLoaded":""," ").concat(f),src:r,onLoad:function(){j(!0)},alt:m})]})})},h=e(5331),f=function(t){var n=t.character,e=t.useLabel,r=void 0===e?"M\xe1s":e;return(0,l.jsx)("div",{className:"col",children:(0,l.jsxs)("div",{className:"card",children:[(0,l.jsxs)("div",{className:"image-section",children:[(0,l.jsx)(d,{url:n.img,thumb:n.img,width:600,height:470,customClass:"card-img-top",title:n.name}),(0,l.jsx)("span",{className:"bottom-left",children:n.portrayed})]}),(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsx)("h5",{className:"card-title",children:n.name}),void 0===n.char_id?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"card-text truncate",children:n.description}),(0,l.jsx)(a.zx,{label:r,param:n.url,action:function(t){return(0,h.g)(t)}},"Wiki_".concat(n.id))]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"card-text",children:n.occupation.join(", ")}),(0,l.jsx)("p",{className:"card-text",children:(0,l.jsxs)("small",{className:"text-muted",children:[r," ",n.appearance.join(", ")]})})]})]})]})},n.char_id)}},8206:function(t,n,e){var r=e(1413),a=e(8175),i=e(184);n.Z=function(t){return(0,i.jsxs)(a.ZP,(0,r.Z)((0,r.Z)({speed:2,width:350,height:330,viewBox:"0 0 350 330",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},t),{},{children:[(0,i.jsx)("rect",{x:"7",y:"7",rx:"5",ry:"5",width:"332",height:"227"}),(0,i.jsx)("rect",{x:"11",y:"243",rx:"3",ry:"3",width:"139",height:"14"}),(0,i.jsx)("rect",{x:"11",y:"268",rx:"3",ry:"3",width:"242",height:"11"}),(0,i.jsx)("rect",{x:"11",y:"291",rx:"3",ry:"3",width:"87",height:"31"})]}))}},1356:function(t,n,e){var r=e(1174),a=e(184);n.Z=function(){return(0,a.jsx)("span",{className:"loading",children:(0,a.jsx)(r.FM,{size:454})})}},640:function(t,n,e){var r=e(184);n.Z=function(t){var n=t.title;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:n}),(0,r.jsx)("hr",{})]})}},4132:function(t,n,e){e.d(n,{vz:function(){return s},zx:function(){return o},CS:function(){return l.Z},gb:function(){return r.Z},V1:function(){return u.Z}});var r=e(1356),a=e(4467),i=e(1500);i.kL.register(i.uw,i.f$,i.ZL,i.Dx,i.u,i.De);var c=e(184),s=function(t){var n={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:t.titleChart}}},e={labels:t.labels,datasets:[{label:"Characters",data:t.dataValues,backgroundColor:"rgba(13, 202, 240, 1)"}]};return(0,c.jsx)(a.$Q,{options:n,data:e})},o=function(t){var n=t.label,e=t.param,r=t.action,a=t.btnClass,i=void 0===a?"btn btn-info btn-lg btn-block custom-button":a;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("button",{className:i,onClick:function(){return r(e)},children:n})})},u=e(640),l=e(8206)},5965:function(t,n,e){e.d(n,{_:function(){return c}});var r=e(5861),a=e(7757),i=e.n(a),c=function(){var t=(0,r.Z)(i().mark((function t(){var n=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch.apply(void 0,n).then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},5331:function(t,n,e){e.d(n,{g:function(){return r}});var r=function(t){return window.open(t,"_blank")}},9671:function(t,n,e){e.r(n);var r=e(3433),a=e(2695),i=e(4132),c=e(640),s=e(3168),o=e(2419),u=e(5965),l=e(9881),d=e(184);n.default=function(){var t=(0,s.$)("characters").t,n=(0,o.ZP)("".concat(l.iL).concat(l.Pn.CHARACTERS),u._).data;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.Z,{title:t("title")}),(0,d.jsxs)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:[!n&&(0,r.Z)(Array(6)).map((function(t,n){return(0,d.jsx)(i.CS,{},n)})),n&&n.map((function(n,e){return(0,d.jsx)(a.Z,{character:n,useLabel:t("appearance_seasons")},e)}))]})]})}}}]);
//# sourceMappingURL=671.e67d7fbe.chunk.js.map