(function(t){function e(e){for(var r,c,a=e[0],u=e[1],l=e[2],s=0,d=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);b&&b(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function c(t){return a.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d63f1":"9065e2cb"}[t]+".js"}function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=c(t);var l=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(s);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}i[t]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var b=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0067":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("7a23"),i={class:"card"},o=Object(r["f"])("h2",null,"Parolni unutdingizmi?",-1);function c(t,e,n,c,a,u){return Object(r["r"])(),Object(r["e"])("div",i,[o,Object(r["f"])("button",{onClick:e[0]||(e[0]=function(e){return t.$router.push("/login")}),class:"btn"},"Loginga qaytish")])}},"0d54":function(t,e){},"441a":function(t,e,n){},"4f3a":function(t,e,n){"use strict";var r=n("0067"),i=n("91b2"),o=n("6b0d"),c=n.n(o);const a=c()(i["default"],[["render",r["a"]]]);e["default"]=a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i={class:"container with-nav"};function o(t,e,n,o,c,a){var u=Object(r["y"])("the-navbar"),l=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(u,{visible:c.isAuth},null,8,["visible"]),Object(r["f"])("div",i,[Object(r["h"])(l)])],64)}n("caad"),n("2532");var c={key:0,class:"navbar"},a=Object(r["f"])("h3",null,"GMail",-1),u={class:"navbar-menu"},l=Object(r["g"])("Asosiy"),s=Object(r["g"])("Chiqish");function b(t,e,n,i,o,b){var d=Object(r["y"])("router-link");return n.visible?(Object(r["r"])(),Object(r["e"])("header",c,[a,Object(r["f"])("ul",u,[Object(r["f"])("li",null,[Object(r["h"])(d,{to:"/dashboard"},{default:Object(r["E"])((function(){return[l]})),_:1})]),Object(r["f"])("li",null,[Object(r["h"])(d,{to:"/mail"},{default:Object(r["E"])((function(e){var n=e.href;return[Object(r["f"])("a",{href:"#",class:Object(r["n"])({active:t.$route.path.includes(n)})},"Pochta",2)]})),_:1})]),Object(r["f"])("li",null,[Object(r["h"])(d,{to:"/login",onClick:b.logout},{default:Object(r["E"])((function(){return[s]})),_:1},8,["onClick"])])])])):Object(r["d"])("",!0)}var d={props:{visible:{type:Boolean,default:!1}},inject:["logout"]},f=n("6b0d"),p=n.n(f);const h=p()(d,[["render",b]]);var m=h,j={data:function(){return{isAuth:!1}},components:{TheNavbar:m},methods:{login:function(){this.isAuth=!0,this.$route.query.page?this.$router.push(this.$route.query.page):this.$router.push("/dashboard")},logout:function(){this.isAuth=!1,this.$router.push({path:"/login",query:{page:this.$route.path}})}},provide:function(){return{login:this.login,logout:this.logout,emails:[{id:1,theme:"To'liq Front-End kursi"},{id:2,theme:"To'liq Back-End kursi"},{id:3,theme:"Python dasturlash tili"},{id:4,theme:"JavaScript dasturlash tili"},{id:5,theme:"VueJS frameworki"}]}}};const O=p()(j,[["render",o]]);var v=O,g=(n("441a"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),y=Object(r["f"])("h2",null,"Gmail",-1),k={class:"form-control"},w=Object(r["f"])("label",{for:"email"},"Email",-1),E={class:"form-control"},P=Object(r["f"])("label",{for:"password"},"Parol",-1),_=Object(r["f"])("button",{class:"btn primary",type:"submit"},"Kirish",-1),q=Object(r["f"])("button",{class:"btn warning"},"Parolni unutdingizmi?",-1);function A(t,e,n,i,o,c){var a=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["e"])("form",{class:"card",onSubmit:e[2]||(e[2]=Object(r["G"])((function(){return c.submit&&c.submit.apply(c,arguments)}),["prevent"]))},[y,Object(r["f"])("div",k,[w,Object(r["F"])(Object(r["f"])("input",{type:"text",id:"email","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.email=t})},null,512),[[r["C"],o.email,void 0,{trim:!0}]])]),Object(r["f"])("div",E,[P,Object(r["F"])(Object(r["f"])("input",{type:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.password=t})},null,512),[[r["C"],o.password]])]),_,Object(r["h"])(a,{to:"/forget"},{default:Object(r["E"])((function(){return[q]})),_:1})],32)}var C={data:function(){return{email:"",password:""}},computed:{isValid:function(){return""!==this.email&&""!==this.password}},inject:["login"],methods:{submit:function(){this.isValid&&this.login()}}};const x=p()(C,[["render",A]]);var $=x,S=n("4f3a"),L={class:"card no-padding"},T={class:"card-nav"},M={class:"list"},F={class:"card-body"};function V(t,e,n,i,o,c){var a=Object(r["y"])("router-link"),u=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["e"])("div",L,[Object(r["f"])("div",T,[Object(r["f"])("ul",M,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(c.emails,(function(t){return Object(r["r"])(),Object(r["e"])("li",{class:"list-item",key:t.id},[Object(r["h"])(a,{to:"/mail/"+t.id},{default:Object(r["E"])((function(){return[Object(r["g"])(Object(r["A"])(t.theme),1)]})),_:2},1032,["to"])])})),128))])]),Object(r["f"])("div",F,[Object(r["h"])(u)])])}var B={key:0},I=Object(r["f"])("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, cumque ea laborum laudantium nostrum odio quis soluta sunt velit? ",-1),J={key:1},G=Object(r["f"])("h3",null,"Biror bo'limni tanlang",-1),z=[G];function N(t,e,n,i,o,c){return c.email?(Object(r["r"])(),Object(r["e"])("div",B,[Object(r["f"])("h2",null,Object(r["A"])(c.email.theme),1),I,Object(r["f"])("button",{class:"btn",onClick:e[0]||(e[0]=function(e){return t.$router.push("/mail")})},"Yopish")])):(Object(r["r"])(),Object(r["e"])("div",J,z))}n("7db0");var U={inject:["emails"],props:["mailId"],computed:{email:function(){var t=this;return this.emails.find((function(e){return e.id==t.mailId}))}}};const H=p()(U,[["render",N]]);var K=H,Y={inject:["emails"],components:{AppEmailBody:K}};n("d1cb");const D=p()(Y,[["render",V],["__scopeId","data-v-f18b1ebe"]]);var Q=D,R={class:"card"},W=Object(r["f"])("h1",null,"404 Not Found",-1),X=Object(r["f"])("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maiores debitis tempora, minima tenetur aliquam repellat nihil ",-1),Z=Object(r["g"])("Loginga qaytish");function tt(t,e,n,i,o,c){var a=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["e"])("div",R,[W,X,Object(r["h"])(a,{to:"/Login"},{default:Object(r["E"])((function(){return[Z]})),_:1})])}var et={};const nt=p()(et,[["render",tt]]);var rt=nt,it=n.e("chunk-2d0d63f1").then(n.bind(null,"7277")),ot=Object(g["a"])({history:Object(g["b"])(),routes:[{path:"/login",component:$,alias:"/"},{path:"/forget",component:S["default"],meta:{cantEnter:!0},beforeEnter:function(){console.log("beforeEnter")}},{path:"/mail",component:Q,name:"Mail",children:[{path:":mailId?",component:K,props:!0}]},{path:"/dashboard",component:it},{path:"/:notFound(.*)",component:rt}],linkActiveClass:"active",linkExactActiveClass:"active"});ot.beforeEach((function(t,e,n){console.log("beforeEach"),t.meta.cantEnter?n("/dashboard"):n()}));var ct=ot;Object(r["c"])(v).use(ct).mount("#app")},"91b2":function(t,e,n){"use strict";var r=n("0d54"),i=n.n(r);n.d(e,"default",(function(){return i.a}))},b4b9:function(t,e,n){},d1cb:function(t,e,n){"use strict";n("b4b9")}});
//# sourceMappingURL=app.45aed688.js.map