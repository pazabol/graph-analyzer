(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],f=0,d=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},r=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/project name/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"0fd5":function(e,t,s){var n={"./af":"8206","./af.js":"8206","./ar":"cdac","./ar-dz":"7f26","./ar-dz.js":"7f26","./ar-kw":"8e88","./ar-kw.js":"8e88","./ar-ly":"cd65","./ar-ly.js":"cd65","./ar-ma":"e8d6","./ar-ma.js":"e8d6","./ar-sa":"a284","./ar-sa.js":"a284","./ar-tn":"64f7","./ar-tn.js":"64f7","./ar.js":"cdac","./az":"b139","./az.js":"b139","./be":"98e2","./be.js":"98e2","./bg":"a1a5","./bg.js":"a1a5","./bm":"4d0d","./bm.js":"4d0d","./bn":"e8ae","./bn-bd":"5dd8","./bn-bd.js":"5dd8","./bn.js":"e8ae","./bo":"bcf2","./bo.js":"bcf2","./br":"69f1","./br.js":"69f1","./bs":"24d1","./bs.js":"24d1","./ca":"3507","./ca.js":"3507","./cs":"d15f","./cs.js":"d15f","./cv":"7bfe","./cv.js":"7bfe","./cy":"1d35","./cy.js":"1d35","./da":"a019","./da.js":"a019","./de":"0cfa","./de-at":"edea","./de-at.js":"edea","./de-ch":"9aae","./de-ch.js":"9aae","./de.js":"0cfa","./dv":"1722","./dv.js":"1722","./el":"5390","./el.js":"5390","./en-au":"dad9","./en-au.js":"dad9","./en-ca":"6f13","./en-ca.js":"6f13","./en-gb":"6267","./en-gb.js":"6267","./en-ie":"80b1","./en-ie.js":"80b1","./en-il":"ad38","./en-il.js":"ad38","./en-in":"eb60","./en-in.js":"eb60","./en-nz":"39db","./en-nz.js":"39db","./en-sg":"c30d","./en-sg.js":"c30d","./eo":"1a30","./eo.js":"1a30","./es":"48a3","./es-do":"f306","./es-do.js":"f306","./es-mx":"56d9","./es-mx.js":"56d9","./es-us":"60bf","./es-us.js":"60bf","./es.js":"48a3","./et":"f891","./et.js":"f891","./eu":"a403","./eu.js":"a403","./fa":"ce14","./fa.js":"ce14","./fi":"fc14","./fi.js":"fc14","./fil":"f46e","./fil.js":"f46e","./fo":"2bf2","./fo.js":"2bf2","./fr":"c1e8","./fr-ca":"50a2","./fr-ca.js":"50a2","./fr-ch":"b087","./fr-ch.js":"b087","./fr.js":"c1e8","./fy":"4665","./fy.js":"4665","./ga":"b396","./ga.js":"b396","./gd":"056c","./gd.js":"056c","./gl":"efde","./gl.js":"efde","./gom-deva":"12ea","./gom-deva.js":"12ea","./gom-latn":"8e2c","./gom-latn.js":"8e2c","./gu":"533d","./gu.js":"533d","./he":"7520","./he.js":"7520","./hi":"d2f3","./hi.js":"d2f3","./hr":"7e79","./hr.js":"7e79","./hu":"148f","./hu.js":"148f","./hy-am":"6711","./hy-am.js":"6711","./id":"2b10","./id.js":"2b10","./is":"1feb","./is.js":"1feb","./it":"1b21","./it-ch":"8d2c","./it-ch.js":"8d2c","./it.js":"1b21","./ja":"926e","./ja.js":"926e","./jv":"5a78","./jv.js":"5a78","./ka":"5975","./ka.js":"5975","./kk":"cc93","./kk.js":"cc93","./km":"66e1","./km.js":"66e1","./kn":"5421","./kn.js":"5421","./ko":"1297","./ko.js":"1297","./ku":"16f8","./ku.js":"16f8","./ky":"3df9","./ky.js":"3df9","./lb":"c124","./lb.js":"c124","./lo":"20a5","./lo.js":"20a5","./lt":"c14a","./lt.js":"c14a","./lv":"c553","./lv.js":"c553","./me":"ae25","./me.js":"ae25","./mi":"6f56","./mi.js":"6f56","./mk":"c8fc","./mk.js":"c8fc","./ml":"752d","./ml.js":"752d","./mn":"f09e","./mn.js":"f09e","./mr":"0a56","./mr.js":"0a56","./ms":"55b6","./ms-my":"a9e9","./ms-my.js":"a9e9","./ms.js":"55b6","./mt":"624b","./mt.js":"624b","./my":"e256","./my.js":"e256","./nb":"e1d5","./nb.js":"e1d5","./ne":"761a","./ne.js":"761a","./nl":"a0f2","./nl-be":"5cb2","./nl-be.js":"5cb2","./nl.js":"a0f2","./nn":"4fda","./nn.js":"4fda","./oc-lnc":"ec3d","./oc-lnc.js":"ec3d","./pa-in":"2f2f","./pa-in.js":"2f2f","./pl":"317f","./pl.js":"317f","./pt":"5553","./pt-br":"a9ab","./pt-br.js":"a9ab","./pt.js":"5553","./ro":"db12","./ro.js":"db12","./ru":"7aa4","./ru.js":"7aa4","./sd":"e87b","./sd.js":"e87b","./se":"a296","./se.js":"a296","./si":"51ec","./si.js":"51ec","./sk":"608b","./sk.js":"608b","./sl":"b367","./sl.js":"b367","./sq":"f68f","./sq.js":"f68f","./sr":"0991","./sr-cyrl":"c577","./sr-cyrl.js":"c577","./sr.js":"0991","./ss":"cf76","./ss.js":"cf76","./sv":"0153","./sv.js":"0153","./sw":"cb6f","./sw.js":"cb6f","./ta":"8bfa","./ta.js":"8bfa","./te":"668b","./te.js":"668b","./tet":"eae7","./tet.js":"eae7","./tg":"70b1","./tg.js":"70b1","./th":"7180","./th.js":"7180","./tk":"4912","./tk.js":"4912","./tl-ph":"f8bb","./tl-ph.js":"f8bb","./tlh":"b026","./tlh.js":"b026","./tr":"371d","./tr.js":"371d","./tzl":"c744","./tzl.js":"c744","./tzm":"787a","./tzm-latn":"71e0","./tzm-latn.js":"71e0","./tzm.js":"787a","./ug-cn":"6b5c","./ug-cn.js":"6b5c","./uk":"8c0c","./uk.js":"8c0c","./ur":"519e","./ur.js":"519e","./uz":"7982","./uz-latn":"3137","./uz-latn.js":"3137","./uz.js":"7982","./vi":"ae22","./vi.js":"ae22","./x-pseudo":"1129","./x-pseudo.js":"1129","./yo":"b4bf","./yo.js":"b4bf","./zh-cn":"fdc4","./zh-cn.js":"fdc4","./zh-hk":"747d","./zh-hk.js":"747d","./zh-mo":"fe39","./zh-mo.js":"fe39","./zh-tw":"d3e0","./zh-tw.js":"d3e0"};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="0fd5"},2904:function(e,t,s){"use strict";s("c831")},3337:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=s("4af9"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-page absolute h-full w-full flex flex-col items-center"},[s("div",{staticClass:"navigation-bar m-4"},[s("router-link",{attrs:{to:"/"}},[e._v(" [Graph analyzer] ")]),s("router-link",{attrs:{to:"/clock"}},[e._v(" [Clock] ")]),s("router-link",{attrs:{to:"/about"}},[e._v(" [About] ")])],1),s("router-view")],1)},o=[],i={name:"App"},c=i,l=(s("034f"),s("2877")),u=Object(l["a"])(c,r,o,!1,null,null,null),f=u.exports,d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"clock-wrapper h-full w-full flex flex-col justify-center items-center"},[s("div",{staticClass:"title text-4xl"},[e._v(" Welcome to Khoi's Grapher")]),s("div",{staticClass:"time"},[e._v(" "+e._s(e.currentTime)+" ")])])},h=[],p=s("4e22"),j=s.n(p),b={data:function(){return{currentTime:"Loading"}},mounted:function(){var e=this;setInterval((function(){e.currentTime=j()().format("HH:mm:ss")}),1e3)}},m=b,v=(s("2904"),Object(l["a"])(m,d,h,!1,null,null,null)),g=v.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"w-full flex flex-col items-center"},[s("p",{staticClass:"text-5xl font-semibold"},[e._v("Graph Analyzer")]),s("p",{staticClass:"text-xl mb-3"},[e._v("Author: Nguyen Phung Nhat Khoi")]),s("div",{staticClass:"flex flex-row align justify-around w-full p-4"},[s("div",{staticClass:"input-panel flex flex-col items-center"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],staticClass:"graph-input p-3 rounded",attrs:{placeholder:"Input your graph here",cols:"20",rows:"20"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}}),s("button",{staticClass:"grapher-btn",on:{click:function(t){return e.analyze(e.input)}}},[e._v(" Analyze ")])]),s("Graph",{attrs:{graph:e.graph}}),s("div",{staticClass:"graph-profile px-3"},[s("div",{staticClass:"grapher-title"},[e._v("Graph info")]),s("div",{staticClass:"graph-info-content"},[s("div",[e._v("Min. spanning tree: "+e._s(e.minST))]),s("div",[e._v("Max. spanning tree: "+e._s(e.maxST))]),s("div",[e._v("Eulerian path: ")]),s("div",[e._v("Hamiltonian walk: ")])]),s("div",{staticClass:"grapher-title mt-12"},[e._v("Shortest path query")]),s("br"),s("div",{staticClass:"shortest-path flex flex-col w-full"},[s("div",{staticClass:"w-full flex flex-row items-center mb-2"},[s("p",[e._v("Input 2 vertices: ")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.shortestPathQuery,expression:"shortestPathQuery"}],staticClass:"p-1 ml-2",attrs:{rows:"1",cols:"15",placeholder:"<start> <end>"},domProps:{value:e.shortestPathQuery},on:{input:function(t){t.target.composing||(e.shortestPathQuery=t.target.value)}}})]),s("div",[e._v(" Shortest path of ["+e._s(e.shortestPathQuery)+"]: "+e._s(e.shortestPath)+" ")]),s("div",{staticClass:"flex justify-center"},[s("button",{staticClass:"grapher-btn",on:{click:function(t){return e.findShortestPath()}}},[e._v(" Find shortest path ")])])])])],1)])},k=[],w=(s("cb29"),s("4160"),s("d81d"),s("d3b7"),s("ac1f"),s("1276"),s("159b"),s("ddb0"),s("3835")),_=s("2909"),x=function(e,t){return 0<=e&&e<t},z=function(e,t,s){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(!x(t,e.numNodes)||!x(s,e.numNodes))throw console.log("Invalid node",t,s,e.numNodes),"InputError: Node index out of range. Please check your node id again.";n?(e.adj[t].push([s,n]),e.adj[s].push([t,n]),e.edges.push({start:t,end:s,weight:n})):e.adj[t].push(s)},C=function(e){var t={},s=e.split(/ |\n/).map((function(e){return parseInt(e)}));if(t.numNodes=s[0],t.nodeList=Object(_["a"])(Array(t.numNodes).keys()),t.numEdges=s[1],t.isWeighted=1===s[2],t.edges=[],t.adj=[],t.nodeList.forEach((function(){t.adj.push([])})),t.isWeighted)for(var n=0;n<t.numEdges;n++)z(t,s[3*n+3]-1,s[3*n+4]-1,s[3*n+5]);else for(var a=0;a<t.numEdges;a++)t.edges.push({start:s[2*a+3],end:s[2*a+4]});return console.log(t),t},P=function(e,t){var s,n=e.numNodes,a=Array(n).fill(-1),r=function e(t){return a[t]<0?t:(a[t]=e(a[t]),a[t])},o=function(e,t){if(e=r(e),t=r(t),a[e]>a[t]){var s=[t,e];e=s[0],t=s[1]}a[t]===a[e]&&a[e]--,a[t]=e};s=t?function(e,t){return t.weight-e.weight}:function(e,t){return e.weight-t.weight},e.edges.sort(s);var i=0;return e.edges.forEach((function(e){var t=e.start,s=e.end;r(t)!=r(s)&&(o(t,s),i+=e.weight)})),i},O=function(e,t){var s,n=t.split(/ |\n/).map((function(e){return parseInt(e)})),a=n[0]-1,r=n[1]-1,o=Math.pow(10,9),i=Array(e.numNodes).fill(o),c=Array(e.numNodes).fill(!1);i[a]=0;var l=function(){var t=-1;if(e.nodeList.forEach((function(e){c[e]||(-1===t||i[e]<i[t])&&(t=e)})),-1===t)return"break";c[t]=!0,console.log("new pivot:",t,i,e.adj[t]),e.adj[t].forEach((function(e){var s=Object(w["a"])(e,2),n=s[0],a=s[1];i[n]=Math.min(i[n],i[t]+a)}))};for(s=0;s<e.numNodes-1;++s){var u=l();if("break"===u)break}return console.log("shortest path returning"),console.log("done DJ",a,i),i[r]===o?"[Graph Input Error] Two nodes are not connected":i[r]},E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"rounded border-2 h-auto p-2 bg-pink-100",attrs:{id:"network"}},[s("d3-network",{ref:"net",attrs:{"net-nodes":e.nodes,"net-links":e.links,options:e.options}})],1)},S=[],N=s("d575"),T=s.n(N),A={components:{D3Network:T.a},props:["graph"],created:function(){console.log("graph in Graph:",this.graph)},data:function(){return{nodeSize:20,canvas:!1,nodes:[],links:[]}},computed:{options:function(){return{force:4e3,size:{w:400,h:400},nodeSize:this.nodeSize,nodeLabels:!0,linkLabels:!0,canvas:this.canvas,linkWidth:3,fontSize:15}}},watch:{graph:function(e){this.nodes=e.nodeList.map((function(e){return{id:e,name:"[".concat(e+1,"]")}})),this.links=e.edges.map((function(e){return{sid:e.start,tid:e.end,name:e.weight}}))}}},I=A,L=(s("a9e3"),Object(l["a"])(I,E,S,!1,null,null,null)),M=L.exports,G={components:{Graph:M},data:function(){return{input:"",shortestPathQuery:"",minST:null,maxST:null,graph:{},shortestPath:null,graphNodes:[],graphLinks:[]}},methods:{analyze:function(e){try{this.graph=C(e)}catch(t){return void console.log(t)}this.minST=P(this.graph,!1),this.maxST=P(this.graph,!0)},findShortestPath:function(){this.shortestPath=O(this.graph,this.shortestPathQuery)}}},Q=G,$=(s("9314"),Object(l["a"])(Q,y,k,!1,null,null,null)),D=$.exports,W=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"grapher-title"},[e._v("About")]),s("ul",[s("li",[e._v(" All the vertices are numbered from 1. ")]),s("br"),s("li",[e._v(" Input format:")]),s("li",[e._v("The first line has 3 numbers: |V| |E| and 1/0 (weighted/unweighted)")]),s("li",[e._v(" Folling are |E| lines. Each line has 3 numbers: node1, node2 and weight")]),s("li",[e._v("(All number in one line are seperated by spaces)")])])])}],F={},H=F,J=Object(l["a"])(H,W,q,!1,null,null,null),K=J.exports,U=[{path:"/",component:D},{path:"/clock",component:g},{path:"/about",component:K}];s("def6");n["a"].config.productionTip=!1;var V=new a["a"]({mode:"history",routes:U});n["a"].use(a["a"]),new n["a"]({router:V,render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,s){},9314:function(e,t,s){"use strict";s("3337")},c831:function(e,t,s){},def6:function(e,t,s){}});
//# sourceMappingURL=app.585bf994.js.map