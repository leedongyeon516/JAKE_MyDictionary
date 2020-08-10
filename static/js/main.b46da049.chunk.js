(this["webpackJsonpdict-app"]=this["webpackJsonpdict-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),i=(n(12),n(2)),l=n(6),u=n(15),s=function(e,t){switch(t.type){case"ADD_WORD":return t.vocab.word&&[].concat(Object(l.a)(e),[{word:t.vocab.word,definition:t.vocab.definition,id:Object(u.a)()}]);case"REMOVE_WORD":return e.filter((function(e){return e.id!==t.id}));default:return e}},d=Object(a.createContext)(),m=function(e){var t=Object(a.useReducer)(s,[],(function(){var e=localStorage.getItem("vocab");return e?JSON.parse(e):[]})),n=Object(i.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){localStorage.setItem("vocab",JSON.stringify(c))}),[c]),r.a.createElement(d.Provider,{value:{vocab:c,dispatch:o}},e.children)},v=function(){var e=Object(a.useContext)(d).vocab;return r.a.createElement("div",{className:"navbar"},r.a.createElement("h1",null,"FlashCard"),r.a.createElement("p",null,"You have"," ",r.a.createElement("span",{className:"accent-txt"},e.length," word",e.length>1?"s":"")," ","to memorize. Keep it up!"))},p=function(e){var t=e.vocab,n=Object(a.useContext)(d).dispatch;return r.a.createElement("li",{onClick:function(){return n({type:"REMOVE_WORD",id:t.id})}},r.a.createElement("div",{className:"word"},t.word),r.a.createElement("div",{className:"definition"},t.definition))},f=function(){var e=Object(a.useContext)(d).vocab;return e.length>0?r.a.createElement("div",{className:"word-list"},r.a.createElement("ul",null,e.map((function(e){return r.a.createElement(p,{vocab:e,key:e.id})})))):r.a.createElement("div",{className:"empty"},"Hooray, no words to study.")},E=function(){var e=Object(a.useContext)(d).dispatch,t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),s=u[0],m=u[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_WORD",vocab:{word:c,definition:s}}),o(""),m("")}},r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"text",placeholder:"Word",value:c,onChange:function(e){return o(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Definition",value:s,onChange:function(e){return m(e.target.value)}})),r.a.createElement("input",{type:"submit",value:"Add This Vocab"}))},b=function(){return r.a.createElement("div",{className:"footer"},"Copyright \xa9 2020 Designed and Developed by Dongyeon Lee")};var h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement("div",{className:"App"},r.a.createElement(m,null,r.a.createElement(v,null),r.a.createElement(E,null),r.a.createElement(f,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.b46da049.chunk.js.map