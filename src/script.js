import App from "./app.js";

const API = "https://newsapi.org/v2";
const apiKey = "5df48f0ee1184466b3bd5a825d888184";

const app = new App(API, apiKey);
app.init();
app.getSourcesDefaults;
app.getSourcesDefaults;

if (module.hot) {
  module.hot.accept("./app.js", function() {
    console.log("hot-reload");
    app.init();
  });
}
