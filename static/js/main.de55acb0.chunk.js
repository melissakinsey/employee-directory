(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(5),s=n.n(i),l=(n(16),n(6)),a=n(7),o=n(11),j=n(8),u=n(0),d=function(e){var t=e.filter,n=e.setFilter;return Object(u.jsx)("input",{style:{width:"20rem",background:"#F2F1F9",border:"none",padding:"0.5rem"},value:t,placeholder:"search...",onChange:n})},b=n.p+"static/media/Epidigm-logo.4cea20b6.png",h=function(e){var t=e.filter,n=e.setFilter;return Object(u.jsx)("nav",{className:"navbar sticky-top navbar-light bg-light",children:Object(u.jsxs)("div",{className:"container-fluid d-flex justify-content-between",children:[Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[Object(u.jsx)("img",{height:"80",src:b,alt:"logo"}),Object(u.jsx)("div",{className:"mx-2",children:"Employee Directory"})]}),Object(u.jsx)(d,{filter:t,setFilter:n})]})})},m=n(9),f=n(10),O=function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{scope:"row",children:e.number+1}),Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:e.item.picture.thumbnail,alt:"Employee's badge photo"})}),Object(u.jsx)("td",{children:e.item.name.first}),Object(u.jsx)("td",{children:e.item.name.last}),Object(u.jsx)("td",{children:e.item.gender})]})};var x=function(e){var t=Object(r.useState)([]),n=Object(f.a)(t,2),c=n[0],i=n[1];function s(e,t){var n=Object(m.a)(c);n.sort((function(n,r){return n[e][t].localeCompare(r[e][t])})),console.log(n),i(n)}return Object(r.useEffect)((function(){i(e.items)}),[e.items]),Object(u.jsxs)("table",{className:"table table-striped",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"#"}),Object(u.jsx)("th",{children:"Badge"}),Object(u.jsx)("th",{scope:"col",onClick:function(){return s("name","first")},children:"First"}),Object(u.jsx)("th",{scope:"col",onClick:function(){return s("name","last")},children:"Last"}),Object(u.jsx)("th",{scope:"col",children:"Gender"})]})}),Object(u.jsx)("tbody",{children:c.map((function(e,t){return Object(u.jsx)(O,{item:e,number:t},e.login.uuid)}))})]})},p=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).setFilter=function(t){return e.setState({filter:t.target.value})},e.state={items:[],filter:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api?results=10").then((function(e){return e.json()})).then((function(t){return e.setState({items:t.results})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.items,r=t.filter;return this.state.filter&&(n=n.filter((function(t){return t.name.first.toLowerCase().includes(e.state.filter.toLowerCase())||t.name.last.toLowerCase().includes(e.state.filter.toLowerCase())}))),Object(u.jsxs)("div",{children:[Object(u.jsx)(h,{filter:r,setFilter:this.setFilter}),Object(u.jsx)(x,{items:n})]})}}]),n}(c.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.de55acb0.chunk.js.map