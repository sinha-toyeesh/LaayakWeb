(this["webpackJsonplink-aya-kya"]=this["webpackJsonplink-aya-kya"]||[]).push([[14],{108:function(e,t,a){"use strict";a.r(t);var n=a(42),s=a(49),l=a(12),r=a(13),c=a(15),i=a(14),o=a(0),u=a.n(o),m=a(41),d=a(1),p=m.a.firestore(),f=m.a.auth(),h=p.collection("classes").doc(),b=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).isMount=!1,e.state={details:{branch:"",college:"",course:"",crName:"",sem:"",timeTable:"Himesh set krega"},listOfCRs:{},redirect:!1},e.handleChange=function(t){var a=t.target.name,n=t.target.value,l=Object(s.a)({},e.state.details);l[a]=n,e.setState({details:l})},e.addDoc=function(){var t=p.collection("students").doc("listOfCRs");e.state.user&&t.onSnapshot((function(a){if(a.data().listOfCRs[e.state.user.email])p.collection("classes").doc(a.data().listOfCRs[e.state.user.email]).get().then((function(l){if(l.exists)e.isMount&&e.setState({redirect:!0});else if(e.isMount){var r=Object(s.a)(Object(s.a)({},a.data().listOfCRs),{},Object(n.a)({},e.state.user.email,h.id));e.setState({listOfCRs:r}),e.isMount&&t.set({listOfCRs:e.state.listOfCRs})}}));else if(e.isMount){var l=Object(s.a)(Object(s.a)({},a.data().listOfCRs),{},Object(n.a)({},e.state.user.email,h.id));e.setState({listOfCRs:l}),t.set({listOfCRs:e.state.listOfCRs})}}))},e.handleSubmitDetails=function(t){t.preventDefault();var a=t.target.classList;a.add("loading"),e.initAll(a)},e.getDetails=function(){return u.a.createElement("div",{className:"main-container"},u.a.createElement("div",{className:"container-login mx-auto"},u.a.createElement("div",{className:"con-login"},u.a.createElement("h1",null,"Additional Details"),u.a.createElement("form",{style:{width:"100%"}},u.a.createElement("div",{className:"con-inputs mt-4"},u.a.createElement("div",{className:"con-input"},u.a.createElement("label",{htmlFor:"crName"},"Username"),u.a.createElement("input",{placeholder:"Username",id:"crName",name:"crName",value:e.state.details.crName,type:"text",onChange:e.handleChange,required:!0})),u.a.createElement("div",{className:"con-input"},u.a.createElement("label",{htmlFor:"course"},"Course"),u.a.createElement("input",{placeholder:"Eg. BTech",id:"course",name:"course",value:e.state.details.course,type:"text",onChange:e.handleChange,required:!0})),u.a.createElement("div",{className:"con-input"},u.a.createElement("label",{htmlFor:"branch"},"Branch"),u.a.createElement("input",{placeholder:"Eg. CSE",id:"branch",name:"branch",value:e.state.details.branch,type:"text",onChange:e.handleChange,required:!0})),u.a.createElement("div",{className:"con-input"},u.a.createElement("label",{htmlFor:"sem"},"Semester"),u.a.createElement("input",{placeholder:"Semester",id:"sem",name:"sem",value:e.state.details.sem,type:"text",onChange:e.handleChange,required:!0})),u.a.createElement("div",{className:"con-input"},u.a.createElement("label",{htmlFor:"college"},"College Name"),u.a.createElement("input",{placeholder:"College Name",id:"college",name:"college",value:e.state.details.college,type:"text",onChange:e.handleChange,required:!0}))),u.a.createElement("footer",null,u.a.createElement("button",{onClick:e.handleSubmitDetails,type:"submit",className:"btn-login"},"Submit"))))))},e.initAll=function(t){e.setState({redirect:!0});var a={details:e.state.details,subjects:[]};h.set(a),h.collection("updates").doc("announcements").set({announcements:[]}),h.collection("lectures").doc("lecturesToday").set({lectures:[]}),h.collection("fcmTokens").doc("fcmTokens").set({fcmTokens:[]}),h.collection("details").doc("stuList").set({studentsList:[]}),t.remove("loading")},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.isMount=!0,this.isMount&&f.onAuthStateChanged((function(t){e.isMount&&(t?(e.setState({user:t,forgery:!1}),e.addDoc()):e.setState({forgery:!0}))}))}},{key:"UNSAFE_componentWillMount",value:function(){this.isMount=!1}},{key:"render",value:function(){return this.state.forgery?u.a.createElement(d.a,{to:"/newcr"}):this.state.redirect?u.a.createElement(d.a,{to:"/cr"}):u.a.createElement("div",null,this.getDetails())}}]),a}(o.Component);t.default=b},41:function(e,t,a){"use strict";var n=a(45),s=a.n(n);a(46),a(47);s.a.initializeApp({apiKey:"AIzaSyAmIvOPjQnup4mQ5aG39T5baEpulNmWv4k",authDomain:"laayak-web-app.firebaseapp.com",databaseURL:"https://laayak-web-app.firebaseio.com",projectId:"laayak-web-app",storageBucket:"laayak-web-app.appspot.com",messagingSenderId:"308936714271",appId:"1:308936714271:web:002f9b74b345181da7cd2a",measurementId:"G-YHF3LDWKKG"}),t.a=s.a},42:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(42);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}}}]);
//# sourceMappingURL=14.b4ffea70.chunk.js.map