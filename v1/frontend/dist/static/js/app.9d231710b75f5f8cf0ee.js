webpackJsonp([1],{"3J76":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTciIGhlaWdodD0iNzYiIHZpZXdCb3g9IjAgMCAxOTcgNzYiPgogICAgPGRlZnM+CiAgICAgICAgPHN0eWxlPi5he2ZpbGw6I2VlYzU0ODt9PC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOCAtMjYpIj4KICAgICAgICA8cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjE5NyIgaGVpZ2h0PSI3NiIgcng9IjEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOCAyNikiLz4KICAgICAgICA8cGF0aCBkPSJNMi4xMyw2OFYyNy44SDE2LjA1VjY4Wm0xNy41MiwwVjI3LjhoMjAuN2wzLjEyLDE1LjM2TDQ2LjA1LDI3LjhoMjEuM1Y2OEg1My40M1Y0Ny4zaC0uNjZMNDkuMjksNjcuNThIMzcuNjVMMzQuMjMsNDcuM2gtLjY2VjY4Wk02OS42OSwzOS4xNFYyNy44aDMwVjM5LjE0aC03LjhWNjhINzcuOTdWMzkuMTRaTTExOS42Nyw2OEgxMDIuMDlWMjcuOGgxNi45OHExMC4zOCwwLDE0Ljk0LDQuNjh0NC41NiwxNC45N3EwLDEwLjI5LTQuMzgsMTUuNDJUMTE5LjY3LDY4Wm00Ljg2LTE5Ljg2cTAtNS40LTEuMTEtNy4ydC00Ljk1LTEuOGgtMi40NlY1Ni42NmgyLjQ2YTYuMTQzLDYuMTQzLDAsMCwwLDQuNjItMS41NlExMjQuNTMsNTMuNTQsMTI0LjUzLDQ4LjE0Wm0zNi4zLTExLjIycTExLjg4LDAsMTEuODgsMTUuNDIsMCw5LjI0LTMuNTQsMTIuODR0LTEyLjksMy42YTExOS4wMTIsMTE5LjAxMiwwLDAsMS0xMi40Mi0xLjAybC0yLjctLjM2VjI2LjZoMTMuNDRWMzcuODhBMjguMjQ0LDI4LjI0NCwwLDAsMSwxNjAuODMsMzYuOTJabS00LjMyLDIxcTIuNjQsMCwyLjY0LTUuMjhhOC4zODYsOC4zODYsMCwwLDAtLjYtMy44NCwyLjE3MywyLjE3MywwLDAsMC0yLjA0LTEuMDJsLTEuOTIuNDJ2OS41NEE4LjcsOC43LDAsMCwwLDE1Ni41MSw1Ny45MloiCiAgICAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkuNSAxNykiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},"7gZX":function(e,t){},AMaa:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App",created:function(){var e=this;this.$store.dispatch("tryAutoLogin").then(function(t){t&&e.$router.push({name:"movies"})}),this.$store.dispatch("getMovies")}},n,!1,function(e){s("P+L9")},null,null).exports,o=s("Dd8w"),i=s.n(o),c=s("NYxO"),u={computed:i()({},Object(c.c)(["loggedIn"])),methods:{navigateToHome:function(){this.$router.push("/")}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[a("div",{staticClass:"header__logo"},[a("img",{staticClass:"logo",attrs:{src:s("3J76"),alt:""},on:{click:e.navigateToHome}})]),e._v(" "),a("div",{staticClass:"header__title"},[a("h2",[e._t("default")],2)]),e._v(" "),a("ul",{staticClass:"header-menu"},[e.loggedIn?e._e():a("li",{staticClass:"header-menu__item"},[a("router-link",{attrs:{tag:"a",to:{name:"signUp"}}},[e._v("Sign Up")])],1),e._v(" "),e.loggedIn?e._e():a("li",{staticClass:"header-menu__item"},[a("router-link",{attrs:{tag:"a",to:{name:"login"}}},[e._v("Login")])],1),e._v(" "),e.loggedIn?a("li",{staticClass:"header-menu__item"},[a("router-link",{attrs:{tag:"a",to:{name:"profile"}}},[e._v("Profile")])],1):e._e(),e._v(" "),e.loggedIn?a("li",{staticClass:"header-menu__item"},[a("router-link",{attrs:{tag:"a",to:{name:"logout"}}},[e._v("Logout")])],1):e._e()])])},staticRenderFns:[]};var v=s("VU/8")(u,l,!1,function(e){s("Q7Cv")},"data-v-76fe3d53",null).exports,m=s("/ocq"),d={data:function(){return{imdbId:this.$route.params.imdbId}},methods:i()({},Object(c.b)(["getMovie"])),computed:i()({},Object(c.c)(["currentMovie"])),name:"movie-detail",mounted:function(){this.getMovie(this.imdbId)}},g={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-header"),e._v(" "),s("section",{staticClass:"cta__container"},[s("router-link",{attrs:{tag:"button",to:{name:"movies"}}},[e._v("Show all movies")]),e._v(" "),s("h3",[e._v(e._s(e.currentMovie.title))])],1),e._v(" "),s("main",{staticClass:"movies"},[s("img",{attrs:{src:e.currentMovie.image}}),e._v(" "),s("dl",[s("dt",[e._v("Title")]),e._v(" "),s("dd",[e._v(e._s(e.currentMovie.title))]),e._v(" "),s("dt",[e._v("Genre")]),e._v(" "),s("dd",[e._v(e._s(e.currentMovie.type))]),e._v(" "),s("dt",[e._v("Year")]),e._v(" "),s("dd",[e._v(e._s(e.currentMovie.year))])]),e._v(" "),s("div",[e._v(e._s(e.currentMovie.description))])])],1)},staticRenderFns:[]};var _=s("VU/8")(d,g,!1,function(e){s("7gZX")},"data-v-bc097ab2",null).exports,p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search-movie"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.inputVal,expression:"inputVal"}],staticClass:"search-movie__input",attrs:{placeholder:"Search for a movie"},domProps:{value:e.inputVal},on:{input:function(t){t.target.composing||(e.inputVal=t.target.value)}}}),e._v(" "),s("button",{staticClass:"search-movie__button"},[e._v("Search")])])},staticRenderFns:[]};var h=s("VU/8")({name:"search-movie",props:["value"],data:function(){return{inputVal:this.value}},watch:{inputVal:function(e){this.$emit("input",e)}}},p,!1,function(e){s("s9PG")},"data-v-58fc4990",null).exports,f={name:"Movies",data:function(){return{movies:[],searchValue:"",searchResults:[]}},watch:{searchValue:function(e){this.checkSearch(e)}},methods:i()({},Object(c.b)(["searchMovie"]),{checkSearch:function(e){this.searchResults=[],e.length>1&&this.searchMovie(e)}}),components:{"search-movie":h},computed:i()({},Object(c.c)(["loggedIn","getMovies","getSearchedMovies"]))},M={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"movies"},[a("v-header",[e._v("All Movies")]),e._v(" "),a("section",{staticClass:"cta__container"},[e.loggedIn?a("hr"):e._e(),e._v(" "),e.loggedIn?a("search-movie",{staticClass:"search-movie",model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}):e._e()],1),e._v(" "),a("main",{staticClass:"movies"},[e.searchValue?e._e():a("ul",e._l(e.getMovies,function(t,n){return a("li",{key:n},[a("div",{staticClass:"movie__image-container"},[a("div",{staticClass:"movie__image-box"},[e.loggedIn?a("router-link",{attrs:{tag:"a",to:{name:"movie",params:{imdbId:t.imdb}}}},[t.image?a("img",{staticClass:"movie__image",attrs:{src:0===t.image.indexOf("http")?t.image:"../../assets/movie_posters/"+t.image,alt:""}}):e._e(),e._v(" "),t.image?e._e():a("img",{staticClass:"movie__image",attrs:{src:s("s5ap"),alt:""}})]):e._e()],1)]),e._v(" "),a("div",{staticClass:"movie__details"},[a("h3",[e._v(e._s(t.title))]),e._v(" "),a("p",[e._v(e._s(t.description))]),e._v(" "),e.loggedIn?a("router-link",{attrs:{tag:"button",to:{name:"movie",params:{imdbId:t.imdb}}}},[e._v("more...\n          ")]):e._e()],1)])}),0),e._v(" "),e.searchValue&&e.getSearchedMovies.length>0?a("ul",e._l(e.getSearchedMovies,function(t,s){return a("li",{key:s},[e._m(0,!0),e._v(" "),a("div",{staticClass:"movie__details"},[a("h3",[e._v(e._s(t.title))]),e._v(" "),a("p",[e._v(e._s(t.description))]),e._v(" "),e.loggedIn?a("router-link",{attrs:{tag:"button",to:{name:"movie",params:{imdbId:t.imdb}}}},[e._v("more...\n          ")]):e._e()],1)])}),0):e._e(),e._v(" "),e.searchValue&&0===e.getSearchedMovies.length?a("div",[e._v("No search results!")]):e._e()])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"movie__image-container"},[t("div",{staticClass:"movie__image-box"},[t("img",{staticClass:"movie__image",attrs:{src:s("s5ap"),alt:""}})])])}]};var C=s("VU/8")(f,M,!1,function(e){s("AMaa")},"data-v-79dff574",null).exports,I={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home"},[t("v-header",[this._v("Movies")]),this._v(" "),t("section",{staticClass:"cta__container"},[t("hr"),this._v(" "),t("router-link",{attrs:{tag:"button",to:"movies"}},[this._v("List all movies")])],1),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"sneek-preview"},[t("div",{staticClass:"sneek-preview__container"},[t("h3",[this._v("Coming soon:")]),this._v(" "),t("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/Vm4tx1O9GAc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])}]},w=s("VU/8")({name:"Home"},I,!1,null,null,null).exports,N={name:"Login",data:function(){return{msg:"Welcome to Your Vue.js App",loginUrl:"http://localhost:8080/v1/proxy/tokens/",userName:"",password:""}},methods:i()({},Object(c.b)(["loginWithCredentials"]),{login:function(){var e=this,t={username:this.userName,password:this.password};this.$store.dispatch("loginWithCredentials",t).then(function(t){t?e.$router.push({name:"movies"}):e.$router.push({name:"loginFailed"})})}})},L={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("v-header",[e._v("Login")]),e._v(" "),s("form",[s("section",{staticClass:"cta__container"},[s("hr"),e._v(" "),s("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"login__username",attrs:{type:"text",id:"username"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"username"}},[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"login__password",attrs:{type:"password",autocomplete:"off",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),s("button",{staticClass:"login__submit",on:{click:function(t){return t.preventDefault(),e.login(t)}}},[e._v("Submit")])])])],1)},staticRenderFns:[]};var j=s("VU/8")(N,L,!1,function(e){s("QK1D")},"data-v-f10b8094",null).exports,b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login"},[t("v-header",[this._v("Login Failed")]),this._v(" "),t("section",{staticClass:"cta__container"},[t("hr"),this._v(" "),t("router-link",{attrs:{tag:"button",to:{name:"login"}}},[this._v("Retry")]),this._v(" "),t("h2",[this._v("Login Failed")])],1)],1)},staticRenderFns:[]};var x=s("VU/8")({name:"Login-Failed",data:function(){return{}}},b,!1,function(e){s("jnbn")},"data-v-3c1d74c0",null).exports,y={name:"Logout",computed:i()({},Object(c.c)(["loggedIn"])),methods:i()({},Object(c.b)(["logOut"])),mounted:function(){this.logOut()&&this.$router.push("/")}},k={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"logout"},[s("v-header"),e._v(" "),s("section",{staticClass:"cta__container"},[e.loggedIn?s("p",[e._v("Hello, still logged in..")]):e._e(),e._v(" "),e.loggedIn?e._e():s("p",[e._v("You are successfully logged out.")])])],1)},staticRenderFns:[]},D=s("VU/8")(y,k,!1,null,null,null).exports,E={name:"SignUp",data:function(){return{submitUrl:"http://localhost:8080/v1/proxy/users/",username:"",password:"",confirmPassword:""}},methods:i()({},Object(c.b)(["signUp"]))},S={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("v-header",[e._v("Sign Up")]),e._v(" "),s("form",[s("section",{staticClass:"login__container"},[s("hr"),e._v(" "),s("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"login__username",attrs:{type:"text",id:"username"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"login__password",attrs:{type:"password",id:"password",autocomplete:"off"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"repeat-password"}},[e._v("Repeat Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],staticClass:"login__password",attrs:{type:"password",id:"repeat-password",autocomplete:"off"},domProps:{value:e.confirmPassword},on:{input:function(t){t.target.composing||(e.confirmPassword=t.target.value)}}}),e._v(" "),s("button",{staticClass:"login__submit",on:{click:function(t){return t.preventDefault(),e.signUp(t)}}},[e._v("Sign Up")])])])],1)},staticRenderFns:[]};var A=s("VU/8")(E,S,!1,function(e){s("dslD")},"data-v-76fd6dcf",null).exports,T={name:"UserProfile",computed:i()({},Object(c.c)(["currentUser"]))},U={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-profile"},[s("v-header",[e._v("User Profile")]),e._v(" "),s("section",{staticClass:"cta__container"},[s("router-link",{attrs:{tag:"button",to:{name:"movies"}}},[e._v("Show all movies")]),e._v(" "),s("h2",[e._v("Profile settings of: "+e._s(e.currentUser.name))])],1),e._v(" "),s("main",{staticClass:"movies"},[s("dl",[s("dt",[e._v("Name")]),e._v(" "),s("dd",[e._v(e._s(e.currentUser.name))]),e._v(" "),s("dt",[e._v("ID")]),e._v(" "),s("dd",[e._v(e._s(e.currentUser.id))]),e._v(" "),s("dt",[e._v("Is Logged in")]),e._v(" "),s("dd",[e._v(e._s(e.currentUser.isLoggedIn))]),e._v(" "),s("dt",[e._v("Session Expires")]),e._v(" "),s("dd",[e._v(e._s(e.currentUser.sessionExpires))])])])],1)},staticRenderFns:[]};var O=s("VU/8")(T,U,!1,function(e){s("ir5x")},"data-v-d0b36b26",null).exports,z=s("mvHQ"),V=s.n(z),P=s("mtWM"),Y=s.n(P);a.a.use(c.a);var R=new c.a.Store({state:{token:"",userId:null,userName:null,proxyUrl:"http://localhost:8080",loginUri:"/v1/proxy/tokens/",signUpUri:"/v1/proxy/users/",moviesUri:"/v1/proxy/movies/",loggedIn:!1,loginExpires:null,currentMovie:{},movies:[],searchedMovies:[]},mutations:{setToken:function(e,t){e.token=t.token,e.loggedIn=!!t.token,e.userId=t.userId,e.userName=t.userName,e.loginExpires=t.loginExpires},setCurrentMovie:function(e,t){e.currentMovie=t},setMovies:function(e,t){e.movies=t},setSearchedMovies:function(e,t){e.searchedMovies=t}},actions:{logOut:function(e){var t=e.state;return t.token=null,t.loggedIn=!!t.token,localStorage.setItem("token",null),localStorage.setItem("userId",null),localStorage.setItem("expirationDate",null),!0},loginWithCredentials:function(e,t){var s=e.commit,a=e.state,n={username:t.username,password:t.password,id:1};return Y.a.post(a.proxyUrl+a.loginUri,n,{responseType:"json",withCredentials:!0}).then(function(e){var t=e.data.access_token,a=new Date(Date.now()+1e3*e.data.expires_in);return s("setToken",{token:t,userId:n.id,userName:n.username,loginExpires:a}),localStorage.setItem("token",V()(t)),localStorage.setItem("userId",V()(n.id)),localStorage.setItem("userName",V()(n.username)),localStorage.setItem("expirationDate",V()(a)),!0}).catch(function(e){return console.error(e),!1})},tryAutoLogin:function(e){var t=e.commit,s=JSON.parse(localStorage.getItem("token"));if(!s)return!1;var a=JSON.parse(localStorage.getItem("expirationDate"));if(new Date>=a)return!1;var n=JSON.parse(localStorage.getItem("userId")),r=JSON.parse(localStorage.getItem("userName"));return t("setToken",{token:s,userId:n}),t("setToken",{token:s,userId:n,userName:r,loginExpires:a}),!0},getMovies:function(e){var t=e.commit,s=e.state;Y.a.create({baseURL:s.proxyUrl,timeout:5e3,headers:{Authorization:"Bearer "+s.token,"Content-Type":"application/json"}}).get(""+s.moviesUri).then(function(e){return t("setMovies",e.data),!0}).catch(function(e){return console.error(e),!1})},getMovie:function(e,t){var s=e.commit,a=e.state;Y.a.create({baseURL:a.proxyUrl,timeout:5e3,headers:{Authorization:"Bearer "+a.token,"Content-Type":"application/json"}}).get(""+(a.moviesUri+t)).then(function(e){return s("setCurrentMovie",e.data),!0}).catch(function(e){return console.error(e),!1})},searchMovie:function(e,t){var s=e.commit,a=e.state;Y.a.create({baseURL:a.proxyUrl,timeout:5e3,headers:{Authorization:"Bearer "+a.token,"Content-Type":"application/json"},params:{query:t}}).get(a.moviesUri+"searches").then(function(e){return s("setSearchedMovies",e.data),!0}).catch(function(e){return s("setSearchedMovies",[]),404!==e.response.status&&console.error(e),!1})}},getters:{token:function(e){return e.token},loggedIn:function(e){return e.loggedIn},currentMovie:function(e){return e.currentMovie},currentUser:function(e){return{id:e.userId,name:e.userName,isLoggedIn:e.loggedIn,sessionExpires:e.loginExpires}},getMovies:function(e){return e.movies},getSearchedMovies:function(e){return e.searchedMovies}}});a.a.use(m.a);var F=new m.a({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:w},{path:"/movies",name:"movies",component:C,meta:{requiresAuth:!1}},{path:"/:imdbId/movie",component:_,name:"movie",meta:{requiresAuth:!0},props:!0},{path:"/login",name:"login",component:j},{path:"/login-failed",name:"loginFailed",component:x},{path:"/logout",name:"logout",component:D},{path:"/signup",name:"signUp",component:A},{path:"/profile",name:"profile",component:O}]});F.beforeEach(function(e,t,s){if(e.matched.some(function(e){return e.meta.requiresAuth})){if(R.getters.loggedIn)return void s();s("/")}else s()});var $=F;a.a.config.productionTip=!1,a.a.component("v-header",v),new a.a({el:"#app",router:$,store:R,components:{App:r},template:"<App/>"})},"P+L9":function(e,t){},Q7Cv:function(e,t){},QK1D:function(e,t){},dslD:function(e,t){},ir5x:function(e,t){},jnbn:function(e,t){},s5ap:function(e,t,s){e.exports=s.p+"static/img/starwars1.6b7da53.jpg"},s9PG:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9d231710b75f5f8cf0ee.js.map