(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(t,e,c){},26:function(t,e,c){},30:function(t,e,c){"use strict";c.r(e);var s=c(0),a=c.n(s),n=c(19),r=c.n(n),i=(c(26),c(16),c(31)),o=(c(17),[{id:1,maths:90,physics:80,chemistry:100,biology:90,english:90,totalPercentage:95},{id:2,maths:70,physics:60,chemistry:80,biology:50,english:90,totalPercentage:70},{id:3,maths:50,physics:40,chemistry:60,biology:20,english:80,totalPercentage:50},{id:4,maths:30,physics:20,chemistry:10,biology:20,english:5,totalPercentage:30},{id:5,maths:30,physics:20,chemistry:10,biology:20,english:5,totalPercentage:70}]),l=c(1);var j=c(32),h=c(6),b=c(9),u=function(t){var e,c=t.studentData.totalPercentage;return e=c>90&&c<=100?"success":c>=70&&c<=90?"info":c<70&&c>=31?"warning":"danger",Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Subjects Percentage"}),Object(l.jsxs)("form",{children:[Object(l.jsx)(b.a.Control,{type:"text",placeholder:"Maths%",value:"Maths (".concat(t.studentData.maths?t.studentData.maths:"Click on Get data from server for Results",")")}),Object(l.jsx)("br",{}),Object(l.jsx)(b.a.Control,{type:"text",placeholder:"Physics%",value:"Physics (".concat(t.studentData.physics?t.studentData.physics:"NOT AVAILABLE"," )")}),Object(l.jsx)("br",{}),Object(l.jsx)(b.a.Control,{type:"text",placeholder:"Chemistry%",value:"Chemistry(".concat(t.studentData.chemistry?t.studentData.chemistry:"NOT AVAILABLE",")")}),Object(l.jsx)("br",{}),Object(l.jsx)(b.a.Control,{type:"text",placeholder:"Biology%",value:"Biology(".concat(t.studentData.biology?t.studentData.biology:"NOT AVAILABLE",")")}),Object(l.jsx)("br",{}),Object(l.jsx)(b.a.Control,{type:"text",placeholder:"English%",value:"English (".concat(t.studentData.english?t.studentData.english:"NOT AVAILABLE",")")})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(i.a,{variant:e,now:c,label:"".concat(c||"NOT AVAILABLE","%")})]})};function d(){var t=Object(s.useState)({}),e=Object(h.a)(t,2),c=e[0],a=e[1],n=Object(s.useState)(""),r=Object(h.a)(n,2),i=r[0],j=r[1];return Object(l.jsxs)("div",{className:"container m-5",children:[Object(l.jsx)("h1",{children:"Calculate the percentage level of a pgit initerson's marks"}),Object(l.jsx)("br",{}),Object(l.jsx)("select",{className:"custom-select",onChange:function(t){t.preventDefault(),j(t.target.value)},children:o.map((function(t){return Object(l.jsx)("option",{value:t.id,children:"Student Id (".concat(t.id,")")})}))}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),o.map((function(t){t.id===Number(i)&&a(t)}))},children:"get data from server"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(u,{studentData:c})]})}var O=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(j.a,{children:Object(l.jsx)(d,{})})})},g=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(e){var c=e.getCLS,s=e.getFID,a=e.getFCP,n=e.getLCP,r=e.getTTFB;c(t),s(t),a(t),n(t),r(t)}))},x=c(21);r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x.a,{children:Object(l.jsx)(O,{})})}),document.getElementById("root")),g()}},[[30,1,2]]]);
//# sourceMappingURL=main.999bcaa6.chunk.js.map