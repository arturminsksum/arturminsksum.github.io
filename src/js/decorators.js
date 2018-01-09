import { Render } from './render';

export default class SourcesListDecorator extends Render {
  constructor({ data, container: { id }, markup }) {
    super(data, id);
    this.markup = `
      <ul class="menu-list">
        ${markup}
      </ul>
    `;
  }
}
