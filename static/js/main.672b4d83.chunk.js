(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{13:function(e,a,t){},21:function(e,a,t){e.exports=t(47)},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(14),i=t.n(s),m=t(3),c=t.n(m),o=t(15),l=t(16),u=t(17),d=t(20),p=t(19),v=t(18),g=t.n(v),y=t(2),E=t.n(y);t(13),t(46);function _(e){var a=e.year,t=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"posterimg"},r.a.createElement("img",{src:s,alt:t,title:t})),r.a.createElement("td",{className:"data"},r.a.createElement("div",{className:"movie__data"},r.a.createElement("p",{className:"movie__title"},t),r.a.createElement("p",{className:"movie__year"},a),r.a.createElement("ul",{className:"genres"},i.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n)))))))}_.prototype={id:E.a.number.isRequired,year:E.a.number.isRequired,title:E.a.string.isRequired,summary:E.a.string.isRequired,poster:E.a.string.isRequired,genres:E.a.arrayOf(E.a.string).isRequired};var f=_,N=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(o.a)(c.a.mark((function a(){var t,n;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=a.sent,n=t.data.data.movies,console.log(n),e.setState({movies:n,isLoading:!1});case 6:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(f,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component);i.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.672b4d83.chunk.js.map