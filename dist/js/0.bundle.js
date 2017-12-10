webpackJsonp([0],{75:function(t,e,r){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){var r=[],s=!0,i=!1,n=void 0;try{for(var a,c=t[Symbol.iterator]();!(s=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);s=!0);}catch(t){i=!0,n=t}finally{try{!s&&c.return&&c.return()}finally{if(i)throw n}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=function(){function t(t,e){for(var r=0;r<e.length;r++){var s=e[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,r,s){return r&&t(e.prototype,r),s&&t(e,s),e}}();r(76);var a=function(){function t(e,r){s(this,t),this.API=e,this.apiKey=r,this.sourcesUrl="sources",this.sourcesParams="language=en",this.sourcesId="sources-list",this.articlesUrl="top-headlines",this.articlesParams="sources=the-next-web,the-verge",this.articlesId="articles-list"}return n(t,[{key:"generateUrl",value:function(t,e){return this.API+"/"+t+"?"+e+"&apiKey="+this.apiKey}},{key:"request",value:function(t){return fetch(t).catch(function(t){return new Error(t)})}},{key:"insertHTML",value:function(t,e){document.getElementById(e).innerHTML=t}},{key:"renderSourcesList",value:function(t,e){var r="\n\t\t"+t.map(function(t){return'<li><a href="javascript:void(0)" data-id="'+t.id+'">'+t.name+"</a></li>"}).join("")+"\n    ";this.insertHTML(r,e)}},{key:"getSources",value:function(t){var e=this;this.request(this.generateUrl(this.sourcesUrl,this.sourcesParams)).then(function(t){return t.json()}).then(function(r){e.renderSourcesList(r.sources,t)}).catch(function(t){return new Error(t)})}},{key:"renderArticlesList",value:function(t,e){var r="\n\t\t"+t.map(function(t,e){var r=t.urlToImage,s=t.title,i=t.url,n=t.description,a=t.publishedAt,c=a.slice(0,10);return"\n          "+(e%3?"":'<div class="columns">')+'\n            <div class="column is-one-third">\n              <div class="card">\n                <div class="card-image">\n                  <figure class="image is-4by3">\n                    <img src="'+(r||"https://bulma.io/images/placeholders/1280x960.png")+'" alt="'+s+'">\n                  </figure>\n                </div>\n                <div class="card-content">\n                  <a href="'+i+'" class="media">\n                    <p class="title is-4">'+s+'</p>\n                  </a>\n\n                  <div class="content">\n                    '+n+'\n                    <br>\n                    <br>\n                    <i>Date: <time datetime="'+c+'">'+c+"</time></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          "+((e+1)%3?"":"</div>")+"\n        "}).join("")+"\n\t  ";this.insertHTML(r,e)}},{key:"getArticles",value:function(t){var e=this;this.request(this.generateUrl(this.articlesUrl,this.articlesParams)).then(function(t){return t.json()}).then(function(r){e.renderArticlesList(r.articles,t)}).catch(function(t){return new Error(t)})}},{key:"changeArticlesUrlParams",value:function(t,e){this.articlesUrl=t,this.articlesParams=e}},{key:"loadChannelArticles",value:function(){var t=this;document.addEventListener("click",function(e){e.target.dataset.id&&(t.changeArticlesUrlParams("everything","sources="+e.target.dataset.id),t.getArticles(t.articlesId))})}},{key:"init",value:function(){this.getSources(this.sourcesId),this.getArticles(this.articlesId),this.loadChannelArticles()}},{key:"getSourcesDefaults",get:function(){console.log("this.sourcesUrl: "+this.sourcesUrl+"\n","this.sourcesParams: "+this.sourcesParams+"\n","this.sourcesId: "+this.sourcesId)}},{key:"changeSourcesDefaults",set:function(t){var e=i(t,3),r=e[0];this.sourcesUrl=void 0===r?this.sourcesId:r;var s=e[1];this.sourcesParams=void 0===s?this.sourcesId:s;var n=e[2];this.sourcesId=void 0===n?this.sourcesId:n}},{key:"getArticlesDefaults",get:function(){console.log("this.articlesUrl: "+this.articlesUrl+"\n","this.articlesParams: "+this.articlesParams+"\n","this.articlesId: "+this.articlesId)}},{key:"changeArticlesDefaults",set:function(t){var e=i(t,3),r=e[0];this.articlesUrl=void 0===r?this.articlesUrl:r;var s=e[1];this.articlesParams=void 0===s?this.articlesParams:s;var n=e[2];this.articlesId=void 0===n?this.articlesId:n}}]),t}();e.default=a},76:function(t,e,r){var s=r(77);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0};i.transform=void 0;r(35)(s,i);s.locals&&(t.exports=s.locals)},77:function(t,e,r){e=t.exports=r(34)(!0),e.push([t.i,".card {\n  height: 100%; }\n","",{version:3,sources:["D:/front-camp/arturminsksum.github.io/src/D:/front-camp/arturminsksum.github.io/src/app.scss"],names:[],mappings:"AAEA;EACE,aAHW,EAIZ",file:"app.scss",sourcesContent:["$height: 100%;\r\n\r\n.card {\r\n  height: $height;\r\n}\r\n"],sourceRoot:""}])}});