(this.webpackJsonppersonal=this.webpackJsonppersonal||[]).push([[0],{29:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),a=s(16),n=s.n(a),r=(s(29),s(30),s(14)),l=s(8),d=s(4),o=s(5),j=s(7),b=s(6),h=s(0),m=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark",children:[Object(h.jsx)(r.b,{to:"/",className:"navbar-brand",children:"Mi Proyecto"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:Object(h.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(r.b,{to:"/",className:"nav-link",children:"Home "})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(r.b,{to:"/nosotros",className:"nav-link",children:"Nosotros "})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(r.b,{to:"/servicios",className:"nav-link",children:"Servicios "})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(r.b,{to:"/contacto",className:"nav-link",children:"Contacto "})})]})})]})}}]),s}(i.a.Component),x=m,u=s(15),O=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(u.a,{children:[Object(h.jsxs)(u.a.Item,{children:[Object(h.jsx)("img",{className:"d-block w-100",src:"https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmPB2bMY9tfHLpDeAoYTdN8gH7rpmzbFfgX3nvZayUG95e/Konstant%20Third%20party%20Banners.png",alt:"First slide"}),Object(h.jsxs)(u.a.Caption,{children:[Object(h.jsx)("h3",{children:"Primer slide "}),Object(h.jsx)("p",{children:"Breve resumen de la imagen"})]})]}),Object(h.jsxs)(u.a.Item,{children:[Object(h.jsx)("img",{className:"d-block w-100",src:"https://www.biz4solutions.com/blog/wp-content/uploads/2020/09/banner_3_Sep_20.jpg",alt:"Second slide"}),Object(h.jsxs)(u.a.Caption,{children:[Object(h.jsx)("h3",{children:"Second slide label"}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(h.jsxs)(u.a.Item,{children:[Object(h.jsx)("img",{className:"d-block w-100",src:"https://cdn-media-1.freecodecamp.org/images/1*I9VVnu-qsD51IkCrK5Wa5A.png",alt:"Third slide"}),Object(h.jsxs)(u.a.Caption,{children:[Object(h.jsx)("h3",{children:"Third slide label"}),Object(h.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})})}}]),s}(i.a.Component),p=O,v=s(24);function g(e){return Object(h.jsx)("button",{className:"square",onClick:function(){return e.onClick()},children:e.value})}var f=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},c}return Object(o.a)(s,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();w(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return Object(h.jsx)(g,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=w(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"status",style:{marginTop:"50px"},children:e}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})})}}]),s}(i.a.Component),N=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container servicios",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-lg-3",children:[Object(h.jsxs)("svg",{className:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"https://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: 140x140",children:[Object(h.jsx)("title",{children:"Player 1"}),Object(h.jsx)("rect",{width:"100%",height:"100%",fill:"#477"}),Object(h.jsx)("text",{x:"50%",y:"50%",fill:"#111",dy:".23em",children:"X"})]}),Object(h.jsx)("h2",{children:"Jugador 1"}),Object(h.jsx)("p",{children:"El jugador 1 inicia con la X en todas las partidas"}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{className:"btn btn-secondary",href:"#",role:"button",children:"Leer m\xe1s \xbb"})})]}),Object(h.jsx)("div",{className:"col-lg-6",children:Object(h.jsxs)("div",{className:"game text-center",children:[Object(h.jsx)("div",{className:"game-board",children:Object(h.jsx)(f,{})}),Object(h.jsxs)("div",{className:"game-info",children:[Object(h.jsx)("div",{}),Object(h.jsx)("ol",{})]})]})}),Object(h.jsxs)("div",{className:"col-lg-3 justify-content-center",children:[Object(h.jsxs)("svg",{className:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"https://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: 140x140",children:[Object(h.jsx)("title",{children:"Player 2"}),Object(h.jsx)("rect",{width:"100%",height:"100%",fill:"#999"}),Object(h.jsx)("text",{x:"50%",y:"50%",fill:"#111",dy:".3em",children:"0"})]}),Object(h.jsx)("h2",{children:"Jugador 2"}),Object(h.jsx)("p",{children:"El jugador 2 ser\xe1 el siguiente en el turno y siempre ser\xe1 el O."}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{className:"btn btn-secondary",href:"#",role:"button",children:"Leer m\xe1s \xbb"})})]})]})})}}]),s}(i.a.Component);function w(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=0;s<t.length;s++){var c=Object(v.a)(t[s],3),i=c[0],a=c[1],n=c[2];if(e[i]&&e[i]===e[a]&&e[i]===e[n])return e[i]}return null}var y=N,S=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsx)("footer",{className:"container",children:Object(h.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," Personal. \xb7 ",Object(h.jsx)("a",{href:"#",children:"Pol\xedtica de Privacidad"})," \xb7 ",Object(h.jsx)("a",{href:"#",children:"T\xe9rminos"})]})})}}]),s}(i.a.Component),k=S,C=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{}),Object(h.jsx)("main",{role:"main",className:"flex-shrink-0 mt-5",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(p,{}),Object(h.jsx)(y,{}),Object(h.jsx)("hr",{className:"featurette-divider"})]})}),Object(h.jsx)(k,{})]})}}]),s}(i.a.Component),M=C,T=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"jumbotron",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"display-3",children:"Nosotros "}),Object(h.jsxs)("p",{children:["Integrantes de una comunidad de desarrollo.",Object(h.jsx)("br",{}),"Solo compartiendo el conocimiento se puede tener un mejor futuro."]}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{className:"btn btn-primary btn-lg",href:"https://itesm.mx",target:"_blank",role:"button",children:"Visitar Web"})})]})})}}]),s}(i.a.Component),q=T,P=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h2",{children:"Objetivo"}),Object(h.jsx)("p",{children:"Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. "}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{className:"btn btn-secondary",href:"#",role:"button",children:"Leer m\xe1s \xbb"})})]}),Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h2",{children:"Misi\xf3n"}),Object(h.jsx)("p",{children:"Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. "}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{className:"btn btn-secondary",href:"#",role:"button",children:"Leer m\xe1s \xbb"})})]}),Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h2",{children:"Visi\xf3n"}),Object(h.jsx)("p",{children:"Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo."}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{className:"btn btn-secondary",href:"#",role:"button",children:"Leer m\xe1s \xbb"})})]})]}),Object(h.jsx)("hr",{})]})}}]),s}(i.a.Component),F=P,L=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{}),Object(h.jsxs)("main",{role:"main",className:"flex-shrink-0 mt-5",children:[Object(h.jsx)(q,{}),Object(h.jsx)(F,{})]}),Object(h.jsx)(k,{})]})}}]),s}(i.a.Component),A=L,Y=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{}),Object(h.jsxs)("main",{role:"main",className:"flex-shrink-0 mt-5",children:[Object(h.jsx)("section",{className:"text-center",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"jumbotron-heading",children:"Servicios "}),Object(h.jsx)("p",{className:"lead text-muted",children:"A continuaci\xf3n los servicios"})]})}),Object(h.jsx)("div",{className:"album py-5 bg-light",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(h.jsxs)("svg",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",xmlns:"https://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: Servicio 1",children:[Object(h.jsx)("title",{children:"Servicio 1"}),Object(h.jsx)("rect",{width:"100%",height:"100%",fill:"#55595c"}),Object(h.jsx)("text",{x:"50%",y:"50%",fill:"#eceeef",dy:".3em",children:"Servicio 1"})]}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{className:"card-text",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),Object(h.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(h.jsx)("div",{className:"btn-group",children:Object(h.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-secondary",children:"Leer"})})})]})]})}),Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(h.jsxs)("svg",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",xmlns:"https://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: Servicio 2",children:[Object(h.jsx)("title",{children:"Servicio 2"}),Object(h.jsx)("rect",{width:"100%",height:"100%",fill:"#55595c"}),Object(h.jsx)("text",{x:"50%",y:"50%",fill:"#eceeef",dy:".3em",children:"Servicio 2"})]}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{className:"card-text",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),Object(h.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(h.jsx)("div",{className:"btn-group",children:Object(h.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-secondary",children:"Leer"})})})]})]})}),Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(h.jsxs)("svg",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",xmlns:"https://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: Servicio 3",children:[Object(h.jsx)("title",{children:"Servicio 3"}),Object(h.jsx)("rect",{width:"100%",height:"100%",fill:"#55595c"}),Object(h.jsx)("text",{x:"50%",y:"50%",fill:"#eceeef",dy:".3em",children:"Servicio 3"})]}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{className:"card-text",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),Object(h.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(h.jsx)("div",{className:"btn-group",children:Object(h.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-secondary",children:"Leer"})})})]})]})}),Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(h.jsxs)("svg",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",xmlns:"https://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: Servicio 4",children:[Object(h.jsx)("title",{children:"Servicio 4"}),Object(h.jsx)("rect",{width:"100%",height:"100%",fill:"#55595c"}),Object(h.jsx)("text",{x:"50%",y:"50%",fill:"#eceeef",dy:".3em",children:"Servicio 4"})]}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{className:"card-text",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),Object(h.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(h.jsx)("div",{className:"btn-group",children:Object(h.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-secondary",children:"Leer"})})})]})]})}),Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(h.jsxs)("svg",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",xmlns:"https://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: Servicio 5",children:[Object(h.jsx)("title",{children:"Servicio 5"}),Object(h.jsx)("rect",{width:"100%",height:"100%",fill:"#55595c"}),Object(h.jsx)("text",{x:"50%",y:"50%",fill:"#eceeef",dy:".3em",children:"Servicio 5"})]}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{className:"card-text",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),Object(h.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(h.jsx)("div",{className:"btn-group",children:Object(h.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-secondary",children:"Leer"})})})]})]})}),Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(h.jsxs)("svg",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",xmlns:"https://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: Servicio 6",children:[Object(h.jsx)("title",{children:"Servicio 6"}),Object(h.jsx)("rect",{width:"100%",height:"100%",fill:"#55595c"}),Object(h.jsx)("text",{x:"50%",y:"50%",fill:"#eceeef",dy:".3em",children:"Servicio 6"})]}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{className:"card-text",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),Object(h.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(h.jsx)("div",{className:"btn-group",children:Object(h.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-secondary",children:"Leer"})})})]})]})}),Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(h.jsxs)("svg",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",xmlns:"https://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: Servicio 7",children:[Object(h.jsx)("title",{children:"Servicio 7"}),Object(h.jsx)("rect",{width:"100%",height:"100%",fill:"#55595c"}),Object(h.jsx)("text",{x:"50%",y:"50%",fill:"#eceeef",dy:".3em",children:"Servicio 7"})]}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{className:"card-text",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),Object(h.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(h.jsx)("div",{className:"btn-group",children:Object(h.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-secondary",children:"Leer"})})})]})]})}),Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(h.jsxs)("svg",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",xmlns:"https://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: Servicio 8",children:[Object(h.jsx)("title",{children:"Servicio 8"}),Object(h.jsx)("rect",{width:"100%",height:"100%",fill:"#55595c"}),Object(h.jsx)("text",{x:"50%",y:"50%",fill:"#eceeef",dy:".3em",children:"Servicio 8"})]}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{className:"card-text",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),Object(h.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(h.jsx)("div",{className:"btn-group",children:Object(h.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-secondary",children:"Leer"})})})]})]})}),Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(h.jsxs)("svg",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",xmlns:"https://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: Servicio 9",children:[Object(h.jsx)("title",{children:"Servicio 9"}),Object(h.jsx)("rect",{width:"100%",height:"100%",fill:"#55595c"}),Object(h.jsx)("text",{x:"50%",y:"50%",fill:"#eceeef",dy:".3em",children:"Servicio 9"})]}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{className:"card-text",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),Object(h.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(h.jsx)("div",{className:"btn-group",children:Object(h.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-secondary",children:"Leer"})})})]})]})})]})})})]}),Object(h.jsx)(k,{})]})}}]),s}(i.a.Component),I=Y,R=(s(37),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:"mb-5",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"nya",className:"negrita",children:"Nombres y Apellidos"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"nya",required:!0})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"email",className:"negrita",children:"Email"}),Object(h.jsx)("input",{type:"email",className:"form-control",id:"email",required:!0})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"asunto",className:"negrita",children:"Asunto"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"asunto",required:!0})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"mensaje",className:"negrita",children:"Mensaje"}),Object(h.jsx)("textarea",{className:"form-control",id:"mensaje",required:!0})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Enviar"})]})}}]),s}(i.a.Component)),D=R,E=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"embed-responsive embed-responsive-4by3",children:Object(h.jsx)("iframe",{className:"embed-responsive-item",src:"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7193.18964791762!2d-100.2939174!3d25.6515697!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1634190949580!5m2!1ses-419!2smx",width:"600",height:"450"})})}}]),s}(i.a.Component),B=E,V=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{}),Object(h.jsx)("main",{role:"main",className:"flex-shrink-0 mt-5",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"mb-5",children:"Contacto"}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)(D,{})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)(B,{})})]})]})}),Object(h.jsx)(k,{})]})}}]),s}(i.a.Component),X=V;var J=function(){return Object(h.jsx)(r.a,{children:Object(h.jsx)("div",{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",component:M}),Object(h.jsx)(l.a,{path:"/nosotros",component:A}),Object(h.jsx)(l.a,{path:"/servicios",component:I}),Object(h.jsx)(l.a,{path:"/contacto",component:X})]})})})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,40)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,n=t.getTTFB;s(e),c(e),i(e),a(e),n(e)}))};n.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root")),_()}},[[38,1,2]]]);
//# sourceMappingURL=main.0d03d2c0.chunk.js.map