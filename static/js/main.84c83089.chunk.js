(this["webpackJsonpcolor-boxes-app"]=this["webpackJsonpcolor-boxes-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},,function(e,t,o){},function(e,t,o){"use strict";o.r(t);var r=o(1),n=o.n(r),s=o(8),c=o.n(s),a=(o(13),o(14),o(3)),i=o(4),l=o(2),p=o(6),u=o(5),h=(o(15),o(0)),b=function(e){Object(p.a)(o,e);var t=Object(u.a)(o);function o(){return Object(a.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return Object(h.jsx)("div",{id:this.props.curColor,style:"square"===this.props.shape?{borderRadius:0,border:"2px solid black"}:{borderRadius:150,border:"2px solid black"},onClick:this.props.click})}}]),o}(r.Component),d=b,j=(o(17),function(e){return Math.floor(Math.random()*e.length)}),g=["red","green","blue","yellow","orange","pink","white","black","purple","magenta","cyan","indigo","teal"],f=function(e){Object(p.a)(o,e);var t=Object(u.a)(o);function o(e){var r;return Object(a.a)(this,o),(r=t.call(this,e)).state={shape:"square"},r.handleClick=r.handleClick.bind(Object(l.a)(r)),r.toggleShape=r.toggleShape.bind(Object(l.a)(r)),r}return Object(i.a)(o,[{key:"handleClick",value:function(e){var t=e.target,o=j(g);t.id=t.id===this.props.colors[o]?this.props.colors[o+1]||this.props.colors[o-1]:this.props.colors[o]}},{key:"toggleShape",value:function(){this.setState((function(e){return"square"===e.shape?{shape:"circle"}:{shape:"square"}}))}},{key:"render",value:function(){var e=this,t=Array.from({length:this.props.numBoxes}).map((function(){return Object(h.jsx)(d,{curColor:e.props.colors[j(e.props.colors)],colors:g,click:e.handleClick,shape:e.state.shape})}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Welcome! Click A Box To Change It's Color!"}),Object(h.jsx)("div",{className:"Color-boxes-container",children:t}),Object(h.jsx)("button",{onClick:this.toggleShape,children:"circle"===this.state.shape?"Toggle To Squares":"Toggle To Circles"})]})}}]),o}(r.Component);f.defaultProps={colors:g,numBoxes:18};var k=f;var O=function(){return Object(h.jsx)(k,{})};c.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.84c83089.chunk.js.map