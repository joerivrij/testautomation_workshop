webpackJsonp([1],{"3J76":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTciIGhlaWdodD0iNzYiIHZpZXdCb3g9IjAgMCAxOTcgNzYiPgogICAgPGRlZnM+CiAgICAgICAgPHN0eWxlPi5he2ZpbGw6I2VlYzU0ODt9PC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOCAtMjYpIj4KICAgICAgICA8cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjE5NyIgaGVpZ2h0PSI3NiIgcng9IjEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOCAyNikiLz4KICAgICAgICA8cGF0aCBkPSJNMi4xMyw2OFYyNy44SDE2LjA1VjY4Wm0xNy41MiwwVjI3LjhoMjAuN2wzLjEyLDE1LjM2TDQ2LjA1LDI3LjhoMjEuM1Y2OEg1My40M1Y0Ny4zaC0uNjZMNDkuMjksNjcuNThIMzcuNjVMMzQuMjMsNDcuM2gtLjY2VjY4Wk02OS42OSwzOS4xNFYyNy44aDMwVjM5LjE0aC03LjhWNjhINzcuOTdWMzkuMTRaTTExOS42Nyw2OEgxMDIuMDlWMjcuOGgxNi45OHExMC4zOCwwLDE0Ljk0LDQuNjh0NC41NiwxNC45N3EwLDEwLjI5LTQuMzgsMTUuNDJUMTE5LjY3LDY4Wm00Ljg2LTE5Ljg2cTAtNS40LTEuMTEtNy4ydC00Ljk1LTEuOGgtMi40NlY1Ni42NmgyLjQ2YTYuMTQzLDYuMTQzLDAsMCwwLDQuNjItMS41NlExMjQuNTMsNTMuNTQsMTI0LjUzLDQ4LjE0Wm0zNi4zLTExLjIycTExLjg4LDAsMTEuODgsMTUuNDIsMCw5LjI0LTMuNTQsMTIuODR0LTEyLjksMy42YTExOS4wMTIsMTE5LjAxMiwwLDAsMS0xMi40Mi0xLjAybC0yLjctLjM2VjI2LjZoMTMuNDRWMzcuODhBMjguMjQ0LDI4LjI0NCwwLDAsMSwxNjAuODMsMzYuOTJabS00LjMyLDIxcTIuNjQsMCwyLjY0LTUuMjhhOC4zODYsOC4zODYsMCwwLDAtLjYtMy44NCwyLjE3MywyLjE3MywwLDAsMC0yLjA0LTEuMDJsLTEuOTIuNDJ2OS41NEE4LjcsOC43LDAsMCwwLDE1Ni41MSw1Ny45MloiCiAgICAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkuNSAxNykiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},"4Wcs":function(e,t){},LcDr:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App",created:function(){var e=this;this.$store.dispatch("tryAutoLogin").then(function(t){t&&e.$router.push({name:"movies"})}),this.$store.dispatch("getMovies")}},n,!1,function(e){s("P+L9")},null,null).exports,a=s("Dd8w"),i=s.n(a),c=s("NYxO"),u={computed:i()({},Object(c.c)(["loggedIn"])),methods:{navigateToHome:function(){this.$router.push("/")}}},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",{staticClass:"header"},[o("div",{staticClass:"header__logo"},[o("img",{staticClass:"logo",attrs:{src:s("3J76"),alt:""},on:{click:e.navigateToHome}})]),e._v(" "),o("div",{staticClass:"header__title"},[o("h2",[e._t("default")],2)]),e._v(" "),o("ul",{staticClass:"header-menu"},[e.loggedIn?e._e():o("li",{staticClass:"header-menu__item"},[o("router-link",{attrs:{tag:"a",to:{name:"signUp"}}},[e._v("Sign Up")])],1),e._v(" "),e.loggedIn?e._e():o("li",{staticClass:"header-menu__item"},[o("router-link",{attrs:{tag:"a",to:{name:"login"}}},[e._v("Login")])],1),e._v(" "),e.loggedIn?o("li",{staticClass:"header-menu__item"},[o("router-link",{attrs:{tag:"a",to:{name:"profile"}}},[e._v("Profile")])],1):e._e(),e._v(" "),e.loggedIn?o("li",{staticClass:"header-menu__item"},[o("router-link",{attrs:{tag:"a",to:{name:"logout"}}},[e._v("Logout")])],1):e._e()])])},staticRenderFns:[]};var v=s("VU/8")(u,l,!1,function(e){s("NqV/")},"data-v-232c9d76",null).exports,m=s("/ocq"),d={data:function(){return{imdbId:this.$route.params.imdbId}},methods:i()({},Object(c.b)(["getMovie"])),computed:i()({},Object(c.c)(["currentMovie"])),name:"movie-detail",mounted:function(){this.getMovie(this.imdbId)}},g={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-header"),e._v(" "),s("section",{staticClass:"cta__container jumbotron text-center"},[s("router-link",{attrs:{tag:"button",to:{name:"movies"}}},[e._v("Show all movies")]),e._v(" "),s("h3",[e._v(e._s(e.currentMovie.title))])],1),e._v(" "),s("main",{staticClass:"movies"},[s("img",{attrs:{src:e.currentMovie.image}}),e._v(" "),s("dl",[s("dt",[e._v("Title")]),e._v(" "),s("dd",[e._v(e._s(e.currentMovie.title))]),e._v(" "),s("dt",[e._v("Genre")]),e._v(" "),s("dd",[e._v(e._s(e.currentMovie.type))]),e._v(" "),s("dt",[e._v("Year")]),e._v(" "),s("dd",[e._v(e._s(e.currentMovie.year))])]),e._v(" "),s("div",[e._v(e._s(e.currentMovie.description))])])],1)},staticRenderFns:[]};var p=s("VU/8")(d,g,!1,function(e){s("4Wcs")},"data-v-0abe6e47",null).exports,_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search-movie"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.inputVal,expression:"inputVal"}],staticClass:"search-movie__input",attrs:{placeholder:"Search for a movie"},domProps:{value:e.inputVal},on:{input:function(t){t.target.composing||(e.inputVal=t.target.value)}}}),e._v(" "),s("button",{staticClass:"search-movie__button"},[e._v("Search")])])},staticRenderFns:[]};var h=s("VU/8")({name:"search-movie",props:["value"],data:function(){return{inputVal:this.value}},watch:{inputVal:function(e){this.$emit("input",e)}}},_,!1,function(e){s("s6WP")},"data-v-49e16449",null).exports,f={name:"Movies",data:function(){return{msg:"Welcome to Your Vue.js App",movies:[],searchValue:"",searchResults:[]}},watch:{searchValue:function(e){this.checkSearch(e)}},methods:i()({},Object(c.b)(["searchMovie"]),{checkSearch:function(e){this.searchResults=[],e.length>1&&this.searchMovie(e)}}),components:{"search-movie":h},computed:i()({},Object(c.c)(["loggedIn","getMovies","getSearchedMovies"]))},M={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"movies"},[s("v-header",[e._v("All Movies")]),e._v(" "),s("section",{staticClass:"cta__container jumbotron text-center"},[e.loggedIn?s("hr"):e._e(),e._v(" "),e.loggedIn?s("search-movie",{staticClass:"search-movie",model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}):e._e()],1),e._v(" "),s("main",{staticClass:"movies"},[e.searchValue?e._e():s("ul",e._l(e.getMovies,function(t,o){return s("li",{key:o},[e._m(0,!0),e._v(" "),s("div",{staticClass:"movie__details"},[s("h3",[e._v(e._s(t.title))]),e._v(" "),s("p",[e._v(e._s(t.description))]),e._v(" "),e.loggedIn?s("router-link",{attrs:{tag:"button",to:{name:"movie",params:{imdbId:t.imdb}}}},[e._v("more...\n          ")]):e._e()],1)])}),0),e._v(" "),e.searchValue&&e.getSearchedMovies.length>0?s("ul",e._l(e.getSearchedMovies,function(t,o){return s("li",{key:o},[e._m(1,!0),e._v(" "),s("div",{staticClass:"movie__details"},[s("h3",[e._v(e._s(t.title))]),e._v(" "),s("p",[e._v(e._s(t.description))]),e._v(" "),e.loggedIn?s("router-link",{attrs:{tag:"button",to:{name:"movie",params:{imdbId:t.imdb}}}},[e._v("more...\n          ")]):e._e()],1)])}),0):e._e(),e._v(" "),e.searchValue&&0===e.getSearchedMovies.length?s("div",[e._v("No search results!")]):e._e()])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"movie__image-container"},[t("div",{staticClass:"movie__image-box"},[t("img",{staticClass:"movie__image",attrs:{src:s("s5ap"),alt:""}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"movie__image-container"},[t("div",{staticClass:"movie__image-box"},[t("img",{staticClass:"movie__image",attrs:{src:s("s5ap"),alt:""}})])])}]};var C=s("VU/8")(f,M,!1,function(e){s("LcDr")},"data-v-4610bd02",null).exports,I={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home"},[t("v-header",[this._v("Movies")]),this._v(" "),t("section",{staticClass:"cta__container jumbotron text-center"},[t("hr"),this._v(" "),t("router-link",{attrs:{tag:"button",to:"movies"}},[this._v("List all movies")])],1),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"sneek-preview"},[t("div",{staticClass:"sneek-preview__container"},[t("h3",[this._v("Coming soon:")]),this._v(" "),t("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/Vm4tx1O9GAc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])}]},w=s("VU/8")({name:"Movies",data:function(){return{msg:"Welcome to Your Vue.js App"}}},I,!1,null,null,null).exports,N={name:"Login",data:function(){return{msg:"Welcome to Your Vue.js App",loginUrl:"http://localhost:8080/v1/proxy/tokens/",userName:"",password:""}},methods:i()({},Object(c.b)(["loginWithCredentials"]),{login:function(){var e={username:this.userName,password:this.password};this.loginWithCredentials(e)&&this.$router.push("movies")}})},j={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("v-header",[e._v("Login")]),e._v(" "),s("section",{staticClass:"login__container jumbotron text-center"},[s("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"login__username",attrs:{type:"text",id:"username"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"username"}},[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"login__password",attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),s("button",{staticClass:"login__submit",on:{click:e.login}},[e._v("Submit")])])],1)},staticRenderFns:[]};var L=s("VU/8")(N,j,!1,function(e){s("NSzw")},"data-v-7a3a89f0",null).exports,x={name:"Logout",computed:i()({},Object(c.c)(["loggedIn"])),methods:i()({},Object(c.b)(["logOut"])),mounted:function(){this.logOut()&&this.$router.push("/")}},b={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"logout"},[s("v-header"),e._v(" "),s("section",{staticClass:"logout__container jumbotron text-center"},[e.loggedIn?s("p",[e._v("Hello, still logged in..")]):e._e(),e._v(" "),e.loggedIn?e._e():s("p",[e._v("You are successfully logged out.")])])],1)},staticRenderFns:[]},y=s("VU/8")(x,b,!1,null,null,null).exports,S=s("mtWM"),T=s.n(S),E={name:"SignUp",data:function(){return{submitUrl:"http://localhost:8080/v1/proxy/users/",msg:"Welcome to Your Vue.js App",username:"",password:"",confirmPassword:""}},methods:{signUp:function(){var e={userName:this.userName,password:this.password};T.a.post(this.submitUrl,e,{responseType:"json",withCredentials:!0}).then(function(e){return console.info(e)}).catch(function(e){return console.error(e)})}}},k={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("v-header",[e._v("Sign Up")]),e._v(" "),s("section",{staticClass:"login__container jumbotron text-center"},[s("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"login__username",attrs:{type:"text",id:"username"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"login__password",attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"repeat-password"}},[e._v("Repeat Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],staticClass:"login__password",attrs:{type:"password",id:"repeat-password"},domProps:{value:e.confirmPassword},on:{input:function(t){t.target.composing||(e.confirmPassword=t.target.value)}}}),e._v(" "),s("button",{staticClass:"login__submit",on:{click:e.signUp}},[e._v("Sign Up")])])],1)},staticRenderFns:[]};var A=s("VU/8")(E,k,!1,function(e){s("oSLS")},"data-v-81950502",null).exports,D={name:"UserProfile",computed:i()({},Object(c.c)(["currentUser"]))},U={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-profile"},[s("v-header",[e._v("User Profile")]),e._v(" "),s("section",{staticClass:"cta__container jumbotron text-center"},[s("router-link",{attrs:{tag:"button",to:{name:"movies"}}},[e._v("Show all movies")]),e._v(" "),s("h2",[e._v("Profile settings of:"+e._s(e.currentUser.name))])],1),e._v(" "),s("main",{staticClass:"movies"},[s("dl",[s("dt",[e._v("Name")]),e._v(" "),s("dd",[e._v(e._s(e.currentUser.name))]),e._v(" "),s("dt",[e._v("ID")]),e._v(" "),s("dd",[e._v(e._s(e.currentUser.id))]),e._v(" "),s("dt",[e._v("Is Logged in")]),e._v(" "),s("dd",[e._v(e._s(e.currentUser.isLoggedIn))]),e._v(" "),s("dt",[e._v("Session Expires")]),e._v(" "),s("dd",[e._v(e._s(e.currentUser.sessionExpires))])])])],1)},staticRenderFns:[]};var O=s("VU/8")(D,U,!1,function(e){s("dTPv")},"data-v-2ad5f1ee",null).exports,z=s("mvHQ"),V=s.n(z);o.a.use(c.a);var P=new c.a.Store({state:{token:"",userId:null,userName:null,proxyUrl:"http://localhost:8080",loginUrl:"http://localhost:8080/v1/proxy/tokens/",signUpUrl:"http://localhost:8080/v1/proxy/users/",moviesUrl:"/v1/proxy/movies/",loggedIn:!1,loginExpires:null,currentMovie:{},movies:[],searchedMovies:[]},mutations:{setToken:function(e,t){e.token=t.token,e.loggedIn=!!t.token,e.userId=t.userId,e.userName=t.userName,e.loginExpires=t.loginExpires},setCurrentMovie:function(e,t){e.currentMovie=t},setMovies:function(e,t){e.movies=t},setSearchedMovies:function(e,t){e.searchedMovies=t}},actions:{logOut:function(e){var t=e.state;return t.token=null,t.loggedIn=!!t.token,localStorage.setItem("token",null),localStorage.setItem("userId",null),localStorage.setItem("expirationDate",null),!0},loginWithCredentials:function(e,t){var s=e.commit,o=e.state,n={username:t.username,password:t.password,id:1};T.a.post(o.loginUrl,n,{responseType:"json",withCredentials:!0}).then(function(e){var t=e.data.access_token,o=new Date(Date.now()+1e3*e.data.expires_in);return s("setToken",{token:t,userId:n.id,userName:n.username,loginExpires:o}),localStorage.setItem("token",V()(t)),localStorage.setItem("userId",V()(n.id)),localStorage.setItem("userName",V()(n.username)),localStorage.setItem("expirationDate",V()(o)),!0}).catch(function(e){return console.error(e),!1})},tryAutoLogin:function(e){var t=e.commit,s=JSON.parse(localStorage.getItem("token"));if(!s)return!1;var o=JSON.parse(localStorage.getItem("expirationDate"));if(new Date>=o)return!1;var n=JSON.parse(localStorage.getItem("userId")),r=JSON.parse(localStorage.getItem("userName"));return t("setToken",{token:s,userId:n}),t("setToken",{token:s,userId:n,userName:r,loginExpires:o}),!0},getMovies:function(e){var t=e.commit,s=e.state;T.a.create({baseURL:s.proxyUrl,timeout:5e3,headers:{Authorization:"Bearer "+s.token,"Content-Type":"application/json"}}).get(""+s.moviesUrl).then(function(e){return t("setMovies",e.data),!0}).catch(function(e){return console.error(e),!1})},getMovie:function(e,t){var s=e.commit,o=e.state;T.a.create({baseURL:o.proxyUrl,timeout:5e3,headers:{Authorization:"Bearer "+o.token,"Content-Type":"application/json"}}).get(""+(o.moviesUrl+t)).then(function(e){return s("setCurrentMovie",e.data),!0}).catch(function(e){return console.error(e),!1})},searchMovie:function(e,t){var s=e.commit,o=e.state;T.a.create({baseURL:o.proxyUrl,timeout:5e3,headers:{Authorization:"Bearer "+o.token,"Content-Type":"application/json"},params:{query:t}}).get(o.moviesUrl+"searches").then(function(e){return s("setSearchedMovies",e.data),!0}).catch(function(e){return s("setSearchedMovies",[]),404!==e.response.status&&console.error(e),!1})}},getters:{token:function(e){return e.token},loggedIn:function(e){return e.loggedIn},currentMovie:function(e){return e.currentMovie},currentUser:function(e){return{id:e.userId,name:e.userName,isLoggedIn:e.loggedIn,sessionExpires:e.loginExpires}},getMovies:function(e){return e.movies},getSearchedMovies:function(e){return e.searchedMovies}}});o.a.use(m.a);var Y=new m.a({base:"/",routes:[{path:"/",name:"Home",component:w},{path:"/movies",name:"movies",component:C,meta:{requiresAuth:!1}},{path:"/:imdbId/movie",component:p,name:"movie",meta:{requiresAuth:!0},props:!0},{path:"/login",name:"login",component:L},{path:"/logout",name:"logout",component:y},{path:"/signup",name:"signUp",component:A},{path:"/profile",name:"profile",component:O}]});Y.beforeEach(function(e,t,s){if(e.matched.some(function(e){return e.meta.requiresAuth})){if(P.getters.loggedIn)return void s();s("/")}else s()});var W=Y;o.a.config.productionTip=!1,o.a.component("v-header",v),new o.a({el:"#app",router:W,store:P,components:{App:r},template:"<App/>"})},NSzw:function(e,t){},"NqV/":function(e,t){},"P+L9":function(e,t){},dTPv:function(e,t){},oSLS:function(e,t){},s5ap:function(e,t,s){e.exports=s.p+"static/img/starwars1.6b7da53.jpg"},s6WP:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.05fa93caf8f5ddcc3780.js.map