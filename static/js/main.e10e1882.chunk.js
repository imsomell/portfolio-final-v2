(this["webpackJsonpportfolio-final-v2"]=this["webpackJsonpportfolio-final-v2"]||[]).push([[0],{23:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(17),i=s.n(a),n=(s(9),s(11)),l=s(2),r=(s(23),s(0)),o=["btn--primary","btn--outline"],j=["btn--medium","btn--large"],b=function(e){var t=e.children,s=e.type,c=e.onCLick,a=e.buttonStyle,i=e.buttonSize,n=o.includes(a)?a:o[0],b=j.includes(i)?i:j[0];return Object(r.jsx)(l.b,{to:"/sign-up",className:"btn-mobile",children:Object(r.jsx)("button",{className:"btn ".concat(n,"\n            ").concat(b),onClick:c,type:s,children:t})})};s(30);var d=function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),s=t[0],a=t[1];function i(){a(window.pageYOffset),console.log(s)}Object(c.useEffect)((function(){return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}));var o=Object(c.useState)(!1),j=Object(n.a)(o,2),d=j[0],h=j[1],x=Object(c.useState)(!0),u=Object(n.a)(x,2),m=u[0],O=u[1],f=function(){return h(!1)},p=function(){window.innerWidth<=960?O(!1):O(!0)};return Object(c.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"navbar-container",children:[Object(r.jsxs)(l.b,{to:"/",className:"navbar-logo",onClick:f,children:["Travelkakaloka ",Object(r.jsx)("i",{className:"fab fa-angellist"})]}),Object(r.jsx)("div",{className:"menu-icon",onClick:function(){return h(!d)},children:Object(r.jsx)("i",{className:d?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:d?"nav-menu active":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/",className:"nav-links",onClick:f,children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/services",className:"nav-links",onClick:f,children:"Services"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/products",className:"nav-links",onClick:f,children:"Products"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/sign-up",className:"nav-links-mobile",onClick:f,children:"Sign up"})})]}),m&&Object(r.jsx)(b,{buttonStyle:"btn--outline",children:" Sign up"})]})})})},h=s(3),x=(s(31),s.p+"static/media/video-1.59e75226.mp4");var u=function(){return Object(r.jsxs)("div",{className:"hero-container",children:[Object(r.jsx)("video",{src:x,autoPlay:!0,loop:!0,muted:!0}),Object(r.jsx)("h1",{children:"ADVENTURE AWAITS"}),Object(r.jsx)("p",{children:"What are you waiting for?"}),Object(r.jsxs)("div",{className:"hero-btns",children:[Object(r.jsx)(b,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GET STARTED"}),Object(r.jsxs)(b,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey"),children:["WATCH TRAILER ",Object(r.jsx)("i",{className:"far fa-play-circle"})]})]})]})};var m=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("li",{className:"cards__item",children:Object(r.jsxs)(l.b,{className:"cards__item__link",to:e.path,children:[Object(r.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(r.jsx)("img",{src:e.src,alt:"",className:"cards__item__img"})}),Object(r.jsx)("div",{className:"cards__item__info",children:Object(r.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};s(32);var O=function(){return Object(r.jsxs)("div",{className:"cards",children:[Object(r.jsx)("h1",{children:"Check out these EPIC Destinations!"}),Object(r.jsx)("div",{className:"cards__container",children:Object(r.jsx)("div",{className:"cards__wrapper",children:Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(m,{src:"/images/img-9.jpg",text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/services"}),Object(r.jsx)(m,{src:"/images/img-2.jpg",text:"Experience the unexpected travel",label:"Cozy",path:"/services"}),Object(r.jsx)(m,{src:"/images/img-3.jpg",text:"Travel through the Islands of Palawan in a private cruise",label:"Luxury",path:"/services"}),Object(r.jsx)(m,{src:"/images/img-4.jpg",text:"How much does an Australian Road Trip really cost?",label:"Adventure",path:"/services"}),Object(r.jsx)(m,{src:"/images/img-5.jpg",text:"Educational tours in Japan",label:"Luxury",path:"/services"}),Object(r.jsx)(m,{src:"/images/img-6.jpg",text:"Whether it\u2019s colonial-era laneways or bustling street markets, Hong Kong is an ideal city to explore.",label:"Luxury",path:"/services"})]})})})]})};s(33);var f=function(){return Object(r.jsxs)("div",{className:"footer-container",children:[Object(r.jsxs)("section",{className:"footer-subscription",children:[Object(r.jsx)("p",{className:"footer-subscription-heading",children:"Join the Adventure newsletter to recieve our best vacation deals"}),Object(r.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at anytime."}),Object(r.jsx)("div",{className:"input-areas",children:Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{type:"email",name:"email",placeholder:"Your Email",className:"footer-input"}),Object(r.jsx)(b,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(r.jsxs)("div",{className:"footer-links",children:[Object(r.jsxs)("div",{className:"footer-link-wrapper",children:[Object(r.jsxs)("div",{class:"footer-link-items",children:[Object(r.jsx)("h2",{children:"About Us"}),Object(r.jsx)(l.b,{to:"/sign-up",children:"How it works"}),Object(r.jsx)(l.b,{to:"/",children:"Testimonials"}),Object(r.jsx)(l.b,{to:"/",children:"Careers"}),Object(r.jsx)(l.b,{to:"/",children:"Investors"}),Object(r.jsx)(l.b,{to:"/",children:"Terms of Service"})]}),Object(r.jsxs)("div",{class:"footer-link-items",children:[Object(r.jsx)("h2",{children:"Contact Us"}),Object(r.jsx)(l.b,{to:"/",children:"Contact"}),Object(r.jsx)(l.b,{to:"/",children:"Support"}),Object(r.jsx)(l.b,{to:"/",children:"Destinations"}),Object(r.jsx)(l.b,{to:"/",children:"Sponsorships"})]})]}),Object(r.jsxs)("div",{className:"footer-link-wrapper",children:[Object(r.jsxs)("div",{class:"footer-link-items",children:[Object(r.jsx)("h2",{children:"Videos"}),Object(r.jsx)(l.b,{to:"/",children:"Submit Video"}),Object(r.jsx)(l.b,{to:"/",children:"Ambassadors"}),Object(r.jsx)(l.b,{to:"/",children:"Agency"}),Object(r.jsx)(l.b,{to:"/",children:"Influencer"})]}),Object(r.jsxs)("div",{class:"footer-link-items",children:[Object(r.jsx)("h2",{children:"Social Media"}),Object(r.jsx)(l.b,{to:"/",children:"Instagram"}),Object(r.jsx)(l.b,{to:"/",children:"Facebook"}),Object(r.jsx)(l.b,{to:"/",children:"Youtube"}),Object(r.jsx)(l.b,{to:"/",children:"Twitter"})]})]})]}),Object(r.jsx)("section",{class:"social-media",children:Object(r.jsxs)("div",{class:"social-media-wrap",children:[Object(r.jsx)("div",{class:"footer-logo",children:Object(r.jsxs)(l.b,{to:"/",className:"social-logo",children:["Travelkaloka",Object(r.jsx)("i",{className:"fab fa-angellist"})]})}),Object(r.jsx)("small",{class:"website-rights",children:"Travelkaloka \xa9 2021"}),Object(r.jsxs)("div",{class:"social-icons",children:[Object(r.jsx)("a",{class:"social-icon-link facebook",href:"https://www.facebook.com/j.l.macapagal",target:"_blank","aria-label":"Facebook",children:Object(r.jsx)("i",{class:"fab fa-facebook-f"})}),Object(r.jsx)(l.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(r.jsx)("i",{class:"fab fa-instagram"})}),Object(r.jsx)(l.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(r.jsx)("i",{class:"fab fa-youtube"})}),Object(r.jsx)(l.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(r.jsx)("i",{class:"fab fa-twitter"})}),Object(r.jsx)(l.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(r.jsx)("i",{class:"fab fa-linkedin"})})]})]})})]})};var p=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u,{}),Object(r.jsx)(O,{}),Object(r.jsx)(f,{})]})};function v(){return Object(r.jsx)("h1",{className:"services",children:"Coming soon!"})}function g(){return Object(r.jsx)("h1",{className:"products",children:"Coming soon!"})}function k(){return Object(r.jsx)("h1",{className:"sign-up",children:"Coming soon!"})}var N=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(d,{}),Object(r.jsxs)(h.c,{children:[Object(r.jsx)(h.a,{path:"/",exact:!0,component:p}),Object(r.jsx)(h.a,{path:"/services",exact:!0,component:v}),Object(r.jsx)(h.a,{path:"/products",exact:!0,component:g}),Object(r.jsx)(h.a,{path:"/sign-up",exact:!0,component:k})]})]})})};i.a.render(Object(r.jsx)(N,{}),document.getElementById("root"))},9:function(e,t,s){}},[[34,1,2]]]);
//# sourceMappingURL=main.e10e1882.chunk.js.map