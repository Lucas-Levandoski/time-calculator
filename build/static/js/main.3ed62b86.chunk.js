(this["webpackJsonptime-calculator"]=this["webpackJsonptime-calculator"]||[]).push([[0],{43:function(e,t,n){},51:function(e,t){},52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c,a,r=n(1),s=n.n(r),i=n(22),o=n.n(i),u=(n(43),n(5)),l=n(20);!function(e){e.days="days",e.hours="hours",e.minutes="minutes",e.seconds="seconds"}(c||(c={})),function(e){e.calc="calc",e.timeInBetween="timeInBetween"}(a||(a={}));var d=n(87),j=["+","-","*","/","(",")"],b=["d","h","m","s"];function h(e){var t=null;return e.every((function(e){var n=function(e){for(var t=e.split(""),n=null,c=0;c<t.length;c+=1){var a=t[c];t.slice(c+1,t.length).includes(a)&&b.includes(a)&&(n=a,c=t.length)}return n}(e);if(n)return t="sentence (".concat(e,") has more than one (").concat(n,")"),!1;var c=function(e){var t=null;return e.split("").forEach((function(e){j.includes(e)||b.includes(e)||+e||"0"===e||(t=e)})),t}(e);if(c)return t="character (".concat(c,") on sentence (").concat(e,") is not accepted"),!1;var a=function(e){var t=null;if(j.includes(e))return null;var n=e.split("");return n.forEach((function(e,c){+e||+n[c-1]||"0"===n[c-1]||"0"===e||(t=e)})),t}(e);if(a)return t="your sentence (".concat(e,") does not have a number before (").concat(a,")"),!1;var r=function(e){var t=null;if(+e)return null;if(j.includes(e))return null;var n=e.split("");return+n[n.length-1]&&(t=+n[n.length-1]),t}(e);return!r||(t="last character on (".concat(e,") must be a time type like (d, h, m or s) instead of ").concat(r),!1)})),t}function m(e){var t=e;return t.forEach((function(e,n){j.includes(e)||(t[n]=function(e){var t=e;return+t?d.a(t):(t=(t=(t=(t=t.replaceAll("d","*86400+")).replaceAll("h","*3600+")).replaceAll("m","*60+")).replaceAll("s","*1+"),d.a(t.substr(0,t.length-1)))}(e))})),Math.round(d.a(t.join("")))}function f(e,t){var n,a="";switch(t){case c.days:a=function(e){var t=e,n=Math.floor(t/86400);t-=86400*n;var c=Math.floor(t/3600);t-=3600*c;var a=Math.floor(t/60),r=t-=60*a;return"".concat(n,"d").concat(c,"h").concat(a,"m").concat(r,"s")}(m(e));break;case c.hours:a=function(e){var t=e,n=Math.floor(t/3600);t-=3600*n;var c=Math.floor(t/60),a=t-=60*c;return"".concat(n,"h").concat(c,"m").concat(a,"s")}(m(e));break;case c.minutes:a=function(e){var t=e,n=Math.floor(t/60),c=t-=60*n;return"".concat(n,"m").concat(c,"s")}(m(e));break;case c.seconds:n=m(e),a="".concat(n,"s")}return a}n(52),n(53);var O=n(3);function p(e){e.equationHistory;return Object(O.jsx)("div",{className:"history-container"})}n(55);function x(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"keypad-button is-number",onClick:function(){return e.addCharacter("1")},children:"1"}),Object(O.jsx)("td",{className:"keypad-button is-number",onClick:function(){return e.addCharacter("2")},children:"2"}),Object(O.jsx)("td",{className:"keypad-button is-number",onClick:function(){return e.addCharacter("3")},children:"3"}),Object(O.jsx)("td",{className:"keypad-button is-operation",onClick:function(){return e.addCharacter("d")},children:"d"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"keypad-button is-number",onClick:function(){return e.addCharacter("4")},children:"4"}),Object(O.jsx)("td",{className:"keypad-button is-number",onClick:function(){return e.addCharacter("5")},children:"5"}),Object(O.jsx)("td",{className:"keypad-button is-number",onClick:function(){return e.addCharacter("6")},children:"6"}),Object(O.jsx)("td",{className:"keypad-button is-operation",onClick:function(){return e.addCharacter("h")},children:"h"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"keypad-button is-number",onClick:function(){return e.addCharacter("7")},children:"7"}),Object(O.jsx)("td",{className:"keypad-button is-number",onClick:function(){return e.addCharacter("8")},children:"8"}),Object(O.jsx)("td",{className:"keypad-button is-number",onClick:function(){return e.addCharacter("9")},children:"9"}),Object(O.jsx)("td",{className:"keypad-button is-operation",onClick:function(){return e.addCharacter("m")},children:"m"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"keypad-button is-operation",onClick:function(){return e.addCharacter("+")},children:"+"}),Object(O.jsx)("td",{className:"keypad-button is-number",onClick:function(){return e.addCharacter("0")},children:"0"}),Object(O.jsx)("td",{className:"keypad-button is-operation",onClick:function(){return e.addCharacter("-")},children:"-"}),Object(O.jsx)("td",{className:"keypad-button is-operation",onClick:function(){return e.addCharacter("s")},children:"s"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"keypad-button is-operation",onClick:function(){return e.addCharacter("*")},children:"*"}),Object(O.jsx)("td",{className:"keypad-button is-operation",onClick:function(){return e.addCharacter("/")},children:"/"}),Object(O.jsx)("td",{className:"keypad-button is-operation",onClick:function(){return e.addCharacter("(")},children:"("}),Object(O.jsx)("td",{className:"keypad-button is-operation",onClick:function(){return e.addCharacter(")")},children:")"})]})]})}var k=n(29),v=n.n(k),C=n(31),y=n.n(C);n(80);function N(e){var t=Object(r.useState)(new Date),n=Object(u.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(new Date),i=Object(u.a)(s,2),o=i[0],l=i[1],d=Object(r.useState)(""),j=Object(u.a)(d,2),b=j[0],h=(j[1],function(){c.getTime(),o.getTime()});return Object(O.jsx)("tr",{className:"date-time-picker-frame",children:Object(O.jsxs)("td",{colSpan:4,children:[Object(O.jsxs)("div",{className:"date-pickers-container",children:[Object(O.jsxs)("div",{className:"date-picker-container",children:["Start",Object(O.jsxs)("div",{children:[Object(O.jsx)(v.a,{value:c,onChange:function(e){a(e),h()}}),Object(O.jsx)(y.a,{value:c,onChange:function(e){var t=new Date("".concat(c.toJSON().substr(0,11)).concat(e));a(t),h()},format:"HH:mm:ss",disableClock:!0})]})]}),Object(O.jsxs)("div",{className:"date-picker-container",children:["End",Object(O.jsxs)("div",{children:[Object(O.jsx)(v.a,{value:o,onChange:function(e){l(e),h()}}),Object(O.jsx)(y.a,{value:o,onChange:function(e){var t=new Date("".concat(o.toISOString().substr(0,10)," ").concat(e));l(t),h()},format:"HH:mm:ss",disableClock:!0})]})]})]}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:b})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{type:"button",children:"Sum on Calc"}),Object(O.jsx)("button",{type:"button",children:"Sub on Calc"})]})]})})}function g(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(c.days),o=Object(u.a)(i,2),d=o[0],b=o[1],m=Object(r.useState)(),k=Object(u.a)(m,2),v=k[0],C=k[1],y=Object(r.useState)(!1),g=Object(u.a)(y,2),S=g[0],w=g[1],A=Object(r.useState)([]),I=Object(u.a)(A,2),M=I[0],T=I[1],H=Object(r.useState)(a.calc),D=Object(u.a)(H,2),E=D[0],F=(D[1],function(e){if(e.preventDefault(),n){var t=function(e){var t="".concat(function(e){return e.replaceAll("\n","").replaceAll(" ","")}(e));return j.forEach((function(e){t=t.replaceAll(e,"~".concat(e,"~"))})),t.split("~")}(n),c=h(t);if(c)C(c);else{C("");var a=f(t,d);!function(e,t){6===M.length?(M.splice(0,1),M.push({equation:e,result:t})):M.push({equation:e,result:t}),T(M)}(n,a),s(a)}}else C("you should type something")});return Object(O.jsxs)("div",{className:"calc-container",children:[Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:F,className:"calc-form",children:[Object(O.jsx)("textarea",{className:"calc-input",value:n,onChange:function(e){return s(e.target.value)}}),Object(O.jsxs)("div",{className:"result-type-list",children:[Object(O.jsxs)("span",{onClick:function(){return b(c.days)},children:[Object(O.jsx)("input",{type:"radio",value:c.days,name:"timeType",checked:d===c.days})," in days"]}),Object(O.jsxs)("span",{onClick:function(){return b(c.hours)},children:[Object(O.jsx)("input",{type:"radio",value:c.hours,name:"timeType",checked:d===c.hours})," in hours"]}),Object(O.jsxs)("span",{onClick:function(){return b(c.minutes)},children:[Object(O.jsx)("input",{type:"radio",value:c.minutes,name:"timeType",checked:d===c.minutes})," in mins"]}),Object(O.jsxs)("span",{onClick:function(){return b(c.seconds)},children:[Object(O.jsx)("input",{type:"radio",value:c.seconds,name:"timeType",checked:d===c.seconds})," in secs"]})]}),Object(O.jsx)("table",{className:"calc-input-board",children:Object(O.jsxs)("tbody",{children:["calc"===E?Object(O.jsx)(x,{addCharacter:function(e){return s(n+e)}}):Object(O.jsx)(N,{}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"keypad-button is-command",colSpan:2,onClick:F,children:"Submit"}),Object(O.jsx)("td",{className:"keypad-button is-command",onClick:function(){s("")},children:"C"}),Object(O.jsx)("td",{className:"keypad-button is-command",onClick:function(){return w(!S)},children:Object(O.jsx)(l.a,{})})]})]})})]})}),Object(O.jsx)("div",{className:"history-frame ".concat(S?"should-show-history":""),children:Object(O.jsx)(p,{setHistInput:function(e){return s(e)},equationsHistory:M})}),Object(O.jsx)("span",{className:"error-popup ".concat(v?"should-show-error":""),children:v})]})}n(81);function S(){var e=localStorage.getItem("user-mode"),t=Object(r.useState)(e||"light-mode"),n=Object(u.a)(t,2),c=n[0],a=n[1];return Object(O.jsx)("div",{className:c,children:Object(O.jsx)("div",{className:"landing-page",children:Object(O.jsxs)("div",{className:"calc-frame",children:[Object(O.jsx)(g,{}),Object(O.jsx)("button",{className:"mode-button",type:"button",onClick:function(){return function(){var e="light-mode"===c?"dark-mode":"light-mode";a(e),localStorage.setItem("user-mode",e)}()},children:"light-mode"===c?Object(O.jsx)(l.c,{className:"light-mode-icon"}):Object(O.jsx)(l.b,{className:"dark-mode-icon"})})]})})})}n(82);var w=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(S,{})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};o.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),A()}},[[84,1,2]]]);
//# sourceMappingURL=main.3ed62b86.chunk.js.map