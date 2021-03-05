(this.webpackJsonppluma=this.webpackJsonppluma||[]).push([[0],{45:function(e){e.exports=JSON.parse('{"Header.language":"Language:","Header.spanish":"Spanish","Header.english":"English","Home.signIn":"Sign In","Home.signInEmail":"What is your sign-in email address?","Home.emailPlaceholder":"Your email address","Home.continue":"Continue","Question.previous":"< Previous","Question.next":"Next >","Recommendations.recommendationTitle":"We got your recommendations","Recommendations.recommendationSubTitle":"Based on your answers, this is what make sense for you and what you should pay","Recommendations.healthInsurance":"Health Insurance","Recommendations.homeContent":"Home Content","Recommendations.PRIVATE_LIABILITY":"Private Liability","Recommendations.MONTH":" per month","Recommendations.YEAR":"per year","App.firstNameQuestion":"What\'s your fist name?","App.firstNamePlaceholder":"Your name here","App.addressQuestion":"What\'s your address?","App.addressPlaceholder":"Your address here","App.occupation":"What\'s your occupation?","App.occupationEmployed":"Employed","App.occupationSelfEmployed":"SelfEmployed","App.occupationStudent":"Student","App.doYouHaveChildrenQuestion":"Do you have children?","App.childrenYes":"Yes","App.childrenNo":"No","App.howManyChildrenQuestion":"How many children do you have?","App.emailQuestion":"What\'s your email?"}')},46:function(e){e.exports=JSON.parse('{"Header.language":"Lenguaje:","Header.spanish":"Espa\xf1ol","Header.english":"Ingles","Home.signIn":"Autenticar","Home.signInEmail":"Cual es tu email para autenticarte?","Home.continue":"Continuar","Home.emailPlaceholder":"Aqui tu correo electronico","Question.previous":"< Anterior","Question.next":"Siguiente >","Recommendations.recommendationTitle":"Estas son las recomendaciones para ti;","Recommendations.recommendationSubTitle":"En base a tus respuestas, esto es lo que creemos que funciona para ti y su costo","Recommendations.healthInsurance":"Seguro de vida","Recommendations.homeContent":"Seguro de hogar","Recommendations.PRIVATE_LIABILITY":"Riesgo como individuo","Recommendations.MONTH":" al mes","Recommendations.YEAR":"al a\xf1o","App.firstNameQuestion":"Cual es tu nombre?","App.occupation":"A que te dedicas?","App.doYouHaveChildrenQuestion":"Tienes hijos?","App.howManyChildrenQuestion":"Cuantos hijos tienes?","App.emailQuestion":"cual es tu correo electronico?","App.firstNamePlaceholder":"Tu nombre aqui","App.occupationEmployed":"Empleado","App.occupationSelfEmployed":"Autonomo","App.occupationStudent":"Estudiante","App.childrenYes":"Si","App.childrenNo":"No","App.addressPlaceholder":"Tu direccion aqui"}')},56:function(e,t,n){},57:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(44),c=n.n(s),i=(n(56),n(8)),r=(n(57),n(58),n(22)),u=n(29),l=n(45),d=n(46),p=n(12),m=n(20),h=n(2),g=Object(p.a)({language:{id:"Header.language",defaultMessage:"Language:"},spanish:{id:"Header.spanish",defaultMessage:"Spanish"},english:{id:"Header.english",defaultMessage:"English"}});function j(e){var t=e.setLocale,n=e.locale,a=Object(m.a)().formatMessage;return Object(h.jsx)("header",{className:"header-container",children:Object(h.jsxs)("div",{className:"header",children:[Object(h.jsxs)("a",{className:"logo",href:"/",children:[Object(h.jsx)("img",{src:"https://feather-insurance.com/_next/static/media/logo.0d69221106425e5288907e514db23d99.svg","aria-label":"Home"}),Object(h.jsx)("div",{className:"name",children:Object(h.jsx)("h1",{className:"p-h1",children:"Pluma"})})]}),Object(h.jsxs)("div",{className:"language-selector-box",children:[Object(h.jsx)("label",{htmlFor:"language-selector",children:a(g.language)}),Object(h.jsxs)("select",{className:"p-select",id:"language-selector",onChange:function(e){t(e.target.value)},value:n,children:[Object(h.jsx)("option",{value:"es",children:a(g.spanish)}),Object(h.jsx)("option",{value:"en",children:a(g.english)})]})]})]})})}var b=n(5),f=Object(p.a)({firstNameQuestion:{id:"App.firstNameQuestion",defaultMessage:"What's your fist name?"},firstNamePlaceholder:{id:"App.firstNamePlaceholder",defaultMessage:"Your name here"},addressQuestion:{id:"App.addressQuestion",defaultMessage:"What's your address?"},addressPlaceholder:{id:"App.addressPlaceholder",defaultMessage:"Your address here"},occupationQuestion:{id:"App.occupation",defaultMessage:"What's your occupation?"},occupationEmployed:{id:"App.occupationEmployed",defaultMessage:"Employed"},occupationSelfEmployed:{id:"App.occupationSelfEmployed",defaultMessage:"SelfEmployed"},occupationStudent:{id:"App.occupationStudent",defaultMessage:"Student"},doYouHaveChildrenQuestion:{id:"App.doYouHaveChildrenQuestion",defaultMessage:"Do you have children?"},childrenYes:{id:"App.childrenYes",defaultMessage:"Yes"},childrenNo:{id:"App.childrenNo",defaultMessage:"No"},howManyChildrenQuestion:{id:"App.howManyChildrenQuestion",defaultMessage:"How many children do you have?"},emailQuestion:{id:"App.emailQuestion",defaultMessage:"What's your email?"}});var O=Object(p.a)({signIn:{id:"Home.signIn",defaultMessage:"Sign In"},signInEmail:{id:"Home.signInEmail",defaultMessage:"What is your sign-in email address?"},emailPlaceholder:{id:"Home.emailPlaceholder",defaultMessage:"Your email address"},continue:{id:"Home.continue",defaultMessage:"Continue"}});function v(e){var t=e.userId,n=e.setUserId,o=Object(m.a)().formatMessage,s=Object(b.f)(),c=Object(a.useState)("/firstName"),r=Object(i.a)(c,2),u=r[0],l=r[1];return Object(a.useEffect)((function(){window.localStorage.getItem("".concat(t,":token"))&&l("/recommendations")}),[t]),Object(h.jsxs)("div",{className:"home-container",children:[Object(h.jsx)("h1",{className:"p-h1",children:o(O.signIn)}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"p-h4",children:o(O.signInEmail)}),Object(h.jsx)("input",{id:"email",className:"p-input d-block mt8 wmx6",type:"email",placeholder:o(O.emailPlaceholder),value:t,onChange:function(e){return n(e.target.value)}}),Object(h.jsx)("button",{className:"p-btn p-btn--primary wmn3 mt16",onClick:function(){return function(e){return s.push(e)}(u)},disabled:!t,children:o(O.continue)})]})]})}var x=Object(p.a)({previous:{id:"Question.previous",defaultMessage:"< Previous"},next:{id:"Question.next",defaultMessage:"Next >"}});function y(e){var t=e.question,n=t.previous,a=t.next,o=t.question,s=Object(m.a)().formatMessage,c=Object(b.f)(),i=function(e){return c.push(e)},r="radio"!==t.input.type?Object(h.jsx)(w,{placeholder:t.input.placeholder,onChange:t.onChange,currentValue:t.input.currentValue,type:t.input.type}):Object(h.jsx)(N,{options:t.input.options,onChange:t.onChange,currentValue:t.input.currentValue});return Object(h.jsxs)("div",{className:"question",children:[Object(h.jsx)("h4",{className:"p-h4",children:o}),r,Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{className:"p-btn p-btn--primary mt16 ws2",onClick:function(){return i(n)},children:s(x.previous)}),Object(h.jsx)("button",{className:"p-btn--primary mt16 ws2",onClick:function(){t.onNext(),i(a)},disabled:!t.input.currentValue,children:s(x.next)})]})]})}function w(e){var t=e.placeholder,n=e.onChange,a=e.currentValue,o="email"===e.type?"email":"";return Object(h.jsx)("input",{className:"p-input d-block mt8 wmx6",placeholder:t,onChange:n,value:a,type:o})}function N(e){var t=e.options,n=e.onChange,a=e.currentValue;return Object(h.jsx)("div",{className:"p-label-container mt8",children:t.map((function(e,t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{id:"default-".concat(t),className:"p-radio",type:"radio",value:e.value,onChange:n,checked:a===e.value}),Object(h.jsx)("label",{htmlFor:"default-".concat(t),className:"p-label",children:e.label})]},t)}))})}var S=n(15),I=n.n(S),A=n(25),M=n(33),E=n.n(M),C=Object(p.a)({recommendationTitle:{id:"Recommendations.recommendationTitle",defaultMessage:"We got your recommendations"},recommendationSubTitle:{id:"Recommendations.recommendationSubTitle",defaultMessage:"Based on your answers, this is what make sense for you and what you should pay"},HEALTH_INSURANCE:{id:"Recommendations.healthInsurance",defaultMessage:"Health Insurance"},HOME_CONTENT:{id:"Recommendations.homeContent",defaultMessage:"Home Content"},PRIVATE_LIABILITY:{id:"Recommendations.PRIVATE_LIABILITY",defaultMessage:"Private Liability"},MONTH:{id:"Recommendations.MONTH",defaultMessage:" per month"},YEAR:{id:"Recommendations.YEAR",defaultMessage:"per year"}});function H(e,t){return Q.apply(this,arguments)}function Q(){return(Q=Object(A.a)(I.a.mark((function e(t,n){var a,o,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("https://challenge-dot-popsure-204813.appspot.com/user",t);case 3:s=e.sent,window.localStorage.setItem("".concat(n,":token"),s.data.jwt),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0);case 10:return e.abrupt("return",null===(a=s)||void 0===a||null===(o=a.data)||void 0===o?void 0:o.jwt);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function T(e){return R.apply(this,arguments)}function R(){return(R=Object(A.a)(I.a.mark((function e(t){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.token,e.prev=1,e.next=4,E.a.get("https://challenge-dot-popsure-204813.appspot.com/recommendation ",{headers:{Authorization:"Bearer ".concat(n)}});case 4:a=e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:return e.abrupt("return",a.data);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function P(e){var t=e.userId,n=Object(a.useState)("no"),o=Object(i.a)(n,2),s=o[0],c=o[1],r=Object(a.useState)(""),u=Object(i.a)(r,2),l=u[0],d=u[1],p=Object(a.useState)([]),g=Object(i.a)(p,2),j=g[0],b=g[1],f=Object(m.a)().formatMessage;return Object(a.useEffect)((function(){c(window.localStorage.getItem("".concat(t,":completedProfile")))}),[t]),Object(a.useEffect)((function(){function e(){return(e=Object(A.a)(I.a.mark((function e(t,n){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,H(t,n);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=Object(A.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.token,e.t0=b,e.next=4,T({token:n});case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(d(window.localStorage.getItem("".concat(t,":token"))),l&&function(e){n.apply(this,arguments)}({token:l}),"true"===s)&&function(t,n){e.apply(this,arguments)}({firstName:window.localStorage.getItem("".concat(t,":firstName")),address:window.localStorage.getItem("".concat(t,":address")),occupation:window.localStorage.getItem("".concat(t,":occupation")),numberOfChildren:Number(window.localStorage.getItem("".concat(t,":howMany"))),email:window.localStorage.getItem("".concat(t,":email"))},t)}),[s,t,l]),Object(h.jsx)(h.Fragment,{children:j.length?Object(h.jsxs)("div",{className:"home-container ml8 mr8",children:[Object(h.jsx)("h1",{className:"p-h1",children:f(C.recommendationTitle)}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"p-h4 mb24",children:f(C.recommendationSubTitle)}),j.map((function(e,t){return Object(h.jsxs)("div",{className:"recommendation mb24",children:[Object(h.jsx)("h4",{className:"p-h4",children:f(C[e.type])}),Object(h.jsx)("div",{children:" $ ".concat(e.price.amount," ").concat(f(C[e.price.periodicity]))})]},t)}))]})]}):Object(h.jsx)("div",{className:"ds-spinner ds-spinner__l"})})}function Y(){var e=Object(m.a)(),t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],s=n[1],c=function(e){var t=e.intl,n=e.userId,o=Object(a.useState)(""),s=Object(i.a)(o,2),c=s[0],r=s[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),d=l[0],p=l[1],m=Object(a.useState)(""),h=Object(i.a)(m,2),g=h[0],j=h[1],b=Object(a.useState)(""),O=Object(i.a)(b,2),v=O[0],x=O[1],y=Object(a.useState)(""),w=Object(i.a)(y,2),N=w[0],S=w[1],I=Object(a.useState)(""),A=Object(i.a)(I,2),M=A[0],E=A[1],C=t.formatMessage;return Object(a.useEffect)((function(){r(window.localStorage.getItem("".concat(n,":firstName"))||""),p(window.localStorage.getItem("".concat(n,":address"))||""),j(window.localStorage.getItem("".concat(n,":occupation"))||""),x(window.localStorage.getItem("".concat(n,":children"))||""),S(window.localStorage.getItem("".concat(n,":howMany"))||""),E(window.localStorage.getItem("".concat(n,":email"))||"")}),[n]),[{id:"firstName",previous:"/",next:"address",input:{type:"text",placeholder:C(f.firstNamePlaceholder),currentValue:c},question:C(f.firstNameQuestion),onChange:function(e){return r(e.target.value)},onNext:function(){return window.localStorage.setItem("".concat(n,":firstName"),c)}},{id:"address",previous:"/",next:"occupation",input:{type:"text",placeholder:C(f.addressPlaceholder),currentValue:d},question:C(f.addressQuestion),onChange:function(e){return p(e.target.value)},onNext:function(){return window.localStorage.setItem("".concat(n,":address"),d)}},{id:"occupation",previous:"firstName",next:"children",input:{type:"radio",options:[{label:C(f.occupationEmployed),value:"EMPLOYED"},{label:C(f.occupationSelfEmployed),value:"SELF_EMPLOYED"},{label:C(f.occupationStudent),value:"STUDENT"}],currentValue:g},question:C(f.occupationQuestion),onChange:function(e){return j(e.target.value)},onNext:function(){return window.localStorage.setItem("".concat(n,":occupation"),g)}},{id:"children",previous:"occupation",next:"yes"===v?"howMany":"emailAddress",input:{type:"radio",options:[{label:C(f.childrenYes),value:"yes"},{label:C(f.childrenNo),value:"no"}],currentValue:v},question:C(f.doYouHaveChildrenQuestion),onChange:function(e){return x(e.target.value)},onNext:function(){return window.localStorage.setItem("".concat(n,":children"),v)}},{id:"howMany",previous:"children",next:"emailAddress",input:{type:"text",placeholder:"1",currentValue:N},question:C(f.howManyChildrenQuestion),onChange:function(e){return S(e.target.value)},onNext:function(){return window.localStorage.setItem("".concat(n,":howMany"),N)}},{id:"emailAddress",previous:"Yes"===v?"howMany":"children",next:"recommendations",input:{type:"email",placeholder:"jorge.parga@pluma.com",currentValue:M},question:C(f.emailQuestion),onChange:function(e){return E(e.target.value)},onNext:function(){window.localStorage.setItem("".concat(n,":email"),M),window.localStorage.setItem("".concat(n,":completedProfile"),"true")}}]}({intl:e,userId:o}),r=Object(b.f)();return o||r.push("/"),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{exact:!0,path:"/",children:Object(h.jsx)(v,{userId:o,setUserId:s})}),c.map((function(e,t){return Object(h.jsx)(b.a,{path:"/".concat(e.id),children:Object(h.jsx)(y,{question:e})},t)})),Object(h.jsx)(b.a,{path:"/recommendations",children:Object(h.jsx)(P,{userId:o})})]})})}var k={en:l,es:d};var L=function(){var e=Object(a.useState)("en"),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(h.jsx)(u.a,{locale:n,messages:k[n],children:Object(h.jsxs)(r.a,{basename:"/pluma",children:[Object(h.jsx)(j,{setLocale:o,locale:n}),Object(h.jsx)(Y,{})]})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),s(e),c(e)}))};c.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),V()}},[[84,1,2]]]);
//# sourceMappingURL=main.47e1cbf4.chunk.js.map