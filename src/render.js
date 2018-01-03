class Render {
  constructor(data, id) {
    this.data = data;
    this.container = document.getElementById(id);
  }
  insertHTML(markup) {
    this.container.innerHTML = markup;
  }
}
export class RenderSourcesList extends Render {
  insertHTML() {
    super.insertHTML(this.createMarkup());
  }
  createMarkup() {
    return `
		${this.data
      .map(item => {
        const { id, name } = item;
        return `<li><a href="javascript:void(0)" data-id="${id}">${name}</a></li>`;
      })
      .join("")}
	  `;
  }
}

export class RenderArticlesList extends Render {
  insertHTML() {
    super.insertHTML(this.createMarkup());
  }
  createMarkup() {
    return `
		${this.data
      .map((item, index) => {
        const {
          urlToImage: image,
          title,
          url: link,
          description: text,
          publishedAt
        } = item;
        const date = publishedAt.slice(0, 10);
        return `
          ${index % 3 ? "" : '<div class="columns">'}
            <div class="column is-one-third">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="${
                      image
                        ? image
                        : "https://bulma.io/images/placeholders/1280x960.png"
                    }" alt="${title}">
                  </figure>
                </div>
                <div class="card-content">
                  <a href="${link}" class="media">
                    <p class="title is-4">${title}</p>
                  </a>
                  <div class="content">
                    ${text}
                    <br>
                    <br>
                    <i>Date: <time datetime="${date}">${date}</time></i>
                  </div>
                </div>
              </div>
            </div>
          ${(index + 1) % 3 ? "" : "</div>"}
        `;
      })
      .join("")}
	  `;
  }
}
