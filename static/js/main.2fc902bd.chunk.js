(this["webpackJsonpmy-test"]=this["webpackJsonpmy-test"]||[]).push([[0],{195:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a.n(c),n=a(76),l=a.n(n),r=(a(89),a(84)),s=a(6),d=a(9),m=a(7),j=(a(90),a(16)),o=a(26),b=a(12);var u=a(50),p=a(2),O=b.a().shape({email:b.b().required("email is required"),password:b.b().required("password is required")});function h(){var e=Object(j.d)({resolver:Object(o.a)(O)}),t=e.register,a=e.handleSubmit,c=e.formState.errors,n=Object(s.f)(),l=i.a.useState(!1),r=Object(m.a)(l,2),b=r[0],h=r[1],x=i.a.useState(!0),f=Object(m.a)(x,2),N=f[0],v=f[1];return Object(p.jsx)("div",{className:"Login",children:Object(p.jsxs)("form",{onSubmit:a((function(e){!0===function(e){return""!==e.email&&""!==e.password}(e)?n.push("/dig_test/participants"):v(!1)})),className:"log-form container",children:[Object(p.jsxs)("h1",{children:["Welcome ",Object(p.jsx)("br",{})," Please login"]}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"email",className:"label",children:"Email"}),Object(p.jsx)("input",Object(d.a)(Object(d.a)({},t("email")),{},{className:"inputForm",placeholder:""})),c.email?Object(p.jsx)("p",{className:"error",children:"please enter a valid email"}):Object(p.jsx)("p",{className:"error"})]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"password",className:"label",children:"Password"}),Object(p.jsx)("input",Object(d.a)(Object(d.a)({},t("password",{required:!0})),{},{className:"inputForm",type:b?"text":"password",placeholder:""})),Object(p.jsx)("span",{id:"eyeIcon",className:"fa fa-eye",onClick:function(){return h(!b)},children:b?Object(p.jsx)(u.a,{}):Object(p.jsx)(u.b,{})}),Object(p.jsx)("span",{className:"forgot",onClick:function(){return alert("email sent")},children:"Forgot Username?"}),c.password?Object(p.jsx)("p",{className:"error",children:"This field is required"}):Object(p.jsx)("p",{className:"error"})]})}),Object(p.jsx)("button",{type:"submit",className:"btn",children:"Login"}),N?Object(p.jsx)("p",{className:"error"}):Object(p.jsx)("p",{className:"error",children:"Bad credentials"})]})})}var x=a(3),f=(a(75),[{name:"Cristobal Perez",email:"cristobal.perez@example.com",cell:"638-617-675",id:1},{name:"Malthe Andersen",email:"malthe.andersen@example.com",cell:"25596760",id:2},{name:"Marie Thomsen",email:"marie.thomsen@example.com",cell:"23750487",id:3},{name:"Ann Parker",email:"ann.parker@example.com",cell:"(244)-392-2231",id:4},{name:"Simon Petersen",email:"simon.petersen@example.com",cell:"09733474",id:5},{name:"Emil S\xf8rensen",email:"emil.sorensen@example.com",cell:"89794274",id:6},{name:"Aitor Vargas",email:"aitor.vargas@example.com",cell:"654-676-051",id:7},{name:"Sofia Huhtala",email:"sofia.huhtala@example.com",cell:"044-985-58-71",id:8},{name:"AlidaEl1",email:"alidael1",cell:"46263311",id:9},{name:"Julianne Gj\xf8nnes",email:"julianne.gjonnes@example.com",cell:"97250041",id:10},{name:"Murielle Lecomte",email:"murielle.lecomte@example.com",cell:"077 997 58 69",id:11},{name:"Felix Carr",email:"felix.carr@example.com",cell:"0739-163-355",id:12},{name:"Leo Hautala",email:"leo.hautala@example.com",cell:"042-881-70-75",id:13},{name:"Donna Harvey",email:"donna.harvey@example.com",cell:"0701-171-619",id:14},{name:"Lewis Johnson",email:"lewis.johnson@example.com",cell:"(085)-864-2358",id:15},{name:"Michael Turner",email:"michael.turner@example.com",cell:"(468)-342-3774",id:16},{name:"LOL test",email:"shyl.mrdy@example.com",cell:"0969-470-1212",id:17},{name:"Yildiz der Zwaard",email:"yildiz.vanderzwaard@example.com",cell:"(495)-732-9803",id:18},{name:"Bartjan der Put",email:"bartjan.vanderput@example.com",cell:"(785)-673-0619",id:19},{name:"\xc7etin A\u015f\u0131ko\u011flu",email:"cetin.asikoglu@example.com",cell:"(929)-303-0569",id:20}]);function N(e){var t=b.a().shape({name:b.b().required("email is required"),email:b.b().required("password is required"),cell:b.b().required("pbone is required")}),a=Object(j.d)({defaultValues:e.Participant,resolver:Object(o.a)(t)}),c=a.register,i=a.handleSubmit;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("td",{children:Object(p.jsx)("input",Object(d.a)(Object(d.a)({},c("name")),{},{className:"myInput cellName",placeholder:"Full Name"}))}),Object(p.jsx)("td",{children:Object(p.jsx)("input",Object(d.a)(Object(d.a)({},c("email")),{},{className:"myInput cellEmail",placeholder:"Email Address"}))}),Object(p.jsx)("td",{children:Object(p.jsx)("input",Object(d.a)(Object(d.a)({},c("cell")),{},{className:"myInput cellPhone",placeholder:"Phone Number"}))}),Object(p.jsx)("td",{children:Object(p.jsxs)("form",{onSubmit:i((function(t){var a=Object(x.a)(e.Participants).map((function(e){return e.id===t.id&&(e.name=t.name,e.email=t.email,e.cell=t.cell),e}));e.setParticipants(a),e.setParticipantEditing(null)})),id:"editParticipant",children:[Object(p.jsx)("button",{onClick:function(){return e.setParticipantEditing(null)},className:"cancelButton",children:"CANCEL"}),Object(p.jsx)("button",{type:"submit",className:"saveButton",children:"SAVE"})]})}),Object(p.jsx)("td",{})]})}var v=a(81),P=a.n(v);function g(e){var t=b.a().shape({name:b.b().required("email is required"),email:b.b().required("password is required"),cell:b.b().required("pbone is required")}),a=Object(j.d)({resolver:Object(o.a)(t)}),c=a.register,i=a.handleSubmit,n=a.reset;return Object(p.jsxs)("tr",{id:"Adding",children:[Object(p.jsx)("td",{children:Object(p.jsx)("input",Object(d.a)(Object(d.a)({},c("name")),{},{className:"myInput cellName",placeholder:"Full Name"}))}),Object(p.jsx)("td",{children:Object(p.jsx)("input",Object(d.a)(Object(d.a)({},c("email")),{},{className:"myInput cellEmail",placeholder:"Email Address"}))}),Object(p.jsx)("td",{children:Object(p.jsx)("input",Object(d.a)(Object(d.a)({},c("cell")),{},{className:"myInput cellPhone",placeholder:"Phone Number"}))}),Object(p.jsx)("td",{children:Object(p.jsx)("form",{onSubmit:i((function(t){if(t.name&&t.cell&&t.email){var a=parseInt(P()()),c={id:a,name:t.name,email:t.email,cell:t.cell};e.setParticipants(Object(x.a)(e.Participants).concat(c)),e.setParticipant({name:"",email:"",cell:"",id:a}),alert("added New participant"),n({})}else console.error("error Add new participant")})),children:Object(p.jsx)("button",{type:"submit",className:"addButton",children:"Add new"})})})]})}var y=a.p+"static/media/logo.6ce24c58.svg";function S(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("nav",{className:"navbar navbar-default",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("img",{src:y,className:"App-logo",alt:"logo",id:"logo"}),"          ",Object(p.jsx)("span",{className:"navbar-brand",children:"Super Software"})]})}),e.children]})}var w=a(83),q=a(82);function E(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("td",{className:"cellName",children:e.Participant.name}),Object(p.jsx)("td",{className:"cellEmail",children:e.Participant.email}),Object(p.jsx)("td",{className:"cellPhone",children:e.Participant.cell}),Object(p.jsx)("td",{className:"cellAction",children:Object(p.jsxs)("span",{className:"icon-only",children:[Object(p.jsx)(q.a,{className:"myButton",onClick:function(){return e.setParticipantEditing(e.Participant.id)}}),Object(p.jsx)(w.a,{className:"myButton",onClick:function(){return e.deleteParticipant(e.Participant.id)}})]})})]})}function F(){var e=i.a.useState(f),t=Object(m.a)(e,2),a=t[0],c=t[1],n=i.a.useState(),l=Object(m.a)(n,2),r=l[0],s=l[1],d=i.a.useState(null),j=Object(m.a)(d,2),o=j[0],b=j[1],u=i.a.useState(),O=Object(m.a)(u,2),h=O[0],v=O[1];function P(e){var t=Object(x.a)(a).filter((function(t){return t.id!==e}));c(t),console.log("delete Participant",r),alert("Participant deleted")}var y=function(){return Object(p.jsx)("tr",{children:["name","email","cell",""].map((function(e){return Object(p.jsxs)("th",{onClick:function(){return function(e){v(e);var t=Object(x.a)(a);t.sort(function(e){return function(t,a){if(t&&a){if(t[e]<a[e])return-1;if(t[e]>a[e])return 1}return 0}}(e)),c(t)}(e)},children:[e,h===e&&""!==e&&Object(p.jsx)(p.Fragment,{children:"\u2193"})]},e)}))})};return Object(p.jsx)(S,{children:Object(p.jsx)("div",{className:"page",children:Object(p.jsx)("div",{id:"Participant-list",children:Object(p.jsxs)("div",{className:"content tableContainer",children:[Object(p.jsx)("h1",{children:"List of participants"}),Object(p.jsx)(g,{Participants:a,setParticipants:function(e){return c(e)},setParticipant:function(e){return s(e)}}),Object(p.jsx)("div",{id:"participantTable",children:Object(p.jsx)("div",{children:Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsx)(y,{})}),Object(p.jsx)("tbody",{children:a.map((function(e){return Object(p.jsx)("tr",{children:e.id===o?Object(p.jsx)(N,{Participants:a,Participant:e,setParticipants:function(e){return c(e)},setParticipantEditing:function(e){return b(e)}}):Object(p.jsx)(E,{Participant:e,setParticipantEditing:function(e){return b(e)},deleteParticipant:function(e){return P(e)}})},e.id)}))})]})})})]})})})})}function A(){return Object(p.jsx)("h1",{children:"Page Not Found"})}var C=function(){return Object(p.jsx)(r.a,{children:Object(p.jsxs)(s.c,{children:[Object(p.jsx)(s.a,{exact:!0,path:"/dig_test/",component:h}),Object(p.jsx)(s.a,{path:"/dig_test/participants",component:F}),Object(p.jsx)(s.a,{path:"*",children:Object(p.jsx)(A,{})})]})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,196)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),i(e),n(e),l(e)}))};l.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),k()},75:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){}},[[195,1,2]]]);
//# sourceMappingURL=main.2fc902bd.chunk.js.map