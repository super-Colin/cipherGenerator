(this["webpackJsonpcipher-generator"]=this["webpackJsonpcipher-generator"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),i=c(4),o=c.n(i),a=(c(10),c.p,c(11),c(1)),r=c(5),h=c(0),O=function(){var e=Object(s.useState)({textToEncode:"",textToDecode:"",shiftOptions_encodeOrDecode:1,shiftOptions_leftOrRight:1,shiftOptions_alphabet:"lowercase",shiftOptions_shiftAmount:3}),t=Object(r.a)(e,2),c=t[0],n=t[1],i=function(e,t){var c=123,s="",n="";switch(t.alphabet){case"lowerAndUpperCaseAlphabetWithSymbols":n=32;case"lowercase":default:n=97}return e.split("").forEach((function(e){var i="";i=e===e.toLowerCase();var o=e.toLowerCase().charCodeAt(0),a=0;if(o>=c||o<n)a=o;else{var r=t.shiftAmount*t.leftOrRight*t.encodeOrDecode+o;r<=n?(a=r-n+122,console.log("shiftedCharCode < slicePoint: ".concat(r," < ").concat(o," new char code: ").concat(a))):r>=c?(a=n+(r-c),console.log("shiftedCharCode > charCodeCutOff: ".concat(n," + ").concat(r-c," = ").concat(a))):a=r}var h=String.fromCharCode(a);i||(h=h.toUpperCase()),s+=h})),s},o=function(){var e={encodeOrDecode:c.shiftOptions_encodeOrDecode,leftOrRight:c.shiftOptions_leftOrRight,alphabet:c.shiftOptions_alphabet,shiftAmount:c.shiftOptions_shiftAmount};return console.log("shiftOptions: ",e),e};return Object(h.jsxs)("div",{className:"caesarCipher_container",children:[Object(h.jsxs)("div",{className:"encode",children:[Object(h.jsx)("h1",{className:"caesarCipher_title",children:"Encode"}),Object(h.jsx)("textarea",{className:"caesarCipher_textInput",onFocus:function(){n(Object(a.a)(Object(a.a)({},c),{},{shiftOptions_encodeOrDecode:1}))},onChange:function(e){var t=o(),s=i(e.target.value,t);n(Object(a.a)(Object(a.a)({},c),{},{textToEncode:e.target.value,textToDecode:s}))},value:c.textToEncode,maxLength:"100"})]}),Object(h.jsxs)("div",{className:"options",children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{className:"caesarCipher_title",children:"Options"}),Object(h.jsxs)("div",{className:"caesarCipher_options-adjustments",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Shift Amount"}),Object(h.jsx)("input",{type:"range",min:"1",max:"9",value:c.shiftOptions_shiftAmount,onChange:function(e){n(Object(a.a)(Object(a.a)({},c),{},{shiftOptions_shiftAmount:e.target.value}))}}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:c.shiftOptions_shiftAmount})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Left or Right"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"checkbox",value:"left",name:"left",checked:c.shiftOptions_leftOrRight-1,onChange:function(){n(Object(a.a)(Object(a.a)({},c),{},{shiftOptions_leftOrRight:-1}))}}),Object(h.jsx)("span",{children:"Left"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"checkbox",value:"right",name:"right",checked:c.shiftOptions_leftOrRight+1,onChange:function(){n(Object(a.a)(Object(a.a)({},c),{},{shiftOptions_leftOrRight:1}))}}),Object(h.jsx)("span",{children:"Right"})]})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Shift Amount: ",c.shiftOptions_shiftAmount]}),Object(h.jsxs)("p",{children:[" Left or Right: ",c.shiftOptions_leftOrRight+1?"Right":"Left"]}),Object(h.jsxs)("p",{children:[" Decode or Encode: ",c.shiftOptions_encodeOrDecode+1?"Encode":"Decode"]})]}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:"decode",children:[Object(h.jsx)("h1",{className:"caesarCipher_title",children:"Decode"}),Object(h.jsx)("textarea",{className:"caesarCipher_textInput",onFocus:function(){n(Object(a.a)(Object(a.a)({},c),{},{shiftOptions_encodeOrDecode:-1}))},onChange:function(e){var t=o(),s=i(e.target.value,t);n(Object(a.a)(Object(a.a)({},c),{},{textToEncode:s,textToDecode:e.target.value}))},value:c.textToDecode,maxLength:"100"})]})]})};var j=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(O,{})})};o.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.87bbdfbd.chunk.js.map