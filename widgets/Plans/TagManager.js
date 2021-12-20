
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$8 = "/*! bulma.io v0.9.3 | MIT License | github.com/jgthms/bulma */\n/* Bulma Utilities */\n.button, .input, .select select {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 2px solid transparent;\n  border-radius: 4px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.5em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.5em - 2px);\n  padding-left: calc(0.75em - 2px);\n  padding-right: calc(0.75em - 2px);\n  padding-top: calc(0.5em - 2px);\n  position: relative;\n  vertical-align: top; }\n  .button:focus, .input:focus, .select select:focus, .button:active, .input:active, .select select:active, .is-active.button, .is-active.input, .select select.is-active {\n    outline: none; }\n  .button[disabled], .input[disabled], .select select[disabled] {\n    cursor: not-allowed; }\n\n.button {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.select:not(.is-multiple):not(.is-loading)::after {\n  border: 3px solid transparent;\n  border-radius: 2px;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 0.625em;\n  margin-top: -0.4375em;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: rotate(-45deg);\n  transform-origin: center;\n  width: 0.625em; }\n\n.box:not(:last-child), .content:not(:last-child), .progress:not(:last-child), .table:not(:last-child), .title:not(:last-child),\n.subtitle:not(:last-child), .block:not(:last-child), .message:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n.delete {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 9999px;\n  cursor: pointer;\n  pointer-events: auto;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px; }\n  .delete::before, .delete::after {\n    background-color: #ffffff;\n    content: \"\";\n    display: block;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    transform-origin: center center; }\n  .delete::before {\n    height: 2px;\n    width: 50%; }\n  .delete::after {\n    height: 50%;\n    width: 2px; }\n  .delete:hover, .delete:focus {\n    background-color: rgba(10, 10, 10, 0.3); }\n  .delete:active {\n    background-color: rgba(10, 10, 10, 0.4); }\n  .is-small.delete {\n    height: 16px;\n    max-height: 16px;\n    max-width: 16px;\n    min-height: 16px;\n    min-width: 16px;\n    width: 16px; }\n  .is-medium.delete {\n    height: 24px;\n    max-height: 24px;\n    max-width: 24px;\n    min-height: 24px;\n    min-width: 24px;\n    width: 24px; }\n  .is-large.delete {\n    height: 32px;\n    max-height: 32px;\n    max-width: 32px;\n    min-height: 32px;\n    min-width: 32px;\n    width: 32px; }\n\n.button.is-loading::after, .select.is-loading::after, .control.is-loading::after {\n  animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 9999px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em; }\n\n .modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.navbar-burger {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  border: none;\n  color: currentColor;\n  font-family: inherit;\n  font-size: 1em;\n  margin: 0;\n  padding: 0; }\n\n/* Bulma Base */\n/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\nfigure,\niframe,\nh1,\nh2,\nh3,\nh4 {\n  margin: 0;\n  padding: 0; }\n\nh1,\nh2,\nh3,\nh4 {\n  font-size: 100%;\n  font-weight: normal; }\n\nul {\n  list-style: none; }\n\nbutton,\ninput,\nselect {\n  margin: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nimg {\n  height: auto;\n  max-width: 100%; }\n\niframe {\n  border: 0; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n  td:not([align]),\n  th:not([align]) {\n    text-align: inherit; }\n\nhtml {\n  background-color: #ffffff;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: 100%; }\n\n\nfigure,\nfooter,\nheader,\nsection {\n  display: block; }\n\nbody,\nbutton,\ninput,\nselect {\n  font-family: \"Montserrat\", \"Calibri\", sans-serif; }\n\ncode {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace; }\n\nbody {\n  color: #415B76;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.5; }\n\na {\n  color: #00ffff;\n  cursor: pointer;\n  text-decoration: none; }\n  a strong {\n    color: currentColor; }\n  a:hover {\n    color: #363636; }\n\ncode {\n  background-color: whitesmoke;\n  color: #d10808;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em; }\n\nimg {\n  height: auto;\n  max-width: 100%; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline; }\n\nspan {\n  font-style: inherit;\n  font-weight: inherit; }\n\nstrong {\n  color: #363636;\n  font-weight: 700; }\n\ntable td,\ntable th {\n  vertical-align: top; }\n  table td:not([align]),\n  table th:not([align]) {\n    text-align: inherit; }\n\ntable th {\n  color: #363636; }\n\n@keyframes spinAround {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n/* Bulma Elements */\n.box {\n  background-color: #ffffff;\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #415B76;\n  display: block;\n  padding: 1.25rem; }\n\na.box:hover, a.box:focus {\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #00ffff; }\n\na.box:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #00ffff; }\n\n.button {\n  background-color: #ffffff;\n  border-color: #dbdbdb;\n  border-width: 2px;\n  color: #363636;\n  cursor: pointer;\n  justify-content: center;\n  padding-bottom: calc(0.5em - 2px);\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: calc(0.5em - 2px);\n  text-align: center;\n  white-space: nowrap; }\n  .button strong {\n    color: inherit; }\n  .button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {\n    height: 1.5em;\n    width: 1.5em; }\n  .button .icon:first-child:not(:last-child) {\n    margin-left: calc(-0.5em - 2px);\n    margin-right: 0.25em; }\n  .button .icon:last-child:not(:first-child) {\n    margin-left: 0.25em;\n    margin-right: calc(-0.5em - 2px); }\n  .button .icon:first-child:last-child {\n    margin-left: calc(-0.5em - 2px);\n    margin-right: calc(-0.5em - 2px); }\n  .button:hover, .button.is-hovered {\n    border-color: #657786;\n    color: #363636; }\n  .button:focus {\n    border-color: #485fc7;\n    color: #363636; }\n    .button:focus:not(:active) {\n      box-shadow: 0 0 0 0.125em rgba(0, 255, 255, 0.25); }\n  .button:active, .button.is-active {\n    border-color: #415B76;\n    color: #363636; }\n  .button.is-light {\n    background-color: #657786;\n    border-color: transparent;\n    color: #415B76; }\n    .button.is-light:hover, .button.is-light.is-hovered {\n      background-color: #60717f;\n      border-color: transparent;\n      color: #415B76; }\n    .button.is-light:focus {\n      border-color: transparent;\n      color: #415B76; }\n      .button.is-light:focus:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(101, 119, 134, 0.25); }\n    .button.is-light:active, .button.is-light.is-active {\n      background-color: #5a6a77;\n      border-color: transparent;\n      color: #415B76; }\n    .button.is-light[disabled] {\n      background-color: #657786;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-light.is-loading::after {\n      border-color: transparent transparent #415B76 #415B76 !important; }\n    .button.is-light.is-outlined {\n      background-color: transparent;\n      border-color: #657786;\n      color: #657786; }\n      .button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus {\n        background-color: #657786;\n        border-color: #657786;\n        color: #415B76; }\n      .button.is-light.is-outlined.is-loading::after {\n        border-color: transparent transparent #657786 #657786 !important; }\n      .button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after {\n        border-color: transparent transparent #415B76 #415B76 !important; }\n      .button.is-light.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #657786;\n        box-shadow: none;\n        color: #657786; }\n  .button.is-primary {\n    background-color: #344fff;\n    border-color: transparent;\n    color: #fff; }\n    .button.is-primary:hover, .button.is-primary.is-hovered {\n      background-color: #2744ff;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-primary:focus {\n      border-color: transparent;\n      color: #fff; }\n      .button.is-primary:focus:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(52, 79, 255, 0.25); }\n    .button.is-primary:active, .button.is-primary.is-active {\n      background-color: #1b39ff;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-primary[disabled] {\n      background-color: #344fff;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-primary.is-loading::after {\n      border-color: transparent transparent #fff #fff !important; }\n    .button.is-primary.is-outlined {\n      background-color: transparent;\n      border-color: #344fff;\n      color: #344fff; }\n      .button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus {\n        background-color: #344fff;\n        border-color: #344fff;\n        color: #fff; }\n      .button.is-primary.is-outlined.is-loading::after {\n        border-color: transparent transparent #344fff #344fff !important; }\n      .button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after {\n        border-color: transparent transparent #fff #fff !important; }\n      .button.is-primary.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #344fff;\n        box-shadow: none;\n        color: #344fff; }\n    .button.is-primary.is-light {\n      background-color: #ebedff;\n      color: #0021f5; }\n      .button.is-primary.is-light:hover, .button.is-primary.is-light.is-hovered {\n        background-color: #dee2ff;\n        border-color: transparent;\n        color: #0021f5; }\n      .button.is-primary.is-light:active, .button.is-primary.is-light.is-active {\n        background-color: #d1d7ff;\n        border-color: transparent;\n        color: #0021f5; }\n  .button.is-success {\n    background-color: #34de80;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n    .button.is-success:hover, .button.is-success.is-hovered {\n      background-color: #29dc79;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n    .button.is-success:focus {\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n      .button.is-success:focus:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(52, 222, 128, 0.25); }\n    .button.is-success:active, .button.is-success.is-active {\n      background-color: #23d673;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n    .button.is-success[disabled] {\n      background-color: #34de80;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-success.is-loading::after {\n      border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n    .button.is-success.is-outlined {\n      background-color: transparent;\n      border-color: #34de80;\n      color: #34de80; }\n      .button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus {\n        background-color: #34de80;\n        border-color: #34de80;\n        color: rgba(0, 0, 0, 0.7); }\n      .button.is-success.is-outlined.is-loading::after {\n        border-color: transparent transparent #34de80 #34de80 !important; }\n      .button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after {\n        border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n      .button.is-success.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #34de80;\n        box-shadow: none;\n        color: #34de80; }\n    .button.is-success.is-light {\n      background-color: #edfcf4;\n      color: #157f44; }\n      .button.is-success.is-light:hover, .button.is-success.is-light.is-hovered {\n        background-color: #e2faed;\n        border-color: transparent;\n        color: #157f44; }\n      .button.is-success.is-light:active, .button.is-success.is-light.is-active {\n        background-color: #d8f9e6;\n        border-color: transparent;\n        color: #157f44; }\n  .button.is-warning {\n    background-color: #FDE203;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n    .button.is-warning:hover, .button.is-warning.is-hovered {\n      background-color: #f1d702;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n    .button.is-warning:focus {\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n      .button.is-warning:focus:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(253, 226, 3, 0.25); }\n    .button.is-warning:active, .button.is-warning.is-active {\n      background-color: #e5cc02;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n    .button.is-warning[disabled] {\n      background-color: #FDE203;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-warning.is-loading::after {\n      border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n    .button.is-warning.is-outlined {\n      background-color: transparent;\n      border-color: #FDE203;\n      color: #FDE203; }\n      .button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus {\n        background-color: #FDE203;\n        border-color: #FDE203;\n        color: rgba(0, 0, 0, 0.7); }\n      .button.is-warning.is-outlined.is-loading::after {\n        border-color: transparent transparent #FDE203 #FDE203 !important; }\n      .button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after {\n        border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n      .button.is-warning.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #FDE203;\n        box-shadow: none;\n        color: #FDE203; }\n    .button.is-warning.is-light {\n      background-color: #fffdeb;\n      color: #938301; }\n      .button.is-warning.is-light:hover, .button.is-warning.is-light.is-hovered {\n        background-color: #fffbde;\n        border-color: transparent;\n        color: #938301; }\n      .button.is-warning.is-light:active, .button.is-warning.is-light.is-active {\n        background-color: #fffad1;\n        border-color: transparent;\n        color: #938301; }\n  .button.is-danger {\n    background-color: #f72e2e;\n    border-color: transparent;\n    color: #fff; }\n    .button.is-danger:hover, .button.is-danger.is-hovered {\n      background-color: #f72222;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-danger:focus {\n      border-color: transparent;\n      color: #fff; }\n      .button.is-danger:focus:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(247, 46, 46, 0.25); }\n    .button.is-danger:active, .button.is-danger.is-active {\n      background-color: #f61515;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-danger[disabled] {\n      background-color: #f72e2e;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-danger.is-loading::after {\n      border-color: transparent transparent #fff #fff !important; }\n    .button.is-danger.is-outlined {\n      background-color: transparent;\n      border-color: #f72e2e;\n      color: #f72e2e; }\n      .button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus {\n        background-color: #f72e2e;\n        border-color: #f72e2e;\n        color: #fff; }\n      .button.is-danger.is-outlined.is-loading::after {\n        border-color: transparent transparent #f72e2e #f72e2e !important; }\n      .button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after {\n        border-color: transparent transparent #fff #fff !important; }\n      .button.is-danger.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #f72e2e;\n        box-shadow: none;\n        color: #f72e2e; }\n    .button.is-danger.is-light {\n      background-color: #feebeb;\n      color: #d80808; }\n      .button.is-danger.is-light:hover, .button.is-danger.is-light.is-hovered {\n        background-color: #fedfdf;\n        border-color: transparent;\n        color: #d80808; }\n      .button.is-danger.is-light:active, .button.is-danger.is-light.is-active {\n        background-color: #fdd3d3;\n        border-color: transparent;\n        color: #d80808; }\n  .button.is-small {\n    font-size: 0.75rem; }\n    .button.is-small:not(.is-rounded) {\n      border-radius: 2px; }\n  .button.is-medium {\n    font-size: 1.25rem; }\n  .button.is-large {\n    font-size: 1.5rem; }\n  .button[disabled] {\n    background-color: #ffffff;\n    border-color: #dbdbdb;\n    box-shadow: none;\n    opacity: 0.5; }\n  .button.is-fullwidth {\n    display: flex;\n    width: 100%; }\n  .button.is-loading {\n    color: transparent !important;\n    pointer-events: none; }\n    .button.is-loading::after {\n      position: absolute;\n      left: calc(50% - (1em * 0.5));\n      top: calc(50% - (1em * 0.5));\n      position: absolute !important; }\n  .button.is-rounded {\n    border-radius: 9999px;\n    padding-left: calc(1em + 0.25em);\n    padding-right: calc(1em + 0.25em); }\n\n.buttons {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n  .buttons .button {\n    margin-bottom: 0.5rem; }\n    .buttons .button:not(:last-child):not(.is-fullwidth) {\n      margin-right: 0.5rem; }\n  .buttons:last-child {\n    margin-bottom: -0.5rem; }\n  .buttons:not(:last-child) {\n    margin-bottom: 1rem; }\n  .buttons.has-addons .button:not(:first-child) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0; }\n  .buttons.has-addons .button:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n    margin-right: -1px; }\n  .buttons.has-addons .button:last-child {\n    margin-right: 0; }\n  .buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n    z-index: 2; }\n  .buttons.has-addons .button:focus, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active {\n    z-index: 3; }\n    .buttons.has-addons .button:focus:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover {\n      z-index: 4; }\n  .buttons.is-centered {\n    justify-content: center; }\n    .buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {\n      margin-left: 0.25rem;\n      margin-right: 0.25rem; }\n  .buttons.is-right {\n    justify-content: flex-end; }\n    .buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {\n      margin-left: 0.25rem;\n      margin-right: 0.25rem; }\n\n.container {\n  flex-grow: 1;\n  margin: 0 auto;\n  position: relative;\n  width: auto; }\n  @media screen and (min-width: 1024px) {\n    .container {\n      max-width: 960px; } }\n\n.content li + li {\n  margin-top: 0.25em; }\n\n.content p:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child),\n.content table:not(:last-child) {\n  margin-bottom: 1em; }\n\n.content h1,\n.content h2,\n.content h3,\n.content h4 {\n  color: #363636;\n  font-weight: 600;\n  line-height: 1.125; }\n\n.content h1 {\n  font-size: 2em;\n  margin-bottom: 0.5em; }\n  .content h1:not(:first-child) {\n    margin-top: 1em; }\n\n.content h2 {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em; }\n  .content h2:not(:first-child) {\n    margin-top: 1.1428em; }\n\n.content h3 {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em; }\n  .content h3:not(:first-child) {\n    margin-top: 1.3333em; }\n\n.content h4 {\n  font-size: 1.25em;\n  margin-bottom: 0.8em; }\n\n.content ol {\n  list-style-position: outside;\n  margin-left: 2em;\n  margin-top: 1em; }\n  .content ol:not([type]) {\n    list-style-type: decimal; }\n\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em; }\n  .content ul ul {\n    list-style-type: circle;\n    margin-top: 0.5em; }\n    .content ul ul ul {\n      list-style-type: square; }\n\n.content figure {\n  margin-left: 2em;\n  margin-right: 2em;\n  text-align: center; }\n  .content figure:not(:first-child) {\n    margin-top: 2em; }\n  .content figure:not(:last-child) {\n    margin-bottom: 2em; }\n  .content figure img {\n    display: inline-block; }\n\n.content table {\n  width: 100%; }\n  .content table td,\n  .content table th {\n    border: 1px solid #dbdbdb;\n    border-width: 0 0 1px;\n    padding: 0.5em 0.75em;\n    vertical-align: top; }\n  .content table th {\n    color: #363636; }\n    .content table th:not([align]) {\n      text-align: inherit; }\n  .content table thead td,\n  .content table thead th {\n    border-width: 0 0 2px;\n    color: #363636; }\n  .content table tbody tr:last-child td,\n  .content table tbody tr:last-child th {\n    border-bottom-width: 0; }\n\n.content.is-small {\n  font-size: 0.75rem; }\n\n.content.is-medium {\n  font-size: 1.25rem; }\n\n.content.is-large {\n  font-size: 1.5rem; }\n\n.icon {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem; }\n  .icon.is-small {\n    height: 1rem;\n    width: 1rem; }\n  .icon.is-medium {\n    height: 2rem;\n    width: 2rem; }\n  .icon.is-large {\n    height: 3rem;\n    width: 3rem; }\n\n.progress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 9999px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%; }\n  .progress::-webkit-progress-bar {\n    background-color: #ededed; }\n  .progress::-webkit-progress-value {\n    background-color: #415B76; }\n  .progress::-moz-progress-bar {\n    background-color: #415B76; }\n  .progress::-ms-fill {\n    background-color: #415B76;\n    border: none; }\n  .progress.is-light::-webkit-progress-value {\n    background-color: #657786; }\n  .progress.is-light::-moz-progress-bar {\n    background-color: #657786; }\n  .progress.is-light::-ms-fill {\n    background-color: #657786; }\n  .progress.is-light:indeterminate {\n    background-image: linear-gradient(to right, #657786 30%, #ededed 30%); }\n  .progress.is-primary::-webkit-progress-value {\n    background-color: #344fff; }\n  .progress.is-primary::-moz-progress-bar {\n    background-color: #344fff; }\n  .progress.is-primary::-ms-fill {\n    background-color: #344fff; }\n  .progress.is-primary:indeterminate {\n    background-image: linear-gradient(to right, #344fff 30%, #ededed 30%); }\n  .progress.is-success::-webkit-progress-value {\n    background-color: #34de80; }\n  .progress.is-success::-moz-progress-bar {\n    background-color: #34de80; }\n  .progress.is-success::-ms-fill {\n    background-color: #34de80; }\n  .progress.is-success:indeterminate {\n    background-image: linear-gradient(to right, #34de80 30%, #ededed 30%); }\n  .progress.is-warning::-webkit-progress-value {\n    background-color: #FDE203; }\n  .progress.is-warning::-moz-progress-bar {\n    background-color: #FDE203; }\n  .progress.is-warning::-ms-fill {\n    background-color: #FDE203; }\n  .progress.is-warning:indeterminate {\n    background-image: linear-gradient(to right, #FDE203 30%, #ededed 30%); }\n  .progress.is-danger::-webkit-progress-value {\n    background-color: #f72e2e; }\n  .progress.is-danger::-moz-progress-bar {\n    background-color: #f72e2e; }\n  .progress.is-danger::-ms-fill {\n    background-color: #f72e2e; }\n  .progress.is-danger:indeterminate {\n    background-image: linear-gradient(to right, #f72e2e 30%, #ededed 30%); }\n  .progress:indeterminate {\n    animation-duration: 1.5s;\n    animation-iteration-count: infinite;\n    animation-name: moveIndeterminate;\n    animation-timing-function: linear;\n    background-color: #ededed;\n    background-image: linear-gradient(to right, #415B76 30%, #ededed 30%);\n    background-position: top left;\n    background-repeat: no-repeat;\n    background-size: 150% 150%; }\n    .progress:indeterminate::-webkit-progress-bar {\n      background-color: transparent; }\n    .progress:indeterminate::-moz-progress-bar {\n      background-color: transparent; }\n    .progress:indeterminate::-ms-fill {\n      animation-name: none; }\n  .progress.is-small {\n    height: 0.75rem; }\n  .progress.is-medium {\n    height: 1.25rem; }\n  .progress.is-large {\n    height: 1.5rem; }\n\n@keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0; }\n  to {\n    background-position: -200% 0; } }\n\n.table {\n  background-color: #ffffff;\n  color: #363636; }\n  .table td,\n  .table th {\n    border: 1px solid #dbdbdb;\n    border-width: 0 0 1px;\n    padding: 0.5em 0.75em;\n    vertical-align: top; }\n    .table td.is-light,\n    .table th.is-light {\n      background-color: #657786;\n      border-color: #657786;\n      color: #415B76; }\n    .table td.is-primary,\n    .table th.is-primary {\n      background-color: #344fff;\n      border-color: #344fff;\n      color: #fff; }\n    .table td.is-success,\n    .table th.is-success {\n      background-color: #34de80;\n      border-color: #34de80;\n      color: rgba(0, 0, 0, 0.7); }\n    .table td.is-warning,\n    .table th.is-warning {\n      background-color: #FDE203;\n      border-color: #FDE203;\n      color: rgba(0, 0, 0, 0.7); }\n    .table td.is-danger,\n    .table th.is-danger {\n      background-color: #f72e2e;\n      border-color: #f72e2e;\n      color: #fff; }\n    .table td.is-narrow,\n    .table th.is-narrow {\n      white-space: nowrap;\n      width: 1%; }\n  .table th {\n    color: #363636; }\n    .table th:not([align]) {\n      text-align: inherit; }\n  .table thead {\n    background-color: transparent; }\n    .table thead td,\n    .table thead th {\n      border-width: 0 0 2px;\n      color: #363636; }\n  .table tbody {\n    background-color: transparent; }\n    .table tbody tr:last-child td,\n    .table tbody tr:last-child th {\n      border-bottom-width: 0; }\n  .table.is-fullwidth {\n    width: 100%; }\n  .table.is-hoverable tbody tr:not(.is-selected):hover {\n    background-color: #fafafa; }\n  .table.is-narrow td,\n  .table.is-narrow th {\n    padding: 0.25em 0.5em; }\n\n.tags {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n  .tags .tag {\n    margin-bottom: 0.5rem; }\n    .tags .tag:not(:last-child) {\n      margin-right: 0.5rem; }\n  .tags:last-child {\n    margin-bottom: -0.5rem; }\n  .tags:not(:last-child) {\n    margin-bottom: 1rem; }\n  .tags.is-centered {\n    justify-content: center; }\n    .tags.is-centered .tag {\n      margin-right: 0.25rem;\n      margin-left: 0.25rem; }\n  .tags.is-right {\n    justify-content: flex-end; }\n    .tags.is-right .tag:not(:first-child) {\n      margin-left: 0.5rem; }\n    .tags.is-right .tag:not(:last-child) {\n      margin-right: 0; }\n  .tags.has-addons .tag {\n    margin-right: 0; }\n    .tags.has-addons .tag:not(:first-child) {\n      margin-left: 0;\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0; }\n    .tags.has-addons .tag:not(:last-child) {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0; }\n\n.tag:not(body) {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  color: #415B76;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap; }\n  .tag:not(body) .delete {\n    margin-left: 0.25rem;\n    margin-right: -0.375rem; }\n  .tag:not(body).is-light {\n    background-color: #657786;\n    color: #415B76; }\n  .tag:not(body).is-primary {\n    background-color: #344fff;\n    color: #fff; }\n    .tag:not(body).is-primary.is-light {\n      background-color: #ebedff;\n      color: #0021f5; }\n  .tag:not(body).is-success {\n    background-color: #34de80;\n    color: rgba(0, 0, 0, 0.7); }\n    .tag:not(body).is-success.is-light {\n      background-color: #edfcf4;\n      color: #157f44; }\n  .tag:not(body).is-warning {\n    background-color: #FDE203;\n    color: rgba(0, 0, 0, 0.7); }\n    .tag:not(body).is-warning.is-light {\n      background-color: #fffdeb;\n      color: #938301; }\n  .tag:not(body).is-danger {\n    background-color: #f72e2e;\n    color: #fff; }\n    .tag:not(body).is-danger.is-light {\n      background-color: #feebeb;\n      color: #d80808; }\n  .tag:not(body).is-medium {\n    font-size: 1rem; }\n  .tag:not(body).is-large {\n    font-size: 1.25rem; }\n  .tag:not(body) .icon:first-child:not(:last-child) {\n    margin-left: -0.375em;\n    margin-right: 0.1875em; }\n  .tag:not(body) .icon:last-child:not(:first-child) {\n    margin-left: 0.1875em;\n    margin-right: -0.375em; }\n  .tag:not(body) .icon:first-child:last-child {\n    margin-left: -0.375em;\n    margin-right: -0.375em; }\n  .tag:not(body).is-rounded {\n    border-radius: 9999px; }\n\na.tag:hover {\n  text-decoration: underline; }\n\n.title,\n.subtitle {\n  word-break: break-word; }\n  \n  .title span,\n  .subtitle span {\n    font-weight: inherit; }\n  .title .tag,\n  .subtitle .tag {\n    vertical-align: middle; }\n\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125; }\n  .title strong {\n    color: inherit;\n    font-weight: inherit; }\n  .title:not(.is-spaced) + .subtitle {\n    margin-top: -1.25rem; }\n  .title.is-4 {\n    font-size: 1.5rem; }\n  .title.is-6 {\n    font-size: 1rem; }\n\n.subtitle {\n  color: #415B76;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25; }\n  .subtitle strong {\n    color: #363636;\n    font-weight: 600; }\n  .subtitle:not(.is-spaced) + .title {\n    margin-top: -1.25rem; }\n  .subtitle.is-4 {\n    font-size: 1.5rem; }\n  .subtitle.is-6 {\n    font-size: 1rem; }\n\n.number {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 9999px;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top; }\n\n/* Bulma Form */\n.input, .select select {\n  background-color: #ffffff;\n  border-color: transparent;\n  border-radius: 4px;\n  color: #363636; }\n  .input::-moz-placeholder, .select select::-moz-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n  .input::-webkit-input-placeholder, .select select::-webkit-input-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n  .input:-moz-placeholder, .select select:-moz-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n  .input:-ms-input-placeholder, .select select:-ms-input-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n  .input:hover, .select select:hover, .is-hovered.input, .select select.is-hovered {\n    border-color: #657786; }\n  .input:focus, .select select:focus, .input:active, .select select:active, .is-active.input, .select select.is-active {\n    border-color: #00ffff;\n    box-shadow: 0 0 0 0.125em rgba(0, 255, 255, 0.25); }\n  .input[disabled], .select select[disabled] {\n    background-color: whitesmoke;\n    border-color: whitesmoke;\n    box-shadow: none;\n    color: #e1e1e1; }\n    .input[disabled]::-moz-placeholder, .select select[disabled]::-moz-placeholder {\n      color: rgba(225, 225, 225, 0.3); }\n    .input[disabled]::-webkit-input-placeholder, .select select[disabled]::-webkit-input-placeholder {\n      color: rgba(225, 225, 225, 0.3); }\n    .input[disabled]:-moz-placeholder, .select select[disabled]:-moz-placeholder {\n      color: rgba(225, 225, 225, 0.3); }\n    .input[disabled]:-ms-input-placeholder, .select select[disabled]:-ms-input-placeholder {\n      color: rgba(225, 225, 225, 0.3); }\n\n.input {\n  box-shadow: none;\n  max-width: 100%;\n  width: 100%; }\n  .is-light.input {\n    border-color: #657786; }\n    .is-light.input:focus, .is-light.input:active, .is-light.is-active.input {\n      box-shadow: 0 0 0 0.125em rgba(101, 119, 134, 0.25); }\n  .is-primary.input {\n    border-color: #344fff; }\n    .is-primary.input:focus, .is-primary.input:active, .is-primary.is-active.input {\n      box-shadow: 0 0 0 0.125em rgba(52, 79, 255, 0.25); }\n  .is-success.input {\n    border-color: #34de80; }\n    .is-success.input:focus, .is-success.input:active, .is-success.is-active.input {\n      box-shadow: 0 0 0 0.125em rgba(52, 222, 128, 0.25); }\n  .is-warning.input {\n    border-color: #FDE203; }\n    .is-warning.input:focus, .is-warning.input:active, .is-warning.is-active.input {\n      box-shadow: 0 0 0 0.125em rgba(253, 226, 3, 0.25); }\n  .is-danger.input {\n    border-color: #f72e2e; }\n    .is-danger.input:focus, .is-danger.input:active, .is-danger.is-active.input {\n      box-shadow: 0 0 0 0.125em rgba(247, 46, 46, 0.25); }\n  .is-small.input {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n  .is-medium.input {\n    font-size: 1.25rem; }\n  .is-large.input {\n    font-size: 1.5rem; }\n  .is-fullwidth.input {\n    display: block;\n    width: 100%; }\n\n.input.is-rounded {\n  border-radius: 9999px;\n  padding-left: calc(calc(0.75em - 2px) + 0.375em);\n  padding-right: calc(calc(0.75em - 2px) + 0.375em); }\n\n.checkbox, .radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative; }\n  .checkbox input, .radio input {\n    cursor: pointer; }\n  .checkbox:hover, .radio:hover {\n    color: #363636; }\n  .checkbox[disabled], .radio[disabled],\n  .checkbox input[disabled],\n  .radio input[disabled] {\n    color: #e1e1e1;\n    cursor: not-allowed; }\n\n.radio + .radio {\n  margin-left: 0.5em; }\n\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top; }\n  .select:not(.is-multiple) {\n    height: 2.5em; }\n  .select:not(.is-multiple):not(.is-loading)::after {\n    border-color: #00ffff;\n    right: 1.125em;\n    z-index: 4; }\n  .select.is-rounded select {\n    border-radius: 9999px;\n    padding-left: 1em; }\n  .select select {\n    cursor: pointer;\n    display: block;\n    font-size: 1em;\n    max-width: 100%;\n    outline: none; }\n    .select select::-ms-expand {\n      display: none; }\n    .select select[disabled]:hover {\n      border-color: whitesmoke; }\n    .select select:not([multiple]) {\n      padding-right: 2.5em; }\n  .select:not(.is-multiple):not(.is-loading):hover::after {\n    border-color: #363636; }\n  .select.is-light:not(:hover)::after {\n    border-color: #657786; }\n  .select.is-light select {\n    border-color: #657786; }\n    .select.is-light select:hover, .select.is-light select.is-hovered {\n      border-color: #5a6a77; }\n    .select.is-light select:focus, .select.is-light select:active, .select.is-light select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(101, 119, 134, 0.25); }\n  .select.is-primary:not(:hover)::after {\n    border-color: #344fff; }\n  .select.is-primary select {\n    border-color: #344fff; }\n    .select.is-primary select:hover, .select.is-primary select.is-hovered {\n      border-color: #1b39ff; }\n    .select.is-primary select:focus, .select.is-primary select:active, .select.is-primary select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(52, 79, 255, 0.25); }\n  .select.is-success:not(:hover)::after {\n    border-color: #34de80; }\n  .select.is-success select {\n    border-color: #34de80; }\n    .select.is-success select:hover, .select.is-success select.is-hovered {\n      border-color: #23d673; }\n    .select.is-success select:focus, .select.is-success select:active, .select.is-success select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(52, 222, 128, 0.25); }\n  .select.is-warning:not(:hover)::after {\n    border-color: #FDE203; }\n  .select.is-warning select {\n    border-color: #FDE203; }\n    .select.is-warning select:hover, .select.is-warning select.is-hovered {\n      border-color: #e5cc02; }\n    .select.is-warning select:focus, .select.is-warning select:active, .select.is-warning select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(253, 226, 3, 0.25); }\n  .select.is-danger:not(:hover)::after {\n    border-color: #f72e2e; }\n  .select.is-danger select {\n    border-color: #f72e2e; }\n    .select.is-danger select:hover, .select.is-danger select.is-hovered {\n      border-color: #f61515; }\n    .select.is-danger select:focus, .select.is-danger select:active, .select.is-danger select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(247, 46, 46, 0.25); }\n  .select.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n  .select.is-medium {\n    font-size: 1.25rem; }\n  .select.is-large {\n    font-size: 1.5rem; }\n  .select.is-fullwidth {\n    width: 100%; }\n    .select.is-fullwidth select {\n      width: 100%; }\n  .select.is-loading::after {\n    margin-top: 0;\n    position: absolute;\n    right: 0.625em;\n    top: 0.625em;\n    transform: none; }\n  .select.is-loading.is-small:after {\n    font-size: 0.75rem; }\n  .select.is-loading.is-medium:after {\n    font-size: 1.25rem; }\n  .select.is-loading.is-large:after {\n    font-size: 1.5rem; }\n\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700; }\n  .label:not(:last-child) {\n    margin-bottom: 0.5em; }\n  .label.is-small {\n    font-size: 0.75rem; }\n  .label.is-medium {\n    font-size: 1.25rem; }\n  .label.is-large {\n    font-size: 1.5rem; }\n\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem; }\n  .help.is-light {\n    color: #657786; }\n  .help.is-primary {\n    color: #344fff; }\n  .help.is-success {\n    color: #34de80; }\n  .help.is-warning {\n    color: #FDE203; }\n  .help.is-danger {\n    color: #f72e2e; }\n\n.field:not(:last-child) {\n  margin-bottom: 0.75rem; }\n\n.field.has-addons {\n  display: flex;\n  justify-content: flex-start; }\n  .field.has-addons .control:not(:last-child) {\n    margin-right: -1px; }\n  .field.has-addons .control:not(:first-child):not(:last-child) .button,\n  .field.has-addons .control:not(:first-child):not(:last-child) .input,\n  .field.has-addons .control:not(:first-child):not(:last-child) .select select {\n    border-radius: 0; }\n  .field.has-addons .control:first-child:not(:only-child) .button,\n  .field.has-addons .control:first-child:not(:only-child) .input,\n  .field.has-addons .control:first-child:not(:only-child) .select select {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n  .field.has-addons .control:last-child:not(:only-child) .button,\n  .field.has-addons .control:last-child:not(:only-child) .input,\n  .field.has-addons .control:last-child:not(:only-child) .select select {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0; }\n  .field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,\n  .field.has-addons .control .input:not([disabled]):hover,\n  .field.has-addons .control .input:not([disabled]).is-hovered,\n  .field.has-addons .control .select select:not([disabled]):hover,\n  .field.has-addons .control .select select:not([disabled]).is-hovered {\n    z-index: 2; }\n  .field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,\n  .field.has-addons .control .input:not([disabled]):focus,\n  .field.has-addons .control .input:not([disabled]):active,\n  .field.has-addons .control .input:not([disabled]).is-active,\n  .field.has-addons .control .select select:not([disabled]):focus,\n  .field.has-addons .control .select select:not([disabled]):active,\n  .field.has-addons .control .select select:not([disabled]).is-active {\n    z-index: 3; }\n    .field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,\n    .field.has-addons .control .input:not([disabled]):focus:hover,\n    .field.has-addons .control .input:not([disabled]):active:hover,\n    .field.has-addons .control .input:not([disabled]).is-active:hover,\n    .field.has-addons .control .select select:not([disabled]):focus:hover,\n    .field.has-addons .control .select select:not([disabled]):active:hover,\n    .field.has-addons .control .select select:not([disabled]).is-active:hover {\n      z-index: 4; }\n\n.field.is-grouped {\n  display: flex;\n  justify-content: flex-start; }\n  .field.is-grouped > .control {\n    flex-shrink: 0; }\n    .field.is-grouped > .control:not(:last-child) {\n      margin-bottom: 0;\n      margin-right: 0.75rem; }\n\n.control {\n  box-sizing: border-box;\n  clear: both;\n  font-size: 1rem;\n  position: relative;\n  text-align: inherit; }\n  .control.has-icons-left .input:focus ~ .icon,\n  .control.has-icons-left .select:focus ~ .icon {\n    color: #415B76; }\n  .control.has-icons-left .input.is-small ~ .icon,\n  .control.has-icons-left .select.is-small ~ .icon {\n    font-size: 0.75rem; }\n  .control.has-icons-left .input.is-medium ~ .icon,\n  .control.has-icons-left .select.is-medium ~ .icon {\n    font-size: 1.25rem; }\n  .control.has-icons-left .input.is-large ~ .icon,\n  .control.has-icons-left .select.is-large ~ .icon {\n    font-size: 1.5rem; }\n  .control.has-icons-left .icon {\n    color: #dbdbdb;\n    height: 2.5em;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 2.5em;\n    z-index: 4; }\n  .control.has-icons-left .input,\n  .control.has-icons-left .select select {\n    padding-left: 2.5em; }\n  .control.has-icons-left .icon.is-left {\n    left: 0; }\n  .control.is-loading::after {\n    position: absolute !important;\n    right: 0.625em;\n    top: 0.625em;\n    z-index: 4; }\n  .control.is-loading.is-small:after {\n    font-size: 0.75rem; }\n  .control.is-loading.is-medium:after {\n    font-size: 1.25rem; }\n  .control.is-loading.is-large:after {\n    font-size: 1.5rem; }\n\n/* Bulma Components */\n\n.card {\n  background-color: #ffffff;\n  border-radius: 0.25rem;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #415B76;\n  max-width: 100%;\n  position: relative; }\n\n.card .media:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n.dropdown {\n  display: inline-flex;\n  position: relative;\n  vertical-align: top; }\n  .dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {\n    display: block; }\n  .dropdown.is-right .dropdown-menu {\n    left: auto;\n    right: 0; }\n\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20; }\n\n.dropdown-content {\n  background-color: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem; }\n\n.dropdown-item {\n  color: #415B76;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative; }\n\na.dropdown-item,\nbutton.dropdown-item {\n  padding-right: 3rem;\n  text-align: inherit;\n  white-space: nowrap;\n  width: 100%; }\n  a.dropdown-item:hover,\n  button.dropdown-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a; }\n  a.dropdown-item.is-active,\n  button.dropdown-item.is-active {\n    background-color: #00ffff;\n    color: rgba(0, 0, 0, 0.7); }\n\n.media {\n  align-items: flex-start;\n  display: flex;\n  text-align: inherit; }\n  .media .content:not(:last-child) {\n    margin-bottom: 0.75rem; }\n  .media .media {\n    border-top: 1px solid rgba(219, 219, 219, 0.5);\n    display: flex;\n    padding-top: 0.75rem; }\n    .media .media .content:not(:last-child),\n    .media .media .control:not(:last-child) {\n      margin-bottom: 0.5rem; }\n    .media .media .media {\n      padding-top: 0.5rem; }\n      .media .media .media + .media {\n        margin-top: 0.5rem; }\n  .media + .media {\n    border-top: 1px solid rgba(219, 219, 219, 0.5);\n    margin-top: 1rem;\n    padding-top: 1rem; }\n  .media.is-large + .media {\n    margin-top: 1.5rem;\n    padding-top: 1.5rem; }\n\n.menu {\n  font-size: 1rem; }\n  .menu.is-small {\n    font-size: 0.75rem; }\n  .menu.is-medium {\n    font-size: 1.25rem; }\n  .menu.is-large {\n    font-size: 1.5rem; }\n\n.message {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 1rem; }\n  .message strong {\n    color: currentColor; }\n  .message a:not(.button):not(.tag):not(.dropdown-item) {\n    color: currentColor;\n    text-decoration: underline; }\n  .message.is-small {\n    font-size: 0.75rem; }\n  .message.is-medium {\n    font-size: 1.25rem; }\n  .message.is-large {\n    font-size: 1.5rem; }\n  .message.is-light {\n    background-color: #f9fafb; }\n  .message.is-primary {\n    background-color: #ebedff; }\n  .message.is-success {\n    background-color: #edfcf4; }\n  .message.is-warning {\n    background-color: #fffdeb; }\n  .message.is-danger {\n    background-color: #feebeb; }\n\n.modal {\n  align-items: center;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 40; }\n  .modal.is-active {\n    display: flex; }\n\n.navbar {\n  background-color: #ffffff;\n  min-height: 3.25rem;\n  position: relative;\n  z-index: 30; }\n  .navbar.is-light {\n    background-color: #657786;\n    color: #415B76; }\n    .navbar.is-light .navbar-brand > .navbar-item {\n      color: #415B76; }\n    .navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active {\n      background-color: #5a6a77;\n      color: #415B76; }\n    .navbar.is-light .navbar-burger {\n      color: #415B76; }\n    @media screen and (min-width: 1024px) {\n      .navbar.is-light .navbar-start > .navbar-item,\n      .navbar.is-light .navbar-end > .navbar-item {\n        color: #415B76; }\n      .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,\n      .navbar.is-light .navbar-end > a.navbar-item:focus,\n      .navbar.is-light .navbar-end > a.navbar-item:hover,\n      .navbar.is-light .navbar-end > a.navbar-item.is-active {\n        background-color: #5a6a77;\n        color: #415B76; } }\n  .navbar.is-primary {\n    background-color: #344fff;\n    color: #fff; }\n    .navbar.is-primary .navbar-brand > .navbar-item {\n      color: #fff; }\n    .navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active {\n      background-color: #1b39ff;\n      color: #fff; }\n    .navbar.is-primary .navbar-burger {\n      color: #fff; }\n    @media screen and (min-width: 1024px) {\n      .navbar.is-primary .navbar-start > .navbar-item,\n      .navbar.is-primary .navbar-end > .navbar-item {\n        color: #fff; }\n      .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,\n      .navbar.is-primary .navbar-end > a.navbar-item:focus,\n      .navbar.is-primary .navbar-end > a.navbar-item:hover,\n      .navbar.is-primary .navbar-end > a.navbar-item.is-active {\n        background-color: #1b39ff;\n        color: #fff; } }\n  .navbar.is-success {\n    background-color: #34de80;\n    color: rgba(0, 0, 0, 0.7); }\n    .navbar.is-success .navbar-brand > .navbar-item {\n      color: rgba(0, 0, 0, 0.7); }\n    .navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active {\n      background-color: #23d673;\n      color: rgba(0, 0, 0, 0.7); }\n    .navbar.is-success .navbar-burger {\n      color: rgba(0, 0, 0, 0.7); }\n    @media screen and (min-width: 1024px) {\n      .navbar.is-success .navbar-start > .navbar-item,\n      .navbar.is-success .navbar-end > .navbar-item {\n        color: rgba(0, 0, 0, 0.7); }\n      .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,\n      .navbar.is-success .navbar-end > a.navbar-item:focus,\n      .navbar.is-success .navbar-end > a.navbar-item:hover,\n      .navbar.is-success .navbar-end > a.navbar-item.is-active {\n        background-color: #23d673;\n        color: rgba(0, 0, 0, 0.7); } }\n  .navbar.is-warning {\n    background-color: #FDE203;\n    color: rgba(0, 0, 0, 0.7); }\n    .navbar.is-warning .navbar-brand > .navbar-item {\n      color: rgba(0, 0, 0, 0.7); }\n    .navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active {\n      background-color: #e5cc02;\n      color: rgba(0, 0, 0, 0.7); }\n    .navbar.is-warning .navbar-burger {\n      color: rgba(0, 0, 0, 0.7); }\n    @media screen and (min-width: 1024px) {\n      .navbar.is-warning .navbar-start > .navbar-item,\n      .navbar.is-warning .navbar-end > .navbar-item {\n        color: rgba(0, 0, 0, 0.7); }\n      .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,\n      .navbar.is-warning .navbar-end > a.navbar-item:focus,\n      .navbar.is-warning .navbar-end > a.navbar-item:hover,\n      .navbar.is-warning .navbar-end > a.navbar-item.is-active {\n        background-color: #e5cc02;\n        color: rgba(0, 0, 0, 0.7); } }\n  .navbar.is-danger {\n    background-color: #f72e2e;\n    color: #fff; }\n    .navbar.is-danger .navbar-brand > .navbar-item {\n      color: #fff; }\n    .navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active {\n      background-color: #f61515;\n      color: #fff; }\n    .navbar.is-danger .navbar-burger {\n      color: #fff; }\n    @media screen and (min-width: 1024px) {\n      .navbar.is-danger .navbar-start > .navbar-item,\n      .navbar.is-danger .navbar-end > .navbar-item {\n        color: #fff; }\n      .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,\n      .navbar.is-danger .navbar-end > a.navbar-item:focus,\n      .navbar.is-danger .navbar-end > a.navbar-item:hover,\n      .navbar.is-danger .navbar-end > a.navbar-item.is-active {\n        background-color: #f61515;\n        color: #fff; } }\n  .navbar > .container {\n    align-items: stretch;\n    display: flex;\n    min-height: 3.25rem;\n    width: 100%; }\n  .navbar.has-shadow {\n    box-shadow: 0 2px 0 0 whitesmoke; }\n\n.navbar-brand {\n  align-items: stretch;\n  display: flex;\n  flex-shrink: 0;\n  min-height: 3.25rem; }\n\n.navbar-brand a.navbar-item:focus, .navbar-brand a.navbar-item:hover {\n  background-color: transparent; }\n\n.navbar-burger {\n  color: #415B76;\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto; }\n  .navbar-burger span {\n    background-color: currentColor;\n    display: block;\n    height: 1px;\n    left: calc(50% - 8px);\n    position: absolute;\n    transform-origin: center;\n    transition-duration: 86ms;\n    transition-property: background-color, opacity, transform;\n    transition-timing-function: ease-out;\n    width: 16px; }\n    .navbar-burger span:nth-child(1) {\n      top: calc(50% - 6px); }\n    .navbar-burger span:nth-child(2) {\n      top: calc(50% - 1px); }\n    .navbar-burger span:nth-child(3) {\n      top: calc(50% + 4px); }\n  .navbar-burger:hover {\n    background-color: rgba(0, 0, 0, 0.05); }\n  .navbar-burger.is-active span:nth-child(1) {\n    transform: translateY(5px) rotate(45deg); }\n  .navbar-burger.is-active span:nth-child(2) {\n    opacity: 0; }\n  .navbar-burger.is-active span:nth-child(3) {\n    transform: translateY(-5px) rotate(-45deg); }\n\n.navbar-menu {\n  display: none; }\n\n.navbar-item {\n  color: #415B76;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 0.75rem;\n  position: relative; }\n  .navbar-item .icon:only-child {\n    margin-left: -0.25rem;\n    margin-right: -0.25rem; }\n\na.navbar-item {\n  cursor: pointer; }\n  a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active {\n    background-color: #fafafa;\n    color: #00ffff; }\n\n.navbar-item {\n  flex-grow: 0;\n  flex-shrink: 0; }\n  .navbar-item img {\n    max-height: 1.75rem; }\n\n@media screen and (max-width: 1023px) {\n  .navbar > .container {\n    display: block; }\n  .navbar-brand .navbar-item {\n    align-items: center;\n    display: flex; }\n  .navbar-menu {\n    background-color: #ffffff;\n    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0; }\n    .navbar-menu.is-active {\n      display: block; } }\n\n@media screen and (min-width: 1024px) {\n  .navbar,\n  .navbar-menu,\n  .navbar-start,\n  .navbar-end {\n    align-items: stretch;\n    display: flex; }\n  .navbar {\n    min-height: 3.25rem; }\n  .navbar-burger {\n    display: none; }\n  .navbar-item {\n    align-items: center;\n    display: flex; }\n  .navbar-menu {\n    flex-grow: 1;\n    flex-shrink: 0; }\n  .navbar-start {\n    justify-content: flex-start;\n    margin-right: auto; }\n  .navbar-end {\n    justify-content: flex-end;\n    margin-left: auto; }\n  .navbar > .container .navbar-brand,\n  .container > .navbar .navbar-brand {\n    margin-left: -0.75rem; }\n  .navbar > .container .navbar-menu,\n  .container > .navbar .navbar-menu {\n    margin-right: -0.75rem; }\n  a.navbar-item.is-active {\n    color: #0a0a0a; }\n  a.navbar-item.is-active:not(:focus):not(:hover) {\n    background-color: transparent; } }\n\n.panel {\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  font-size: 1rem; }\n  .panel:not(:last-child) {\n    margin-bottom: 1.5rem; }\n\n.switch[type=\"checkbox\"] {\n  outline: 0;\n  user-select: none;\n  display: inline-block;\n  position: absolute;\n  opacity: 0; }\n  .switch[type=\"checkbox\"]:focus + label::before, .switch[type=\"checkbox\"]:focus + label:before, .switch[type=\"checkbox\"]:focus + label::after, .switch[type=\"checkbox\"]:focus + label:after {\n    outline: 1px dotted #657786; }\n  .switch[type=\"checkbox\"][disabled] {\n    cursor: not-allowed; }\n    .switch[type=\"checkbox\"][disabled] + label {\n      opacity: 0.5; }\n      .switch[type=\"checkbox\"][disabled] + label::before, .switch[type=\"checkbox\"][disabled] + label:before {\n        opacity: 0.5; }\n      .switch[type=\"checkbox\"][disabled] + label::after, .switch[type=\"checkbox\"][disabled] + label:after {\n        opacity: 0.5; }\n      .switch[type=\"checkbox\"][disabled] + label:hover {\n        cursor: not-allowed; }\n  .switch[type=\"checkbox\"] + label {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1rem;\n    height: 2.5em;\n    line-height: 1.5;\n    padding-left: 3.5rem;\n    padding-top: .2rem;\n    cursor: pointer; }\n    .switch[type=\"checkbox\"] + label::before, .switch[type=\"checkbox\"] + label:before {\n      position: absolute;\n      display: block;\n      top: calc( 50% - 1.5rem * 0.5);\n      left: 0;\n      width: 3rem;\n      height: 1.5rem;\n      border: 0.1rem solid transparent;\n      border-radius: 4px;\n      background: #657786;\n      content: ''; }\n    .switch[type=\"checkbox\"] + label::after, .switch[type=\"checkbox\"] + label:after {\n      display: block;\n      position: absolute;\n      top: calc( 50% - 1rem * 0.5);\n      left: 0.25rem;\n      width: 1rem;\n      height: 1rem;\n      transform: translate3d(0, 0, 0);\n      border-radius: 4px;\n      background: #ffffff;\n      transition: all 0.25s ease-out;\n      content: ''; }\n  .switch[type=\"checkbox\"].is-rtl + label {\n    padding-left: 0;\n    padding-right: 3.5rem; }\n    .switch[type=\"checkbox\"].is-rtl + label::before, .switch[type=\"checkbox\"].is-rtl + label:before {\n      left: auto;\n      right: 0; }\n    .switch[type=\"checkbox\"].is-rtl + label::after, .switch[type=\"checkbox\"].is-rtl + label:after {\n      left: auto;\n      right: 1.625rem; }\n  .switch[type=\"checkbox\"]:checked + label::before, .switch[type=\"checkbox\"]:checked + label:before {\n    background: #344fff; }\n  .switch[type=\"checkbox\"]:checked + label::after {\n    left: 1.625rem; }\n  .switch[type=\"checkbox\"]:checked.is-rtl + label::after, .switch[type=\"checkbox\"]:checked.is-rtl + label:after {\n    left: auto;\n    right: 0.25rem; }\n  .switch[type=\"checkbox\"].is-outlined + label::before, .switch[type=\"checkbox\"].is-outlined + label:before {\n    background-color: transparent;\n    border-color: #657786; }\n  .switch[type=\"checkbox\"].is-outlined + label::after, .switch[type=\"checkbox\"].is-outlined + label:after {\n    background: #657786; }\n  .switch[type=\"checkbox\"].is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #344fff; }\n  .switch[type=\"checkbox\"].is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-outlined:checked + label:after {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-rounded + label::before, .switch[type=\"checkbox\"].is-rounded + label:before {\n    border-radius: 24px; }\n  .switch[type=\"checkbox\"].is-rounded + label::after, .switch[type=\"checkbox\"].is-rounded + label:after {\n    border-radius: 50%; }\n  .switch[type=\"checkbox\"].is-small + label {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 0.75rem;\n    height: 2.5em;\n    line-height: 1.5;\n    padding-left: 2.75rem;\n    padding-top: .2rem;\n    cursor: pointer; }\n    .switch[type=\"checkbox\"].is-small + label::before, .switch[type=\"checkbox\"].is-small + label:before {\n      position: absolute;\n      display: block;\n      top: calc( 50% - 1.125rem * 0.5);\n      left: 0;\n      width: 2.25rem;\n      height: 1.125rem;\n      border: 0.1rem solid transparent;\n      border-radius: 4px;\n      background: #657786;\n      content: ''; }\n    .switch[type=\"checkbox\"].is-small + label::after, .switch[type=\"checkbox\"].is-small + label:after {\n      display: block;\n      position: absolute;\n      top: calc( 50% - 0.625rem * 0.5);\n      left: 0.25rem;\n      width: 0.625rem;\n      height: 0.625rem;\n      transform: translate3d(0, 0, 0);\n      border-radius: 4px;\n      background: #ffffff;\n      transition: all 0.25s ease-out;\n      content: ''; }\n  .switch[type=\"checkbox\"].is-small.is-rtl + label {\n    padding-left: 0;\n    padding-right: 2.75rem; }\n    .switch[type=\"checkbox\"].is-small.is-rtl + label::before, .switch[type=\"checkbox\"].is-small.is-rtl + label:before {\n      left: auto;\n      right: 0; }\n    .switch[type=\"checkbox\"].is-small.is-rtl + label::after, .switch[type=\"checkbox\"].is-small.is-rtl + label:after {\n      left: auto;\n      right: 1.25rem; }\n  .switch[type=\"checkbox\"].is-small:checked + label::before, .switch[type=\"checkbox\"].is-small:checked + label:before {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-small:checked + label::after {\n    left: 1.25rem; }\n  .switch[type=\"checkbox\"].is-small:checked.is-rtl + label::after, .switch[type=\"checkbox\"].is-small:checked.is-rtl + label:after {\n    left: auto;\n    right: 0.25rem; }\n  .switch[type=\"checkbox\"].is-small.is-outlined + label::before, .switch[type=\"checkbox\"].is-small.is-outlined + label:before {\n    background-color: transparent;\n    border-color: #657786; }\n  .switch[type=\"checkbox\"].is-small.is-outlined + label::after, .switch[type=\"checkbox\"].is-small.is-outlined + label:after {\n    background: #657786; }\n  .switch[type=\"checkbox\"].is-small.is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-small.is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #344fff; }\n  .switch[type=\"checkbox\"].is-small.is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-small.is-outlined:checked + label:after {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-small.is-rounded + label::before, .switch[type=\"checkbox\"].is-small.is-rounded + label:before {\n    border-radius: 24px; }\n  .switch[type=\"checkbox\"].is-small.is-rounded + label::after, .switch[type=\"checkbox\"].is-small.is-rounded + label:after {\n    border-radius: 50%; }\n  .switch[type=\"checkbox\"].is-medium + label {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1.25rem;\n    height: 2.5em;\n    line-height: 1.5;\n    padding-left: 4.25rem;\n    padding-top: .2rem;\n    cursor: pointer; }\n    .switch[type=\"checkbox\"].is-medium + label::before, .switch[type=\"checkbox\"].is-medium + label:before {\n      position: absolute;\n      display: block;\n      top: calc( 50% - 1.875rem * 0.5);\n      left: 0;\n      width: 3.75rem;\n      height: 1.875rem;\n      border: 0.1rem solid transparent;\n      border-radius: 4px;\n      background: #657786;\n      content: ''; }\n    .switch[type=\"checkbox\"].is-medium + label::after, .switch[type=\"checkbox\"].is-medium + label:after {\n      display: block;\n      position: absolute;\n      top: calc( 50% - 1.375rem * 0.5);\n      left: 0.25rem;\n      width: 1.375rem;\n      height: 1.375rem;\n      transform: translate3d(0, 0, 0);\n      border-radius: 4px;\n      background: #ffffff;\n      transition: all 0.25s ease-out;\n      content: ''; }\n  .switch[type=\"checkbox\"].is-medium.is-rtl + label {\n    padding-left: 0;\n    padding-right: 4.25rem; }\n    .switch[type=\"checkbox\"].is-medium.is-rtl + label::before, .switch[type=\"checkbox\"].is-medium.is-rtl + label:before {\n      left: auto;\n      right: 0; }\n    .switch[type=\"checkbox\"].is-medium.is-rtl + label::after, .switch[type=\"checkbox\"].is-medium.is-rtl + label:after {\n      left: auto;\n      right: 2rem; }\n  .switch[type=\"checkbox\"].is-medium:checked + label::before, .switch[type=\"checkbox\"].is-medium:checked + label:before {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-medium:checked + label::after {\n    left: 2rem; }\n  .switch[type=\"checkbox\"].is-medium:checked.is-rtl + label::after, .switch[type=\"checkbox\"].is-medium:checked.is-rtl + label:after {\n    left: auto;\n    right: 0.25rem; }\n  .switch[type=\"checkbox\"].is-medium.is-outlined + label::before, .switch[type=\"checkbox\"].is-medium.is-outlined + label:before {\n    background-color: transparent;\n    border-color: #657786; }\n  .switch[type=\"checkbox\"].is-medium.is-outlined + label::after, .switch[type=\"checkbox\"].is-medium.is-outlined + label:after {\n    background: #657786; }\n  .switch[type=\"checkbox\"].is-medium.is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-medium.is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #344fff; }\n  .switch[type=\"checkbox\"].is-medium.is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-medium.is-outlined:checked + label:after {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-medium.is-rounded + label::before, .switch[type=\"checkbox\"].is-medium.is-rounded + label:before {\n    border-radius: 24px; }\n  .switch[type=\"checkbox\"].is-medium.is-rounded + label::after, .switch[type=\"checkbox\"].is-medium.is-rounded + label:after {\n    border-radius: 50%; }\n  .switch[type=\"checkbox\"].is-large + label {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1.5rem;\n    height: 2.5em;\n    line-height: 1.5;\n    padding-left: 5rem;\n    padding-top: .2rem;\n    cursor: pointer; }\n    .switch[type=\"checkbox\"].is-large + label::before, .switch[type=\"checkbox\"].is-large + label:before {\n      position: absolute;\n      display: block;\n      top: calc( 50% - 2.25rem * 0.5);\n      left: 0;\n      width: 4.5rem;\n      height: 2.25rem;\n      border: 0.1rem solid transparent;\n      border-radius: 4px;\n      background: #657786;\n      content: ''; }\n    .switch[type=\"checkbox\"].is-large + label::after, .switch[type=\"checkbox\"].is-large + label:after {\n      display: block;\n      position: absolute;\n      top: calc( 50% - 1.75rem * 0.5);\n      left: 0.25rem;\n      width: 1.75rem;\n      height: 1.75rem;\n      transform: translate3d(0, 0, 0);\n      border-radius: 4px;\n      background: #ffffff;\n      transition: all 0.25s ease-out;\n      content: ''; }\n  .switch[type=\"checkbox\"].is-large.is-rtl + label {\n    padding-left: 0;\n    padding-right: 5rem; }\n    .switch[type=\"checkbox\"].is-large.is-rtl + label::before, .switch[type=\"checkbox\"].is-large.is-rtl + label:before {\n      left: auto;\n      right: 0; }\n    .switch[type=\"checkbox\"].is-large.is-rtl + label::after, .switch[type=\"checkbox\"].is-large.is-rtl + label:after {\n      left: auto;\n      right: 2.375rem; }\n  .switch[type=\"checkbox\"].is-large:checked + label::before, .switch[type=\"checkbox\"].is-large:checked + label:before {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-large:checked + label::after {\n    left: 2.375rem; }\n  .switch[type=\"checkbox\"].is-large:checked.is-rtl + label::after, .switch[type=\"checkbox\"].is-large:checked.is-rtl + label:after {\n    left: auto;\n    right: 0.25rem; }\n  .switch[type=\"checkbox\"].is-large.is-outlined + label::before, .switch[type=\"checkbox\"].is-large.is-outlined + label:before {\n    background-color: transparent;\n    border-color: #657786; }\n  .switch[type=\"checkbox\"].is-large.is-outlined + label::after, .switch[type=\"checkbox\"].is-large.is-outlined + label:after {\n    background: #657786; }\n  .switch[type=\"checkbox\"].is-large.is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-large.is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #344fff; }\n  .switch[type=\"checkbox\"].is-large.is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-large.is-outlined:checked + label:after {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-large.is-rounded + label::before, .switch[type=\"checkbox\"].is-large.is-rounded + label:before {\n    border-radius: 24px; }\n  .switch[type=\"checkbox\"].is-large.is-rounded + label::after, .switch[type=\"checkbox\"].is-large.is-rounded + label:after {\n    border-radius: 50%; }\n  .switch[type=\"checkbox\"].is-light:checked + label::before, .switch[type=\"checkbox\"].is-light:checked + label:before {\n    background: #657786; }\n  .switch[type=\"checkbox\"].is-light.is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-light.is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #657786 !important; }\n  .switch[type=\"checkbox\"].is-light.is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-light.is-outlined:checked + label:after {\n    background: #657786; }\n  .switch[type=\"checkbox\"].is-primary:checked + label::before, .switch[type=\"checkbox\"].is-primary:checked + label:before {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-primary.is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-primary.is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #344fff !important; }\n  .switch[type=\"checkbox\"].is-primary.is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-primary.is-outlined:checked + label:after {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-success:checked + label::before, .switch[type=\"checkbox\"].is-success:checked + label:before {\n    background: #34de80; }\n  .switch[type=\"checkbox\"].is-success.is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-success.is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #34de80 !important; }\n  .switch[type=\"checkbox\"].is-success.is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-success.is-outlined:checked + label:after {\n    background: #34de80; }\n  .switch[type=\"checkbox\"].is-warning:checked + label::before, .switch[type=\"checkbox\"].is-warning:checked + label:before {\n    background: #FDE203; }\n  .switch[type=\"checkbox\"].is-warning.is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-warning.is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #FDE203 !important; }\n  .switch[type=\"checkbox\"].is-warning.is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-warning.is-outlined:checked + label:after {\n    background: #FDE203; }\n  .switch[type=\"checkbox\"].is-danger:checked + label::before, .switch[type=\"checkbox\"].is-danger:checked + label:before {\n    background: #f72e2e; }\n  .switch[type=\"checkbox\"].is-danger.is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-danger.is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #f72e2e !important; }\n  .switch[type=\"checkbox\"].is-danger.is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-danger.is-outlined:checked + label:after {\n    background: #f72e2e; }\n\n.is-checkradio[type=\"radio\"],\n.is-checkradio[type=\"checkbox\"] {\n  outline: 0;\n  user-select: none;\n  display: inline-block;\n  position: absolute;\n  opacity: 0; }\n  .is-checkradio[type=\"radio\"] + label,\n  .is-checkradio[type=\"checkbox\"] + label {\n    position: relative;\n    display: initial;\n    cursor: pointer;\n    vertical-align: middle;\n    margin: .5em;\n    padding: .2rem .5rem .2rem 0;\n    border-radius: 4px; }\n    .is-checkradio[type=\"radio\"] + label:first-of-type,\n    .is-checkradio[type=\"checkbox\"] + label:first-of-type {\n      margin-left: 0; }\n    .is-checkradio[type=\"radio\"] + label:hover::before, .is-checkradio[type=\"radio\"] + label:hover:before,\n    .is-checkradio[type=\"checkbox\"] + label:hover::before,\n    .is-checkradio[type=\"checkbox\"] + label:hover:before {\n      animation-duration: 0.4s;\n      animation-fill-mode: both;\n      animation-name: hover-color; }\n    .is-checkradio[type=\"radio\"] + label::before, .is-checkradio[type=\"radio\"] + label:before,\n    .is-checkradio[type=\"checkbox\"] + label::before,\n    .is-checkradio[type=\"checkbox\"] + label:before {\n      position: absolute;\n      left: 0;\n      top: 0rem;\n      content: '';\n      border: 0.1rem solid #dbdbdb; }\n    .is-checkradio[type=\"radio\"] + label::after, .is-checkradio[type=\"radio\"] + label:after,\n    .is-checkradio[type=\"checkbox\"] + label::after,\n    .is-checkradio[type=\"checkbox\"] + label:after {\n      position: absolute;\n      display: none;\n      content: '';\n      top: 0rem; }\n  .is-checkradio[type=\"radio\"].is-rtl + label,\n  .is-checkradio[type=\"checkbox\"].is-rtl + label {\n    margin-right: 0rem;\n    margin-left: 0.5rem; }\n    .is-checkradio[type=\"radio\"].is-rtl + label::before, .is-checkradio[type=\"radio\"].is-rtl + label:before,\n    .is-checkradio[type=\"checkbox\"].is-rtl + label::before,\n    .is-checkradio[type=\"checkbox\"].is-rtl + label:before {\n      left: auto;\n      right: 0; }\n  .is-checkradio[type=\"radio\"]:focus + label::before, .is-checkradio[type=\"radio\"]:focus + label:before,\n  .is-checkradio[type=\"checkbox\"]:focus + label::before,\n  .is-checkradio[type=\"checkbox\"]:focus + label:before {\n    outline: 1px dotted #657786; }\n  .is-checkradio[type=\"radio\"]:hover:not([disabled]) + label::before, .is-checkradio[type=\"radio\"]:hover:not([disabled]) + label:before,\n  .is-checkradio[type=\"checkbox\"]:hover:not([disabled]) + label::before,\n  .is-checkradio[type=\"checkbox\"]:hover:not([disabled]) + label:before {\n    border-color: #344fff !important; }\n  .is-checkradio[type=\"radio\"]:checked + label::before, .is-checkradio[type=\"radio\"]:checked + label:before,\n  .is-checkradio[type=\"checkbox\"]:checked + label::before,\n  .is-checkradio[type=\"checkbox\"]:checked + label:before {\n    border: 0.1rem solid #dbdbdb; }\n  .is-checkradio[type=\"radio\"]:checked[disabled],\n  .is-checkradio[type=\"checkbox\"]:checked[disabled] {\n    cursor: not-allowed; }\n    .is-checkradio[type=\"radio\"]:checked[disabled] + label,\n    .is-checkradio[type=\"checkbox\"]:checked[disabled] + label {\n      opacity: 0.5; }\n  .is-checkradio[type=\"radio\"]:checked + label::before, .is-checkradio[type=\"radio\"]:checked + label:before,\n  .is-checkradio[type=\"checkbox\"]:checked + label::before,\n  .is-checkradio[type=\"checkbox\"]:checked + label:before {\n    animation-name: none; }\n  .is-checkradio[type=\"radio\"]:checked + label::after, .is-checkradio[type=\"radio\"]:checked + label:after,\n  .is-checkradio[type=\"checkbox\"]:checked + label::after,\n  .is-checkradio[type=\"checkbox\"]:checked + label:after {\n    display: inline-block; }\n  .is-checkradio[type=\"radio\"][disabled],\n  .is-checkradio[type=\"checkbox\"][disabled] {\n    cursor: not-allowed; }\n    .is-checkradio[type=\"radio\"][disabled] + label,\n    .is-checkradio[type=\"checkbox\"][disabled] + label {\n      opacity: 0.5;\n      cursor: not-allowed; }\n      .is-checkradio[type=\"radio\"][disabled] + label:hover, .is-checkradio[type=\"radio\"][disabled] + label:before, .is-checkradio[type=\"radio\"][disabled] + label::before, .is-checkradio[type=\"radio\"][disabled] + label::after, .is-checkradio[type=\"radio\"][disabled] + label:after,\n      .is-checkradio[type=\"checkbox\"][disabled] + label:hover,\n      .is-checkradio[type=\"checkbox\"][disabled] + label:before,\n      .is-checkradio[type=\"checkbox\"][disabled] + label::before,\n      .is-checkradio[type=\"checkbox\"][disabled] + label::after,\n      .is-checkradio[type=\"checkbox\"][disabled] + label:after {\n        cursor: not-allowed; }\n    .is-checkradio[type=\"radio\"][disabled]:hover,\n    .is-checkradio[type=\"checkbox\"][disabled]:hover {\n      cursor: not-allowed; }\n      .is-checkradio[type=\"radio\"][disabled]:hover::before, .is-checkradio[type=\"radio\"][disabled]:hover:before,\n      .is-checkradio[type=\"checkbox\"][disabled]:hover::before,\n      .is-checkradio[type=\"checkbox\"][disabled]:hover:before {\n        animation-name: none; }\n    .is-checkradio[type=\"radio\"][disabled]::before, .is-checkradio[type=\"radio\"][disabled]:before,\n    .is-checkradio[type=\"checkbox\"][disabled]::before,\n    .is-checkradio[type=\"checkbox\"][disabled]:before {\n      cursor: not-allowed; }\n    .is-checkradio[type=\"radio\"][disabled]::after, .is-checkradio[type=\"radio\"][disabled]:after,\n    .is-checkradio[type=\"checkbox\"][disabled]::after,\n    .is-checkradio[type=\"checkbox\"][disabled]:after {\n      cursor: not-allowed; }\n\n.is-checkradio[type=\"checkbox\"] + label::before, .is-checkradio[type=\"checkbox\"] + label:before {\n  border-radius: 4px; }\n\n.is-checkradio[type=\"checkbox\"] + label::after, .is-checkradio[type=\"checkbox\"] + label:after {\n  box-sizing: border-box;\n  transform: translateY(0rem) rotate(45deg);\n  border-width: 0.1rem;\n  border-style: solid;\n  border-color: #344fff;\n  border-top: 0;\n  border-left: 0; }\n\n.is-checkradio[type=\"checkbox\"].is-circle + label::before, .is-checkradio[type=\"checkbox\"].is-circle + label:before {\n  border-radius: 50%; }\n\n.is-checkradio[type=\"checkbox\"] + label {\n  font-size: 1rem;\n  padding-left: 2rem; }\n  .is-checkradio[type=\"checkbox\"] + label::before, .is-checkradio[type=\"checkbox\"] + label:before {\n    width: 1.5rem;\n    height: 1.5rem; }\n  .is-checkradio[type=\"checkbox\"] + label::after, .is-checkradio[type=\"checkbox\"] + label:after {\n    width: 0.375rem;\n    height: 0.6rem;\n    top: 0.405rem;\n    left: 0.6rem; }\n\n.is-checkradio[type=\"checkbox\"].is-rtl + label {\n  padding-left: 0;\n  padding-right: 2rem; }\n  .is-checkradio[type=\"checkbox\"].is-rtl + label::after, .is-checkradio[type=\"checkbox\"].is-rtl + label:after {\n    left: auto;\n    right: 0.6rem; }\n\n.is-checkradio[type=\"checkbox\"].is-small + label {\n  font-size: 0.75rem;\n  padding-left: 1.5rem; }\n  .is-checkradio[type=\"checkbox\"].is-small + label::before, .is-checkradio[type=\"checkbox\"].is-small + label:before {\n    width: 1.125rem;\n    height: 1.125rem; }\n  .is-checkradio[type=\"checkbox\"].is-small + label::after, .is-checkradio[type=\"checkbox\"].is-small + label:after {\n    width: 0.28125rem;\n    height: 0.45rem;\n    top: 0.30375rem;\n    left: 0.45rem; }\n\n.is-checkradio[type=\"checkbox\"].is-small.is-rtl + label {\n  padding-left: 0;\n  padding-right: 1.5rem; }\n  .is-checkradio[type=\"checkbox\"].is-small.is-rtl + label::after, .is-checkradio[type=\"checkbox\"].is-small.is-rtl + label:after {\n    left: auto;\n    right: 0.45rem; }\n\n.is-checkradio[type=\"checkbox\"].is-medium + label {\n  font-size: 1.25rem;\n  padding-left: 2.5rem; }\n  .is-checkradio[type=\"checkbox\"].is-medium + label::before, .is-checkradio[type=\"checkbox\"].is-medium + label:before {\n    width: 1.875rem;\n    height: 1.875rem; }\n  .is-checkradio[type=\"checkbox\"].is-medium + label::after, .is-checkradio[type=\"checkbox\"].is-medium + label:after {\n    width: 0.46875rem;\n    height: 0.75rem;\n    top: 0.50625rem;\n    left: 0.75rem; }\n\n.is-checkradio[type=\"checkbox\"].is-medium.is-rtl + label {\n  padding-left: 0;\n  padding-right: 2.5rem; }\n  .is-checkradio[type=\"checkbox\"].is-medium.is-rtl + label::after, .is-checkradio[type=\"checkbox\"].is-medium.is-rtl + label:after {\n    left: auto;\n    right: 0.75rem; }\n\n.is-checkradio[type=\"checkbox\"].is-large + label {\n  font-size: 1.5rem;\n  padding-left: 3rem; }\n  .is-checkradio[type=\"checkbox\"].is-large + label::before, .is-checkradio[type=\"checkbox\"].is-large + label:before {\n    width: 2.25rem;\n    height: 2.25rem; }\n  .is-checkradio[type=\"checkbox\"].is-large + label::after, .is-checkradio[type=\"checkbox\"].is-large + label:after {\n    width: 0.5625rem;\n    height: 0.9rem;\n    top: 0.6075rem;\n    left: 0.9rem; }\n\n.is-checkradio[type=\"checkbox\"].is-large.is-rtl + label {\n  padding-left: 0;\n  padding-right: 3rem; }\n  .is-checkradio[type=\"checkbox\"].is-large.is-rtl + label::after, .is-checkradio[type=\"checkbox\"].is-large.is-rtl + label:after {\n    left: auto;\n    right: 0.9rem; }\n\n.is-checkradio[type=\"checkbox\"].is-light:hover:not([disabled]) + label::before, .is-checkradio[type=\"checkbox\"].is-light:hover:not([disabled]) + label:before {\n  border-color: #657786 !important; }\n\n.is-checkradio[type=\"checkbox\"].is-light:checked + label::after, .is-checkradio[type=\"checkbox\"].is-light:checked + label:after {\n  border-color: #657786 !important; }\n\n.is-checkradio[type=\"checkbox\"].is-primary:hover:not([disabled]) + label::before, .is-checkradio[type=\"checkbox\"].is-primary:hover:not([disabled]) + label:before {\n  border-color: #344fff !important; }\n\n.is-checkradio[type=\"checkbox\"].is-primary:checked + label::after, .is-checkradio[type=\"checkbox\"].is-primary:checked + label:after {\n  border-color: #344fff !important; }\n\n.is-checkradio[type=\"checkbox\"].is-success:hover:not([disabled]) + label::before, .is-checkradio[type=\"checkbox\"].is-success:hover:not([disabled]) + label:before {\n  border-color: #34de80 !important; }\n\n.is-checkradio[type=\"checkbox\"].is-success:checked + label::after, .is-checkradio[type=\"checkbox\"].is-success:checked + label:after {\n  border-color: #34de80 !important; }\n\n.is-checkradio[type=\"checkbox\"].is-warning:hover:not([disabled]) + label::before, .is-checkradio[type=\"checkbox\"].is-warning:hover:not([disabled]) + label:before {\n  border-color: #FDE203 !important; }\n\n.is-checkradio[type=\"checkbox\"].is-warning:checked + label::after, .is-checkradio[type=\"checkbox\"].is-warning:checked + label:after {\n  border-color: #FDE203 !important; }\n\n.is-checkradio[type=\"checkbox\"].is-danger:hover:not([disabled]) + label::before, .is-checkradio[type=\"checkbox\"].is-danger:hover:not([disabled]) + label:before {\n  border-color: #f72e2e !important; }\n\n.is-checkradio[type=\"checkbox\"].is-danger:checked + label::after, .is-checkradio[type=\"checkbox\"].is-danger:checked + label:after {\n  border-color: #f72e2e !important; }\n\n.is-checkradio[type=\"checkbox\"]:indeterminate + label::after, .is-checkradio[type=\"checkbox\"]:indeterminate + label:after {\n  display: inline-block;\n  transform: rotate(90deg);\n  border-bottom: none; }\n\n.is-checkradio[type=\"checkbox\"]:indeterminate.is-light + label::after, .is-checkradio[type=\"checkbox\"]:indeterminate.is-light + label:after {\n  border-color: #657786; }\n\n.is-checkradio[type=\"checkbox\"]:indeterminate.is-primary + label::after, .is-checkradio[type=\"checkbox\"]:indeterminate.is-primary + label:after {\n  border-color: #344fff; }\n\n.is-checkradio[type=\"checkbox\"]:indeterminate.is-success + label::after, .is-checkradio[type=\"checkbox\"]:indeterminate.is-success + label:after {\n  border-color: #34de80; }\n\n.is-checkradio[type=\"checkbox\"]:indeterminate.is-warning + label::after, .is-checkradio[type=\"checkbox\"]:indeterminate.is-warning + label:after {\n  border-color: #FDE203; }\n\n.is-checkradio[type=\"checkbox\"]:indeterminate.is-danger + label::after, .is-checkradio[type=\"checkbox\"]:indeterminate.is-danger + label:after {\n  border-color: #f72e2e; }\n\n.is-checkradio[type=\"radio\"] + label::before, .is-checkradio[type=\"radio\"] + label:before {\n  border-radius: 50%; }\n\n.is-checkradio[type=\"radio\"] + label::after, .is-checkradio[type=\"radio\"] + label:after {\n  border-radius: 50%;\n  background: #344fff;\n  left: 0;\n  transform: scale(0.5); }\n\n.is-checkradio[type=\"radio\"].is-rtl + label {\n  padding-left: 0; }\n  .is-checkradio[type=\"radio\"].is-rtl + label::after, .is-checkradio[type=\"radio\"].is-rtl + label:after {\n    left: auto;\n    right: 0; }\n\n.is-checkradio[type=\"radio\"] + label {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  padding-left: 2rem; }\n  .is-checkradio[type=\"radio\"] + label::before, .is-checkradio[type=\"radio\"] + label:before, .is-checkradio[type=\"radio\"] + label::after, .is-checkradio[type=\"radio\"] + label:after {\n    width: 1.5rem;\n    height: 1.5rem; }\n\n.is-checkradio[type=\"radio\"].is-rtl + label {\n  padding-right: 2rem; }\n\n.is-checkradio[type=\"radio\"].is-small + label {\n  font-size: 0.75rem;\n  line-height: 1.125rem;\n  padding-left: 1.5rem; }\n  .is-checkradio[type=\"radio\"].is-small + label::before, .is-checkradio[type=\"radio\"].is-small + label:before, .is-checkradio[type=\"radio\"].is-small + label::after, .is-checkradio[type=\"radio\"].is-small + label:after {\n    width: 1.125rem;\n    height: 1.125rem; }\n\n.is-checkradio[type=\"radio\"].is-small.is-rtl + label {\n  padding-right: 1.5rem; }\n\n.is-checkradio[type=\"radio\"].is-medium + label {\n  font-size: 1.25rem;\n  line-height: 1.875rem;\n  padding-left: 2.5rem; }\n  .is-checkradio[type=\"radio\"].is-medium + label::before, .is-checkradio[type=\"radio\"].is-medium + label:before, .is-checkradio[type=\"radio\"].is-medium + label::after, .is-checkradio[type=\"radio\"].is-medium + label:after {\n    width: 1.875rem;\n    height: 1.875rem; }\n\n.is-checkradio[type=\"radio\"].is-medium.is-rtl + label {\n  padding-right: 2.5rem; }\n\n.is-checkradio[type=\"radio\"].is-large + label {\n  font-size: 1.5rem;\n  line-height: 2.25rem;\n  padding-left: 3rem; }\n  .is-checkradio[type=\"radio\"].is-large + label::before, .is-checkradio[type=\"radio\"].is-large + label:before, .is-checkradio[type=\"radio\"].is-large + label::after, .is-checkradio[type=\"radio\"].is-large + label:after {\n    width: 2.25rem;\n    height: 2.25rem; }\n\n.is-checkradio[type=\"radio\"].is-large.is-rtl + label {\n  padding-right: 3rem; }\n\n.is-checkradio[type=\"radio\"].is-light:hover:not([disabled]) + label::before, .is-checkradio[type=\"radio\"].is-light:hover:not([disabled]) + label:before {\n  border-color: #657786 !important; }\n\n.is-checkradio[type=\"radio\"].is-light:checked + label::after, .is-checkradio[type=\"radio\"].is-light:checked + label:after {\n  border-color: #657786 !important;\n  background-color: #657786 !important; }\n\n.is-checkradio[type=\"radio\"].is-primary:hover:not([disabled]) + label::before, .is-checkradio[type=\"radio\"].is-primary:hover:not([disabled]) + label:before {\n  border-color: #344fff !important; }\n\n.is-checkradio[type=\"radio\"].is-primary:checked + label::after, .is-checkradio[type=\"radio\"].is-primary:checked + label:after {\n  border-color: #344fff !important;\n  background-color: #344fff !important; }\n\n.is-checkradio[type=\"radio\"].is-success:hover:not([disabled]) + label::before, .is-checkradio[type=\"radio\"].is-success:hover:not([disabled]) + label:before {\n  border-color: #34de80 !important; }\n\n.is-checkradio[type=\"radio\"].is-success:checked + label::after, .is-checkradio[type=\"radio\"].is-success:checked + label:after {\n  border-color: #34de80 !important;\n  background-color: #34de80 !important; }\n\n.is-checkradio[type=\"radio\"].is-warning:hover:not([disabled]) + label::before, .is-checkradio[type=\"radio\"].is-warning:hover:not([disabled]) + label:before {\n  border-color: #FDE203 !important; }\n\n.is-checkradio[type=\"radio\"].is-warning:checked + label::after, .is-checkradio[type=\"radio\"].is-warning:checked + label:after {\n  border-color: #FDE203 !important;\n  background-color: #FDE203 !important; }\n\n.is-checkradio[type=\"radio\"].is-danger:hover:not([disabled]) + label::before, .is-checkradio[type=\"radio\"].is-danger:hover:not([disabled]) + label:before {\n  border-color: #f72e2e !important; }\n\n.is-checkradio[type=\"radio\"].is-danger:checked + label::after, .is-checkradio[type=\"radio\"].is-danger:checked + label:after {\n  border-color: #f72e2e !important;\n  background-color: #f72e2e !important; }\n\n/* Bulma Grid */\n.column {\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.75rem; }\n  .columns.is-mobile > .column.is-narrow {\n    flex: none;\n    width: unset; }\n  .columns.is-mobile > .column.is-4 {\n    flex: none;\n    width: 33.33333%; }\n  .columns.is-mobile > .column.is-6 {\n    flex: none;\n    width: 50%; }\n  .columns.is-mobile > .column.is-8 {\n    flex: none;\n    width: 66.66667%; }\n  .columns.is-mobile > .column.is-12 {\n    flex: none;\n    width: 100%; }\n  @media screen and (max-width: 768px) {\n    .column.is-6-mobile {\n      flex: none;\n      width: 50%; } }\n  @media screen and (min-width: 769px), print {\n    .column.is-narrow {\n      flex: none;\n      width: unset; }\n    .column.is-4 {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-6, .column.is-6-tablet {\n      flex: none;\n      width: 50%; }\n    .column.is-8 {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-12 {\n      flex: none;\n      width: 100%; } }\n  @media screen and (max-width: 1023px) {\n    .column.is-12-touch {\n      flex: none;\n      width: 100%; } }\n\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem; }\n  .columns:last-child {\n    margin-bottom: -0.75rem; }\n  .columns:not(:last-child) {\n    margin-bottom: calc(1.5rem - 0.75rem); }\n  .columns.is-centered {\n    justify-content: center; }\n  .columns.is-mobile {\n    display: flex; }\n  .columns.is-multiline {\n    flex-wrap: wrap; }\n  @media screen and (min-width: 769px), print {\n    .columns:not(.is-desktop) {\n      display: flex; } }\n\n/* Bulma Helpers */\n.has-text-white {\n  color: #ffffff !important; }\n\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important; }\n\n.has-background-white {\n  background-color: #ffffff !important; }\n\n.has-text-light {\n  color: #657786 !important; }\n\na.has-text-light:hover, a.has-text-light:focus {\n  color: #4f5d69 !important; }\n\n.has-text-dark {\n  color: #415B76 !important; }\n\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #2f4255 !important; }\n\n.has-text-primary {\n  color: #344fff !important; }\n\na.has-text-primary:hover, a.has-text-primary:focus {\n  color: #0123ff !important; }\n\n.has-text-info {\n  color: #51527c !important; }\n\na.has-text-info:hover, a.has-text-info:focus {\n  color: #3d3e5d !important; }\n\n.has-text-success {\n  color: #34de80 !important; }\n\na.has-text-success:hover, a.has-text-success:focus {\n  color: #1fc067 !important; }\n\n.has-text-warning {\n  color: #FDE203 !important; }\n\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #cbb602 !important; }\n\n.has-text-danger {\n  color: #f72e2e !important; }\n\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #e90909 !important; }\n\n.has-background-danger {\n  background-color: #f72e2e !important; }\n\n.is-justify-content-center {\n  justify-content: center !important; }\n\n.is-pulled-left {\n  float: left !important; }\n\n.is-marginless {\n  margin: 0 !important; }\n\n.is-size-1 {\n  font-size: 3rem !important; }\n\n.is-size-2 {\n  font-size: 2.5rem !important; }\n\n.is-size-3 {\n  font-size: 2rem !important; }\n\n.is-size-4 {\n  font-size: 1.5rem !important; }\n\n.is-size-5 {\n  font-size: 1.25rem !important; }\n\n.is-size-6 {\n  font-size: 1rem !important; }\n\n.is-size-7 {\n  font-size: 0.75rem !important; }\n\n.has-text-centered {\n  text-align: center !important; }\n\n.has-text-justified {\n  text-align: justify !important; }\n\n.has-text-left {\n  text-align: left !important; }\n\n.has-text-right {\n  text-align: right !important; }\n\n.is-capitalized {\n  text-transform: capitalize !important; }\n\n.is-lowercase {\n  text-transform: lowercase !important; }\n\n.is-underlined {\n  text-decoration: underline !important; }\n\n.has-text-weight-light {\n  font-weight: 300 !important; }\n\n.has-text-weight-semibold {\n  font-weight: 600 !important; }\n\n.has-text-weight-bold {\n  font-weight: 700 !important; }\n\n.is-flex {\n  display: flex !important; }\n\n@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: flex !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-flex-touch {\n    display: flex !important; } }\n\n.is-sr-only {\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 0.01em !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 0.01em !important; }\n\n/* Bulma Layout */\n\n.section {\n  padding: 3rem 1.5rem; }\n  @media screen and (min-width: 1024px) {\n    .section {\n      padding: 3rem 3rem; }\n      .section.is-medium {\n        padding: 9rem 4.5rem; }\n      .section.is-large {\n        padding: 18rem 6rem; } }\n\n.footer {\n  background-color: #fafafa;\n  padding: 3rem 1.5rem 6rem; }\n";
  styleInject(css_248z$8);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function noop() {}

  function assign(tar, src) {
    // @ts-ignore
    for (var k in src) {
      tar[k] = src[k];
    }

    return tar;
  }

  function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
      loc: {
        file: file,
        line: line,
        column: column,
        char: char
      }
    };
  }

  function run(fn) {
    return fn();
  }

  function blank_object() {
    return Object.create(null);
  }

  function run_all(fns) {
    fns.forEach(run);
  }

  function is_function(thing) {
    return typeof thing === 'function';
  }

  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
  }

  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }

  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }

  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }

  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      var lets = definition[2](fn(dirty));

      if ($$scope.dirty === undefined) {
        return lets;
      }

      if (_typeof(lets) === 'object') {
        var merged = [];
        var len = Math.max($$scope.dirty.length, lets.length);

        for (var i = 0; i < len; i += 1) {
          merged[i] = $$scope.dirty[i] | lets[i];
        }

        return merged;
      }

      return $$scope.dirty | lets;
    }

    return $$scope.dirty;
  }

  function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
      var slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
      slot.p(slot_context, slot_changes);
    }
  }

  function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
      var dirty = [];
      var length = $$scope.ctx.length / 32;

      for (var i = 0; i < length; i++) {
        dirty[i] = -1;
      }

      return dirty;
    }

    return -1;
  }

  function null_to_empty(value) {
    return value == null ? '' : value;
  }

  function append(target, node) {
    target.appendChild(node);
  }

  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }

  function detach(node) {
    node.parentNode.removeChild(node);
  }

  function destroy_each(iterations, detaching) {
    for (var i = 0; i < iterations.length; i += 1) {
      if (iterations[i]) iterations[i].d(detaching);
    }
  }

  function element(name) {
    return document.createElement(name);
  }

  function text(data) {
    return document.createTextNode(data);
  }

  function space() {
    return text(' ');
  }

  function empty() {
    return text('');
  }

  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return function () {
      return node.removeEventListener(event, handler, options);
    };
  }

  function prevent_default(fn) {
    return function (event) {
      event.preventDefault(); // @ts-ignore

      return fn.call(this, event);
    };
  }

  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }

  function to_number(value) {
    return value === '' ? null : +value;
  }

  function children(element) {
    return Array.from(element.childNodes);
  }

  function set_input_value(input, value) {
    input.value = value == null ? '' : value;
  }

  function set_style(node, key, value, important) {
    node.style.setProperty(key, value, important ? 'important' : '');
  }

  function custom_event(type, detail) {
    var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, false, detail);
    return e;
  }

  var current_component;

  function set_current_component(component) {
    current_component = component;
  }

  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;

  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }

  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }

  var flushing = false;
  var seen_callbacks = new Set();

  function flush() {
    if (flushing) return;
    flushing = true;

    do {
      // first, call beforeUpdate functions
      // and update components
      for (var i = 0; i < dirty_components.length; i += 1) {
        var component = dirty_components[i];
        set_current_component(component);
        update(component.$$);
      }

      set_current_component(null);
      dirty_components.length = 0;

      while (binding_callbacks.length) {
        binding_callbacks.pop()();
      } // then, once components are updated, call
      // afterUpdate functions. This may cause
      // subsequent updates...


      for (var _i4 = 0; _i4 < render_callbacks.length; _i4 += 1) {
        var callback = render_callbacks[_i4];

        if (!seen_callbacks.has(callback)) {
          // ...so guard against infinite loops
          seen_callbacks.add(callback);
          callback();
        }
      }

      render_callbacks.length = 0;
    } while (dirty_components.length);

    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }

    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }

  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      var dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }

  var outroing = new Set();
  var outros;

  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros // parent group

    };
  }

  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }

    outros = outros.p;
  }

  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }

  function transition_out(block, local, detach, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(function () {
        outroing.delete(block);

        if (callback) {
          if (detach) block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }

  var globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;

  function create_component(block) {
    block && block.c();
  }

  function mount_component(component, target, anchor, customElement) {
    var _component$$$ = component.$$,
        fragment = _component$$$.fragment,
        on_mount = _component$$$.on_mount,
        on_destroy = _component$$$.on_destroy,
        after_update = _component$$$.after_update;
    fragment && fragment.m(target, anchor);

    if (!customElement) {
      // onMount happens before the initial afterUpdate
      add_render_callback(function () {
        var new_on_destroy = on_mount.map(run).filter(is_function);

        if (on_destroy) {
          on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
        } else {
          // Edge case - component was destroyed immediately,
          // most likely as a result of a binding initialising
          run_all(new_on_destroy);
        }

        component.$$.on_mount = [];
      });
    }

    after_update.forEach(add_render_callback);
  }

  function destroy_component(component, detaching) {
    var $$ = component.$$;

    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
      // preserve final state?)

      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }

  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }

    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }

  function init(component, options, instance, create_fragment, not_equal, props, append_styles) {
    var dirty = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [-1];
    var parent_component = current_component;
    set_current_component(component);
    var $$ = component.$$ = {
      fragment: null,
      ctx: null,
      // state
      props: props,
      update: noop,
      not_equal: not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(parent_component ? parent_component.$$.context : options.context || []),
      // everything else
      callbacks: blank_object(),
      dirty: dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    var ready = false;
    $$.ctx = instance ? instance(component, options.props || {}, function (i, ret) {
      var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }

      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update); // `false` as a special case of no DOM component

    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

    if (options.target) {
      if (options.hydrate) {
        var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.c();
      }

      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      flush();
    }

    set_current_component(parent_component);
  }
  /**
   * Base class for Svelte components. Used when dev=false.
   */


  var SvelteComponent = /*#__PURE__*/function () {
    function SvelteComponent() {
      _classCallCheck(this, SvelteComponent);
    }

    _createClass(SvelteComponent, [{
      key: "$destroy",
      value: function $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
    }, {
      key: "$on",
      value: function $on(type, callback) {
        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return function () {
          var index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    }]);

    return SvelteComponent;
  }();

  function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({
      version: '3.41.0'
    }, detail), true));
  }

  function append_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', {
      target: target,
      node: node
    });
    append(target, node);
  }

  function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', {
      target: target,
      node: node,
      anchor: anchor
    });
    insert(target, node, anchor);
  }

  function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', {
      node: node
    });
    detach(node);
  }

  function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    var modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default) modifiers.push('preventDefault');
    if (has_stop_propagation) modifiers.push('stopPropagation');
    dispatch_dev('SvelteDOMAddEventListener', {
      node: node,
      event: event,
      handler: handler,
      modifiers: modifiers
    });
    var dispose = listen(node, event, handler, options);
    return function () {
      dispatch_dev('SvelteDOMRemoveEventListener', {
        node: node,
        event: event,
        handler: handler,
        modifiers: modifiers
      });
      dispose();
    };
  }

  function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null) dispatch_dev('SvelteDOMRemoveAttribute', {
      node: node,
      attribute: attribute
    });else dispatch_dev('SvelteDOMSetAttribute', {
      node: node,
      attribute: attribute,
      value: value
    });
  }

  function prop_dev(node, property, value) {
    node[property] = value;
    dispatch_dev('SvelteDOMSetProperty', {
      node: node,
      property: property,
      value: value
    });
  }

  function set_data_dev(text, data) {
    data = '' + data;
    if (text.wholeText === data) return;
    dispatch_dev('SvelteDOMSetData', {
      node: text,
      data: data
    });
    text.data = data;
  }

  function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && _typeof(arg) === 'object' && 'length' in arg)) {
      var msg = '{#each} only iterates over array-like objects.';

      if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
        msg += ' You can use a spread to convert this iterable into an array.';
      }

      throw new Error(msg);
    }
  }

  function validate_slots(name, slot, keys) {
    for (var _i5 = 0, _Object$keys = Object.keys(slot); _i5 < _Object$keys.length; _i5++) {
      var slot_key = _Object$keys[_i5];

      if (!~keys.indexOf(slot_key)) {
        console.warn("<".concat(name, "> received an unexpected slot \"").concat(slot_key, "\"."));
      }
    }
  }
  /**
   * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
   */


  var SvelteComponentDev = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(SvelteComponentDev, _SvelteComponent);

    var _super3 = _createSuper(SvelteComponentDev);

    function SvelteComponentDev(options) {
      _classCallCheck(this, SvelteComponentDev);

      if (!options || !options.target && !options.$$inline) {
        throw new Error("'target' is a required option");
      }

      return _super3.call(this);
    }

    _createClass(SvelteComponentDev, [{
      key: "$destroy",
      value: function $destroy() {
        _get(_getPrototypeOf(SvelteComponentDev.prototype), "$destroy", this).call(this);

        this.$destroy = function () {
          console.warn('Component was already destroyed'); // eslint-disable-line no-console
        };
      }
    }, {
      key: "$capture_state",
      value: function $capture_state() {}
    }, {
      key: "$inject_state",
      value: function $inject_state() {}
    }]);

    return SvelteComponentDev;
  }(SvelteComponent);

  var random_string = function random_string(length) {
    "undefined" == typeof length && (length = 6);

    for (var result = "", characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", charactersLength = characters.length, i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  var css_248z$7 = "";
  styleInject(css_248z$7);

  var file$7 = "src\\components\\Modals\\SimpleModal.svelte";

  var get_trigger_slot_changes = function get_trigger_slot_changes(dirty) {
    return {};
  };

  var get_trigger_slot_context = function get_trigger_slot_context(ctx) {
    return {
      hide:
      /*deactivateModal*/
      ctx[13],
      open:
      /*activeModal*/
      ctx[12]
    };
  };

  var get_footer_slot_changes = function get_footer_slot_changes(dirty) {
    return {
      active: dirty &
      /*active*/
      2
    };
  };

  var get_footer_slot_context = function get_footer_slot_context(ctx) {
    return {
      active:
      /*active*/
      ctx[1],
      hide:
      /*deactivateModal*/
      ctx[13],
      open:
      /*activeModal*/
      ctx[12]
    };
  };

  var get_content_slot_changes = function get_content_slot_changes(dirty) {
    return {
      active: dirty &
      /*active*/
      2
    };
  };

  var get_content_slot_context = function get_content_slot_context(ctx) {
    return {
      active:
      /*active*/
      ctx[1],
      hide:
      /*deactivateModal*/
      ctx[13],
      open:
      /*activeModal*/
      ctx[12]
    };
  };

  var get_default_slot_changes$2 = function get_default_slot_changes(dirty) {
    return {};
  };

  var get_default_slot_context$2 = function get_default_slot_context(ctx) {
    return {
      hide:
      /*deactivateModal*/
      ctx[13],
      open:
      /*activeModal*/
      ctx[12]
    };
  };

  var get_title_slot_changes = function get_title_slot_changes(dirty) {
    return {
      active: dirty &
      /*active*/
      2
    };
  };

  var get_title_slot_context = function get_title_slot_context(ctx) {
    return {
      active:
      /*active*/
      ctx[1],
      hide:
      /*deactivateModal*/
      ctx[13],
      open:
      /*activeModal*/
      ctx[12]
    };
  }; // (201:0) {#if active === true}


  function create_if_block$5(ctx) {
    var div2;
    var section;
    var div0;
    var t0;
    var div1;
    var header;
    var t1;
    var button;
    var header_class_value;
    var t2;
    var main;
    var t3;
    var main_class_value;
    var main_id_value;
    var t4;
    var footer;
    var footer_id_value;
    var div1_class_value;
    var div1_aria_labelledby_value;
    var div2_class_value;
    var current;
    var mounted;
    var dispose;
    var title_slot_template =
    /*#slots*/
    ctx[16].title;
    var title_slot = create_slot(title_slot_template, ctx,
    /*$$scope*/
    ctx[15], get_title_slot_context);
    var default_slot_template =
    /*#slots*/
    ctx[16].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[15], get_default_slot_context$2);
    var content_slot_template =
    /*#slots*/
    ctx[16].content;
    var content_slot = create_slot(content_slot_template, ctx,
    /*$$scope*/
    ctx[15], get_content_slot_context);
    var footer_slot_template =
    /*#slots*/
    ctx[16].footer;
    var footer_slot = create_slot(footer_slot_template, ctx,
    /*$$scope*/
    ctx[15], get_footer_slot_context);
    var block = {
      c: function create() {
        div2 = element("div");
        section = element("section");
        div0 = element("div");
        t0 = space();
        div1 = element("div");
        header = element("header");
        if (title_slot) title_slot.c();
        t1 = space();
        button = element("button");
        t2 = space();
        main = element("main");
        if (default_slot) default_slot.c();
        t3 = space();
        if (content_slot) content_slot.c();
        t4 = space();
        footer = element("footer");
        if (footer_slot) footer_slot.c();
        attr_dev(div0, "class", "overlay_trigger svelte-hxz2uj");
        add_location(div0, file$7, 203, 12, 4339);
        attr_dev(button, "class", "modal__close svelte-hxz2uj");
        attr_dev(button, "aria-label", "Close modal");
        attr_dev(button, "data-micromodal-close", "");
        add_location(button, file$7, 207, 20, 4776);
        attr_dev(header, "class", header_class_value = "modal__header " +
        /*classesHeader*/
        ctx[4] + " svelte-hxz2uj");
        set_style(header, "position", "relative");
        add_location(header, file$7, 205, 16, 4624);
        attr_dev(main, "class", main_class_value = "modal__content " +
        /*classesContent*/
        ctx[3] + " svelte-hxz2uj");
        attr_dev(main, "id", main_id_value = "" + (
        /*id*/
        ctx[2] + "-content"));
        add_location(main, file$7, 209, 16, 4956);
        attr_dev(footer, "class", "modal__footer");
        attr_dev(footer, "id", footer_id_value = "" + (
        /*id*/
        ctx[2] + "-footer"));
        add_location(footer, file$7, 213, 16, 5199);
        attr_dev(div1, "style",
        /*styles*/
        ctx[6]);
        attr_dev(div1, "class", div1_class_value = "modal__container animate__animated animate__fadeInUp faster animated custom-scrollbar " +
        /*classesContent*/
        ctx[3] + " svelte-hxz2uj");
        attr_dev(div1, "role", "dialog");
        attr_dev(div1, "aria-modal", "true");
        attr_dev(div1, "aria-labelledby", div1_aria_labelledby_value = "" + (
        /*id*/
        ctx[2] + "-title"));
        add_location(div1, file$7, 204, 12, 4412);
        attr_dev(section, "class", "modal__overlay svelte-hxz2uj");
        attr_dev(section, "tabindex", "-1");
        attr_dev(section, "data-trigger",
        /*roleOverlay*/
        ctx[10]);
        add_location(section, file$7, 202, 8, 4251);
        attr_dev(div2, "class", div2_class_value = "custom-modal " +
        /*classes*/
        ctx[0] + " micromodal-slide" + " svelte-hxz2uj");
        attr_dev(div2, "id",
        /*id*/
        ctx[2]);
        attr_dev(div2, "aria-hidden", "true");
        add_location(div2, file$7, 201, 4, 4141);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div2, anchor);
        append_dev(div2, section);
        append_dev(section, div0);
        append_dev(section, t0);
        append_dev(section, div1);
        append_dev(div1, header);

        if (title_slot) {
          title_slot.m(header, null);
        }

        append_dev(header, t1);
        append_dev(header, button);
        append_dev(div1, t2);
        append_dev(div1, main);

        if (default_slot) {
          default_slot.m(main, null);
        }

        append_dev(main, t3);

        if (content_slot) {
          content_slot.m(main, null);
        }

        append_dev(div1, t4);
        append_dev(div1, footer);

        if (footer_slot) {
          footer_slot.m(footer, null);
        }
        /*div2_binding*/


        ctx[17](div2);
        current = true;

        if (!mounted) {
          dispose = [listen_dev(div0, "click", function () {
            if (is_function(
            /*OverlayClick*/
            ctx[11]))
              /*OverlayClick*/
              ctx[11].apply(this, arguments);
          }, false, false, false), listen_dev(button, "click",
          /*deactivateModal*/
          ctx[13], false, false, false), listen_dev(button, "click", function () {
            if (is_function(
            /*onClose*/
            ctx[7]))
              /*onClose*/
              ctx[7].apply(this, arguments);
          }, false, false, false)];
          mounted = true;
        }
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;

        if (title_slot) {
          if (title_slot.p && (!current || dirty &
          /*$$scope, active*/
          32770)) {
            update_slot_base(title_slot, title_slot_template, ctx,
            /*$$scope*/
            ctx[15], !current ? get_all_dirty_from_scope(
            /*$$scope*/
            ctx[15]) : get_slot_changes(title_slot_template,
            /*$$scope*/
            ctx[15], dirty, get_title_slot_changes), get_title_slot_context);
          }
        }

        if (!current || dirty &
        /*classesHeader*/
        16 && header_class_value !== (header_class_value = "modal__header " +
        /*classesHeader*/
        ctx[4] + " svelte-hxz2uj")) {
          attr_dev(header, "class", header_class_value);
        }

        if (default_slot) {
          if (default_slot.p && (!current || dirty &
          /*$$scope*/
          32768)) {
            update_slot_base(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[15], !current ? get_all_dirty_from_scope(
            /*$$scope*/
            ctx[15]) : get_slot_changes(default_slot_template,
            /*$$scope*/
            ctx[15], dirty, get_default_slot_changes$2), get_default_slot_context$2);
          }
        }

        if (content_slot) {
          if (content_slot.p && (!current || dirty &
          /*$$scope, active*/
          32770)) {
            update_slot_base(content_slot, content_slot_template, ctx,
            /*$$scope*/
            ctx[15], !current ? get_all_dirty_from_scope(
            /*$$scope*/
            ctx[15]) : get_slot_changes(content_slot_template,
            /*$$scope*/
            ctx[15], dirty, get_content_slot_changes), get_content_slot_context);
          }
        }

        if (!current || dirty &
        /*classesContent*/
        8 && main_class_value !== (main_class_value = "modal__content " +
        /*classesContent*/
        ctx[3] + " svelte-hxz2uj")) {
          attr_dev(main, "class", main_class_value);
        }

        if (!current || dirty &
        /*id*/
        4 && main_id_value !== (main_id_value = "" + (
        /*id*/
        ctx[2] + "-content"))) {
          attr_dev(main, "id", main_id_value);
        }

        if (footer_slot) {
          if (footer_slot.p && (!current || dirty &
          /*$$scope, active*/
          32770)) {
            update_slot_base(footer_slot, footer_slot_template, ctx,
            /*$$scope*/
            ctx[15], !current ? get_all_dirty_from_scope(
            /*$$scope*/
            ctx[15]) : get_slot_changes(footer_slot_template,
            /*$$scope*/
            ctx[15], dirty, get_footer_slot_changes), get_footer_slot_context);
          }
        }

        if (!current || dirty &
        /*id*/
        4 && footer_id_value !== (footer_id_value = "" + (
        /*id*/
        ctx[2] + "-footer"))) {
          attr_dev(footer, "id", footer_id_value);
        }

        if (!current || dirty &
        /*styles*/
        64) {
          attr_dev(div1, "style",
          /*styles*/
          ctx[6]);
        }

        if (!current || dirty &
        /*classesContent*/
        8 && div1_class_value !== (div1_class_value = "modal__container animate__animated animate__fadeInUp faster animated custom-scrollbar " +
        /*classesContent*/
        ctx[3] + " svelte-hxz2uj")) {
          attr_dev(div1, "class", div1_class_value);
        }

        if (!current || dirty &
        /*id*/
        4 && div1_aria_labelledby_value !== (div1_aria_labelledby_value = "" + (
        /*id*/
        ctx[2] + "-title"))) {
          attr_dev(div1, "aria-labelledby", div1_aria_labelledby_value);
        }

        if (!current || dirty &
        /*roleOverlay*/
        1024) {
          attr_dev(section, "data-trigger",
          /*roleOverlay*/
          ctx[10]);
        }

        if (!current || dirty &
        /*classes*/
        1 && div2_class_value !== (div2_class_value = "custom-modal " +
        /*classes*/
        ctx[0] + " micromodal-slide" + " svelte-hxz2uj")) {
          attr_dev(div2, "class", div2_class_value);
        }

        if (!current || dirty &
        /*id*/
        4) {
          attr_dev(div2, "id",
          /*id*/
          ctx[2]);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(title_slot, local);
        transition_in(default_slot, local);
        transition_in(content_slot, local);
        transition_in(footer_slot, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(title_slot, local);
        transition_out(default_slot, local);
        transition_out(content_slot, local);
        transition_out(footer_slot, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div2);
        if (title_slot) title_slot.d(detaching);
        if (default_slot) default_slot.d(detaching);
        if (content_slot) content_slot.d(detaching);
        if (footer_slot) footer_slot.d(detaching);
        /*div2_binding*/

        ctx[17](null);
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$5.name,
      type: "if",
      source: "(201:0) {#if active === true}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$9(ctx) {
    var t;
    var a;
    var a_class_value;
    var current;
    var mounted;
    var dispose;
    var if_block =
    /*active*/
    ctx[1] === true && create_if_block$5(ctx);
    var trigger_slot_template =
    /*#slots*/
    ctx[16].trigger;
    var trigger_slot = create_slot(trigger_slot_template, ctx,
    /*$$scope*/
    ctx[15], get_trigger_slot_context);
    var block = {
      c: function create() {
        if (if_block) if_block.c();
        t = space();
        a = element("a");
        if (trigger_slot) trigger_slot.c();
        attr_dev(a, "class", a_class_value = "" + (null_to_empty(
        /*triggerClass*/
        ctx[5]) + " svelte-hxz2uj"));
        set_style(a, "text-decoration", "none");
        attr_dev(a, "href", "# ");
        add_location(a, file$7, 220, 0, 5392);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, t, anchor);
        insert_dev(target, a, anchor);

        if (trigger_slot) {
          trigger_slot.m(a, null);
        }

        current = true;

        if (!mounted) {
          dispose = [listen_dev(a, "click", prevent_default(
          /*activeModal*/
          ctx[12]), false, true, false), listen_dev(a, "click", prevent_default(function () {
            if (is_function(
            /*onOpen*/
            ctx[8]))
              /*onOpen*/
              ctx[8].apply(this, arguments);
          }), false, true, false)];
          mounted = true;
        }
      },
      p: function update(new_ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        ctx = new_ctx;

        if (
        /*active*/
        ctx[1] === true) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*active*/
            2) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$5(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(t.parentNode, t);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }

        if (trigger_slot) {
          if (trigger_slot.p && (!current || dirty &
          /*$$scope*/
          32768)) {
            update_slot_base(trigger_slot, trigger_slot_template, ctx,
            /*$$scope*/
            ctx[15], !current ? get_all_dirty_from_scope(
            /*$$scope*/
            ctx[15]) : get_slot_changes(trigger_slot_template,
            /*$$scope*/
            ctx[15], dirty, get_trigger_slot_changes), get_trigger_slot_context);
          }
        }

        if (!current || dirty &
        /*triggerClass*/
        32 && a_class_value !== (a_class_value = "" + (null_to_empty(
        /*triggerClass*/
        ctx[5]) + " svelte-hxz2uj"))) {
          attr_dev(a, "class", a_class_value);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block);
        transition_in(trigger_slot, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        transition_out(trigger_slot, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(t);
        if (detaching) detach_dev(a);
        if (trigger_slot) trigger_slot.d(detaching);
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$9.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$9($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots('SimpleModal', slots, ['title', 'default', 'content', 'footer', 'trigger']);
    var _$$props$id = $$props.id,
        id = _$$props$id === void 0 ? "modal-" + random_string(6) : _$$props$id;
    var _$$props$classes = $$props.classes,
        classes = _$$props$classes === void 0 ? "" : _$$props$classes;
    var _$$props$classesConte = $$props.classesContent,
        classesContent = _$$props$classesConte === void 0 ? "" : _$$props$classesConte;
    var _$$props$classesHeade = $$props.classesHeader,
        classesHeader = _$$props$classesHeade === void 0 ? "" : _$$props$classesHeade;
    var _$$props$triggerClass = $$props.triggerClass,
        triggerClass = _$$props$triggerClass === void 0 ? "" : _$$props$triggerClass;
    var _$$props$styles = $$props.styles,
        styles = _$$props$styles === void 0 ? "" : _$$props$styles;
    var _$$props$closeOnClick = $$props.closeOnClickOverlay,
        closeOnClickOverlay = _$$props$closeOnClick === void 0 ? true : _$$props$closeOnClick;
    var _$$props$onClose = $$props.onClose,
        onClose = _$$props$onClose === void 0 ? function () {} : _$$props$onClose;
    var _$$props$onOpen = $$props.onOpen,
        onOpen = _$$props$onOpen === void 0 ? function () {} : _$$props$onOpen;
    var _$$props$active = $$props.active,
        active = _$$props$active === void 0 ? false : _$$props$active;
    var roleOverlay = "";
    var modal = null;

    var OverlayClick = function OverlayClick() {};

    if (closeOnClickOverlay === true) {
      roleOverlay = "data-micromodal-close";

      OverlayClick = function OverlayClick() {
        $$invalidate(1, active = false);
      };
    }

    function activeModal() {
      $$invalidate(1, active = true);
    }

    function deactivateModal() {
      $$invalidate(1, active = false);
    }

    classes += " is-open";
    var writable_props = ['id', 'classes', 'classesContent', 'classesHeader', 'triggerClass', 'styles', 'closeOnClickOverlay', 'onClose', 'onOpen', 'active'];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<SimpleModal> was created with unknown prop '".concat(key, "'"));
    });

    function div2_binding($$value) {
      binding_callbacks[$$value ? 'unshift' : 'push'](function () {
        modal = $$value;
        $$invalidate(9, modal);
      });
    }

    $$self.$$set = function ($$props) {
      if ('id' in $$props) $$invalidate(2, id = $$props.id);
      if ('classes' in $$props) $$invalidate(0, classes = $$props.classes);
      if ('classesContent' in $$props) $$invalidate(3, classesContent = $$props.classesContent);
      if ('classesHeader' in $$props) $$invalidate(4, classesHeader = $$props.classesHeader);
      if ('triggerClass' in $$props) $$invalidate(5, triggerClass = $$props.triggerClass);
      if ('styles' in $$props) $$invalidate(6, styles = $$props.styles);
      if ('closeOnClickOverlay' in $$props) $$invalidate(14, closeOnClickOverlay = $$props.closeOnClickOverlay);
      if ('onClose' in $$props) $$invalidate(7, onClose = $$props.onClose);
      if ('onOpen' in $$props) $$invalidate(8, onOpen = $$props.onOpen);
      if ('active' in $$props) $$invalidate(1, active = $$props.active);
      if ('$$scope' in $$props) $$invalidate(15, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        random_string: random_string,
        id: id,
        classes: classes,
        classesContent: classesContent,
        classesHeader: classesHeader,
        triggerClass: triggerClass,
        styles: styles,
        closeOnClickOverlay: closeOnClickOverlay,
        onClose: onClose,
        onOpen: onOpen,
        active: active,
        roleOverlay: roleOverlay,
        modal: modal,
        OverlayClick: OverlayClick,
        activeModal: activeModal,
        deactivateModal: deactivateModal
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('id' in $$props) $$invalidate(2, id = $$props.id);
      if ('classes' in $$props) $$invalidate(0, classes = $$props.classes);
      if ('classesContent' in $$props) $$invalidate(3, classesContent = $$props.classesContent);
      if ('classesHeader' in $$props) $$invalidate(4, classesHeader = $$props.classesHeader);
      if ('triggerClass' in $$props) $$invalidate(5, triggerClass = $$props.triggerClass);
      if ('styles' in $$props) $$invalidate(6, styles = $$props.styles);
      if ('closeOnClickOverlay' in $$props) $$invalidate(14, closeOnClickOverlay = $$props.closeOnClickOverlay);
      if ('onClose' in $$props) $$invalidate(7, onClose = $$props.onClose);
      if ('onOpen' in $$props) $$invalidate(8, onOpen = $$props.onOpen);
      if ('active' in $$props) $$invalidate(1, active = $$props.active);
      if ('roleOverlay' in $$props) $$invalidate(10, roleOverlay = $$props.roleOverlay);
      if ('modal' in $$props) $$invalidate(9, modal = $$props.modal);
      if ('OverlayClick' in $$props) $$invalidate(11, OverlayClick = $$props.OverlayClick);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*modal*/
      512) {
        if (modal !== null) {
          var container = modal.querySelector(".modal__container");
          container.classList.add("animate__animated", "animate__fadeInUp", "faster", "animated");
          document.body.appendChild(modal);
        }
      }
    };

    return [classes, active, id, classesContent, classesHeader, triggerClass, styles, onClose, onOpen, modal, roleOverlay, OverlayClick, activeModal, deactivateModal, closeOnClickOverlay, $$scope, slots, div2_binding];
  }

  var SimpleModal = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(SimpleModal, _SvelteComponentDev);

    var _super = _createSuper(SimpleModal);

    function SimpleModal(options) {
      var _this;

      _classCallCheck(this, SimpleModal);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$9, create_fragment$9, safe_not_equal, {
        id: 2,
        classes: 0,
        classesContent: 3,
        classesHeader: 4,
        triggerClass: 5,
        styles: 6,
        closeOnClickOverlay: 14,
        onClose: 7,
        onOpen: 8,
        active: 1
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "SimpleModal",
        options: options,
        id: create_fragment$9.name
      });
      return _this;
    }

    _createClass(SimpleModal, [{
      key: "id",
      get: function get() {
        throw new Error("<SimpleModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<SimpleModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "classes",
      get: function get() {
        throw new Error("<SimpleModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<SimpleModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "classesContent",
      get: function get() {
        throw new Error("<SimpleModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<SimpleModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "classesHeader",
      get: function get() {
        throw new Error("<SimpleModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<SimpleModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "triggerClass",
      get: function get() {
        throw new Error("<SimpleModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<SimpleModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "styles",
      get: function get() {
        throw new Error("<SimpleModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<SimpleModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "closeOnClickOverlay",
      get: function get() {
        throw new Error("<SimpleModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<SimpleModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "onClose",
      get: function get() {
        throw new Error("<SimpleModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<SimpleModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "onOpen",
      get: function get() {
        throw new Error("<SimpleModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<SimpleModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "active",
      get: function get() {
        throw new Error("<SimpleModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<SimpleModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return SimpleModal;
  }(SvelteComponentDev);

  var css_248z$6 = "";
  styleInject(css_248z$6);

  var file$6 = "src\\components\\Modals\\ModalAlert.svelte"; // (22:4) 

  function create_content_slot$1(ctx) {
    var div;
    var block = {
      c: function create() {
        div = element("div");
        attr_dev(div, "class", "content has-text-centered svelte-1a4tgvr");
        attr_dev(div, "slot", "content");
        add_location(div, file$6, 21, 4, 576);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        div.innerHTML =
        /*content*/
        ctx[0];
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*content*/
        1) div.innerHTML =
        /*content*/
        ctx[0];
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_content_slot$1.name,
      type: "slot",
      source: "(22:4) ",
      ctx: ctx
    });
    return block;
  } // (25:4) 


  function create_footer_slot(ctx) {
    var div1;
    var div0;
    var button0;
    var t0;
    var button0_class_value;
    var t1;
    var button1;
    var t2;
    var button1_class_value;
    var mounted;
    var dispose;

    function click_handler() {
      return (
        /*click_handler*/
        ctx[7](
        /*hide*/
        ctx[9])
      );
    }

    function click_handler_1() {
      return (
        /*click_handler_1*/
        ctx[8](
        /*hide*/
        ctx[9])
      );
    }

    var block = {
      c: function create() {
        div1 = element("div");
        div0 = element("div");
        button0 = element("button");
        t0 = text(
        /*cancel_button*/
        ctx[3]);
        t1 = space();
        button1 = element("button");
        t2 = text(
        /*confirm_button*/
        ctx[4]);
        attr_dev(button0, "class", button0_class_value = "button " +
        /*classesCancel*/
        ctx[5] + " svelte-1a4tgvr");
        add_location(button0, file$6, 26, 12, 775);
        attr_dev(button1, "class", button1_class_value = "button " +
        /*classesConfirm*/
        ctx[6] + " svelte-1a4tgvr");
        add_location(button1, file$6, 29, 12, 922);
        attr_dev(div0, "class", "buttons is-grouped is-centered");
        add_location(div0, file$6, 25, 8, 717);
        attr_dev(div1, "class", "footer svelte-1a4tgvr");
        attr_dev(div1, "slot", "footer");
        add_location(div1, file$6, 24, 4, 673);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div1, anchor);
        append_dev(div1, div0);
        append_dev(div0, button0);
        append_dev(button0, t0);
        append_dev(div0, t1);
        append_dev(div0, button1);
        append_dev(button1, t2);

        if (!mounted) {
          dispose = [listen_dev(button0, "click", click_handler, false, false, false), listen_dev(button1, "click", click_handler_1, false, false, false)];
          mounted = true;
        }
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty &
        /*cancel_button*/
        8) set_data_dev(t0,
        /*cancel_button*/
        ctx[3]);

        if (dirty &
        /*classesCancel*/
        32 && button0_class_value !== (button0_class_value = "button " +
        /*classesCancel*/
        ctx[5] + " svelte-1a4tgvr")) {
          attr_dev(button0, "class", button0_class_value);
        }

        if (dirty &
        /*confirm_button*/
        16) set_data_dev(t2,
        /*confirm_button*/
        ctx[4]);

        if (dirty &
        /*classesConfirm*/
        64 && button1_class_value !== (button1_class_value = "button " +
        /*classesConfirm*/
        ctx[6] + " svelte-1a4tgvr")) {
          attr_dev(button1, "class", button1_class_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div1);
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_footer_slot.name,
      type: "slot",
      source: "(25:4) ",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$8(ctx) {
    var simplemodal;
    var current;
    simplemodal = new SimpleModal({
      props: {
        active: true,
        styles: "min-width:320px;max-width:485px;width:100%;",
        $$slots: {
          footer: [create_footer_slot, function (_ref) {
            var hide = _ref.hide;
            return {
              9: hide
            };
          }, function (_ref2) {
            var hide = _ref2.hide;
            return hide ? 512 : 0;
          }],
          content: [create_content_slot$1, function (_ref3) {
            var hide = _ref3.hide;
            return {
              9: hide
            };
          }, function (_ref4) {
            var hide = _ref4.hide;
            return hide ? 512 : 0;
          }]
        },
        $$scope: {
          ctx: ctx
        }
      },
      $$inline: true
    });
    var block = {
      c: function create() {
        create_component(simplemodal.$$.fragment);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        mount_component(simplemodal, target, anchor);
        current = true;
      },
      p: function update(ctx, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 1),
            dirty = _ref6[0];

        var simplemodal_changes = {};

        if (dirty &
        /*$$scope, classesConfirm, onConfirm, confirm_button, classesCancel, onCancel, cancel_button, content*/
        1151) {
          simplemodal_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        simplemodal.$set(simplemodal_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(simplemodal.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(simplemodal.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(simplemodal, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$8.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$8($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots('ModalAlert', slots, []);
    var _$$props$content = $$props.content,
        content = _$$props$content === void 0 ? "" : _$$props$content;
    var _$$props$onConfirm = $$props.onConfirm,
        onConfirm = _$$props$onConfirm === void 0 ? function () {} : _$$props$onConfirm;
    var _$$props$onCancel = $$props.onCancel,
        onCancel = _$$props$onCancel === void 0 ? function () {} : _$$props$onCancel;
    var _$$props$cancel_butto = $$props.cancel_button,
        cancel_button = _$$props$cancel_butto === void 0 ? "Cancelar" : _$$props$cancel_butto;
    var _$$props$confirm_butt = $$props.confirm_button,
        confirm_button = _$$props$confirm_butt === void 0 ? "Sí" : _$$props$confirm_butt;
    var _$$props$classesCance = $$props.classesCancel,
        classesCancel = _$$props$classesCance === void 0 ? "is-danger is-outlined" : _$$props$classesCance;
    var _$$props$classesConfi = $$props.classesConfirm,
        classesConfirm = _$$props$classesConfi === void 0 ? "is-success has-text-white" : _$$props$classesConfi;
    var writable_props = ['content', 'onConfirm', 'onCancel', 'cancel_button', 'confirm_button', 'classesCancel', 'classesConfirm'];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<ModalAlert> was created with unknown prop '".concat(key, "'"));
    });

    var click_handler = function click_handler(hide) {
      hide();
      onCancel();
    };

    var click_handler_1 = function click_handler_1(hide) {
      hide();
      onConfirm();
    };

    $$self.$$set = function ($$props) {
      if ('content' in $$props) $$invalidate(0, content = $$props.content);
      if ('onConfirm' in $$props) $$invalidate(1, onConfirm = $$props.onConfirm);
      if ('onCancel' in $$props) $$invalidate(2, onCancel = $$props.onCancel);
      if ('cancel_button' in $$props) $$invalidate(3, cancel_button = $$props.cancel_button);
      if ('confirm_button' in $$props) $$invalidate(4, confirm_button = $$props.confirm_button);
      if ('classesCancel' in $$props) $$invalidate(5, classesCancel = $$props.classesCancel);
      if ('classesConfirm' in $$props) $$invalidate(6, classesConfirm = $$props.classesConfirm);
    };

    $$self.$capture_state = function () {
      return {
        SimpleModal: SimpleModal,
        content: content,
        onConfirm: onConfirm,
        onCancel: onCancel,
        cancel_button: cancel_button,
        confirm_button: confirm_button,
        classesCancel: classesCancel,
        classesConfirm: classesConfirm
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('content' in $$props) $$invalidate(0, content = $$props.content);
      if ('onConfirm' in $$props) $$invalidate(1, onConfirm = $$props.onConfirm);
      if ('onCancel' in $$props) $$invalidate(2, onCancel = $$props.onCancel);
      if ('cancel_button' in $$props) $$invalidate(3, cancel_button = $$props.cancel_button);
      if ('confirm_button' in $$props) $$invalidate(4, confirm_button = $$props.confirm_button);
      if ('classesCancel' in $$props) $$invalidate(5, classesCancel = $$props.classesCancel);
      if ('classesConfirm' in $$props) $$invalidate(6, classesConfirm = $$props.classesConfirm);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [content, onConfirm, onCancel, cancel_button, confirm_button, classesCancel, classesConfirm, click_handler, click_handler_1];
  }

  var ModalAlert = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(ModalAlert, _SvelteComponentDev);

    var _super = _createSuper(ModalAlert);

    function ModalAlert(options) {
      var _this;

      _classCallCheck(this, ModalAlert);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$8, create_fragment$8, safe_not_equal, {
        content: 0,
        onConfirm: 1,
        onCancel: 2,
        cancel_button: 3,
        confirm_button: 4,
        classesCancel: 5,
        classesConfirm: 6
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "ModalAlert",
        options: options,
        id: create_fragment$8.name
      });
      return _this;
    }

    _createClass(ModalAlert, [{
      key: "content",
      get: function get() {
        throw new Error("<ModalAlert>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<ModalAlert>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "onConfirm",
      get: function get() {
        throw new Error("<ModalAlert>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<ModalAlert>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "onCancel",
      get: function get() {
        throw new Error("<ModalAlert>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<ModalAlert>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "cancel_button",
      get: function get() {
        throw new Error("<ModalAlert>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<ModalAlert>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "confirm_button",
      get: function get() {
        throw new Error("<ModalAlert>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<ModalAlert>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "classesCancel",
      get: function get() {
        throw new Error("<ModalAlert>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<ModalAlert>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "classesConfirm",
      get: function get() {
        throw new Error("<ModalAlert>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<ModalAlert>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return ModalAlert;
  }(SvelteComponentDev);

  var get_default_slot_changes$1 = function get_default_slot_changes(dirty) {
    return {
      paginator: dirty &
      /*paginator*/
      1
    };
  };

  var get_default_slot_context$1 = function get_default_slot_context(ctx) {
    return {
      paginator:
      /*paginator*/
      ctx[0]
    };
  }; // (13:0) {#if (paginator?.results?.data||[]).length > 0}


  function create_if_block$4(ctx) {
    var current;
    var default_slot_template =
    /*#slots*/
    ctx[4].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[3], get_default_slot_context$1);
    var block = {
      c: function create() {
        if (default_slot) default_slot.c();
      },
      m: function mount(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }

        current = true;
      },
      p: function update(ctx, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty &
          /*$$scope, paginator*/
          9)) {
            update_slot_base(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[3], !current ? get_all_dirty_from_scope(
            /*$$scope*/
            ctx[3]) : get_slot_changes(default_slot_template,
            /*$$scope*/
            ctx[3], dirty, get_default_slot_changes$1), get_default_slot_context$1);
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(default_slot, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (default_slot) default_slot.d(detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$4.name,
      type: "if",
      source: "(13:0) {#if (paginator?.results?.data||[]).length > 0}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$7(ctx) {
    var _ctx$, _ctx$$results;

    var if_block_anchor;
    var current;
    var if_block = (
    /*paginator*/
    ((_ctx$ = ctx[0]) === null || _ctx$ === void 0 ? void 0 : (_ctx$$results = _ctx$.results) === null || _ctx$$results === void 0 ? void 0 : _ctx$$results.data) || []).length > 0 && create_if_block$4(ctx);
    var block = {
      c: function create() {
        if (if_block) if_block.c();
        if_block_anchor = empty();
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ctx$2, _ctx$2$results;

        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if ((
        /*paginator*/
        ((_ctx$2 = ctx[0]) === null || _ctx$2 === void 0 ? void 0 : (_ctx$2$results = _ctx$2.results) === null || _ctx$2$results === void 0 ? void 0 : _ctx$2$results.data) || []).length > 0) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*paginator*/
            1) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$4(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$7.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$7($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots('Paginator', slots, ['default']);
    var Paginate = $$props.Paginate;
    var paginator = $$props.paginator;
    var _$$props$request_url = $$props.request_url,
        request_url = _$$props$request_url === void 0 ? paginator.request_url : _$$props$request_url;
    paginator.request.real_path = request_url; // first search

    Paginate(function (PAGINATOR) {
      $$invalidate(0, paginator = PAGINATOR);
      $$invalidate(0, paginator);
    });
    var writable_props = ['Paginate', 'paginator', 'request_url'];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<Paginator> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ('Paginate' in $$props) $$invalidate(1, Paginate = $$props.Paginate);
      if ('paginator' in $$props) $$invalidate(0, paginator = $$props.paginator);
      if ('request_url' in $$props) $$invalidate(2, request_url = $$props.request_url);
      if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        Paginate: Paginate,
        paginator: paginator,
        request_url: request_url
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('Paginate' in $$props) $$invalidate(1, Paginate = $$props.Paginate);
      if ('paginator' in $$props) $$invalidate(0, paginator = $$props.paginator);
      if ('request_url' in $$props) $$invalidate(2, request_url = $$props.request_url);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [paginator, Paginate, request_url, $$scope, slots];
  }

  var Paginator = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Paginator, _SvelteComponentDev);

    var _super = _createSuper(Paginator);

    function Paginator(options) {
      var _this;

      _classCallCheck(this, Paginator);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$7, create_fragment$7, safe_not_equal, {
        Paginate: 1,
        paginator: 0,
        request_url: 2
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Paginator",
        options: options,
        id: create_fragment$7.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*Paginate*/
      ctx[1] === undefined && !('Paginate' in props)) {
        console.warn("<Paginator> was created without expected prop 'Paginate'");
      }

      if (
      /*paginator*/
      ctx[0] === undefined && !('paginator' in props)) {
        console.warn("<Paginator> was created without expected prop 'paginator'");
      }

      return _this;
    }

    _createClass(Paginator, [{
      key: "Paginate",
      get: function get() {
        throw new Error("<Paginator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Paginator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "paginator",
      get: function get() {
        throw new Error("<Paginator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Paginator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "request_url",
      get: function get() {
        throw new Error("<Paginator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Paginator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Paginator;
  }(SvelteComponentDev);

  /*
    _______ _    _ _____  _____ _____          _             _  _____ 
   |__   __| |  | |  __ \|  __ \_   _|   /\   | |           | |/ ____|
      | |  | |  | | |__) | |__) || |    /  \  | |           | | (___  
      | |  | |  | |  _  /|  ___/ | |   / /\ \ | |       _   | |\___ \ 
      | |  | |__| | | \ \| |    _| |_ / ____ \| |____  | |__| |____) |
      |_|   \____/|_|  \_\_|   |_____/_/    \_\______|  \____/|_____/ 
      * Turpial JS Library V. 1.0.0
      * License: MIT.
      * Copyright Yorman Maricuto, May 2019.
      * @twitter: @MaricutoYorman, @Instagram: maricuto
      * Micro-Library to create web components, multi-fetch elements, append styles, scripts, templating engine JSX
  */
  var Turpial = /*#__PURE__*/function () {
    function Turpial() {
      var _this = this;

      var tpObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Turpial);

      // this is for generate
      // a family tree of birds 
      // (parents-childrens -> map)
      // this is is to control realDOM (update-delete-insert-read)
      this.birds = [];

      this.un = function (v) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        if (typeof v === "undefined") {
          return r;
        } else {
          return v;
        }
      };

      this.searchStr = function (where, what) {
        var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var search = where.search(what);

        if (search === -1) {
          return false;
        }

        if (position === true) {
          return search;
        }

        return true;
      };

      this.replacement = function (target, search, replacement) {
        return target.split(search).join(replacement);
      };

      this.find = function (selector) {
        if (typeof selector === "string") {
          return document.getElementById(selector);
        } else {
          return selector;
        }
      }; // helpers


      this.ext = ".turpial.js";
      this.allowStateEvents = this.un(tpObj.allowStateEvents, false);
      this.loadModulesOnRoute = this.un(tpObj.loadModulesOnRoute, true);
      this.autoloader = this.un(tpObj.autoloader, false);
      this.autoloader_folder = this.un(tpObj.autoloader_folder, "");
      this.cache = this.un(tpObj.cache, "public");
      this.public_path = this.un(tpObj.public_path, "");
      this.core_path = this.un(tpObj.core_path, "");
      this.folder = this.un(tpObj.core_path, "/turpial/");
      this.loader = {};
      this.httpRequests = [];
      this.loader.show = this.un(tpObj.loaderShow, null);
      this.loader.hide = this.un(tpObj.loaderHide, null);
      this.views = {};
      this.statusResources = "loaded";
      this.resources = {};
      this.myComponents = [];

      this.random_string = function (length) {
        "undefined" == typeof length && (length = 6);

        for (var result = "", characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", charactersLength = characters.length, i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
      };

      this.selectData = function (arr, item, value, return_key) {
        return_key = turpial.un(return_key, false);
        var get = "";
        arr.forEach(function (dta, key) {
          if (dta[item] == value) {
            if (return_key === true) {
              get = key;
              return;
            } else {
              get = dta;
              return;
            }
          }
        });
        return get;
      };

      this.component = {
        applyProps: function applyProps(tag, props) {
          var applying = function applying() {
            var elements = document.querySelectorAll(tag); // like a spread operator

            Array.prototype.slice.call(elements).forEach(function (el) {
              props(el);
            });
          };

          var implement = function implement() {
            if (_this.statusResources === "loading") {
              var limit = 0;
              var interval = setInterval(function () {
                if (limit > 6000) {
                  console.warn("error loading resources and applying components");
                  clearInterval(interval);
                  return;
                }

                limit = limit + 20;

                if (_this.statusResources === "loaded") {
                  clearInterval(interval);
                  applying();
                  return;
                }
              }, 20);
            } else {
              applying();
              return;
            }
          };

          window.addEventListener("load", function () {
            implement();
            return;
          });

          if (document.readyState === "complete") {
            implement();
            return;
          }
        },
        set: function set(obj) {
          var app = _this;
          var component = app.component;
          var props = obj.props;
          var tag = obj.tag;
          app.myComponents.push({
            tag: tag,
            props: props
          });
          var extendTo = app.un(obj.extends, null);

          if (extendTo !== null) {
            extendTo = {
              extends: extendTo
            };
          }

          if (typeof window.customElements === "undefined") {
            app.component.olderVerBrow = function () {};

            component.applyProps(tag, props);
            return;
          }

          var get = window.customElements.get(tag);

          if (typeof get !== "undefined") {
            return;
          }

          window.customElements.define(tag, /*#__PURE__*/function (_HTMLElement) {
            _inherits(_class, _HTMLElement);

            var _super = _createSuper(_class);

            function _class() {
              var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : obj.props;

              _classCallCheck(this, _class);

              return _super.call(this, function (props) {
                // on load window or document loaded...
                component.applyProps(tag, props);
              }(props));
            }

            return _class;
          }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)), extendTo);
        }
      };
      this.view = {};
      this.models = {};
      this.models.sources = {};
      this.controller = {};
      this.urls = {};
      this.filesLoaded = {};

      this.inject = function (files) {
        var _iterator = _createForOfIteratorHelper(files),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var file = _step.value;

            if (_this.filesLoaded[file].tagName === "STYLE") {
              _this.filesLoaded[file].innerHTML = _this.filesLoaded[file].text;
            }

            document.head.appendChild(_this.filesLoaded[file]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }; // end helpers


      this.models.fetch = function (obj) {
        var app = _this;
        var type = obj.type || "script";
        var cancelOnResend = app.un(obj.cancelOnResend, null);
        var headers = app.un(obj.options, null);
        var method = app.un(obj.method, "GET");
        var attributes = app.un(obj.attributes, []);
        obj.url = obj.url || [];
        obj.file = obj.file || obj.url;
        obj.files = obj.files || obj.file;
        var files = obj.files;

        if (typeof obj.ready === "undefined") {
          obj.ready = function () {};
        }

        if (typeof files === "string") {
          files = [files];
        }
        var loaded = [];

        obj.getString = function (r) {
          return r.clone().text();
        };

        obj.fetching = function (file) {
          // remove if the element exist 
          // to not create scripts elements with the same things...
          // just ignoring or stopping the re-injecting will fail...
          if (typeof app.filesLoaded[file] !== "undefined" && type === "script") {
            app.filesLoaded[file].remove();
          }

          var request = new XMLHttpRequest();
          request.open(method, file, true);
          var options = [];
          var headersValues = [];

          if (headers !== null) {
            for (var header in headers) {
              headersValues.push(headers[header]);
            }

            Object.keys(headers).forEach(function (name, k) {
              options.push([name, headersValues[k]]);
            });
            options.forEach(function (option) {
              request.setRequestHeader(option[0], option[1]);
            });
          }

          request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
              var resource = request.responseText;
              var elementTag;

              if (type === "script" || type === "style" || type === "link") {
                elementTag = type;
              } else {
                // if tag name is another than both above.
                elementTag = "script";
              }

              var el = document.createElement(elementTag);
              attributes.map(function (attribute) {
                // Example: <script [name]=[content] src="..."></script>
                el.setAttribute(attribute.name, attribute.content);
              });

              if (type === "style") {
                el.type = "text/css";
              } else if (type === "link") {
                el.rel = "stylesheet";
                el.media = "all";
                el.href = file;
              }

              el.text = resource;
              app.filesLoaded[file] = el;
              loaded.push(file);
            } else {
              if (typeof obj.onerror === "function" && request.status >= 400) {
                return obj.onerror(request.status);
              }
            }
          };

          request.onerror = function () {
            app.filesLoaded[file] = "";
            loaded.push("unloaded:" + file);
          };

          if (cancelOnResend === true) {
            var idRequest = "rq_" + app.un(obj.id, app.random_string(4));
            var rq = app.httpRequests[idRequest];

            if (typeof rq !== "undefined") {
              try {
                app.httpRequests[idRequest].abort();
              } catch (e) {
                console.warn("unable to cancel request.");
              }
            }

            app.httpRequests[idRequest] = request;
          }

          if (method === "POST") {
            request.send(obj.data);
            return;
          }

          request.send();
        };

        app.statusResources = "loading";

        (function (files) {
          var _iterator2 = _createForOfIteratorHelper(files),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var file = _step2.value;
              obj.fetching(file);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          var counter = 0;
          var check = setInterval(function () {
            counter = counter + 70;
            var forceLoad = false;

            if (counter === 10000) {
              forceLoad = true;
              console.warn("¡Impossible to load all files.");
            }

            if (loaded.length === files.length || forceLoad === true) {
              clearInterval(check);

              if (type === "script" || type === "style" || type === "link") {
                app.inject(files);
                obj.ready();
              } else if (type === "text") {
                var texts = [];

                var _iterator3 = _createForOfIteratorHelper(files),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var file = _step3.value;
                    texts.push(app.filesLoaded[file].innerHTML);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                obj.ready(texts);
              }

              app.statusResources = "loaded";
              return;
            }
          }, 70);
        })(files);
      };

      this.fetch = function (props) {
        return _this.models.fetch(props);
      };

      this.include = function (props) {
        return _this.models.fetch(props);
      };

      this.linkCSS = function (props) {
        props.type = "link";
        var app = _this;
        props.type = "style";
        props.url = props.url || [];
        props.file = props.file || props.url;
        props.files = props.files || props.file;
        var nodes = [];
        props.files.map(function (file) {
          var link = document.createElement("link");
          link.setAttribute("media", "all");
          link.setAttribute("rel", "stylesheet");
          link.href = file;
          var el = app.mount(document.head, link);
          nodes.push(el);
        });
        props.ready(nodes);
        return nodes; // return this.models.fetch(props)
      };

      this.includeCSS = function (props) {
        props.type = "style";
        return _this.models.fetch(props);
      };

      this.controller.views = {
        path: function path(obj) {
          var ext = _this.ext;
          var folder = "".concat(_this.folder, "views/");
          var file_name = obj.views;
          var resources = _this.resources; // in case of route.

          var routing = file_name.split("/");
          var Path = folder;

          if (routing.length === 1) {
            var file = routing[0];
            Path += "".concat(file).concat(ext);
            resources[file] = {}; // create view instance.

            return Path;
          } else {
            // file
            var last = routing.pop(); // last folder

            var penultimate = routing.pop();
            var LastFolder = penultimate;
            var file = last;
            resources[LastFolder] = {}; // create view instance.

            resources[LastFolder][file] = {}; // create view instance.
          }

          if (routing.length === 0) {
            Path += "".concat(LastFolder, "/").concat(file).concat(ext);
          } else {
            routing.forEach(function (subfolder) {
              Path += "".concat(subfolder, "/");
            });
            Path += "".concat(LastFolder, "/").concat(file).concat(ext);
          }

          return Path;
        }
      };

      this.view.load = function (props) {
        props = props || {};

        props.ready = props.ready || function () {};

        props.folder = _this.autoloader_folder || "";
        var ext = _this.ext;
        var parameters = _this.app.parameters;
        var controller = _this.app.controller_name;
        var action = _this.app.action_name;
        var base = "".concat(_this.folder).concat(props.folder).concat(controller);
        props.module = turpial.un(props.module, null);

        if (controller === "index") {
          var urlPath = "".concat(base).concat(ext);
        } else if (parameters.length === 0 && controller !== "index" && typeof action === "undefined") {
          var urlPath = "".concat(base, "/index").concat(ext);
        } else if (parameters.length === 0 && action !== "undefined") {
          var urlPath = "".concat(base, "/").concat(action, "/index").concat(ext);
        } else {
          var urlPath = "".concat(base, "/").concat(action);
          parameters.forEach(function (parameter) {
            urlPath += "/".concat(parameter);
          });
          urlPath += ext;
        }

        if (typeof props.module === "string") {
          props.ext = props.ext || ext;
          urlPath = _this.core_path + props.module + props.ext;
        }

        var data = {
          file: urlPath,
          options: props.options || {},
          ready: function ready() {
            props.ready();
          }
        };

        if (typeof props.error === "function") {
          data["error"] = function (data) {
            props.error(data);
          };
        }

        _this.DataView = data;

        if (props.module === "") {
          return;
        }

        if (props.module === false) {
          return;
        }

        _this.fetch(data);
      };

      this.controller.routes = {
        getHost: function getHost(props) {
          var app = _this;
          props = props || {};

          if (props.loadModule === false || app.loadModulesOnRoute === false) {
            props.relativeModules = true;
          }

          var href = window.location.href;
          href = href.split("#");
          href = href[0];
          href = href.split("?");
          href = href[0];
          /*if( app.searchStr(obj.path, "http") === true ){
          	href = "";
          }*/

          var relativeModules = app.un(props.relativeModules, false); // search for dynamic host.

          var position = href.search(app.public_path);
          var Host = href.slice(position, position + app.public_path.length);
          Host = href.split(Host)[0] + Host;
          var slash = Host.slice(-1);

          if (slash !== "/") {
            slash = "/";
          } else {
            slash = "";
          }

          if (relativeModules == true) {
            return "".concat(Host).concat(slash);
          } else {
            slash = href.slice(-1);

            if (slash !== "/") {
              slash = "/";
            } else {
              slash = "";
            }

            return "".concat(href).concat(slash);
          } // old output: `${href}${d}${obj.path}`

        },
        set: function set(props) {
          var app = _this;
          app.app = {};
          props = props || {};
          var Path = window.location.href.split("?");
          Path = Path[0];
          Path = Path.split("#");
          var SearchPublichPath = Path[0].search(app.public_path);

          if (SearchPublichPath > 0) {
            Path = Path[0].substr(SearchPublichPath + app.public_path.length);
          } else {
            console.warn("bad_public_path_name");
            return;
          }

          var routes = Path.split("/");
          var n = 0;
          var param = 0;
          app.app.parameters = [];
          routes.forEach(function (route) {
            if (route == "") {
              return;
            }

            if (n === 0) {
              app.app.controller_name = route;
            }

            if (n === 1) {
              app.app.action_name = route;
            } else if (n > 1) {
              app.app.parameters[param++] = route;
            }

            n++;
          });
          app.app.controller_name = app.app.controller_name || "index";
          app.app.action_name = app.app.action_name || "";
          var path = "".concat(app.app.controller_name, "/").concat(app.app.action_name, "/").concat(app.app.parameters.join("/"));
          path = path.split("//").join("/");
          path = path.split("///").join("/");
          app.app.props = props;
          app.app.path = path;
          app.host = app.controller.routes.getHost();
          app.app.host = app.host;
        },
        change: function change(obj) {
          var app = _this;
          var type = obj.type || "pushState";
          obj.loadModule = app.un(obj.loadModule, true);
          var output = "".concat(app.controller.routes.getHost(obj)).concat(obj.path);

          if (output === window.location.href) {
            return;
          }

          window.history[type](app.un(obj.object), "", app.un(output));

          if (obj.loadModule === true && app.loadModulesOnRoute === true) {
            app.urls.load(obj);
          }

          var title = app.un(obj.title, false);

          if (typeof title === "string") {
            document.title = title;
          }
        },
        go: function go(value) {
          if (typeof value === "number") {
            window.history.go(value);
          } else if (value === "back") {
            window.history.back();
          } else if (value === "forward") {
            window.history.forward();
          } else {
            return;
          }

          _this.controller.routes.set();

          _this.urls.load();
        }
      };

      this.router = function (obj, ready) {
        ready = ready || function () {};

        if (typeof obj === "number" || typeof obj === "string") {
          _this.controller.routes.go(obj);

          return;
        }

        _this.controller.routes.change(obj);

        _this.stateEvent();

        ready();
      };

      this.routes = this.controller.routes.set;
      this.routes(); // execute routes	

      this.controller.components = {};

      this.views.get = function (obj) {
        if (_typeof(obj) !== "object") {
          return;
        }

        if (typeof obj.views === "string") {
          obj.views = [obj.views];
        }

        var Paths = [];
        var controller = _this.controller.views;
        obj.views.forEach(function (view, key) {
          obj.views = view;
          Paths[key] = controller.path(obj);
        });
        Object.assign(obj, {
          file: Paths,
          ready: obj.ready
        });

        _this.fetch(obj);
      };

      this.urls = {};

      this.urls.load = function (obj) {
        obj = obj || {};
        var app = _this;
        var controller = app.app.controller_name;
        var action = app.app.action_name;
        var parameters = app.app.parameters; // if this is undefined set as empty...

        var moduleController = app.urls[controller] || false;
        obj.module = turpial.un(obj.module, null); // when @turpial.router method is used and 
        // load a custom JS module/component file.

        if (typeof obj.module === "string") {
          app.view.load(obj);
          return;
        } // when url is root or there isn't modules


        if (moduleController === false) {
          app.view.load(obj);
          return;
        }

        app.un(moduleController.loadController, true);
        var loadAction = app.un(moduleController.loadAction, true);
        var loadParameters = app.un(moduleController.loadParameters, 1000);
        var moduleAction = app.un(app.urls[controller][action], false);

        if (typeof moduleController.self === "function") {
          if (typeof moduleAction === "function" && loadAction === true) {
            if (parameters.length > loadParameters) {
              moduleController.self(function () {
                moduleAction(function () {});
              });
              return;
            }

            moduleController.self(function () {
              moduleAction(function () {
                app.view.load(obj);
              });
            });
            return;
          } else if (loadAction === false && typeof action === "string") {
            moduleController.self(function () {
              moduleAction(function () {});
            });
            return;
          }

          moduleController.self(function () {
            app.view.load(obj);
          });
          return;
        }
      };

      this.historyEvents = {};

      this.URLNoHASH = function (url) {
        return url.split("#")[0];
      };

      this.createHistoryEvent = function (position, callback) {
        var main = this.URLNoHASH(window.location.href);
        position = position || "";
        position = main + position;
        this.historyEvents[position] = callback;
        /* @HOW TO USE HISTORY VIEWS.
         * you need to create new history events for actual position history
         * you can rename index position to trigger a function when back history
         * action was executed.
         * 
         * ex: you can create history events like: 
         * @index-> localhost/myweb
         * when you create an application that generate a different view
         * and generating new html elements and change history wirh router.
         * you can add it to history event views to generate 
         * a callback function when history has that location path.
         *
         * You need to set @allowStateEvents to true to trigger this turpial function.
         * 
         * note: turpial will trigger index or main view in the position you have
         * for example if the page load at: myweb.com/portfolio/
         * that point will be considered like a main position view.
         * @you can rename index if you left empty url position
         *  value on createHistoryEvent method.
         * @you can create another view like myweb.com/portfolio/client-1 naming
         *  position url like "/client-1"
         *  note the "/" sign at the beginning
         * @set the function to be executed on callback in second value property.
        */
      };

      this.createHistoryEvent("", function () {});

      this.stateEvent = function () {
        var event = _this.historyEvents;

        if (typeof event[_this.URLNoHASH(window.location.href)] === "function") {
          event[_this.URLNoHASH(window.location.href)]();
        }
      };

      if (this.allowStateEvents === true) {
        window.addEventListener("popstate", this.stateEvent);
      }

      if (tpObj.autoloader === true) {
        window.addEventListener("load", function () {
          _this.urls.load();
        });

        window.onpopstate = function (event) {
          // on window history change
          // update routes and reload modules. 
          _this.controller.routes.set(); // execute routes


          _this.urls.load();

          (function () {
            // just for older browsers
            if (typeof window.customElements === "undefined") {
              Array.prototype.slice.call(this.myComponents).forEach(function (com) {
                this.component.set({
                  tag: com.tag,
                  props: com.props
                });
              });
            }
          })();
        };
      }

      this.template = function (html, replacemets) {
        var engine = {
          run: function run(html, replacemets) {
            replacemets = replacemets || [];

            if (_typeof(replacemets) === "object" && !Array.isArray(replacemets)) {
              var reArrange = [];
              Object.values(replacemets).map(function (element, number) {
                reArrange.push(_defineProperty({}, Object.keys(replacemets)[number], element));
              });
              replacemets = reArrange;
            }

            if (_typeof(html) === "object") {
              html = html.innerHTML;
            }

            var template = function template(_template, searchall, replaceby) {
              return _template.split(searchall).join(replaceby);
            };

            var structure = html;
            replacemets.forEach(function (replacement) {
              var items = Object.keys(replacement);
              var values = Object.values(replacement);
              items.forEach(function (item, key) {
                item = "{{ ".concat(item, " }}");

                if (html.search(item) >= 0) {
                  structure = template(structure, item, values[key]);
                }
              });
            });
            return structure;
          },
          replace: function replace(item, replacement, HTML) {
            item = "{{ ".concat(item, " }}");
            HTML = HTML.split(item).join(replacement);
            return HTML;
          },
          joinMoreElements: function joinMoreElements(target, elements) {
            Object.values(elements).forEach(function (element, key) {
              target[Object.keys(elements)[key]] = element;
            });
            return target;
          },
          toHTML: function toHTML(target, strings) {
            if (target !== false) {
              target.innerHTML = strings;
              target = target.content.firstElementChild;
              return target;
            } else {
              turpial.render();
            }
          },
          toString: function toString(target, html) {
            html = html.cloneNode(true);
            var dom_elem = target;
            dom_elem.innerHTML = "<div></div>";
            dom_elem = dom_elem.content.firstElementChild;
            dom_elem.appendChild(html);
            return dom_elem.innerHTML;
          },
          create: function create(element, replacements) {
            var app = this; // start with "div" after template tag.		

            var content = turpial.find(element).content.firstElementChild; // this is to fill it, after finish the process.

            var container = content.cloneNode(true);
            var getHTMLText = content.innerHTML;
            Object.keys(replacements).forEach(function (item, key) {
              getHTMLText = app.replace(item, Object.values(replacements)[key], getHTMLText);
            }); // PUSH INTO THE CLONDED

            container.innerHTML = getHTMLText;
            return container;
          }
        };
        return engine.run(html, replacemets);
      };
    }

    _createClass(Turpial, [{
      key: "map",
      value: function map(appName) {
        var nodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var app = this;
        var map = app.birds[appName];

        if (_typeof(appName) === "object") {
          map = appName;
        } else if (typeof map === "undefined") {
          map = this.find(appName);
        }

        if (_typeof(nodes) === "object") {
          if (typeof nodes[0] === "undefined") {
            return map;
          }

          map = map.children;
          nodes.forEach(function (node, key) {
            if (typeof nodes[key + 1] === "undefined") {
              map = map[node];
            } else {
              map = map[node].children;
            }
          });
        }

        return map;
      }
    }, {
      key: "createMap",
      value: function createMap(app) {
        app = this.find(app);
        var turpial_app_id = app.getAttribute("id");

        if (typeof turpial_app_id !== "undefined") {
          var realDOMElement = document.getElementById(turpial_app_id);
          this.birds[turpial_app_id] = realDOMElement;
        }
      }
    }, {
      key: "read",
      value: function read(appName) {
        var nodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        return this.map(appName, nodes);
      }
    }, {
      key: "selectorApp",
      value: function selectorApp(appName) {
        var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        if (_typeof(selector) === "object") {
          // searching via map.
          if (Number.isInteger(selector[0]) === true) {
            return this.map(appName, selector);
          } else {
            return selector;
          }
        } else {
          return selector;
        }
      }
    }, {
      key: "delete",
      value: function _delete(selector) {
        selector = this.find(selector);
        selector.remove();
      }
    }, {
      key: "update",
      value: function update(selector) {
        var insert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var where = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'replace-selector';
        var justUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        if (typeof insert === "string") {
          var content = this.render(insert);
          var string = insert;
        } else {
          var content = insert;
        }

        if (content === null) {
          var isHTML = false;
          var content = insert;
        } else {
          var isHTML = true;
        } // get the child to insert a new element before or after


        var child = selector;

        if (justUpdate === true) {
          // if the the call is for update
          where = 'replace-selector';
        } // get his parent


        var output = false;
        var parent = child.parentNode;

        if (where === "before") {
          parent.insertBefore(content, child);
          output = content;
        } else if (where === "after") {
          // emulating with next sibling.
          parent.insertBefore(content, child.nextSibling);
          output = content;
        } else if (where === "replace-selector") {
          // insertar nuevo elemento y eliminar viejo...
          parent.replaceChild(content, child);
          output = content;
        } else if (where === "inner") {
          if (isHTML === true) {
            // editar el child
            child.innerHTML = string;
          } else {
            child.innerText = content;
          }

          output = child;
        } else {
          console.warn("error-on-placement");
          return false;
        }

        var mapping = child;
        this.createMap(mapping);
        return output;
      }
    }, {
      key: "insert",
      value: function insert(selector, content) {
        var where = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "inner";
        selector = this.find(selector);
        return this.update(selector, content, where, false);
      }
    }, {
      key: "render",
      value: function render(LiteralsString) {
        var dom_elem = document.createElement("template");
        dom_elem.innerHTML = LiteralsString;
        dom_elem = dom_elem.content.firstElementChild;
        return dom_elem;
      }
    }, {
      key: "mount",
      value: function mount(place, things) {
        if (typeof things === "string") {
          var things = this.render(things);
        }

        if (things === null) {
          console.warn("need to be HTML string or object");
          return;
        }

        place = this.find(place);
        var target = place.appendChild(things);
        var app = place;
        this.createMap(app);
        return target;
      }
    }, {
      key: "settings",
      value: function settings(attrs) {
        if (typeof attrs[0] !== "undefined") {
          return;
        }

        var setAttrsValues = [];
        var i = 0;
        var Values = [];

        for (var value in attrs) {
          Values.push(attrs[value]);
        }

        Values.forEach(function (value) {
          setAttrsValues[i++] = value;
        });
        var setAttrsNames = [];
        var i = 0;
        Object.keys(attrs).forEach(function (name) {
          setAttrsNames[i++] = name;
        });
        var pushAttrs = "";
        var i = 0;
        setAttrsNames.forEach(function (item, key) {
          pushAttrs += " ".concat(item, "=\"").concat(setAttrsValues[key], "\"");
        });
        return pushAttrs;
      }
    }, {
      key: "createTag",
      value: function createTag(el) {
        var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

        if (_typeof(attrs) === "object") {
          attrs = this.settings(attrs);
        }

        var tag = "<".concat(el).concat(attrs, ">");
        tag += content;

        if (el !== "br") {
          tag += "</".concat(el, ">");
        }

        return tag;
      }
    }, {
      key: "html",
      value: function html(el, attrs, content) {
        var replacement = this.replacement;
        var app = this;

        if (el === "code") {
          content = replacement(content, "<", "&lt;");
          content = replacement(content, ">", "&gt;");
          content = replacement(content, " ", "&nbsp;");
        }

        if (typeof content === "undefined") {
          // si no existen atributos
          // y existe contenido el esquema puede ser así
          // el($tag, $contenido)
          // por lo que el contenido ahora es igual al campo atributos.
          var content = attrs;
          var attrs = "";
        }

        if (_typeof(content) === "object" && typeof content[0] !== "undefined") {
          var elements = "";
          content.forEach(function (item, key) {
            elements += "".concat(item);
          });
          var html = app.createTag(el, attrs, elements);
        } else if (_typeof(content) === "object") {
          // si llega a este punto y sigue siendo
          // un objeto quiere decir que el segundo 
          // argumento es un objeto con class id etc.
          // se puede estar intentando crear un elemento vacío.
          // por lo tanto content será igual a nada
          var attrs = content;
          var html = app.createTag(el, attrs, content = "");
        } else {
          var html = app.createTag(el, attrs, content);
        }

        return html;
      }
    }, {
      key: "el",
      value: function el(_el, attrs, content) {
        return this.html(_el, attrs, content);
      }
    }]);

    return Turpial;
  }();

  var turpial = new Turpial({
    public_path: location.host,
    loadModulesOnRoute: false
  });

  function Connect3Pod(urls, _ref) {
    var _ready = _ref.ready,
        data = _ref.data,
        method = _ref.method,
        options = _ref.options;
    method = method || "POST";

    _ready = _ready || function () {};

    options = options || {};
    data = data || {};

    if (typeof urls === "string") {
      urls = [urls];
    }

    turpial.fetch({
      url: urls,
      method: method,
      options: options,
      type: "text",
      data: JSON.stringify(data),
      ready: function ready(data) {
        _ready(data.filter(function (result) {
          try {
            result = JSON.parse(result);
            return result;
          } catch (error) {
            console.error(error);
          }
        }));
      }
    });
  }
  /**
   * Example: 
   * Connect3Pod([HOST+"private/api/v1/admin/connect"], {
          data: data,
          ready: (results)=>{
              console.log(results);
          },
      })
   */

  var CorePaginator = function CorePaginator(paginator, data, callback) {
    if (paginator.loading === true) {
      return;
    }

    paginator.loading = true;
    data.route = paginator.request.url;
    topbar.show();
    Connect3Pod(paginator.request.url, {
      data: data,
      ready: function ready(data) {
        topbar.hide();
        data = JSON.parse(data);
        var pushedFirst = false;

        if (typeof data.navigation === "undefined") {
          return;
        }

        data.navigation.map(function (n) {
          if (n !== 1 && pushedFirst !== true) {
            data.navigation.push(1);
            pushedFirst = true;
          }
        });
        data.navigation = data.navigation.filter(function (n) {
          if (n <= data.limit) {
            return n;
          }
        });
        data.navigation = data.navigation.sort(function (a, b) {
          return a - b;
        });
        paginator.results = data;
        paginator.loading = false;
        callback(data);
        topbar.hide();
      }
    });
  };

  var css_248z$5 = "";
  styleInject(css_248z$5);

  var file$5 = "src\\components\\Paginator\\ControllerPaginator.svelte";

  function get_each_context$3(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[19] = list[i];
    child_ctx[21] = i;
    return child_ctx;
  }

  var get_default_slot_changes = function get_default_slot_changes(dirty) {
    return {
      paginator: dirty &
      /*paginator*/
      1
    };
  };

  var get_default_slot_context = function get_default_slot_context(ctx) {
    return {
      paginator:
      /*paginator*/
      ctx[0]
    };
  }; // (50:4) {#if +(paginator.results.position) > 1 && +(paginator.results.position) !== +(paginator.results.limit)}


  function create_if_block_5(ctx) {
    var button;
    var mounted;
    var dispose;
    var block = {
      c: function create() {
        button = element("button");
        button.textContent = "1...";
        attr_dev(button, "class", "button is-outlined has-text-primary svelte-vr7gp8");
        attr_dev(button, "type", "button");
        attr_dev(button, "data-position", "1");
        add_location(button, file$5, 50, 8, 1598);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);

        if (!mounted) {
          dispose = listen_dev(button, "click",
          /*click_handler_1*/
          ctx[8], false, false, false);
          mounted = true;
        }
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(button);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_5.name,
      type: "if",
      source: "(50:4) {#if +(paginator.results.position) > 1 && +(paginator.results.position) !== +(paginator.results.limit)}",
      ctx: ctx
    });
    return block;
  } // (55:4) {#if hasPrevius === false && previus !== 0}


  function create_if_block_4$1(ctx) {
    var button;
    var t;
    var mounted;
    var dispose;
    var block = {
      c: function create() {
        button = element("button");
        t = text(
        /*previus*/
        ctx[1]);
        attr_dev(button, "class", "button is-outlined has-text-primary svelte-vr7gp8");
        attr_dev(button, "type", "button");
        attr_dev(button, "data-position",
        /*previus*/
        ctx[1]);
        add_location(button, file$5, 55, 8, 1830);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
        append_dev(button, t);

        if (!mounted) {
          dispose = listen_dev(button, "click",
          /*click_handler_2*/
          ctx[9], false, false, false);
          mounted = true;
        }
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*previus*/
        2) set_data_dev(t,
        /*previus*/
        ctx[1]);

        if (dirty &
        /*previus*/
        2) {
          attr_dev(button, "data-position",
          /*previus*/
          ctx[1]);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(button);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_4$1.name,
      type: "if",
      source: "(55:4) {#if hasPrevius === false && previus !== 0}",
      ctx: ctx
    });
    return block;
  } // (60:4) {#if +(paginator.results.position) !== +(paginator.results.limit) && paginator.results.position !== 0}


  function create_if_block_3$1(ctx) {
    var button;
    var t_value =
    /*paginator*/
    ctx[0].results.position + "";
    var t;
    var button_data_position_value;
    var block = {
      c: function create() {
        button = element("button");
        t = text(t_value);
        attr_dev(button, "class", "button is-primary svelte-vr7gp8");
        attr_dev(button, "type", "button");
        attr_dev(button, "data-type", "after-previus");
        attr_dev(button, "data-position", button_data_position_value =
        /*paginator*/
        ctx[0].results.position);
        add_location(button, file$5, 60, 8, 2138);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
        append_dev(button, t);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*paginator*/
        1 && t_value !== (t_value =
        /*paginator*/
        ctx[0].results.position + "")) set_data_dev(t, t_value);

        if (dirty &
        /*paginator*/
        1 && button_data_position_value !== (button_data_position_value =
        /*paginator*/
        ctx[0].results.position)) {
          attr_dev(button, "data-position", button_data_position_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(button);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_3$1.name,
      type: "if",
      source: "(60:4) {#if +(paginator.results.position) !== +(paginator.results.limit) && paginator.results.position !== 0}",
      ctx: ctx
    });
    return block;
  } // (66:8) {#if +(button) !== 1 && +(button) !== +(paginator.results.limit)}


  function create_if_block_2$1(ctx) {
    var button;
    var t_value =
    /*button*/
    ctx[19] + "";
    var t;
    var button_data_position_value;
    var mounted;
    var dispose;

    function click_handler_3() {
      var _ctx;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (
        /*click_handler_3*/
        (_ctx = ctx)[10].apply(_ctx, [
        /*button*/
        ctx[19]].concat(args))
      );
    }

    var block = {
      c: function create() {
        button = element("button");
        t = text(t_value);
        attr_dev(button, "class", "button is-outlined has-text-primary svelte-vr7gp8");
        attr_dev(button, "type", "button");
        attr_dev(button, "data-position", button_data_position_value =
        /*button*/
        ctx[19]);
        add_location(button, file$5, 66, 12, 2473);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
        append_dev(button, t);

        if (!mounted) {
          dispose = listen_dev(button, "click", click_handler_3, false, false, false);
          mounted = true;
        }
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty &
        /*paginator*/
        1 && t_value !== (t_value =
        /*button*/
        ctx[19] + "")) set_data_dev(t, t_value);

        if (dirty &
        /*paginator*/
        1 && button_data_position_value !== (button_data_position_value =
        /*button*/
        ctx[19])) {
          attr_dev(button, "data-position", button_data_position_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(button);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2$1.name,
      type: "if",
      source: "(66:8) {#if +(button) !== 1 && +(button) !== +(paginator.results.limit)}",
      ctx: ctx
    });
    return block;
  } // (65:4) {#each paginator.results.navigation as button, key}


  function create_each_block$3(ctx) {
    var if_block_anchor;
    var if_block = +
    /*button*/
    ctx[19] !== 1 && +
    /*button*/
    ctx[19] !== +
    /*paginator*/
    ctx[0].results.limit && create_if_block_2$1(ctx);
    var block = {
      c: function create() {
        if (if_block) if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
      },
      p: function update(ctx, dirty) {
        if (+
        /*button*/
        ctx[19] !== 1 && +
        /*button*/
        ctx[19] !== +
        /*paginator*/
        ctx[0].results.limit) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_2$1(ctx);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d: function destroy(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block$3.name,
      type: "each",
      source: "(65:4) {#each paginator.results.navigation as button, key}",
      ctx: ctx
    });
    return block;
  } // (72:4) {#if +(paginator.results.position) < +(paginator.results.limit)}


  function create_if_block_1$1(ctx) {
    var button;
    var t0;
    var t1_value =
    /*paginator*/
    ctx[0].results.limit + "";
    var t1;
    var button_data_position_value;
    var mounted;
    var dispose;
    var block = {
      c: function create() {
        button = element("button");
        t0 = text("...\r\n            ");
        t1 = text(t1_value);
        attr_dev(button, "class", "button is-outlined has-text-primary svelte-vr7gp8");
        attr_dev(button, "type", "button");
        attr_dev(button, "data-position", button_data_position_value =
        /*paginator*/
        ctx[0].results.limit);
        add_location(button, file$5, 72, 8, 2765);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
        append_dev(button, t0);
        append_dev(button, t1);

        if (!mounted) {
          dispose = listen_dev(button, "click",
          /*click_handler_4*/
          ctx[11], false, false, false);
          mounted = true;
        }
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*paginator*/
        1 && t1_value !== (t1_value =
        /*paginator*/
        ctx[0].results.limit + "")) set_data_dev(t1, t1_value);

        if (dirty &
        /*paginator*/
        1 && button_data_position_value !== (button_data_position_value =
        /*paginator*/
        ctx[0].results.limit)) {
          attr_dev(button, "data-position", button_data_position_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(button);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1$1.name,
      type: "if",
      source: "(72:4) {#if +(paginator.results.position) < +(paginator.results.limit)}",
      ctx: ctx
    });
    return block;
  } // (78:4) {#if +(paginator.results.position) === +(paginator.results.limit)}


  function create_if_block$3(ctx) {
    var button;
    var t0;
    var t1_value =
    /*paginator*/
    ctx[0].results.position + "";
    var t1;
    var button_data_position_value;
    var block = {
      c: function create() {
        button = element("button");
        t0 = text("...\r\n            ");
        t1 = text(t1_value);
        attr_dev(button, "class", "button is-primary svelte-vr7gp8");
        attr_dev(button, "type", "button");
        attr_dev(button, "data-position", button_data_position_value =
        /*paginator*/
        ctx[0].results.position);
        add_location(button, file$5, 78, 8, 3104);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
        append_dev(button, t0);
        append_dev(button, t1);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*paginator*/
        1 && t1_value !== (t1_value =
        /*paginator*/
        ctx[0].results.position + "")) set_data_dev(t1, t1_value);

        if (dirty &
        /*paginator*/
        1 && button_data_position_value !== (button_data_position_value =
        /*paginator*/
        ctx[0].results.position)) {
          attr_dev(button, "data-position", button_data_position_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(button);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$3.name,
      type: "if",
      source: "(78:4) {#if +(paginator.results.position) === +(paginator.results.limit)}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$6(ctx) {
    var t0;
    var div;
    var button0;
    var span0;
    var t2;
    var t3;
    var t4;
    var t5;
    var t6;
    var t7;
    var t8;
    var button1;
    var span1;
    var current;
    var mounted;
    var dispose;
    var default_slot_template =
    /*#slots*/
    ctx[6].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[5], get_default_slot_context);
    var if_block0 = +
    /*paginator*/
    ctx[0].results.position > 1 && +
    /*paginator*/
    ctx[0].results.position !== +
    /*paginator*/
    ctx[0].results.limit && create_if_block_5(ctx);
    var if_block1 =
    /*hasPrevius*/
    ctx[2] === false &&
    /*previus*/
    ctx[1] !== 0 && create_if_block_4$1(ctx);
    var if_block2 = +
    /*paginator*/
    ctx[0].results.position !== +
    /*paginator*/
    ctx[0].results.limit &&
    /*paginator*/
    ctx[0].results.position !== 0 && create_if_block_3$1(ctx);
    var each_value =
    /*paginator*/
    ctx[0].results.navigation;
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
    }

    var if_block3 = +
    /*paginator*/
    ctx[0].results.position < +
    /*paginator*/
    ctx[0].results.limit && create_if_block_1$1(ctx);
    var if_block4 = +
    /*paginator*/
    ctx[0].results.position === +
    /*paginator*/
    ctx[0].results.limit && create_if_block$3(ctx);
    var block = {
      c: function create() {
        if (default_slot) default_slot.c();
        t0 = space();
        div = element("div");
        button0 = element("button");
        span0 = element("span");
        span0.textContent = "◂";
        t2 = space();
        if (if_block0) if_block0.c();
        t3 = space();
        if (if_block1) if_block1.c();
        t4 = space();
        if (if_block2) if_block2.c();
        t5 = space();

        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        t6 = space();
        if (if_block3) if_block3.c();
        t7 = space();
        if (if_block4) if_block4.c();
        t8 = space();
        button1 = element("button");
        span1 = element("span");
        span1.textContent = "▸";
        attr_dev(span0, "class", "has-text-primary");
        add_location(span0, file$5, 45, 8, 1401);
        attr_dev(button0, "type", "button");
        attr_dev(button0, "class", "button is-outlined svelte-vr7gp8");
        add_location(button0, file$5, 44, 4, 1267);
        attr_dev(span1, "class", "has-text-primary");
        add_location(span1, file$5, 85, 8, 3447);
        attr_dev(button1, "type", "button");
        attr_dev(button1, "class", "button is-outlined has-background-white svelte-vr7gp8");
        add_location(button1, file$5, 84, 4, 3292);
        attr_dev(div, "class", "buttons is-grouped is-centered");
        add_location(div, file$5, 43, 0, 1213);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }

        insert_dev(target, t0, anchor);
        insert_dev(target, div, anchor);
        append_dev(div, button0);
        append_dev(button0, span0);
        append_dev(div, t2);
        if (if_block0) if_block0.m(div, null);
        append_dev(div, t3);
        if (if_block1) if_block1.m(div, null);
        append_dev(div, t4);
        if (if_block2) if_block2.m(div, null);
        append_dev(div, t5);

        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(div, null);
        }

        append_dev(div, t6);
        if (if_block3) if_block3.m(div, null);
        append_dev(div, t7);
        if (if_block4) if_block4.m(div, null);
        append_dev(div, t8);
        append_dev(div, button1);
        append_dev(button1, span1);
        current = true;

        if (!mounted) {
          dispose = [listen_dev(button0, "click",
          /*click_handler*/
          ctx[7], false, false, false), listen_dev(button1, "click",
          /*click_handler_5*/
          ctx[12], false, false, false)];
          mounted = true;
        }
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot) {
          if (default_slot.p && (!current || dirty &
          /*$$scope, paginator*/
          33)) {
            update_slot_base(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[5], !current ? get_all_dirty_from_scope(
            /*$$scope*/
            ctx[5]) : get_slot_changes(default_slot_template,
            /*$$scope*/
            ctx[5], dirty, get_default_slot_changes), get_default_slot_context);
          }
        }

        if (+
        /*paginator*/
        ctx[0].results.position > 1 && +
        /*paginator*/
        ctx[0].results.position !== +
        /*paginator*/
        ctx[0].results.limit) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_5(ctx);
            if_block0.c();
            if_block0.m(div, t3);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }

        if (
        /*hasPrevius*/
        ctx[2] === false &&
        /*previus*/
        ctx[1] !== 0) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
          } else {
            if_block1 = create_if_block_4$1(ctx);
            if_block1.c();
            if_block1.m(div, t4);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }

        if (+
        /*paginator*/
        ctx[0].results.position !== +
        /*paginator*/
        ctx[0].results.limit &&
        /*paginator*/
        ctx[0].results.position !== 0) {
          if (if_block2) {
            if_block2.p(ctx, dirty);
          } else {
            if_block2 = create_if_block_3$1(ctx);
            if_block2.c();
            if_block2.m(div, t5);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }

        if (dirty &
        /*paginator, setPaginatePos*/
        9) {
          each_value =
          /*paginator*/
          ctx[0].results.navigation;
          validate_each_argument(each_value);

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context$3(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block$3(child_ctx);

              each_blocks[_i3].c();

              each_blocks[_i3].m(div, t6);
            }
          }

          for (; _i3 < each_blocks.length; _i3 += 1) {
            each_blocks[_i3].d(1);
          }

          each_blocks.length = each_value.length;
        }

        if (+
        /*paginator*/
        ctx[0].results.position < +
        /*paginator*/
        ctx[0].results.limit) {
          if (if_block3) {
            if_block3.p(ctx, dirty);
          } else {
            if_block3 = create_if_block_1$1(ctx);
            if_block3.c();
            if_block3.m(div, t7);
          }
        } else if (if_block3) {
          if_block3.d(1);
          if_block3 = null;
        }

        if (+
        /*paginator*/
        ctx[0].results.position === +
        /*paginator*/
        ctx[0].results.limit) {
          if (if_block4) {
            if_block4.p(ctx, dirty);
          } else {
            if_block4 = create_if_block$3(ctx);
            if_block4.c();
            if_block4.m(div, t8);
          }
        } else if (if_block4) {
          if_block4.d(1);
          if_block4 = null;
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(default_slot, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (default_slot) default_slot.d(detaching);
        if (detaching) detach_dev(t0);
        if (detaching) detach_dev(div);
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        if (if_block2) if_block2.d();
        destroy_each(each_blocks, detaching);
        if (if_block3) if_block3.d();
        if (if_block4) if_block4.d();
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$6.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$6($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots('ControllerPaginator', slots, ['default']);
    var paginator = $$props.paginator;
    var Paginate = $$props.Paginate;
    var navigation = paginator.results.navigation;
    var currentPosition = paginator.results.position || "1";
    var max = paginator.results.limit || "1"; // max number navigation

    var min = "1"; // min number navigation

    var previus = paginator.results.position - 1;
    var next = paginator.results.position + 1;
    var hasPrevius = true;
    var hasNext = false;

    function setPaginatePos(position) {
      if (position < 1) {
        return;
      }

      if (position > paginator.results.limit) {
        return;
      }

      $$invalidate(0, paginator.request.position = +position, paginator);
      Paginate(paginator, function (PAGINATOR) {
        $$invalidate(0, paginator = PAGINATOR);
        $$invalidate(0, paginator);
        $$invalidate(1, previus = paginator.results.position - 1);

        if (previus > 0) {
          $$invalidate(2, hasPrevius = paginator.results.navigation.find(function (pos) {
            if (+pos === previus) {
              return true;
            }
          }) || false);
        }
      });
    }

    var writable_props = ['paginator', 'Paginate'];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<ControllerPaginator> was created with unknown prop '".concat(key, "'"));
    });

    var click_handler = function click_handler(e) {
      setPaginatePos(+paginator.results.position - 1);
    };

    var click_handler_1 = function click_handler_1(e) {
      setPaginatePos(1);
    };

    var click_handler_2 = function click_handler_2(e) {
      setPaginatePos(previus);
    };

    var click_handler_3 = function click_handler_3(button, e) {
      setPaginatePos(button);
    };

    var click_handler_4 = function click_handler_4(e) {
      setPaginatePos(e.target.dataset.position);
    };

    var click_handler_5 = function click_handler_5(e) {
      setPaginatePos(+paginator.results.position + 1);
    };

    $$self.$$set = function ($$props) {
      if ('paginator' in $$props) $$invalidate(0, paginator = $$props.paginator);
      if ('Paginate' in $$props) $$invalidate(4, Paginate = $$props.Paginate);
      if ('$$scope' in $$props) $$invalidate(5, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        paginator: paginator,
        Paginate: Paginate,
        navigation: navigation,
        currentPosition: currentPosition,
        max: max,
        min: min,
        previus: previus,
        next: next,
        hasPrevius: hasPrevius,
        hasNext: hasNext,
        setPaginatePos: setPaginatePos
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('paginator' in $$props) $$invalidate(0, paginator = $$props.paginator);
      if ('Paginate' in $$props) $$invalidate(4, Paginate = $$props.Paginate);
      if ('navigation' in $$props) navigation = $$props.navigation;
      if ('currentPosition' in $$props) currentPosition = $$props.currentPosition;
      if ('max' in $$props) max = $$props.max;
      if ('min' in $$props) min = $$props.min;
      if ('previus' in $$props) $$invalidate(1, previus = $$props.previus);
      if ('next' in $$props) next = $$props.next;
      if ('hasPrevius' in $$props) $$invalidate(2, hasPrevius = $$props.hasPrevius);
      if ('hasNext' in $$props) hasNext = $$props.hasNext;
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [paginator, previus, hasPrevius, setPaginatePos, Paginate, $$scope, slots, click_handler, click_handler_1, click_handler_2, click_handler_3, click_handler_4, click_handler_5];
  }

  var ControllerPaginator = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(ControllerPaginator, _SvelteComponentDev);

    var _super = _createSuper(ControllerPaginator);

    function ControllerPaginator(options) {
      var _this;

      _classCallCheck(this, ControllerPaginator);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$6, create_fragment$6, safe_not_equal, {
        paginator: 0,
        Paginate: 4
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "ControllerPaginator",
        options: options,
        id: create_fragment$6.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*paginator*/
      ctx[0] === undefined && !('paginator' in props)) {
        console.warn("<ControllerPaginator> was created without expected prop 'paginator'");
      }

      if (
      /*Paginate*/
      ctx[4] === undefined && !('Paginate' in props)) {
        console.warn("<ControllerPaginator> was created without expected prop 'Paginate'");
      }

      return _this;
    }

    _createClass(ControllerPaginator, [{
      key: "paginator",
      get: function get() {
        throw new Error("<ControllerPaginator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<ControllerPaginator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "Paginate",
      get: function get() {
        throw new Error("<ControllerPaginator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<ControllerPaginator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return ControllerPaginator;
  }(SvelteComponentDev);

  var AppForms = {
    formsCount: [],
    // where forms retrieve will be stored
    element: function element(el) {
      if (typeof el === "string") {
        el = document.getElementById(el);
      }

      return {
        name: el.name,
        value: el.value
      };
    },
    elementsJoin: function elementsJoin(elements) {
      var newStructure = [];
      elements.forEach(function (el) {
        newStructure[el.name] = el.value;
      });
      return newStructure;
    },
    tags: {
      retrieve: function retrieve(props) {
        props = turpial.un(props, {});
        var helperElements = document.querySelectorAll(".PencilTagsHelperConstructor");
        helperElements = pencil.concat(helperElements);

        if (helperElements.length === 0) {
          return;
        }

        helperElements.forEach(function (helperElement) {
          var input = helperElement.getAttribute("data-input");
          input = turpial.find(input);

          if (input.getAttribute("data-retrived") === true) {
            return;
          }

          if (input === null) {
            return;
          }

          var tags = helperElement.innerText.split(",");
          tags.forEach(function (tag) {
            if (tag === "") {
              return;
            }

            if (tag === null) {
              return;
            }

            if (tag === "null") {
              return;
            }

            input.value = tag;
            pencil.form.tags.attach(input, "attaching", {
              classInput: props.classInput
            });
            input.value = "";
          });
          input.setAttribute("data-retrived", true);
        });
      },
      remove: function remove(element) {
        var deleteButton = element;
        var value = deleteButton.querySelector("span").innerText;
        var target = deleteButton.getAttribute("data-elements");
        target = turpial.find(target);
        var tags = target.innerText;
        var newElements = [];
        tags.split(",").forEach(function (tag) {
          if (tag !== value) {
            newElements.push(tag);
          }
        });
        newElements = newElements.join(",");
        target.innerText = newElements;
        deleteButton.parentNode.parentNode.remove();
      },
      attach: function attach(element, event, props) {
        if (event.key === "Enter" || event.key === "," || event === "attaching") ; else {
          return;
        }

        if (element.value === "") {
          return;
        }

        props = turpial.un(props, {});

        if (typeof element.id !== "string") {
          console.warn("Set an id for input tags element: ");
          console.log(element);
          return;
        }

        var id = "".concat(element.id, "--pencilTagsInput");
        var helperInput = turpial.find(id);
        var idTags = "".concat(element.id, "--pencilTagsElements");
        var helperTags = turpial.find(idTags);

        if (helperInput === null) {
          // insert input
          turpial.insert(element, "<div data-type=\"tags\" id=\"".concat(id, "\" class=\"is-hidden\"></div>"), "before"); // insert fisrt value

          turpial.insert(element, "<div style=\"margin-top:20px;\" id=\"".concat(idTags, "\" class=\"tags-pencilTagsElements field is-grouped is-grouped-multiline\"></div>"), "after");
          helperInput = turpial.find(id);
          helperInput.innerText = "".concat(element.value);
        } else {
          // update values
          var isInserted = false;
          helperInput.innerText.split(",").forEach(function (el) {
            // if element was inserted
            console.log(el);

            if (el === element.value) {
              isInserted = true;
            }
          });

          if (isInserted === true) {
            return;
          }

          helperInput.innerText = "".concat(helperInput.innerText, ",").concat(element.value);
        }

        var Class = turpial.un(props.classInput, "");

        if (Class !== "") {
          helperInput.classList.add(props.classInput);
        }

        var templateTags = function templateTags(value, color) {
          return "<div class=\"control\">\n                        <div class=\"tags has-addons\">\n                            <span class=\"tag ".concat(turpial.un(color, ""), "\">").concat(value, "</span>\n                            <a id=\"").concat(id, "--removeTag\" data-elements=\"").concat(id, "\" onclick=\"pencil.form.tags.remove( this )\" class=\"tag is-delete\">\n                            <span class=\"is-hidden\">").concat(value, "</span>\n                            </a>\n                        </div>\n                    </div>");
        };

        var html = "";
        helperTags = turpial.find(idTags);
        helperInput.innerText.split(",").forEach(function (value) {
          if (value === "") {
            return;
          }

          html += templateTags(value, turpial.un(props.tagColor, "is-info"));
        });
        turpial.insert(helperTags, html);
        element.value = "";

        if (event !== "attaching") {
          event.preventDefault();
        }
      }
    },
    tagsAttach: function tagsAttach() {
      PencilTagsHelperConstructor;
    },
    statusButton: function statusButton(target, status) {
      if (typeof target === "string") {
        target = turpial.find(target);
      }

      if (status === "enabled") {
        target.classList.remove("is-loading");
        target.removeAttribute("disabled");
      } else if (status === "disabled") {
        target.classList.add("is-loading");
        target.setAttribute("disabled", true);
      }
    },
    onEvent: function onEvent(props) {
      props = turpial.un(props, {});
      props.type = turpial.un(props.type, "string");

      if (props.type == "string") {
        props.target = turpial.find(props.target);
      }

      if (typeof props.event === "undefined") {
        console.warn("Set an event");
        return;
      }

      if (typeof props.render === "undefined") {
        console.warn("Set a function");
        return;
      }

      props.data = turpial.un(props.data, {});
      props.data.target = props.target;
      props.data.event = props.event;
      props.target.addEventListener(props.event, function () {
        props.render(props.data);
      });
    },
    PushRequiredInputs: function PushRequiredInputs(object) {
      var app = object;
      var elements = document.querySelectorAll(".pencil-required-input");

      _toConsumableArray(elements).forEach(function (el) {
        app.inputs.push(pencil.form.element(el));
      });
    },
    retrieve: function retrieve(props) {
      // NEW 1.1
      // props:
      // 	targets: inputs
      // 	form: form id tag
      // 	
      props.form = turpial.find(props.form);
      var formName = props.form.id;
      var app = this;
      app.formsCount[formName] = {};
      var elements = props.form.querySelectorAll(props.targets);

      _toConsumableArray(elements).forEach(function (element) {
        var is_disabled = element.getAttribute("disabled");

        if (is_disabled !== null) {
          return;
        }

        if (element.getAttribute("data-array-input") === "true") {
          if (_typeof(app.formsCount[formName][element.name]) !== "object") {
            app.formsCount[formName][element.name] = [];
          }

          app.formsCount[formName][element.name].push(element.value);
          return;
        }

        if (element.type === "radio") {
          if (element.checked === false) {
            return;
          }

          app.formsCount[formName][element.name] = element.value;
        } else if (element.type === "checkbox") {
          if (element.checked === true && element.getAttribute("data-boolean") === "true") {
            app.formsCount[formName][element.name] = true;
            return;
          }

          if (typeof app.formsCount[formName][element.name] === "undefined") {
            app.formsCount[formName][element.name] = {};
          }

          if (element.checked === false && element.getAttribute("data-boolean") === "true") {
            app.formsCount[formName][element.name] = false;
            return;
          }

          if (element.checked === false) {
            delete app.formsCount[formName][element.name][element.value];
            return;
          } else {
            app.formsCount[formName][element.name][element.value] = element.value;
          }
        } else {
          app.formsCount[formName][element.name] = element.value;
        }
      });

      return app.formsCount[formName];
    }
  };

  var toast$1 = function toast(html, type, close, position) {
    function execute() {
      html = html || "";
      type = type || "success";
      close = close || 3500;
      position = position || "top-right";
      spop({
        template: html,
        style: type,
        position: position,
        autoclose: close
      });
    }

    if (typeof spop !== "undefined") {
      execute();
    } else {
      turpial.fetch({
        url: [HOST + "/assets/js/spop/spop.min.js"],
        ready: function ready() {}
      });
      turpial.includeCSS({
        url: [HOST + "/assets/js/spop/spop.min.css"],
        ready: function ready() {
          execute();
        }
      });
    }
  };

  var parseDate = {
    convert: function convert(unixtime) {
      return new Date(unixtime * 1000);
    },
    months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    day: function day(date) {
      date = "0".concat(date);
      date = date.split("");

      if (date.length > 2) {
        delete date[0];
      }

      return date.join("");
    },
    full: function full(unixtime) {
      var time = this.convert(unixtime);
      return "".concat(this.months[time.getMonth()], "-").concat(this.day(time.getDate()), "-").concat(time.getFullYear(), " | ").concat(time.getHours(), ":").concat(time.getMinutes(), ":").concat(time.getSeconds());
    },
    onlytime: function onlytime(unixtime) {
      var time = this.convert(unixtime);
      return "".concat(time.getHours(), ":").concat(time.getMinutes(), ":").concat(time.getSeconds());
    },
    onlydate: function onlydate(unixtime, format) {
      var time = this.convert(unixtime);
      format = format || "d-m-Y";
      var date = {
        Y: time.getFullYear(),
        m: this.months[time.getMonth()],
        d: this.day(time.getDate())
      };
      format = format.split("-");
      var getDate = [];
      format.map(function (data) {
        if (typeof date[data] === "undefined") {
          console.warn("undefined " + data + " date value.");
          return;
        }

        getDate.push(date[data]);
      });
      return getDate.join("-");
    }
  };

  var selectData = function selectData(arr, item, value, return_type) {
    var _return_type;

    return_type = (_return_type = return_type) !== null && _return_type !== void 0 ? _return_type : null;

    if (Array.isArray(arr)) {
      return arr.find(function (element, key) {
        if (element[item] === value) {
          if (return_type === "key") {
            return key;
          }

          return element;
        }
      });
    }

    return [];
  };

  var css_248z$4 = "";
  styleInject(css_248z$4);

  var Object_1$2 = globals.Object;
  var file$4 = "src\\TagManager\\panels\\ComissionPanel.svelte";

  function get_each_context$2(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[19] = list[i];
    return child_ctx;
  }

  function get_each_context_1$1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[19] = list[i];
    return child_ctx;
  } // (156:32) {#each plans as plan}


  function create_each_block_1$1(ctx) {
    var option;
    var t0_value =
    /*plan*/
    ctx[19].membership_name + "";
    var t0;
    var t1;
    var t2_value =
    /*plan*/
    ctx[19].name_plan + "";
    var t2;
    var option_data_membership_value;
    var option_value_value;
    var block = {
      c: function create() {
        option = element("option");
        t0 = text(t0_value);
        t1 = text(" - ");
        t2 = text(t2_value);
        attr_dev(option, "data-membership", option_data_membership_value =
        /*plan*/
        ctx[19].membership_type);
        option.__value = option_value_value =
        /*plan*/
        ctx[19].__id__;
        option.value = option.__value;
        add_location(option, file$4, 156, 36, 4983);
      },
      m: function mount(target, anchor) {
        insert_dev(target, option, anchor);
        append_dev(option, t0);
        append_dev(option, t1);
        append_dev(option, t2);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*plans*/
        2 && t0_value !== (t0_value =
        /*plan*/
        ctx[19].membership_name + "")) set_data_dev(t0, t0_value);
        if (dirty &
        /*plans*/
        2 && t2_value !== (t2_value =
        /*plan*/
        ctx[19].name_plan + "")) set_data_dev(t2, t2_value);

        if (dirty &
        /*plans*/
        2 && option_data_membership_value !== (option_data_membership_value =
        /*plan*/
        ctx[19].membership_type)) {
          attr_dev(option, "data-membership", option_data_membership_value);
        }

        if (dirty &
        /*plans*/
        2 && option_value_value !== (option_value_value =
        /*plan*/
        ctx[19].__id__)) {
          prop_dev(option, "__value", option_value_value);
          option.value = option.__value;
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(option);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block_1$1.name,
      type: "each",
      source: "(156:32) {#each plans as plan}",
      ctx: ctx
    });
    return block;
  } // (176:8) {#if tag.affiliatePlan.length > 0}


  function create_if_block$2(ctx) {
    var h3;
    var block = {
      c: function create() {
        h3 = element("h3");
        h3.textContent = "Planes con porcentaje personalizado establecidos:";
        attr_dev(h3, "class", "has-text-centered fw600 has-text-info");
        add_location(h3, file$4, 176, 12, 6086);
      },
      m: function mount(target, anchor) {
        insert_dev(target, h3, anchor);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(h3);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$2.name,
      type: "if",
      source: "(176:8) {#if tag.affiliatePlan.length > 0}",
      ctx: ctx
    });
    return block;
  } // (182:12) {#each Object.values(tag?.affiliatePlan?.plans || []) as plan}


  function create_each_block$2(ctx) {
    var div5;
    var div4;
    var div0;
    var t0;
    var div3;
    var div1;
    var t1;
    var strong;
    var t2_value = selectData(
    /*plans*/
    ctx[1], "__id__",
    /*plan*/
    ctx[19].plan).name_plan + "";
    var t2;
    var t3;
    var div2;
    var p;
    var t4;
    var t5_value =
    /*plan*/
    ctx[19].affiliatePercent + "";
    var t5;
    var t6;
    var t7;
    var mounted;
    var dispose;

    function click_handler_1() {
      return (
        /*click_handler_1*/
        ctx[15](
        /*plan*/
        ctx[19])
      );
    }

    var block = {
      c: function create() {
        div5 = element("div");
        div4 = element("div");
        div0 = element("div");
        t0 = space();
        div3 = element("div");
        div1 = element("div");
        t1 = text("Plan: ");
        strong = element("strong");
        t2 = text(t2_value);
        t3 = space();
        div2 = element("div");
        p = element("p");
        t4 = text("+ ");
        t5 = text(t5_value);
        t6 = text("%");
        t7 = space();
        attr_dev(div0, "class", "delete has-background-danger delete-item svelte-b989md");
        add_location(div0, file$4, 184, 24, 6493);
        add_location(strong, file$4, 187, 38, 6750);
        attr_dev(div1, "class", "column");
        add_location(div1, file$4, 186, 28, 6690);
        attr_dev(p, "class", "has-text-primary fw600");
        add_location(p, file$4, 192, 32, 7009);
        attr_dev(div2, "class", "column");
        add_location(div2, file$4, 191, 28, 6955);
        attr_dev(div3, "class", "columns is-multiline");
        add_location(div3, file$4, 185, 24, 6626);
        attr_dev(div4, "class", "box box-plans-added svelte-b989md");
        add_location(div4, file$4, 183, 20, 6434);
        attr_dev(div5, "class", "column is-8");
        add_location(div5, file$4, 182, 16, 6387);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div5, anchor);
        append_dev(div5, div4);
        append_dev(div4, div0);
        append_dev(div4, t0);
        append_dev(div4, div3);
        append_dev(div3, div1);
        append_dev(div1, t1);
        append_dev(div1, strong);
        append_dev(strong, t2);
        append_dev(div3, t3);
        append_dev(div3, div2);
        append_dev(div2, p);
        append_dev(p, t4);
        append_dev(p, t5);
        append_dev(p, t6);
        append_dev(div5, t7);

        if (!mounted) {
          dispose = listen_dev(div0, "click", click_handler_1, false, false, false);
          mounted = true;
        }
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty &
        /*plans, tag*/
        3 && t2_value !== (t2_value = selectData(
        /*plans*/
        ctx[1], "__id__",
        /*plan*/
        ctx[19].plan).name_plan + "")) set_data_dev(t2, t2_value);
        if (dirty &
        /*tag*/
        1 && t5_value !== (t5_value =
        /*plan*/
        ctx[19].affiliatePercent + "")) set_data_dev(t5, t5_value);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div5);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block$2.name,
      type: "each",
      source: "(182:12) {#each Object.values(tag?.affiliatePlan?.plans || []) as plan}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$5(ctx) {
    var _ctx$, _ctx$$affiliatePlan;

    var section;
    var header;
    var div2;
    var div1;
    var div0;
    var t0;
    var h20;
    var t1;
    var br0;
    var t2;
    var span2;
    var span0;
    var i0;
    var t3;
    var span1;
    var t4_value =
    /*tag*/
    ctx[0].id + "";
    var t4;
    var t5;
    var div3;
    var h21;
    var t6;
    var main;
    var form_1;
    var div5;
    var label;
    var t8;
    var div4;
    var input0;
    var t9;
    var span3;
    var i1;
    var t10;
    var div6;
    var h22;
    var t12;
    var div12;
    var div11;
    var div8;
    var div7;
    var select;
    var t13;
    var div9;
    var input1;
    var t14;
    var span4;
    var i2;
    var t15;
    var div10;
    var button0;
    var t17;
    var t18;
    var div13;
    var t19;
    var p;
    var t21;
    var br1;
    var t22;
    var div14;
    var button1;
    var mounted;
    var dispose;
    var each_value_1 =
    /*plans*/
    ctx[1];
    validate_each_argument(each_value_1);
    var each_blocks_1 = [];

    for (var i = 0; i < each_value_1.length; i += 1) {
      each_blocks_1[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
    }

    var if_block =
    /*tag*/
    ctx[0].affiliatePlan.length > 0 && create_if_block$2(ctx);
    var each_value = Object.values(
    /*tag*/
    ((_ctx$ = ctx[0]) === null || _ctx$ === void 0 ? void 0 : (_ctx$$affiliatePlan = _ctx$.affiliatePlan) === null || _ctx$$affiliatePlan === void 0 ? void 0 : _ctx$$affiliatePlan.plans) || []);
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var _i = 0; _i < each_value.length; _i += 1) {
      each_blocks[_i] = create_each_block$2(get_each_context$2(ctx, each_value, _i));
    }

    var block = {
      c: function create() {
        section = element("section");
        header = element("header");
        div2 = element("div");
        div1 = element("div");
        div0 = element("div");
        t0 = space();
        h20 = element("h2");
        t1 = text("Plan de comisiones\r\n                ");
        br0 = element("br");
        t2 = space();
        span2 = element("span");
        span0 = element("span");
        i0 = element("i");
        t3 = space();
        span1 = element("span");
        t4 = text(t4_value);
        t5 = space();
        div3 = element("div");
        h21 = element("h2");
        t6 = space();
        main = element("main");
        form_1 = element("form");
        div5 = element("div");
        label = element("label");
        label.textContent = "Porcentaje por default";
        t8 = space();
        div4 = element("div");
        input0 = element("input");
        t9 = space();
        span3 = element("span");
        i1 = element("i");
        t10 = space();
        div6 = element("div");
        h22 = element("h2");
        h22.textContent = "Plan de afiliados";
        t12 = space();
        div12 = element("div");
        div11 = element("div");
        div8 = element("div");
        div7 = element("div");
        select = element("select");

        for (var _i2 = 0; _i2 < each_blocks_1.length; _i2 += 1) {
          each_blocks_1[_i2].c();
        }

        t13 = space();
        div9 = element("div");
        input1 = element("input");
        t14 = space();
        span4 = element("span");
        i2 = element("i");
        t15 = space();
        div10 = element("div");
        button0 = element("button");
        button0.textContent = "Agregar";
        t17 = space();
        if (if_block) if_block.c();
        t18 = space();
        div13 = element("div");

        for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].c();
        }

        t19 = space();
        p = element("p");
        p.textContent = "Los planes a los que no se les establezca un porcentaje, mantendrán el porcentaje por default.";
        t21 = space();
        br1 = element("br");
        t22 = space();
        div14 = element("div");
        button1 = element("button");
        button1.textContent = "Guardar";
        attr_dev(div0, "class", "delete pointer has-background-danger");
        add_location(div0, file$4, 113, 16, 2777);
        attr_dev(div1, "class", "buttons is-right");
        add_location(div1, file$4, 112, 12, 2729);
        add_location(br0, file$4, 117, 16, 3013);
        attr_dev(i0, "class", "fas fa-tag");
        add_location(i0, file$4, 120, 24, 3169);
        attr_dev(span0, "class", "icon");
        add_location(span0, file$4, 119, 20, 3124);
        add_location(span1, file$4, 122, 20, 3246);
        attr_dev(span2, "class", "tag is-primary is-rounded is-medium text-icon tripod");
        add_location(span2, file$4, 118, 16, 3035);
        attr_dev(h20, "class", "has-text-centered is-size-5 fw600 has-text-info");
        add_location(h20, file$4, 115, 12, 2899);
        attr_dev(div2, "class", "column is-12");
        add_location(div2, file$4, 111, 8, 2677);
        add_location(h21, file$4, 129, 12, 3449);
        attr_dev(div3, "class", "column is-12");
        add_location(div3, file$4, 128, 8, 3409);
        attr_dev(header, "class", "columns is-multiline");
        add_location(header, file$4, 110, 4, 2630);
        attr_dev(label, "for", "");
        attr_dev(label, "class", "fw600 label-text");
        add_location(label, file$4, 137, 16, 3763);
        attr_dev(input0, "type", "number");
        attr_dev(input0, "step", "any");
        attr_dev(input0, "name", "affiliatePercent");
        attr_dev(input0, "placeholder", "%");
        attr_dev(input0, "class", "input formElements is-rounded is-hovered");
        attr_dev(input0, "min", "1");
        attr_dev(input0, "max", "99");
        input0.required = true;
        add_location(input0, file$4, 139, 20, 3958);
        attr_dev(i1, "class", "fas fa-percent");
        add_location(i1, file$4, 141, 24, 4246);
        attr_dev(span3, "class", "icon is-small is-left");
        add_location(span3, file$4, 140, 20, 4184);
        attr_dev(div4, "class", "control has-text-centered has-icons-left");
        add_location(div4, file$4, 138, 16, 3850);
        attr_dev(div5, "class", "field column is-6");
        add_location(div5, file$4, 136, 12, 3714);
        attr_dev(h22, "class", "has-text-dark is-size-6 fw600 has-text-centered");
        add_location(h22, file$4, 146, 16, 4444);
        attr_dev(div6, "class", "field column is-8");
        add_location(div6, file$4, 145, 12, 4395);
        attr_dev(select, "name", "plan");
        attr_dev(select, "class", "formElements");
        add_location(select, file$4, 154, 28, 4849);
        attr_dev(div7, "class", "select is-rounded");
        add_location(div7, file$4, 153, 24, 4788);
        attr_dev(div8, "class", "control");
        set_style(div8, "width", "40%");
        add_location(div8, file$4, 152, 20, 4721);
        attr_dev(input1, "type", "number");
        attr_dev(input1, "name", "percentPlan");
        input1.value = "20";
        attr_dev(input1, "inputmode", "numeric");
        attr_dev(input1, "class", "input is-rounded formElements");
        attr_dev(input1, "min", "1");
        attr_dev(input1, "max", "99");
        attr_dev(input1, "step", "any");
        attr_dev(input1, "placeholder", "%");
        add_location(input1, file$4, 162, 24, 5326);
        attr_dev(i2, "class", "fas fa-percent");
        add_location(i2, file$4, 164, 28, 5571);
        attr_dev(span4, "class", "icon is-small is-left");
        add_location(span4, file$4, 163, 24, 5505);
        attr_dev(div9, "class", "control has-icons-left");
        add_location(div9, file$4, 161, 20, 5264);
        attr_dev(button0, "type", "button");
        attr_dev(button0, "class", "button is-primary is-outlined is-rounded");
        add_location(button0, file$4, 168, 24, 5731);
        attr_dev(div10, "class", "control");
        add_location(div10, file$4, 167, 20, 5684);
        attr_dev(div11, "class", "field has-addons is-justify-content-center");
        add_location(div11, file$4, 151, 16, 4643);
        attr_dev(div12, "class", "column is-8");
        add_location(div12, file$4, 150, 12, 4600);
        attr_dev(form_1, "class", "columns is-multiline is-centered");
        attr_dev(form_1, "action", "POST");
        add_location(form_1, file$4, 135, 8, 3543);
        attr_dev(div13, "class", "columns is-multiline is-centered");
        add_location(div13, file$4, 180, 8, 6247);
        attr_dev(p, "class", "has-text-centered is-size-7");
        add_location(p, file$4, 201, 8, 7312);
        add_location(br1, file$4, 204, 8, 7483);
        attr_dev(button1, "type", "submit");
        attr_dev(button1, "class", "button is-success fw600 is-rounded has-text-white");
        add_location(button1, file$4, 206, 12, 7544);
        attr_dev(div14, "class", "buttons is-centered");
        add_location(div14, file$4, 205, 8, 7497);
        add_location(main, file$4, 134, 4, 3527);
        add_location(section, file$4, 109, 0, 2615);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, section, anchor);
        append_dev(section, header);
        append_dev(header, div2);
        append_dev(div2, div1);
        append_dev(div1, div0);
        append_dev(div2, t0);
        append_dev(div2, h20);
        append_dev(h20, t1);
        append_dev(h20, br0);
        append_dev(h20, t2);
        append_dev(h20, span2);
        append_dev(span2, span0);
        append_dev(span0, i0);
        append_dev(span2, t3);
        append_dev(span2, span1);
        append_dev(span1, t4);
        append_dev(header, t5);
        append_dev(header, div3);
        append_dev(div3, h21);
        append_dev(section, t6);
        append_dev(section, main);
        append_dev(main, form_1);
        append_dev(form_1, div5);
        append_dev(div5, label);
        append_dev(div5, t8);
        append_dev(div5, div4);
        append_dev(div4, input0);
        /*input0_binding*/

        ctx[10](input0);
        set_input_value(input0,
        /*defaultPercent*/
        ctx[5]);
        append_dev(div4, t9);
        append_dev(div4, span3);
        append_dev(span3, i1);
        append_dev(form_1, t10);
        append_dev(form_1, div6);
        append_dev(div6, h22);
        append_dev(form_1, t12);
        append_dev(form_1, div12);
        append_dev(div12, div11);
        append_dev(div11, div8);
        append_dev(div8, div7);
        append_dev(div7, select);

        for (var _i4 = 0; _i4 < each_blocks_1.length; _i4 += 1) {
          each_blocks_1[_i4].m(select, null);
        }

        append_dev(div11, t13);
        append_dev(div11, div9);
        append_dev(div9, input1);
        append_dev(div9, t14);
        append_dev(div9, span4);
        append_dev(span4, i2);
        append_dev(div11, t15);
        append_dev(div11, div10);
        append_dev(div10, button0);
        /*form_1_binding*/

        ctx[13](form_1);
        append_dev(main, t17);
        if (if_block) if_block.m(main, null);
        append_dev(main, t18);
        append_dev(main, div13);

        for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
          each_blocks[_i5].m(div13, null);
        }

        append_dev(main, t19);
        append_dev(main, p);
        append_dev(main, t21);
        append_dev(main, br1);
        append_dev(main, t22);
        append_dev(main, div14);
        append_dev(div14, button1);

        if (!mounted) {
          dispose = [listen_dev(div0, "click", function () {
            if (is_function(
            /*navigation*/
            ctx[2]("main")))
              /*navigation*/
              ctx[2]("main").apply(this, arguments);
          }, false, false, false), listen_dev(input0, "input",
          /*input0_input_handler*/
          ctx[11]), listen_dev(button0, "click",
          /*click_handler*/
          ctx[12], false, false, false), listen_dev(form_1, "submit", prevent_default(
          /*submit_handler*/
          ctx[14]), false, true, false), listen_dev(button1, "click",
          /*click_handler_2*/
          ctx[16], false, false, false)];
          mounted = true;
        }
      },
      p: function update(new_ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        ctx = new_ctx;
        if (dirty &
        /*tag*/
        1 && t4_value !== (t4_value =
        /*tag*/
        ctx[0].id + "")) set_data_dev(t4, t4_value);

        if (dirty &
        /*defaultPercent*/
        32 && to_number(input0.value) !==
        /*defaultPercent*/
        ctx[5]) {
          set_input_value(input0,
          /*defaultPercent*/
          ctx[5]);
        }

        if (dirty &
        /*plans*/
        2) {
          each_value_1 =
          /*plans*/
          ctx[1];
          validate_each_argument(each_value_1);

          var _i6;

          for (_i6 = 0; _i6 < each_value_1.length; _i6 += 1) {
            var child_ctx = get_each_context_1$1(ctx, each_value_1, _i6);

            if (each_blocks_1[_i6]) {
              each_blocks_1[_i6].p(child_ctx, dirty);
            } else {
              each_blocks_1[_i6] = create_each_block_1$1(child_ctx);

              each_blocks_1[_i6].c();

              each_blocks_1[_i6].m(select, null);
            }
          }

          for (; _i6 < each_blocks_1.length; _i6 += 1) {
            each_blocks_1[_i6].d(1);
          }

          each_blocks_1.length = each_value_1.length;
        }

        if (
        /*tag*/
        ctx[0].affiliatePlan.length > 0) {
          if (if_block) ; else {
            if_block = create_if_block$2(ctx);
            if_block.c();
            if_block.m(main, t18);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }

        if (dirty &
        /*Object, tag, selectData, plans, removePercentage*/
        131) {
          var _ctx$2, _ctx$2$affiliatePlan;

          each_value = Object.values(
          /*tag*/
          ((_ctx$2 = ctx[0]) === null || _ctx$2 === void 0 ? void 0 : (_ctx$2$affiliatePlan = _ctx$2.affiliatePlan) === null || _ctx$2$affiliatePlan === void 0 ? void 0 : _ctx$2$affiliatePlan.plans) || []);
          validate_each_argument(each_value);

          var _i7;

          for (_i7 = 0; _i7 < each_value.length; _i7 += 1) {
            var _child_ctx = get_each_context$2(ctx, each_value, _i7);

            if (each_blocks[_i7]) {
              each_blocks[_i7].p(_child_ctx, dirty);
            } else {
              each_blocks[_i7] = create_each_block$2(_child_ctx);

              each_blocks[_i7].c();

              each_blocks[_i7].m(div13, null);
            }
          }

          for (; _i7 < each_blocks.length; _i7 += 1) {
            each_blocks[_i7].d(1);
          }

          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(section);
        /*input0_binding*/

        ctx[10](null);
        destroy_each(each_blocks_1, detaching);
        /*form_1_binding*/

        ctx[13](null);
        if (if_block) if_block.d();
        destroy_each(each_blocks, detaching);
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$5.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$5($$self, $$props, $$invalidate) {
    var _tag$affiliatePercent, _tag$affiliatePlan, _tag, _tag$affiliatePlan2;

    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots('ComissionPanel', slots, []);
    var tag = $$props.tag;
    var navigation = $$props.navigation;
    var plans = $$props.plans;
    var api_url = $$props.api_url;
    var form = null;
    var inputDefault;
    var defaultPercent = 20;
    tag.affiliatePercent = (_tag$affiliatePercent = tag.affiliatePercent) !== null && _tag$affiliatePercent !== void 0 ? _tag$affiliatePercent : defaultPercent;
    tag.affiliatePlan = (_tag$affiliatePlan = tag.affiliatePlan) !== null && _tag$affiliatePlan !== void 0 ? _tag$affiliatePlan : {};
    var post_data = {};
    tag.affiliatePlan = typeof tag.affiliatePlan === "string" ? JSON.parse(tag.affiliatePlan) : tag.affiliatePlan;

    if (tag.affiliatePlan === null || tag.affiliatePlan === false) {
      tag.affiliatePlan = {};
    }

    post_data = {
      affiliatePercent: tag.affiliatePercent,
      plans: ((_tag = tag) === null || _tag === void 0 ? void 0 : (_tag$affiliatePlan2 = _tag.affiliatePlan) === null || _tag$affiliatePlan2 === void 0 ? void 0 : _tag$affiliatePlan2.plans) || []
    };

    if (Array.isArray(post_data.plans)) {
      var object = {};
      post_data.plans.map(function (data) {
        object[data.plan] = data;
      });
      post_data.plans = object;
    }

    tag = tag;

    function addPercentage() {

      var data = AppForms.retrieve({
        form: form,
        targets: ".formElements"
      });
      var plan = selectData(plans, "__id__", data.plan);
      post_data.plans[data.plan] = {
        plan: plan.__id__,
        membership_type: plan.membership_type,
        affiliatePercent: data.percentPlan
      };
      post_data = post_data;
      $$invalidate(0, tag.affiliatePlan.plans = post_data.plans, tag);
      $$invalidate(0, tag);
    }

    function removePercentage(id) {
      delete tag.affiliatePlan.plans[id];
      $$invalidate(0, tag);
    }

    function submit() {
      post_data.affiliatePercent = defaultPercent;
      var data = {
        affiliatePlan: post_data,
        tag_name: tag.id
      };
      data.affiliatePlan.plans = Object.values(data.affiliatePlan.plans);
      Connect3Pod(api_url + "TagManager_update", {
        data: data,
        ready: function ready(data) {
          data = JSON.parse(data[0]);
          toast$1(data.message, data.status);
        }
      });
    }

    var membership_names = {};
    plans = plans.filter(function (plan) {
      var type = plan.membership_type;

      switch (type) {
        case "funnels":
          plan.membership_name = "Funnels";
          break;

        case "designs":
          plan.membership_name = "Diseño Gráfico";
          break;

        case "campaigns":
          plan.membership_name = "Campañas";
          break;

        default:
          plan.membership_name = "Sin categoría";
          break;
      }

      return plan;
    });
    var writable_props = ['tag', 'navigation', 'plans', 'api_url'];
    Object_1$2.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<ComissionPanel> was created with unknown prop '".concat(key, "'"));
    });

    function input0_binding($$value) {
      binding_callbacks[$$value ? 'unshift' : 'push'](function () {
        inputDefault = $$value;
        $$invalidate(4, inputDefault);
      });
    }

    function input0_input_handler() {
      defaultPercent = to_number(this.value);
      $$invalidate(5, defaultPercent);
    }

    var click_handler = function click_handler() {
      addPercentage();
    };

    function form_1_binding($$value) {
      binding_callbacks[$$value ? 'unshift' : 'push'](function () {
        form = $$value;
        $$invalidate(3, form);
      });
    }

    var submit_handler = function submit_handler(e) {
      submit(e.target);
    };

    var click_handler_1 = function click_handler_1(plan) {
      removePercentage(plan.plan);
    };

    var click_handler_2 = function click_handler_2() {
      submit();
    };

    $$self.$$set = function ($$props) {
      if ('tag' in $$props) $$invalidate(0, tag = $$props.tag);
      if ('navigation' in $$props) $$invalidate(2, navigation = $$props.navigation);
      if ('plans' in $$props) $$invalidate(1, plans = $$props.plans);
      if ('api_url' in $$props) $$invalidate(9, api_url = $$props.api_url);
    };

    $$self.$capture_state = function () {
      return {
        AppForms: AppForms,
        Connect3Pod: Connect3Pod,
        selectData: selectData,
        toast: toast$1,
        tag: tag,
        navigation: navigation,
        plans: plans,
        api_url: api_url,
        form: form,
        inputDefault: inputDefault,
        defaultPercent: defaultPercent,
        post_data: post_data,
        addPercentage: addPercentage,
        removePercentage: removePercentage,
        submit: submit,
        membership_names: membership_names
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('tag' in $$props) $$invalidate(0, tag = $$props.tag);
      if ('navigation' in $$props) $$invalidate(2, navigation = $$props.navigation);
      if ('plans' in $$props) $$invalidate(1, plans = $$props.plans);
      if ('api_url' in $$props) $$invalidate(9, api_url = $$props.api_url);
      if ('form' in $$props) $$invalidate(3, form = $$props.form);
      if ('inputDefault' in $$props) $$invalidate(4, inputDefault = $$props.inputDefault);
      if ('defaultPercent' in $$props) $$invalidate(5, defaultPercent = $$props.defaultPercent);
      if ('post_data' in $$props) post_data = $$props.post_data;
      if ('membership_names' in $$props) membership_names = $$props.membership_names;
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [tag, plans, navigation, form, inputDefault, defaultPercent, addPercentage, removePercentage, submit, api_url, input0_binding, input0_input_handler, click_handler, form_1_binding, submit_handler, click_handler_1, click_handler_2];
  }

  var ComissionPanel = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(ComissionPanel, _SvelteComponentDev);

    var _super = _createSuper(ComissionPanel);

    function ComissionPanel(options) {
      var _this;

      _classCallCheck(this, ComissionPanel);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, {
        tag: 0,
        navigation: 2,
        plans: 1,
        api_url: 9
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "ComissionPanel",
        options: options,
        id: create_fragment$5.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*tag*/
      ctx[0] === undefined && !('tag' in props)) {
        console.warn("<ComissionPanel> was created without expected prop 'tag'");
      }

      if (
      /*navigation*/
      ctx[2] === undefined && !('navigation' in props)) {
        console.warn("<ComissionPanel> was created without expected prop 'navigation'");
      }

      if (
      /*plans*/
      ctx[1] === undefined && !('plans' in props)) {
        console.warn("<ComissionPanel> was created without expected prop 'plans'");
      }

      if (
      /*api_url*/
      ctx[9] === undefined && !('api_url' in props)) {
        console.warn("<ComissionPanel> was created without expected prop 'api_url'");
      }

      return _this;
    }

    _createClass(ComissionPanel, [{
      key: "tag",
      get: function get() {
        throw new Error("<ComissionPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<ComissionPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "navigation",
      get: function get() {
        throw new Error("<ComissionPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<ComissionPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "plans",
      get: function get() {
        throw new Error("<ComissionPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<ComissionPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "api_url",
      get: function get() {
        throw new Error("<ComissionPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<ComissionPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return ComissionPanel;
  }(SvelteComponentDev);

  var css_248z$3 = "";
  styleInject(css_248z$3);

  var Object_1$1 = globals.Object;
  var file$3 = "src\\TagManager\\panels\\DiscountPanel.svelte";

  function get_each_context$1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[15] = list[i];
    return child_ctx;
  }

  function get_each_context_1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[15] = list[i];
    return child_ctx;
  } // (140:32) {#each plans as plan}


  function create_each_block_1(ctx) {
    var option;
    var t0_value =
    /*plan*/
    ctx[15].membership_name + "";
    var t0;
    var t1;
    var t2_value =
    /*plan*/
    ctx[15].name_plan + "";
    var t2;
    var option_data_membership_value;
    var option_value_value;
    var block = {
      c: function create() {
        option = element("option");
        t0 = text(t0_value);
        t1 = text(" - ");
        t2 = text(t2_value);
        attr_dev(option, "data-membership", option_data_membership_value =
        /*plan*/
        ctx[15].membership_type);
        option.__value = option_value_value =
        /*plan*/
        ctx[15].__id__;
        option.value = option.__value;
        add_location(option, file$3, 140, 36, 4041);
      },
      m: function mount(target, anchor) {
        insert_dev(target, option, anchor);
        append_dev(option, t0);
        append_dev(option, t1);
        append_dev(option, t2);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*plans*/
        2 && t0_value !== (t0_value =
        /*plan*/
        ctx[15].membership_name + "")) set_data_dev(t0, t0_value);
        if (dirty &
        /*plans*/
        2 && t2_value !== (t2_value =
        /*plan*/
        ctx[15].name_plan + "")) set_data_dev(t2, t2_value);

        if (dirty &
        /*plans*/
        2 && option_data_membership_value !== (option_data_membership_value =
        /*plan*/
        ctx[15].membership_type)) {
          attr_dev(option, "data-membership", option_data_membership_value);
        }

        if (dirty &
        /*plans*/
        2 && option_value_value !== (option_value_value =
        /*plan*/
        ctx[15].__id__)) {
          prop_dev(option, "__value", option_value_value);
          option.value = option.__value;
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(option);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block_1.name,
      type: "each",
      source: "(140:32) {#each plans as plan}",
      ctx: ctx
    });
    return block;
  } // (160:8) {#if tag.discountsPlan.length > 0}


  function create_if_block$1(ctx) {
    var h3;
    var block = {
      c: function create() {
        h3 = element("h3");
        h3.textContent = "Planes con porcentaje personalizado establecidos:";
        attr_dev(h3, "class", "has-text-centered fw600 has-text-info");
        add_location(h3, file$3, 160, 12, 5144);
      },
      m: function mount(target, anchor) {
        insert_dev(target, h3, anchor);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(h3);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$1.name,
      type: "if",
      source: "(160:8) {#if tag.discountsPlan.length > 0}",
      ctx: ctx
    });
    return block;
  } // (166:12) {#each Object.values(tag?.discountsPlan?.plans || []) as plan}


  function create_each_block$1(ctx) {
    var div5;
    var div4;
    var div0;
    var t0;
    var div3;
    var div1;
    var t1;
    var strong;
    var t2_value = selectData(
    /*plans*/
    ctx[1], "__id__",
    /*plan*/
    ctx[15].plan).name_plan + "";
    var t2;
    var t3;
    var div2;
    var p;
    var t4;
    var t5_value =
    /*plan*/
    ctx[15].discountPercent + "";
    var t5;
    var t6;
    var t7;
    var mounted;
    var dispose;

    function click_handler_1() {
      return (
        /*click_handler_1*/
        ctx[11](
        /*plan*/
        ctx[15])
      );
    }

    var block = {
      c: function create() {
        div5 = element("div");
        div4 = element("div");
        div0 = element("div");
        t0 = space();
        div3 = element("div");
        div1 = element("div");
        t1 = text("Plan: ");
        strong = element("strong");
        t2 = text(t2_value);
        t3 = space();
        div2 = element("div");
        p = element("p");
        t4 = text("- ");
        t5 = text(t5_value);
        t6 = text("% de Descuento");
        t7 = space();
        attr_dev(div0, "class", "delete has-background-danger delete-item svelte-b989md");
        add_location(div0, file$3, 168, 24, 5551);
        add_location(strong, file$3, 171, 38, 5808);
        attr_dev(div1, "class", "column");
        add_location(div1, file$3, 170, 28, 5748);
        attr_dev(p, "class", "has-text-success fw600");
        add_location(p, file$3, 176, 32, 6067);
        attr_dev(div2, "class", "column");
        add_location(div2, file$3, 175, 28, 6013);
        attr_dev(div3, "class", "columns is-multiline");
        add_location(div3, file$3, 169, 24, 5684);
        attr_dev(div4, "class", "box box-plans-added svelte-b989md");
        add_location(div4, file$3, 167, 20, 5492);
        attr_dev(div5, "class", "column is-8");
        add_location(div5, file$3, 166, 16, 5445);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div5, anchor);
        append_dev(div5, div4);
        append_dev(div4, div0);
        append_dev(div4, t0);
        append_dev(div4, div3);
        append_dev(div3, div1);
        append_dev(div1, t1);
        append_dev(div1, strong);
        append_dev(strong, t2);
        append_dev(div3, t3);
        append_dev(div3, div2);
        append_dev(div2, p);
        append_dev(p, t4);
        append_dev(p, t5);
        append_dev(p, t6);
        append_dev(div5, t7);

        if (!mounted) {
          dispose = listen_dev(div0, "click", click_handler_1, false, false, false);
          mounted = true;
        }
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty &
        /*plans, tag*/
        3 && t2_value !== (t2_value = selectData(
        /*plans*/
        ctx[1], "__id__",
        /*plan*/
        ctx[15].plan).name_plan + "")) set_data_dev(t2, t2_value);
        if (dirty &
        /*tag*/
        1 && t5_value !== (t5_value =
        /*plan*/
        ctx[15].discountPercent + "")) set_data_dev(t5, t5_value);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div5);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block$1.name,
      type: "each",
      source: "(166:12) {#each Object.values(tag?.discountsPlan?.plans || []) as plan}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$4(ctx) {
    var _ctx$, _ctx$$discountsPlan;

    var section;
    var header;
    var div2;
    var div1;
    var div0;
    var t0;
    var h20;
    var t1;
    var br0;
    var t2;
    var span2;
    var span0;
    var i0;
    var t3;
    var span1;
    var t4_value =
    /*tag*/
    ctx[0].id + "";
    var t4;
    var t5;
    var div3;
    var h21;
    var t6;
    var main;
    var form_1;
    var div4;
    var h22;
    var t8;
    var div10;
    var div9;
    var div6;
    var div5;
    var select;
    var t9;
    var div7;
    var input;
    var t10;
    var span3;
    var i1;
    var t11;
    var div8;
    var button0;
    var t13;
    var t14;
    var div11;
    var t15;
    var br1;
    var t16;
    var div12;
    var button1;
    var mounted;
    var dispose;
    var each_value_1 =
    /*plans*/
    ctx[1];
    validate_each_argument(each_value_1);
    var each_blocks_1 = [];

    for (var i = 0; i < each_value_1.length; i += 1) {
      each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    }

    var if_block =
    /*tag*/
    ctx[0].discountsPlan.length > 0 && create_if_block$1(ctx);
    var each_value = Object.values(
    /*tag*/
    ((_ctx$ = ctx[0]) === null || _ctx$ === void 0 ? void 0 : (_ctx$$discountsPlan = _ctx$.discountsPlan) === null || _ctx$$discountsPlan === void 0 ? void 0 : _ctx$$discountsPlan.plans) || []);
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var _i = 0; _i < each_value.length; _i += 1) {
      each_blocks[_i] = create_each_block$1(get_each_context$1(ctx, each_value, _i));
    }

    var block = {
      c: function create() {
        section = element("section");
        header = element("header");
        div2 = element("div");
        div1 = element("div");
        div0 = element("div");
        t0 = space();
        h20 = element("h2");
        t1 = text("Plan de comisiones\r\n                ");
        br0 = element("br");
        t2 = space();
        span2 = element("span");
        span0 = element("span");
        i0 = element("i");
        t3 = space();
        span1 = element("span");
        t4 = text(t4_value);
        t5 = space();
        div3 = element("div");
        h21 = element("h2");
        t6 = space();
        main = element("main");
        form_1 = element("form");
        div4 = element("div");
        h22 = element("h2");
        h22.textContent = "Plan de descuentos";
        t8 = space();
        div10 = element("div");
        div9 = element("div");
        div6 = element("div");
        div5 = element("div");
        select = element("select");

        for (var _i2 = 0; _i2 < each_blocks_1.length; _i2 += 1) {
          each_blocks_1[_i2].c();
        }

        t9 = space();
        div7 = element("div");
        input = element("input");
        t10 = space();
        span3 = element("span");
        i1 = element("i");
        t11 = space();
        div8 = element("div");
        button0 = element("button");
        button0.textContent = "Agregar";
        t13 = space();
        if (if_block) if_block.c();
        t14 = space();
        div11 = element("div");

        for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].c();
        }

        t15 = space();
        br1 = element("br");
        t16 = space();
        div12 = element("div");
        button1 = element("button");
        button1.textContent = "Guardar";
        attr_dev(div0, "class", "delete pointer has-background-danger");
        add_location(div0, file$3, 106, 16, 2537);
        attr_dev(div1, "class", "buttons is-right");
        add_location(div1, file$3, 105, 12, 2489);
        add_location(br0, file$3, 110, 16, 2773);
        attr_dev(i0, "class", "fas fa-tag");
        add_location(i0, file$3, 113, 24, 2929);
        attr_dev(span0, "class", "icon");
        add_location(span0, file$3, 112, 20, 2884);
        add_location(span1, file$3, 115, 20, 3006);
        attr_dev(span2, "class", "tag is-primary is-rounded is-medium text-icon tripod");
        add_location(span2, file$3, 111, 16, 2795);
        attr_dev(h20, "class", "has-text-centered is-size-5 fw600 has-text-info");
        add_location(h20, file$3, 108, 12, 2659);
        attr_dev(div2, "class", "column is-12");
        add_location(div2, file$3, 104, 8, 2437);
        add_location(h21, file$3, 122, 12, 3209);
        attr_dev(div3, "class", "column is-12");
        add_location(div3, file$3, 121, 8, 3169);
        attr_dev(header, "class", "columns is-multiline");
        add_location(header, file$3, 103, 4, 2390);
        attr_dev(h22, "class", "has-text-dark is-size-6 fw600 has-text-centered");
        add_location(h22, file$3, 130, 16, 3501);
        attr_dev(div4, "class", "field column is-8");
        add_location(div4, file$3, 129, 12, 3452);
        attr_dev(select, "name", "plan");
        attr_dev(select, "class", "formElements");
        add_location(select, file$3, 138, 28, 3907);
        attr_dev(div5, "class", "select is-rounded");
        add_location(div5, file$3, 137, 24, 3846);
        attr_dev(div6, "class", "control");
        set_style(div6, "width", "40%");
        add_location(div6, file$3, 136, 20, 3779);
        attr_dev(input, "type", "number");
        attr_dev(input, "name", "percentPlan");
        input.value = "20";
        attr_dev(input, "inputmode", "numeric");
        attr_dev(input, "class", "input is-rounded formElements");
        attr_dev(input, "min", "1");
        attr_dev(input, "max", "99");
        attr_dev(input, "step", "any");
        attr_dev(input, "placeholder", "%");
        add_location(input, file$3, 146, 24, 4384);
        attr_dev(i1, "class", "fas fa-percent");
        add_location(i1, file$3, 148, 28, 4629);
        attr_dev(span3, "class", "icon is-small is-left");
        add_location(span3, file$3, 147, 24, 4563);
        attr_dev(div7, "class", "control has-icons-left");
        add_location(div7, file$3, 145, 20, 4322);
        attr_dev(button0, "type", "button");
        attr_dev(button0, "class", "button is-primary is-outlined is-rounded");
        add_location(button0, file$3, 152, 24, 4789);
        attr_dev(div8, "class", "control");
        add_location(div8, file$3, 151, 20, 4742);
        attr_dev(div9, "class", "field has-addons is-justify-content-center");
        add_location(div9, file$3, 135, 16, 3701);
        attr_dev(div10, "class", "column is-8");
        add_location(div10, file$3, 134, 12, 3658);
        attr_dev(form_1, "class", "columns is-multiline is-centered");
        attr_dev(form_1, "action", "POST");
        add_location(form_1, file$3, 128, 8, 3303);
        attr_dev(div11, "class", "columns is-multiline is-centered");
        add_location(div11, file$3, 164, 8, 5305);
        add_location(br1, file$3, 185, 8, 6382);
        attr_dev(button1, "type", "submit");
        attr_dev(button1, "class", "button is-success fw600 is-rounded has-text-white");
        add_location(button1, file$3, 187, 12, 6443);
        attr_dev(div12, "class", "buttons is-centered");
        add_location(div12, file$3, 186, 8, 6396);
        add_location(main, file$3, 127, 4, 3287);
        add_location(section, file$3, 102, 0, 2375);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, section, anchor);
        append_dev(section, header);
        append_dev(header, div2);
        append_dev(div2, div1);
        append_dev(div1, div0);
        append_dev(div2, t0);
        append_dev(div2, h20);
        append_dev(h20, t1);
        append_dev(h20, br0);
        append_dev(h20, t2);
        append_dev(h20, span2);
        append_dev(span2, span0);
        append_dev(span0, i0);
        append_dev(span2, t3);
        append_dev(span2, span1);
        append_dev(span1, t4);
        append_dev(header, t5);
        append_dev(header, div3);
        append_dev(div3, h21);
        append_dev(section, t6);
        append_dev(section, main);
        append_dev(main, form_1);
        append_dev(form_1, div4);
        append_dev(div4, h22);
        append_dev(form_1, t8);
        append_dev(form_1, div10);
        append_dev(div10, div9);
        append_dev(div9, div6);
        append_dev(div6, div5);
        append_dev(div5, select);

        for (var _i4 = 0; _i4 < each_blocks_1.length; _i4 += 1) {
          each_blocks_1[_i4].m(select, null);
        }

        append_dev(div9, t9);
        append_dev(div9, div7);
        append_dev(div7, input);
        append_dev(div7, t10);
        append_dev(div7, span3);
        append_dev(span3, i1);
        append_dev(div9, t11);
        append_dev(div9, div8);
        append_dev(div8, button0);
        /*form_1_binding*/

        ctx[9](form_1);
        append_dev(main, t13);
        if (if_block) if_block.m(main, null);
        append_dev(main, t14);
        append_dev(main, div11);

        for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
          each_blocks[_i5].m(div11, null);
        }

        append_dev(main, t15);
        append_dev(main, br1);
        append_dev(main, t16);
        append_dev(main, div12);
        append_dev(div12, button1);

        if (!mounted) {
          dispose = [listen_dev(div0, "click", function () {
            if (is_function(
            /*navigation*/
            ctx[2]("main")))
              /*navigation*/
              ctx[2]("main").apply(this, arguments);
          }, false, false, false), listen_dev(button0, "click",
          /*click_handler*/
          ctx[8], false, false, false), listen_dev(form_1, "submit", prevent_default(
          /*submit_handler*/
          ctx[10]), false, true, false), listen_dev(button1, "click",
          /*click_handler_2*/
          ctx[12], false, false, false)];
          mounted = true;
        }
      },
      p: function update(new_ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        ctx = new_ctx;
        if (dirty &
        /*tag*/
        1 && t4_value !== (t4_value =
        /*tag*/
        ctx[0].id + "")) set_data_dev(t4, t4_value);

        if (dirty &
        /*plans*/
        2) {
          each_value_1 =
          /*plans*/
          ctx[1];
          validate_each_argument(each_value_1);

          var _i6;

          for (_i6 = 0; _i6 < each_value_1.length; _i6 += 1) {
            var child_ctx = get_each_context_1(ctx, each_value_1, _i6);

            if (each_blocks_1[_i6]) {
              each_blocks_1[_i6].p(child_ctx, dirty);
            } else {
              each_blocks_1[_i6] = create_each_block_1(child_ctx);

              each_blocks_1[_i6].c();

              each_blocks_1[_i6].m(select, null);
            }
          }

          for (; _i6 < each_blocks_1.length; _i6 += 1) {
            each_blocks_1[_i6].d(1);
          }

          each_blocks_1.length = each_value_1.length;
        }

        if (
        /*tag*/
        ctx[0].discountsPlan.length > 0) {
          if (if_block) ; else {
            if_block = create_if_block$1(ctx);
            if_block.c();
            if_block.m(main, t14);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }

        if (dirty &
        /*Object, tag, selectData, plans, removePercentage*/
        35) {
          var _ctx$2, _ctx$2$discountsPlan;

          each_value = Object.values(
          /*tag*/
          ((_ctx$2 = ctx[0]) === null || _ctx$2 === void 0 ? void 0 : (_ctx$2$discountsPlan = _ctx$2.discountsPlan) === null || _ctx$2$discountsPlan === void 0 ? void 0 : _ctx$2$discountsPlan.plans) || []);
          validate_each_argument(each_value);

          var _i7;

          for (_i7 = 0; _i7 < each_value.length; _i7 += 1) {
            var _child_ctx = get_each_context$1(ctx, each_value, _i7);

            if (each_blocks[_i7]) {
              each_blocks[_i7].p(_child_ctx, dirty);
            } else {
              each_blocks[_i7] = create_each_block$1(_child_ctx);

              each_blocks[_i7].c();

              each_blocks[_i7].m(div11, null);
            }
          }

          for (; _i7 < each_blocks.length; _i7 += 1) {
            each_blocks[_i7].d(1);
          }

          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(section);
        destroy_each(each_blocks_1, detaching);
        /*form_1_binding*/

        ctx[9](null);
        if (if_block) if_block.d();
        destroy_each(each_blocks, detaching);
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$4.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$4($$self, $$props, $$invalidate) {
    var _tag$discountsPlan, _tag, _tag$discountsPlan2;

    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots('DiscountPanel', slots, []);
    var tag = $$props.tag;
    var navigation = $$props.navigation;
    var plans = $$props.plans;
    var api_url = $$props.api_url;
    var form = null;
    tag.discountsPlan = (_tag$discountsPlan = tag.discountsPlan) !== null && _tag$discountsPlan !== void 0 ? _tag$discountsPlan : [];
    var post_data = {};
    tag.discountsPlan = typeof tag.discountsPlan === "string" ? JSON.parse(tag.discountsPlan) : tag.discountsPlan;

    if (tag.discountsPlan === null || tag.discountsPlan === false) {
      tag.discountsPlan = [];
    }

    post_data = {
      plans: ((_tag = tag) === null || _tag === void 0 ? void 0 : (_tag$discountsPlan2 = _tag.discountsPlan) === null || _tag$discountsPlan2 === void 0 ? void 0 : _tag$discountsPlan2.plans) || {}
    };

    if (Array.isArray(post_data.plans)) {
      var object = {};
      post_data.plans.map(function (data) {
        object[data.plan] = data;
      });
      post_data.plans = object;
      post_data = post_data;
      tag.discountsPlan.plans = post_data.plans;
    }

    tag = tag;

    function addPercentage() {
      var data = AppForms.retrieve({
        form: form,
        targets: ".formElements"
      });
      var plan = selectData(plans, "__id__", data.plan);
      post_data.plans[data.plan] = {
        plan: plan.__id__,
        membership_type: plan.membership_type,
        discountPercent: data.percentPlan
      };
      post_data = post_data;
      $$invalidate(0, tag.discountsPlan.plans = post_data.plans, tag);
      $$invalidate(0, tag);
    }

    function removePercentage(id) {
      delete tag.discountsPlan.plans[id];
      $$invalidate(0, tag);
    }

    function submit() {
      var data = {
        discountsPlan: post_data,
        tag_name: tag.id
      };
      data.discountsPlan.plans = Object.values(data.discountsPlan.plans);
      Connect3Pod(api_url + "TagManager_update", {
        data: data,
        ready: function ready(data) {
          data = JSON.parse(data[0]);
          toast(data.message, data.status);
        }
      });
    }

    var membership_names = {};
    plans = plans.filter(function (plan) {
      var type = plan.membership_type;

      switch (type) {
        case "funnels":
          plan.membership_name = "Funnels";
          break;

        case "designs":
          plan.membership_name = "Diseño Gráfico";
          break;

        case "campaigns":
          plan.membership_name = "Campañas";
          break;

        default:
          plan.membership_name = "Sin categoría";
          break;
      }

      return plan;
    });
    var writable_props = ['tag', 'navigation', 'plans', 'api_url'];
    Object_1$1.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<DiscountPanel> was created with unknown prop '".concat(key, "'"));
    });

    var click_handler = function click_handler() {
      addPercentage();
    };

    function form_1_binding($$value) {
      binding_callbacks[$$value ? 'unshift' : 'push'](function () {
        form = $$value;
        $$invalidate(3, form);
      });
    }

    var submit_handler = function submit_handler(e) {
      submit(e.target);
    };

    var click_handler_1 = function click_handler_1(plan) {
      removePercentage(plan.plan);
    };

    var click_handler_2 = function click_handler_2() {
      submit();
    };

    $$self.$$set = function ($$props) {
      if ('tag' in $$props) $$invalidate(0, tag = $$props.tag);
      if ('navigation' in $$props) $$invalidate(2, navigation = $$props.navigation);
      if ('plans' in $$props) $$invalidate(1, plans = $$props.plans);
      if ('api_url' in $$props) $$invalidate(7, api_url = $$props.api_url);
    };

    $$self.$capture_state = function () {
      return {
        AppForms: AppForms,
        Connect3Pod: Connect3Pod,
        selectData: selectData,
        tag: tag,
        navigation: navigation,
        plans: plans,
        api_url: api_url,
        form: form,
        post_data: post_data,
        addPercentage: addPercentage,
        removePercentage: removePercentage,
        submit: submit,
        membership_names: membership_names
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('tag' in $$props) $$invalidate(0, tag = $$props.tag);
      if ('navigation' in $$props) $$invalidate(2, navigation = $$props.navigation);
      if ('plans' in $$props) $$invalidate(1, plans = $$props.plans);
      if ('api_url' in $$props) $$invalidate(7, api_url = $$props.api_url);
      if ('form' in $$props) $$invalidate(3, form = $$props.form);
      if ('post_data' in $$props) post_data = $$props.post_data;
      if ('membership_names' in $$props) membership_names = $$props.membership_names;
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [tag, plans, navigation, form, addPercentage, removePercentage, submit, api_url, click_handler, form_1_binding, submit_handler, click_handler_1, click_handler_2];
  }

  var DiscountPanel = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(DiscountPanel, _SvelteComponentDev);

    var _super = _createSuper(DiscountPanel);

    function DiscountPanel(options) {
      var _this;

      _classCallCheck(this, DiscountPanel);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
        tag: 0,
        navigation: 2,
        plans: 1,
        api_url: 7
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "DiscountPanel",
        options: options,
        id: create_fragment$4.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*tag*/
      ctx[0] === undefined && !('tag' in props)) {
        console.warn("<DiscountPanel> was created without expected prop 'tag'");
      }

      if (
      /*navigation*/
      ctx[2] === undefined && !('navigation' in props)) {
        console.warn("<DiscountPanel> was created without expected prop 'navigation'");
      }

      if (
      /*plans*/
      ctx[1] === undefined && !('plans' in props)) {
        console.warn("<DiscountPanel> was created without expected prop 'plans'");
      }

      if (
      /*api_url*/
      ctx[7] === undefined && !('api_url' in props)) {
        console.warn("<DiscountPanel> was created without expected prop 'api_url'");
      }

      return _this;
    }

    _createClass(DiscountPanel, [{
      key: "tag",
      get: function get() {
        throw new Error("<DiscountPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<DiscountPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "navigation",
      get: function get() {
        throw new Error("<DiscountPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<DiscountPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "plans",
      get: function get() {
        throw new Error("<DiscountPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<DiscountPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "api_url",
      get: function get() {
        throw new Error("<DiscountPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<DiscountPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return DiscountPanel;
  }(SvelteComponentDev);

  var file$2 = "src\\TagManager\\panels\\eventsPanel.svelte";

  function create_fragment$3(ctx) {
    var section;
    var header;
    var div2;
    var div1;
    var div0;
    var t0;
    var h2;
    var t1;
    var br;
    var t2;
    var span2;
    var span0;
    var i;
    var t3;
    var span1;
    var t4_value =
    /*tag*/
    ctx[0].id + "";
    var t4;
    var t5;
    var main;
    var mounted;
    var dispose;
    var block = {
      c: function create() {
        section = element("section");
        header = element("header");
        div2 = element("div");
        div1 = element("div");
        div0 = element("div");
        t0 = space();
        h2 = element("h2");
        t1 = text("Capturador de eventos\r\n                ");
        br = element("br");
        t2 = space();
        span2 = element("span");
        span0 = element("span");
        i = element("i");
        t3 = space();
        span1 = element("span");
        t4 = text(t4_value);
        t5 = space();
        main = element("main");
        main.textContent = "No establecido aún";
        attr_dev(div0, "class", "delete pointer has-background-danger");
        add_location(div0, file$2, 13, 16, 302);
        attr_dev(div1, "class", "buttons is-right");
        add_location(div1, file$2, 12, 12, 254);
        add_location(br, file$2, 17, 16, 541);
        attr_dev(i, "class", "fas fa-tag");
        add_location(i, file$2, 20, 24, 697);
        attr_dev(span0, "class", "icon");
        add_location(span0, file$2, 19, 20, 652);
        add_location(span1, file$2, 22, 20, 774);
        attr_dev(span2, "class", "tag is-primary is-rounded is-medium text-icon tripod");
        add_location(span2, file$2, 18, 16, 563);
        attr_dev(h2, "class", "has-text-centered is-size-5 fw600 has-text-info");
        add_location(h2, file$2, 15, 12, 424);
        attr_dev(div2, "class", "column is-12");
        add_location(div2, file$2, 11, 8, 202);
        attr_dev(header, "class", "columns is-multiline");
        add_location(header, file$2, 10, 4, 155);
        add_location(main, file$2, 29, 4, 948);
        add_location(section, file$2, 9, 0, 140);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, section, anchor);
        append_dev(section, header);
        append_dev(header, div2);
        append_dev(div2, div1);
        append_dev(div1, div0);
        append_dev(div2, t0);
        append_dev(div2, h2);
        append_dev(h2, t1);
        append_dev(h2, br);
        append_dev(h2, t2);
        append_dev(h2, span2);
        append_dev(span2, span0);
        append_dev(span0, i);
        append_dev(span2, t3);
        append_dev(span2, span1);
        append_dev(span1, t4);
        append_dev(section, t5);
        append_dev(section, main);

        if (!mounted) {
          dispose = listen_dev(div0, "click", function () {
            if (is_function(
            /*navigation*/
            ctx[1]("main")))
              /*navigation*/
              ctx[1]("main").apply(this, arguments);
          }, false, false, false);
          mounted = true;
        }
      },
      p: function update(new_ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        ctx = new_ctx;
        if (dirty &
        /*tag*/
        1 && t4_value !== (t4_value =
        /*tag*/
        ctx[0].id + "")) set_data_dev(t4, t4_value);
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(section);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$3.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$3($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots('EventsPanel', slots, []);
    var tag = $$props.tag;
    var navigation = $$props.navigation;
    var writable_props = ['tag', 'navigation'];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<EventsPanel> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ('tag' in $$props) $$invalidate(0, tag = $$props.tag);
      if ('navigation' in $$props) $$invalidate(1, navigation = $$props.navigation);
    };

    $$self.$capture_state = function () {
      return {
        tag: tag,
        navigation: navigation
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('tag' in $$props) $$invalidate(0, tag = $$props.tag);
      if ('navigation' in $$props) $$invalidate(1, navigation = $$props.navigation);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [tag, navigation];
  }

  var EventsPanel = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(EventsPanel, _SvelteComponentDev);

    var _super = _createSuper(EventsPanel);

    function EventsPanel(options) {
      var _this;

      _classCallCheck(this, EventsPanel);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
        tag: 0,
        navigation: 1
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "EventsPanel",
        options: options,
        id: create_fragment$3.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*tag*/
      ctx[0] === undefined && !('tag' in props)) {
        console.warn("<EventsPanel> was created without expected prop 'tag'");
      }

      if (
      /*navigation*/
      ctx[1] === undefined && !('navigation' in props)) {
        console.warn("<EventsPanel> was created without expected prop 'navigation'");
      }

      return _this;
    }

    _createClass(EventsPanel, [{
      key: "tag",
      get: function get() {
        throw new Error("<EventsPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<EventsPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "navigation",
      get: function get() {
        throw new Error("<EventsPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<EventsPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return EventsPanel;
  }(SvelteComponentDev);

  var css_248z$2 = "";
  styleInject(css_248z$2);

  var Object_1 = globals.Object;
  var file$1 = "src\\TagManager\\CoreTagManager.svelte";

  function get_each_context(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[21] = list[i];
    return child_ctx;
  } // (131:0) {#if memberships !== null}


  function create_if_block(ctx) {
    var section;
    var div1;
    var div0;
    var t0;
    var t1;
    var t2;
    var current;
    var if_block0 =
    /*panel*/
    ctx[0] === "main" && create_if_block_4(ctx);
    var if_block1 =
    /*panel*/
    ctx[0] === "ComissionPanel" && create_if_block_3(ctx);
    var if_block2 =
    /*panel*/
    ctx[0] === "DiscountPanel" && create_if_block_2(ctx);
    var if_block3 =
    /*panel*/
    ctx[0] === "EventsPanel" && create_if_block_1(ctx);
    var block = {
      c: function create() {
        section = element("section");
        div1 = element("div");
        div0 = element("div");
        if (if_block0) if_block0.c();
        t0 = space();
        if (if_block1) if_block1.c();
        t1 = space();
        if (if_block2) if_block2.c();
        t2 = space();
        if (if_block3) if_block3.c();
        attr_dev(div0, "class", "box");
        add_location(div0, file$1, 133, 12, 3818);
        attr_dev(div1, "class", "column is-12");
        add_location(div1, file$1, 132, 8, 3778);
        attr_dev(section, "class", "columns is-multiline");
        add_location(section, file$1, 131, 4, 3730);
      },
      m: function mount(target, anchor) {
        insert_dev(target, section, anchor);
        append_dev(section, div1);
        append_dev(div1, div0);
        if (if_block0) if_block0.m(div0, null);
        append_dev(div0, t0);
        if (if_block1) if_block1.m(div0, null);
        append_dev(div0, t1);
        if (if_block2) if_block2.m(div0, null);
        append_dev(div0, t2);
        if (if_block3) if_block3.m(div0, null);
        current = true;
      },
      p: function update(ctx, dirty) {
        if (
        /*panel*/
        ctx[0] === "main") {
          if (if_block0) {
            if_block0.p(ctx, dirty);

            if (dirty &
            /*panel*/
            1) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_4(ctx);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(div0, t0);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, function () {
            if_block0 = null;
          });
          check_outros();
        }

        if (
        /*panel*/
        ctx[0] === "ComissionPanel") {
          if (if_block1) {
            if_block1.p(ctx, dirty);

            if (dirty &
            /*panel*/
            1) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_3(ctx);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(div0, t1);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, function () {
            if_block1 = null;
          });
          check_outros();
        }

        if (
        /*panel*/
        ctx[0] === "DiscountPanel") {
          if (if_block2) {
            if_block2.p(ctx, dirty);

            if (dirty &
            /*panel*/
            1) {
              transition_in(if_block2, 1);
            }
          } else {
            if_block2 = create_if_block_2(ctx);
            if_block2.c();
            transition_in(if_block2, 1);
            if_block2.m(div0, t2);
          }
        } else if (if_block2) {
          group_outros();
          transition_out(if_block2, 1, 1, function () {
            if_block2 = null;
          });
          check_outros();
        }

        if (
        /*panel*/
        ctx[0] === "EventsPanel") {
          if (if_block3) {
            if_block3.p(ctx, dirty);

            if (dirty &
            /*panel*/
            1) {
              transition_in(if_block3, 1);
            }
          } else {
            if_block3 = create_if_block_1(ctx);
            if_block3.c();
            transition_in(if_block3, 1);
            if_block3.m(div0, null);
          }
        } else if (if_block3) {
          group_outros();
          transition_out(if_block3, 1, 1, function () {
            if_block3 = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block0);
        transition_in(if_block1);
        transition_in(if_block2);
        transition_in(if_block3);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block0);
        transition_out(if_block1);
        transition_out(if_block2);
        transition_out(if_block3);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(section);
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        if (if_block2) if_block2.d();
        if (if_block3) if_block3.d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block.name,
      type: "if",
      source: "(131:0) {#if memberships !== null}",
      ctx: ctx
    });
    return block;
  } // (135:16) {#if panel === "main"}


  function create_if_block_4(ctx) {
    var simplemodal;
    var t;
    var div1;
    var div0;
    var paginator_1;
    var current;
    simplemodal = new SimpleModal({
      props: {
        closeOnClickOverlay: true,
        $$slots: {
          content: [create_content_slot, function (_ref) {
            var hide = _ref.hide;
            return {
              24: hide
            };
          }, function (_ref2) {
            var hide = _ref2.hide;
            return hide ? 16777216 : 0;
          }],
          trigger: [create_trigger_slot, function (_ref3) {
            var hide = _ref3.hide;
            return {
              24: hide
            };
          }, function (_ref4) {
            var hide = _ref4.hide;
            return hide ? 16777216 : 0;
          }]
        },
        $$scope: {
          ctx: ctx
        }
      },
      $$inline: true
    });
    paginator_1 = new Paginator({
      props: {
        paginator:
        /*paginator*/
        ctx[4],
        Paginate:
        /*Paginate*/
        ctx[9],
        $$slots: {
          default: [create_default_slot]
        },
        $$scope: {
          ctx: ctx
        }
      },
      $$inline: true
    });
    var block = {
      c: function create() {
        create_component(simplemodal.$$.fragment);
        t = space();
        div1 = element("div");
        div0 = element("div");
        create_component(paginator_1.$$.fragment);
        attr_dev(div0, "class", "column");
        add_location(div0, file$1, 165, 24, 5865);
        attr_dev(div1, "class", "columns is-multiline");
        add_location(div1, file$1, 164, 20, 5805);
      },
      m: function mount(target, anchor) {
        mount_component(simplemodal, target, anchor);
        insert_dev(target, t, anchor);
        insert_dev(target, div1, anchor);
        append_dev(div1, div0);
        mount_component(paginator_1, div0, null);
        current = true;
      },
      p: function update(ctx, dirty) {
        var simplemodal_changes = {};

        if (dirty &
        /*$$scope, addtagform*/
        33554434) {
          simplemodal_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        simplemodal.$set(simplemodal_changes);
        var paginator_1_changes = {};
        if (dirty &
        /*paginator*/
        16) paginator_1_changes.paginator =
        /*paginator*/
        ctx[4];

        if (dirty &
        /*$$scope, paginator*/
        33554448) {
          paginator_1_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        paginator_1.$set(paginator_1_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(simplemodal.$$.fragment, local);
        transition_in(paginator_1.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(simplemodal.$$.fragment, local);
        transition_out(paginator_1.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(simplemodal, detaching);
        if (detaching) detach_dev(t);
        if (detaching) detach_dev(div1);
        destroy_component(paginator_1);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_4.name,
      type: "if",
      source: "(135:16) {#if panel === \\\"main\\\"}",
      ctx: ctx
    });
    return block;
  } // (137:24) <svelte:fragment slot="trigger">


  function create_trigger_slot(ctx) {
    var button;
    var block = {
      c: function create() {
        button = element("button");
        button.textContent = "Añadir etiqueta";
        attr_dev(button, "class", "button is-primary is-outlined button-default is-rounded is-small");
        add_location(button, file$1, 137, 28, 4041);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(button);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_trigger_slot.name,
      type: "slot",
      source: "(137:24) <svelte:fragment slot=\\\"trigger\\\">",
      ctx: ctx
    });
    return block;
  } // (142:24) <svelte:fragment slot="content">


  function create_content_slot(ctx) {
    var form;
    var div0;
    var h2;
    var t1;
    var div2;
    var label;
    var t3;
    var div1;
    var input;
    var t4;
    var div4;
    var div3;
    var button;
    var mounted;
    var dispose;

    function submit_handler() {
      return (
        /*submit_handler*/
        ctx[12](
        /*hide*/
        ctx[24])
      );
    }

    var block = {
      c: function create() {
        form = element("form");
        div0 = element("div");
        h2 = element("h2");
        h2.textContent = "Añade una etiqueta para configurar";
        t1 = space();
        div2 = element("div");
        label = element("label");
        label.textContent = "Añade un nombre de etiqueta";
        t3 = space();
        div1 = element("div");
        input = element("input");
        t4 = space();
        div4 = element("div");
        div3 = element("div");
        button = element("button");
        button.textContent = "Añadir";
        attr_dev(h2, "class", "fw600 has-text-centered has-text-info");
        add_location(h2, file$1, 144, 36, 4576);
        attr_dev(div0, "class", "column is-12");
        add_location(div0, file$1, 143, 32, 4512);
        attr_dev(label, "for", "");
        add_location(label, file$1, 149, 36, 4882);
        attr_dev(input, "type", "text");
        attr_dev(input, "name", "tag_name");
        attr_dev(input, "class", "input is-rounded capture");
        input.required = true;
        add_location(input, file$1, 151, 40, 5032);
        attr_dev(div1, "class", "control");
        add_location(div1, file$1, 150, 36, 4969);
        attr_dev(div2, "class", "column is-6");
        add_location(div2, file$1, 148, 32, 4819);
        attr_dev(button, "type", "submit");
        attr_dev(button, "class", "button is-primary is-rounded is-small button-default");
        add_location(button, file$1, 156, 40, 5396);
        attr_dev(div3, "class", "control has-text-centered");
        add_location(div3, file$1, 155, 36, 5315);
        attr_dev(div4, "class", "column is-12");
        add_location(div4, file$1, 154, 32, 5251);
        attr_dev(form, "class", "columns is-multiline is-centered");
        attr_dev(form, "action", "POST");
        add_location(form, file$1, 142, 28, 4342);
      },
      m: function mount(target, anchor) {
        insert_dev(target, form, anchor);
        append_dev(form, div0);
        append_dev(div0, h2);
        append_dev(form, t1);
        append_dev(form, div2);
        append_dev(div2, label);
        append_dev(div2, t3);
        append_dev(div2, div1);
        append_dev(div1, input);
        append_dev(form, t4);
        append_dev(form, div4);
        append_dev(div4, div3);
        append_dev(div3, button);
        /*form_binding*/

        ctx[13](form);

        if (!mounted) {
          dispose = [listen_dev(input, "input", fixTagName, false, false, false), listen_dev(form, "submit", prevent_default(submit_handler), false, true, false)];
          mounted = true;
        }
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(form);
        /*form_binding*/

        ctx[13](null);
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_content_slot.name,
      type: "slot",
      source: "(142:24) <svelte:fragment slot=\\\"content\\\">",
      ctx: ctx
    });
    return block;
  } // (183:48) {#each paginator.results.data as tag}


  function create_each_block(ctx) {
    var tr;
    var td0;
    var span0;
    var t0_value =
    /*tag*/
    ctx[21].id + "";
    var t0;
    var t1;
    var td1;
    var t2_value = parseDate.onlydate(
    /*tag*/
    ctx[21].time) + "";
    var t2;
    var t3;
    var td2;
    var span2;
    var span1;
    var i0;
    var t4;
    var span4;
    var span3;
    var t5;
    var i1;
    var t6;
    var span6;
    var span5;
    var i2;
    var t7;
    var span7;
    var i3;
    var t8;
    var mounted;
    var dispose;

    function click_handler() {
      return (
        /*click_handler*/
        ctx[14](
        /*tag*/
        ctx[21])
      );
    }

    function click_handler_1() {
      return (
        /*click_handler_1*/
        ctx[15](
        /*tag*/
        ctx[21])
      );
    }

    function click_handler_2() {
      return (
        /*click_handler_2*/
        ctx[16](
        /*tag*/
        ctx[21])
      );
    }

    function click_handler_3() {
      return (
        /*click_handler_3*/
        ctx[17](
        /*tag*/
        ctx[21])
      );
    }

    var block = {
      c: function create() {
        tr = element("tr");
        td0 = element("td");
        span0 = element("span");
        t0 = text(t0_value);
        t1 = space();
        td1 = element("td");
        t2 = text(t2_value);
        t3 = space();
        td2 = element("td");
        span2 = element("span");
        span1 = element("span");
        i0 = element("i");
        t4 = space();
        span4 = element("span");
        span3 = element("span");
        t5 = text("-\r\n                                                                    ");
        i1 = element("i");
        t6 = space();
        span6 = element("span");
        span5 = element("span");
        i2 = element("i");
        t7 = space();
        span7 = element("span");
        i3 = element("i");
        t8 = space();
        attr_dev(span0, "class", "tag tripod is-primary is-rounded");
        add_location(span0, file$1, 185, 60, 7182);
        add_location(td0, file$1, 184, 56, 7116);
        add_location(td1, file$1, 189, 56, 7493);
        attr_dev(i0, "class", "fas fa-money-bill-wave-alt");
        add_location(i0, file$1, 195, 68, 8125);
        attr_dev(span1, "class", "icon is-small has-text-primary");
        add_location(span1, file$1, 194, 64, 8010);
        attr_dev(span2, "data-tooltip", "Configura un plan de comisiones");
        attr_dev(span2, "class", "text-icon is-size-7 pointer");
        add_location(span2, file$1, 193, 60, 7799);
        attr_dev(i1, "class", "fas fa-percentage");
        add_location(i1, file$1, 201, 68, 8767);
        attr_dev(span3, "class", "icon is-small has-text-primary");
        add_location(span3, file$1, 199, 64, 8581);
        attr_dev(span4, "data-tooltip", "Configura un plan de descuentos");
        attr_dev(span4, "class", "text-icon is-size-7 pointer");
        add_location(span4, file$1, 198, 60, 8371);
        attr_dev(i2, "class", "fas fa-calendar-day");
        add_location(i2, file$1, 206, 68, 9313);
        attr_dev(span5, "class", "icon is-small has-text-primary");
        add_location(span5, file$1, 205, 64, 9198);
        attr_dev(span6, "data-tooltip", "Eventos generados");
        attr_dev(span6, "class", "text-icon is-size-7 pointer");
        add_location(span6, file$1, 204, 60, 9004);
        attr_dev(i3, "class", "fas fa-trash");
        add_location(i3, file$1, 210, 64, 9717);
        attr_dev(span7, "class", "icon is-size-7 is-small pointer has-text-danger");
        add_location(span7, file$1, 209, 60, 9552);
        attr_dev(td2, "class", "has-text-right");
        add_location(td2, file$1, 192, 56, 7710);
        add_location(tr, file$1, 183, 52, 7054);
      },
      m: function mount(target, anchor) {
        insert_dev(target, tr, anchor);
        append_dev(tr, td0);
        append_dev(td0, span0);
        append_dev(span0, t0);
        append_dev(tr, t1);
        append_dev(tr, td1);
        append_dev(td1, t2);
        append_dev(tr, t3);
        append_dev(tr, td2);
        append_dev(td2, span2);
        append_dev(span2, span1);
        append_dev(span1, i0);
        append_dev(td2, t4);
        append_dev(td2, span4);
        append_dev(span4, span3);
        append_dev(span3, t5);
        append_dev(span3, i1);
        append_dev(td2, t6);
        append_dev(td2, span6);
        append_dev(span6, span5);
        append_dev(span5, i2);
        append_dev(td2, t7);
        append_dev(td2, span7);
        append_dev(span7, i3);
        append_dev(tr, t8);

        if (!mounted) {
          dispose = [listen_dev(span2, "click", click_handler, false, false, false), listen_dev(span4, "click", click_handler_1, false, false, false), listen_dev(span6, "click", click_handler_2, false, false, false), listen_dev(span7, "click", click_handler_3, false, false, false)];
          mounted = true;
        }
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty &
        /*paginator*/
        16 && t0_value !== (t0_value =
        /*tag*/
        ctx[21].id + "")) set_data_dev(t0, t0_value);
        if (dirty &
        /*paginator*/
        16 && t2_value !== (t2_value = parseDate.onlydate(
        /*tag*/
        ctx[21].time) + "")) set_data_dev(t2, t2_value);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(tr);
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block.name,
      type: "each",
      source: "(183:48) {#each paginator.results.data as tag}",
      ctx: ctx
    });
    return block;
  } // (167:28) <Paginator paginator={paginator} Paginate={Paginate}>


  function create_default_slot(ctx) {
    var div3;
    var div0;
    var table;
    var thead;
    var th0;
    var t1;
    var th1;
    var t3;
    var th2;
    var t5;
    var tbody;
    var t6;
    var div2;
    var div1;
    var controllerpaginator;
    var current;
    var each_value =
    /*paginator*/
    ctx[4].results.data;
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }

    controllerpaginator = new ControllerPaginator({
      props: {
        paginator:
        /*paginator*/
        ctx[4],
        Paginate:
        /*Paginate*/
        ctx[9]
      },
      $$inline: true
    });
    var block = {
      c: function create() {
        div3 = element("div");
        div0 = element("div");
        table = element("table");
        thead = element("thead");
        th0 = element("th");
        th0.textContent = "Etiqueta";
        t1 = space();
        th1 = element("th");
        th1.textContent = "Creación";
        t3 = space();
        th2 = element("th");
        th2.textContent = "Opciones";
        t5 = space();
        tbody = element("tbody");

        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        t6 = space();
        div2 = element("div");
        div1 = element("div");
        create_component(controllerpaginator.$$.fragment);
        attr_dev(th0, "class", "svelte-13pb31e");
        add_location(th0, file$1, 171, 48, 6320);
        attr_dev(th1, "class", "svelte-13pb31e");
        add_location(th1, file$1, 174, 48, 6491);
        attr_dev(th2, "class", "has-text-right svelte-13pb31e");
        add_location(th2, file$1, 177, 48, 6662);
        add_location(thead, file$1, 170, 44, 6263);
        add_location(tbody, file$1, 181, 44, 6906);
        attr_dev(table, "class", "table table-tag-manager is-hoverable is-fullwidth is-narrow svelte-13pb31e");
        add_location(table, file$1, 169, 40, 6142);
        attr_dev(div0, "class", "column is-12");
        add_location(div0, file$1, 168, 36, 6074);
        attr_dev(div1, "class", "column is-12");
        add_location(div1, file$1, 219, 40, 10247);
        attr_dev(div2, "class", "column is-12");
        add_location(div2, file$1, 218, 36, 10179);
        attr_dev(div3, "class", "columns is-multiline");
        add_location(div3, file$1, 167, 32, 6002);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div3, anchor);
        append_dev(div3, div0);
        append_dev(div0, table);
        append_dev(table, thead);
        append_dev(thead, th0);
        append_dev(thead, t1);
        append_dev(thead, th1);
        append_dev(thead, t3);
        append_dev(thead, th2);
        append_dev(table, t5);
        append_dev(table, tbody);

        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(tbody, null);
        }

        append_dev(div3, t6);
        append_dev(div3, div2);
        append_dev(div2, div1);
        mount_component(controllerpaginator, div1, null);
        current = true;
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*removetag, paginator, navigation, parseDate*/
        3088) {
          each_value =
          /*paginator*/
          ctx[4].results.data;
          validate_each_argument(each_value);

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block(child_ctx);

              each_blocks[_i3].c();

              each_blocks[_i3].m(tbody, null);
            }
          }

          for (; _i3 < each_blocks.length; _i3 += 1) {
            each_blocks[_i3].d(1);
          }

          each_blocks.length = each_value.length;
        }

        var controllerpaginator_changes = {};
        if (dirty &
        /*paginator*/
        16) controllerpaginator_changes.paginator =
        /*paginator*/
        ctx[4];
        controllerpaginator.$set(controllerpaginator_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(controllerpaginator.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(controllerpaginator.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div3);
        destroy_each(each_blocks, detaching);
        destroy_component(controllerpaginator);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_default_slot.name,
      type: "slot",
      source: "(167:28) <Paginator paginator={paginator} Paginate={Paginate}>",
      ctx: ctx
    });
    return block;
  } // (229:16) {#if panel === "ComissionPanel"}


  function create_if_block_3(ctx) {
    var comissionpanel;
    var current;
    comissionpanel = new ComissionPanel({
      props: {
        tag:
        /*tagSelected*/
        ctx[5],
        plans:
        /*plans*/
        ctx[3],
        api_url:
        /*api_url*/
        ctx[7],
        turpial:
        /*turpial*/
        ctx[6],
        navigation:
        /*navigation*/
        ctx[10]
      },
      $$inline: true
    });
    var block = {
      c: function create() {
        create_component(comissionpanel.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(comissionpanel, target, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        var comissionpanel_changes = {};
        if (dirty &
        /*tagSelected*/
        32) comissionpanel_changes.tag =
        /*tagSelected*/
        ctx[5];
        if (dirty &
        /*plans*/
        8) comissionpanel_changes.plans =
        /*plans*/
        ctx[3];
        comissionpanel.$set(comissionpanel_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(comissionpanel.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(comissionpanel.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(comissionpanel, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_3.name,
      type: "if",
      source: "(229:16) {#if panel === \\\"ComissionPanel\\\"}",
      ctx: ctx
    });
    return block;
  } // (232:16) {#if panel === "DiscountPanel"}


  function create_if_block_2(ctx) {
    var discountpanel;
    var current;
    discountpanel = new DiscountPanel({
      props: {
        tag:
        /*tagSelected*/
        ctx[5],
        plans:
        /*plans*/
        ctx[3],
        api_url:
        /*api_url*/
        ctx[7],
        turpial:
        /*turpial*/
        ctx[6],
        navigation:
        /*navigation*/
        ctx[10]
      },
      $$inline: true
    });
    var block = {
      c: function create() {
        create_component(discountpanel.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(discountpanel, target, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        var discountpanel_changes = {};
        if (dirty &
        /*tagSelected*/
        32) discountpanel_changes.tag =
        /*tagSelected*/
        ctx[5];
        if (dirty &
        /*plans*/
        8) discountpanel_changes.plans =
        /*plans*/
        ctx[3];
        discountpanel.$set(discountpanel_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(discountpanel.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(discountpanel.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(discountpanel, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2.name,
      type: "if",
      source: "(232:16) {#if panel === \\\"DiscountPanel\\\"}",
      ctx: ctx
    });
    return block;
  } // (235:16) {#if panel === "EventsPanel"}


  function create_if_block_1(ctx) {
    var eventspanel;
    var current;
    eventspanel = new EventsPanel({
      props: {
        tag:
        /*tagSelected*/
        ctx[5],
        plans:
        /*plans*/
        ctx[3],
        api_url:
        /*api_url*/
        ctx[7],
        turpial:
        /*turpial*/
        ctx[6],
        navigation:
        /*navigation*/
        ctx[10]
      },
      $$inline: true
    });
    var block = {
      c: function create() {
        create_component(eventspanel.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(eventspanel, target, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        var eventspanel_changes = {};
        if (dirty &
        /*tagSelected*/
        32) eventspanel_changes.tag =
        /*tagSelected*/
        ctx[5];
        if (dirty &
        /*plans*/
        8) eventspanel_changes.plans =
        /*plans*/
        ctx[3];
        eventspanel.$set(eventspanel_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(eventspanel.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(eventspanel.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(eventspanel, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1.name,
      type: "if",
      source: "(235:16) {#if panel === \\\"EventsPanel\\\"}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$2(ctx) {
    var if_block_anchor;
    var current;
    var if_block =
    /*memberships*/
    ctx[2] !== null && create_if_block(ctx);
    var block = {
      c: function create() {
        if (if_block) if_block.c();
        if_block_anchor = empty();
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update(ctx, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 1),
            dirty = _ref6[0];

        if (
        /*memberships*/
        ctx[2] !== null) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*memberships*/
            4) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$2.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function fixTagName(event) {
    var input = event.target;
    input.value = input.value.trim().split("").filter(function (letter) {
      if (letter.search(/[A-Za-z0-9]| |-/) >= 0) {
        return letter;
      }
    }).join("").toLowerCase();
  }

  function instance$2($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots('CoreTagManager', slots, []);
    var turpial = new Turpial({
      public_path: "app.3pod.io",
      loadModulesOnRoute: false
    });
    var panel = "main";
    var addtagform;
    var tags;
    var memberships = null;
    var plans = null;
    var api_url = turpial.host + "private/api/v1/superuser/TagManager/";

    function addTag(hide) {
      var data = AppForms.retrieve({
        form: addtagform,
        targets: ".capture"
      });
      Connect3Pod([api_url + "TagManager_add"], {
        data: data,
        ready: function ready(data) {
          var response = JSON.parse(data[0]);
          toast$1(response.message, response.status);
          Paginate();
          hide();
        }
      });
      setTimeout(function () {}, 200); // hide()
      // hide()
    }

    var paginator = {
      request: {
        url: "".concat(turpial.host, "/private/api/v1/superuser/TagManager/TagManager_list"),
        collection: "Clientes",
        position: 1,
        field: "ingreso_timestamp",
        limit: 20,
        sortby: "desc",
        searchFor: false,
        fromDate: false,
        untilDate: false
      },
      loading: false,
      results: {
        data: [],
        limit: false,
        navigation: []
      }
    };
    var requesting = false;

    var Paginate = function Paginate(request, callback) {
      callback = callback || function () {};

      CorePaginator(paginator, {
        data: paginator.request
      }, function (data) {
        $$invalidate(4, paginator);
        callback(paginator);
        tags = paginator.results.data;
      });
    };

    var tagSelected = null;

    function searchTag(id) {
      var _tags$find;

      return (_tags$find = tags.find(function (tag) {
        if (id === tag.id) {
          return tag;
        }
      })) !== null && _tags$find !== void 0 ? _tags$find : null;
    }

    function navigation(position, id) {
      var tag = searchTag(id);
      $$invalidate(5, tagSelected = tag);
      $$invalidate(0, panel = position);
    }

    Connect3Pod("".concat(turpial.host, "api/getPlans"), {
      method: "GET",
      ready: function ready(data) {
        data = JSON.parse(data[0]);
        $$invalidate(2, memberships = data.response);
        $$invalidate(3, plans = Object.values(memberships).flat());
      }
    });

    function removetag(id) {
      new ModalAlert({
        target: document.body,
        props: {
          content: "\xBFDeseas eliminar el tag: ".concat(id, "?"),
          onConfirm: function onConfirm() {
            Connect3Pod("".concat(turpial.host, "/private/api/v1/superuser/TagManager/TagManager_delete"), {
              data: {
                tag_name: id
              },
              ready: function ready(data) {
                data = JSON.parse(data[0]);
                toast$1(data.message, data.status);
                Paginate();
              }
            });
          }
        }
      });
    }

    var writable_props = [];
    Object_1.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<CoreTagManager> was created with unknown prop '".concat(key, "'"));
    });

    var submit_handler = function submit_handler(hide) {
      addTag(hide);
    };

    function form_binding($$value) {
      binding_callbacks[$$value ? 'unshift' : 'push'](function () {
        addtagform = $$value;
        $$invalidate(1, addtagform);
      });
    }

    var click_handler = function click_handler(tag) {
      navigation("ComissionPanel", tag.id);
    };

    var click_handler_1 = function click_handler_1(tag) {
      navigation("DiscountPanel", tag.id);
    };

    var click_handler_2 = function click_handler_2(tag) {
      navigation("EventsPanel", tag.id);
    };

    var click_handler_3 = function click_handler_3(tag) {
      removetag(tag.id);
    };

    $$self.$capture_state = function () {
      return {
        ModalAlert: ModalAlert,
        SimpleModal: SimpleModal,
        Paginator: Paginator,
        CorePaginator: CorePaginator,
        ControllerPaginator: ControllerPaginator,
        Turpial: Turpial,
        AppForms: AppForms,
        Connect3Pod: Connect3Pod,
        toast: toast$1,
        parseDate: parseDate,
        ComissionPanel: ComissionPanel,
        DiscountPanel: DiscountPanel,
        EventsPanel: EventsPanel,
        turpial: turpial,
        panel: panel,
        addtagform: addtagform,
        tags: tags,
        memberships: memberships,
        plans: plans,
        api_url: api_url,
        addTag: addTag,
        fixTagName: fixTagName,
        paginator: paginator,
        requesting: requesting,
        Paginate: Paginate,
        tagSelected: tagSelected,
        searchTag: searchTag,
        navigation: navigation,
        removetag: removetag
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('panel' in $$props) $$invalidate(0, panel = $$props.panel);
      if ('addtagform' in $$props) $$invalidate(1, addtagform = $$props.addtagform);
      if ('tags' in $$props) tags = $$props.tags;
      if ('memberships' in $$props) $$invalidate(2, memberships = $$props.memberships);
      if ('plans' in $$props) $$invalidate(3, plans = $$props.plans);
      if ('api_url' in $$props) $$invalidate(7, api_url = $$props.api_url);
      if ('paginator' in $$props) $$invalidate(4, paginator = $$props.paginator);
      if ('requesting' in $$props) requesting = $$props.requesting;
      if ('tagSelected' in $$props) $$invalidate(5, tagSelected = $$props.tagSelected);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [panel, addtagform, memberships, plans, paginator, tagSelected, turpial, api_url, addTag, Paginate, navigation, removetag, submit_handler, form_binding, click_handler, click_handler_1, click_handler_2, click_handler_3];
  }

  var CoreTagManager = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(CoreTagManager, _SvelteComponentDev);

    var _super = _createSuper(CoreTagManager);

    function CoreTagManager(options) {
      var _this;

      _classCallCheck(this, CoreTagManager);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "CoreTagManager",
        options: options,
        id: create_fragment$2.name
      });
      return _this;
    }

    return CoreTagManager;
  }(SvelteComponentDev);

  function linkCSS(urls) {
    urls.map(function (url) {
      var head = document.getElementsByTagName('head')[0];
      var link = document.createElement('link');
      link.id = "css--exported-" + random_string(6);
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      link.media = 'all';
      head.appendChild(link);
    });
  }

  var css_248z$1 = "";
  styleInject(css_248z$1);

  function create_fragment$1(ctx) {
    var block = {
      c: noop,
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: noop,
      p: noop,
      i: noop,
      o: noop,
      d: noop
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$1.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$1($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots('Styles', slots, []);
    linkCSS(["https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700&display=swap", "https://use.fontawesome.com/releases/v5.15.1/css/all.css"]);
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<Styles> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$capture_state = function () {
      return {
        linkCSS: linkCSS
      };
    };

    return [];
  }

  var Styles = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Styles, _SvelteComponentDev);

    var _super = _createSuper(Styles);

    function Styles(options) {
      var _this;

      _classCallCheck(this, Styles);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Styles",
        options: options,
        id: create_fragment$1.name
      });
      return _this;
    }

    return Styles;
  }(SvelteComponentDev);

  var css_248z = "";
  styleInject(css_248z);

  var file = "src\\TagManager.svelte";

  function create_fragment(ctx) {
    var div;
    var styles;
    var t;
    var coretagmanager;
    var current;
    styles = new Styles({
      $$inline: true
    });
    coretagmanager = new CoreTagManager({
      $$inline: true
    });
    var block = {
      c: function create() {
        div = element("div");
        create_component(styles.$$.fragment);
        t = space();
        create_component(coretagmanager.$$.fragment);
        attr_dev(div, "class", "svelte-module");
        add_location(div, file, 8401, 0, 380077);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        mount_component(styles, div, null);
        append_dev(div, t);
        mount_component(coretagmanager, div, null);
        current = true;
      },
      p: noop,
      i: function intro(local) {
        if (current) return;
        transition_in(styles.$$.fragment, local);
        transition_in(coretagmanager.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(styles.$$.fragment, local);
        transition_out(coretagmanager.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        destroy_component(styles);
        destroy_component(coretagmanager);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots('TagManager', slots, []);
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<TagManager> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$capture_state = function () {
      return {
        CoreTagManager: CoreTagManager,
        Styles: Styles
      };
    };

    return [];
  }

  var TagManager = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(TagManager, _SvelteComponentDev);

    var _super = _createSuper(TagManager);

    function TagManager(options) {
      var _this;

      _classCallCheck(this, TagManager);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "TagManager",
        options: options,
        id: create_fragment.name
      });
      return _this;
    }

    return TagManager;
  }(SvelteComponentDev);

  // bulma docs https://dev.to/1n0t/creacion-de-un-proyecto-svelte-bulma-sass-1o8i
  var app = document.querySelector(".tagmanager-gadget-3pod");
  app.classList.add("active");
  app = new TagManager({
    target: app
  }); //export default app;

}());
//# sourceMappingURL=TagManager.js.map
