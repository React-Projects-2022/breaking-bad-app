"use strict";(self.webpackChunkbreaking_bad_app=self.webpackChunkbreaking_bad_app||[]).push([[444],{8206:function(n,t,r){var i=r(1413),e=r(8175),o=r(184);t.Z=function(n){return(0,o.jsxs)(e.ZP,(0,i.Z)((0,i.Z)({speed:2,width:350,height:330,viewBox:"0 0 350 330",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},n),{},{children:[(0,o.jsx)("rect",{x:"7",y:"7",rx:"5",ry:"5",width:"332",height:"227"}),(0,o.jsx)("rect",{x:"11",y:"243",rx:"3",ry:"3",width:"139",height:"14"}),(0,o.jsx)("rect",{x:"11",y:"268",rx:"3",ry:"3",width:"242",height:"11"}),(0,o.jsx)("rect",{x:"11",y:"291",rx:"3",ry:"3",width:"87",height:"31"})]}))}},1356:function(n,t,r){var i=r(1174),e=r(184);t.Z=function(){return(0,e.jsx)("span",{className:"loading",children:(0,e.jsx)(i.FM,{size:454})})}},640:function(n,t,r){var i=r(184);t.Z=function(n){var t=n.title;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:t}),(0,i.jsx)("hr",{})]})}},4132:function(n,t,r){r.d(t,{vz:function(){return l},zx:function(){return s},CS:function(){return u.Z},gb:function(){return i.Z},V1:function(){return c.Z}});var i=r(1356),e=r(4467),o=r(1500);o.kL.register(o.uw,o.f$,o.ZL,o.Dx,o.u,o.De);var a=r(184),l=function(n){var t={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:n.titleChart}}},r={labels:n.labels,datasets:[{label:"Characters",data:n.dataValues,backgroundColor:"rgba(13, 202, 240, 1)"}]};return(0,a.jsx)(e.$Q,{options:t,data:r})},s=function(n){var t=n.label,r=n.param,i=n.action,e=n.btnClass,o=void 0===e?"btn btn-info btn-lg btn-block custom-button":e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{className:o,onClick:function(){return i(r)},children:t})})},c=r(640),u=r(8206)},900:function(n,t,r){r.d(t,{l:function(){return o}});var i,e=r(168),o=(0,r(7570).Ps)(i||(i=(0,e.Z)(["\n  mutation Mutation($character: ID!) {\n    addVote(character: $character) {\n      status\n      message\n    }\n  }\n"])))},9857:function(n,t,r){r.d(t,{P:function(){return l},j:function(){return s}});var i,e,o=r(168),a=r(7570),l=(0,a.Ps)(i||(i=(0,o.Z)(["\n  query PrincipalCharsVotes {\n    characters {\n      id\n      name\n      description\n      portrayed: actor\n      total_episodes\n      votes\n      url\n      img: photo\n    }\n  }\n"]))),s=(0,a.Ps)(e||(e=(0,o.Z)(["\n  query detailsCharacter($id: ID!){\n    character(id: $id) {\n      id\n      total_episodes\n      votes\n      name\n      actor\n      description\n      photo\n      url\n    }\n  }\n"])))},1886:function(n,t,r){r.d(t,{A:function(){return l},W:function(){return s}});var i,e,o=r(168),a=r(7570),l=(0,a.Ps)(i||(i=(0,o.Z)(["\n  subscription {\n    changeVotes {\n      id\n      name\n      votes\n    }\n  }\n"]))),s=(0,a.Ps)(e||(e=(0,o.Z)(["\n    subscription characterVoteCount($id: ID!) {\n        changeVote(id: $id) {\n            id\n            name\n            votes\n        }\n    }\n"])))},5444:function(n,t,r){r.r(t);var i=r(9439),e=r(2791),o=r(2336),a=r(4376),l=r(5450),s=r(4132),c=r(9857),u=r(1886),d=r(900),v=r(3504),f=r(3168),h=r(184);t.default=function(){var n=(0,f.$)("votes").t,t=(0,e.useState)([]),r=(0,i.Z)(t,2),b=r[0],p=r[1],x=(0,o.a)(c.P),g=x.loading,m=x.error,j=x.data,k=(0,a.D)(d.l,{update:function(n,t){console.log(t.data)}}),y=(0,i.Z)(k,1)[0];if((0,l.m)(u.A),(0,e.useEffect)((function(){j&&p(j.characters)}),[j]),g)return(0,h.jsx)(s.gb,{});if(m)return(0,h.jsx)("p",{children:"Error :("});var C=[],Z=[];g||b.map((function(n){return C.push(n.name),Z.push(n.votes),""}));var P=function(n){return y({variables:{character:n}})};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.V1,{title:n("title")}),!g&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-9",children:(0,h.jsx)(s.vz,{titleChart:n("vote_count_for_chart"),labels:C,dataValues:Z})}),(0,h.jsx)("div",{className:"col d-grid gap-2",children:b.map((function(n){return(0,h.jsx)(s.zx,{label:n.name,param:n.id,action:P},n.id)}))})]}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)("div",{className:"row",children:(0,h.jsx)("div",{className:"table-responsive",children:(0,h.jsxs)("table",{className:"table",children:[(0,h.jsx)("thead",{children:(0,h.jsx)("tr",{children:["name","actor","info","total_episodes","votes","details"].map((function(t,r){return(0,h.jsx)("th",{className:"text-center",children:n(t)},r)}))})}),(0,h.jsx)("tbody",{children:b.map((function(t){return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:t.name}),(0,h.jsx)("td",{children:t.portrayed}),(0,h.jsx)("td",{children:(0,h.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:"Wikipedia"})}),(0,h.jsx)("td",{children:t.total_episodes}),(0,h.jsx)("td",{children:t.votes}),(0,h.jsx)("td",{children:(0,h.jsx)(v.OL,{to:"/breaking-bad-app/details/".concat(t.id),className:"btn btn-info btn-lg btn-block custom-button",children:n("details")})})]},t.id)}))})]})})})]})]})}},4376:function(n,t,r){r.d(t,{D:function(){return u}});var i=r(9388),e=r(2791),o=r(3651),a=r(5970),l=r(2364),s=r(9484),c=r(5046);function u(n,t){var r=(0,c.x)(null===t||void 0===t?void 0:t.client);(0,l.Vp)(n,l.n_.Mutation);var u=(0,e.useState)({called:!1,loading:!1,client:r}),d=u[0],v=u[1],f=(0,e.useRef)({result:d,mutationId:0,isMounted:!0,client:r,mutation:n,options:t});Object.assign(f.current,{client:r,options:t,mutation:n});var h=(0,e.useCallback)((function(n){void 0===n&&(n={});var t=f.current,r=t.client,e=t.options,l=t.mutation,c=(0,i.pi)((0,i.pi)({},e),{mutation:l});f.current.result.loading||c.ignoreResults||v(f.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:r});var u=++f.current.mutationId,d=(0,o.J)(c,n);return r.mutate(d).then((function(t){var i,e,o=t.data,l=t.errors,h=l&&l.length>0?new s.c({graphQLErrors:l}):void 0;if(u===f.current.mutationId&&!d.ignoreResults){var b={called:!0,loading:!1,data:o,error:h,client:r};f.current.isMounted&&!(0,a.D)(f.current.result,b)&&v(f.current.result=b)}return null===(i=c.onCompleted)||void 0===i||i.call(c,t.data),null===(e=n.onCompleted)||void 0===e||e.call(n,t.data),t})).catch((function(t){var i,e;if(u===f.current.mutationId&&f.current.isMounted){var o={loading:!1,error:t,data:void 0,called:!0,client:r};(0,a.D)(f.current.result,o)||v(f.current.result=o)}if(c.onError||d.onError)return null===(i=c.onError)||void 0===i||i.call(c,t),null===(e=n.onError)||void 0===e||e.call(n,t),{data:void 0,errors:t};throw t}))}),[]),b=(0,e.useCallback)((function(){v({called:!1,loading:!1,client:r})}),[]);return(0,e.useEffect)((function(){return function(){f.current.isMounted=!1}}),[]),[h,(0,i.pi)({reset:b},d)]}},5450:function(n,t,r){r.d(t,{m:function(){return l}});r(6260);var i=r(2791),e=r(5970),o=r(2364),a=r(5046);function l(n,t){var r=(0,a.x)(null===t||void 0===t?void 0:t.client);(0,o.Vp)(n,o.n_.Subscription);var l=(0,i.useState)({loading:!(null===t||void 0===t?void 0:t.skip),error:void 0,data:void 0,variables:null===t||void 0===t?void 0:t.variables}),s=l[0],c=l[1],u=(0,i.useState)((function(){return(null===t||void 0===t?void 0:t.skip)?null:r.subscribe({query:n,variables:null===t||void 0===t?void 0:t.variables,fetchPolicy:null===t||void 0===t?void 0:t.fetchPolicy,context:null===t||void 0===t?void 0:t.context})})),d=u[0],v=u[1],f=(0,i.useRef)({client:r,subscription:n,options:t});return(0,i.useEffect)((function(){var i,o,a,l,s=null===t||void 0===t?void 0:t.shouldResubscribe;"function"===typeof s&&(s=!!s(t)),(null===t||void 0===t?void 0:t.skip)&&!(null===t||void 0===t?void 0:t.skip)!==!(null===(i=f.current.options)||void 0===i?void 0:i.skip)?(c({loading:!1,data:void 0,error:void 0,variables:null===t||void 0===t?void 0:t.variables}),v(null)):!1===s||r===f.current.client&&n===f.current.subscription&&(null===t||void 0===t?void 0:t.fetchPolicy)===(null===(o=f.current.options)||void 0===o?void 0:o.fetchPolicy)&&!(null===t||void 0===t?void 0:t.skip)===!(null===(a=f.current.options)||void 0===a?void 0:a.skip)&&(0,e.D)(null===t||void 0===t?void 0:t.variables,null===(l=f.current.options)||void 0===l?void 0:l.variables)||(c({loading:!0,data:void 0,error:void 0,variables:null===t||void 0===t?void 0:t.variables}),v(r.subscribe({query:n,variables:null===t||void 0===t?void 0:t.variables,fetchPolicy:null===t||void 0===t?void 0:t.fetchPolicy,context:null===t||void 0===t?void 0:t.context}))),Object.assign(f.current,{client:r,subscription:n,options:t})}),[r,n,t]),(0,i.useEffect)((function(){if(d){var n=d.subscribe({next:function(n){var i,e,o={loading:!1,data:n.data,error:void 0,variables:null===t||void 0===t?void 0:t.variables};c(o),null===(e=null===(i=f.current.options)||void 0===i?void 0:i.onSubscriptionData)||void 0===e||e.call(i,{client:r,subscriptionData:o})},error:function(n){c({loading:!1,data:void 0,error:n,variables:null===t||void 0===t?void 0:t.variables})},complete:function(){var n,t;null===(t=null===(n=f.current.options)||void 0===n?void 0:n.onSubscriptionComplete)||void 0===t||t.call(n)}});return function(){n.unsubscribe()}}}),[d]),s}}}]);
//# sourceMappingURL=444.ed85c686.chunk.js.map