import { LitElement, html } from "lit";

export class ArrayMethods extends LitElement {
  static properties = {
    names: { state: true },
  };

  constructor() {
    super();
    this.names = ["Chandler", "Phoebe", "Joey", "Monica", "Rachel", "Ross"];
  }

  render() {
    return html`
      <h2>Names</h2>
      <p>Filtering and mapping using array methods</p>
      <ul>
        ${this.names
          .filter((name) => name.match(/e/i))
          .map((name) => html`<li>${name}</li>`)}
      </ul>
    `;
  }
}

customElements.define("array-methods", ArrayMethods);
