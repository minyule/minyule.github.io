(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3BJJ":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("dI71"),l=a("q1tI"),i=a.n(l),c=a("+ZDr"),r=a("7oih");function m(e){for(var t=new FormData,a=0,n=Object.keys(e);a<n.length;a++){var l=n[a];t.append(l,e[l])}return t}var s=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleAttachment=function(e){var t;a.setState(((t={})[e.target.name]=e.target.files[0],t))},a.handleSubmit=function(e){e.preventDefault();var t=e.target;fetch("/",{method:"POST",body:m(Object.assign({"form-name":t.getAttribute("name")},a.state))}).then((function(){return Object(c.navigate)(t.getAttribute("action"))})).catch((function(e){return alert(e)}))},a.state={},a}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement(r.a,null,i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"content",style:{width:"60vw",margin:"1em auto"}},i.a.createElement("h1",null,"File Upload"),i.a.createElement("form",{name:"file-upload",method:"post",action:"/contact/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},i.a.createElement("input",{type:"hidden",name:"form-name",value:"file-upload"}),i.a.createElement("div",{hidden:!0},i.a.createElement("label",null,"Don’t fill this out:"," ",i.a.createElement("input",{name:"bot-field",onChange:this.handleChange}))),i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label",htmlFor:"name"},"Your name"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{className:"input",type:"text",name:"name",onChange:this.handleChange,id:"name",required:!0}))),i.a.createElement("div",{className:"field"},i.a.createElement("div",{className:"file"},i.a.createElement("label",{className:"file-label"},i.a.createElement("input",{className:"file-input",type:"file",name:"attachment",onChange:this.handleAttachment}),i.a.createElement("span",{className:"file-cta"},i.a.createElement("span",{className:"file-label"},"Choose a file…"))))),i.a.createElement("div",{className:"field"},i.a.createElement("button",{className:"button is-link",type:"submit"},"Send")))))))},t}(i.a.Component)}}]);
//# sourceMappingURL=component---src-pages-contact-file-upload-js-48baece73b558894550e.js.map