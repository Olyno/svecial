import{S as e,i as t,s as o,c as s,e as n,p as a,a as r,b as c,d as i,l,r as u,f as p,m as d,g,h,t as f,j as m,v as $,x as v,k as b,o as y,D as E,n as L,E as w,C as I}from"./chunk.d6982a14.js";import{H as k,N as D}from"./chunk.95ceba45.js";const S=()=>({}),B=()=>({}),T=()=>({}),F=()=>({}),z=()=>({}),C=()=>({});function A(e){var t,o,$,v,b,y,E,L,w,I;const k=e.$$slots.header,D=s(k,e,C),A=e.$$slots.body,_=s(A,e,F),x=e.$$slots.footer,O=s(x,e,B);return{c(){t=n("div"),o=n("div"),$=a(),v=n("div"),b=n("header"),D&&D.c(),y=a(),E=n("section"),_&&_.c(),L=a(),w=n("footer"),O&&O.c(),this.h()},l(e){t=r(e,"DIV",{class:!0,modal:!0},!1);var s=c(t);o=r(s,"DIV",{class:!0},!1),c(o).forEach(i),$=l(s,"\r\n\t"),v=r(s,"DIV",{class:!0},!1);var n=c(v);b=r(n,"HEADER",{class:!0},!1);var a=c(b);D&&D.l(a),a.forEach(i),y=l(n,"\r\n\t\t"),E=r(n,"SECTION",{class:!0},!1);var u=c(E);_&&_.l(u),u.forEach(i),L=l(n,"\r\n\t\t"),w=r(n,"FOOTER",{class:!0},!1);var p=c(w);O&&O.l(p),p.forEach(i),n.forEach(i),s.forEach(i),this.h()},h(){u(o,"class","modal-background"),u(b,"class","modal-card-head"),u(E,"class","modal-card-body"),u(w,"class","modal-card-foot"),u(v,"class","modal-card"),u(t,"class","modal"),u(t,"modal",e.name)},m(e,s){p(e,t,s),d(t,o),d(t,$),d(t,v),d(v,b),D&&D.m(b,null),d(v,y),d(v,E),_&&_.m(E,null),d(v,L),d(v,w),O&&O.m(w,null),I=!0},p(e,o){D&&D.p&&e.$$scope&&D.p(g(k,o,e,z),h(k,o,C)),_&&_.p&&e.$$scope&&_.p(g(A,o,e,T),h(A,o,F)),O&&O.p&&e.$$scope&&O.p(g(x,o,e,S),h(x,o,B)),I&&!e.name||u(t,"modal",o.name)},i(e){I||(f(D,e),f(_,e),f(O,e),I=!0)},o(e){m(D,e),m(_,e),m(O,e),I=!1},d(e){e&&i(t),D&&D.d(e),_&&_.d(e),O&&O.d(e)}}}function _(e,t,o){let{name:s}=t,{$$slots:n={},$$scope:a}=t;return e.$set=(e=>{"name"in e&&o("name",s=e.name),"$$scope"in e&&o("$$scope",a=e.$$scope)}),{name:s,$$slots:n,$$scope:a}}class x extends e{constructor(e){super(),t(this,e,_,A,o,["name"])}}function O(e,t,o){const s=Object.create(e);return s.p=t[o],s}const j=()=>({}),V=()=>({});function P(e){var t,o,s;return{c(){t=n("div"),o=n("p"),s=b(e.name),this.h()},l(n){t=r(n,"DIV",{slot:!0},!1);var a=c(t);o=r(a,"P",{class:!0},!1);var u=c(o);s=l(u,e.name),u.forEach(i),a.forEach(i),this.h()},h(){u(o,"class","modal-card-title"),u(t,"slot","header")},m(e,n){p(e,t,n),d(t,o),d(o,s)},p(e,t){e.name&&y(s,t.name)},d(e){e&&i(t)}}}function H(e){var t,o,s,g,h,f,m,$,v,E,L,w,I,k,D,S,B,T,F=e.p.props,z=e.p.description,C=e.p.type,A=e.p.values.join(", "),_=e.p.default;return{c(){t=n("tr"),o=n("td"),s=b(F),g=a(),h=n("td"),f=b(z),m=a(),$=n("td"),v=b(C),E=a(),L=n("td"),w=n("code"),I=b(A),k=a(),D=n("td"),S=n("code"),B=b(_),T=a(),this.h()},l(e){t=r(e,"TR",{},!1);var n=c(t);o=r(n,"TD",{class:!0},!1);var a=c(o);s=l(a,F),a.forEach(i),g=l(n,"\r\n\t\t\t\t\t\t"),h=r(n,"TD",{},!1);var u=c(h);f=l(u,z),u.forEach(i),m=l(n,"\r\n\t\t\t\t\t\t"),$=r(n,"TD",{},!1);var p=c($);v=l(p,C),p.forEach(i),E=l(n,"\r\n\t\t\t\t\t\t"),L=r(n,"TD",{},!1);var d=c(L);w=r(d,"CODE",{},!1);var b=c(w);I=l(b,A),b.forEach(i),d.forEach(i),k=l(n,"\r\n\t\t\t\t\t\t"),D=r(n,"TD",{},!1);var y=c(D);S=r(y,"CODE",{},!1);var x=c(S);B=l(x,_),x.forEach(i),y.forEach(i),T=l(n,"\r\n\t\t\t\t\t"),n.forEach(i),this.h()},h(){u(o,"class","parameter svelte-1dsn1mg")},m(e,n){p(e,t,n),d(t,o),d(o,s),d(t,g),d(t,h),d(h,f),d(t,m),d(t,$),d($,v),d(t,E),d(t,L),d(L,w),d(w,I),d(t,k),d(t,D),d(D,S),d(S,B),d(t,T)},p(e,t){e.props&&F!==(F=t.p.props)&&y(s,F),e.props&&z!==(z=t.p.description)&&y(f,z),e.props&&C!==(C=t.p.type)&&y(v,C),e.props&&A!==(A=t.p.values.join(", "))&&y(I,A),e.props&&_!==(_=t.p.default)&&y(B,_)},d(e){e&&i(t)}}}function N(e){var t,o,$,v,y,L,w,I,k,D,S,B,T,F,z,C,A,_,x,P,N,R,G,U,q,W,M,X,Y,J,K,Q,Z,ee,te,oe,se;const ne=e.$$slots.default,ae=s(ne,e,null),re=e.$$slots.pattern,ce=s(re,e,V);for(var ie=e.props,le=[],ue=0;ue<ie.length;ue+=1)le[ue]=H(O(e,ie,ue));return{c(){t=n("div"),o=n("div"),$=n("div"),ae&&ae.c(),v=a(),y=n("div"),ce&&ce.c(),L=a(),w=n("br"),I=a(),k=n("h1"),D=b("API"),S=a(),B=n("p"),T=b("Default class(es) of the button: "),F=n("textarea"),z=a(),C=n("br"),A=a(),_=n("table"),x=n("thead"),P=n("tr"),N=n("th"),R=b("Props"),G=a(),U=n("th"),q=b("Description"),W=a(),M=n("th"),X=b("Type"),Y=a(),J=n("th"),K=b("Values"),Q=a(),Z=n("th"),ee=b("Default Value"),te=a(),oe=n("tbody");for(var e=0;e<le.length;e+=1)le[e].c();this.h()},l(e){t=r(e,"DIV",{slot:!0},!1);var s=c(t);o=r(s,"DIV",{class:!0},!1);var n=c(o);$=r(n,"DIV",{class:!0},!1);var a=c($);ae&&ae.l(a),a.forEach(i),v=l(n,"\r\n\t\t\t"),y=r(n,"DIV",{class:!0},!1);var u=c(y);ce&&ce.l(u),u.forEach(i),n.forEach(i),L=l(s,"\r\n        "),w=r(s,"BR",{},!1),c(w).forEach(i),I=l(s,"\r\n        "),k=r(s,"H1",{class:!0},!1);var p=c(k);D=l(p,"API"),p.forEach(i),S=l(s,"\r\n\t\t"),B=r(s,"P",{},!1);var d=c(B);T=l(d,"Default class(es) of the button: "),F=r(d,"TEXTAREA",{class:!0,cols:!0,rows:!0,readonly:!0,value:!0},!1),c(F).forEach(i),d.forEach(i),z=l(s,"\r\n\t\t"),C=r(s,"BR",{},!1),c(C).forEach(i),A=l(s,"\r\n\t\t"),_=r(s,"TABLE",{class:!0},!1);var g=c(_);x=r(g,"THEAD",{},!1);var h=c(x);P=r(h,"TR",{},!1);var f=c(P);N=r(f,"TH",{},!1);var m=c(N);R=l(m,"Props"),m.forEach(i),G=l(f,"\r\n\t\t\t\t\t"),U=r(f,"TH",{},!1);var b=c(U);q=l(b,"Description"),b.forEach(i),W=l(f,"\r\n\t\t\t\t\t"),M=r(f,"TH",{},!1);var E=c(M);X=l(E,"Type"),E.forEach(i),Y=l(f,"\r\n\t\t\t\t\t"),J=r(f,"TH",{},!1);var O=c(J);K=l(O,"Values"),O.forEach(i),Q=l(f,"\r\n\t\t\t\t\t"),Z=r(f,"TH",{},!1);var j=c(Z);ee=l(j,"Default Value"),j.forEach(i),f.forEach(i),h.forEach(i),te=l(g,"\r\n\t\t\t"),oe=r(g,"TBODY",{},!1);for(var V=c(oe),H=0;H<le.length;H+=1)le[H].l(V);V.forEach(i),g.forEach(i),s.forEach(i),this.h()},h(){u($,"class","column"),u(y,"class","column"),u(o,"class","columns"),u(k,"class","title"),u(F,"class","textarea"),u(F,"cols","30"),u(F,"rows","1"),F.readOnly=!0,F.value=e.clazz,u(_,"class","table is-striped is-fullwidth is-hoverable"),u(t,"slot","body")},m(e,s){p(e,t,s),d(t,o),d(o,$),ae&&ae.m($,null),d(o,v),d(o,y),ce&&ce.m(y,null),d(t,L),d(t,w),d(t,I),d(t,k),d(k,D),d(t,S),d(t,B),d(B,T),d(B,F),d(t,z),d(t,C),d(t,A),d(t,_),d(_,x),d(x,P),d(P,N),d(N,R),d(P,G),d(P,U),d(U,q),d(P,W),d(P,M),d(M,X),d(P,Y),d(P,J),d(J,K),d(P,Q),d(P,Z),d(Z,ee),d(_,te),d(_,oe);for(var n=0;n<le.length;n+=1)le[n].m(oe,null);se=!0},p(e,t){if(ae&&ae.p&&e.$$scope&&ae.p(g(ne,t,e,null),h(ne,t,null)),ce&&ce.p&&e.$$scope&&ce.p(g(re,t,e,j),h(re,t,V)),se&&!e.clazz||(F.value=t.clazz),e.props){ie=t.props;for(var o=0;o<ie.length;o+=1){const s=O(t,ie,o);le[o]?le[o].p(e,s):(le[o]=H(s),le[o].c(),le[o].m(oe,null))}for(;o<le.length;o+=1)le[o].d(1);le.length=ie.length}},i(e){se||(f(ae,e),f(ce,e),se=!0)},o(e){m(ae,e),m(ce,e),se=!1},d(e){e&&i(t),ae&&ae.d(e),ce&&ce.d(e),E(le,e)}}}function R(e){var t,o,s;return{c(){t=n("div"),o=n("button"),s=b("Close"),this.h()},l(e){t=r(e,"DIV",{slot:!0},!1);var n=c(t);o=r(n,"BUTTON",{class:!0,"close-modal":!0},!1);var a=c(o);s=l(a,"Close"),a.forEach(i),n.forEach(i),this.h()},h(){u(o,"class","button is-info"),u(o,"close-modal",e.name),u(t,"slot","footer")},m(e,n){p(e,t,n),d(t,o),d(o,s)},p(e,t){e.name&&u(o,"close-modal",t.name)},d(e){e&&i(t)}}}function G(e){var t,o;return{c(){t=a(),o=a()},l(e){t=l(e,"\r\n\t"),o=l(e,"\r\n\t")},m(e,s){p(e,t,s),p(e,o,s)},p:L,i:L,o:L,d(e){e&&(i(t),i(o))}}}function U(e){var t,o=new x({props:{name:e.name,$$slots:{default:[G],footer:[R],body:[N],header:[P]},$$scope:{ctx:e}}});return{c(){o.$$.fragment.c()},l(e){o.$$.fragment.l(e)},m(e,s){$(o,e,s),t=!0},p(e,t){var s={};e.name&&(s.name=t.name),(e.$$scope||e.name||e.props||e.clazz)&&(s.$$scope={changed:e,ctx:t}),o.$set(s)},i(e){t||(f(o.$$.fragment,e),t=!0)},o(e){m(o.$$.fragment,e),t=!1},d(e){v(o,e)}}}function q(e,t,o){let{name:s,props:n,clazz:a}=t,{$$slots:r={},$$scope:c}=t;return e.$set=(e=>{"name"in e&&o("name",s=e.name),"props"in e&&o("props",n=e.props),"clazz"in e&&o("clazz",a=e.clazz),"$$scope"in e&&o("$$scope",c=e.$$scope)}),{name:s,props:n,clazz:a,$$slots:r,$$scope:c}}class W extends e{constructor(e){super(),t(this,e,q,U,o,["name","props","clazz"])}}function M(e){var t;return{c(){t=n("div"),this.h()},l(e){t=r(e,"DIV",{class:!0},!1),c(t).forEach(i),this.h()},h(){u(t,"class","google-signin-button")},m(e,o){p(e,t,o)},p:L,i:L,o:L,d(e){e&&i(t)}}}async function X(e,t,o){e.style[t]=o}function Y(e,t,o){let{appId:s,scopes:n="profile",width:a=140,height:r=40,longTitle:c=!1,theme:i="light",isFlex:l=!1,onLoginFailure:u=(()=>{console.log("Logged to google with failure!")})}=t,{onLoginSuccess:p=(()=>{console.log("Logged to google with success!")})}=t;return o("scopes",n=n.toLocaleLowerCase().replace(/\s/gimu,"")),w(async()=>{const e=document.createElement("script");e.src="https://apis.google.com/js/platform.js",e.onload=(()=>{gapi.load("auth2",()=>{gapi.auth2.init({client_id:`${s}.apps.googleusercontent.com`,scope:n,fetch_basic_profile:!0});const e=document.getElementsByClassName("google-signin-button");for(let t=0;t<e.length;t++)e[t].id=`google-signin-button${t}`,gapi.signin2.render(`google-signin-button${t}`,{scope:n,width:a,height:r,longtitle:c,theme:i,onsuccess:p,onfailure:u}),l&&(X(e[t],"display","flex"),X(e[t],"alignItems","center"),X(e[t],"justifyContent","center"))})}),document.getElementsByTagName("head")[0].appendChild(e)}),e.$set=(e=>{"appId"in e&&o("appId",s=e.appId),"scopes"in e&&o("scopes",n=e.scopes),"width"in e&&o("width",a=e.width),"height"in e&&o("height",r=e.height),"longTitle"in e&&o("longTitle",c=e.longTitle),"theme"in e&&o("theme",i=e.theme),"isFlex"in e&&o("isFlex",l=e.isFlex),"onLoginFailure"in e&&o("onLoginFailure",u=e.onLoginFailure),"onLoginSuccess"in e&&o("onLoginSuccess",p=e.onLoginSuccess)}),{appId:s,scopes:n,width:a,height:r,longTitle:c,theme:i,isFlex:l,onLoginFailure:u,onLoginSuccess:p}}class J extends e{constructor(e){super(),t(this,e,Y,M,o,["appId","scopes","width","height","longTitle","theme","isFlex","onLoginFailure","onLoginSuccess"])}}function K(e){var t,o;return{c(){t=n("div"),this.h()},l(e){t=r(e,"DIV",{class:!0,"data-size":!0,"data-onlogin":!0,"data-auto-logout-link":!0,"data-default-audience":!0,"data-use-continue-as":!0,"data-button-type":!0,"data-scope":!0},!1),c(t).forEach(i),this.h()},h(){u(t,"class","fb-login-button"),t.dataset.size=e.size,t.dataset.onlogin=e.onLoginSuccess,t.dataset.autoLogoutLink=e.autoLogoutButton,t.dataset.defaultAudience=e.audience,t.dataset.useContinueAs=e.useContinueAs,t.dataset.buttonType=e.type,t.dataset.scope=o=e.scopes.replace(/\s/gimu,"")},m(e,o){p(e,t,o)},p(e,s){e.size&&(t.dataset.size=s.size),e.onLoginSuccess&&(t.dataset.onlogin=s.onLoginSuccess),e.autoLogoutButton&&(t.dataset.autoLogoutLink=s.autoLogoutButton),e.audience&&(t.dataset.defaultAudience=s.audience),e.useContinueAs&&(t.dataset.useContinueAs=s.useContinueAs),e.type&&(t.dataset.buttonType=s.type),e.scopes&&o!==(o=s.scopes.replace(/\s/gimu,""))&&(t.dataset.scope=o)},i:L,o:L,d(e){e&&i(t)}}}function Q(e,t,o){let{appId:s,type:n="login_with",size:a="large",scopes:r="public_profile",audience:c="friends",debug:i=!1,language:l="en_US",useContinueAs:u=!1,autoLogoutButton:p=!0,onLoginSuccess:d=(()=>{console.log("Logged to facebook with success!")})}=t,{onLoginFailure:g=(()=>{console.log("Logged to facebook with failure!")})}=t,{onStatusChange:h=(()=>{console.log("Facebook status changed!")})}=t;return w(async()=>{const e=document.createElement("script");e.src=`https://connect.facebook.net/${l}/sdk.js`,i&&(e.src+="/debug.js"),e.onload=(()=>{window.fbAsyncInit=(()=>{FB.init({appId:s,cookie:!0,xfbml:!0,version:"v3.3"})})}),document.getElementsByTagName("head")[0].appendChild(e)}),e.$set=(e=>{"appId"in e&&o("appId",s=e.appId),"type"in e&&o("type",n=e.type),"size"in e&&o("size",a=e.size),"scopes"in e&&o("scopes",r=e.scopes),"audience"in e&&o("audience",c=e.audience),"debug"in e&&o("debug",i=e.debug),"language"in e&&o("language",l=e.language),"useContinueAs"in e&&o("useContinueAs",u=e.useContinueAs),"autoLogoutButton"in e&&o("autoLogoutButton",p=e.autoLogoutButton),"onLoginSuccess"in e&&o("onLoginSuccess",d=e.onLoginSuccess),"onLoginFailure"in e&&o("onLoginFailure",g=e.onLoginFailure),"onStatusChange"in e&&o("onStatusChange",h=e.onStatusChange)}),{appId:s,type:n,size:a,scopes:r,audience:c,debug:i,language:l,useContinueAs:u,autoLogoutButton:p,onLoginSuccess:d,onLoginFailure:g,onStatusChange:h}}class Z extends e{constructor(e){super(),t(this,e,Q,K,o,["appId","type","size","scopes","audience","debug","language","useContinueAs","autoLogoutButton","onLoginSuccess","onLoginFailure","onStatusChange"])}}function ee(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function te(e,t){var o=Object.keys(e);return Object.getOwnPropertySymbols&&o.push.apply(o,Object.getOwnPropertySymbols(e)),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o}function oe(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?te(o,!0).forEach(function(t){ee(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):te(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function se(e){var t,o,s,g,h,f,m;return{c(){t=n("a"),o=n("span"),s=n("i"),g=a(),h=n("span"),f=b("Connexion"),this.h()},l(e){t=r(e,"A",{href:!0,class:!0},!1);var n=c(t);o=r(n,"SPAN",{class:!0},!1);var a=c(o);s=r(a,"I",{class:!0},!1),c(s).forEach(i),a.forEach(i),g=l(n,"\r\n    "),h=r(n,"SPAN",{},!1);var u=c(h);f=l(u,"Connexion"),u.forEach(i),n.forEach(i),this.h()},h(){u(s,"class","fab fa-discord fa-lg"),u(o,"class","icon"),u(t,"href","#!"),u(t,"class",e.clazz+" svelte-1m91qu1"),m=I(t,"click",e.click_handler)},m(e,n){p(e,t,n),d(t,o),d(o,s),d(t,g),d(t,h),d(h,f)},p:L,i:L,o:L,d(e){e&&i(t),m()}}}function ne(e,t,o){let{appId:s,scopes:n="identify",redirect:a="http://localhost:3000",color:r="dark",onLoginFailure:c=(()=>{console.log("Logged to discord with failure!")})}=t,{onLoginSuccess:i=(()=>{console.log("Logged to discord with success!")})}=t,l={},u=`discord-signin-button button is-${r}`;async function p(){let e=new LoginWithDiscord({clientID:s,scopes:n,redirect_url:a});e.init(),e.login().then(async()=>{n.includes("identify")&&(l=oe({},l,{user:await e.fetchUser()})),n.includes("connections")&&(l=oe({},l,{connections:await e.fetchConnections()})),n.includes("guilds")&&(l=oe({},l,{guilds:await e.fetchGuilds()})),i(l)}).catch(e=>c(e))}return w(async()=>{o("scopes",n=n.toLocaleLowerCase().replace(/\s/gimu,"").split(","));const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/gh/dusterthefirst/Login-With-Discord/dist/lwd.js",document.getElementsByTagName("head")[0].appendChild(e)}),e.$set=(e=>{"appId"in e&&o("appId",s=e.appId),"scopes"in e&&o("scopes",n=e.scopes),"redirect"in e&&o("redirect",a=e.redirect),"color"in e&&o("color",r=e.color),"onLoginFailure"in e&&o("onLoginFailure",c=e.onLoginFailure),"onLoginSuccess"in e&&o("onLoginSuccess",i=e.onLoginSuccess)}),{appId:s,scopes:n,redirect:a,color:r,onLoginFailure:c,onLoginSuccess:i,clazz:u,login:p,click_handler:function(e){e.preventDefault(),p()}}}class ae extends e{constructor(e){super(),t(this,e,ne,se,o,["appId","scopes","redirect","color","onLoginFailure","onLoginSuccess"])}}const re=[{props:"appId",description:"The id of your Discord app",type:"string",values:["-"],default:"-"}],ce=re.concat([{props:"scopes",description:'Scopes for your app, seperated with a comma, i.e "profile, email"',type:"string",values:["profile","email"],default:"profile"},{props:"width",description:"Width of the button",type:"integer",values:["-"],default:"140"},{props:"height",description:"Height of the button",type:"integer",values:["-"],default:"40"},{props:"longTitle",description:'Display long labels such as "Sign in with Google" rather than "Sign in"',type:"boolean",values:["true","false"],default:"false"},{props:"theme",description:"Theme of button",type:"string",values:["light","dark"],default:"light"},{props:"onLoginSuccess",description:"A function if the login is a success, take the GoogleUser in paramater",type:"Function",values:["-"],default:"() => {console.log('Logged to google with success!')}"},{props:"onLoginFailure",description:"A function if the login is a failure, take the error in paramater",type:"Function",values:["-"],default:"() => {console.log('Logged to google with failure!')}"}]),ie=re.concat([{props:"scopes",description:'Scopes for your app, seperated with a comma, i.e "public_profile, email"',type:"string",values:["public_profile","email","groups_access_member_info","publish_to_groups","user_age_range","user_birthday","user_events","user_friends","user_gender","user_hometown","user_likes","user_link","user_location","user_photos","user_posts","user_tagged_places","user_videos"],default:"public_profile"},{props:"type",description:"Type of button",type:"string",values:["login_with","continue_with"],default:"login_with"},{props:"audience",description:"Choose the default audience selected when you request write permissions",type:"string",values:["friends","only_me","everyone"],default:"friends"},{props:"size",description:"Size of button",type:"string",values:["small","medium","large"],default:"large"},{props:"language",description:"Language of the user, i.e en_US",type:"string",values:["-"],default:"en_US"},{props:"useContinueAs",description:'If user is already connected, show him a "continue as" button instead of "connexion"?',type:"boolean",values:["true","false"],default:"false"},{props:"autoLogoutButton",description:'If user is already connected to your app, show him a "Logout" button?',type:"boolean",values:["true","false"],default:"true"},{props:"debug",description:"Enable debug mode of Facebook's sdk",type:"boolean",values:["true","false"],default:"false"},{props:"onLoginSuccess",description:"A function if the login is a success, take the response in paramater",type:"Function",values:["-"],default:'() => {console.log("Logged to facebook with success!")}'},{props:"onLoginFailure",description:"A function if the login is a failure, take the response in paramater",type:"Function",values:["-"],default:'() => {console.log("Logged to facebook with failure!")}'},{props:"onStatusChange",description:"A function if the status of the user change",type:"Function",values:["-"],default:'() => {console.log("Facebook status changed!")}'}]),le=re.concat([{props:"scopes",description:'Scopes for your app, seperated with a comma, i.e "identify, connections"',type:"string",values:["identity","connections","guilds","email"],default:"profile"},{props:"redirect",description:"The redirect url of your app",type:"string",values:["-"],default:"http://localhost:3000"},{props:"color",description:"The color of the button",type:"string",values:["dark","light","black","pink","yellow","aqua","lightblue","lightgreen","brown","blue","gray","green","purple"],default:"dark"},{props:"onLoginSuccess",description:"A function if the login is a success, take the user's informations in paramater",type:"Function",values:["-"],default:'() => {console.log("Logged to discord with success!")}'},{props:"onLoginFailure",description:"A function if the login is a failure, take the the user's informations in paramater",type:"Function",values:["-"],default:'() => {console.log("Logged to discord with failure!")}'}]);function ue(e){var t,o,s=new D({});return{c(){t=n("div"),s.$$.fragment.c(),this.h()},l(e){t=r(e,"DIV",{slot:!0},!1);var o=c(t);s.$$.fragment.l(o),o.forEach(i),this.h()},h(){u(t,"slot","hero-head")},m(e,n){p(e,t,n),$(s,t,null),o=!0},i(e){o||(f(s.$$.fragment,e),o=!0)},o(e){m(s.$$.fragment,e),o=!1},d(e){e&&i(t),v(s)}}}function pe(e){var t,o;return{c(){t=n("pre"),o=b('<GoogleButton appId="my app id" theme="dark" />'),this.h()},l(e){t=r(e,"PRE",{slot:!0,class:!0},!1);var s=c(t);o=l(s,'<GoogleButton appId="my app id" theme="dark" />'),s.forEach(i),this.h()},h(){u(t,"slot","pattern"),u(t,"class","pattern svelte-9n5c3m")},m(e,s){p(e,t,s),d(t,o)},d(e){e&&i(t)}}}function de(e){var t,o,s=new J({props:{theme:"dark",isFlex:"true"}});return{c(){t=a(),s.$$.fragment.c()},l(e){t=l(e,"\r\n\t\t\t\t\t\t"),s.$$.fragment.l(e)},m(e,n){p(e,t,n),$(s,e,n),o=!0},p:L,i(e){o||(f(s.$$.fragment,e),o=!0)},o(e){m(s.$$.fragment,e),o=!1},d(e){e&&i(t),v(s,e)}}}function ge(e){var t,o;return{c(){t=n("pre"),o=b('<FacebookButton appId="my app id" />'),this.h()},l(e){t=r(e,"PRE",{slot:!0,class:!0},!1);var s=c(t);o=l(s,'<FacebookButton appId="my app id" />'),s.forEach(i),this.h()},h(){u(t,"slot","pattern"),u(t,"class","pattern svelte-9n5c3m")},m(e,s){p(e,t,s),d(t,o)},d(e){e&&i(t)}}}function he(e){var t,o,s=new Z({props:{appId:"1000227316855149"}});return{c(){t=a(),s.$$.fragment.c()},l(e){t=l(e,"\r\n\t\t\t\t\t\t"),s.$$.fragment.l(e)},m(e,n){p(e,t,n),$(s,e,n),o=!0},p:L,i(e){o||(f(s.$$.fragment,e),o=!0)},o(e){m(s.$$.fragment,e),o=!1},d(e){e&&i(t),v(s,e)}}}function fe(e){var t,o;return{c(){t=n("pre"),o=b('<DiscordButton appId="my app id" />'),this.h()},l(e){t=r(e,"PRE",{slot:!0,class:!0},!1);var s=c(t);o=l(s,'<DiscordButton appId="my app id" />'),s.forEach(i),this.h()},h(){u(t,"slot","pattern"),u(t,"class","pattern svelte-9n5c3m")},m(e,s){p(e,t,s),d(t,o)},d(e){e&&i(t)}}}function me(e){var t,o,s=new ae({props:{appId:"598678534596198410",redirect:"http://localhost:3000/svecial/components"}});return{c(){t=a(),s.$$.fragment.c()},l(e){t=l(e,"\r\n\t\t\t\t\t\t"),s.$$.fragment.l(e)},m(e,n){p(e,t,n),$(s,e,n),o=!0},p:L,i(e){o||(f(s.$$.fragment,e),o=!0)},o(e){m(s.$$.fragment,e),o=!1},d(e){e&&i(t),v(s,e)}}}function $e(e){var t,o,s,g,h,y,E,L,w,I,k,D,S,B,T,F,z,C,A,_,x,O,j,V,P,H,N,R,G,U,q=new W({props:{name:"Google Button",props:ce,clazz:"google-signin-button",$$slots:{default:[de],pattern:[pe]},$$scope:{ctx:e}}}),M=new W({props:{name:"Facebook Button",props:ie,clazz:"fb-login-button",$$slots:{default:[he],pattern:[ge]},$$scope:{ctx:e}}}),X=new W({props:{name:"Discord Button",props:le,clazz:"discord-signin-button button",$$slots:{default:[me],pattern:[fe]},$$scope:{ctx:e}}});return{c(){t=a(),o=n("div"),s=n("h1"),g=b("Components"),h=a(),y=n("br"),E=n("br"),L=a(),w=n("h1"),I=b("Any button doesn't load? Check your cookies and accept them!"),k=a(),D=n("br"),S=n("br"),B=a(),T=n("div"),F=n("div"),z=n("button"),C=b("Google Button"),A=a(),q.$$.fragment.c(),_=a(),x=n("div"),O=n("button"),j=b("Facebook Button"),V=a(),M.$$.fragment.c(),P=a(),H=n("div"),N=n("button"),R=b("Discord Button"),G=a(),X.$$.fragment.c(),this.h()},l(e){t=l(e,"\r\n\r\n\t\t"),o=r(e,"DIV",{class:!0},!1);var n=c(o);s=r(n,"H1",{class:!0},!1);var a=c(s);g=l(a,"Components"),a.forEach(i),h=l(n,"\r\n\t\t\t"),y=r(n,"BR",{},!1),c(y).forEach(i),E=r(n,"BR",{},!1),c(E).forEach(i),L=l(n,"\r\n\t\t\t"),w=r(n,"H1",{class:!0},!1);var u=c(w);I=l(u,"Any button doesn't load? Check your cookies and accept them!"),u.forEach(i),k=l(n,"\r\n\t\t\t"),D=r(n,"BR",{},!1),c(D).forEach(i),S=r(n,"BR",{},!1),c(S).forEach(i),B=l(n,"\r\n\t\t\t\r\n\t\t\t"),T=r(n,"DIV",{class:!0},!1);var p=c(T);F=r(p,"DIV",{class:!0},!1);var d=c(F);z=r(d,"BUTTON",{class:!0,"open-modal":!0},!1);var f=c(z);C=l(f,"Google Button"),f.forEach(i),A=l(d,"\r\n\t\t\t\t\t"),q.$$.fragment.l(d),d.forEach(i),_=l(p,"\r\n\t\t\t\t"),x=r(p,"DIV",{class:!0},!1);var m=c(x);O=r(m,"BUTTON",{class:!0,"open-modal":!0},!1);var $=c(O);j=l($,"Facebook Button"),$.forEach(i),V=l(m,"\r\n\t\t\t\t\t"),M.$$.fragment.l(m),m.forEach(i),P=l(p,"\r\n\t\t\t\t"),H=r(p,"DIV",{class:!0},!1);var v=c(H);N=r(v,"BUTTON",{class:!0,"open-modal":!0},!1);var b=c(N);R=l(b,"Discord Button"),b.forEach(i),G=l(v,"\r\n\t\t\t\t\t"),X.$$.fragment.l(v),v.forEach(i),p.forEach(i),n.forEach(i),this.h()},h(){u(s,"class","title svelte-9n5c3m"),u(w,"class","title svelte-9n5c3m"),u(z,"class","button is-warning"),u(z,"open-modal","Google Button"),u(F,"class","column"),u(O,"class","button is-warning"),u(O,"open-modal","Facebook Button"),u(x,"class","column"),u(N,"class","button is-warning"),u(N,"open-modal","Discord Button"),u(H,"class","column"),u(T,"class","columns is-centered"),u(o,"class","container has-text-centered")},m(e,n){p(e,t,n),p(e,o,n),d(o,s),d(s,g),d(o,h),d(o,y),d(o,E),d(o,L),d(o,w),d(w,I),d(o,k),d(o,D),d(o,S),d(o,B),d(o,T),d(T,F),d(F,z),d(z,C),d(F,A),$(q,F,null),d(T,_),d(T,x),d(x,O),d(O,j),d(x,V),$(M,x,null),d(T,P),d(T,H),d(H,N),d(N,R),d(H,G),$(X,H,null),U=!0},p(e,t){var o={};e.GoogleButtonInfos&&(o.props=ce),e.$$scope&&(o.$$scope={changed:e,ctx:t}),q.$set(o);var s={};e.FacebookButtonInfos&&(s.props=ie),e.$$scope&&(s.$$scope={changed:e,ctx:t}),M.$set(s);var n={};e.DiscordButtonInfos&&(n.props=le),e.$$scope&&(n.$$scope={changed:e,ctx:t}),X.$set(n)},i(e){U||(f(q.$$.fragment,e),f(M.$$.fragment,e),f(X.$$.fragment,e),U=!0)},o(e){m(q.$$.fragment,e),m(M.$$.fragment,e),m(X.$$.fragment,e),U=!1},d(e){e&&(i(t),i(o)),v(q),v(M),v(X)}}}function ve(e){var t,o,s=new k({props:{$$slots:{default:[$e],"hero-head":[ue]},$$scope:{ctx:e}}});return{c(){t=n("section"),s.$$.fragment.c()},l(e){t=r(e,"SECTION",{},!1);var o=c(t);s.$$.fragment.l(o),o.forEach(i)},m(e,n){p(e,t,n),$(s,t,null),o=!0},p(e,t){var o={};e.$$scope&&(o.$$scope={changed:e,ctx:t}),s.$set(o)},i(e){o||(f(s.$$.fragment,e),o=!0)},o(e){m(s.$$.fragment,e),o=!1},d(e){e&&i(t),v(s)}}}function be(e,t,o){let s,n,a,r;return w(async()=>{s=document.getElementsByClassName("pattern"),n=document.querySelectorAll("[open-modal]"),a=document.querySelectorAll("[close-modal]"),r=document.querySelectorAll("[modal]"),async function(){for(let e=0;e<s.length;e++){const t=s[e];let o=t.innerHTML;const n=o.match(/&lt;\w+\s+/gimu)[0],a=o.match(/\w+=/gimu);o=o.replace(n,`<span style="color: #62b8f5">${n}</span>`),a.forEach(async e=>{o=o.replace(e,`<span style="color: #ffd53d">${e}</span>`)}),t.innerHTML=o}}(),async function(){for(let e=0;e<n.length;e++)n[e].addEventListener("click",()=>{for(let t=0;t<r.length;t++)r[t].getAttribute("modal")===n[e].getAttribute("open-modal")&&(r[t].classList.remove("is-active"),r[t].classList.add("is-active"))});for(let e=0;e<a.length;e++)a[e].addEventListener("click",()=>{for(let t=0;t<r.length;t++)r[t].getAttribute("modal")===a[e].getAttribute("close-modal")&&r[t].classList.remove("is-active")})}()}),{}}export default class extends e{constructor(e){super(),t(this,e,be,ve,o,[])}}
//# sourceMappingURL=components.9d723c4b.js.map
