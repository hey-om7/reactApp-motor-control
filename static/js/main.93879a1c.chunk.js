(this["webpackJsonpmotor-on"]=this["webpackJsonpmotor-on"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var o=e(1),c=e.n(o),s=e(7),i=e.n(s),r=(e(12),e(2)),a=e(3),l=e(5),u=e(4),f=e(0),g="https://script.google.com/macros/s/AKfycbzPF4Bc2p7t9H_OL22HSQdtAvUDCQCp4w0VAaTdhPzs8SJRrYGKs2v2jwrqQ4HUtOtS/exec?status=",h=!1,p=function(t){Object(l.a)(e,t);var n=Object(u.a)(e);function e(){var t;return Object(r.a)(this,e),(t=n.call(this)).state={imgUrl:"/images/powerOff.png"},fetch(g+"-1").then((function(t){return t.json()})).then((function(n){t.state.imgUrl="/images/power"+("0"===n.status.toString()?"Off":"On")+".png",t.setState({}),h="0"!==n.status.toString()})),t}return Object(a.a)(e,[{key:"btnClicked",value:function(){var t=this;console.log("clicked"),fetch(g+(h?"0":"1")).then((function(t){return t.json()})).then((function(n){console.log(n),"SUCCESS"===n.status.toString()&&(console.log("hope"),t.state.imgUrl="/images/power"+(h?"Off":"On")+".png",h=!h,console.log(h)),t.setState({})}))}},{key:"render",value:function(){var t=this;return Object(f.jsx)("div",{children:Object(f.jsx)("img",{onClick:function(){t.btnClicked()},className:this.loadStuff,src:this.state.imgUrl,alt:"alla"})})}}]),e}(c.a.Component);c.a.Component,e(14);var j=function(){return Object(f.jsx)("div",{className:"wholeApp",children:Object(f.jsx)(p,{})})},m=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,16)).then((function(n){var e=n.getCLS,o=n.getFID,c=n.getFCP,s=n.getLCP,i=n.getTTFB;e(t),o(t),c(t),s(t),i(t)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(j,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.93879a1c.chunk.js.map