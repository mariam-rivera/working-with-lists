import { LitElement, html } from "lit";
import { map } from "lit/directives/map.js";

export class UsingMapDirective extends LitElement {
  static properties = {
    fruits: { state: true },
  };

  constructor() {
    super();
    this.fruits = new Set(["Apple", "Banana", "Grape", "Orange", "Lime"]);
  }

  render() {
    return html`
      <h2>Fruits</h2>
      <p>Mapping using map directive from lit</p>
      <ul>
        ${map(this.fruits, (fruit) => html`<li>${fruit}</li>`)}
      </ul>
    `;
  }
}

customElements.define("using-map-directive", UsingMapDirective);
