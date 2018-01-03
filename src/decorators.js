export const decorateOrderedList = list => {
  const markup = list.createMarkup();
  list.createMarkup = () => {
    return `
      <ol class="menu-list">${markup}</ol>
    `;
  };
};

export const decorateUnorderedList = list => {
  const markup = list.createMarkup();
  list.createMarkup = () => {
    return `
      <ul class="menu-list">${markup}</ul>
    `;
  };
};
