(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function i(t){return s.p+"js/"+({notfound:"notfound"}[t]||t)+"."+{notfound:"59328281"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(p);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,a[1](c)}n[t]=void 0}};var p=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{}}},s=i,l=(a("5c0b"),a("2877")),c=a("6544"),p=a.n(c),u=a("7496"),f=a("a75b"),d=Object(l["a"])(s,n,o,!1,null,null,null),h=d.exports;p()(d,{VApp:u["a"],VContent:f["a"]});var m=a("9483");Object(m["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var v=a("8c4f"),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[r("v-btn",{staticClass:"mt-3",attrs:{fixed:"",left:"",fab:"",small:""},on:{click:function(e){t.showStatisticsDialog=!0}}},[r("v-icon",[t._v("mdi-menu")])],1),r("v-dialog",{attrs:{persistent:"","max-width":"1100"},model:{value:t.showStatisticsDialog,callback:function(e){t.showStatisticsDialog=e},expression:"showStatisticsDialog"}},[r("v-card",[r("v-btn",{staticStyle:{right:"0"},attrs:{absolute:"",right:"",text:"",small:""},on:{click:function(e){t.showStatisticsDialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),r("v-card-title",{staticClass:"dialog-title justify-center"},[t._v("NP@Mapillary 2020 - конкурс геотегованих фото природно-заповідного фонду України")]),r("v-card-text",[t._v("Статистика зібраних фотографій в період проведення конкурсу з 15.02.2020 по 31.04.2020 в межах ПЗФ України: "),r("v-data-table",{attrs:{items:t.statistics,headers:t.headers,"hide-default-footer":"","disable-pagination":"","disable-filtering":"","disable-sort":"","fixed-header":"",height:"300"},scopedSlots:t._u([{key:"item.name",fn:function(e){var a=e.item;return[r("span",{domProps:{innerHTML:t._s("<a class='links' target='_blank' href='https://www.mapillary.com/app/user/"+a.name+"'>"+a.name+"</a>")}})]}},{key:"item.paname",fn:function(e){var a=e.item;return[r("span",{domProps:{innerHTML:t._s(""+t.getPaName(a.paname))}})]}}])}),r("p",[r("small",[t._v(t._s(t.updated))])]),r("p",[t._v(" Конкурс геотегованих фотографій ПЗФ проводиться для об'єктів ПЗФ, які додані в проект "),r("a",{attrs:{href:"https://www.openstreetmap.org/"}},[t._v(" OpenStreetMap ")]),t._v(". Якщо Вам відомий об'єкт ПЗФ якого немає на карті - додайте його в проект OpenStreetMap використовуючи теги "),r("a",{attrs:{href:"https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dprotected_area"}},[t._v("'boundary=protected_area'")]),t._v(", "),r("a",{attrs:{href:"https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dnational_park"}},[t._v("'boundary=national_park'")]),t._v(" або напишіть на "),r("a",{attrs:{href:"https://forum.openstreetmap.org/viewtopic.php?id=66331"}},[t._v("сторінці конкурсу")]),t._v(". ")]),r("p",[t._v(" Для перегляду кордонів природно-заповідного фонду України та покриття геотегованих фотографій "),r("a",{attrs:{href:"https://www.mapillary.com/"}},[t._v("Mapillary")]),t._v(" закрийте поточне вікно статистики. Для перегляду зображень використовуйте кнопки переміщення у вікні перегляду фотографій або натисніть в будь-якому місці треку на карті ")]),r("p",[t._v(" Cторінка на сайті OpenStreetMap Wiki - "),r("a",{attrs:{href:"https://wiki.openstreetmap.org/wiki/Uk:NP@Mapillary_2019"}},[t._v("link")]),t._v(", на форумі OpenStreetMap - "),r("a",{attrs:{href:"https://forum.openstreetmap.org/viewtopic.php?id=66331"}},[t._v("link")])]),r("p",[t._v(" Telegram-канал - "),r("a",{attrs:{href:"https://t.me/mapillaryukraine"}},[t._v("https://t.me/mapillaryukraine")]),t._v(", Telegram-чат - "),r("a",{attrs:{href:"https://t.me/mapillaryukrainechat"}},[t._v("https://t.me/mapillaryukrainechat")]),t._v(", Facebook сторінка - "),r("a",{attrs:{href:"https://fb.me/mapillaryukraine"}},[t._v("https://fb.me/mapillaryukraine")])]),r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("a",{attrs:{href:"https://www.mapillary.com/",target:"_blank"}},[r("img",{attrs:{src:a("84ca"),alt:"Mapillary"}})]),r("a",{attrs:{href:"http://openstreetmap.org.ua/",target:"_blank"}},[r("img",{attrs:{src:a("b52c"),alt:"OpenStreetMap"}})]),t._v(" "),r("a",{attrs:{href:"http://scgis.org.ua/",target:"_blank"}},[r("img",{attrs:{src:a("67ff"),alt:"Conservation GIS"}})])])],1)],1)],1),r("div",{attrs:{id:"map"}})],1)},b=[],w=(a("99af"),a("d81d"),a("fb6a"),a("bc3a")),y=a.n(w),_=a("e192"),k=a.n(_),x={name:"MainMap",metaInfo:{title:"NP@Mapillary-2020"},data:function(){return{updated:"",map:{},showStatisticsDialog:!0,headers:[{text:"Mapillary профіль",value:"name"},{text:"Об'єкти ПЗФ України",value:"paname"},{text:"Кількість фото",value:"count"}],statistics:[]}},methods:{getPaName:function(t){var e="";for(var a in t){var r=a,n=t[a],o="way";parseInt(n)<0&&(o="relation",n=-1*parseInt(n));var i='<a class=\'links\' target="_blank" href="http://www.openstreetmap.org/'.concat(o,"/").concat(n,'">').concat(r,"</a>, ");e+=i}return e.slice(0,-2)}},mounted:function(){var t=this;k.a.accessToken="pk.eyJ1IjoiaGFzdCIsImEiOiJjamlvOHB3MTQwbGNlM3FwbXMwZDM3cGI0In0.pb3a1DBhKsxxUjSWFYVsoQ";var e=new k.a.Map({container:"map",style:"mapbox://styles/hast/ck9grr20x4pz91io7lsa9szdk",center:[31.198,48.642],zoom:6,hash:!0});e.addControl(new k.a.ScaleControl,"bottom-right"),e.addControl(new k.a.NavigationControl({}),"top-right"),e.on("load",(function(){e.addSource("photo_point",{type:"geojson",data:"photo_point.geojson"}),e.addLayer({id:"photo_point",type:"circle",source:"photo_point",layout:{},paint:{"circle-radius":{base:1,stops:[[10,1],[15,2],[17,3]]},"circle-color":"#345b37","circle-stroke-width":{base:1,stops:[[15,0],[16,1]]},"circle-stroke-color":"hsl(0, 0%, 98%)"}})})),this.map=e,y()({method:"get",url:"mapillary_data.json"}).then((function(e){t.statistics=e.data}),(function(t){throw console.log("error",t),t})).catch((function(t){throw console.log("cerror",t),t})),y()({method:"get",url:"upd.json"}).then((function(e){t.updated=e.data}),(function(t){throw console.log("error",t),t})).catch((function(t){throw console.log("cerror",t),t}))}},j=x,M=a("8336"),S=a("b0af"),O=a("99d9"),C=a("a523"),P=a("8fea"),T=a("169a"),D=a("132d"),V=Object(l["a"])(j,g,b,!1,null,null,null),I=V.exports;p()(V,{VBtn:M["a"],VCard:S["a"],VCardText:O["a"],VCardTitle:O["b"],VContainer:C["a"],VDataTable:P["a"],VDialog:T["a"],VIcon:D["a"]}),r["a"].use(v["a"]);var N=[{path:"/",name:"map",component:I},{path:"*",name:"notfound",component:function(){return a.e("notfound").then(a.bind(null,"9703"))}}],E=new v["a"]({mode:"history",base:"/",routes:N}),A=E,F=a("f309");r["a"].use(F["a"]);var L=new F["a"]({theme:{options:{customProperties:!0}}}),z=a("58ca");r["a"].use(z["a"]),r["a"].config.productionTip=!1,console.log("     💪 Production"),new r["a"]({router:A,vuetify:L,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("7694"),n=a.n(r);n.a},"67ff":function(t,e,a){t.exports=a.p+"img/scgis_logo.020d7e85.png"},7694:function(t,e,a){},"84ca":function(t,e,a){t.exports=a.p+"img/mapillary_logo.7bb67099.png"},b52c:function(t,e,a){t.exports=a.p+"img/osm_logo.de294499.png"}});
//# sourceMappingURL=app.e73c2547.js.map