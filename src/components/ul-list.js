import { LitElement, html, css } from 'lit-element';
import {information} from './personal-info';

class UlList  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        text-align: left;
      };
      ul{
        text-align: left;
      }
      .online {
        display: flex;
        justify-content: space-evenly;
        list-style-type:none;
        flex-wrap: wrap;
        padding: 1rem 2rem;
        border: 0.2rem solid #ff7e67;
        opacity: 0.8;
        border-radius: 3rem;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      a:hover {
        color: #ff7e67;
      }
    `;
  }

  static get properties() {
    return {
      list: { type: Array },
      title: { type: String },
      online: { type: Boolean}
    };
  }

  constructor() {
    super();
    this.list = [];
    this.title = '';
    this.online = false;
  }

  render() {
    return html`
    <h4>${this.title}</h4>
      <ul class=${this.online ? 'online': ''}>
      ${this.list.map(item => (
        typeof(item) === 'string'
        ? html`<li>${item}</li>`
        : html`<li>
                <a href=${item.link} target="_blank">
                  ${
                    item.img
                    ? html`<img src=${item.img} alt="pixel-perfect" title=${item.link}>`
                    : item.text
                  }
                </a>
              </li>`))}
      </ul>
    `;
  }
}

customElements.define('ul-list', UlList);