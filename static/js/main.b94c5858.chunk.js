(this.webpackJsonptinder_clone=this.webpackJsonptinder_clone||[]).push([[0],{54:function(e,n,t){},55:function(e,n,t){},56:function(e,n,t){},66:function(e,n,t){},85:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),s=t(15),r=t.n(s),i=(t(54),t(55),t(56),t(37)),o=t.n(i),l=t(101),j=t(38),d=t.n(j),u=t.p+"static/media/logo.812d41f3.png",b=t(2);var h=function(){return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(l.a,{children:Object(b.jsx)(o.a,{fontSize:"large",className:"header_icon"})}),Object(b.jsx)("img",{className:"header_logo",src:u,alt:""}),Object(b.jsx)(l.a,{children:Object(b.jsx)(d.a,{fontSize:"large",className:"header_icon"})})]})},f=t(25),p=t.n(f),O=t(39),x=t(26),g=t(40),m=t.n(g),v=(t(66),t(41)),N=t.n(v).a.create({baseURL:"https://tinder-clone-dk.herokuapp.com"});var w=function(){var e=Object(c.useState)([]),n=Object(x.a)(e,2),t=n[0],a=n[1];return Object(c.useEffect)((function(){function e(){return(e=Object(O.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/tinder/cards");case 2:n=e.sent,a(n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log("The people are >>>>>>",t),Object(b.jsx)("div",{className:"tinderCards",children:Object(b.jsx)("div",{className:"tinderCards_cardContainer",children:t.map((function(e){return Object(b.jsx)(m.a,{className:"swipe",preventSwipe:["up","down"],onSwipe:function(n){return t=e.name,void console.log("removing: "+t);var t},onCardLeftScreen:function(){return n=e.name,console.log(n+" left the screen!"),void alert("Peeling Sad");var n},children:Object(b.jsxs)("div",{style:{backgroundImage:"url(".concat(e.imgUrl,")")},className:"card",children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("h5",{children:e.subtitle})]})},e.name)}))})})},S=(t(85),t(42)),_=t.n(S),B=t(43),z=t.n(B),C=t(44),k=t.n(C),y=t(45),F=t.n(y),L=t(46),I=t.n(L);var P=function(){return Object(b.jsxs)("div",{className:"swipeButtons",children:[Object(b.jsx)(l.a,{className:"swipeButtons_repeat",children:Object(b.jsx)(_.a,{fontSize:"large"})}),Object(b.jsx)(l.a,{className:"swipeButtons_left",children:Object(b.jsx)(z.a,{fontSize:"large"})}),Object(b.jsx)(l.a,{className:"swipeButtons_star",children:Object(b.jsx)(k.a,{fontSize:"large"})}),Object(b.jsx)(l.a,{className:"swipeButtons_right",children:Object(b.jsx)(F.a,{fontSize:"large"})}),Object(b.jsx)(l.a,{className:"swipeButtons_lightning",children:Object(b.jsx)(I.a,{fontSize:"large"})})]})};var T=function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(h,{}),Object(b.jsx)(w,{}),Object(b.jsx)(P,{})]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,102)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),E()}},[[87,1,2]]]);
//# sourceMappingURL=main.b94c5858.chunk.js.map