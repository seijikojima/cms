(function(t){function e(e){for(var i,o,c=e[0],l=e[1],s=e[2],d=0,_=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&_.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(_.length)_.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),n=a.n(i);n.a},"04a9":function(t,e,a){},"136c":function(t,e,a){t.exports=a.p+"img/logo.7363ae7f.svg"},3215:function(t,e,a){},"32ff":function(t,e,a){},"3e9c":function(t,e,a){"use strict";var i=a("b1dc"),n=a.n(i);n.a},"463b":function(t,e,a){},4935:function(t,e,a){"use strict";var i=a("04a9"),n=a.n(i);n.a},5567:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("nav",[i("img",{staticClass:"logo",attrs:{src:a("136c"),alt:"logo"}}),i("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._l(t.$store.state.categories,(function(e,a){return i("router-link",{key:a,attrs:{to:{path:"article_list",query:{category:e}}}},[t._v(" "+t._s(e))])})),i("router-link",{attrs:{to:"/article_list"}},[t._v("All")])],2),i("main",[i("router-view")],1)])},r=[],o={name:"App",mounted:function(){this.$store.commit("check_authentication"),this.$store.commit("update_categories")}},c=o,l=(a("034f"),a("2877")),s=Object(l["a"])(c,n,r,!1,null,null,null),u=s.exports,d=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._v(" HOME ")])},m=[],f={name:"home",data:function(){return{}}},p=f,h=Object(l["a"])(p,_,m,!1,null,"db50fe54",null),g=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[t._v(" About ")])},b=[],y={data:function(){return{}},methods:{},computed:{},mounted:function(){}},C=y,$=Object(l["a"])(C,v,b,!1,null,"2ba2fe1d",null),w=$.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.article_data?a("Toolbar",[t.article_data?a("div",{staticClass:"dates_container"},[t.article_data.creation_date?a("div",{},[t._v("Created: "+t._s(t.format_date(t.article_data.creation_date)))]):t._e(),t.article_data.edit_date?a("div",{},[t._v("Last edited: "+t._s(t.format_date(t.article_data.edit_date)))]):t._e()]):t._e(),t.article_data.published&&t.$store.state.user?a("span",{staticClass:"mdi mdi-earth published_indicator"},[t._v(" Published ")]):t._e(),a("div",{staticClass:"growing_spacer"}),a("IconButton",{staticClass:"right_aligned",attrs:{icon:"mdi-arrow-left"},on:{buttonClicked:function(e){return t.$router.push({path:"article_list"})}}}),t.$store.state.user?a("IconButton",{attrs:{icon:"mdi-pencil"},on:{buttonClicked:function(e){return t.edit_article(t.article_data._id)}}}):t._e()],1):t._e(),t.article_data?a("article",{ref:"article_content",domProps:{innerHTML:t._s(t.article_data.content)}}):t.article_loading?a("Loader"):a("div",{},[t._v("Article not found")]),a("Modal",{attrs:{open:t.modal.open},on:{close:function(e){t.modal.open=!1}}},[a("img",{staticClass:"modal_image",attrs:{src:t.modal.image_src,alt:""}})])],1)},k=[],O=(a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"mdi icon_button",class:[t.icon,{loading:t.loading}],on:{click:function(e){return t.button_clicked()}}},[t.loading?a("div",{staticClass:"loader"}):t._e()])}),j=[],q={name:"IconButton",props:{icon:String,loading:Boolean},methods:{button_clicked:function(){this.loading||this.$emit("buttonClicked")}}},E=q,T=(a("d471"),Object(l["a"])(E,O,j,!1,null,"4c1a24b4",null)),B=T.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal",class:{open:t.open},on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[a("div",{staticClass:"modal_window_outer"},[a("div",{staticClass:"modal_window_inner"},[t.close_button?a("span",{staticClass:"modal_close_button mdi mdi-close",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}}):t._e(),t._t("default")],2)])])},M=[],P={name:"Modal",props:{open:Boolean,close_button:{type:Boolean,default:!0}}},I=P,A=(a("a851"),Object(l["a"])(I,L,M,!1,null,"0ba7d709",null)),S=A.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toolbar"},[t._t("default")],2)},H=[],Q={name:"Toolbar"},z=Q,N=(a("3e9c"),Object(l["a"])(z,D,H,!1,null,"5d0c3d78",null)),R=N.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader"},[a("div",{staticClass:"spinner"})])}],F={name:"Loader"},V=F,Y=(a("bf8a"),Object(l["a"])(V,U,J,!1,null,"7c3a0e35",null)),G=Y.exports,K=(a("a15b"),{methods:{format_date:function(t){var e=new Date(t),a=e.getMonth()+1,i=e.getDate();return[e.getFullYear(),(a>9?"":"0")+a,(i>9?"":"0")+i].join("/")}}}),W={components:{IconButton:B,Modal:S,Toolbar:R,Loader:G},mixins:[K],data:function(){return{article_data:null,article_loading:!1,modal:{open:!1,image_src:""}}},mounted:function(){this.get_content()},methods:{get_content:function(){var t=this;"_id"in this.$route.query&&(this.article_loading=!0,this.axios.post("https://cms.maximemoreillon.com/get_article",{_id:this.$route.query._id}).then((function(e){t.article_loading=!1,t.article_data=e.data,setTimeout(t.add_event_listeners_for_image_modals,100)})).catch((function(t){return alert(t)})))},add_event_listeners_for_image_modals:function(){var t=this;this.$refs.article_content.querySelectorAll("img").forEach((function(e){e.addEventListener("click",(function(e){t.modal.open=!0,t.modal.image_src=e.target.src}),!1)}))},edit_article:function(t){"_id"in this.$route.query&&this.$router.push({path:"article_editor",query:{_id:t}})}}},X=W,Z=(a("4935"),Object(l["a"])(X,x,k,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article_editor_view"},[t.$store.state.user&&!t.article_loading?a("div",{staticClass:"authentication_wrapper"},[a("Toolbar",[a("div",{staticClass:"dates_container"},[t.article_data.creation_date?a("div",{},[t._v("Published on "+t._s(t.format_date(t.article_data.creation_date)))]):t._e(),t.article_data.edit_date?a("div",{},[t._v("Last edited on "+t._s(t.format_date(t.article_data.edit_date)))]):t._e()]),a("div",{staticClass:"category_container"},[a("label",{attrs:{for:"category_search"}},[t._v("Category: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.article_data.category,expression:"article_data.category"}],attrs:{id:"category_search",type:"search",list:"category_list"},domProps:{value:t.article_data.category},on:{input:function(e){e.target.composing||t.$set(t.article_data,"category",e.target.value)}}})]),a("div",{staticClass:"growing_spacer"}),a("datalist",{attrs:{id:"category_list"}},t._l(t.$store.state.categories,(function(t,e){return a("option",{key:e,domProps:{value:t}})})),0),t.article_data._id?a("IconButton",{staticClass:"right_aligned",attrs:{icon:"mdi-arrow-left"},on:{buttonClicked:function(e){return t.view_article()}}}):t._e(),a("IconButton",{class:{right_aligned:!t.article_data._id},attrs:{icon:"mdi-content-save"},on:{buttonClicked:function(e){return t.submit_article()}}}),a("IconButton",{attrs:{icon:"mdi-delete"},on:{buttonClicked:function(e){return t.delete_article()}}}),a("IconButton",{attrs:{icon:t.article_data.published?"mdi-lock":"mdi-earth"},on:{buttonClicked:function(e){return t.toggle_published()}}})],1),a("div",{ref:"quill_wrapper",staticClass:"quill_wrapper"},[a("quill-editor",{ref:"quill_editor",attrs:{styles:t.quill_editor_style_object,options:t.editorOption},model:{value:t.article_data.content,callback:function(e){t.$set(t.article_data,"content",e)},expression:"article_data.content"}})],1)],1):t._e(),t.$store.state.user&&t.article_loading?a("Loader"):t._e(),t.$store.state.user?t._e():a("div",{},[t._v("Article cannot be edited by unauthenticated user")])],1)},at=[],it={components:{IconButton:B,Toolbar:R,Loader:G},mixins:[K],data:function(){return{article_loading:!1,article_data:{_id:void 0,published:!1,category:"",creation_date:new Date,content:""},editorOption:{theme:"snow",modules:{imageDrop:!0,imageResize:{modules:["Resize","DisplaySize"]},clipboard:{matchVisual:!1},toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{header:[1,2,3,4,5,6,!1]}],[{align:[]}],["link","image","video"],["clean"]]}}}},methods:{get_article_if_exists:function(){var t=this;"_id"in this.$route.query&&(this.article_loading=!0,this.axios.post("https://cms.maximemoreillon.com/get_article",{_id:this.$route.query._id}).then((function(e){e.data&&(t.article_data=e.data,t.article_data.edit_date=new Date),t.article_loading=!1})).catch((function(t){return alert(t)})))},toggle_published:function(){this.article_data.published=!this.article_data.published},submit_article:function(){var t=this;this.article_loading=!0,this.axios.post("https://cms.maximemoreillon.com/edit_article",this.article_data).then((function(e){t.$store.commit("update_categories"),t.article_loading=!1,t.$router.push({path:"/article",query:{_id:e.data._id}})})).catch((function(t){return alert(t)}))},delete_article:function(){var t=this;this.article_loading=!0,confirm("Delete article?")&&this.axios.post("https://cms.maximemoreillon.com/delete_article",{_id:this.article_data._id}).then((function(){t.$store.commit("update_categories"),t.article_loading=!1,t.$router.push({path:"/article_list"})})).catch((function(t){return alert(t)}))},view_article:function(){this.$router.push({path:"article",query:{_id:this.article_data._id}})}},computed:{quill_editor_style_object:function(){return{}}},mounted:function(){this.get_article_if_exists()}},nt=it,rt=(a("b545"),Object(l["a"])(nt,et,at,!1,null,null,null)),ot=rt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article_list_view"},[a("Toolbar",[a("IconButton",{attrs:{icon:"mdi-filter"}}),a("IconButton",{attrs:{icon:"mdi-sort-variant"}}),a("div",{staticClass:"growing_spacer"}),t.$store.state.user?a("IconButton",{attrs:{icon:"mdi-plus"},on:{buttonClicked:function(e){return t.new_article()}}}):t._e()],1),t.articles_loading?a("Loader"):a("div",{staticClass:"articles_container"},t._l(t.articles,(function(t){return a("ArticlePreview",{key:t._id,attrs:{article:t}})})),1)],1)},lt=[],st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article_preview",on:{click:function(e){return t.view_article(t.article._id)}}},[t.article.published&&t.$store.state.user?a("span",{staticClass:"publishing_status mdi mdi-earth"}):t._e(),a("div",{staticClass:"article_title"},[t._v(t._s(t.article_title))]),t.article.creation_date?a("div",{staticClass:"article_metadata"},[a("span",{staticClass:"article_date"},[t._v(t._s(t.format_date(t.article.creation_date)))]),"category"in t.$route.query||!t.article.category?"category"in t.$route.query?t._e():a("span",{staticClass:"article_category"},[t._v(" Uncategorized ")]):a("span",{staticClass:"article_category"},[t._v(" "+t._s(t.article.category)+" ")])]):t._e(),t.article_thumbnail_src?a("img",{staticClass:"article_thumbnail",attrs:{src:t.article_thumbnail_src,alt:""}}):t._e(),a("dot",{staticClass:"article_summary",attrs:{msg:t.article_summary}})],1)},ut=[],dt=a("e438"),_t={name:"ArticlePreview",props:{article:Object},components:{dot:dt["a"]},mixins:[K],methods:{view_article:function(t){this.$router.push({path:"article",query:{_id:t}})}},computed:{article_title:function(){var t=document.createElement("div");t.innerHTML=this.article.content;var e=t.getElementsByTagName("h1")[0];return e?e.innerHTML:"Untitled"},article_summary:function(){var t=document.createElement("div");t.innerHTML=this.article.content;var e=t.getElementsByTagName("p")[0];return e?e.innerHTML:""},article_thumbnail_src:function(){var t=document.createElement("div");t.innerHTML=this.article.content;var e=t.getElementsByTagName("img")[0];return e?e.src:""}}},mt=_t,ft=(a("ac9d"),Object(l["a"])(mt,st,ut,!1,null,"c08b7fa8",null)),pt=ft.exports,ht={components:{IconButton:B,ArticlePreview:pt,Toolbar:R,Loader:G},data:function(){return{articles:[],articles_loading:!1}},methods:{new_article:function(){this.$router.push({path:"article_editor"})},get_articles:function(t){var e=this;this.articles_loading=!0,this.axios.post("https://cms.maximemoreillon.com/get_article_list",{category:t}).then((function(t){e.articles=t.data,e.articles_loading=!1})).catch((function(t){return alert(t)}))}},beforeRouteUpdate:function(t,e,a){this.get_articles(t.query.category),a()},mounted:function(){this.get_articles(this.$route.query.category)},computed:{}},gt=ht,vt=(a("6b5f"),Object(l["a"])(gt,ct,lt,!1,null,"145197d7",null)),bt=vt.exports;i["a"].use(d["a"]);var yt=[{path:"/",name:"home",component:g},{path:"/about",name:"about",component:w},{path:"/article_list",name:"article_list",component:bt},{path:"/article",name:"article",component:tt,props:!0},{path:"/article_editor",name:"article_editor",component:ot,props:!0}],Ct=new d["a"]({mode:"history",base:"/",routes:yt}),$t=Ct,wt=(a("4de4"),a("d81d"),a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("2909")),xt=a("2f62"),kt=a("bc3a"),Ot=a.n(kt);i["a"].use(xt["a"]);var jt=new xt["a"].Store({state:{user:void 0,categories:[]},mutations:{check_authentication:function(t){console.log("[Auth] Checking authentication"),Ot.a.post("https://authentication.maximemoreillon.com/status").then((function(e){e.data.logged_in?(console.log("[Auth] Logged in"),t.user=e.data.username):(console.log("[Auth] Logged out"),t.user=void 0)})).catch((function(t){return console.log(t)}))},update_categories:function(t){Ot.a.post("https://cms.maximemoreillon.com/get_article_categories").then((function(e){t.categories=Object(wt["a"])(new Set(e.data.map((function(t){return t.category})))).filter((function(t){return void 0!=t})).filter((function(t){return""!=t}))})).catch((function(t){return console.log(t)}))}},actions:{},modules:{}}),qt=a("a7fe"),Et=a.n(qt),Tt=a("953d"),Bt=a.n(Tt),Lt=a("f318"),Mt=a.n(Lt),Pt=a("2a19");a("5363"),a("a753"),a("8096"),a("14e1");Ot.a.defaults.withCredentials=!0,Ot.a.defaults.crossDomain=!0,Tt["Quill"].register(Tt["Quill"].import("attributors/style/align"),!0),Tt["Quill"].register(Tt["Quill"].import("attributors/class/color"),!0),Tt["Quill"].register(Tt["Quill"].import("attributors/style/size"),!0),Tt["Quill"].register("modules/imageResize",Mt.a),Tt["Quill"].register("modules/imageDrop",Pt["a"]),i["a"].use(Bt.a),i["a"].use(Et.a,Ot.a),i["a"].config.productionTip=!1,$t.beforeEach((function(t,e,a){a()})),new i["a"]({router:$t,store:jt,render:function(t){return t(u)}}).$mount("#app")},"6b5f":function(t,e,a){"use strict";var i=a("3215"),n=a.n(i);n.a},"85ec":function(t,e,a){},"93a1":function(t,e,a){},a851:function(t,e,a){"use strict";var i=a("5567"),n=a.n(i);n.a},ac9d:function(t,e,a){"use strict";var i=a("c106"),n=a.n(i);n.a},b1dc:function(t,e,a){},b545:function(t,e,a){"use strict";var i=a("32ff"),n=a.n(i);n.a},bf8a:function(t,e,a){"use strict";var i=a("93a1"),n=a.n(i);n.a},c106:function(t,e,a){},d471:function(t,e,a){"use strict";var i=a("463b"),n=a.n(i);n.a}});
//# sourceMappingURL=app.2e1a55b2.js.map