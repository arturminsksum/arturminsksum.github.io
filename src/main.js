import "./main.scss";
import example from "./example.json";

const API = "https://newsapi.org/v2";
const apiKey = "5df48f0ee1184466b3bd5a825d888184";

const button = document.getElementById("show-news");

button.addEventListener("click", () => {
  import(/* webpackChunkName: "app" */ "./app").then(module => {
    const App = module.default;
    const app = new App(API, apiKey);
    app.init();
    document.body.removeChild(document.getElementById("load"));
  });
});

console.log(example);
