(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{33:function(e,a,t){e.exports=t(66)},38:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(24),i=t.n(s),c=t(9),m=t(7);t(38);var l=function(){return r.a.createElement("div",{className:"aboutCard"},"\uc548\ub155\ud558\uc138\uc694, \uc774 \uc0ac\uc774\ud2b8\ub294 \ub9ac\uc561\ud2b8\ub85c \ub9cc\ub4e0 '\uc601\ud654 \uc815\ubcf4 \uc0ac\uc774\ud2b8' \uc785\ub2c8\ub2e4.")},o=t(11),u=t.n(o),d=t(25),v=t(26),p=t(27),E=t(32),g=t(31),y=t(28),f=t.n(y),b=t(3),N=t.n(b);t(59);function _(e){var a=e.year,t=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"posterimg"},r.a.createElement("img",{src:s,alt:t,title:t})),r.a.createElement("td",{className:"data"},r.a.createElement("div",{className:"movie__data"},r.a.createElement("p",{className:"movie__title"},t),r.a.createElement("p",{className:"movie__year"},a),r.a.createElement("ul",{className:"genres"},i.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n)))))))}_.prototype={id:N.a.number.isRequired,year:N.a.number.isRequired,title:N.a.string.isRequired,summary:N.a.string.isRequired,poster:N.a.string.isRequired,genres:N.a.arrayOf(N.a.string).isRequired};var h=_,k=(t(60),function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function a(){var t,n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating&limit=5 0");case 2:t=a.sent,n=t.data.data.movies,console.log(n),e.setState({movies:n,isLoading:!1});case 6:case"end":return a.stop()}}),a)}))),e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));t(61);var j=function(){return r.a.createElement("div",{className:"Navi"},r.a.createElement(c.b,{className:"link",to:"/"},"Home"),r.a.createElement("br",null),r.a.createElement(c.b,{className:"link",to:"/about"},"About"))};t(65);var q=function(){return r.a.createElement(c.a,null,r.a.createElement(j,null),r.a.createElement(m.a,{path:"/",exact:!0,component:k}),r.a.createElement(m.a,{path:"/about",component:l}))};i.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.88472431.chunk.js.map