!function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(t,e){var r;r=function(){class t{static market(){return"ozon"}static on_category_change(e){if("ozon"===this.market())return document.querySelector(t.ozon.category.category).addEventListener("change",e)}static on_location_change(t){var e;if(this.location_listeners.push(t),e=()=>{var t,e,r,i;if(r=window.location.href,this.location_href!==r)for(t=0,e=(i=this.location_listeners).length;t<e;t++)(0,i[t])();return this.location_href=r},null==this.location_iid)return this.location_href=window.location.href,this.location_iid=setInterval(e,500)}static wait_for_location_change(){return new Promise((function(t,e){var r,i,n;return i=window.location.href,n=20,(r=function(){var o;return o=window.location.href,i!==window.location.href?t(o):--n>0?setTimeout(r,500):e("Timeout")})()}))}static wait(t){return new Promise((function(e,r){return setTimeout(e,t)}))}static goto_category(e){var r;if(console.log("Goto category "+e.name),"ozon"===this.market())return(r=document.querySelector(t.ozon.category.category)).value=e.name,r.dispatchEvent(new Event("input")),r.dispatchEvent(new Event("change")),document.querySelector(t.ozon_search_btn).click()}static get_current_category(){var e;if("ozon"===(e=this.market()))return{url:window.location.href,name:document.querySelector(t[e].category.category).value,status:"unknown"}}static get_page_type(){var t;if(t=window.location.href,"ozon"===this.market())switch(!1){case!/ru\/(search|category)\//.test(t):return"category";case!/ru\/(context|product)\//.test(t):return"product";default:return"unknown"}}static get_current_page(){var t;return"ozon"===this.market()&&("category"===(t={type:this.get_page_type(),url:window.location.href}).type&&(t={...t,category:this.get_current_category(),products:this.get_products()}),"product"===t.type&&(t={...t,product:this.get_product()})),t}static get_products(){var e,r,i,n,o,a,c,s,d,l,u;if("ozon"===(n=this.market()))return d=t[n].category,i=[...(e=function(t){return document.querySelectorAll(t)})(d.links)],r=i.map((function(t){return t.getAttribute("href")})),o=[...e(d.price1)].map((function(t){return t.innerText})),a=[...e(d.price2)].map((function(t){return t.innerText})),u=[...e(d.titles)].map((function(t){return t.innerText})),c=[...e(d.rating)].map((function(t){return t.style.width})),s=[...e(d.reviews)].map((function(t){return t.innerText})),l=[...e(d.sizes)].map((function(t){return[...t.querySelectorAll("div")].map(t=>t.innerText).join("/")})),i.map((function(t,e){return{link:i[e],href:r[e],price1:o[e],price2:a[e],title:u[e],rating:c[e],reviews:s[e],sizes:l[e]}}))}static get_product(){var e,r,i,n,o,a,c,s,d,l,u;return"ozon"===(i=this.market())&&(r=function(t){return document.querySelector(t)},n={breadcrumbs:[...(e=function(t){return document.querySelectorAll(t)})((u=t[i].product).breadcrumbs)].map(t=>t.innerText.trim()).join("/"),sizes_prod:[...e(u.sizes)].map(t=>t.innerText.trim()).join("/"),units:[...e(u.units)].map(t=>t.innerText.trim()).join("\n\n"),details:null!=(o=r(u.details))?o.innerText:void 0,prices_prod:null!=(a=r(u.prices))?a.innerText:void 0,description:null!=(c=r(u.description))?c.innerText:void 0,specs:null!=(s=r(u.specs))?s.innerText:void 0,tags:null!=(d=r(u.tags))?d.innerText:void 0,stars:null!=(l=r(u.stars))?l.innerText:void 0}),n}}return t.ozon_prod_sel="#__ozon > div > div.a4e4 > div.container.b6e3 > div:nth-child(2) > div:nth-child(2) > div.b6k2.b5y1 > div:nth-child(1) > div.widget-search-result-container.ao3 > div > div",t.ozon_search_sel="#__ozon > div > div.a4e4 > header > div.c5y1 > div.c5y5 > div > form",t.ozon_search_btn=t.ozon_search_sel+" div.b7j > div > button",t.ozon={category:{category:t.ozon_search_sel+" div.b7i4 > input",links:t.ozon_prod_sel+" > div > div.a0s9 > a.a0y9.tile-hover-target",price1:t.ozon_prod_sel+" > div > div.a0s9 > a.a0y9.tile-hover-target > div > span",price2:t.ozon_prod_sel+" > div > div.a0s9 > a.a0y9.tile-hover-target > div > div",titles:t.ozon_prod_sel+" > div > div.a0s9 > a.a2g0.tile-hover-target",rating:t.ozon_prod_sel+" > div > div.a0s9 > div.a1a9 > div > div",reviews:t.ozon_prod_sel+" > div > div.a0s9 > div.a1a9 > a",sizes:t.ozon_prod_sel+" > div > div.a0s9 > div.a2i2.common-aspect"},product:{breadcrumbs:"#__ozon > div > div.a4e4 > div:nth-child(5) > div:nth-child(1) > div > div.b0h8.b0i6.b0j0.b0j8.b5y1 > div > ol",sizes:"#__ozon > div > div.a4e4 > div:nth-child(5) > div:nth-child(3) > div.b5z.b5y > div:nth-child(1) > div:nth-child(2) > div > div.b0h8.b0i.b0j3.b0k0 > div:nth-child(1) > div > div:nth-child(1) > div.a0n3 > div",units:"#__ozon > div > div.a4e4 > div:nth-child(5) > div:nth-child(3) > div.b5z.b5y > div:nth-child(1) > div:nth-child(2) > div > div.b0h8.b0i.b0j3.b0k0 > div:nth-child(1) > div > div:nth-child(2) > div.a0n3 > div",details:"#__ozon > div > div.a4e4 > div:nth-child(5) > div:nth-child(3) > div.b5z.b5y > div:nth-child(1) > div:nth-child(2) > div > div.b0h8.b0i.b0j3.b0k0 > div:nth-child(2) > div > div > div > div",prices:"#__ozon > div > div.a4e4 > div:nth-child(5) > div:nth-child(3) > div.b5y4.b5y > div > div:nth-child(2) > div > div > div > div.b3d3 > div > div > div:nth-child(2)",description:"#__ozon > div > div.a4e4 > div:nth-child(6) > div > div > div > div.b0h8.b0i.b0j3.b0j9 > div:nth-child(2) > div.b5z.b5y > div > div:nth-child(1)",specs:"#__ozon > div > div.a4e4 > div:nth-child(6) > div > div > div > div.b0h8.b0i.b0j3.b0j9 > div:nth-child(2) > div.b5z.b5y > div > div:nth-child(3) > div > div",tags:"#__ozon > div > div.a4e4 > div:nth-child(6) > div > div > div > div.b0h8.b0i.b0j3.b0j9 > div:nth-child(2) > div.b5z.b5y > div > div:nth-child(4) > div",stars:"#__ozon > div > div.a4e4 > div:nth-child(6) > div > div > div > div.b0h8.b0i.b0j3.b0j9 > div.paginator > div > div:nth-child(2) > div.b5y4.b5y > div:nth-child(1) > div > div > div.a4d3"}},t.location_listeners=[],t.location_iid=void 0,t.location_href=void 0,t}.call(this),t.exports=r},function(t,e){var r;r=class{static get(t){return new Promise((function(e,r){var i,n;return"undefined"!=typeof chrome&&null!==chrome&&null!=(i=chrome.storage)&&null!=(n=i.local)?n.get(t,(function(t){return e(t)})):void 0}))}static set(t,e){return new Promise((function(r,i){var n,o,a;return(n={})[t]=e,"undefined"!=typeof chrome&&null!==chrome&&null!=(o=chrome.storage)&&null!=(a=o.local)?a.set(n,r):void 0}))}static remove(t){return new Promise((function(e,r){var i,n;return"undefined"!=typeof chrome&&null!==chrome&&null!=(i=chrome.storage)&&null!=(n=i.local)?n.remove(t,e):void 0}))}static clear(t){return new Promise((function(t,e){var r,i;return"undefined"!=typeof chrome&&null!==chrome&&null!=(r=chrome.storage)&&null!=(i=r.local)?i.clear(t):void 0}))}static on_change(t){var e,r;return"undefined"!=typeof chrome&&null!==chrome&&null!=(e=chrome.storage)&&null!=(r=e.onChanged)?r.addListener(t):void 0}static async get_categories(){var t;return"categories",null==(t=(await this.get(["categories"])).categories)&&(t={}),t}static async is_category_exists(t){var e;return e=await this.get_categories(),t.url in e}static async add_category(t){var e;return console.log("Add category "+t.url),null==(e=await this.get_categories())[t.url]&&(t.snapshot_ts="",t.status="",e[t.url]=t,this.set("categories",e)),e}static async update_categories(t){return await this.set("categories",t),t}static async update_category(t){var e;return console.log("Update category "+t.url),(e=await this.get_categories())[t.url]=t,this.set("categories",e),e}static async delete_category({url:t}){var e;return console.log("Delete category "+t),null!=(e=await this.get_categories())[t]&&(delete e[t],this.set("categories",e),this.remove(t)),e}static async get_snapshots(t){var e;return console.log("Get snapshots "+t),null==(e=(await this.get([t]))[t])&&(e={}),e}static async add_snapshot(t,e){var r;if(console.log("Add snapshot for "+t),null!=e)return(r=await this.get_snapshots(t))[Date.now()]=e,this.set(t,r),r}static async delete_snapshots(t,e){var r;return console.log("Delete snapshots "+e),(r=await this.get_snapshots(t))[e]&&(delete r[e],this.set(t,r)),r}},t.exports=r},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";var i=r(2);r.n(i).a},function(t,e,r){"use strict";var i=r(3);r.n(i).a},function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"scrap_app"}},[r("v-main",[r("v-speed-dial",{attrs:{id:"scrap_button",top:"",left:"",direction:"right","open-on-hover":"",transition:"slide-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-btn",{attrs:{color:"pink",dark:"",fab:""},model:{value:t.speed_dial,callback:function(e){t.speed_dial=e},expression:"speed_dial"}},[t.speed_dial?r("v-icon",{on:{click:function(e){t.dialog=!0}}},[t._v("mdi-table")]):r("v-icon",[t._v("mdi-triangle")])],1)]},proxy:!0}]),model:{value:t.speed_dial,callback:function(e){t.speed_dial=e},expression:"speed_dial"}},["category"==t.current_page.type?r("v-btn",{attrs:{fab:"",dark:"",small:"",color:"indigo"},on:{click:function(e){return e.stopPropagation(),t.add_category(e)}}},[r("v-icon",[t._v("mdi-plus")])],1):t._e(),r("v-btn",{attrs:{fab:"",small:""},on:{click:function(e){e.stopPropagation(),t.information=!0}}},[r("v-icon",[t._v("mdi-information")])],1)],1),r("v-row",{attrs:{id:"scrap_panel"}},[r("v-dialog",{attrs:{"max-width":"75%",scorllable:"","hide-overlay":""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[t._v("Агрегатор первой полки")]),r("v-spacer"),r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1)],1),t.categories&&Object.keys(t.categories).length?r("v-card-text",[r("v-row",[r("v-col",[r("Categories",{attrs:{categories:t.categories},on:{"category-select":t.goto_category,"category-delete":t.category_delete,"category-snapshot":t.category_snapshot,"snapshot-all":t.snapshot_all,"download-xlst":t.download_xlst}}),r("Products",{key:t.scraping_table_key,attrs:{scraping_products:t.scraping_products}})],1)],1)],1):r("v-card-title",[r("span",{staticClass:"hedaline"},[t._v("Категории не добавлены")])])],1)],1)],1),r("v-row",{attrs:{id:"info_panel"}},[r("v-dialog",{attrs:{"max-width":"75%",scrollable:"","hide-overlay":""},model:{value:t.information,callback:function(e){t.information=e},expression:"information"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"green"}},[r("v-toolbar-title",[t._v("Информация по текущей странице")]),r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.refresh_current_page()}}},[r("v-icon",[t._v("mdi-update")])],1),r("v-spacer"),r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.information=!1}}},[r("v-icon",[t._v("mdi-close")])],1)],1),r("v-card-text",[r("v-row",[r("v-col",[r("Information",{key:t.info_key,attrs:{current_page:t.current_page}})],1)],1)],1)],1)],1)],1)],1)],1)};i._withStripped=!0;var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v("Категории товаров"),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.$emit("snapshot-all")}}},[r("v-icon",[t._v("mdi-camera-retake")])],1),r("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.$emit("download-xlst")}}},[r("v-icon",[t._v("mdi-table-arrow-down")])],1)],1),r("v-list",{attrs:{color:"transparent"}},t._l(t.categories,(function(e,i,n){return r("v-list-item",{key:e.url,attrs:{selectable:""},on:{click:function(r){return t.$emit("category-select",e)}}},[e.status?r("v-list-item-icon",["waiting"==e.status?r("v-icon",[t._v("mdi-update")]):"run"==e.status?r("v-icon",{attrs:{color:"orange"}},[t._v("mdi-play-circle")]):"err"==e.status?r("v-icon",{attrs:{color:"red"}},[t._v("mdi-alert-circle")]):"ok"==e.status?r("v-icon",{attrs:{color:"green"}},[t._v("mdi-checkbox-marked-circle")]):r("v-icon",[t._v("mdi-circle-outline")])],1):t._e(),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.name))]),e.snapshot_ts?r("v-list-item-subtitle",[t._v("обновлено "+t._s(new Date(e.snapshot_ts)))]):t._e()],1),r("v-list-item-icon",[r("v-icon",{on:{click:function(r){return r.stopPropagation(),t.$emit("category-snapshot",e)}}},[t._v("mdi-camera")])],1),r("v-list-item-icon",[r("v-icon",{on:{click:function(r){return r.stopPropagation(),t.$emit("category-delete",e)}}},[t._v("mdi-delete")])],1)],1)})),1)],1)};n._withStripped=!0;var o=r(0),a=r.n(o),c=r(1),s=r.n(c);function d(t,e,r,i,n,o,a,c){var s,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=r,d._compiled=!0),i&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=s):n&&(s=c?function(){n.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:n),s)if(d.functional){d._injectStyles=s;var l=d.render;d.render=function(t,e){return s.call(e),l(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,s):[s]}return{exports:t,options:d}}var l=d({name:"categories",props:["categories"]},n,[],!1,null,null,null);l.options.__file="src/components/Categories.vue";var u=l.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.scraping_products?r("v-card",[t.scraping_products?[r("v-card-title",[r("span",[t._v("Собираемые продукты")])]),r("v-card-text",[r("v-data-table",{attrs:{headers:t.headers,items:t.scraping_products,dense:""},scopedSlots:t._u([{key:"item.status",fn:function(e){var i=e.item;return["waiting"==i.status?r("v-icon",[t._v("mdi-update")]):"run"==i.status?r("v-icon",{attrs:{color:"orange"}},[t._v("mdi-play-circle")]):"err"==i.status?r("v-icon",{attrs:{color:"red"}},[t._v("mdi-alert-circle")]):"ok"==i.status?r("v-icon",{attrs:{color:"green"}},[t._v("mdi-checkbox-marked-circle")]):r("v-icon",[t._v("mdi-circle-outline")])]}}],null,!1,2809203036)})],1)]:t._e()],2):t._e()};v._withStripped=!0;var _={name:"products",props:["scraping_products"],data:function(){return{headers:[{text:"Статус",value:"status"},{text:"#",value:"rank"},{text:"Название",value:"title"},{text:"Рейтинг",value:"rating"},{text:"Цена",value:"price1"},{text:"Цена",value:"price2"},{text:"Размеры",value:"sizes"},{text:"Обзоров",value:"reviews"}]}}},p=(r(4),d(_,v,[],!1,null,null,null));p.options.__file="src/components/Products.vue";var h=p.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v(t._s(t.current_page.type))]),r("v-card-subtitle",[t._v(t._s(t.current_page.url))]),"category"==t.current_page.type?[r("v-card-title",[t._v("Поисковый запрос: "+t._s(t.current_page.category.name))]),r("v-card-text",[r("v-list",t._l(t.products,(function(e,i,n){return r("v-list-item",{key:i+"-"+e.title},[t._v(t._s(i)+". "+t._s(e.title))])})),1)],1)]:t._e(),"product"==t.current_page.type?t._l(t.product,(function(e,i,n){return r("div",{key:i},[r("v-card-title",[t._v(t._s(i))]),r("v-card-text",[r("pre",[t._v(t._s(e))])])],1)})):t._e()],2)};g._withStripped=!0;var f=d({name:"information",props:["current_page"],computed:{products:function(){return a.a.get_current_page().products},product:function(){return a.a.get_current_page().product}}},g,[],!1,null,null,null);f.options.__file="src/components/Information.vue";var m={components:{Categories:u,Products:h,Information:f.exports},data:function(){return{categories:{},current_page:{},scraping_products:void 0,scraping_table_key:0,speed_dial:!1,dialog:!1,information:!1,info_key:0}},created:function(){return a.a.on_location_change(this.refresh_current_page),this.refresh_current_page(),s.a.on_change(this.on_storage_change),this.update_categories()},methods:{update_categories:async function(){return this.categories=await s.a.get_categories()},on_storage_change:function(t,e){if("local"===e&&null!=t.categories)return this.update_categories()},refresh_current_page:function(){return this.current_page=a.a.get_current_page(),this.info_key++,console.log("Refresh current page"),console.log(this.current_page)},category_select:function(t){return this.goto_category(t)},add_category:async function(){if("category"===this.current_page.type)return await s.a.add_category(this.current_page.category)},category_delete:async function(t){return confirm(`Точно удалить '${t.name}'?`)&&await s.a.delete_category(t)},goto_category:async function(t){var e;try{return a.a.goto_category(t),await a.a.wait_for_location_change(),await a.a.wait(2e3),this.current_page=a.a.get_current_page()}catch(t){return e=t,console.error(e)}},category_status:function(t,e){return t.status=e,s.a.update_category(t)},category_snapshot:async function(t){var e,r,i,n,o,c,d,l,u,v,_,p;for(this.category_status(t,"run"),this.current_page.url!==t.url&&await this.goto_category(t),u=a.a.get_current_page(),this.scraping_products=u.products,this.scraping_products.map((t,e)=>(t.rank=e+1,t.status="waiting")),i=o=0,c=(_=this.scraping_products).length;o<c;i=++o){l=_[i];try{l.status="run",l.link.click();try{await a.a.wait_for_location_change()}catch(t){e=t,r="Не получилось открыть продуктовую страницу",console.error(r,l),l.status="err",l.error=r;continue}for(d=0;d<=20;++d)window.scrollBy(0,500),await a.a.wait(250);for(n in window.scrollTo(0,document.body.scrollHeight),v=(u=a.a.get_current_page()).product)p=v[n],l[n]=p;l.status="ok",this.scraping_table_key++}catch(t){e=t,console.error(e),l.status="err",l.error=e}}return t.snapshot_ts=Date.now(),this.category_status(t,"ok"),await s.a.add_snapshot(t.url,this.scraping_products),await s.a.update_category(t)},snapshot_all:async function(){var t,e,r,i,n,o;for(r in[],i=this.categories)(t=i[r]).status="waiting";for(r in await s.a.update_categories(this.categories),o=[],n=this.categories){t=n[r],this.category_status(t,"run");try{await this.category_snapshot(t),o.push(this.category_status(t,"ok"))}catch(r){e=r,console.error(e),o.push(this.category_status(t,"err"))}}return o},download_xlst:async function(){var t,e,r,i,n,o,a,c,d,l,u;for(u in r=["timestamp","rank","href","title","rating","price1","price2","sizes","reviews","breadcrumbs","sizes_prod","units","details","prices_prod","description","specs","tags","stars"],l=function(t){var e,r;return`${(r=function(t){return("0"+t).slice(-2)})((e=new Date(parseInt(t))).getDate())}.${r(e.getMonth()+1)}.${e.getFullYear()} ${r(e.getHours())}:${r(e.getMinutes())}`},t=XLSX.utils.book_new(),n=await s.a.get_categories()){for(d in e=n[u],i=[],o=await s.a.get_snapshots(u))c=o[d],i=i.concat(c.map((function(t){return t.timestamp=l(d),t})));a=XLSX.utils.json_to_sheet(i,{header:r}),XLSX.utils.book_append_sheet(t,a,e.name.slice(0,31))}return XLSX.writeFile(t,`ozon_${Date.now()}.xlsx`)}}},y=(r(5),d(m,i,[],!1,null,"7ba5bd90",null));y.options.__file="src/App.vue";var b=y.exports;(function(){var t;console.log("START SCRAPER"),(t=document.createElement("div")).id="scrap_panel",document.body.appendChild(t),new Vue({render:function(t){return t(b)},data:function(){return{scrap_panel:t}},vuetify:new Vuetify}).$mount("#scrap_panel")})()}]);