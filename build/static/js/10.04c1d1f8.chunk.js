(this["webpackJsonplink-aya-kya"]=this["webpackJsonplink-aya-kya"]||[]).push([[10,14],{126:function(e,t,a){"use strict";a.r(t);var n=a(12),l=a(13),s=a(15),c=a(14),r=a(0),i=a.n(r),o=a(1),m=a(43),u=a(72),d=a(16),p=a(58),h=a(74),f=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"up-container flex container mx-auto",style:{maxWidth:"500px"}},i.a.createElement("div",{className:"up"},i.a.createElement("div",{className:"ann-preview"},i.a.createElement("h3",null,i.a.createElement("span",{role:"img",className:"emoji","aria-label":"books"},"\ud83d\udcda"))),i.a.createElement("div",{className:"ann-info text-left"},i.a.createElement("h2",null,i.a.createElement("strong",null,this.props.subject.subject)),i.a.createElement("h4",null,"Subject Code: ",this.props.subject.subjectCode),i.a.createElement("h4",null,"Teacher: ",this.props.subject.teacher))))}}]),a}(r.Component),E=a(75),g=a.n(E),v=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e.renderLecture=function(){var t=e.props.lecture,a=t.subject,n=t.teacher,l=t.startTime,s=t.endTime,c=t.link,r=t.text,o=t.group,m=l.toDate().getHours(),u=l.toDate().getMinutes(),d="am";m>12&&(m-=12,d="pm");var p=u<10?"0"+String(u):String(u),h=s.toDate().getHours(),f=s.toDate().getMinutes(),E="am";h>12&&(h-=12,E="pm");var v=f<10?"0"+String(f):String(f);return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"lec lec-hover",id:l+c},i.a.createElement("div",{className:"lec-preview"},i.a.createElement("div",{className:"time"},i.a.createElement("h3",null,m," : ",p," ",d),i.a.createElement("div",{className:"mb-2",style:{display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement("span",{className:"vertical-line",style:{height:"20px"}})),i.a.createElement("h3",null,h," : ",v," ",E)),i.a.createElement("hr",null),i.a.createElement("br",null),i.a.createElement("a",{className:"lec-btn btn-primary mt-2",href:c,target:"_blank",rel:"noopener noreferrer"},"Join now")),i.a.createElement("div",{className:"lec-info text-left"},i.a.createElement("div",{className:"main-data"},i.a.createElement("h2",null,i.a.createElement("strong",null,a)),i.a.createElement("h4",null,"Teacher: ",n),i.a.createElement("h4",null,"Group: ",o||"All")),i.a.createElement("hr",null),i.a.createElement("h5",null,i.a.createElement("strong",null,"Description: "),i.a.createElement(g.a,{lines:2,more:"More",less:"Less",anchorClass:"",onClick:function(){return document.getElementById(l+c).classList.toggle("lec-hover")},expanded:!1},r||"No Info Provided")))))},e}return Object(l.a)(a,[{key:"render",value:function(){return this.renderLecture()}}]),a}(r.Component),b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],y=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e.displayUpdate=function(){switch(e.props.announcement.type){case"announcement":return e.displayAnnouncement();case"poll":return e.displayPoll();case"link":return e.displayLink();default:return}},e.displayAnnouncement=function(){var t=e.props.announcement,a=t.dateAndTime,n=t.text,l=t.isOfficial,s=a.toDate(),c=s.getDate(),r=b[s.getMonth()-1],o=s.getFullYear(),m=s.getHours(),u="00",d=s.getMinutes();return u=d<10?"0"+String(d):String(d),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"ann-preview"},l&&i.a.createElement("i",{className:"fa fa-bookmark float-right mr-n4 mt-n4 text-danger",style:{fontSize:"30px"}}),i.a.createElement("h3",null,i.a.createElement("span",{role:"img",className:"emoji","aria-label":"announcement"},"\ud83d\udce2"))),i.a.createElement("div",{className:"ann-info text-left"},i.a.createElement("h6",{className:"mb-3"},r," ",c,", ",o," at ",m,":",u),i.a.createElement("div",{style:{minHeight:"50%",display:"flex",alignItems:"center"}},i.a.createElement("h4",null,n))))},e.displayLink=function(){var t=e.props.announcement,a=t.dateAndTime,n=t.text,l=t.link,s=t.isOfficial,c=a.toDate(),r=c.getDate(),o=b[c.getMonth()-1],m=c.getFullYear(),u=c.getHours(),d="00",p=c.getMinutes();return d=p<10?"0"+String(p):String(p),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"ann-preview"},s&&i.a.createElement("i",{className:"fa fa-bookmark float-right mr-n4 mt-n4 text-danger",style:{fontSize:"30px"}}),i.a.createElement("h3",null,i.a.createElement("span",{role:"img",className:"emoji","aria-label":"announcement"},"\ud83d\udd17"))),i.a.createElement("div",{className:"ann-info text-left"},i.a.createElement("h6",{className:"mb-3"},o," ",r,", ",m," at ",u,":",d),i.a.createElement("h4",null,n),i.a.createElement("a",{className:"btn link-btn btn-primary mt-2 float-right",href:l,target:"_blank",rel:"noopener noreferrer"},"Visit Link")))},e.displayPoll=function(){var t=e.props.announcement,a=t.dateAndTime,n=t.text,l=t.yesCount,s=t.yesOption,c=t.noCount,r=t.noOption,o=t.isOfficial,m=a.toDate(),u=m.getDate(),d=b[m.getMonth()-1],p=m.getFullYear(),h=m.getHours(),f="00",E=m.getMinutes();f=E<10?"0"+String(E):String(E);var g=100*l/(c+l);Number.isNaN(g)&&(g=0);var v=100*c/(c+l);return Number.isNaN(v)&&(v=0),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"ann-preview"},o&&i.a.createElement("i",{className:"fa fa-bookmark float-right mr-n4 mt-n4 text-danger",style:{fontSize:"30px"}}),i.a.createElement("h3",null,i.a.createElement("span",{role:"img",className:"emoji","aria-label":"announcement"},"\ud83d\uddf3\ufe0f"))),i.a.createElement("div",{className:"ann-info text-left"},i.a.createElement("h6",{className:"mb-3"},d," ",u,", ",p," at ",h,":",f),i.a.createElement("h4",null,n),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("table",{className:"table"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,s),i.a.createElement("td",null,r)),i.a.createElement("tr",null,i.a.createElement("td",null,l),i.a.createElement("td",null,c)))),i.a.createElement("p",null,"PS: You can currently vote via app only!")))))},e.getClass=function(){var t="text-left p-4 mb-4 ";switch(e.props.announcement.type){case"announcement":t+="announcement-card ";break;case"poll":t+="poll-card";break;case"link":t+="link-card"}return t},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"up-container d-flex flex-column container-fluid"},i.a.createElement("div",{className:"up mx-auto"},this.displayUpdate()))}}]),a}(r.Component),N=a(55),j=a(49),k=a(113),x=a(45),w=a.n(x),O=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e.download=function(e){var t=e.substring(e.lastIndexOf("/")+1).split("?")[0].split("%2F")[2];t=decodeURIComponent(t);var a=new XMLHttpRequest;a.responseType="blob",a.onload=function(){var e=document.createElement("a");e.href=window.URL.createObjectURL(a.response),e.download=t,e.style.display="none",document.body.appendChild(e),e.click()},a.open("GET",e),a.send()},e.displayAssignment=function(){var t=e.props.details,a=t.dateAndTime,n=t.title,l=t.url,s=a.toDate(),c=s.getDate(),r=b[s.getMonth()-1],o=s.getFullYear(),m=s.getHours(),u="00",d=s.getMinutes();return u=d<10?"0"+String(d):String(d),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"ann-preview"},i.a.createElement("h3",null,i.a.createElement("span",{role:"img",className:"emoji","aria-label":"assignment"},"\ud83d\udcdd"))),i.a.createElement("div",{className:"ann-info text-left"},i.a.createElement("h6",{style:{width:"fit-content"},className:"mb-3"},r," ",c,", ",o," at ",m,":",u),i.a.createElement("h4",null,n),i.a.createElement("span",{onClick:function(){return e.download(l)},className:"btn link-btn btn-primary mt-2 float-right"},"Download File")))},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"up-container d-flex flex-column container-fluid"},i.a.createElement("div",{className:"up mx-auto"},this.displayAssignment()))}}]),a}(r.Component),S=a(99),C=m.a.firestore(),A=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={stuDoc:{},classCode:" ",name:"",rollNo:"",subjects:[],details:[],lecturesToday:[],announcements:[],assignments:[],loading:!0,tt:"",showProfile:!1},e.type=e.props.type,e.stuDocRef=C.collection("students").doc(e.props.email),e.crDocRef=C.collection("cr").doc(e.props.email),e.fetchClassDetails=function(){C.collection("classes").doc(e.state.classCode).onSnapshot((function(t){t.data()&&e.setState({subjects:t.data().subjects.map((function(e){return Object(p.a)({},e)})),details:t.data().details,loading:!1,tt:t.data().timeTable})})),C.collection("classes").doc(e.state.classCode).collection("lectures").doc("lecturesToday").onSnapshot((function(t){t.data()&&e.setState({lecturesToday:t.data().lectures.map((function(e){return Object(p.a)({},e)}))})})),C.collection("classes").doc(e.state.classCode).collection("updates").doc("announcements").onSnapshot((function(t){t.data()&&(e.setState({announcements:t.data().announcements.map((function(e){return Object(p.a)({},e)})),assignments:t.data().assignments.map((function(e){return Object(p.a)({},e)}))}),e.sortAnnouncements(),e.sortAssignments())}))},e.handleSignOut=function(){m.a.auth().signOut().then((function(){w.a.toast({html:"Signed Out",classes:"toast success-toast"}),window.location.reload()})).catch((function(e){w.a.toast({html:e.message,classes:"toast error-toast"})}))},e.sortAnnouncements=function(){for(var t=e.state.announcements,a=0;a<t.length;a++)for(var n=a+1;n<t.length;n++)if(t[a].dateAndTime<t[n].dateAndTime){var l=t[a];t[a]=t[n],t[n]=l}e.setState({announcements:t})},e.sortAssignments=function(){for(var t=e.state.assignments,a=0;a<t.length;a++)for(var n=a+1;n<t.length;n++)if(t[a].dateAndTime<t[n].dateAndTime){var l=t[a];t[a]=t[n],t[n]=l}e.setState({assignments:t})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;"Student"===this.props.type?this.stuDocRef.get().then((function(t){t.exists?(e.setState({stuDoc:t.data(),classCode:t.data().classCode}),t.data().classCode&&e.fetchClassDetails()):e.setState({loading:!1})})):this.crDocRef.get().then((function(t){t.exists?(e.setState({stuDoc:t.data(),classCode:t.data().classId}),t.data().classId&&e.fetchClassDetails()):e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this,t=d.a;return t=this.state.loading?i.a.createElement(d.a,null):this.state.showProfile?i.a.createElement(S.default,{onHide:function(){return e.setState({showProfile:!1})},doc:this.state.stuDoc,type:this.props.type,tt:this.state.tt}):i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"code-head-btn"},i.a.createElement(j.a,null),i.a.createElement("h1",{className:"mainPageHeading mb-5"},"Welcome!"),i.a.createElement(k.a,{className:"float-md-right mb-2"},i.a.createElement(k.a.Toggle,{className:"acc-dropdown",id:"dropdown-basic"},i.a.createElement("i",{className:"fa fa-user-circle",style:{fontSize:"30px",cursor:"pointer"}})),i.a.createElement(k.a.Menu,null,i.a.createElement(k.a.Item,{onClick:function(){return e.setState({showProfile:!0})}},"Profile"),i.a.createElement(k.a.Divider,null),i.a.createElement(k.a.Item,{onClick:function(){return e.handleSignOut()}},i.a.createElement("i",{style:{fontSize:"25px",cursor:"pointer"},className:"fa fa-sign-out"}))))),i.a.createElement("div",{id:"Class"},i.a.createElement("h2",{className:"subHeading"},"Class Details: ")),i.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"18rem"}}),i.a.createElement(h.a,{details:this.state.details}),i.a.createElement("div",{id:"Lectures"},i.a.createElement("h2",{className:"subHeading"},"Lectures Today:")),i.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"40%"}}),i.a.createElement("div",{className:"lectures-row"},0===this.state.lecturesToday.length?i.a.createElement("h4",{style:{textAlign:"center",width:"100%"}},"No lectures for the day! Lets enjoy"):this.state.lecturesToday.map((function(e){return i.a.createElement(v,{lecture:e,key:e.startTime})}))),i.a.createElement("div",{id:"Assignments"},i.a.createElement("h2",{className:"subHeading"},"Assignments",i.a.createElement("span",{role:"img","aria-label":"assignments"},"\ud83d\udcdd")),i.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"40%"}}),this.state.assignments.length?this.state.assignments.map((function(t){return i.a.createElement(O,{key:t.url,onDelete:e.deleteAssignment,details:t})})):i.a.createElement("h4",{style:{textAlign:"center",width:"100%"}},"No Assignments pending for the class")),i.a.createElement("div",{id:"Announcements"},i.a.createElement("div",{className:"d-inline container-fluid"},i.a.createElement("h2",{className:"subHeading"},"Mitron! Announcement Suno"," ",i.a.createElement("span",{role:"img","aria-label":"announcement"},"\ud83d\udce2")),i.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"40%"}})),i.a.createElement("div",{className:"key-container"},i.a.createElement("div",{className:"poll-card m-2",style:{width:"90px"}},i.a.createElement("span",{className:"p-2"},i.a.createElement("i",{className:"fa fa-bookmark text-danger mr-1"})," Official")),i.a.createElement("div",{className:"poll-card m-2",style:{width:"150px"}},i.a.createElement("span",{className:"p-2"},i.a.createElement("span",{role:"img",className:"mr-1","aria-label":"announcement"},"\ud83d\udce2"," ")," ","Announcements")),i.a.createElement("div",{className:"poll-card m-2",style:{width:"75px"}},i.a.createElement("span",{className:"p-2"},i.a.createElement("span",{role:"img",className:"mr-1","aria-label":"announcement"},"\ud83d\udd17"),"Links")),i.a.createElement("div",{className:"poll-card m-2",style:{width:"75px"}},i.a.createElement("span",{className:"p-2"},i.a.createElement("span",{role:"img",className:"mr-1","aria-label":"announcement"},"\ud83d\uddf3\ufe0f"),"Polls")))),i.a.createElement("div",{className:"m-4 mx-n3 ann-container"},0!==this.state.announcements.length?this.state.announcements.map((function(e){return i.a.createElement(y,{announcement:e,id:e.dateAndTime,key:e.dateAndTime})})):i.a.createElement("h4",{style:{textAlign:"center",width:"100%"}},"Any important announcements, polls or links for the class will be shown here")),i.a.createElement("div",{id:"Subjects"},i.a.createElement("h2",{className:"subHeading"},"Subjects You study:")),i.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"40%"}}),i.a.createElement("div",{className:"my-flex-container"},0===this.state.subjects.length?i.a.createElement("h4",{style:{textAlign:"center",width:"100%"}},"No subjects have been added by the CR yet!"):this.state.subjects.map((function(e){return i.a.createElement(f,{subject:e,key:e.subjectCode})}))),i.a.createElement(N.a,{paths:["Class","Assignments","Lectures","Announcements","Subjects"]})),"kicked"===this.state.classCode?i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"CR has removed you from the class"),i.a.createElement("img",{src:"/stuEjected.gif",alt:"ejected",width:"75%"})):t}}]),a}(r.Component),D=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).db=m.a.firestore(),e.isMount=!1,e.state={email:"",access:!1,loading:!0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.isMount=!0,this.checkAuth()}},{key:"UNSAFE_componentWillMount",value:function(){this.isMount=!1}},{key:"checkAuth",value:function(){var e=this;m.a.auth().onAuthStateChanged((function(t){t&&(e.isMount&&e.setState({email:t.email}),"student"===t.displayName&&e.isMount&&e.setState({access:!0,type:"Student"}),"cr"===t.displayName&&e.isMount&&e.setState({access:!0,type:"CR"}))})),setTimeout((function(){e.isMount&&e.setState({loading:!1})}),1e3)}},{key:"render",value:function(){var e;return e=this.state.email?this.state.access?i.a.createElement(A,{email:this.state.email,type:this.state.type}):i.a.createElement(u.a,null):i.a.createElement(o.a,{to:"/student/login"}),this.state.loading?i.a.createElement(d.a,null):e}}]),a}(r.Component);t.default=D},43:function(e,t,a){"use strict";var n=a(50);a(51),a(53),a(52);n.a.initializeApp({apiKey:"AIzaSyBtqTsT1XUqRQUREtKJ0QSnmHd5YvExHw8",authDomain:"layaak-web.firebaseapp.com",projectId:"layaak-web",storageBucket:"layaak-web.appspot.com",messagingSenderId:"1093914758055",appId:"1:1093914758055:web:b614caead750078d920482"}),t.a=n.a},49:function(e,t,a){"use strict";var n=a(12),l=a(13),s=a(15),c=a(14),r=a(0),i=a.n(r),o=(a(56),function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={mode:document.getElementsByTagName("Body")[0].classList[0]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"float-md-left w-auto mb-2 input-group custom-control custom-switch"},i.a.createElement("label",{id:"switch",className:"switch"},i.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:function(){"dark"===e.state.mode?localStorage.setItem("mode","light"):localStorage.setItem("mode","dark"),document.getElementsByTagName("Body")[0].classList.replace(e.state.mode,localStorage.getItem("mode")),e.setState({mode:localStorage.getItem("mode")})},checked:"dark"===this.state.mode,id:"dark"}),i.a.createElement("span",{className:"slider round"})))}}]),a}(r.Component));t.a=o},55:function(e,t,a){"use strict";var n=a(12),l=a(13),s=a(15),c=a(14),r=a(0),i=a.n(r),o=(a(59),function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("nav",{className:"b-nav"},i.a.createElement("ul",{className:"b-nav-links"},this.props.paths.map((function(e){return i.a.createElement("li",{key:e},i.a.createElement("a",{href:"#"+e,className:"b-nav-link"},e))}))))}}]),a}(r.Component));t.a=o},56:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.tt;return l.a.createElement("div",null,l.a.createElement("img",{style:{margin:"30px 0",width:"700px",borderRadius:"10px",boxShadow:"23px 23px 46px #5a7a8b, -23px -23px 46px #7aa4bd"},src:t,alt:"time table"}))}},72:function(e,t,a){"use strict";var n=a(12),l=a(13),s=a(15),c=a(14),r=a(0),i=a.n(r),o=a(6),m=a(45),u=a.n(m),d=a(43),p=(a(73),function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handleSignOut=function(){d.a.auth().signOut().then((function(){window.location.reload()})).catch((function(e){u.a.toast({html:e.message,classes:"toast error-toast"})}))},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"403"},i.a.createElement("section",{className:"page_403"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-12 "},i.a.createElement("div",{className:"col-sm-offset-1  text-center"},i.a.createElement("h1",{className:"text-center"},"403"),i.a.createElement("div",{className:"four_zero_three_bg"}),i.a.createElement("div",{className:"contant_box_403"},i.a.createElement("h3",{className:"h2"},"Access Denied"),i.a.createElement("h5",null,i.a.createElement("button",{className:"btn btn-primary mx-2",onClick:this.handleSignOut},"Sign In"),"to gain access / go",i.a.createElement(o.b,{className:"btn btn-success mx-2",to:"/"},"Home")))))))))}}]),a}(r.Component));t.a=p},73:function(e,t,a){},74:function(e,t,a){"use strict";var n=a(12),l=a(13),s=a(15),c=a(14),r=a(0),i=a.n(r),o=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e.getDetails=function(){var t=e.props.details,a=t.branch,n=t.college,l=t.course,s=t.sem,c=t.crName;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"ann-preview",style:{display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement("img",{alt:"details",src:"https://cdn1.iconfinder.com/data/icons/education-set-01/512/document-info-512.png"})),i.a.createElement("div",{className:"ann-info text-left"},i.a.createElement("p",null,"Branch: ",i.a.createElement("strong",null,a)),i.a.createElement("p",null,"College: ",i.a.createElement("strong",null,n)),i.a.createElement("p",null,"Course: ",i.a.createElement("strong",null,l)),i.a.createElement("p",null,"Semester: ",i.a.createElement("strong",null,s)),i.a.createElement("p",null,"Class Representative: ",i.a.createElement("strong",null,c))))},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"up-container d-flex flex-column container-fluid"},i.a.createElement("div",{className:"up mx-auto"},this.getDetails()))}}]),a}(r.Component);t.a=o},99:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(61),c=a(49),r=a(12),i=a(13),o=a(15),m=a(14),u=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e.getDetails=function(){var t="";t="Student"===e.props.type?e.props.details.classCode:e.props.details.classId;var a=e.props.details,n=a.name,s=a.email,c=a.rollNo;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"ann-preview",style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("img",{alt:"details",src:"https://cdn1.iconfinder.com/data/icons/education-set-01/512/document-info-512.png"})),l.a.createElement("div",{className:"ann-info text-left"},l.a.createElement("p",null,"Name: ",l.a.createElement("strong",null,n)),l.a.createElement("p",null,"Roll No: ",l.a.createElement("strong",null,c)),l.a.createElement("p",null,"E-Mail: ",l.a.createElement("strong",null,s)),l.a.createElement("p",null,"Class Code: ",l.a.createElement("strong",null,t))))},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"up-container d-flex flex-column container-fluid"},l.a.createElement("div",{className:"up mx-auto"},this.getDetails()))}}]),a}(n.Component);t.default=function(e){var t=e.onHide,a=e.doc,n=e.type,r=e.tt;return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"code-head-btn"},l.a.createElement(c.a,null),l.a.createElement("h1",{className:"mainPageHeading",style:{marginTop:"-3vh"}},"Your Details"),l.a.createElement("i",{onClick:t,className:"fa fa-home",style:{cursor:"pointer",fontSize:"30px",color:"#000"}})),l.a.createElement(u,{details:a,type:n}),l.a.createElement("div",{id:"Details"},l.a.createElement("h2",{className:"subHeading"},"Class Details: ")),l.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"18rem"}}),l.a.createElement("h1",{id:"Timetable"},"Time Table"),l.a.createElement(s.a,{tt:r}))}}}]);
//# sourceMappingURL=10.04c1d1f8.chunk.js.map