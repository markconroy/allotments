import { Logo } from './Logo.js';
import { Container } from './Container.js';
import { Grid, GridItem } from './Grid.js';

export class Footer extends HTMLElement {
  static {
    customElements.define('mc-footer', this);
  }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/style.css">
      <style>
        .mc-footer {
          margin-block-start: var(--mc-spacing-largest);
          background: var(--mc-color-primary);
          padding-block: var(--mc-spacing-largest);
        }
        .mc-footer__nav {
          margin-block-start: var(--mc-spacing-largest);
        }
        .mc-footer__menu {
          border-block-start: var(--mc-border);
          padding-block-start: var(--mc-spacing-large);
          border-color: var(--mc-color-white);
        }
        .mc-footer__menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
          font-family: var(--mc-font-secondary);
        }
        .mc-footer__menu li + li {
          margin-block-start: var(--mc-spacing);
        }
        .mc-footer__menu a {
          color: var(--mc-color-white);
          display: inline-block;
          text-decoration: none;
        }
        .mc-footer__menu a:hover {
          text-decoration: underline;
        }
        .mc-footer__credits {
          display: flex;
          justify-content: center;
          background: var(--mc-color-white);
          padding-inline: var(--mc-spacing);
          margin-block-start: var(--mc-spacing);
        }
        .mc-footer__credits a {
          color: var(--mc-color-primary);
          text-decoration: none;
        }
      </style>
      <footer class="mc-footer">
        <mc-container padding="inline">
          <div class="mc-footer__inner">

            <div class="mc-footer__logo">
              <mc-logo></mc-logo>
            </div>

            <nav class="mc-footer__nav">
              <mc-grid gap="large" size="quarters">
                  <div class="mc-footer__menu">
                    <ul>
                      <li><a href="https://mark.ie">Home</a></li>
                      <li><a href="https://mark.ie/about/">About Me</a></li>
                    </ul>
                  </div>
                  <div class="mc-footer__menu">
                    <ul>
                      <li><a href="https://mark.ie/blog">My Blog</a></li>
                      <li><a href="https://markie.eo.page/xrpd5">Newsletter</a></li>
                    </ul>
                  </div>
                  <div class="mc-footer__menu">
                    <ul>
                      <li><a href="https://github.com/markconroy/">GitHub</a></li>
                      <li><a href="https://twitter.com/markconroy/">Twitter</a></li>
                      <li><a href="https://www.linkedin.com/in/conroymark/">LinkedIn</a></li>
                      <li><a href="https://www.instagram.com/markyconroy/">Instagram</a></li>
                      <li><a href="https://www.youtube.com/@markyconroy">YouTube</a></li>
                    </ul>
                  </div>

              </mc-grid>
            </nav>
            <div class="mc-footer__credits">
              <p>Created by <a href="https://mark.ie">Mark Conroy</a> | Code available on <a href="https://github.com/markconroy/allotments">GitHub</a></p>
            </div>
          </div>
        </mc-container>
      </footer>
    `;
  }
}
