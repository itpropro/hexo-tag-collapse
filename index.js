'use strict';

hexo.extend.tag.register('collapse', collapse, {ends: true});

function collapse(args, content) {
  var title = args[0];
  return `<style>
          .collapsible {
            background-color: #777;
            color: white;
            cursor: pointer;
            padding: 20px;
            width: 100%;
            border: none;
            text-align: left;
            outline: none;
            font-size: 15px;
          }
          
          .active, .collapsible:hover {
            background-color: #555;
          }
          
          .collapsible:after {
            content: '\\002B';
            color: white;
            font-weight: bold;
            float: right;
            margin-left: 5px;
          }
          
          .active:after {
            content: "\\2212";
          }
          
          .content {
            padding: 0 18px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
            background-color: #f1f1f1;
          }
          
          .collapsetext {
            margin: 0 0 0 0 !important;
          }
          
          </style>
          <button class="collapsible">${title}</button>
          <div class="content">
            <p>${hexo.render.renderSync({text: content, engine: 'markdown'}).split('\n').join('')}</p>
          </div>
          <script>
          var coll = document.getElementsByClassName("collapsible");
          var i;

          for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
              this.classList.toggle("active");
              var content = this.nextElementSibling;
              if (content.style.maxHeight){
                content.style.maxHeight = null;
              } else {
                content.style.maxHeight = content.scrollHeight + "px";
              } 
            });
          }
          </script>`;
}
