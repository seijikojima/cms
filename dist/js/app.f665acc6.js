(function(t){function e(e){for(var i,o,c=e[0],s=e[1],l=e[2],d=0,_=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&_.push(n[o][0]),n[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(_.length)_.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),n=a.n(i);n.a},"04a9":function(t,e,a){},"136c":function(t,e,a){t.exports=a.p+"img/logo.ae432409.svg"},"25cf":function(t,e,a){},"2d74":function(t,e,a){},"32ff":function(t,e,a){},4935:function(t,e,a){"use strict";var i=a("04a9"),n=a.n(i);n.a},5567:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("nav",[i("img",{staticClass:"logo",attrs:{src:a("136c"),alt:"logo"}}),i("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._l(t.$store.state.categories,(function(e,a){return i("router-link",{key:a,attrs:{to:{path:"article_list",query:{category:e}}}},[t._v(" "+t._s(e))])})),i("router-link",{attrs:{to:"/article_list"}},[t._v("All")])],2),i("main",{attrs:{id:"main"}},[i("router-view")],1)])},r=[],o={name:"App",data:function(){return{categories:[]}},mounted:function(){this.$store.commit("check_authentication"),this.$store.commit("update_categories")}},c=o,s=(a("034f"),a("2877")),l=Object(s["a"])(c,n,r,!1,null,null,null),u=l.exports,d=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._v(" HOME ")])},m=[],f={name:"home",data:function(){return{}}},p=f,h=Object(s["a"])(p,_,m,!1,null,"b150dabc",null),g=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[t._v(" About ")])},b=[],y={data:function(){return{}},methods:{},computed:{},mounted:function(){}},C=y,$=Object(s["a"])(C,v,b,!1,null,"2ba2fe1d",null),w=$.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.article_data?a("Toolbar",[t.article_data?a("div",{staticClass:"dates_container"},[t.article_data.creation_date?a("div",{},[t._v("Created: "+t._s(t.format_date(t.article_data.creation_date)))]):t._e(),t.article_data.edit_date?a("div",{},[t._v("Last edited: "+t._s(t.format_date(t.article_data.edit_date)))]):t._e()]):t._e(),t.article_data.published&&t.$store.state.user?a("span",{staticClass:"mdi mdi-earth published_indicator"},[t._v(" Published ")]):t._e(),a("div",{staticClass:"growing_spacer"}),a("IconButton",{staticClass:"right_aligned",attrs:{icon:"mdi-arrow-left"},on:{buttonClicked:function(e){return t.$router.push({path:"article_list"})}}}),t.$store.state.user?a("IconButton",{attrs:{icon:"mdi-pencil"},on:{buttonClicked:function(e){return t.edit_article(t.article_data._id)}}}):t._e()],1):t._e(),t.article_data?a("article",{ref:"article_content",domProps:{innerHTML:t._s(t.article_data.content)}}):t.article_loading?a("Loader"):a("div",{},[t._v("Article not found")]),a("Modal",{attrs:{open:t.modal.open},on:{close:function(e){t.modal.open=!1}}},[a("img",{staticClass:"modal_image",attrs:{src:t.modal.image_src,alt:""}})])],1)},x=[],T=(a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"mdi icon_button",class:[t.icon,{loading:t.loading}],style:{fontSize:t.size},on:{click:function(e){return t.button_clicked()}}},[t.loading?a("div",{staticClass:"loader"}):t._e()])}),E=[],O={name:"IconButton",props:{icon:String,loading:Boolean,size:{type:String,default:function(){return"150%"}}},methods:{button_clicked:function(){this.loading||this.$emit("buttonClicked")}}},B=O,j=(a("a95c"),Object(s["a"])(B,T,E,!1,null,"528b59f1",null)),L=j.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal",class:{open:t.open},on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[a("div",{staticClass:"modal_window_outer"},[a("div",{staticClass:"modal_window_inner"},[t.close_button?a("span",{staticClass:"modal_close_button mdi mdi-close",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}}):t._e(),t._t("default")],2)])])},q=[],I={name:"Modal",props:{open:Boolean,close_button:{type:Boolean,default:!0}}},P=I,H=(a("a851"),Object(s["a"])(P,M,q,!1,null,"0ba7d709",null)),A=H.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toolbar"},[t._t("default")],2)},z=[],D={name:"Toolbar"},Q=D,N=(a("f00f"),Object(s["a"])(Q,S,z,!1,null,"5892c8a7",null)),R=N.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader"},[a("div",{staticClass:"spinner"})])}],F={name:"Loader"},V=F,Y=(a("bf8a"),Object(s["a"])(V,U,J,!1,null,"7c3a0e35",null)),G=Y.exports,K=(a("a15b"),{methods:{format_date:function(t){var e=new Date(t),a=e.getMonth()+1,i=e.getDate();return[e.getFullYear(),(a>9?"":"0")+a,(i>9?"":"0")+i].join("/")}}}),W={components:{IconButton:L,Modal:A,Toolbar:R,Loader:G},mixins:[K],data:function(){return{article_data:null,article_loading:!1,modal:{open:!1,image_src:""}}},mounted:function(){this.get_content()},methods:{get_content:function(){var t=this;"_id"in this.$route.query&&(this.article_loading=!0,this.axios.post("https://cms.maximemoreillon.com/get_article",{_id:this.$route.query._id}).then((function(e){t.article_loading=!1,t.article_data=e.data,setTimeout(t.add_event_listeners_for_image_modals,100)})).catch((function(t){return alert(t)})))},add_event_listeners_for_image_modals:function(){var t=this;this.$refs.article_content.querySelectorAll("img").forEach((function(e){e.addEventListener("click",(function(e){t.modal.open=!0,t.modal.image_src=e.target.src}),!1)}))},edit_article:function(t){"_id"in this.$route.query&&this.$router.push({path:"article_editor",query:{_id:t}})}}},X=W,Z=(a("4935"),Object(s["a"])(X,k,x,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article_editor_view"},[t.$store.state.user&&!t.article_loading?a("div",{staticClass:"authentication_wrapper"},[a("Toolbar",[a("div",{staticClass:"dates_container"},[t.article_data.creation_date?a("div",{},[t._v("Published on "+t._s(t.format_date(t.article_data.creation_date)))]):t._e(),t.article_data.edit_date?a("div",{},[t._v("Last edited on "+t._s(t.format_date(t.article_data.edit_date)))]):t._e()]),a("div",{staticClass:"growing_spacer"}),t.article_data._id?a("IconButton",{staticClass:"right_aligned",attrs:{icon:"mdi-arrow-left"},on:{buttonClicked:function(e){return t.view_article()}}}):t._e(),a("IconButton",{class:{right_aligned:!t.article_data._id},attrs:{icon:"mdi-content-save"},on:{buttonClicked:function(e){return t.submit_article()}}}),a("IconButton",{attrs:{icon:"mdi-delete"},on:{buttonClicked:function(e){return t.delete_article()}}}),a("IconButton",{attrs:{icon:t.article_data.published?"mdi-lock":"mdi-earth"},on:{buttonClicked:function(e){return t.toggle_published()}}})],1),a("div",{staticClass:"metadata_wrapper"},[a("div",{staticClass:"category_container"},[a("label",{attrs:{for:"category_search"}},[t._v("Category: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.article_data.category,expression:"article_data.category"}],attrs:{id:"category_search",type:"search",list:"category_list"},domProps:{value:t.article_data.category},on:{input:function(e){e.target.composing||t.$set(t.article_data,"category",e.target.value)}}}),a("datalist",{attrs:{id:"category_list"}},t._l(t.$store.state.categories,(function(t,e){return a("option",{key:e,domProps:{value:t}})})),0)]),a("div",{staticClass:"tags_wrapper"},[a("label",{attrs:{for:"category_search"}},[t._v("Tags: ")]),t._l(t.article_data.tags,(function(e,i){return a("span",{key:i,staticClass:"tag"},[a("span",[t._v(t._s(e))]),a("IconButton",{attrs:{icon:"mdi-close",size:"100%"},on:{buttonClicked:function(e){return t.delete_tag(i)}}})],1)})),a("input",{ref:"tag_input",attrs:{type:"search"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add_tag()}}}),a("IconButton",{attrs:{icon:"mdi-plus"},on:{buttonClicked:function(e){return t.add_tag()}}})],2)]),a("div",{staticClass:"quill_wrapper"},[a("quill-editor",{attrs:{options:t.editorOption},model:{value:t.article_data.content,callback:function(e){t.$set(t.article_data,"content",e)},expression:"article_data.content"}})],1)],1):t._e(),t.$store.state.user&&t.article_loading?a("Loader"):t._e(),t.$store.state.user?t._e():a("div",{},[t._v(" Article cannot be edited by unauthenticated user ")])],1)},at=[],it=(a("a434"),{components:{IconButton:L,Toolbar:R,Loader:G},mixins:[K],data:function(){return{article_loading:!1,article_data:{_id:void 0,published:!1,creation_date:new Date,content:"",category:"",tags:[]},editorOption:{scrollingContainer:"#main",theme:"snow",bounds:"#main",modules:{imageDrop:!0,imageResize:{modules:["Resize","DisplaySize"]},clipboard:{matchVisual:!1},toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{align:[]}],["link","image","video"],["clean"]]}}}},methods:{get_article_if_exists:function(){var t=this;"_id"in this.$route.query&&(this.article_loading=!0,this.axios.post("https://cms.maximemoreillon.com/get_article",{_id:this.$route.query._id}).then((function(e){e.data&&(t.article_data=e.data,t.article_data.edit_date=new Date),t.article_loading=!1})).catch((function(t){return alert(t)})))},toggle_published:function(){this.article_data.published=!this.article_data.published},submit_article:function(){var t=this;this.article_loading=!0,this.article_data.title=this.article_title,this.article_data.summary=this.article_summary,this.article_data.thumbnail_src=this.article_thumbnail_src,this.axios.post("https://cms.maximemoreillon.com/edit_article",this.article_data).then((function(e){t.article_loading=!1,t.$store.commit("update_categories"),t.$router.push({path:"/article",query:{_id:e.data._id}})})).catch((function(t){return alert(t)}))},delete_article:function(){var t=this;confirm("Delete article?")&&(this.article_loading=!0,this.axios.post("https://cms.maximemoreillon.com/delete_article",{_id:this.article_data._id}).then((function(){t.article_loading=!1,t.$store.commit("update_categories"),t.$router.push({path:"/article_list"})})).catch((function(t){return alert(t)})))},view_article:function(){this.$router.push({path:"article",query:{_id:this.article_data._id}})},add_tag:function(){this.article_data.tags.push(this.$refs.tag_input.value),this.$refs.tag_input.value=""},delete_tag:function(t){this.article_data.tags.splice(t,1)}},computed:{article_title:function(){var t=document.createElement("div");t.innerHTML=this.article_data.content;var e=t.getElementsByTagName("h1")[0];return e?e.innerHTML:"Untitled"},article_summary:function(){var t=document.createElement("div");t.innerHTML=this.article_data.content;var e=t.getElementsByTagName("p")[0];return e?e.innerHTML:""},article_thumbnail_src:function(){var t=document.createElement("div");t.innerHTML=this.article_data.content;var e=t.getElementsByTagName("img")[0];return e?e.src:""}},mounted:function(){this.get_article_if_exists()}}),nt=it,rt=(a("b545"),Object(s["a"])(nt,et,at,!1,null,null,null)),ot=rt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article_list_view"},[a("Toolbar",[a("IconButton",{attrs:{icon:"mdi-filter"}}),a("IconButton",{attrs:{icon:"mdi-sort-variant"}}),a("div",{staticClass:"growing_spacer"}),t.$store.state.user?a("IconButton",{attrs:{icon:"mdi-plus"},on:{buttonClicked:function(e){return t.new_article()}}}):t._e()],1),t.articles_loading?a("Loader"):a("div",{staticClass:"articles_container"},t._l(t.articles,(function(t){return a("ArticlePreview",{key:t._id,attrs:{article:t}})})),1)],1)},st=[],lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article_preview",on:{click:function(e){return t.view_article(t.article._id)}}},[t.article.published&&t.$store.state.user?a("span",{staticClass:"publishing_status mdi mdi-earth"}):t._e(),a("div",{staticClass:"article_title"},[t._v(t._s(t.article.title))]),t.article.creation_date?a("div",{staticClass:"article_metadata"},[a("span",{staticClass:"article_date"},[t._v(t._s(t.format_date(t.article.creation_date)))]),"category"in t.$route.query||!t.article.category?"category"in t.$route.query?t._e():a("span",{staticClass:"article_category"},[t._v(" Uncategorized ")]):a("span",{staticClass:"article_category"},[t._v(" "+t._s(t.article.category)+" ")])]):t._e(),t.article.thumbnail_src?a("img",{staticClass:"article_thumbnail",attrs:{src:t.article.thumbnail_src,alt:""}}):t._e(),t.article.summary?a("dot",{staticClass:"article_summary",attrs:{msg:t.article.summary}}):t._e(),t.article.tags?a("div",{staticClass:"tags_container"},t._l(t.article.tags,(function(e,i){return a("div",{key:i,staticClass:"tag"},[t._v(" "+t._s(e)+" ")])})),0):t._e()],1)},ut=[],dt=a("e438"),_t={name:"ArticlePreview",props:{article:Object},components:{dot:dt["a"]},mixins:[K],methods:{view_article:function(t){this.$router.push({path:"article",query:{_id:t}})}},computed:{article_title:function(){var t=document.createElement("div");t.innerHTML=this.article.content;var e=t.getElementsByTagName("h1")[0];return e?e.innerHTML:"Untitled"},article_summary:function(){var t=document.createElement("div");t.innerHTML=this.article.content;var e=t.getElementsByTagName("p")[0];return e?e.innerHTML:""},article_thumbnail_src:function(){var t=document.createElement("div");t.innerHTML=this.article.content;var e=t.getElementsByTagName("img")[0];return e?e.src:""}}},mt=_t,ft=(a("9b6c"),Object(s["a"])(mt,lt,ut,!1,null,"de499c1c",null)),pt=ft.exports,ht={components:{IconButton:L,ArticlePreview:pt,Toolbar:R,Loader:G},data:function(){return{articles:[],articles_loading:!1}},methods:{new_article:function(){this.$router.push({path:"article_editor"})},get_articles:function(t){var e=this;this.articles_loading=!0,this.axios.post("https://cms.maximemoreillon.com/get_article_list",{category:t}).then((function(t){console.log(t.data),e.articles=t.data,e.articles_loading=!1})).catch((function(t){return alert(t)}))}},beforeRouteUpdate:function(t,e,a){this.get_articles(t.query.category),a()},mounted:function(){this.get_articles(this.$route.query.category)},computed:{}},gt=ht,vt=(a("e25a"),Object(s["a"])(gt,ct,st,!1,null,"8c50893e",null)),bt=vt.exports;i["a"].use(d["a"]);var yt=[{path:"/",name:"home",component:g},{path:"/about",name:"about",component:w},{path:"/article_list",name:"article_list",component:bt},{path:"/article",name:"article",component:tt,props:!0},{path:"/article_editor",name:"article_editor",component:ot,props:!0}],Ct=new d["a"]({mode:"history",base:"/",routes:yt}),$t=Ct,wt=(a("4de4"),a("d81d"),a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("2909")),kt=a("2f62"),xt=a("bc3a"),Tt=a.n(xt);i["a"].use(kt["a"]);var Et=new kt["a"].Store({state:{user:void 0,categories:[]},mutations:{check_authentication:function(t){console.log("[Auth] Checking authentication"),Tt.a.post("https://authentication.maximemoreillon.com/status").then((function(e){e.data.logged_in?(console.log("[Auth] Logged in"),t.user=e.data.username):(console.log("[Auth] Logged out"),t.user=void 0)})).catch((function(t){return console.log(t)}))},update_categories:function(t){Tt.a.post("https://cms.maximemoreillon.com/get_article_categories").then((function(e){t.categories=Object(wt["a"])(new Set(e.data.map((function(t){return t.category})))).filter((function(t){return void 0!=t})).filter((function(t){return""!=t}))})).catch((function(t){return console.log(t)}))}},actions:{},modules:{}}),Ot=a("a7fe"),Bt=a.n(Ot),jt=a("953d"),Lt=a.n(jt),Mt=a("f318"),qt=a.n(Mt),It=a("2a19");a("5363"),a("a753"),a("8096"),a("14e1");Tt.a.defaults.withCredentials=!0,Tt.a.defaults.crossDomain=!0,jt["Quill"].register(jt["Quill"].import("attributors/style/align"),!0),jt["Quill"].register(jt["Quill"].import("attributors/class/color"),!0),jt["Quill"].register(jt["Quill"].import("attributors/style/size"),!0),jt["Quill"].register("modules/imageResize",qt.a),jt["Quill"].register("modules/imageDrop",It["a"]),i["a"].use(Lt.a),i["a"].use(Bt.a,Tt.a),i["a"].config.productionTip=!1,$t.beforeEach((function(t,e,a){Et.commit("check_authentication"),a()})),new i["a"]({router:$t,store:Et,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,a){},"93a1":function(t,e,a){},"9b6c":function(t,e,a){"use strict";var i=a("25cf"),n=a.n(i);n.a},a851:function(t,e,a){"use strict";var i=a("5567"),n=a.n(i);n.a},a95c:function(t,e,a){"use strict";var i=a("f2be"),n=a.n(i);n.a},aafc:function(t,e,a){},b545:function(t,e,a){"use strict";var i=a("32ff"),n=a.n(i);n.a},bf8a:function(t,e,a){"use strict";var i=a("93a1"),n=a.n(i);n.a},e25a:function(t,e,a){"use strict";var i=a("2d74"),n=a.n(i);n.a},f00f:function(t,e,a){"use strict";var i=a("aafc"),n=a.n(i);n.a},f2be:function(t,e,a){}});
//# sourceMappingURL=app.f665acc6.js.map