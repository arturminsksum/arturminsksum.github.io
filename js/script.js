"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("babel-polyfill");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App(API, apiKey) {
    _classCallCheck(this, App);

    this.API = API;
    this.apiKey = apiKey;
    this.sourcesUrl = "sources";
    this.sourcesParams = "language=en";
    this.sourcesId = "sources-list";
    this.articlesUrl = "top-headlines";
    this.articlesParams = "sources=the-next-web,the-verge";
    this.articlesId = "articles-list";
  }

  _createClass(App, [{
    key: "generateUrl",
    value: function generateUrl(type, params) {
      return this.API + "/" + type + "?" + params + "&apiKey=" + this.apiKey;
    }
  }, {
    key: "request",
    value: function request(url) {
      return fetch(url).catch(function (error) {
        return new Error(error);
      });
    }
  }, {
    key: "insertHTML",
    value: function insertHTML(markup, id) {
      var container = document.getElementById(id);
      container.innerHTML = markup;
    }
  }, {
    key: "renderSourcesList",
    value: function renderSourcesList(data, id) {
      var markup = "\n\t\t" + data.map(function (item) {
        var id = item.id,
            name = item.name;

        return "<li><a href=\"javascript:void(0)\" data-id=\"" + id + "\">" + name + "</a></li>";
      }).join("") + "\n    ";
      this.insertHTML(markup, id);
    }

    // get news channels

  }, {
    key: "getSources",
    value: function getSources(id) {
      var _this = this;

      this.request(this.generateUrl(this.sourcesUrl, this.sourcesParams)).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.renderSourcesList(data.sources, id);
      }).catch(function (error) {
        return new Error(error);
      });
    }
  }, {
    key: "renderArticlesList",
    value: function renderArticlesList(data, id) {
      var markup = "\n\t\t" + data.map(function (item, index) {
        var image = item.urlToImage,
            title = item.title,
            link = item.url,
            text = item.description,
            publishedAt = item.publishedAt;

        var date = publishedAt.slice(0, 10);
        return "\n          " + (index % 3 ? "" : '<div class="columns">') + "\n            <div class=\"column is-one-third\">\n              <div class=\"card\">\n                <div class=\"card-image\">\n                  <figure class=\"image is-4by3\">\n                    <img src=\"" + (image ? image : "https://bulma.io/images/placeholders/1280x960.png") + "\" alt=\"" + title + "\">\n                  </figure>\n                </div>\n                <div class=\"card-content\">\n                  <a href=\"" + link + "\" class=\"media\">\n                    <p class=\"title is-4\">" + title + "</p>\n                  </a>\n\n                  <div class=\"content\">\n                    " + text + "\n                    <br>\n                    <br>\n                    <i>Date: <time datetime=\"" + date + "\">" + date + "</time></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          " + ((index + 1) % 3 ? "" : "</div>") + "\n        ";
      }).join("") + "\n\t  ";
      this.insertHTML(markup, id);
    }

    // get articles

  }, {
    key: "getArticles",
    value: function getArticles(id) {
      var _this2 = this;

      this.request(this.generateUrl(this.articlesUrl, this.articlesParams)).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.renderArticlesList(data.articles, id);
      }).catch(function (error) {
        return new Error(error);
      });
    }
  }, {
    key: "changeArticlesUrlParams",
    value: function changeArticlesUrlParams(url, params) {
      this.articlesUrl = url;
      this.articlesParams = params;
    }

    // load Channel Articles

  }, {
    key: "loadChannelArticles",
    value: function loadChannelArticles() {
      var _this3 = this;

      document.addEventListener("click", function (e) {
        if (e.target.dataset.id) {
          _this3.changeArticlesUrlParams("everything", "sources=" + e.target.dataset.id);
          _this3.getArticles(_this3.articlesId);
        }
      });
    }

    // initialize loading content

  }, {
    key: "init",
    value: function init() {
      // get news channels
      this.getSources(this.sourcesId);
      // get default articles
      this.getArticles(this.articlesId);
      // load Channel Articles
      this.loadChannelArticles();
    }
  }, {
    key: "getSourcesDefaults",
    get: function get() {
      console.log("this.sourcesUrl: " + this.sourcesUrl + "\n", "this.sourcesParams: " + this.sourcesParams + "\n", "this.sourcesId: " + this.sourcesId);
    }
  }, {
    key: "changeSourcesDefaults",
    set: function set(value) {
      var _value = _slicedToArray(value, 3);

      var _value$ = _value[0];
      this.sourcesUrl = _value$ === undefined ? this.sourcesId : _value$;
      var _value$2 = _value[1];
      this.sourcesParams = _value$2 === undefined ? this.sourcesId : _value$2;
      var _value$3 = _value[2];
      this.sourcesId = _value$3 === undefined ? this.sourcesId : _value$3;
    }
  }, {
    key: "getArticlesDefaults",
    get: function get() {
      console.log("this.articlesUrl: " + this.articlesUrl + "\n", "this.articlesParams: " + this.articlesParams + "\n", "this.articlesId: " + this.articlesId);
    }
  }, {
    key: "changeArticlesDefaults",
    set: function set(value) {
      var _value2 = _slicedToArray(value, 3);

      var _value2$ = _value2[0];
      this.articlesUrl = _value2$ === undefined ? this.articlesUrl : _value2$;
      var _value2$2 = _value2[1];
      this.articlesParams = _value2$2 === undefined ? this.articlesParams : _value2$2;
      var _value2$3 = _value2[2];
      this.articlesId = _value2$3 === undefined ? this.articlesId : _value2$3;
    }
  }]);

  return App;
}();

var API = "https://newsapi.org/v2";
var apiKey = "5df48f0ee1184466b3bd5a825d888184";

var app = new App(API, apiKey);
app.init();
app.getSourcesDefaults;
app.getSourcesDefaults;