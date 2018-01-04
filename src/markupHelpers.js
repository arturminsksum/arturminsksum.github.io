const createMenuItem = ({ id, name }) =>
  `<li><a href="javascript:void(0)" data-id="${id}">${name}</a></li>`;

const createNewsItem = (item, index) => {
  const {
    urlToImage: image,
    title,
    url: link,
    description: text,
    publishedAt
  } = item;
  const date = publishedAt.slice(0, 10);
  return `
    ${index % 3 ? '' : '<div class="columns">'}
      <div class="column is-one-third">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="${image ||
                'https://bulma.io/images/placeholders/1280x960.png'}" alt="${title}">
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
    ${(index + 1) % 3 ? '' : '</div>'}
  `;
};

export { createMenuItem, createNewsItem };
