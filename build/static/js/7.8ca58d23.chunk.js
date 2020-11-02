/*! For license information please see 7.8ca58d23.chunk.js.LICENSE.txt */
(this["webpackJsonplink-aya-kya"]=this["webpackJsonplink-aya-kya"]||[]).push([[7],{118:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(13),c=a(15),l=a(14),s=a(0),o=a.n(s),i=a(1),u=a(41),m=a(60),d=a(16),f=a(49),p=a(72),h=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"up-container flex container mx-auto",style:{maxWidth:"500px"}},o.a.createElement("div",{className:"up"},o.a.createElement("div",{className:"ann-preview"},o.a.createElement("h3",null,o.a.createElement("span",{role:"img",className:"emoji","aria-label":"books"},"\ud83d\udcda"))),o.a.createElement("div",{className:"ann-info text-left"},o.a.createElement("h2",null,o.a.createElement("strong",null,this.props.subject.subject)),o.a.createElement("h4",null,"Subject Code: ",this.props.subject.subjectCode),o.a.createElement("h4",null,"Teacher: ",this.props.subject.teacher))))}}]),a}(s.Component),v=a(65),E=a.n(v),b=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={},e.renderLecture=function(){var t=e.props.lecture,a=t.subject,n=t.teacher,r=t.startTime,c=t.endTime,l=t.link,s=t.text,i=t.group,u=r.toDate().getHours(),m=r.toDate().getMinutes(),d="am";u>12&&(u-=12,d="pm");var f=m<10?"0"+String(m):String(m),p=c.toDate().getHours(),h=c.toDate().getMinutes(),v="am";p>12&&(p-=12,v="pm");var b=h<10?"0"+String(h):String(h);return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"lec lec-hover",id:r+l},o.a.createElement("div",{className:"lec-preview"},o.a.createElement("div",{className:"time"},o.a.createElement("h3",null,u," : ",f," ",d),o.a.createElement("div",{className:"mb-2",style:{display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement("span",{className:"vertical-line",style:{height:"20px"}})),o.a.createElement("h3",null,p," : ",b," ",v)),o.a.createElement("hr",null),o.a.createElement("br",null),o.a.createElement("a",{className:"lec-btn btn-primary mt-2",href:l,target:"_blank",rel:"noopener noreferrer"},"Join now")),o.a.createElement("div",{className:"lec-info text-left"},o.a.createElement("div",{className:"main-data"},o.a.createElement("h2",null,o.a.createElement("strong",null,a)),o.a.createElement("h4",null,"Teacher: ",n),o.a.createElement("h4",null,"Group: ",i||"All")),o.a.createElement("hr",null),o.a.createElement("h5",null,o.a.createElement("strong",null,"Description: "),o.a.createElement(E.a,{lines:2,more:"More",less:"Less",anchorClass:"",onClick:function(){return document.getElementById(r+l).classList.toggle("lec-hover")},expanded:!1},s||"No Info Provided")))))},e}return Object(r.a)(a,[{key:"render",value:function(){return this.renderLecture()}}]),a}(s.Component),g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],y=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={},e.displayUpdate=function(){switch(e.props.announcement.type){case"announcement":return e.displayAnnouncement();case"poll":return e.displayPoll();case"link":return e.displayLink();default:return}},e.displayAnnouncement=function(){var t=e.props.announcement,a=t.dateAndTime,n=t.text,r=t.isOfficial,c=a.toDate(),l=c.getDate(),s=g[c.getMonth()-1],i=c.getFullYear(),u=c.getHours(),m="00",d=c.getMinutes();return m=d<10?"0"+String(d):String(d),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"ann-preview"},r&&o.a.createElement("i",{className:"fa fa-bookmark float-right mr-n4 mt-n4 text-danger",style:{fontSize:"30px"}}),o.a.createElement("h3",null,o.a.createElement("span",{role:"img",className:"emoji","aria-label":"announcement"},"\ud83d\udce2"))),o.a.createElement("div",{className:"ann-info text-left"},o.a.createElement("h6",{className:"mb-3"},s," ",l,", ",i," at ",u,":",m),o.a.createElement("div",{style:{minHeight:"50%",display:"flex",alignItems:"center"}},o.a.createElement("h4",null,n))))},e.displayLink=function(){var t=e.props.announcement,a=t.dateAndTime,n=t.text,r=t.link,c=t.isOfficial,l=a.toDate(),s=l.getDate(),i=g[l.getMonth()-1],u=l.getFullYear(),m=l.getHours(),d="00",f=l.getMinutes();return d=f<10?"0"+String(f):String(f),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"ann-preview"},c&&o.a.createElement("i",{className:"fa fa-bookmark float-right mr-n4 mt-n4 text-danger",style:{fontSize:"30px"}}),o.a.createElement("h3",null,o.a.createElement("span",{role:"img",className:"emoji","aria-label":"announcement"},"\ud83d\udd17"))),o.a.createElement("div",{className:"ann-info text-left"},o.a.createElement("h6",{className:"mb-3"},i," ",s,", ",u," at ",m,":",d),o.a.createElement("h4",null,n),o.a.createElement("a",{className:"btn link-btn btn-primary mt-2 float-right",href:r,target:"_blank",rel:"noopener noreferrer"},"Visit Link")))},e.displayPoll=function(){var t=e.props.announcement,a=t.dateAndTime,n=t.text,r=t.yesCount,c=t.yesOption,l=t.noCount,s=t.noOption,i=t.isOfficial,u=a.toDate(),m=u.getDate(),d=g[u.getMonth()-1],f=u.getFullYear(),p=u.getHours(),h="00",v=u.getMinutes();h=v<10?"0"+String(v):String(v);var E=100*r/(l+r);Number.isNaN(E)&&(E=0);var b=100*l/(l+r);return Number.isNaN(b)&&(b=0),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"ann-preview"},i&&o.a.createElement("i",{className:"fa fa-bookmark float-right mr-n4 mt-n4 text-danger",style:{fontSize:"30px"}}),o.a.createElement("h3",null,o.a.createElement("span",{role:"img",className:"emoji","aria-label":"announcement"},"\ud83d\uddf3\ufe0f"))),o.a.createElement("div",{className:"ann-info text-left"},o.a.createElement("h6",{className:"mb-3"},d," ",m,", ",f," at ",p,":",h),o.a.createElement("h4",null,n),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("table",{className:"table"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,c),o.a.createElement("td",null,s)),o.a.createElement("tr",null,o.a.createElement("td",null,r),o.a.createElement("td",null,l)))),o.a.createElement("p",null,"PS: You can currently vote via app only!")))))},e.getClass=function(){var t="text-left p-4 mb-4 ";switch(e.props.announcement.type){case"announcement":t+="announcement-card ";break;case"poll":t+="poll-card";break;case"link":t+="link-card"}return t},e}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"up-container d-flex flex-column container-fluid"},o.a.createElement("div",{className:"up mx-auto"},this.displayUpdate()))}}]),a}(s.Component),N=a(50),j=a(52),O=a(115),k=a(6),w=a(44),x=a.n(w),S=u.a.firestore(),C=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={stuDoc:{},classCode:" ",name:"",rollNo:"",subjects:[],details:[],lecturesToday:[],announcements:[],loading:!0},e.stuDocRef=S.collection("students").doc(e.props.email),e.fetchClassDetails=function(){S.collection("classes").doc(e.state.classCode).onSnapshot((function(t){t.data()&&e.setState({subjects:t.data().subjects.map((function(e){return Object(f.a)({},e)})),details:t.data().details,loading:!1})})),S.collection("classes").doc(e.state.classCode).collection("lectures").doc("lecturesToday").onSnapshot((function(t){t.data()&&e.setState({lecturesToday:t.data().lectures.map((function(e){return Object(f.a)({},e)}))})})),S.collection("classes").doc(e.state.classCode).collection("updates").doc("announcements").onSnapshot((function(t){t.data()&&(e.setState({announcements:t.data().announcements.map((function(e){return Object(f.a)({},e)}))}),e.sortAnnouncements())}))},e.handleSignOut=function(){u.a.auth().signOut().then((function(){x.a.toast({html:"Signed Out",classes:"toast success-toast"}),window.location.reload()})).catch((function(e){x.a.toast({html:e.message,classes:"toast error-toast"})}))},e.sortAnnouncements=function(){for(var t=e.state.announcements,a=0;a<t.length;a++)for(var n=a+1;n<t.length;n++)if(t[a].dateAndTime<t[n].dateAndTime){var r=t[a];t[a]=t[n],t[n]=r}e.setState({announcements:t})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.stuDocRef.get().then((function(t){t.exists?(e.setState({stuDoc:t.data(),classCode:t.data().classCode}),t.data().classCode&&e.fetchClassDetails()):e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this,t=d.a;return t=this.state.loading?o.a.createElement(d.a,null):o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"code-head-btn"},o.a.createElement(j.a,null),o.a.createElement("h1",{className:"mainPageHeading mb-5"},"Welcome!"),o.a.createElement(O.a,{className:"float-md-right mb-2"},o.a.createElement(O.a.Toggle,{className:"acc-dropdown",id:"dropdown-basic"},o.a.createElement("i",{className:"fa fa-user-circle",style:{fontSize:"30px",cursor:"pointer"}})),o.a.createElement(O.a.Menu,null,o.a.createElement(k.b,{to:{pathname:"/student/profile",state:{doc:this.state.stuDoc}},style:{textDecoration:"none"}},o.a.createElement(O.a.Item,{href:"/student/profile"},"Profile")),o.a.createElement(O.a.Divider,null),o.a.createElement(O.a.Item,{onClick:function(){return e.handleSignOut()}},o.a.createElement("i",{style:{fontSize:"25px",cursor:"pointer"},className:"fa fa-sign-out"}))))),o.a.createElement("div",{id:"Class"},o.a.createElement("h2",{className:"subHeading"},"Class Details: ")),o.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"18rem"}}),o.a.createElement(p.a,{details:this.state.details}),o.a.createElement("div",{id:"Lectures"},o.a.createElement("h2",{className:"subHeading"},"Lectures Today:")),o.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"40%"}}),o.a.createElement("div",{className:"lectures-row"},0===this.state.lecturesToday.length?o.a.createElement("h4",{style:{textAlign:"center",width:"100%"}},"No lectures for the day! Lets enjoy"):this.state.lecturesToday.map((function(e){return o.a.createElement(b,{lecture:e,key:e.startTime})}))),o.a.createElement("div",{id:"Announcements"},o.a.createElement("div",{className:"d-inline container-fluid"},o.a.createElement("h2",{className:"subHeading"},"Mitron! Announcement Suno"," ",o.a.createElement("span",{role:"img","aria-label":"announcement"},"\ud83d\udce2")),o.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"40%"}})),o.a.createElement("div",{className:"key-container"},o.a.createElement("div",{className:"poll-card m-2",style:{width:"90px"}},o.a.createElement("span",{className:"p-2"},o.a.createElement("i",{className:"fa fa-bookmark text-danger mr-1"})," Official")),o.a.createElement("div",{className:"poll-card m-2",style:{width:"150px"}},o.a.createElement("span",{className:"p-2"},o.a.createElement("span",{role:"img",className:"mr-1","aria-label":"announcement"},"\ud83d\udce2"," ")," ","Announcements")),o.a.createElement("div",{className:"poll-card m-2",style:{width:"75px"}},o.a.createElement("span",{className:"p-2"},o.a.createElement("span",{role:"img",className:"mr-1","aria-label":"announcement"},"\ud83d\udd17"),"Links")),o.a.createElement("div",{className:"poll-card m-2",style:{width:"75px"}},o.a.createElement("span",{className:"p-2"},o.a.createElement("span",{role:"img",className:"mr-1","aria-label":"announcement"},"\ud83d\uddf3\ufe0f"),"Polls")))),o.a.createElement("div",{className:"m-4 mx-n3 ann-container"},0!==this.state.announcements.length?this.state.announcements.map((function(e){return o.a.createElement(y,{announcement:e,id:e.dateAndTime,key:e.dateAndTime})})):o.a.createElement("h4",{style:{textAlign:"center",width:"100%"}},"Any important announcements, polls or links for the class will be shown here")),o.a.createElement("div",{id:"Subjects"},o.a.createElement("h2",{className:"subHeading"},"Subjects You study:")),o.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"40%"}}),o.a.createElement("div",{className:"my-flex-container"},0===this.state.subjects.length?o.a.createElement("h4",{style:{textAlign:"center",width:"100%"}},"No subjects have been added by the CR yet!"):this.state.subjects.map((function(e){return o.a.createElement(h,{subject:e,key:e.subjectCode})}))),o.a.createElement(N.a,{paths:["Class","Lectures","Announcements","Subjects"]}))," "!==this.state.classCode?t:o.a.createElement("h1",null,"Join Your Friends")}}]),a}(s.Component),A=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).db=u.a.firestore(),e.isMount=!1,e.state={email:"",access:!1,loading:!0},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.isMount=!0,this.checkAuth()}},{key:"UNSAFE_componentWillMount",value:function(){this.isMount=!1}},{key:"checkAuth",value:function(){var e=this;u.a.auth().onAuthStateChanged((function(t){t&&(e.isMount&&e.setState({email:t.email}),e.db.collection("students").doc(t.email).get().then((function(t){t.exists&&e.isMount&&e.setState({access:!0})})))})),setTimeout((function(){e.setState({loading:!1})}),1e3)}},{key:"render",value:function(){var e;return e=this.state.email?this.state.access?o.a.createElement(C,{email:this.state.email}):o.a.createElement(m.a,null):o.a.createElement(i.a,{to:"/student/login"}),this.state.loading?o.a.createElement(d.a,null):e}}]),a}(s.Component);t.default=A},41:function(e,t,a){"use strict";var n=a(45),r=a.n(n);a(46),a(47);r.a.initializeApp({apiKey:"AIzaSyAmIvOPjQnup4mQ5aG39T5baEpulNmWv4k",authDomain:"laayak-web-app.firebaseapp.com",databaseURL:"https://laayak-web-app.firebaseio.com",projectId:"laayak-web-app",storageBucket:"laayak-web-app.appspot.com",messagingSenderId:"308936714271",appId:"1:308936714271:web:002f9b74b345181da7cd2a",measurementId:"G-YHF3LDWKKG"}),t.a=r.a},42:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},43:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},48:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a(2);var n=a(0),r=a.n(n),c=r.a.createContext({});c.Consumer,c.Provider;function l(e,t){var a=Object(n.useContext)(c);return e||a[t]||t}},50:function(e,t,a){"use strict";var n=a(12),r=a(13),c=a(15),l=a(14),s=a(0),o=a.n(s),i=(a(51),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("nav",{className:"b-nav"},o.a.createElement("ul",{className:"b-nav-links"},this.props.paths.map((function(e){return o.a.createElement("li",{key:e},o.a.createElement("a",{href:"#"+e,className:"b-nav-link"},e))}))))}}]),a}(s.Component));t.a=i},51:function(e,t,a){},52:function(e,t,a){"use strict";var n=a(12),r=a(13),c=a(15),l=a(14),s=a(0),o=a.n(s),i=(a(53),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={mode:document.getElementsByTagName("Body")[0].classList[0]},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"float-md-left w-auto mb-2 input-group custom-control custom-switch"},o.a.createElement("label",{id:"switch",className:"switch"},o.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:function(){"dark"===e.state.mode?localStorage.setItem("mode","light"):localStorage.setItem("mode","dark"),document.getElementsByTagName("Body")[0].classList.replace(e.state.mode,localStorage.getItem("mode")),e.setState({mode:localStorage.getItem("mode")})},checked:"dark"===this.state.mode,id:"dark"}),o.a.createElement("span",{className:"slider round"})))}}]),a}(s.Component));t.a=i},53:function(e,t,a){},56:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0);var r=function(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t};function c(e){var t=r(e);return Object(n.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},57:function(e,t,a){"use strict";function n(e){return e&&e.ownerDocument||document}a.d(t,"a",(function(){return n}))},59:function(e,t,a){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},60:function(e,t,a){"use strict";var n=a(12),r=a(13),c=a(15),l=a(14),s=a(0),o=a.n(s),i=a(6),u=a(44),m=a.n(u),d=a(41),f=(a(61),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).handleSignOut=function(){d.a.auth().signOut().then((function(){window.location.reload()})).catch((function(e){m.a.toast({html:e.message,classes:"toast error-toast"})}))},e}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"403"},o.a.createElement("section",{className:"page_403"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 "},o.a.createElement("div",{className:"col-sm-offset-1  text-center"},o.a.createElement("h1",{className:"text-center"},"403"),o.a.createElement("div",{className:"four_zero_three_bg"}),o.a.createElement("div",{className:"contant_box_403"},o.a.createElement("h3",{className:"h2"},"Access Denied"),o.a.createElement("h5",null,o.a.createElement("button",{className:"btn btn-primary mx-2",onClick:this.handleSignOut},"Sign In"),"to gain access / go",o.a.createElement(i.b,{className:"btn btn-success mx-2",to:"/"},"Home")))))))))}}]),a}(s.Component));t.a=f},61:function(e,t,a){},63:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(2),r=a(7),c=a(43),l=a.n(c),s=/-(.)/g;var o=a(0),i=a.n(o),u=a(48),m=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var a=void 0===t?{}:t,c=a.displayName,s=void 0===c?m(e):c,o=a.Component,d=a.defaultProps,f=i.a.forwardRef((function(t,a){var c=t.className,s=t.bsPrefix,m=t.as,d=void 0===m?o||"div":m,f=Object(r.a)(t,["className","bsPrefix","as"]),p=Object(u.a)(s,e);return i.a.createElement(d,Object(n.a)({ref:a,className:l()(c,p)},f))}));return f.defaultProps=d,f.displayName=s,f}},66:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useState)(null)}},67:function(e,t,a){"use strict";var n=a(68),r=a(69);t.a=function(e,t,a,c){return Object(n.a)(e,t,a,c),function(){Object(r.a)(e,t,a,c)}}},68:function(e,t,a){"use strict";var n=a(59),r=!1,c=!1;try{var l={get passive(){return r=!0},get once(){return c=r=!0}};n.a&&(window.addEventListener("test",l,l),window.removeEventListener("test",l,!0))}catch(s){}t.a=function(e,t,a,n){if(n&&"boolean"!==typeof n&&!c){var l=n.once,s=n.capture,o=a;!c&&l&&(o=a.__once||function e(n){this.removeEventListener(t,e,s),a.call(this,n)},a.__once=o),e.addEventListener(t,o,r?n:s)}e.addEventListener(t,a,n)}},69:function(e,t,a){"use strict";t.a=function(e,t,a,n){var r=n&&"boolean"!==typeof n?n.capture:n;e.removeEventListener(t,a,r),a.__once&&e.removeEventListener(t,a.__once,r)}},72:function(e,t,a){"use strict";var n=a(12),r=a(13),c=a(15),l=a(14),s=a(0),o=a.n(s),i=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={},e.getDetails=function(){var t=e.props.details,a=t.branch,n=t.college,r=t.course,c=t.sem,l=t.crName;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"ann-preview",style:{display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement("img",{alt:"details",src:"https://cdn1.iconfinder.com/data/icons/education-set-01/512/document-info-512.png"})),o.a.createElement("div",{className:"ann-info text-left"},o.a.createElement("p",null,"Branch: ",o.a.createElement("strong",null,a)),o.a.createElement("p",null,"College: ",o.a.createElement("strong",null,n)),o.a.createElement("p",null,"Course: ",o.a.createElement("strong",null,r)),o.a.createElement("p",null,"Semester: ",o.a.createElement("strong",null,c)),o.a.createElement("p",null,"Class Representative: ",o.a.createElement("strong",null,l))))},e}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"up-container d-flex flex-column container-fluid"},o.a.createElement("div",{className:"up mx-auto"},this.getDetails()))}}]),a}(s.Component);t.a=i},74:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return n(e.querySelectorAll(t))}},76:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current=e})),t.current}},77:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0),t=Object(n.useRef)((function(){return e.current}));return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},78:function(e,t,a){"use strict";function n(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}a.d(t,"a",(function(){return n}))},79:function(e,t,a){"use strict";var n=function(){};e.exports=n},81:function(e,t,a){"use strict";function n(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=7.8ca58d23.chunk.js.map