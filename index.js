'use strict';

hexo.extend.tag.register('collapse', collapse, {ends: true});

function collapse(args, content) {
  var title = args[0];
  var style = `
  <style>
  summary {
    background-color: #666;
    color: white;
    padding: 10px;
    max-width: 100%;
    text-align: left;
    padding: 10px 10px;
  }
  details {
    background-color: #f1f1f1;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary:after {
    content: "+";
    float: left;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
  }
  details[open] summary:after {
    content: "\\2212";
  }
  </style>
  `

  return `${style}
          <details>
            <summary>${title}</summary>
            <div style="padding: 0 18px">
            <p>${hexo.render.renderSync({text: content, engine: 'markdown'}).split('\n').join('')}</p>
            </div>
          </details>`;
}