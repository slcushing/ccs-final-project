(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{87:function(e,t,n){},89:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),s=n.n(r),o=(n(86),n(87),n(21)),i=n(8),l=n.n(i),j=n(2),u=n(18),d=n(11),b=n(16),h=(n(89),n(5)),O=n(1),p=["isAuth"];var x=function(e){var t=e.isAuth,n=Object(h.a)(e,p);return t?Object(O.jsx)(b.b,Object(j.a)({},n)):Object(O.jsx)(b.a,{to:"/login"})},f=n(13),m=n(19),v=n.n(m);var g=Object(b.h)((function(e){var t=Object(a.useState)({username:"",email:"",password1:"",password2:""}),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(null),o=Object(d.a)(s,2),i=(o[0],o[1]);function b(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(f.a)({},n,a))}))}function h(e){console.warn(e)}function p(){return(p=Object(u.a)(l.a.mark((function t(n){var a,r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),console.log("user",c),c.password1===c.password2){t.next=6;break}i("Passwords do not match!"),t.next=20;break;case 6:return a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(c)},t.next=9,fetch("/rest-auth/registration/",a).catch(h);case 9:if((r=t.sent).ok){t.next=14;break}console.log(r),t.next=20;break;case 14:return t.next=16,r.json();case 16:s=t.sent,v.a.set("Authorization","Token ".concat(s.key)),e.setUser((function(e){return Object(j.a)(Object(j.a)({},e),{},{isAuth:!0})})),e.history.push("/");case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(O.jsxs)("form",{className:"mt-3 col-4 offset-lg-4 register-form",onSubmit:function(e){return p.apply(this,arguments)},children:[Object(O.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(O.jsx)("label",{htmlFor:"username",children:"Username"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter Username",required:!0,name:"username",value:c.username,onChange:b})]}),Object(O.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email"}),Object(O.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter Email",required:!0,name:"email",value:c.email,onChange:b})]}),Object(O.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(O.jsx)("label",{htmlFor:"password1",children:"Password 1"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"password1",placeholder:"Enter Password",required:!0,name:"password1",value:c.password1,onChange:b})]}),Object(O.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(O.jsx)("label",{htmlFor:"password2",children:"Password 2"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"password2",placeholder:"Confirm Password",required:!0,name:"password2",value:c.password2,onChange:b})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",id:"register-button",children:"Register"})]})}));var k=Object(b.h)((function(e){var t=Object(a.useState)({username:"",password:""}),n=Object(d.a)(t,2),c=n[0],r=n[1];function s(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(f.a)({},n,a))}))}function o(e){console.warn(e)}function i(){return(i=Object(u.a)(l.a.mark((function t(n){var a,r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(c)},t.next=4,fetch("/rest-auth/login/",a).catch(o);case 4:if((r=t.sent).ok){t.next=9;break}console.log(r),t.next=15;break;case 9:return t.next=11,r.json();case 11:s=t.sent,v.a.set("Authorization","Token ".concat(s.key)),e.setUser((function(e){return Object(j.a)(Object(j.a)({},e),{},{isAuth:!0})})),e.history.push("/dashboard/");case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return e.isAuth?Object(O.jsx)(b.a,{to:"/"}):Object(O.jsxs)("form",{className:"mt-3 col-4 offset-lg-4 login-form",onSubmit:function(e){return i.apply(this,arguments)},children:[Object(O.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(O.jsx)("label",{htmlFor:"username",children:"Username"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter Username",onChange:s,required:!0,name:"username",value:c.username})]}),Object(O.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter Password",onChange:s,required:!0,name:"password",value:c.password})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",id:"login-button",children:"Login"})]})}));var y=function(e){var t;return Object(O.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",id:"header-nav",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("img",{className:"navbar-brand",src:"images/kpf_logo.jpeg",alt:"logo"}),Object(O.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(O.jsx)("span",{className:"navbar-toggler-icon"})}),Object(O.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-responsive",children:Object(O.jsxs)("ul",(t={className:"navbar-nav ml-auto"},Object(f.a)(t,"className","container d-flex justify-content-end"),Object(f.a)(t,"id","main-nav"),Object(f.a)(t,"children",[e.isAuth&&Object(O.jsx)("li",{className:"nav-item",id:"dashboard-btn",children:Object(O.jsx)(o.b,{to:"/dashboard",children:"Dashboard"})}),e.isAuth&&Object(O.jsx)("button",{type:"submit",className:"logout",onClick:function(){return e.handleLogout()},children:"Logout"})]),t))})]})})};var w=Object(b.h)((function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"landing-body",children:[Object(O.jsx)("section",{children:"#alwaysimproving"}),Object(O.jsxs)("aside",{children:[Object(O.jsx)("h4",{children:"New to the Factory?"}),Object(O.jsx)("div",{className:"landing-atag",children:Object(O.jsx)(o.b,{to:"/registration",children:"Register Here"})}),Object(O.jsx)("h4",{children:"Back for more? Welcome back."}),Object(O.jsx)("div",{className:"landing-atag",children:Object(O.jsx)(o.b,{to:"/login",children:"Login Here"})})]})]})})})),C=n(24),S=n(45),N=n(60),T=n(61),E=n(58),A=n(59),D=n(37),F=(n(72),n(103)),L=n(104),P=n(105),R={title:"",start:null,end:null,allDay:!1,gymEvent:!1,details:""},U={"en-US":D.a},_=Object(S.b)({format:N.a,parse:T.a,startOfWeek:E.a,getDay:A.a,locales:U});var X=Object(b.h)((function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(d.a)(r,2),o=s[0],i=s[1],h=Object(a.useState)(R),p=Object(d.a)(h,2),x=p[0],m=p[1],g=(Object(b.g)(),function(e){if("checkbox"!==e.target.type){var t=e.target,n=t.name,a=t.value;m((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(f.a)({},n,a))}))}else m((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(f.a)({},e.target.name,e.target.checked))}))});function k(e){console.warn(e)}function y(){return(y=Object(u.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(x)},e.next=3,fetch("/api_v1/events/",n).catch(k);case 3:if((a=e.sent).ok){e.next=8;break}console.log(a),e.next=16;break;case 8:return e.next=10,a.json();case 10:(r=e.sent).start=new Date(r.start),r.end=new Date(r.end),c(!1),m(R),i([].concat(Object(C.a)(o),[r]));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(u.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"PUT",headers:{"X-CSRFToken":v.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(x)},e.next=3,fetch("/api_v1/events/".concat(x.id,"/"),t).catch(k);case 3:(n=e.sent).ok?(c(!1),a=Object(C.a)(o),r=a.findIndex((function(e){return e.id===x.id})),a[r]=x,i(a),m(R)):console.log(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/events/".concat(x.id,"/"),{method:"DELETE",headers:{"X-CSRFToken":v.a.get("csrftoken")}});case 2:(t=e.sent).ok?(n=Object(C.a)(o),a=n.findIndex((function(e){return e.id===x.id})),n.splice(a,1),i(n),c(!1)):console.log(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){function e(){return e=Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/events/");case 2:if((t=e.sent).ok){e.next=7;break}console.log(t),e.next=13;break;case 7:return e.next=9,t.json();case 9:n=e.sent,a=n.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{start:new Date(e.start),end:new Date(e.end)})})),i(a),console.log(a);case 13:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var T=function(){c(!1),m(R)};return o?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"daily-cal",children:Object(O.jsx)(S.a,{selectable:!0,localizer:_,events:o,startAccessor:"start",endAccessor:"end",min:new Date(0,0,0,5,0,0),max:new Date(0,0,0,22,0,0),defaultView:"week",views:["week","day"],onSelectSlot:function(e){c(!0),m((function(t){return Object(j.a)(Object(j.a)({},t),{},{start:e.start,end:e.end})}))},onSelectEvent:function(e){m(Object(j.a)(Object(j.a)({},e),{},{title:e.title,start:e.start,end:e.end,details:e.details})),c(!0)},style:{height:500}})}),Object(O.jsxs)(F.a,{show:n,onHide:T,children:[Object(O.jsx)(F.a.Header,{closeButton:!0,children:Object(O.jsx)(F.a.Title,{children:"Add Event"})}),Object(O.jsx)(F.a.Body,{children:Object(O.jsxs)(L.a.Group,{children:[Object(O.jsx)(L.a.Label,{children:"Title: "}),Object(O.jsx)(L.a.Control,{type:"text",onChange:g,name:"title",value:x.title,placeholder:"Event Title"}),Object(O.jsx)(L.a.Label,{children:"Start: "}),Object(O.jsx)(L.a.Control,{plaintext:!0,readOnly:!0,name:"start",value:x.start}),Object(O.jsx)(L.a.Label,{children:"End: "}),Object(O.jsx)(L.a.Control,{plaintext:!0,readOnly:!0,name:"end",value:x.end}),Object(O.jsx)(L.a.Label,{children:"Details: "}),Object(O.jsx)(L.a.Control,{type:"text",onChange:g,name:"details",value:x.details,placeholder:"Event details..."}),Object(O.jsx)(L.a.Check,{type:"checkbox",label:"All Day",name:"allDay",checked:x.allDay,onChange:g}),Object(O.jsx)(L.a.Check,{type:"checkbox",label:"Community Event",name:"gymEvent",checked:x.gymEvent,onChange:g})]})}),Object(O.jsxs)(F.a.Footer,{children:[x.id?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(P.a,{type:"button",variant:"warning",onClick:function(){return w.apply(this,arguments)},children:"Update"}),Object(O.jsx)(P.a,{type:"button",variant:"dark",onClick:function(){return N.apply(this,arguments)},children:"Delete"})]}):Object(O.jsx)(P.a,{type:"button",variant:"success",onClick:function(e){return y.apply(this,arguments)},children:"Save"}),Object(O.jsx)(P.a,{type:"button",variant:"danger",onClick:T,children:"Close"})]})]})]}):Object(O.jsx)("div",{children:"loading"})}));function J(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(e.task.text),o=Object(d.a)(s,2),i=o[0],l=o[1],u=e.task,b=u.id,h=u.text,p=u.complete;return Object(O.jsxs)("div",{className:"task-item",children:[Object(O.jsx)("input",{type:"checkbox",checked:p,name:"complete",onChange:e.toggleCompletion,value:b}),c?Object(O.jsx)("input",{type:"text",name:"editText",value:i,onChange:function(e){l(e.target.value)}}):Object(O.jsx)("label",{children:h}),c?Object(O.jsx)("button",{type:"button",className:"edit-task-btn",onClick:function(t){var n=Object(j.a)(Object(j.a)({},e.task),{},{text:i});e.handleUpdate(n),r(!1)},children:"save"}):Object(O.jsx)("button",{type:"button",className:"edit-task-btn",onClick:function(){return r(!0)},children:"edit"}),Object(O.jsx)("button",{type:"button",className:"delete-task-btn",onClick:e.handleDelete,value:b,children:"x"})]})}var B=Object(b.h)((function(e){var t=Object(a.useState)([]),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),o=Object(d.a)(s,2),i=o[0],j=o[1],b=Object(a.useState)(""),h=Object(d.a)(b,2),p=h[0],x=h[1];Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/tasks/");case 2:if((t=e.sent).ok){e.next=7;break}console.log(t),e.next=11;break;case 7:return e.next=9,t.json();case 9:n=e.sent,r(n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var f=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"PUT",headers:{"X-CSRFToken":v.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=3,fetch("/api_v1/tasks/".concat(t.id,"/"),n);case 3:(a=e.sent).ok?(s=Object(C.a)(c),o=s.findIndex((function(e){return e.id===t.id})),s[o]=t,r(s)):console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"DELETE",headers:{"X-CSRFToken":v.a.get("csrftoken")}},e.next=3,fetch("/api_v1/tasks/".concat(t.target.value,"/"),n);case 3:(a=e.sent).ok||console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,s,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(C.a)(c),a=t.target.value,s=n.findIndex((function(e){return e.id==t.target.value})),n[s].complete=!n[s].complete,r(n),o={method:"PATCH",headers:{"X-CSRFToken":v.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify({complete:n[s].complete})},e.next=8,fetch("/api_v1/tasks/".concat(a,"/"),o);case 8:(i=e.sent).ok||console.log(i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function k(e){console.warn(e)}function y(){return(y=Object(u.a)(l.a.mark((function e(t){var n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify({text:p})},e.next=3,fetch("/api_v1/tasks/",n).catch(k);case 3:if((a=e.sent).ok){e.next=8;break}console.log(a),e.next=14;break;case 8:return e.next=10,a.json();case 10:s=e.sent,j(!1),x(""),r([].concat(Object(C.a)(c),[s]));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(){return j(!1)};if(!c)return Object(O.jsx)("div",{children:"spinner thingy"});var S=c.map((function(e){return Object(O.jsx)(J,{task:e,toggleCompletion:g,handleDelete:m,handleUpdate:f},e.id)}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"task-container",children:[Object(O.jsx)("h4",{children:"Tasks"}),S,Object(O.jsx)("button",{type:"button",className:"add-task-btn",onClick:function(){return j(!0)},children:"+"})]}),Object(O.jsxs)(F.a,{show:i,onHide:w,children:[Object(O.jsx)(F.a.Header,{closeButton:!0,children:Object(O.jsx)(F.a.Title,{children:"New Task"})}),Object(O.jsx)(F.a.Body,{children:Object(O.jsxs)(L.a.Group,{children:[Object(O.jsx)(L.a.Label,{children:"Task:"}),Object(O.jsx)(L.a.Control,{type:"text",onChange:function(e){return x(e.target.value)},name:"text",value:p})]})}),Object(O.jsxs)(F.a.Footer,{children:[Object(O.jsx)(P.a,{type:"button",variant:"success",onClick:function(e){return y.apply(this,arguments)},children:"Add"}),Object(O.jsx)(P.a,{type:"button",variant:"danger",onClick:w,children:"Close"})]})]})]})}));var H=Object(b.h)((function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("main",{className:"dashboard-main",children:[Object(O.jsx)(X,{}),Object(O.jsx)(B,{})]})})}));var I=Object(b.h)((function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("header",{className:"dash-header",children:["Welcome ",e.username,"!  Today is [date] "]}),Object(O.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",id:"dash-header",children:Object(O.jsx)("div",{className:"container d-flex justify-content-center",children:Object(O.jsxs)("ul",{className:"navbar-nav",id:"dash-nav",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(o.b,{to:"/dashboard",children:"Dashboard"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(o.b,{to:"/clients",children:"Clients"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(o.b,{to:"/calendar",children:"Event Calendar"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(o.b,{to:"/workouts",children:"Workouts + Classes"})})]})})})]})})),q={title:"",start:null,end:null,allDay:!1,gymEvent:!1,details:""},z={"en-US":D.a},W=Object(S.b)({format:N.a,parse:T.a,startOfWeek:E.a,getDay:A.a,locales:z});var G=Object(b.h)((function(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(q),s=Object(d.a)(r,2),o=s[0],i=s[1],h=Object(a.useState)(!1),p=Object(d.a)(h,2),x=p[0],m=p[1],g=(Object(b.g)(),function(e){if("checkbox"!==e.target.type){var t=e.target,n=t.name,a=t.value;i((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(f.a)({},n,a))}))}else i((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(f.a)({},e.target.name,e.target.checked))}))});function k(e){console.warn(e)}function y(){return(y=Object(u.a)(l.a.mark((function e(t){var a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(o)},e.next=3,fetch("/api_v1/events/",a).catch(k);case 3:if((r=e.sent).ok){e.next=8;break}console.log(r),e.next=16;break;case 8:return e.next=10,r.json();case 10:(s=e.sent).start=new Date(s.start),s.end=new Date(s.end),m(!1),i(q),c([].concat(Object(C.a)(n),[s]));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(u.a)(l.a.mark((function e(){var t,a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"PUT",headers:{"X-CSRFToken":v.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(o)},e.next=3,fetch("/api_v1/events/".concat(o.id,"/"),t).catch(k);case 3:(a=e.sent).ok?(m(!1),r=Object(C.a)(n),s=r.findIndex((function(e){return e.id===o.id})),r[s]=o,c(r),i(q)):console.log(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(u.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/events/".concat(o.id,"/"),{method:"DELETE",headers:{"X-CSRFToken":v.a.get("csrftoken")}});case 2:(t=e.sent).ok?(a=Object(C.a)(n),r=a.findIndex((function(e){return e.id===o.id})),a.splice(r,1),c(a),m(!1)):console.log(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){function e(){return e=Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/events/");case 2:if((t=e.sent).ok){e.next=7;break}console.log(t),e.next=12;break;case 7:return e.next=9,t.json();case 9:n=e.sent,a=n.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{start:new Date(e.start),end:new Date(e.end)})})),c(a);case 12:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var T=function(){m(!1),i(q)};return n?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:"Community Events Calendar"}),Object(O.jsx)("div",{className:"monthly-cal",children:Object(O.jsx)(S.a,{selectable:!0,localizer:W,events:n,startAccessor:"start",endAccessor:"end",min:new Date(0,0,0,5,0,0),max:new Date(0,0,0,22,0,0),defaultView:"month",views:["month","week"],onSelectSlot:function(e){m(!0),i((function(t){return Object(j.a)(Object(j.a)({},t),{},{start:e.start,end:e.end})}))},onSelectEvent:function(e){i(Object(j.a)(Object(j.a)({},e),{},{title:e.title,start:e.start,end:e.end,details:e.details})),m(!0)},style:{height:700}})}),Object(O.jsxs)(F.a,{show:x,onHide:T,children:[Object(O.jsx)(F.a.Header,{closeButton:!0,children:Object(O.jsx)(F.a.Title,{children:"Add Event"})}),Object(O.jsx)(F.a.Body,{children:Object(O.jsxs)(L.a.Group,{children:[Object(O.jsx)(L.a.Label,{children:"Title: "}),Object(O.jsx)(L.a.Control,{type:"text",onChange:g,name:"title",value:o.title,placeholder:"Event Title"}),Object(O.jsx)(L.a.Label,{children:"Start: "}),Object(O.jsx)(L.a.Control,{name:"start",value:o.start}),Object(O.jsx)(L.a.Label,{children:"End: "}),Object(O.jsx)(L.a.Control,{name:"end",value:o.end}),Object(O.jsx)(L.a.Label,{children:"Details: "}),Object(O.jsx)(L.a.Control,{type:"text",onChange:g,name:"details",value:o.details,placeholder:"Event details..."}),Object(O.jsx)(L.a.Check,{type:"checkbox",label:"All Day",name:"allDay",checked:o.allDay,onChange:g}),Object(O.jsx)(L.a.Check,{type:"checkbox",label:"Community Event",name:"gymEvent",checked:o.gymEvent,onChange:g})]})}),Object(O.jsxs)(F.a.Footer,{children:[o.id?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(P.a,{type:"button",variant:"warning",onClick:function(){return w.apply(this,arguments)},children:"Update"}),Object(O.jsx)(P.a,{type:"button",variant:"dark",onClick:function(){return N.apply(this,arguments)},children:"Delete"})]}):Object(O.jsx)(P.a,{type:"button",variant:"success",onClick:function(e){return y.apply(this,arguments)},children:"Save"}),Object(O.jsx)(P.a,{type:"button",variant:"danger",onClick:T,children:"Close"})]})]})]}):Object(O.jsx)("div",{children:"loading"})}));var V=Object(b.h)((function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(b.g)();function s(){return(s=Object(u.a)(l.a.mark((function e(t,a){var s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(n)},e.next=3,fetch("/rest-auth/logout/",s);case 3:if((o=e.sent).ok){e.next=8;break}console.log(o),e.next=14;break;case 8:return e.next=10,o.json();case 10:e.sent,v.a.remove("Authorization"),c({isAuth:!1}),r.push("/");case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/rest-auth/user/");case 2:if((t=e.sent).ok){e.next=7;break}c({isAuth:!1}),e.next=11;break;case 7:return e.next=9,t.json();case 9:n=e.sent,c(Object(j.a)(Object(j.a)({},n),{},{isAuth:!0,isAdmin:n.is_staff}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r]);var o=null===n||void 0===n?void 0:n.isAuth,i=null===n||void 0===n?void 0:n.isAdmin,h=null===n||void 0===n?void 0:n.username;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{isAuth:o,isAdmin:i,handleLogout:function(e,t){return s.apply(this,arguments)}}),Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{path:"/registration",children:Object(O.jsx)(g,{isAuth:o,setUser:c})}),Object(O.jsx)(b.b,{path:"/login",children:Object(O.jsx)(k,{isAuth:o,setUser:c})}),Object(O.jsxs)(x,{path:"/dashboard",isAuth:o,isAdmin:i,children:[Object(O.jsx)(I,{username:h}),Object(O.jsx)(H,{})]}),Object(O.jsxs)(x,{path:"/calendar",isAuth:o,isAdmin:i,children:[Object(O.jsx)(I,{username:h}),Object(O.jsx)(G,{})]}),Object(O.jsx)(b.b,{path:"/",exact:!0,children:Object(O.jsx)(w,{isAuth:o,isAdmin:i})})]})]})})),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(o.a,{children:Object(O.jsx)(V,{})})}),document.getElementById("root")),M()}},[[98,1,2]]]);
//# sourceMappingURL=main.2ff17b6d.chunk.js.map