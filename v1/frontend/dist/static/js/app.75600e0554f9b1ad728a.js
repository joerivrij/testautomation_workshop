webpackJsonp([1],{"3J76":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTciIGhlaWdodD0iNzYiIHZpZXdCb3g9IjAgMCAxOTcgNzYiPgogICAgPGRlZnM+CiAgICAgICAgPHN0eWxlPi5he2ZpbGw6I2VlYzU0ODt9PC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOCAtMjYpIj4KICAgICAgICA8cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjE5NyIgaGVpZ2h0PSI3NiIgcng9IjEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOCAyNikiLz4KICAgICAgICA8cGF0aCBkPSJNMi4xMyw2OFYyNy44SDE2LjA1VjY4Wm0xNy41MiwwVjI3LjhoMjAuN2wzLjEyLDE1LjM2TDQ2LjA1LDI3LjhoMjEuM1Y2OEg1My40M1Y0Ny4zaC0uNjZMNDkuMjksNjcuNThIMzcuNjVMMzQuMjMsNDcuM2gtLjY2VjY4Wk02OS42OSwzOS4xNFYyNy44aDMwVjM5LjE0aC03LjhWNjhINzcuOTdWMzkuMTRaTTExOS42Nyw2OEgxMDIuMDlWMjcuOGgxNi45OHExMC4zOCwwLDE0Ljk0LDQuNjh0NC41NiwxNC45N3EwLDEwLjI5LTQuMzgsMTUuNDJUMTE5LjY3LDY4Wm00Ljg2LTE5Ljg2cTAtNS40LTEuMTEtNy4ydC00Ljk1LTEuOGgtMi40NlY1Ni42NmgyLjQ2YTYuMTQzLDYuMTQzLDAsMCwwLDQuNjItMS41NlExMjQuNTMsNTMuNTQsMTI0LjUzLDQ4LjE0Wm0zNi4zLTExLjIycTExLjg4LDAsMTEuODgsMTUuNDIsMCw5LjI0LTMuNTQsMTIuODR0LTEyLjksMy42YTExOS4wMTIsMTE5LjAxMiwwLDAsMS0xMi40Mi0xLjAybC0yLjctLjM2VjI2LjZoMTMuNDRWMzcuODhBMjguMjQ0LDI4LjI0NCwwLDAsMSwxNjAuODMsMzYuOTJabS00LjMyLDIxcTIuNjQsMCwyLjY0LTUuMjhhOC4zODYsOC4zODYsMCwwLDAtLjYtMy44NCwyLjE3MywyLjE3MywwLDAsMC0yLjA0LTEuMDJsLTEuOTIuNDJ2OS41NEE4LjcsOC43LDAsMCwwLDE1Ni41MSw1Ny45MloiCiAgICAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkuNSAxNykiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},"7hEb":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App",created:function(){var e=this;this.$store.dispatch("tryAutoLogin").then(function(t){t&&e.$router.push({name:"movies"})})}},o,!1,function(e){s("7hEb")},null,null).exports,a=s("Dd8w"),i=s.n(a),l=s("NYxO"),u={computed:i()({},Object(l.c)(["loggedIn"])),methods:{navigateToHome:function(){this.$router.push("/")}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__logo"},[n("img",{staticClass:"logo",attrs:{src:s("3J76"),alt:""},on:{click:e.navigateToHome}})]),e._v(" "),e._m(0),e._v(" "),n("ul",{staticClass:"header-menu"},[e.loggedIn?e._e():n("li",{staticClass:"header-menu__item"},[n("router-link",{attrs:{tag:"a",to:{name:"signUp"}}},[e._v("Sign Up")])],1),e._v(" "),e.loggedIn?e._e():n("li",{staticClass:"header-menu__item"},[n("router-link",{attrs:{tag:"a",to:{name:"login"}}},[e._v("Login")])],1),e._v(" "),e.loggedIn?n("li",{staticClass:"header-menu__item"},[n("router-link",{attrs:{tag:"a",to:{name:"profile"}}},[e._v("Profile")])],1):e._e(),e._v(" "),e.loggedIn?n("li",{staticClass:"header-menu__item"},[n("router-link",{attrs:{tag:"a",to:{name:"logout"}}},[e._v("Logout")])],1):e._e()])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header__title"},[t("h2",[this._v("Movies")])])}]};var m=s("VU/8")(u,c,!1,function(e){s("zGlv")},"data-v-f5c13d3c",null).exports,d=s("/ocq"),v={data:function(){return{imdbId:this.$route.params.imdbId}},methods:i()({},Object(l.b)(["getMovie"])),computed:i()({},Object(l.c)(["currentMovie"])),name:"movie-detail",mounted:function(){this.getMovie(this.imdbId)}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-header"),e._v(" "),s("section",{staticClass:"cta__container jumbotron text-center"},[s("router-link",{attrs:{tag:"button",to:{name:"movies"}}},[e._v("Show all movies")]),e._v(" "),s("p",[e._v(e._s(e.currentMovie.title))])],1),e._v(" "),s("main",{staticClass:"movies"},[s("img",{attrs:{src:e.currentMovie.image}}),e._v(" "),s("dl",[s("dt",[e._v("Title")]),e._v(" "),s("dd",[e._v(e._s(e.currentMovie.title))]),e._v(" "),s("dt",[e._v("Genre")]),e._v(" "),s("dd",[e._v(e._s(e.currentMovie.type))]),e._v(" "),s("dt",[e._v("Year")]),e._v(" "),s("dd",[e._v(e._s(e.currentMovie.year))])]),e._v(" "),s("div",[e._v(e._s(e.currentMovie.description))])])],1)},staticRenderFns:[]},g=s("VU/8")(v,p,!1,null,null,null).exports,_=s("mtWM"),h=s.n(_),f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"search-movie"},[t("input",{attrs:{value:"",placeholder:"Search for a movie"}}),this._v(" "),t("button",[this._v("Search")])])}]},M={name:"Movies",data:function(){return{msg:"Welcome to Your Vue.js App",movies:[]}},components:{"search-movie":s("VU/8")({name:"search-movie"},f,!1,null,null,null).exports},computed:i()({},Object(l.c)(["loggedIn"])),methods:{getAllMovies:function(){var e=this;h.a.get("http://localhost:8080/v1/proxy/movies/").then(function(t){e.movies=t.data})}},mounted:function(){this.getAllMovies()}},w={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"movies"},[s("v-header"),e._v(" "),s("section",{staticClass:"cta__container jumbotron text-center"},[e.loggedIn?s("hr"):e._e(),e._v(" "),e.loggedIn?s("search-movie"):e._e()],1),e._v(" "),s("main",{staticClass:"movies"},[s("ul",e._l(e.movies,function(t,n){return s("li",{key:n},[s("h3",[e._v(e._s(t.title))]),e._v(" "),s("p",[e._v(e._s(t.description))]),e._v(" "),e.loggedIn?s("router-link",{attrs:{tag:"a",to:{name:"movie",params:{imdbId:t.imdb}}}},[e._v("more...")]):e._e()],1)}),0)])],1)},staticRenderFns:[]},I=s("VU/8")(M,w,!1,null,null,null).exports,C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home"},[t("v-header"),this._v(" "),t("section",{staticClass:"cta__container jumbotron text-center"},[t("hr"),this._v(" "),t("router-link",{attrs:{tag:"button",to:"movies"}},[this._v("All Movies")])],1),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"sneek-preview"},[t("div",{staticClass:"sneek-preview__container"},[t("h3",[this._v("Coming soon:")]),this._v(" "),t("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/Vm4tx1O9GAc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])}]},j=s("VU/8")({name:"Movies",data:function(){return{msg:"Welcome to Your Vue.js App"}}},C,!1,null,null,null).exports,N={name:"Login",data:function(){return{msg:"Welcome to Your Vue.js App",loginUrl:"http://localhost:8080/v1/proxy/tokens/",userName:"",password:""}},methods:i()({},Object(l.b)(["loginWithCredentials"]),{login:function(){var e={username:this.userName,password:this.password};this.loginWithCredentials(e)&&this.$router.push("movies")}})},L={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("v-header"),e._v(" "),s("section",{staticClass:"login__container jumbotron text-center"},[s("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"login__username",attrs:{type:"text",id:"username"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"username"}},[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"login__password",attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),s("button",{staticClass:"login__submit",on:{click:e.login}},[e._v("Submit")])])],1)},staticRenderFns:[]},y=s("VU/8")(N,L,!1,null,null,null).exports,x={name:"Logout",computed:i()({},Object(l.c)(["loggedIn"])),methods:i()({},Object(l.b)(["logOut"])),mounted:function(){this.logOut()&&this.$router.push("/")}},b={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"logout"},[s("v-header"),e._v(" "),s("section",{staticClass:"logout__container jumbotron text-center"},[e.loggedIn?s("p",[e._v("Hello, still logged in..")]):e._e(),e._v(" "),e.loggedIn?e._e():s("p",[e._v("You are successfully logged out.")])])],1)},staticRenderFns:[]},A=s("VU/8")(x,b,!1,null,null,null).exports,T={name:"SignUp",data:function(){return{submitUrl:"http://localhost:8080/v1/proxy/users/",msg:"Welcome to Your Vue.js App",username:"",password:"",confirmPassword:""}},methods:{signUp:function(){var e={userName:this.userName,password:this.password};h.a.post(this.submitUrl,e,{responseType:"json",withCredentials:!0}).then(function(e){return console.info(e)}).catch(function(e){return console.error(e)})}}},D={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("v-header"),e._v(" "),s("section",{staticClass:"login__container jumbotron text-center"},[s("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"login__username",attrs:{type:"text",id:"username"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"login__password",attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"repeat-password"}},[e._v("Repeat Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],staticClass:"login__password",attrs:{type:"password",id:"repeat-password"},domProps:{value:e.confirmPassword},on:{input:function(t){t.target.composing||(e.confirmPassword=t.target.value)}}}),e._v(" "),s("button",{staticClass:"login__submit",on:{click:e.signUp}},[e._v("Sign Up")])])],1)},staticRenderFns:[]};var E=s("VU/8")(T,D,!1,function(e){s("PZyp")},"data-v-0ee55533",null).exports,O={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"user-profile"})},staticRenderFns:[]},k=s("VU/8")({name:"UserProfile"},O,!1,null,null,null).exports,S=s("mvHQ"),z=s.n(S);n.a.use(l.a);var U=new l.a.Store({state:{token:"",userId:null,proxyUrl:"http://localhost:8080",loginUrl:"http://localhost:8080/v1/proxy/tokens/",signUpUrl:"http://localhost:8080/v1/proxy/users/",moviesUrl:"/v1/proxy/movies/",loggedIn:!1,loginExpires:null,currentMovie:{}},mutations:{setToken:function(e,t){e.token=t.token,e.userId=t.userId},setCurrentMovie:function(e,t){e.currentMovie=t}},actions:{logOut:function(e){return e.state.token="",localStorage.setItem("token",null),localStorage.setItem("userId",null),localStorage.setItem("expirationDate",null),!0},loginWithCredentials:function(e,t){var s=e.commit,n=e.state,o={username:t.username,password:t.password,id:1};h.a.post(n.loginUrl,o,{responseType:"json",withCredentials:!0}).then(function(e){var t=e.data.access_token,n=new Date(Date.now()+1e3*e.data.expires_in);return s("setToken",{token:t,userId:o.id}),localStorage.setItem("token",z()(t)),localStorage.setItem("userId",z()(o.id)),localStorage.setItem("expirationDate",z()(n)),!0}).catch(function(e){return console.error(e),!1})},tryAutoLogin:function(e){var t=e.commit,s=JSON.parse(localStorage.getItem("token"));if(!s)return!1;var n=JSON.parse(localStorage.getItem("expirationDate"));return!(new Date>=n)&&(t("setToken",{token:s,userId:JSON.parse(localStorage.getItem("userId"))}),console.info("Joepie auto ingelogd!"),!0)},getMovie:function(e,t){var s=e.commit,n=e.state;h.a.create({baseURL:n.proxyUrl,timeout:5e3,headers:{Authorization:"Bearer "+n.token,"Content-Type":"application/json"}}).get(""+(n.moviesUrl+t)).then(function(e){return s("setCurrentMovie",e.data),!0}).catch(function(e){return console.error(e),!1})}},getters:{token:function(e){return e.token},loggedIn:function(e){return!!e.token},currentMovie:function(e){return e.currentMovie}}});n.a.use(d.a);var Y=new d.a({base:"/",routes:[{path:"/",name:"Home",component:j},{path:"/movies",name:"movies",component:I,meta:{requiresAuth:!1}},{path:"/:imdbId/movie",component:g,name:"movie",meta:{requiresAuth:!0},props:!0},{path:"/login",name:"login",component:y},{path:"/logout",name:"logout",component:A},{path:"/signup",name:"signUp",component:E},{path:"/profile",name:"profile",component:k}]});Y.beforeEach(function(e,t,s){if(e.matched.some(function(e){return e.meta.requiresAuth})){if(U.getters.loggedIn)return void s();s("/")}else s()});var P=Y;n.a.config.productionTip=!1,n.a.component("v-header",m),new n.a({el:"#app",router:P,store:U,components:{App:r},template:"<App/>"})},PZyp:function(e,t){},zGlv:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.75600e0554f9b1ad728a.js.map