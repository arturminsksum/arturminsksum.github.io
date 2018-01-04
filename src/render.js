import { createMenuItem, createNewsItem } from './markupHelpers';

export class Render {
  constructor(data, id) {
    this.data = data;
    this.container = document.getElementById(id);
    this.markup = null;
  }
  insertHTML() {
    this.container.innerHTML = this.markup;
  }
}
export class RenderSourcesList extends Render {
  constructor(data, id) {
    super(data, id);
    this.markup = `${this.data.map(item => createMenuItem(item)).join('')}`;
  }
}

export class RenderArticlesList extends Render {
  constructor(data, id) {
    super(data, id);
    this.markup = `
      ${this.data.map((item, index) => createNewsItem(item, index)).join('')}
    `;
  }
}

// export class RenderArticlesListProxy {
//   constructor(data, id) {
//     if (RenderArticlesListProxy.instance) {
//       return RenderArticlesListProxy.instance;
//     }

//     this.data = data;
//     this.id = id;
//     this.articlesList = null;

//     RenderArticlesListProxy.instance = this;
//   }
//   init() {
//     if (!this.articlesList) {
//       this.articlesList = new RenderArticlesList(this.data, this.id);
//     }
//   }
//   insertHTML() {
//     this.init();
//     this.articlesList.insertHTML();
//   }
// }

