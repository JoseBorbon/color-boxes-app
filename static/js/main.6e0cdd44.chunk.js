(this["webpackJsonpcolor-boxes-app"]=this["webpackJsonpcolor-boxes-app"]||[]).push([[0],[,,,,,,,,,,,,,function(s,o,t){},function(s,o,t){},function(s,o,t){},,function(s,o,t){},function(s,o,t){"use strict";t.r(o);var c=t(1),r=t.n(c),e=t(8),l=t.n(e),i=(t(13),t(14),t(3)),h=t(4),p=t(2),a=t(6),n=t(5),j=(t(15),t(0)),u=function(s){Object(a.a)(t,s);var o=Object(n.a)(t);function t(){return Object(i.a)(this,t),o.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return Object(j.jsx)("div",{id:this.props.curColor,style:"square"===this.props.shape?{borderRadius:0,border:"2px solid black"}:{borderRadius:150,border:"2px solid black"},onClick:this.props.click})}}]),t}(c.Component),k=u,b=(t(17),function(s){return Math.floor(Math.random()*s.length)}),d=["red","green","blue","yellow","orange","pink","white","black","purple","magenta","cyan","indigo","teal"],C=function(s){Object(a.a)(t,s);var o=Object(n.a)(t);function t(s){var c;return Object(i.a)(this,t),(c=o.call(this,s)).state={shape:"square"},c.handleClick=c.handleClick.bind(Object(p.a)(c)),c.toggleShape=c.toggleShape.bind(Object(p.a)(c)),c}return Object(h.a)(t,[{key:"handleClick",value:function(s){var o=s.target,t=b(d);o.id=o.id===this.props.colors[t]?this.props.colors[t+1]||this.props.colors[t-1]:this.props.colors[t]}},{key:"toggleShape",value:function(){this.setState((function(s){return"square"===s.shape?{shape:"circle"}:{shape:"square"}}))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Welcome! Click A Box To Change It's Color!"}),Object(j.jsxs)("div",{className:"Color-boxes-container",children:[Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape}),Object(j.jsx)(k,{curColor:this.props.colors[b(this.props.colors)],colors:d,click:this.handleClick,shape:this.state.shape})]}),Object(j.jsx)("button",{onClick:this.toggleShape,children:"circle"===this.state.shape?"Toggle To Squares":"Toggle To Circles"})]})}}]),t}(c.Component);C.defaultProps={colors:d};var O=C;var x=function(){return Object(j.jsx)(O,{})};l.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.6e0cdd44.chunk.js.map