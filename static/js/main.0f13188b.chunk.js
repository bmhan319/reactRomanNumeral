(window["webpackJsonproman-numeral"]=window["webpackJsonproman-numeral"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),m=a.n(o),l=(a(13),a(1)),i=a(2),c=a(4),s=a(3),u=a(5),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={westernNum:"0"},a.changeValue=function(e){a.setState({westernNum:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.romanConvert(a.state.westernNum)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-container"},r.a.createElement("form",{className:"form1",id:"form1",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"digits",className:"digits-label"},"Please enter a number: "),r.a.createElement("input",{type:"number",name:"digits",id:"digits",className:"digits-text",min:"0",max:"10000",placeholder:"Up to 10,000",onChange:this.changeValue})),r.a.createElement("button",{className:"digits-button",type:"button",form:"form1",onClick:this.handleSubmit},"Submit"))}}]),t}(n.Component),p=function(e){var t=e.westNum,a=e.romanNum;return r.a.createElement("div",{className:"output-container"},r.a.createElement("p",{className:"modernNumber"},"For the number: ",t),r.a.createElement("p",{className:"result"},"The Roman Numeral is: ",r.a.createElement("span",{className:"result-roman"},a)))},b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={numValue:10,romanValue:"X"},a.romanConvert=function(e){var t,n=[1e4,9e3,5e3,1e3,900,500,400,100,90,50,40,10,9,5,4,1],r=["X","MX","V","M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"],o=[],m=!0,l=e;if("0"===e)return alert("Please input a valid number");for(;m;)for(var i=0;i<n.length;i++)if(e>=n[i]){o.push(r[i]),0===(e-=n[i])&&(m=!1);break}t=o.join(""),a.setState({romanValue:t,numValue:l})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"roman-container"},r.a.createElement("h1",{className:"roman-title"},"Roman Numeral Converter"),r.a.createElement("p",{className:"roman-text"},"Enter a number to convert it to roman numerals.")),r.a.createElement(h,{romanConvert:this.romanConvert}),r.a.createElement(p,{westNum:this.state.numValue,romanNum:this.state.romanValue}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0f13188b.chunk.js.map