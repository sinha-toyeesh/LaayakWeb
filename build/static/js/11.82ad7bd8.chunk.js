(this["webpackJsonplink-aya-kya"]=this["webpackJsonplink-aya-kya"]||[]).push([[11],{43:function(e,t,a){"use strict";var n=a(50);a(51),a(53),a(52);n.a.initializeApp({apiKey:"AIzaSyBtqTsT1XUqRQUREtKJ0QSnmHd5YvExHw8",authDomain:"layaak-web.firebaseapp.com",projectId:"layaak-web",storageBucket:"layaak-web.appspot.com",messagingSenderId:"1093914758055",appId:"1:1093914758055:web:b614caead750078d920482"}),t.a=n.a},49:function(e,t,a){"use strict";var n=a(12),r=a(13),l=a(15),s=a(14),c=a(0),o=a.n(c),i=(a(56),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={mode:document.getElementsByTagName("Body")[0].classList[0]},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"float-md-left w-auto mb-2 input-group custom-control custom-switch"},o.a.createElement("label",{id:"switch",className:"switch"},o.a.createElement("input",{type:"checkbox",className:"custom-control-input",onChange:function(){"dark"===e.state.mode?localStorage.setItem("mode","light"):localStorage.setItem("mode","dark"),document.getElementsByTagName("Body")[0].classList.replace(e.state.mode,localStorage.getItem("mode")),e.setState({mode:localStorage.getItem("mode")})},checked:"dark"===this.state.mode,id:"dark"}),o.a.createElement("span",{className:"slider round"})))}}]),a}(c.Component));t.a=i},55:function(e,t,a){"use strict";var n=a(12),r=a(13),l=a(15),s=a(14),c=a(0),o=a.n(c),i=(a(59),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("nav",{className:"b-nav"},o.a.createElement("ul",{className:"b-nav-links"},this.props.paths.map((function(e){return o.a.createElement("li",{key:e},o.a.createElement("a",{href:"#"+e,className:"b-nav-link"},e))}))))}}]),a}(c.Component));t.a=i},56:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.tt;return r.a.createElement("div",null,r.a.createElement("img",{style:{margin:"30px 0",width:"700px",borderRadius:"10px",boxShadow:"23px 23px 46px #5a7a8b, -23px -23px 46px #7aa4bd"},src:t,alt:"time table"}))}},64:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(65);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},65:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},66:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(64);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(o){r=!0,l=o}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},86:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(65);var r=a(64);function l(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},97:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(13),l=a(15),s=a(14),c=a(0),o=a.n(c),i=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={},e.getDetails=function(){var t=e.props.details,a=t.branch,n=t.college,r=t.course,l=t.sem;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"ann-preview",style:{display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement("h3",null,o.a.createElement("img",{alt:"details",src:"https://cdn1.iconfinder.com/data/icons/education-set-01/512/document-info-512.png"}))),o.a.createElement("div",{className:"ann-info text-left"},o.a.createElement("p",null,"Branch: ",o.a.createElement("strong",null,a)),o.a.createElement("p",null,"College: ",o.a.createElement("strong",null,n)),o.a.createElement("p",null,"Course: ",o.a.createElement("strong",null,r)),o.a.createElement("p",null,"Semester: ",o.a.createElement("strong",null,l))))},e}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"up-container d-flex flex-column container-fluid"},o.a.createElement("div",{className:"up mx-auto"},this.getDetails()))}}]),a}(c.Component),u=a(43),m=a(55),d=a(49),p=a(86),f=a(66),h=a(45),b=a.n(h),E=a(47),v=u.a.firestore();var g=function(e){var t=e.student,a=(e.style,e.stuList),n=e.code,r=Object(c.useState)(!1),l=Object(f.a)(r,2),s=l[0],i=l[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{style:{height:"100vh"},show:s,dialogClassName:"modal-dialog-scrollable modal-lg"},o.a.createElement(E.a.Body,{style:{padding:0}},o.a.createElement("img",{src:"/crEjected.gif",alt:"ejecting",width:"100%"}))),o.a.createElement("tr",null,o.a.createElement("td",null,t.rollNo),o.a.createElement("td",null,t.name),o.a.createElement("td",null,t.email),o.a.createElement("td",null,o.a.createElement("img",{onClick:function(){var e=a.filter((function(e){return e.rollNo!==t.rollNo})),r=v.collection("students").doc(t.email);i(!0),setTimeout((function(){v.collection("classes").doc(n).collection("details").doc("stuList").update({studentsList:e}).then((function(){b.a.toast({html:"Kicked Successfully",classes:"toast success-toast"})})).catch((function(e){return b.a.toast({html:e.message,classes:"toast error-toast"})})),r.update({classCode:"kicked"}),i(!1)}),5e3)},width:"20px",style:{cursor:"pointer"},src:"https://cdn4.iconfinder.com/data/icons/web-basics-vol-05/512/user_human_person_avatar_minus_close_delete-512.png",alt:"kick"}))))},y=a(2),N=a(7),j=a(46),w=a.n(j),k=a(48),O=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.striped,l=e.bordered,s=e.borderless,c=e.hover,i=e.size,u=e.variant,m=e.responsive,d=Object(N.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=Object(k.a)(a,"table"),f=w()(n,p,u&&p+"-"+u,i&&p+"-"+i,r&&p+"-striped",l&&p+"-bordered",s&&p+"-borderless",c&&p+"-hover"),h=o.a.createElement("table",Object(y.a)({},d,{className:f,ref:t}));if(m){var b=p+"-responsive";return"string"===typeof m&&(b=b+"-"+m),o.a.createElement("div",{className:b},h)}return h}));var S=function(e){var t=e.student;return o.a.createElement("tr",null,o.a.createElement("td",null,t.rollNo),o.a.createElement("td",null,t.name),o.a.createElement("td",null,t.email),o.a.createElement("td",null,o.a.createElement("i",{className:"fa fa-ban"})))},x=u.a.firestore();var C=function(e){var t=e.code,a=e.crEmail,n={border:"1px solid black",padding:3},r=Object(c.useState)([]),l=Object(f.a)(r,2),s=l[0],i=l[1];return Object(c.useEffect)((function(){x.collection("classes").doc(t).collection("details").doc("stuList").onSnapshot((function(e){e.data()&&i(Object(p.a)(e.data().studentsList))}))})),o.a.createElement("div",null,0===s.length?o.a.createElement("h4",null,"No students have joined the class yet!"):o.a.createElement("div",null,o.a.createElement(O,{striped:!0,bordered:!0,responsive:!0,className:"mx-auto",style:{maxWidth:"600px"}},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Roll No."),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Email"),o.a.createElement("th",null,"Kick"))),o.a.createElement("tbody",null,s.map((function(e){return e.email===a?o.a.createElement(S,{key:"cr",student:e}):o.a.createElement(g,{student:e,style:n,key:e.rollNo,stuList:s,code:t})}))))))},I=u.a.firestore(),A=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={show:!1,tt:{},progress:0},e.showModal=function(){e.setState({show:!0})},e.hideModal=function(){e.setState({show:!1})},e.showHideClassName=function(){return e.state.show?"":"d-none"},e.browseFile=function(t){var a=t.target.files[0];a&&"image"===a.type.split("/")[0]?e.setState({tt:a}):b.a.toast({html:"Please select a valid image",classes:"toast error-toast"})},e.uploadtt=function(t){t.preventDefault();var a=e.state.tt;if(a.name){document.getElementById("progress").classList.remove("hide");var n=u.a.storage().ref("timetables/".concat(e.props.classCode,"/timetable"));n.put(a).on("state_changed",(function(t){var a=t.bytesTransferred/t.totalBytes*100;console.log(a),function(t){t&&e.setState({progress:t})}(a)}),(function(e){}),(function(){b.a.toast({html:"Uploaded Successfully",classes:"toast success-toast"}),n.getDownloadURL().then((function(t){!function(t){(alert("called"),t)?(I.collection("classes").doc(e.props.classCode).update({timeTable:t}),document.getElementById("progress").classList.add("hide"),e.hideModal()):b.a.toast({html:"Please upload an image first",classes:"toast error-toast"})}(t)})).catch((function(e){return console.log(e)}))}))}},e.getForm=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("div",{className:"custom-file"},o.a.createElement("input",{type:"file",className:"custom-file-input",id:"inputGroupFile02",onChange:e.browseFile,accept:"image/*",required:!0}),o.a.createElement("label",{className:"custom-file-label",htmlFor:"inputGroupFile02","aria-describedby":"inputGroupFileAddon02"},e.state.tt.name?e.state.tt.name:"Choose File")),o.a.createElement("div",{className:"input-group"},o.a.createElement("button",{className:"btn btn-sm btn-success",type:"submit",style:{margin:"5px auto",width:"20%"}},"Upload")),o.a.createElement("div",{className:"input-group"},o.a.createElement("progress",{id:"progress",className:"custom-progress-bar hide",value:e.state.progress,max:"100"}," "))))},e}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{className:"btn-lg btn-info m-1",onClick:this.showModal},"Edit Timetable"),o.a.createElement(E.a,{show:this.state.show,onHide:this.hideModal,dialogClassName:"modal-dialog-scrollable modal-lg"},o.a.createElement(E.a.Header,{closeButton:!0},o.a.createElement(E.a.Title,null,o.a.createElement("h3",{className:"mt-2"},"Upload time table here:"))),o.a.createElement(E.a.Body,null,o.a.createElement("form",{onSubmit:this.uploadtt},this.getForm()))))}}]),a}(c.Component),T=a(61),B=u.a.firestore(),F=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).isMount=!1,e.state={details:e.props.details,classId:e.props.classId},e.collRef=B.collection("classes"),e.docRef=e.collRef.doc(e.state.classId),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"UNSAFE_componentWillMount",value:function(){this.isMount=!1}},{key:"render",value:function(){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"code-head-btn"},o.a.createElement(d.a,null),o.a.createElement("h1",{className:"mainPageHeading",style:{marginTop:"-3vh"}},"Class Details"),o.a.createElement("i",{onClick:this.props.onHide,className:"fa fa-home",style:{cursor:"pointer",fontSize:"30px",color:"#000"}})),o.a.createElement("h2",{id:"Details",className:"subHeading"},"Info:"," "),o.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"18rem"}}),o.a.createElement(i,{details:this.state.details,onEdit:this.handleDetailsEdit}),o.a.createElement("h2",{id:"Timetable",className:"subHeading"},"Time Table",o.a.createElement(A,{classCode:this.state.classId}),o.a.createElement(T.a,{tt:this.props.tt})),o.a.createElement("h2",{id:"Students",className:"subHeading"},"Students:"," "),o.a.createElement("hr",{className:"mb-4",style:{margin:"0 auto",width:"18rem"}}),o.a.createElement(C,{crEmail:this.props.email,code:this.state.classId}),o.a.createElement(m.a,{paths:["Details","Students"]}))}}]),a}(c.Component);t.default=F}}]);
//# sourceMappingURL=11.82ad7bd8.chunk.js.map