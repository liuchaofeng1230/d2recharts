var d2recharts=function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};return t.m=e,t.c=a,t.p="/",t(0)}([function(e,t,a){"use strict";var n=a(2),r=a(3),d=a(4);a(5);var c={data:[{genre:"Sports",sold:275,price:30},{genre:"Strategy",sold:115,price:100},{genre:"Action",sold:120,price:130},{genre:"Shooter",sold:350,price:120},{genre:"Other",sold:150,price:106}],schema:[{name:"genre",comments:"分类"},{name:"sold",comments:"销量"},{name:"xxx",comments:"yyy"}]},o=Date.now(),i="none";d.render(r.createElement("div",null,r.createElement(n.Bar,{padding:i,data:c}),r.createElement(n.Line,{padding:i,data:c}),r.createElement(n.Scatter,{padding:i,data:c}),r.createElement(n.Funnel,{padding:i,data:c}),r.createElement(n.Gauge,{padding:i,data:c}),r.createElement(n.Indicator,{padding:i,data:c,height:"auto"}),r.createElement(n.Pie,{padding:i,data:c}),r.createElement(n.Radar,{padding:i,data:c}),r.createElement(n.Smart,{padding:i,data:c})),document.getElementById("canvas")),console.log(Date.now()-o)},,function(e,t){e.exports=d2recharts},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t){}]);