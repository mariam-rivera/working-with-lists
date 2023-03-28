import { LitElement, html } from "lit";

export class HelloWorld extends LitElement {
  render() {
    return html`<h2>Hello world!</h2>`;
  }
}
customElements.define("hello-world", HelloWorld);
