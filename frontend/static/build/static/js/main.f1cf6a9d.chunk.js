(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),s=n.n(r),i=(n(88),n(89),n(17)),o=n(5),l=n.n(o),u=n(2),j=n(11),d=n(6),b=n(19),h=(n(91),n(7)),p=n(1),O=["isAuth"];var f=function(e){var t=e.isAuth,n=Object(h.a)(e,O);return t?Object(p.jsx)(b.b,Object(u.a)({isAuth:t},n)):Object(p.jsx)(b.a,{to:"/login"})},x=n(14),m=n(15),v=n.n(m);var g=Object(b.i)((function(e){var t=Object(a.useState)({username:"",email:"",password1:"",password2:""}),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(null),i=Object(d.a)(s,2),o=(i[0],i[1]);function b(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(x.a)({},n,a))}))}function h(e){console.warn(e)}function O(){return(O=Object(j.a)(l.a.mark((function t(n){var a,r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),console.log("user",c),c.password1===c.password2){t.next=6;break}o("Passwords do not match!"),t.next=20;break;case 6:return a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(c)},t.next=9,fetch("/rest-auth/registration/",a).catch(h);case 9:if((r=t.sent).ok){t.next=14;break}console.log(r),t.next=20;break;case 14:return t.next=16,r.json();case 16:s=t.sent,v.a.set("Authorization","Token ".concat(s.key)),e.setUser((function(e){return Object(u.a)(Object(u.a)({},e),{},{isAuth:!0})})),e.history.push("/profile");case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(p.jsxs)("form",{className:"mt-3 col-4 offset-lg-4 register-form",onSubmit:function(e){return O.apply(this,arguments)},children:[Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"username",children:"Username"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter Username",required:!0,name:"username",value:c.username,onChange:b})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter Email",required:!0,name:"email",value:c.email,onChange:b})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"password1",children:"Password 1"}),Object(p.jsx)("input",{type:"password",className:"form-control",id:"password1",placeholder:"Enter Password",required:!0,name:"password1",value:c.password1,onChange:b})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"password2",children:"Password 2"}),Object(p.jsx)("input",{type:"password",className:"form-control",id:"password2",placeholder:"Confirm Password",required:!0,name:"password2",value:c.password2,onChange:b})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",id:"register-button",children:"Register"})]})}));var k=Object(b.i)((function(e){var t=Object(a.useState)({username:"",password:""}),n=Object(d.a)(t,2),c=n[0],r=n[1];function s(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(x.a)({},n,a))}))}function i(e){console.warn(e)}function o(){return(o=Object(j.a)(l.a.mark((function t(n){var a,r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(c)},t.next=4,fetch("/rest-auth/login/",a).catch(i);case 4:if((r=t.sent).ok){t.next=9;break}console.log(r),t.next=15;break;case 9:return t.next=11,r.json();case 11:s=t.sent,v.a.set("Authorization","Token ".concat(s.key)),e.setUser((function(e){return Object(u.a)(Object(u.a)({},e),{},{isAuth:!0,isAdmin:s.user.is_staff,username:s.user.username})})),s.user.is_staff?e.history.push("/dashboard/"):e.history.push("/workouts/");case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return e.isAuth&&e.isAdmin?Object(p.jsx)(b.a,{to:"/dashboard"}):e.isAuth?Object(p.jsx)(b.a,{to:"/workouts"}):Object(p.jsxs)("form",{className:"mt-3 col-4 offset-lg-4 login-form",onSubmit:function(e){return o.apply(this,arguments)},children:[Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"username",children:"Username"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter Username",onChange:s,required:!0,name:"username",value:c.username})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter Password",onChange:s,required:!0,name:"password",value:c.password})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",id:"login-button",children:"Login"})]})}));var y=function(e){var t;return Object(p.jsx)("nav",{className:"navbar navbar-expand-lg",id:"header-nav",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("img",{className:"navbar-brand",src:"https://static1.squarespace.com/static/5fd13e0a92170d49d8b2c1e1/t/5fd6a3389264095525ddb611/1629747281826/",alt:"logo"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-responsive",children:Object(p.jsx)("ul",(t={className:"navbar-nav ml-auto"},Object(x.a)(t,"className","container d-flex justify-content-end"),Object(x.a)(t,"id","main-nav"),Object(x.a)(t,"children",e.isAuth&&Object(p.jsx)("button",{type:"submit",className:"logout",onClick:function(){return e.handleLogout()},children:"Logout"})),t))})]})})};var w=Object(b.i)((function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"landing-body",children:[Object(p.jsx)("section",{children:"#alwaysimproving"}),Object(p.jsxs)("aside",{children:[Object(p.jsx)("h4",{children:"New to the Factory?"}),Object(p.jsx)("div",{className:"landing-atag",children:Object(p.jsx)(i.b,{to:"/registration",children:"Register Here"})}),Object(p.jsx)("h4",{children:"Back for more? Welcome back."}),Object(p.jsx)("div",{className:"landing-atag",children:Object(p.jsx)(i.b,{to:"/login",children:"Login Here"})})]})]})})})),C=n(21),N=n(46),S=n(61),T=n(62),A=n(59),D=n(60),E=n(37),F=(n(74),n(107)),_=n(108),P=n(109),R={title:"",start:null,end:null,allDay:!1,gymEvent:!1,details:""},L={"en-US":E.a},U=Object(N.b)({format:S.a,parse:T.a,startOfWeek:A.a,getDay:D.a,locales:L});var X=Object(b.i)((function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(d.a)(r,2),i=s[0],o=s[1],b=Object(a.useState)(R),h=Object(d.a)(b,2),O=h[0],f=h[1],m=function(e){if("checkbox"!==e.target.type){var t=e.target,n=t.name,a=t.value;f((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(x.a)({},n,a))}))}else f((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(x.a)({},e.target.name,e.target.checked))}))};function g(e){console.warn(e)}function k(){return(k=Object(j.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(O)},e.next=3,fetch("/api_v1/events/?type=coach",n).catch(g);case 3:if((a=e.sent).ok){e.next=8;break}console.log(a),e.next=16;break;case 8:return e.next=10,a.json();case 10:(r=e.sent).start=new Date(r.start),r.end=new Date(r.end),c(!1),f(R),o([].concat(Object(C.a)(i),[r]));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(j.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"PUT",headers:{"X-CSRFToken":v.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(O)},e.next=3,fetch("/api_v1/events/".concat(O.id,"/"),t).catch(g);case 3:(n=e.sent).ok?(c(!1),a=Object(C.a)(i),r=a.findIndex((function(e){return e.id===O.id})),a[r]=O,o(a),f(R)):console.log(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(j.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/events/".concat(O.id,"/"),{method:"DELETE",headers:{"X-CSRFToken":v.a.get("csrftoken")}});case 2:(t=e.sent).ok?(n=Object(C.a)(i),a=n.findIndex((function(e){return e.id===O.id})),n.splice(a,1),o(n),c(!1)):console.log(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(j.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api_v1/events/".concat(O.id,"/cancellation/"),{method:"DELETE",headers:{"X-CSRFToken":v.a.get("csrftoken")}});case 2:(t=e.sent).ok?(n=Object(C.a)(i),a=n.findIndex((function(e){return e.id==O.id})),n.splice(a,1),o(n),c(!1)):console.log(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){function e(){return e=Object(j.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/events/");case 2:if((t=e.sent).ok){e.next=7;break}console.log(t),e.next=13;break;case 7:return e.next=9,t.json();case 9:n=e.sent,a=n.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{start:new Date(e.start),end:new Date(e.end)})})),o(a),console.log(a);case 13:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var T=function(){c(!1),f(R)};return i?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"daily-cal",children:Object(p.jsx)(N.a,{selectable:!0,localizer:U,events:i,startAccessor:"start",endAccessor:"end",min:new Date(0,0,0,5,0,0),max:new Date(0,0,0,22,0,0),defaultView:"week",views:["week","day"],onSelectSlot:function(e){c(!0),f((function(t){return Object(u.a)(Object(u.a)({},t),{},{start:e.start,end:e.end})}))},onSelectEvent:function(e){f(Object(u.a)(Object(u.a)({},e),{},{title:e.title,start:e.start,end:e.end,details:e.details})),c(!0)},style:{height:900}})}),Object(p.jsxs)(F.a,{show:n,onHide:T,children:[Object(p.jsx)(F.a.Header,{closeButton:!0,children:Object(p.jsx)(F.a.Title,{children:"Add Event"})}),Object(p.jsx)(F.a.Body,{children:Object(p.jsxs)(_.a.Group,{children:[Object(p.jsx)(_.a.Label,{children:"Title: "}),Object(p.jsx)(_.a.Control,{type:"text",onChange:m,name:"title",value:O.title,placeholder:"Event Title"}),Object(p.jsx)(_.a.Label,{children:"Start: "}),Object(p.jsx)(_.a.Control,{plaintext:!0,readOnly:!0,name:"start",value:O.start}),Object(p.jsx)(_.a.Label,{children:"End: "}),Object(p.jsx)(_.a.Control,{plaintext:!0,readOnly:!0,name:"end",value:O.end}),Object(p.jsx)(_.a.Label,{children:"Details: "}),Object(p.jsx)(_.a.Control,{type:"text",onChange:m,name:"details",value:O.details,placeholder:"Event details..."}),Object(p.jsx)(_.a.Check,{type:"checkbox",label:"All Day",name:"allDay",checked:O.allDay,onChange:m}),Object(p.jsx)(_.a.Check,{type:"checkbox",label:"Community Event",name:"gymEvent",checked:O.gymEvent,onChange:m})]})}),Object(p.jsxs)(F.a.Footer,{children:[O.id?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(P.a,{type:"button",variant:"info",onClick:function(){return S.apply(this,arguments)},children:"Cancel Event"}),Object(p.jsx)(P.a,{type:"button",variant:"warning",onClick:function(){return y.apply(this,arguments)},children:"Update"}),Object(p.jsx)(P.a,{type:"button",variant:"dark",onClick:function(){return w.apply(this,arguments)},children:"Delete"})]}):Object(p.jsx)(P.a,{type:"button",variant:"success",onClick:function(e){return k.apply(this,arguments)},children:"Save"}),Object(p.jsx)(P.a,{type:"button",variant:"danger",onClick:T,children:"Close"})]})]})]}):Object(p.jsx)("div",{children:"loading spinner"})})),H=n(41);function I(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(e.task.text),i=Object(d.a)(s,2),o=i[0],l=i[1],j=e.task,b=j.id,h=j.text,O=j.complete;return Object(p.jsxs)("div",{className:"task-item",children:[Object(p.jsx)("input",{type:"checkbox",checked:O,name:"complete",onChange:e.toggleCompletion,value:b}),c?Object(p.jsx)("input",{type:"text",name:"editText",value:o,onChange:function(e){l(e.target.value)}}):Object(p.jsx)("label",{children:h}),c?Object(p.jsx)("button",{type:"button",className:"save-task-btn",onClick:function(t){var n=Object(u.a)(Object(u.a)({},e.task),{},{text:o});e.handleUpdate(n),r(!1)},children:"save"}):Object(p.jsx)("button",{type:"button",className:"edit-task-btn",onClick:function(){return r(!0)},children:Object(p.jsx)(H.a,{})}),Object(p.jsx)("button",{type:"button",className:"delete-task-btn",onClick:e.handleDelete,value:b,children:Object(p.jsx)(H.c,{})})]})}var J=Object(b.i)((function(e){var t=Object(a.useState)([]),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),i=Object(d.a)(s,2),o=i[0],u=i[1],b=Object(a.useState)(""),h=Object(d.a)(b,2),O=h[0],f=h[1];Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/tasks/");case 2:if((t=e.sent).ok){e.next=7;break}console.log(t),e.next=11;break;case 7:return e.next=9,t.json();case 9:n=e.sent,r(n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var x=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"PUT",headers:{"X-CSRFToken":v.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=3,fetch("/api_v1/tasks/".concat(t.id,"/"),n);case 3:(a=e.sent).ok?(s=Object(C.a)(c),i=s.findIndex((function(e){return e.id===t.id})),s[i]=t,r(s)):console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,s,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.currentTarget.value,a={method:"DELETE",headers:{"X-CSRFToken":v.a.get("csrftoken")}},e.next=4,fetch("/api_v1/tasks/".concat(n,"/"),a);case 4:(s=e.sent).ok?(i=Object(C.a)(c),o=i.findIndex((function(e){return e.id===n})),i.splice(o,1),r(i)):console.log(s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,s,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(C.a)(c),a=t.target.value,s=n.findIndex((function(e){return e.id==t.target.value})),n[s].complete=!n[s].complete,r(n),i={method:"PATCH",headers:{"X-CSRFToken":v.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify({complete:n[s].complete})},e.next=8,fetch("/api_v1/tasks/".concat(a,"/"),i);case 8:(o=e.sent).ok||console.log(o);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function k(e){console.warn(e)}function y(){return(y=Object(j.a)(l.a.mark((function e(t){var n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify({text:O})},e.next=3,fetch("/api_v1/tasks/",n).catch(k);case 3:if((a=e.sent).ok){e.next=8;break}console.log(a),e.next=14;break;case 8:return e.next=10,a.json();case 10:s=e.sent,u(!1),f(""),r([].concat(Object(C.a)(c),[s]));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(){return u(!1)};if(!c)return Object(p.jsx)("div",{children:"spinner thingy"});var N=c.map((function(e){return Object(p.jsx)(I,{task:e,toggleCompletion:g,handleDelete:m,handleUpdate:x},e.id)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"task-container",children:[Object(p.jsx)("h4",{children:"Tasks"}),N,Object(p.jsxs)("button",{type:"button",className:"add-task-btn",onClick:function(){return u(!0)},children:["Add task ",Object(p.jsx)(H.b,{})]})]}),Object(p.jsxs)(F.a,{show:o,onHide:w,children:[Object(p.jsx)(F.a.Header,{closeButton:!0,children:Object(p.jsx)(F.a.Title,{children:"New Task"})}),Object(p.jsx)(F.a.Body,{children:Object(p.jsxs)(_.a.Group,{children:[Object(p.jsx)(_.a.Label,{children:"Task:"}),Object(p.jsx)(_.a.Control,{type:"text",onChange:function(e){return f(e.target.value)},name:"text",value:O})]})}),Object(p.jsxs)(F.a.Footer,{children:[Object(p.jsx)(P.a,{type:"button",variant:"success",onClick:function(e){return y.apply(this,arguments)},children:"Add"}),Object(p.jsx)(P.a,{type:"button",variant:"danger",onClick:w,children:"Close"})]})]})]})}));var B=Object(b.i)((function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("main",{className:"dashboard-main",children:[Object(p.jsx)(X,{}),Object(p.jsx)(J,{})]})})}));var q=Object(b.i)((function(e){var t=new Date,n=Object(S.a)(t,"PPPP");return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("header",{className:"dash-header bg-dark",children:["Welcome ",e.username,"!  Today is ",n," "]}),Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",id:"dash-header",children:Object(p.jsx)("div",{className:"container d-flex justify-content-center",children:Object(p.jsxs)("ul",{className:"navbar-nav",id:"dash-nav",children:[e.isAdmin&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/dashboard",children:"Dashboard"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/clients",children:"Clients"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/calendar",children:"Event Calendar"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/workouts",children:"Workouts + Group Training"})})]}),!e.isAdmin&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/calendar",children:"Event Calendar"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/workouts",children:"Workouts + Group Training"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/manage",children:"Manage Account"})})]})]})})})]})})),W={title:"",start:null,end:null,allDay:!1,gymEvent:!1,details:""},G={"en-US":E.a},M=Object(N.b)({format:S.a,parse:T.a,startOfWeek:A.a,getDay:D.a,locales:G});var z=Object(b.i)((function(e){var t=Object(a.useState)(),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(W),i=Object(d.a)(s,2),o=i[0],b=i[1],h=Object(a.useState)(!1),O=Object(d.a)(h,2),f=O[0],m=O[1],g=function(e){if("checkbox"!==e.target.type){var t=e.target,n=t.name,a=t.value;b((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(x.a)({},n,a))}))}else b((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(x.a)({},e.target.name,e.target.checked))}))};function k(e){console.warn(e)}function y(){return(y=Object(j.a)(l.a.mark((function e(t){var n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(o)},e.next=3,fetch("/api_v1/events/",n).catch(k);case 3:if((a=e.sent).ok){e.next=8;break}console.log(a),e.next=16;break;case 8:return e.next=10,a.json();case 10:(s=e.sent).start=new Date(s.start),s.end=new Date(s.end),m(!1),b(W),r([].concat(Object(C.a)(c),[s]));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(j.a)(l.a.mark((function e(){var t,n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"PUT",headers:{"X-CSRFToken":v.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(o)},e.next=3,fetch("/api_v1/events/".concat(o.id,"/"),t).catch(k);case 3:(n=e.sent).ok?(m(!1),a=Object(C.a)(c),s=a.findIndex((function(e){return e.id===o.id})),a[s]=o,r(a),b(W)):console.log(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(j.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/events/".concat(o.id,"/"),{method:"DELETE",headers:{"X-CSRFToken":v.a.get("csrftoken")}});case 2:(t=e.sent).ok?(n=Object(C.a)(c),a=n.findIndex((function(e){return e.id==o.id})),n.splice(a,1),r(n),m(!1)):console.log(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(j.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api_v1/events/".concat(o.id,"/cancellation/"),{method:"DELETE",headers:{"X-CSRFToken":v.a.get("csrftoken")}});case 2:(t=e.sent).ok?(n=Object(C.a)(c),a=n.findIndex((function(e){return e.id==o.id})),n.splice(a,1),r(n),m(!1)):console.log(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){function e(){return e=Object(j.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/events/?type=community");case 2:if((t=e.sent).ok){e.next=7;break}console.log(t),e.next=12;break;case 7:return e.next=9,t.json();case 9:n=e.sent,a=n.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{start:new Date(e.start),end:new Date(e.end)})})),r(a);case 12:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var A=function(){m(!1),b(W)};return c?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:"Community Events Calendar"}),Object(p.jsx)("div",{className:"monthly-cal",children:Object(p.jsx)(N.a,{selectable:!0,localizer:M,events:c,startAccessor:"start",endAccessor:"end",min:new Date(0,0,0,5,0,0),max:new Date(0,0,0,22,0,0),defaultView:"month",views:["month","week"],onSelectSlot:function(e){m(!0),b((function(t){return Object(u.a)(Object(u.a)({},t),{},{start:e.start,end:e.end})}))},onSelectEvent:function(e){b(Object(u.a)(Object(u.a)({},e),{},{title:e.title,start:e.start,end:e.end,details:e.details})),m(!0)},style:{height:700}})}),e.isAdmin&&Object(p.jsxs)(F.a,{show:f,onHide:A,children:[Object(p.jsx)(F.a.Header,{closeButton:!0,children:Object(p.jsx)(F.a.Title,{children:"Add Event"})}),Object(p.jsx)(F.a.Body,{children:Object(p.jsxs)(_.a.Group,{children:[Object(p.jsx)(_.a.Label,{children:"Title: "}),Object(p.jsx)(_.a.Control,{type:"text",onChange:g,name:"title",value:o.title,placeholder:"Event Title"}),Object(p.jsx)(_.a.Label,{children:"Start: "}),Object(p.jsx)(_.a.Control,{name:"start",value:o.start}),Object(p.jsx)(_.a.Label,{children:"End: "}),Object(p.jsx)(_.a.Control,{name:"end",value:o.end}),Object(p.jsx)(_.a.Label,{children:"Details: "}),Object(p.jsx)(_.a.Control,{type:"text",onChange:g,name:"details",value:o.details,placeholder:"Event details..."}),Object(p.jsx)(_.a.Check,{type:"checkbox",label:"All Day",name:"allDay",checked:o.allDay,onChange:g}),Object(p.jsx)(_.a.Check,{type:"checkbox",label:"Community Event",name:"gymEvent",checked:o.gymEvent,onChange:g})]})}),Object(p.jsxs)(F.a.Footer,{children:[o.id?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(P.a,{type:"button",variant:"info",onClick:function(){return T.apply(this,arguments)},children:"Cancel Event"}),Object(p.jsx)(P.a,{type:"button",variant:"warning",onClick:function(){return w.apply(this,arguments)},children:"Update"}),Object(p.jsx)(P.a,{type:"button",variant:"dark",onClick:function(){return S.apply(this,arguments)},children:"Delete"})]}):Object(p.jsx)(P.a,{type:"button",variant:"success",onClick:function(e){return y.apply(this,arguments)},children:"Save"}),Object(p.jsx)(P.a,{type:"button",variant:"danger",onClick:A,children:"Close"})]})]}),!e.isAdmin&&Object(p.jsxs)(F.a,{show:f,onHide:A,children:[Object(p.jsx)(F.a.Header,{closeButton:!0,children:Object(p.jsx)(F.a.Title,{children:"Event Details"})}),Object(p.jsx)(F.a.Body,{children:o.details}),Object(p.jsxs)(F.a.Footer,{children:[Object(p.jsx)(P.a,{type:"button",variant:"success",children:"Register"}),Object(p.jsx)(P.a,{type:"button",variant:"danger",onClick:A,children:"Close"})]})]})]}):Object(p.jsx)("div",{children:"loading SPINNER"})}));var V=Object(b.i)((function(e){Object(b.h)().filter;var t=Object(a.useState)([]),n=Object(d.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/events/?type=session");case 2:if((t=e.sent).ok){e.next=7;break}throw new Error("Network response was not OK");case 7:return n={},e.next=10,t.json();case 10:e.sent.forEach((function(e){var t=new Date(e.start),a=new Date(e.end),c=new Date;c.setHours(t.getHours()),c.setMinutes(t.getMinutes());var r=new Date;r.setHours(a.getHours()),r.setMinutes(a.getMinutes());for(var s=0;s<6;s++){if(0===c.getDay())s--;else{var i=c.toDateString();n[i]=n[i]?[].concat(Object(C.a)(n[i]),[Object(u.a)(Object(u.a)({},e),{},{start:c.toString(),end:r.toString()})]):[Object(u.a)(Object(u.a)({},e),{},{start:c.toString(),end:r.toString()})]}c=new Date(c.setDate(c.getDate()+1)),r=new Date(r.setDate(r.getDate()+1))}})),r(n);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s=Object.keys(c);console.log(s);var i=s.map((function(t){var n=c[t].map((function(t){return Object(p.jsxs)("div",{className:"session",children:[Object(p.jsxs)("time",{children:[Object(S.a)(new Date(t.start),"p")," - "]}),Object(p.jsx)("time",{children:Object(S.a)(new Date(t.end),"p")}),e.isAuth&&Object(p.jsx)("button",{children:"Register"})]})}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h5",{className:"session-day",children:[t,":"]}),n]})}));return Object(p.jsx)(p.Fragment,{children:i})}));function K(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(e.workout),i=Object(d.a)(s,2),o=i[0],l=i[1],j=function(e){var t=e.target,n=t.name,a=t.value;l((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(x.a)({},n,a))}))};return Object(p.jsxs)("div",{className:"workout",children:[c?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"date",children:"Date"}),Object(p.jsx)("input",{id:"date",type:"date",name:"date",value:o.date,min:"2021-11-01",onChange:j}),Object(p.jsx)("label",{htmlFor:"text",children:"Text"}),Object(p.jsx)("input",{type:"textarea",name:"text",id:"text",rows:10,value:o.text,onChange:j}),Object(p.jsx)("button",{type:"button",className:"save-workout-btn",onClick:function(t){e.handleUpdate(o),r(!1)},children:"save"})]})}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h5",{className:"workout-date",children:Object(S.a)(new Date(e.workout.date),"PPPP")}),Object(p.jsx)("article",{children:e.workout.text}),Object(p.jsx)("button",{type:"button",className:"edit-workout-btn",onClick:function(){return r(!0)},children:Object(p.jsx)(H.a,{})})]}),Object(p.jsx)("button",{type:"button",className:"delete-workout-btn",value:o.id,onClick:e.handleDelete,children:Object(p.jsx)(H.c,{})})]})}var Q=Object(b.i)((function(e){var t=Object(a.useState)([]),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),i=Object(d.a)(s,2),o=i[0],u=i[1],b=Object(a.useState)(""),h=Object(d.a)(b,2),O=h[0],f=h[1],x=Object(a.useState)((new Date).toISOString().substr(0,10)),m=Object(d.a)(x,2),g=m[0],k=m[1];Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/workouts/");case 2:if((t=e.sent).ok){e.next=7;break}console.log(t),e.next=11;break;case 7:return e.next=9,t.json();case 9:n=e.sent,r(n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var y=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"PUT",headers:{"X-CSRFToken":v.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=3,fetch("/api_v1/workouts/".concat(t.id,"/"),n);case 3:(a=e.sent).ok?(s=Object(C.a)(c),i=s.findIndex((function(e){return e.id===t.id})),s[i]=t,r(s)):console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"DELETE",headers:{"X-CSRFToken":v.a.get("csrftoken")}},e.next=3,fetch("/api_v1/workouts/".concat(t.currentTarget.value,"/"),n);case 3:(a=e.sent).ok?(s=Object(C.a)(c),i=s.findIndex((function(e){return e.id==t.target.value})),s.splice(i,1),r(s)):console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function N(e){console.warn(e)}function S(){return(S=Object(j.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify({date:g,text:O})},e.next=3,fetch("/api_v1/workouts/",t).catch(N);case 3:if((n=e.sent).ok){e.next=8;break}console.log(n),e.next=14;break;case 8:return e.next=10,n.json();case 10:a=e.sent,u(!1),f(""),r([].concat(Object(C.a)(c),[a]));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(){return u(!1)};if(!c)return Object(p.jsx)("div",{children:"spinner thingy"});var A=c.map((function(e){return Object(p.jsx)(K,{workout:e,handleDelete:w,handleUpdate:y},e.id)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"workout-container",children:[Object(p.jsxs)("section",{className:"workout-list",children:[Object(p.jsx)("h3",{children:"Adult Performance Workouts"}),A,e.isAdmin&&Object(p.jsxs)("button",{type:"button",className:"add-workout-btn",onClick:function(){return u(!0)},children:["Add Workout ",Object(p.jsx)(H.b,{})]})]}),Object(p.jsxs)("section",{className:"class-list",children:[Object(p.jsx)("h3",{children:"Adult Performance Group Training"}),Object(p.jsx)(V,{isAuth:e.isAuth})]})]}),Object(p.jsxs)(F.a,{show:o,onHide:T,children:[Object(p.jsx)(F.a.Header,{closeButton:!0,children:Object(p.jsx)(F.a.Title,{children:"Add New Workout"})}),Object(p.jsx)(F.a.Body,{children:Object(p.jsxs)(_.a.Group,{children:[Object(p.jsx)(_.a.Label,{children:"Date:"}),Object(p.jsx)(_.a.Control,{type:"date",name:"workout-date",value:g,min:g,onChange:function(e){return k(e.target.value)}}),Object(p.jsx)(_.a.Label,{children:"Workout:"}),Object(p.jsx)(_.a.Control,{type:"text",as:"textarea",rows:10,onChange:function(e){return f(e.target.value)},name:"text",value:O})]})}),Object(p.jsxs)(F.a.Footer,{children:[Object(p.jsx)(P.a,{type:"button",variant:"success",onClick:function(){return S.apply(this,arguments)},children:"Add"}),Object(p.jsx)(P.a,{type:"button",variant:"danger",onClick:T,children:"Close"})]})]})]})}));var Y=Object(b.i)((function(e){var t=Object(b.h)().filter,n=Object(a.useState)([]),c=Object(d.a)(n,2),r=c[0],s=c[1];Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/accounts/profiles/");case 2:if((t=e.sent).ok){e.next=7;break}console.log(t),e.next=12;break;case 7:return e.next=9,t.json();case 9:n=e.sent,s(n),console.log(n);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var o=r.filter((function(e){return"pt"===t?e.is_client:e})).map((function(e){return Object(p.jsxs)("div",{className:"client-profile",children:[Object(p.jsx)("img",{className:"client-photo",src:e.avatar,alt:""}),Object(p.jsxs)("p",{children:[e.first_name," ",e.last_name]}),Object(p.jsxs)("p",{children:["Primary phone: ",e.phone_number]}),Object(p.jsxs)("p",{children:["Primary email: ",e.email]}),Object(p.jsxs)("p",{children:["Client Notes: ",e.details]}),Object(p.jsxs)("p",{children:["PT Coach: ",e.coach_name]}),Object(p.jsx)("button",{type:"button",className:"edit-client",children:"Edit"})]},e.id)}));return Object(p.jsxs)("div",{className:"client-container",children:[Object(p.jsxs)("nav",{className:"client-nav",children:[Object(p.jsx)(i.b,{to:"/clients/",children:"All Members"}),Object(p.jsx)(i.b,{to:"/clients/pt/",children:"Personal Training Clients"})]}),Object(p.jsx)("section",{className:"client-list",children:o})]})}));var Z=Object(b.i)((function(e){var t=Object(a.useState)({first_name:"",last_name:"",phone_number:"",avatar:null}),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(d.a)(s,2),o=i[0],b=i[1],h=function(e){var t=e.target,n=t.name,a=t.value;r(Object(u.a)(Object(u.a)({},c),{},Object(x.a)({},n,a)))};function O(e){console.warn(e)}function f(){return f=Object(j.a)(l.a.mark((function e(t,n){var a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("first_name",n.user.first_name),a.append("last_name",n.user.last_name),a.append("phone_number",c.phone_number),a.append("avatar",c.avatar),r={method:"POST",headers:{"X-CSRFToken":v.a.get("csrftoken")},body:a},e.next=9,fetch("/api_v1/accounts/profiles/",r).catch(O);case 9:if((s=e.sent).ok){e.next=14;break}console.log(s),e.next=18;break;case 14:return e.next=16,s.json();case 16:e.sent,n.history.push("/workouts");case 18:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}return Object(p.jsxs)("form",{className:"mt-3 col-4 offset-lg-4 profile-form",onSubmit:function(e,t){return f.apply(this,arguments)},children:[Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"first_name",children:"First Name: "}),Object(p.jsx)("input",{type:"text",name:"first_name",id:"first_name",placeholder:"First Name",required:!0,value:e.user.first_name,onChange:h})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"last_name",children:"Last Name: "}),Object(p.jsx)("input",{type:"text",name:"last_name",id:"last_name",placeholder:"Last Name",required:!0,value:e.user.last_name,onChange:h})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"phone_number",children:"Primary Phone: "}),Object(p.jsx)("input",{type:"tel",name:"phone_number",id:"phone_number",required:!0,value:c.phone_number,onChange:h})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("input",{type:"file",name:"avatar",onChange:function(e){var t=e.target.files[0];r(Object(u.a)(Object(u.a)({},c),{},{avatar:t}));var n=new FileReader;n.onloadend=function(){b(n.result)},n.readAsDataURL(t)}}),c.avatar&&Object(p.jsx)("img",{src:o,alt:""})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",id:"profile-button",children:"Save Profile"})]})}));var $=Object(b.i)((function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(b.g)();function s(){return(s=Object(j.a)(l.a.mark((function e(t,a){var s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(n)},e.next=3,fetch("/rest-auth/logout/",s);case 3:if((i=e.sent).ok){e.next=8;break}console.log(i),e.next=14;break;case 8:return e.next=10,i.json();case 10:e.sent,v.a.remove("Authorization"),c({isAuth:!1}),r.push("/");case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/rest-auth/user/");case 2:if((t=e.sent).ok){e.next=7;break}c({isAuth:!1}),e.next=11;break;case 7:return e.next=9,t.json();case 9:n=e.sent,c(Object(u.a)(Object(u.a)({},n),{},{isAuth:!0,isAdmin:n.is_staff}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r]),!n)return Object(p.jsx)("div",{children:"I am loading!"});var i=null===n||void 0===n?void 0:n.isAuth,o=null===n||void 0===n?void 0:n.isAdmin,h=null===n||void 0===n?void 0:n.username;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{isAuth:i,isAdmin:o,handleLogout:function(e,t){return s.apply(this,arguments)}}),i&&Object(p.jsx)(q,{username:h,isAdmin:o}),Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.b,{path:"/registration",children:Object(p.jsx)(g,{isAuth:i,setUser:c})}),Object(p.jsx)(b.b,{path:"/login",children:Object(p.jsx)(k,{isAuth:i,isAdmin:o,setUser:c})}),Object(p.jsx)(f,{path:"/profile",isAuth:i,children:Object(p.jsx)(Z,{})}),Object(p.jsx)(f,{path:"/dashboard",isAuth:i,isAdmin:o,children:Object(p.jsx)(B,{isAuth:i,isAdmin:o})}),Object(p.jsx)(f,{path:"/clients/:filter?",isAuth:i,isAdmin:o,children:Object(p.jsx)(Y,{isAuth:i,isAdmin:o})}),Object(p.jsx)(f,{path:"/calendar",isAuth:i,isAdmin:o,children:Object(p.jsx)(z,{isAuth:i,isAdmin:o})}),Object(p.jsx)(f,{path:"/workouts",isAuth:i,isAdmin:o,children:Object(p.jsx)(Q,{isAuth:i,isAdmin:o})}),Object(p.jsx)(b.b,{path:"/",exact:!0,children:Object(p.jsx)(w,{isAuth:i,isAdmin:o})})]})]})})),ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(i.a,{children:Object(p.jsx)($,{})})}),document.getElementById("root")),ee()},89:function(e,t,n){},91:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.f1cf6a9d.chunk.js.map