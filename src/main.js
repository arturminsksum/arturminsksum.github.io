import './main.scss';
// import example from "./example.json";

const API = 'https://newsapi.org/v2';
const apiKey = '5df48f0ee1184466b3bd5a825d888184';

const button = document.getElementById('show-news');

button.addEventListener('click', () => {
  import(/* webpackChunkName: "app" */ './app').then(module => {
    const App = module.default;
    const app = new App(API, apiKey);
    const app2 = new App(
      'https://newsapi.org/v1',
      '5df48f0ee1184466b3bd5a825d88818'
    );
    console.log(app === app2);
    console.log(app2);

    app.init();
    document.body.removeChild(document.getElementById('load'));
  });
});

// console.log(example);

class Paragraph {
  constructor(text) {
    this.text = text;
  }
  render() {
    return `<p>${this.text}</p>`;
  }
}
class Decorator {
  constructor(paragraph) {
    this.paragraph = paragraph;
  }
  render() {
    return `
      <div style="border: 1px solid black;">
        ${this.paragraph.render()}
      </div>
    `;
  }
}

const paragraph = new Paragraph('hello');
const paragraphWithBorder = new Decorator(paragraph);
document.write(paragraphWithBorder.render());
