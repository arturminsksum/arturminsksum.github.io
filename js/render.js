class Render {
  constructor(data, info, id) {
    this.info = data[info];
    this.id = id;
  }
  insertHTML(markup) {
    const container = document.getElementById(this.id);
    container.innerHTML = markup;
  }
}

export class RenderSourceList extends Render {
  insertHTML() {
    super.insertHTML(this.createMarkup());
  }
  createMarkup() {
    return `
		${this.info
      .map(item => {
        const { id, name } = item;
        return `<li><a href="javascript:void(0)" data-id="${id}">${
          name
        }</a></li>`;
      })
      .join("")}
	  `;
  }
}

export class RenderArticleList extends Render {
  insertHTML() {
    super.insertHTML(this.createMarkup());
  }
  createMarkup() {
    return `
		${this.info
      .map((item, index) => {
        const {
          urlToImage: image,
          title,
          url: link,
          description: text,
          publishedAt: date
        } = item;
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
                    <i>Date: <time datetime="${date.slice(0, 10)}">${date.slice(
          0,
          10
        )}</time></i>
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
