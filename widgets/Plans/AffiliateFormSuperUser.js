
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

  var css_248z$3 = "/*! bulma.io v0.9.3 | MIT License | github.com/jgthms/bulma */\n/* Bulma Utilities */\n.button, .input, .select select {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 2px solid transparent;\n  border-radius: 4px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.5em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.5em - 2px);\n  padding-left: calc(0.75em - 2px);\n  padding-right: calc(0.75em - 2px);\n  padding-top: calc(0.5em - 2px);\n  position: relative;\n  vertical-align: top; }\n  .button:focus, .input:focus, .select select:focus, .button:active, .input:active, .select select:active, .is-active.button, .is-active.input, .select select.is-active {\n    outline: none; }\n  .button[disabled], .input[disabled], .select select[disabled] {\n    cursor: not-allowed; }\n\n.button {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.select:not(.is-multiple):not(.is-loading)::after {\n  border: 3px solid transparent;\n  border-radius: 2px;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 0.625em;\n  margin-top: -0.4375em;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: rotate(-45deg);\n  transform-origin: center;\n  width: 0.625em; }\n\n.box:not(:last-child), .content:not(:last-child), .progress:not(:last-child), .table:not(:last-child), .title:not(:last-child),\n.subtitle:not(:last-child), .block:not(:last-child), .message:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n.delete {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 9999px;\n  cursor: pointer;\n  pointer-events: auto;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px; }\n  .delete::before, .delete::after {\n    background-color: #ffffff;\n    content: \"\";\n    display: block;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    transform-origin: center center; }\n  .delete::before {\n    height: 2px;\n    width: 50%; }\n  .delete::after {\n    height: 50%;\n    width: 2px; }\n  .delete:hover, .delete:focus {\n    background-color: rgba(10, 10, 10, 0.3); }\n  .delete:active {\n    background-color: rgba(10, 10, 10, 0.4); }\n  .is-small.delete {\n    height: 16px;\n    max-height: 16px;\n    max-width: 16px;\n    min-height: 16px;\n    min-width: 16px;\n    width: 16px; }\n  .is-large.delete {\n    height: 32px;\n    max-height: 32px;\n    max-width: 32px;\n    min-height: 32px;\n    min-width: 32px;\n    width: 32px; }\n\n.button.is-loading::after, .select.is-loading::after, .control.is-loading::after {\n  animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 9999px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em; }\n\n .modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.navbar-burger {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  border: none;\n  color: currentColor;\n  font-family: inherit;\n  font-size: 1em;\n  margin: 0;\n  padding: 0; }\n\n/* Bulma Base */\n/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\nfigure,\niframe,\nh1,\nh2,\nh3,\nh4 {\n  margin: 0;\n  padding: 0; }\n\nh1,\nh2,\nh3,\nh4 {\n  font-size: 100%;\n  font-weight: normal; }\n\nul {\n  list-style: none; }\n\nbutton,\ninput,\nselect {\n  margin: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nimg {\n  height: auto;\n  max-width: 100%; }\n\niframe {\n  border: 0; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd {\n  padding: 0; }\n  td:not([align]) {\n    text-align: inherit; }\n\nhtml {\n  background-color: #ffffff;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: 100%; }\n\n\nfigure,\nfooter,\nheader,\nsection {\n  display: block; }\n\nbody,\nbutton,\ninput,\nselect {\n  font-family: \"Montserrat\", \"Calibri\", sans-serif; }\n\ncode {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace; }\n\nbody {\n  color: #415B76;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.5; }\n\na {\n  color: #00ffff;\n  cursor: pointer;\n  text-decoration: none; }\n  a strong {\n    color: currentColor; }\n  a:hover {\n    color: #363636; }\n\ncode {\n  background-color: whitesmoke;\n  color: #d10808;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em; }\n\nimg {\n  height: auto;\n  max-width: 100%; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline; }\n\nspan {\n  font-style: inherit;\n  font-weight: inherit; }\n\nstrong {\n  color: #363636;\n  font-weight: 700; }\n\ntable td {\n  vertical-align: top; }\n  table td:not([align]) {\n    text-align: inherit; }\n\n@keyframes spinAround {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n/* Bulma Elements */\n.box {\n  background-color: #ffffff;\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #415B76;\n  display: block;\n  padding: 1.25rem; }\n\na.box:hover, a.box:focus {\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #00ffff; }\n\na.box:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #00ffff; }\n\n.button {\n  background-color: #ffffff;\n  border-color: #dbdbdb;\n  border-width: 2px;\n  color: #363636;\n  cursor: pointer;\n  justify-content: center;\n  padding-bottom: calc(0.5em - 2px);\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: calc(0.5em - 2px);\n  text-align: center;\n  white-space: nowrap; }\n  .button strong {\n    color: inherit; }\n  .button .icon, .button .icon.is-small, .button .icon.is-large {\n    height: 1.5em;\n    width: 1.5em; }\n  .button .icon:first-child:not(:last-child) {\n    margin-left: calc(-0.5em - 2px);\n    margin-right: 0.25em; }\n  .button .icon:last-child:not(:first-child) {\n    margin-left: 0.25em;\n    margin-right: calc(-0.5em - 2px); }\n  .button .icon:first-child:last-child {\n    margin-left: calc(-0.5em - 2px);\n    margin-right: calc(-0.5em - 2px); }\n  .button:hover, .button.is-hovered {\n    border-color: #657786;\n    color: #363636; }\n  .button:focus {\n    border-color: #485fc7;\n    color: #363636; }\n    .button:focus:not(:active) {\n      box-shadow: 0 0 0 0.125em rgba(0, 255, 255, 0.25); }\n  .button:active, .button.is-active {\n    border-color: #415B76;\n    color: #363636; }\n  .button.is-light {\n    background-color: #657786;\n    border-color: transparent;\n    color: #415B76; }\n    .button.is-light:hover, .button.is-light.is-hovered {\n      background-color: #60717f;\n      border-color: transparent;\n      color: #415B76; }\n    .button.is-light:focus {\n      border-color: transparent;\n      color: #415B76; }\n      .button.is-light:focus:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(101, 119, 134, 0.25); }\n    .button.is-light:active, .button.is-light.is-active {\n      background-color: #5a6a77;\n      border-color: transparent;\n      color: #415B76; }\n    .button.is-light[disabled] {\n      background-color: #657786;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-light.is-loading::after {\n      border-color: transparent transparent #415B76 #415B76 !important; }\n    .button.is-light.is-outlined {\n      background-color: transparent;\n      border-color: #657786;\n      color: #657786; }\n      .button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus {\n        background-color: #657786;\n        border-color: #657786;\n        color: #415B76; }\n      .button.is-light.is-outlined.is-loading::after {\n        border-color: transparent transparent #657786 #657786 !important; }\n      .button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after {\n        border-color: transparent transparent #415B76 #415B76 !important; }\n      .button.is-light.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #657786;\n        box-shadow: none;\n        color: #657786; }\n  .button.is-primary {\n    background-color: #344fff;\n    border-color: transparent;\n    color: #fff; }\n    .button.is-primary:hover, .button.is-primary.is-hovered {\n      background-color: #2744ff;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-primary:focus {\n      border-color: transparent;\n      color: #fff; }\n      .button.is-primary:focus:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(52, 79, 255, 0.25); }\n    .button.is-primary:active, .button.is-primary.is-active {\n      background-color: #1b39ff;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-primary[disabled] {\n      background-color: #344fff;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-primary.is-loading::after {\n      border-color: transparent transparent #fff #fff !important; }\n    .button.is-primary.is-outlined {\n      background-color: transparent;\n      border-color: #344fff;\n      color: #344fff; }\n      .button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus {\n        background-color: #344fff;\n        border-color: #344fff;\n        color: #fff; }\n      .button.is-primary.is-outlined.is-loading::after {\n        border-color: transparent transparent #344fff #344fff !important; }\n      .button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after {\n        border-color: transparent transparent #fff #fff !important; }\n      .button.is-primary.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #344fff;\n        box-shadow: none;\n        color: #344fff; }\n    .button.is-primary.is-light {\n      background-color: #ebedff;\n      color: #0021f5; }\n      .button.is-primary.is-light:hover, .button.is-primary.is-light.is-hovered {\n        background-color: #dee2ff;\n        border-color: transparent;\n        color: #0021f5; }\n      .button.is-primary.is-light:active, .button.is-primary.is-light.is-active {\n        background-color: #d1d7ff;\n        border-color: transparent;\n        color: #0021f5; }\n  .button.is-success {\n    background-color: #34de80;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n    .button.is-success:hover, .button.is-success.is-hovered {\n      background-color: #29dc79;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n    .button.is-success:focus {\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n      .button.is-success:focus:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(52, 222, 128, 0.25); }\n    .button.is-success:active, .button.is-success.is-active {\n      background-color: #23d673;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n    .button.is-success[disabled] {\n      background-color: #34de80;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-success.is-loading::after {\n      border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n    .button.is-success.is-outlined {\n      background-color: transparent;\n      border-color: #34de80;\n      color: #34de80; }\n      .button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus {\n        background-color: #34de80;\n        border-color: #34de80;\n        color: rgba(0, 0, 0, 0.7); }\n      .button.is-success.is-outlined.is-loading::after {\n        border-color: transparent transparent #34de80 #34de80 !important; }\n      .button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after {\n        border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n      .button.is-success.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #34de80;\n        box-shadow: none;\n        color: #34de80; }\n    .button.is-success.is-light {\n      background-color: #edfcf4;\n      color: #157f44; }\n      .button.is-success.is-light:hover, .button.is-success.is-light.is-hovered {\n        background-color: #e2faed;\n        border-color: transparent;\n        color: #157f44; }\n      .button.is-success.is-light:active, .button.is-success.is-light.is-active {\n        background-color: #d8f9e6;\n        border-color: transparent;\n        color: #157f44; }\n  .button.is-warning {\n    background-color: #FDE203;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n    .button.is-warning:hover, .button.is-warning.is-hovered {\n      background-color: #f1d702;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n    .button.is-warning:focus {\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n      .button.is-warning:focus:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(253, 226, 3, 0.25); }\n    .button.is-warning:active, .button.is-warning.is-active {\n      background-color: #e5cc02;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n    .button.is-warning[disabled] {\n      background-color: #FDE203;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-warning.is-loading::after {\n      border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n    .button.is-warning.is-outlined {\n      background-color: transparent;\n      border-color: #FDE203;\n      color: #FDE203; }\n      .button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus {\n        background-color: #FDE203;\n        border-color: #FDE203;\n        color: rgba(0, 0, 0, 0.7); }\n      .button.is-warning.is-outlined.is-loading::after {\n        border-color: transparent transparent #FDE203 #FDE203 !important; }\n      .button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after {\n        border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n      .button.is-warning.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #FDE203;\n        box-shadow: none;\n        color: #FDE203; }\n    .button.is-warning.is-light {\n      background-color: #fffdeb;\n      color: #938301; }\n      .button.is-warning.is-light:hover, .button.is-warning.is-light.is-hovered {\n        background-color: #fffbde;\n        border-color: transparent;\n        color: #938301; }\n      .button.is-warning.is-light:active, .button.is-warning.is-light.is-active {\n        background-color: #fffad1;\n        border-color: transparent;\n        color: #938301; }\n  .button.is-danger {\n    background-color: #f72e2e;\n    border-color: transparent;\n    color: #fff; }\n    .button.is-danger:hover, .button.is-danger.is-hovered {\n      background-color: #f72222;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-danger:focus {\n      border-color: transparent;\n      color: #fff; }\n      .button.is-danger:focus:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(247, 46, 46, 0.25); }\n    .button.is-danger:active, .button.is-danger.is-active {\n      background-color: #f61515;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-danger[disabled] {\n      background-color: #f72e2e;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-danger.is-loading::after {\n      border-color: transparent transparent #fff #fff !important; }\n    .button.is-danger.is-outlined {\n      background-color: transparent;\n      border-color: #f72e2e;\n      color: #f72e2e; }\n      .button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus {\n        background-color: #f72e2e;\n        border-color: #f72e2e;\n        color: #fff; }\n      .button.is-danger.is-outlined.is-loading::after {\n        border-color: transparent transparent #f72e2e #f72e2e !important; }\n      .button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after {\n        border-color: transparent transparent #fff #fff !important; }\n      .button.is-danger.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #f72e2e;\n        box-shadow: none;\n        color: #f72e2e; }\n    .button.is-danger.is-light {\n      background-color: #feebeb;\n      color: #d80808; }\n      .button.is-danger.is-light:hover, .button.is-danger.is-light.is-hovered {\n        background-color: #fedfdf;\n        border-color: transparent;\n        color: #d80808; }\n      .button.is-danger.is-light:active, .button.is-danger.is-light.is-active {\n        background-color: #fdd3d3;\n        border-color: transparent;\n        color: #d80808; }\n  .button.is-small {\n    font-size: 0.75rem; }\n    .button.is-small:not(.is-rounded) {\n      border-radius: 2px; }\n  .button.is-large {\n    font-size: 1.5rem; }\n  .button[disabled] {\n    background-color: #ffffff;\n    border-color: #dbdbdb;\n    box-shadow: none;\n    opacity: 0.5; }\n  .button.is-fullwidth {\n    display: flex;\n    width: 100%; }\n  .button.is-loading {\n    color: transparent !important;\n    pointer-events: none; }\n    .button.is-loading::after {\n      position: absolute;\n      left: calc(50% - (1em * 0.5));\n      top: calc(50% - (1em * 0.5));\n      position: absolute !important; }\n  .button.is-rounded {\n    border-radius: 9999px;\n    padding-left: calc(1em + 0.25em);\n    padding-right: calc(1em + 0.25em); }\n\n.buttons {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n  .buttons .button {\n    margin-bottom: 0.5rem; }\n    .buttons .button:not(:last-child):not(.is-fullwidth) {\n      margin-right: 0.5rem; }\n  .buttons:last-child {\n    margin-bottom: -0.5rem; }\n  .buttons:not(:last-child) {\n    margin-bottom: 1rem; }\n  .buttons.has-addons .button:not(:first-child) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0; }\n  .buttons.has-addons .button:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n    margin-right: -1px; }\n  .buttons.has-addons .button:last-child {\n    margin-right: 0; }\n  .buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n    z-index: 2; }\n  .buttons.has-addons .button:focus, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active {\n    z-index: 3; }\n    .buttons.has-addons .button:focus:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover {\n      z-index: 4; }\n  .buttons.is-centered {\n    justify-content: center; }\n    .buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {\n      margin-left: 0.25rem;\n      margin-right: 0.25rem; }\n\n.container {\n  flex-grow: 1;\n  margin: 0 auto;\n  position: relative;\n  width: auto; }\n  @media screen and (min-width: 1024px) {\n    .container {\n      max-width: 960px; } }\n\n.content li + li {\n  margin-top: 0.25em; }\n\n.content p:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child),\n.content table:not(:last-child) {\n  margin-bottom: 1em; }\n\n.content h1,\n.content h2,\n.content h3,\n.content h4 {\n  color: #363636;\n  font-weight: 600;\n  line-height: 1.125; }\n\n.content h1 {\n  font-size: 2em;\n  margin-bottom: 0.5em; }\n  .content h1:not(:first-child) {\n    margin-top: 1em; }\n\n.content h2 {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em; }\n  .content h2:not(:first-child) {\n    margin-top: 1.1428em; }\n\n.content h3 {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em; }\n  .content h3:not(:first-child) {\n    margin-top: 1.3333em; }\n\n.content h4 {\n  font-size: 1.25em;\n  margin-bottom: 0.8em; }\n\n.content ol {\n  list-style-position: outside;\n  margin-left: 2em;\n  margin-top: 1em; }\n  .content ol:not([type]) {\n    list-style-type: decimal; }\n\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em; }\n  .content ul ul {\n    list-style-type: circle;\n    margin-top: 0.5em; }\n    .content ul ul ul {\n      list-style-type: square; }\n\n.content figure {\n  margin-left: 2em;\n  margin-right: 2em;\n  text-align: center; }\n  .content figure:not(:first-child) {\n    margin-top: 2em; }\n  .content figure:not(:last-child) {\n    margin-bottom: 2em; }\n  .content figure img {\n    display: inline-block; }\n\n.content table {\n  width: 100%; }\n  .content table td {\n    border: 1px solid #dbdbdb;\n    border-width: 0 0 1px;\n    padding: 0.5em 0.75em;\n    vertical-align: top; }\n\n.content.is-small {\n  font-size: 0.75rem; }\n\n.content.is-large {\n  font-size: 1.5rem; }\n\n.icon {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem; }\n  .icon.is-small {\n    height: 1rem;\n    width: 1rem; }\n  .icon.is-large {\n    height: 3rem;\n    width: 3rem; }\n\n.progress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 9999px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%; }\n  .progress::-webkit-progress-bar {\n    background-color: #ededed; }\n  .progress::-webkit-progress-value {\n    background-color: #415B76; }\n  .progress::-moz-progress-bar {\n    background-color: #415B76; }\n  .progress::-ms-fill {\n    background-color: #415B76;\n    border: none; }\n  .progress.is-light::-webkit-progress-value {\n    background-color: #657786; }\n  .progress.is-light::-moz-progress-bar {\n    background-color: #657786; }\n  .progress.is-light::-ms-fill {\n    background-color: #657786; }\n  .progress.is-light:indeterminate {\n    background-image: linear-gradient(to right, #657786 30%, #ededed 30%); }\n  .progress.is-primary::-webkit-progress-value {\n    background-color: #344fff; }\n  .progress.is-primary::-moz-progress-bar {\n    background-color: #344fff; }\n  .progress.is-primary::-ms-fill {\n    background-color: #344fff; }\n  .progress.is-primary:indeterminate {\n    background-image: linear-gradient(to right, #344fff 30%, #ededed 30%); }\n  .progress.is-success::-webkit-progress-value {\n    background-color: #34de80; }\n  .progress.is-success::-moz-progress-bar {\n    background-color: #34de80; }\n  .progress.is-success::-ms-fill {\n    background-color: #34de80; }\n  .progress.is-success:indeterminate {\n    background-image: linear-gradient(to right, #34de80 30%, #ededed 30%); }\n  .progress.is-warning::-webkit-progress-value {\n    background-color: #FDE203; }\n  .progress.is-warning::-moz-progress-bar {\n    background-color: #FDE203; }\n  .progress.is-warning::-ms-fill {\n    background-color: #FDE203; }\n  .progress.is-warning:indeterminate {\n    background-image: linear-gradient(to right, #FDE203 30%, #ededed 30%); }\n  .progress.is-danger::-webkit-progress-value {\n    background-color: #f72e2e; }\n  .progress.is-danger::-moz-progress-bar {\n    background-color: #f72e2e; }\n  .progress.is-danger::-ms-fill {\n    background-color: #f72e2e; }\n  .progress.is-danger:indeterminate {\n    background-image: linear-gradient(to right, #f72e2e 30%, #ededed 30%); }\n  .progress:indeterminate {\n    animation-duration: 1.5s;\n    animation-iteration-count: infinite;\n    animation-name: moveIndeterminate;\n    animation-timing-function: linear;\n    background-color: #ededed;\n    background-image: linear-gradient(to right, #415B76 30%, #ededed 30%);\n    background-position: top left;\n    background-repeat: no-repeat;\n    background-size: 150% 150%; }\n    .progress:indeterminate::-webkit-progress-bar {\n      background-color: transparent; }\n    .progress:indeterminate::-moz-progress-bar {\n      background-color: transparent; }\n    .progress:indeterminate::-ms-fill {\n      animation-name: none; }\n  .progress.is-small {\n    height: 0.75rem; }\n  .progress.is-large {\n    height: 1.5rem; }\n\n@keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0; }\n  to {\n    background-position: -200% 0; } }\n\n.table {\n  background-color: #ffffff;\n  color: #363636; }\n  .table td {\n    border: 1px solid #dbdbdb;\n    border-width: 0 0 1px;\n    padding: 0.5em 0.75em;\n    vertical-align: top; }\n    .table td.is-light {\n      background-color: #657786;\n      border-color: #657786;\n      color: #415B76; }\n    .table td.is-primary {\n      background-color: #344fff;\n      border-color: #344fff;\n      color: #fff; }\n    .table td.is-success {\n      background-color: #34de80;\n      border-color: #34de80;\n      color: rgba(0, 0, 0, 0.7); }\n    .table td.is-warning {\n      background-color: #FDE203;\n      border-color: #FDE203;\n      color: rgba(0, 0, 0, 0.7); }\n    .table td.is-danger {\n      background-color: #f72e2e;\n      border-color: #f72e2e;\n      color: #fff; }\n  .table.is-fullwidth {\n    width: 100%; }\n\n.tag:not(body) {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  color: #415B76;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap; }\n  .tag:not(body) .delete {\n    margin-left: 0.25rem;\n    margin-right: -0.375rem; }\n  .tag:not(body).is-light {\n    background-color: #657786;\n    color: #415B76; }\n  .tag:not(body).is-primary {\n    background-color: #344fff;\n    color: #fff; }\n    .tag:not(body).is-primary.is-light {\n      background-color: #ebedff;\n      color: #0021f5; }\n  .tag:not(body).is-success {\n    background-color: #34de80;\n    color: rgba(0, 0, 0, 0.7); }\n    .tag:not(body).is-success.is-light {\n      background-color: #edfcf4;\n      color: #157f44; }\n  .tag:not(body).is-warning {\n    background-color: #FDE203;\n    color: rgba(0, 0, 0, 0.7); }\n    .tag:not(body).is-warning.is-light {\n      background-color: #fffdeb;\n      color: #938301; }\n  .tag:not(body).is-danger {\n    background-color: #f72e2e;\n    color: #fff; }\n    .tag:not(body).is-danger.is-light {\n      background-color: #feebeb;\n      color: #d80808; }\n  .tag:not(body).is-large {\n    font-size: 1.25rem; }\n  .tag:not(body) .icon:first-child:not(:last-child) {\n    margin-left: -0.375em;\n    margin-right: 0.1875em; }\n  .tag:not(body) .icon:last-child:not(:first-child) {\n    margin-left: 0.1875em;\n    margin-right: -0.375em; }\n  .tag:not(body) .icon:first-child:last-child {\n    margin-left: -0.375em;\n    margin-right: -0.375em; }\n  .tag:not(body).is-rounded {\n    border-radius: 9999px; }\n\na.tag:hover {\n  text-decoration: underline; }\n\n.title,\n.subtitle {\n  word-break: break-word; }\n  \n  .title span,\n  .subtitle span {\n    font-weight: inherit; }\n  .title .tag,\n  .subtitle .tag {\n    vertical-align: middle; }\n\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125; }\n  .title strong {\n    color: inherit;\n    font-weight: inherit; }\n  .title:not(.is-spaced) + .subtitle {\n    margin-top: -1.25rem; }\n  .title.is-4 {\n    font-size: 1.5rem; }\n  .title.is-6 {\n    font-size: 1rem; }\n\n.subtitle {\n  color: #415B76;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25; }\n  .subtitle strong {\n    color: #363636;\n    font-weight: 600; }\n  .subtitle:not(.is-spaced) + .title {\n    margin-top: -1.25rem; }\n  .subtitle.is-4 {\n    font-size: 1.5rem; }\n  .subtitle.is-6 {\n    font-size: 1rem; }\n\n.number {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 9999px;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top; }\n\n/* Bulma Form */\n.input, .select select {\n  background-color: #ffffff;\n  border-color: transparent;\n  border-radius: 4px;\n  color: #363636; }\n  .input::-moz-placeholder, .select select::-moz-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n  .input::-webkit-input-placeholder, .select select::-webkit-input-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n  .input:-moz-placeholder, .select select:-moz-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n  .input:-ms-input-placeholder, .select select:-ms-input-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n  .input:hover, .select select:hover, .is-hovered.input, .select select.is-hovered {\n    border-color: #657786; }\n  .input:focus, .select select:focus, .input:active, .select select:active, .is-active.input, .select select.is-active {\n    border-color: #00ffff;\n    box-shadow: 0 0 0 0.125em rgba(0, 255, 255, 0.25); }\n  .input[disabled], .select select[disabled] {\n    background-color: whitesmoke;\n    border-color: whitesmoke;\n    box-shadow: none;\n    color: #e1e1e1; }\n    .input[disabled]::-moz-placeholder, .select select[disabled]::-moz-placeholder {\n      color: rgba(225, 225, 225, 0.3); }\n    .input[disabled]::-webkit-input-placeholder, .select select[disabled]::-webkit-input-placeholder {\n      color: rgba(225, 225, 225, 0.3); }\n    .input[disabled]:-moz-placeholder, .select select[disabled]:-moz-placeholder {\n      color: rgba(225, 225, 225, 0.3); }\n    .input[disabled]:-ms-input-placeholder, .select select[disabled]:-ms-input-placeholder {\n      color: rgba(225, 225, 225, 0.3); }\n\n.input {\n  box-shadow: none;\n  max-width: 100%;\n  width: 100%; }\n  .is-light.input {\n    border-color: #657786; }\n    .is-light.input:focus, .is-light.input:active, .is-light.is-active.input {\n      box-shadow: 0 0 0 0.125em rgba(101, 119, 134, 0.25); }\n  .is-primary.input {\n    border-color: #344fff; }\n    .is-primary.input:focus, .is-primary.input:active, .is-primary.is-active.input {\n      box-shadow: 0 0 0 0.125em rgba(52, 79, 255, 0.25); }\n  .is-success.input {\n    border-color: #34de80; }\n    .is-success.input:focus, .is-success.input:active, .is-success.is-active.input {\n      box-shadow: 0 0 0 0.125em rgba(52, 222, 128, 0.25); }\n  .is-warning.input {\n    border-color: #FDE203; }\n    .is-warning.input:focus, .is-warning.input:active, .is-warning.is-active.input {\n      box-shadow: 0 0 0 0.125em rgba(253, 226, 3, 0.25); }\n  .is-danger.input {\n    border-color: #f72e2e; }\n    .is-danger.input:focus, .is-danger.input:active, .is-danger.is-active.input {\n      box-shadow: 0 0 0 0.125em rgba(247, 46, 46, 0.25); }\n  .is-small.input {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n  .is-large.input {\n    font-size: 1.5rem; }\n  .is-fullwidth.input {\n    display: block;\n    width: 100%; }\n\n.input.is-rounded {\n  border-radius: 9999px;\n  padding-left: calc(calc(0.75em - 2px) + 0.375em);\n  padding-right: calc(calc(0.75em - 2px) + 0.375em); }\n\n.checkbox, .radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative; }\n  .checkbox input, .radio input {\n    cursor: pointer; }\n  .checkbox:hover, .radio:hover {\n    color: #363636; }\n  .checkbox[disabled], .radio[disabled],\n  .checkbox input[disabled],\n  .radio input[disabled] {\n    color: #e1e1e1;\n    cursor: not-allowed; }\n\n.radio + .radio {\n  margin-left: 0.5em; }\n\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top; }\n  .select:not(.is-multiple) {\n    height: 2.5em; }\n  .select:not(.is-multiple):not(.is-loading)::after {\n    border-color: #00ffff;\n    right: 1.125em;\n    z-index: 4; }\n  .select.is-rounded select {\n    border-radius: 9999px;\n    padding-left: 1em; }\n  .select select {\n    cursor: pointer;\n    display: block;\n    font-size: 1em;\n    max-width: 100%;\n    outline: none; }\n    .select select::-ms-expand {\n      display: none; }\n    .select select[disabled]:hover {\n      border-color: whitesmoke; }\n    .select select:not([multiple]) {\n      padding-right: 2.5em; }\n  .select:not(.is-multiple):not(.is-loading):hover::after {\n    border-color: #363636; }\n  .select.is-light:not(:hover)::after {\n    border-color: #657786; }\n  .select.is-light select {\n    border-color: #657786; }\n    .select.is-light select:hover, .select.is-light select.is-hovered {\n      border-color: #5a6a77; }\n    .select.is-light select:focus, .select.is-light select:active, .select.is-light select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(101, 119, 134, 0.25); }\n  .select.is-primary:not(:hover)::after {\n    border-color: #344fff; }\n  .select.is-primary select {\n    border-color: #344fff; }\n    .select.is-primary select:hover, .select.is-primary select.is-hovered {\n      border-color: #1b39ff; }\n    .select.is-primary select:focus, .select.is-primary select:active, .select.is-primary select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(52, 79, 255, 0.25); }\n  .select.is-success:not(:hover)::after {\n    border-color: #34de80; }\n  .select.is-success select {\n    border-color: #34de80; }\n    .select.is-success select:hover, .select.is-success select.is-hovered {\n      border-color: #23d673; }\n    .select.is-success select:focus, .select.is-success select:active, .select.is-success select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(52, 222, 128, 0.25); }\n  .select.is-warning:not(:hover)::after {\n    border-color: #FDE203; }\n  .select.is-warning select {\n    border-color: #FDE203; }\n    .select.is-warning select:hover, .select.is-warning select.is-hovered {\n      border-color: #e5cc02; }\n    .select.is-warning select:focus, .select.is-warning select:active, .select.is-warning select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(253, 226, 3, 0.25); }\n  .select.is-danger:not(:hover)::after {\n    border-color: #f72e2e; }\n  .select.is-danger select {\n    border-color: #f72e2e; }\n    .select.is-danger select:hover, .select.is-danger select.is-hovered {\n      border-color: #f61515; }\n    .select.is-danger select:focus, .select.is-danger select:active, .select.is-danger select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(247, 46, 46, 0.25); }\n  .select.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n  .select.is-large {\n    font-size: 1.5rem; }\n  .select.is-fullwidth {\n    width: 100%; }\n    .select.is-fullwidth select {\n      width: 100%; }\n  .select.is-loading::after {\n    margin-top: 0;\n    position: absolute;\n    right: 0.625em;\n    top: 0.625em;\n    transform: none; }\n  .select.is-loading.is-small:after {\n    font-size: 0.75rem; }\n  .select.is-loading.is-large:after {\n    font-size: 1.5rem; }\n\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700; }\n  .label:not(:last-child) {\n    margin-bottom: 0.5em; }\n  .label.is-small {\n    font-size: 0.75rem; }\n  .label.is-large {\n    font-size: 1.5rem; }\n\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem; }\n  .help.is-light {\n    color: #657786; }\n  .help.is-primary {\n    color: #344fff; }\n  .help.is-success {\n    color: #34de80; }\n  .help.is-warning {\n    color: #FDE203; }\n  .help.is-danger {\n    color: #f72e2e; }\n\n.field:not(:last-child) {\n  margin-bottom: 0.75rem; }\n\n.field.has-addons {\n  display: flex;\n  justify-content: flex-start; }\n  .field.has-addons .control:not(:last-child) {\n    margin-right: -1px; }\n  .field.has-addons .control:not(:first-child):not(:last-child) .button,\n  .field.has-addons .control:not(:first-child):not(:last-child) .input,\n  .field.has-addons .control:not(:first-child):not(:last-child) .select select {\n    border-radius: 0; }\n  .field.has-addons .control:first-child:not(:only-child) .button,\n  .field.has-addons .control:first-child:not(:only-child) .input,\n  .field.has-addons .control:first-child:not(:only-child) .select select {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n  .field.has-addons .control:last-child:not(:only-child) .button,\n  .field.has-addons .control:last-child:not(:only-child) .input,\n  .field.has-addons .control:last-child:not(:only-child) .select select {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0; }\n  .field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,\n  .field.has-addons .control .input:not([disabled]):hover,\n  .field.has-addons .control .input:not([disabled]).is-hovered,\n  .field.has-addons .control .select select:not([disabled]):hover,\n  .field.has-addons .control .select select:not([disabled]).is-hovered {\n    z-index: 2; }\n  .field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,\n  .field.has-addons .control .input:not([disabled]):focus,\n  .field.has-addons .control .input:not([disabled]):active,\n  .field.has-addons .control .input:not([disabled]).is-active,\n  .field.has-addons .control .select select:not([disabled]):focus,\n  .field.has-addons .control .select select:not([disabled]):active,\n  .field.has-addons .control .select select:not([disabled]).is-active {\n    z-index: 3; }\n    .field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,\n    .field.has-addons .control .input:not([disabled]):focus:hover,\n    .field.has-addons .control .input:not([disabled]):active:hover,\n    .field.has-addons .control .input:not([disabled]).is-active:hover,\n    .field.has-addons .control .select select:not([disabled]):focus:hover,\n    .field.has-addons .control .select select:not([disabled]):active:hover,\n    .field.has-addons .control .select select:not([disabled]).is-active:hover {\n      z-index: 4; }\n\n.field.is-grouped {\n  display: flex;\n  justify-content: flex-start; }\n  .field.is-grouped > .control {\n    flex-shrink: 0; }\n    .field.is-grouped > .control:not(:last-child) {\n      margin-bottom: 0;\n      margin-right: 0.75rem; }\n\n.control {\n  box-sizing: border-box;\n  clear: both;\n  font-size: 1rem;\n  position: relative;\n  text-align: inherit; }\n  .control.has-icons-left .input:focus ~ .icon,\n  .control.has-icons-left .select:focus ~ .icon {\n    color: #415B76; }\n  .control.has-icons-left .input.is-small ~ .icon,\n  .control.has-icons-left .select.is-small ~ .icon {\n    font-size: 0.75rem; }\n  .control.has-icons-left .input.is-large ~ .icon,\n  .control.has-icons-left .select.is-large ~ .icon {\n    font-size: 1.5rem; }\n  .control.has-icons-left .icon {\n    color: #dbdbdb;\n    height: 2.5em;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 2.5em;\n    z-index: 4; }\n  .control.has-icons-left .input,\n  .control.has-icons-left .select select {\n    padding-left: 2.5em; }\n  .control.has-icons-left .icon.is-left {\n    left: 0; }\n  .control.is-loading::after {\n    position: absolute !important;\n    right: 0.625em;\n    top: 0.625em;\n    z-index: 4; }\n  .control.is-loading.is-small:after {\n    font-size: 0.75rem; }\n  .control.is-loading.is-large:after {\n    font-size: 1.5rem; }\n\n/* Bulma Components */\n\n.card {\n  background-color: #ffffff;\n  border-radius: 0.25rem;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #415B76;\n  max-width: 100%;\n  position: relative; }\n\n.card .media:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n.dropdown {\n  display: inline-flex;\n  position: relative;\n  vertical-align: top; }\n  .dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {\n    display: block; }\n\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20; }\n\n.dropdown-content {\n  background-color: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem; }\n\n.dropdown-item {\n  color: #415B76;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative; }\n\na.dropdown-item,\nbutton.dropdown-item {\n  padding-right: 3rem;\n  text-align: inherit;\n  white-space: nowrap;\n  width: 100%; }\n  a.dropdown-item:hover,\n  button.dropdown-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a; }\n  a.dropdown-item.is-active,\n  button.dropdown-item.is-active {\n    background-color: #00ffff;\n    color: rgba(0, 0, 0, 0.7); }\n\n.media {\n  align-items: flex-start;\n  display: flex;\n  text-align: inherit; }\n  .media .content:not(:last-child) {\n    margin-bottom: 0.75rem; }\n  .media .media {\n    border-top: 1px solid rgba(219, 219, 219, 0.5);\n    display: flex;\n    padding-top: 0.75rem; }\n    .media .media .content:not(:last-child),\n    .media .media .control:not(:last-child) {\n      margin-bottom: 0.5rem; }\n    .media .media .media {\n      padding-top: 0.5rem; }\n      .media .media .media + .media {\n        margin-top: 0.5rem; }\n  .media + .media {\n    border-top: 1px solid rgba(219, 219, 219, 0.5);\n    margin-top: 1rem;\n    padding-top: 1rem; }\n  .media.is-large + .media {\n    margin-top: 1.5rem;\n    padding-top: 1.5rem; }\n\n.menu {\n  font-size: 1rem; }\n  .menu.is-small {\n    font-size: 0.75rem; }\n  .menu.is-large {\n    font-size: 1.5rem; }\n\n.message {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 1rem; }\n  .message strong {\n    color: currentColor; }\n  .message a:not(.button):not(.tag):not(.dropdown-item) {\n    color: currentColor;\n    text-decoration: underline; }\n  .message.is-small {\n    font-size: 0.75rem; }\n  .message.is-large {\n    font-size: 1.5rem; }\n  .message.is-light {\n    background-color: #f9fafb; }\n  .message.is-primary {\n    background-color: #ebedff; }\n  .message.is-success {\n    background-color: #edfcf4; }\n  .message.is-warning {\n    background-color: #fffdeb; }\n  .message.is-danger {\n    background-color: #feebeb; }\n\n.modal {\n  align-items: center;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 40; }\n  .modal.is-active {\n    display: flex; }\n\n.navbar {\n  background-color: #ffffff;\n  min-height: 3.25rem;\n  position: relative;\n  z-index: 30; }\n  .navbar.is-light {\n    background-color: #657786;\n    color: #415B76; }\n    .navbar.is-light .navbar-brand > .navbar-item {\n      color: #415B76; }\n    .navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active {\n      background-color: #5a6a77;\n      color: #415B76; }\n    .navbar.is-light .navbar-burger {\n      color: #415B76; }\n    @media screen and (min-width: 1024px) {\n      .navbar.is-light .navbar-start > .navbar-item,\n      .navbar.is-light .navbar-end > .navbar-item {\n        color: #415B76; }\n      .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,\n      .navbar.is-light .navbar-end > a.navbar-item:focus,\n      .navbar.is-light .navbar-end > a.navbar-item:hover,\n      .navbar.is-light .navbar-end > a.navbar-item.is-active {\n        background-color: #5a6a77;\n        color: #415B76; } }\n  .navbar.is-primary {\n    background-color: #344fff;\n    color: #fff; }\n    .navbar.is-primary .navbar-brand > .navbar-item {\n      color: #fff; }\n    .navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active {\n      background-color: #1b39ff;\n      color: #fff; }\n    .navbar.is-primary .navbar-burger {\n      color: #fff; }\n    @media screen and (min-width: 1024px) {\n      .navbar.is-primary .navbar-start > .navbar-item,\n      .navbar.is-primary .navbar-end > .navbar-item {\n        color: #fff; }\n      .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,\n      .navbar.is-primary .navbar-end > a.navbar-item:focus,\n      .navbar.is-primary .navbar-end > a.navbar-item:hover,\n      .navbar.is-primary .navbar-end > a.navbar-item.is-active {\n        background-color: #1b39ff;\n        color: #fff; } }\n  .navbar.is-success {\n    background-color: #34de80;\n    color: rgba(0, 0, 0, 0.7); }\n    .navbar.is-success .navbar-brand > .navbar-item {\n      color: rgba(0, 0, 0, 0.7); }\n    .navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active {\n      background-color: #23d673;\n      color: rgba(0, 0, 0, 0.7); }\n    .navbar.is-success .navbar-burger {\n      color: rgba(0, 0, 0, 0.7); }\n    @media screen and (min-width: 1024px) {\n      .navbar.is-success .navbar-start > .navbar-item,\n      .navbar.is-success .navbar-end > .navbar-item {\n        color: rgba(0, 0, 0, 0.7); }\n      .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,\n      .navbar.is-success .navbar-end > a.navbar-item:focus,\n      .navbar.is-success .navbar-end > a.navbar-item:hover,\n      .navbar.is-success .navbar-end > a.navbar-item.is-active {\n        background-color: #23d673;\n        color: rgba(0, 0, 0, 0.7); } }\n  .navbar.is-warning {\n    background-color: #FDE203;\n    color: rgba(0, 0, 0, 0.7); }\n    .navbar.is-warning .navbar-brand > .navbar-item {\n      color: rgba(0, 0, 0, 0.7); }\n    .navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active {\n      background-color: #e5cc02;\n      color: rgba(0, 0, 0, 0.7); }\n    .navbar.is-warning .navbar-burger {\n      color: rgba(0, 0, 0, 0.7); }\n    @media screen and (min-width: 1024px) {\n      .navbar.is-warning .navbar-start > .navbar-item,\n      .navbar.is-warning .navbar-end > .navbar-item {\n        color: rgba(0, 0, 0, 0.7); }\n      .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,\n      .navbar.is-warning .navbar-end > a.navbar-item:focus,\n      .navbar.is-warning .navbar-end > a.navbar-item:hover,\n      .navbar.is-warning .navbar-end > a.navbar-item.is-active {\n        background-color: #e5cc02;\n        color: rgba(0, 0, 0, 0.7); } }\n  .navbar.is-danger {\n    background-color: #f72e2e;\n    color: #fff; }\n    .navbar.is-danger .navbar-brand > .navbar-item {\n      color: #fff; }\n    .navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active {\n      background-color: #f61515;\n      color: #fff; }\n    .navbar.is-danger .navbar-burger {\n      color: #fff; }\n    @media screen and (min-width: 1024px) {\n      .navbar.is-danger .navbar-start > .navbar-item,\n      .navbar.is-danger .navbar-end > .navbar-item {\n        color: #fff; }\n      .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,\n      .navbar.is-danger .navbar-end > a.navbar-item:focus,\n      .navbar.is-danger .navbar-end > a.navbar-item:hover,\n      .navbar.is-danger .navbar-end > a.navbar-item.is-active {\n        background-color: #f61515;\n        color: #fff; } }\n  .navbar > .container {\n    align-items: stretch;\n    display: flex;\n    min-height: 3.25rem;\n    width: 100%; }\n  .navbar.has-shadow {\n    box-shadow: 0 2px 0 0 whitesmoke; }\n\n.navbar-brand {\n  align-items: stretch;\n  display: flex;\n  flex-shrink: 0;\n  min-height: 3.25rem; }\n\n.navbar-brand a.navbar-item:focus, .navbar-brand a.navbar-item:hover {\n  background-color: transparent; }\n\n.navbar-burger {\n  color: #415B76;\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto; }\n  .navbar-burger span {\n    background-color: currentColor;\n    display: block;\n    height: 1px;\n    left: calc(50% - 8px);\n    position: absolute;\n    transform-origin: center;\n    transition-duration: 86ms;\n    transition-property: background-color, opacity, transform;\n    transition-timing-function: ease-out;\n    width: 16px; }\n    .navbar-burger span:nth-child(1) {\n      top: calc(50% - 6px); }\n    .navbar-burger span:nth-child(2) {\n      top: calc(50% - 1px); }\n    .navbar-burger span:nth-child(3) {\n      top: calc(50% + 4px); }\n  .navbar-burger:hover {\n    background-color: rgba(0, 0, 0, 0.05); }\n  .navbar-burger.is-active span:nth-child(1) {\n    transform: translateY(5px) rotate(45deg); }\n  .navbar-burger.is-active span:nth-child(2) {\n    opacity: 0; }\n  .navbar-burger.is-active span:nth-child(3) {\n    transform: translateY(-5px) rotate(-45deg); }\n\n.navbar-menu {\n  display: none; }\n\n.navbar-item {\n  color: #415B76;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 0.75rem;\n  position: relative; }\n  .navbar-item .icon:only-child {\n    margin-left: -0.25rem;\n    margin-right: -0.25rem; }\n\na.navbar-item {\n  cursor: pointer; }\n  a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active {\n    background-color: #fafafa;\n    color: #00ffff; }\n\n.navbar-item {\n  flex-grow: 0;\n  flex-shrink: 0; }\n  .navbar-item img {\n    max-height: 1.75rem; }\n\n@media screen and (max-width: 1023px) {\n  .navbar > .container {\n    display: block; }\n  .navbar-brand .navbar-item {\n    align-items: center;\n    display: flex; }\n  .navbar-menu {\n    background-color: #ffffff;\n    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0; }\n    .navbar-menu.is-active {\n      display: block; } }\n\n@media screen and (min-width: 1024px) {\n  .navbar,\n  .navbar-menu,\n  .navbar-start,\n  .navbar-end {\n    align-items: stretch;\n    display: flex; }\n  .navbar {\n    min-height: 3.25rem; }\n  .navbar-burger {\n    display: none; }\n  .navbar-item {\n    align-items: center;\n    display: flex; }\n  .navbar-menu {\n    flex-grow: 1;\n    flex-shrink: 0; }\n  .navbar-start {\n    justify-content: flex-start;\n    margin-right: auto; }\n  .navbar-end {\n    justify-content: flex-end;\n    margin-left: auto; }\n  .navbar > .container .navbar-brand,\n  .container > .navbar .navbar-brand {\n    margin-left: -0.75rem; }\n  .navbar > .container .navbar-menu,\n  .container > .navbar .navbar-menu {\n    margin-right: -0.75rem; }\n  a.navbar-item.is-active {\n    color: #0a0a0a; }\n  a.navbar-item.is-active:not(:focus):not(:hover) {\n    background-color: transparent; } }\n\n.switch[type=\"checkbox\"] {\n  outline: 0;\n  user-select: none;\n  display: inline-block;\n  position: absolute;\n  opacity: 0; }\n  .switch[type=\"checkbox\"]:focus + label::before, .switch[type=\"checkbox\"]:focus + label:before, .switch[type=\"checkbox\"]:focus + label::after, .switch[type=\"checkbox\"]:focus + label:after {\n    outline: 1px dotted #657786; }\n  .switch[type=\"checkbox\"][disabled] {\n    cursor: not-allowed; }\n    .switch[type=\"checkbox\"][disabled] + label {\n      opacity: 0.5; }\n      .switch[type=\"checkbox\"][disabled] + label::before, .switch[type=\"checkbox\"][disabled] + label:before {\n        opacity: 0.5; }\n      .switch[type=\"checkbox\"][disabled] + label::after, .switch[type=\"checkbox\"][disabled] + label:after {\n        opacity: 0.5; }\n      .switch[type=\"checkbox\"][disabled] + label:hover {\n        cursor: not-allowed; }\n  .switch[type=\"checkbox\"] + label {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1rem;\n    height: 2.5em;\n    line-height: 1.5;\n    padding-left: 3.5rem;\n    padding-top: .2rem;\n    cursor: pointer; }\n    .switch[type=\"checkbox\"] + label::before, .switch[type=\"checkbox\"] + label:before {\n      position: absolute;\n      display: block;\n      top: calc( 50% - 1.5rem * 0.5);\n      left: 0;\n      width: 3rem;\n      height: 1.5rem;\n      border: 0.1rem solid transparent;\n      border-radius: 4px;\n      background: #657786;\n      content: ''; }\n    .switch[type=\"checkbox\"] + label::after, .switch[type=\"checkbox\"] + label:after {\n      display: block;\n      position: absolute;\n      top: calc( 50% - 1rem * 0.5);\n      left: 0.25rem;\n      width: 1rem;\n      height: 1rem;\n      transform: translate3d(0, 0, 0);\n      border-radius: 4px;\n      background: #ffffff;\n      transition: all 0.25s ease-out;\n      content: ''; }\n  .switch[type=\"checkbox\"].is-rtl + label {\n    padding-left: 0;\n    padding-right: 3.5rem; }\n    .switch[type=\"checkbox\"].is-rtl + label::before, .switch[type=\"checkbox\"].is-rtl + label:before {\n      left: auto;\n      right: 0; }\n    .switch[type=\"checkbox\"].is-rtl + label::after, .switch[type=\"checkbox\"].is-rtl + label:after {\n      left: auto;\n      right: 1.625rem; }\n  .switch[type=\"checkbox\"]:checked + label::before, .switch[type=\"checkbox\"]:checked + label:before {\n    background: #344fff; }\n  .switch[type=\"checkbox\"]:checked + label::after {\n    left: 1.625rem; }\n  .switch[type=\"checkbox\"]:checked.is-rtl + label::after, .switch[type=\"checkbox\"]:checked.is-rtl + label:after {\n    left: auto;\n    right: 0.25rem; }\n  .switch[type=\"checkbox\"].is-outlined + label::before, .switch[type=\"checkbox\"].is-outlined + label:before {\n    background-color: transparent;\n    border-color: #657786; }\n  .switch[type=\"checkbox\"].is-outlined + label::after, .switch[type=\"checkbox\"].is-outlined + label:after {\n    background: #657786; }\n  .switch[type=\"checkbox\"].is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #344fff; }\n  .switch[type=\"checkbox\"].is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-outlined:checked + label:after {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-rounded + label::before, .switch[type=\"checkbox\"].is-rounded + label:before {\n    border-radius: 24px; }\n  .switch[type=\"checkbox\"].is-rounded + label::after, .switch[type=\"checkbox\"].is-rounded + label:after {\n    border-radius: 50%; }\n  .switch[type=\"checkbox\"].is-small + label {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 0.75rem;\n    height: 2.5em;\n    line-height: 1.5;\n    padding-left: 2.75rem;\n    padding-top: .2rem;\n    cursor: pointer; }\n    .switch[type=\"checkbox\"].is-small + label::before, .switch[type=\"checkbox\"].is-small + label:before {\n      position: absolute;\n      display: block;\n      top: calc( 50% - 1.125rem * 0.5);\n      left: 0;\n      width: 2.25rem;\n      height: 1.125rem;\n      border: 0.1rem solid transparent;\n      border-radius: 4px;\n      background: #657786;\n      content: ''; }\n    .switch[type=\"checkbox\"].is-small + label::after, .switch[type=\"checkbox\"].is-small + label:after {\n      display: block;\n      position: absolute;\n      top: calc( 50% - 0.625rem * 0.5);\n      left: 0.25rem;\n      width: 0.625rem;\n      height: 0.625rem;\n      transform: translate3d(0, 0, 0);\n      border-radius: 4px;\n      background: #ffffff;\n      transition: all 0.25s ease-out;\n      content: ''; }\n  .switch[type=\"checkbox\"].is-small.is-rtl + label {\n    padding-left: 0;\n    padding-right: 2.75rem; }\n    .switch[type=\"checkbox\"].is-small.is-rtl + label::before, .switch[type=\"checkbox\"].is-small.is-rtl + label:before {\n      left: auto;\n      right: 0; }\n    .switch[type=\"checkbox\"].is-small.is-rtl + label::after, .switch[type=\"checkbox\"].is-small.is-rtl + label:after {\n      left: auto;\n      right: 1.25rem; }\n  .switch[type=\"checkbox\"].is-small:checked + label::before, .switch[type=\"checkbox\"].is-small:checked + label:before {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-small:checked + label::after {\n    left: 1.25rem; }\n  .switch[type=\"checkbox\"].is-small:checked.is-rtl + label::after, .switch[type=\"checkbox\"].is-small:checked.is-rtl + label:after {\n    left: auto;\n    right: 0.25rem; }\n  .switch[type=\"checkbox\"].is-small.is-outlined + label::before, .switch[type=\"checkbox\"].is-small.is-outlined + label:before {\n    background-color: transparent;\n    border-color: #657786; }\n  .switch[type=\"checkbox\"].is-small.is-outlined + label::after, .switch[type=\"checkbox\"].is-small.is-outlined + label:after {\n    background: #657786; }\n  .switch[type=\"checkbox\"].is-small.is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-small.is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #344fff; }\n  .switch[type=\"checkbox\"].is-small.is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-small.is-outlined:checked + label:after {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-small.is-rounded + label::before, .switch[type=\"checkbox\"].is-small.is-rounded + label:before {\n    border-radius: 24px; }\n  .switch[type=\"checkbox\"].is-small.is-rounded + label::after, .switch[type=\"checkbox\"].is-small.is-rounded + label:after {\n    border-radius: 50%; }\n  .switch[type=\"checkbox\"].is-large + label {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1.5rem;\n    height: 2.5em;\n    line-height: 1.5;\n    padding-left: 5rem;\n    padding-top: .2rem;\n    cursor: pointer; }\n    .switch[type=\"checkbox\"].is-large + label::before, .switch[type=\"checkbox\"].is-large + label:before {\n      position: absolute;\n      display: block;\n      top: calc( 50% - 2.25rem * 0.5);\n      left: 0;\n      width: 4.5rem;\n      height: 2.25rem;\n      border: 0.1rem solid transparent;\n      border-radius: 4px;\n      background: #657786;\n      content: ''; }\n    .switch[type=\"checkbox\"].is-large + label::after, .switch[type=\"checkbox\"].is-large + label:after {\n      display: block;\n      position: absolute;\n      top: calc( 50% - 1.75rem * 0.5);\n      left: 0.25rem;\n      width: 1.75rem;\n      height: 1.75rem;\n      transform: translate3d(0, 0, 0);\n      border-radius: 4px;\n      background: #ffffff;\n      transition: all 0.25s ease-out;\n      content: ''; }\n  .switch[type=\"checkbox\"].is-large.is-rtl + label {\n    padding-left: 0;\n    padding-right: 5rem; }\n    .switch[type=\"checkbox\"].is-large.is-rtl + label::before, .switch[type=\"checkbox\"].is-large.is-rtl + label:before {\n      left: auto;\n      right: 0; }\n    .switch[type=\"checkbox\"].is-large.is-rtl + label::after, .switch[type=\"checkbox\"].is-large.is-rtl + label:after {\n      left: auto;\n      right: 2.375rem; }\n  .switch[type=\"checkbox\"].is-large:checked + label::before, .switch[type=\"checkbox\"].is-large:checked + label:before {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-large:checked + label::after {\n    left: 2.375rem; }\n  .switch[type=\"checkbox\"].is-large:checked.is-rtl + label::after, .switch[type=\"checkbox\"].is-large:checked.is-rtl + label:after {\n    left: auto;\n    right: 0.25rem; }\n  .switch[type=\"checkbox\"].is-large.is-outlined + label::before, .switch[type=\"checkbox\"].is-large.is-outlined + label:before {\n    background-color: transparent;\n    border-color: #657786; }\n  .switch[type=\"checkbox\"].is-large.is-outlined + label::after, .switch[type=\"checkbox\"].is-large.is-outlined + label:after {\n    background: #657786; }\n  .switch[type=\"checkbox\"].is-large.is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-large.is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #344fff; }\n  .switch[type=\"checkbox\"].is-large.is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-large.is-outlined:checked + label:after {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-large.is-rounded + label::before, .switch[type=\"checkbox\"].is-large.is-rounded + label:before {\n    border-radius: 24px; }\n  .switch[type=\"checkbox\"].is-large.is-rounded + label::after, .switch[type=\"checkbox\"].is-large.is-rounded + label:after {\n    border-radius: 50%; }\n  .switch[type=\"checkbox\"].is-light:checked + label::before, .switch[type=\"checkbox\"].is-light:checked + label:before {\n    background: #657786; }\n  .switch[type=\"checkbox\"].is-light.is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-light.is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #657786 !important; }\n  .switch[type=\"checkbox\"].is-light.is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-light.is-outlined:checked + label:after {\n    background: #657786; }\n  .switch[type=\"checkbox\"].is-primary:checked + label::before, .switch[type=\"checkbox\"].is-primary:checked + label:before {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-primary.is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-primary.is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #344fff !important; }\n  .switch[type=\"checkbox\"].is-primary.is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-primary.is-outlined:checked + label:after {\n    background: #344fff; }\n  .switch[type=\"checkbox\"].is-success:checked + label::before, .switch[type=\"checkbox\"].is-success:checked + label:before {\n    background: #34de80; }\n  .switch[type=\"checkbox\"].is-success.is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-success.is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #34de80 !important; }\n  .switch[type=\"checkbox\"].is-success.is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-success.is-outlined:checked + label:after {\n    background: #34de80; }\n  .switch[type=\"checkbox\"].is-warning:checked + label::before, .switch[type=\"checkbox\"].is-warning:checked + label:before {\n    background: #FDE203; }\n  .switch[type=\"checkbox\"].is-warning.is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-warning.is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #FDE203 !important; }\n  .switch[type=\"checkbox\"].is-warning.is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-warning.is-outlined:checked + label:after {\n    background: #FDE203; }\n  .switch[type=\"checkbox\"].is-danger:checked + label::before, .switch[type=\"checkbox\"].is-danger:checked + label:before {\n    background: #f72e2e; }\n  .switch[type=\"checkbox\"].is-danger.is-outlined:checked + label::before, .switch[type=\"checkbox\"].is-danger.is-outlined:checked + label:before {\n    background-color: transparent;\n    border-color: #f72e2e !important; }\n  .switch[type=\"checkbox\"].is-danger.is-outlined:checked + label::after, .switch[type=\"checkbox\"].is-danger.is-outlined:checked + label:after {\n    background: #f72e2e; }\n\n.is-checkradio[type=\"radio\"],\n.is-checkradio[type=\"checkbox\"] {\n  outline: 0;\n  user-select: none;\n  display: inline-block;\n  position: absolute;\n  opacity: 0; }\n  .is-checkradio[type=\"radio\"] + label,\n  .is-checkradio[type=\"checkbox\"] + label {\n    position: relative;\n    display: initial;\n    cursor: pointer;\n    vertical-align: middle;\n    margin: .5em;\n    padding: .2rem .5rem .2rem 0;\n    border-radius: 4px; }\n    .is-checkradio[type=\"radio\"] + label:first-of-type,\n    .is-checkradio[type=\"checkbox\"] + label:first-of-type {\n      margin-left: 0; }\n    .is-checkradio[type=\"radio\"] + label:hover::before, .is-checkradio[type=\"radio\"] + label:hover:before,\n    .is-checkradio[type=\"checkbox\"] + label:hover::before,\n    .is-checkradio[type=\"checkbox\"] + label:hover:before {\n      animation-duration: 0.4s;\n      animation-fill-mode: both;\n      animation-name: hover-color; }\n    .is-checkradio[type=\"radio\"] + label::before, .is-checkradio[type=\"radio\"] + label:before,\n    .is-checkradio[type=\"checkbox\"] + label::before,\n    .is-checkradio[type=\"checkbox\"] + label:before {\n      position: absolute;\n      left: 0;\n      top: 0rem;\n      content: '';\n      border: 0.1rem solid #dbdbdb; }\n    .is-checkradio[type=\"radio\"] + label::after, .is-checkradio[type=\"radio\"] + label:after,\n    .is-checkradio[type=\"checkbox\"] + label::after,\n    .is-checkradio[type=\"checkbox\"] + label:after {\n      position: absolute;\n      display: none;\n      content: '';\n      top: 0rem; }\n  .is-checkradio[type=\"radio\"].is-rtl + label,\n  .is-checkradio[type=\"checkbox\"].is-rtl + label {\n    margin-right: 0rem;\n    margin-left: 0.5rem; }\n    .is-checkradio[type=\"radio\"].is-rtl + label::before, .is-checkradio[type=\"radio\"].is-rtl + label:before,\n    .is-checkradio[type=\"checkbox\"].is-rtl + label::before,\n    .is-checkradio[type=\"checkbox\"].is-rtl + label:before {\n      left: auto;\n      right: 0; }\n  .is-checkradio[type=\"radio\"]:focus + label::before, .is-checkradio[type=\"radio\"]:focus + label:before,\n  .is-checkradio[type=\"checkbox\"]:focus + label::before,\n  .is-checkradio[type=\"checkbox\"]:focus + label:before {\n    outline: 1px dotted #657786; }\n  .is-checkradio[type=\"radio\"]:hover:not([disabled]) + label::before, .is-checkradio[type=\"radio\"]:hover:not([disabled]) + label:before,\n  .is-checkradio[type=\"checkbox\"]:hover:not([disabled]) + label::before,\n  .is-checkradio[type=\"checkbox\"]:hover:not([disabled]) + label:before {\n    border-color: #344fff !important; }\n  .is-checkradio[type=\"radio\"]:checked + label::before, .is-checkradio[type=\"radio\"]:checked + label:before,\n  .is-checkradio[type=\"checkbox\"]:checked + label::before,\n  .is-checkradio[type=\"checkbox\"]:checked + label:before {\n    border: 0.1rem solid #dbdbdb; }\n  .is-checkradio[type=\"radio\"]:checked[disabled],\n  .is-checkradio[type=\"checkbox\"]:checked[disabled] {\n    cursor: not-allowed; }\n    .is-checkradio[type=\"radio\"]:checked[disabled] + label,\n    .is-checkradio[type=\"checkbox\"]:checked[disabled] + label {\n      opacity: 0.5; }\n  .is-checkradio[type=\"radio\"]:checked + label::before, .is-checkradio[type=\"radio\"]:checked + label:before,\n  .is-checkradio[type=\"checkbox\"]:checked + label::before,\n  .is-checkradio[type=\"checkbox\"]:checked + label:before {\n    animation-name: none; }\n  .is-checkradio[type=\"radio\"]:checked + label::after, .is-checkradio[type=\"radio\"]:checked + label:after,\n  .is-checkradio[type=\"checkbox\"]:checked + label::after,\n  .is-checkradio[type=\"checkbox\"]:checked + label:after {\n    display: inline-block; }\n  .is-checkradio[type=\"radio\"][disabled],\n  .is-checkradio[type=\"checkbox\"][disabled] {\n    cursor: not-allowed; }\n    .is-checkradio[type=\"radio\"][disabled] + label,\n    .is-checkradio[type=\"checkbox\"][disabled] + label {\n      opacity: 0.5;\n      cursor: not-allowed; }\n      .is-checkradio[type=\"radio\"][disabled] + label:hover, .is-checkradio[type=\"radio\"][disabled] + label:before, .is-checkradio[type=\"radio\"][disabled] + label::before, .is-checkradio[type=\"radio\"][disabled] + label::after, .is-checkradio[type=\"radio\"][disabled] + label:after,\n      .is-checkradio[type=\"checkbox\"][disabled] + label:hover,\n      .is-checkradio[type=\"checkbox\"][disabled] + label:before,\n      .is-checkradio[type=\"checkbox\"][disabled] + label::before,\n      .is-checkradio[type=\"checkbox\"][disabled] + label::after,\n      .is-checkradio[type=\"checkbox\"][disabled] + label:after {\n        cursor: not-allowed; }\n    .is-checkradio[type=\"radio\"][disabled]:hover,\n    .is-checkradio[type=\"checkbox\"][disabled]:hover {\n      cursor: not-allowed; }\n      .is-checkradio[type=\"radio\"][disabled]:hover::before, .is-checkradio[type=\"radio\"][disabled]:hover:before,\n      .is-checkradio[type=\"checkbox\"][disabled]:hover::before,\n      .is-checkradio[type=\"checkbox\"][disabled]:hover:before {\n        animation-name: none; }\n    .is-checkradio[type=\"radio\"][disabled]::before, .is-checkradio[type=\"radio\"][disabled]:before,\n    .is-checkradio[type=\"checkbox\"][disabled]::before,\n    .is-checkradio[type=\"checkbox\"][disabled]:before {\n      cursor: not-allowed; }\n    .is-checkradio[type=\"radio\"][disabled]::after, .is-checkradio[type=\"radio\"][disabled]:after,\n    .is-checkradio[type=\"checkbox\"][disabled]::after,\n    .is-checkradio[type=\"checkbox\"][disabled]:after {\n      cursor: not-allowed; }\n\n.is-checkradio[type=\"checkbox\"] + label::before, .is-checkradio[type=\"checkbox\"] + label:before {\n  border-radius: 4px; }\n\n.is-checkradio[type=\"checkbox\"] + label::after, .is-checkradio[type=\"checkbox\"] + label:after {\n  box-sizing: border-box;\n  transform: translateY(0rem) rotate(45deg);\n  border-width: 0.1rem;\n  border-style: solid;\n  border-color: #344fff;\n  border-top: 0;\n  border-left: 0; }\n\n.is-checkradio[type=\"checkbox\"].is-circle + label::before, .is-checkradio[type=\"checkbox\"].is-circle + label:before {\n  border-radius: 50%; }\n\n.is-checkradio[type=\"checkbox\"] + label {\n  font-size: 1rem;\n  padding-left: 2rem; }\n  .is-checkradio[type=\"checkbox\"] + label::before, .is-checkradio[type=\"checkbox\"] + label:before {\n    width: 1.5rem;\n    height: 1.5rem; }\n  .is-checkradio[type=\"checkbox\"] + label::after, .is-checkradio[type=\"checkbox\"] + label:after {\n    width: 0.375rem;\n    height: 0.6rem;\n    top: 0.405rem;\n    left: 0.6rem; }\n\n.is-checkradio[type=\"checkbox\"].is-rtl + label {\n  padding-left: 0;\n  padding-right: 2rem; }\n  .is-checkradio[type=\"checkbox\"].is-rtl + label::after, .is-checkradio[type=\"checkbox\"].is-rtl + label:after {\n    left: auto;\n    right: 0.6rem; }\n\n.is-checkradio[type=\"checkbox\"].is-small + label {\n  font-size: 0.75rem;\n  padding-left: 1.5rem; }\n  .is-checkradio[type=\"checkbox\"].is-small + label::before, .is-checkradio[type=\"checkbox\"].is-small + label:before {\n    width: 1.125rem;\n    height: 1.125rem; }\n  .is-checkradio[type=\"checkbox\"].is-small + label::after, .is-checkradio[type=\"checkbox\"].is-small + label:after {\n    width: 0.28125rem;\n    height: 0.45rem;\n    top: 0.30375rem;\n    left: 0.45rem; }\n\n.is-checkradio[type=\"checkbox\"].is-small.is-rtl + label {\n  padding-left: 0;\n  padding-right: 1.5rem; }\n  .is-checkradio[type=\"checkbox\"].is-small.is-rtl + label::after, .is-checkradio[type=\"checkbox\"].is-small.is-rtl + label:after {\n    left: auto;\n    right: 0.45rem; }\n\n.is-checkradio[type=\"checkbox\"].is-large + label {\n  font-size: 1.5rem;\n  padding-left: 3rem; }\n  .is-checkradio[type=\"checkbox\"].is-large + label::before, .is-checkradio[type=\"checkbox\"].is-large + label:before {\n    width: 2.25rem;\n    height: 2.25rem; }\n  .is-checkradio[type=\"checkbox\"].is-large + label::after, .is-checkradio[type=\"checkbox\"].is-large + label:after {\n    width: 0.5625rem;\n    height: 0.9rem;\n    top: 0.6075rem;\n    left: 0.9rem; }\n\n.is-checkradio[type=\"checkbox\"].is-large.is-rtl + label {\n  padding-left: 0;\n  padding-right: 3rem; }\n  .is-checkradio[type=\"checkbox\"].is-large.is-rtl + label::after, .is-checkradio[type=\"checkbox\"].is-large.is-rtl + label:after {\n    left: auto;\n    right: 0.9rem; }\n\n.is-checkradio[type=\"checkbox\"].is-light:hover:not([disabled]) + label::before, .is-checkradio[type=\"checkbox\"].is-light:hover:not([disabled]) + label:before {\n  border-color: #657786 !important; }\n\n.is-checkradio[type=\"checkbox\"].is-light:checked + label::after, .is-checkradio[type=\"checkbox\"].is-light:checked + label:after {\n  border-color: #657786 !important; }\n\n.is-checkradio[type=\"checkbox\"].is-primary:hover:not([disabled]) + label::before, .is-checkradio[type=\"checkbox\"].is-primary:hover:not([disabled]) + label:before {\n  border-color: #344fff !important; }\n\n.is-checkradio[type=\"checkbox\"].is-primary:checked + label::after, .is-checkradio[type=\"checkbox\"].is-primary:checked + label:after {\n  border-color: #344fff !important; }\n\n.is-checkradio[type=\"checkbox\"].is-success:hover:not([disabled]) + label::before, .is-checkradio[type=\"checkbox\"].is-success:hover:not([disabled]) + label:before {\n  border-color: #34de80 !important; }\n\n.is-checkradio[type=\"checkbox\"].is-success:checked + label::after, .is-checkradio[type=\"checkbox\"].is-success:checked + label:after {\n  border-color: #34de80 !important; }\n\n.is-checkradio[type=\"checkbox\"].is-warning:hover:not([disabled]) + label::before, .is-checkradio[type=\"checkbox\"].is-warning:hover:not([disabled]) + label:before {\n  border-color: #FDE203 !important; }\n\n.is-checkradio[type=\"checkbox\"].is-warning:checked + label::after, .is-checkradio[type=\"checkbox\"].is-warning:checked + label:after {\n  border-color: #FDE203 !important; }\n\n.is-checkradio[type=\"checkbox\"].is-danger:hover:not([disabled]) + label::before, .is-checkradio[type=\"checkbox\"].is-danger:hover:not([disabled]) + label:before {\n  border-color: #f72e2e !important; }\n\n.is-checkradio[type=\"checkbox\"].is-danger:checked + label::after, .is-checkradio[type=\"checkbox\"].is-danger:checked + label:after {\n  border-color: #f72e2e !important; }\n\n.is-checkradio[type=\"checkbox\"]:indeterminate + label::after, .is-checkradio[type=\"checkbox\"]:indeterminate + label:after {\n  display: inline-block;\n  transform: rotate(90deg);\n  border-bottom: none; }\n\n.is-checkradio[type=\"checkbox\"]:indeterminate.is-light + label::after, .is-checkradio[type=\"checkbox\"]:indeterminate.is-light + label:after {\n  border-color: #657786; }\n\n.is-checkradio[type=\"checkbox\"]:indeterminate.is-primary + label::after, .is-checkradio[type=\"checkbox\"]:indeterminate.is-primary + label:after {\n  border-color: #344fff; }\n\n.is-checkradio[type=\"checkbox\"]:indeterminate.is-success + label::after, .is-checkradio[type=\"checkbox\"]:indeterminate.is-success + label:after {\n  border-color: #34de80; }\n\n.is-checkradio[type=\"checkbox\"]:indeterminate.is-warning + label::after, .is-checkradio[type=\"checkbox\"]:indeterminate.is-warning + label:after {\n  border-color: #FDE203; }\n\n.is-checkradio[type=\"checkbox\"]:indeterminate.is-danger + label::after, .is-checkradio[type=\"checkbox\"]:indeterminate.is-danger + label:after {\n  border-color: #f72e2e; }\n\n.is-checkradio[type=\"radio\"] + label::before, .is-checkradio[type=\"radio\"] + label:before {\n  border-radius: 50%; }\n\n.is-checkradio[type=\"radio\"] + label::after, .is-checkradio[type=\"radio\"] + label:after {\n  border-radius: 50%;\n  background: #344fff;\n  left: 0;\n  transform: scale(0.5); }\n\n.is-checkradio[type=\"radio\"].is-rtl + label {\n  padding-left: 0; }\n  .is-checkradio[type=\"radio\"].is-rtl + label::after, .is-checkradio[type=\"radio\"].is-rtl + label:after {\n    left: auto;\n    right: 0; }\n\n.is-checkradio[type=\"radio\"] + label {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  padding-left: 2rem; }\n  .is-checkradio[type=\"radio\"] + label::before, .is-checkradio[type=\"radio\"] + label:before, .is-checkradio[type=\"radio\"] + label::after, .is-checkradio[type=\"radio\"] + label:after {\n    width: 1.5rem;\n    height: 1.5rem; }\n\n.is-checkradio[type=\"radio\"].is-rtl + label {\n  padding-right: 2rem; }\n\n.is-checkradio[type=\"radio\"].is-small + label {\n  font-size: 0.75rem;\n  line-height: 1.125rem;\n  padding-left: 1.5rem; }\n  .is-checkradio[type=\"radio\"].is-small + label::before, .is-checkradio[type=\"radio\"].is-small + label:before, .is-checkradio[type=\"radio\"].is-small + label::after, .is-checkradio[type=\"radio\"].is-small + label:after {\n    width: 1.125rem;\n    height: 1.125rem; }\n\n.is-checkradio[type=\"radio\"].is-small.is-rtl + label {\n  padding-right: 1.5rem; }\n\n.is-checkradio[type=\"radio\"].is-large + label {\n  font-size: 1.5rem;\n  line-height: 2.25rem;\n  padding-left: 3rem; }\n  .is-checkradio[type=\"radio\"].is-large + label::before, .is-checkradio[type=\"radio\"].is-large + label:before, .is-checkradio[type=\"radio\"].is-large + label::after, .is-checkradio[type=\"radio\"].is-large + label:after {\n    width: 2.25rem;\n    height: 2.25rem; }\n\n.is-checkradio[type=\"radio\"].is-large.is-rtl + label {\n  padding-right: 3rem; }\n\n.is-checkradio[type=\"radio\"].is-light:hover:not([disabled]) + label::before, .is-checkradio[type=\"radio\"].is-light:hover:not([disabled]) + label:before {\n  border-color: #657786 !important; }\n\n.is-checkradio[type=\"radio\"].is-light:checked + label::after, .is-checkradio[type=\"radio\"].is-light:checked + label:after {\n  border-color: #657786 !important;\n  background-color: #657786 !important; }\n\n.is-checkradio[type=\"radio\"].is-primary:hover:not([disabled]) + label::before, .is-checkradio[type=\"radio\"].is-primary:hover:not([disabled]) + label:before {\n  border-color: #344fff !important; }\n\n.is-checkradio[type=\"radio\"].is-primary:checked + label::after, .is-checkradio[type=\"radio\"].is-primary:checked + label:after {\n  border-color: #344fff !important;\n  background-color: #344fff !important; }\n\n.is-checkradio[type=\"radio\"].is-success:hover:not([disabled]) + label::before, .is-checkradio[type=\"radio\"].is-success:hover:not([disabled]) + label:before {\n  border-color: #34de80 !important; }\n\n.is-checkradio[type=\"radio\"].is-success:checked + label::after, .is-checkradio[type=\"radio\"].is-success:checked + label:after {\n  border-color: #34de80 !important;\n  background-color: #34de80 !important; }\n\n.is-checkradio[type=\"radio\"].is-warning:hover:not([disabled]) + label::before, .is-checkradio[type=\"radio\"].is-warning:hover:not([disabled]) + label:before {\n  border-color: #FDE203 !important; }\n\n.is-checkradio[type=\"radio\"].is-warning:checked + label::after, .is-checkradio[type=\"radio\"].is-warning:checked + label:after {\n  border-color: #FDE203 !important;\n  background-color: #FDE203 !important; }\n\n.is-checkradio[type=\"radio\"].is-danger:hover:not([disabled]) + label::before, .is-checkradio[type=\"radio\"].is-danger:hover:not([disabled]) + label:before {\n  border-color: #f72e2e !important; }\n\n.is-checkradio[type=\"radio\"].is-danger:checked + label::after, .is-checkradio[type=\"radio\"].is-danger:checked + label:after {\n  border-color: #f72e2e !important;\n  background-color: #f72e2e !important; }\n\n/* Bulma Grid */\n.column {\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.75rem; }\n  .columns.is-mobile > .column.is-4 {\n    flex: none;\n    width: 33.33333%; }\n  .columns.is-mobile > .column.is-6 {\n    flex: none;\n    width: 50%; }\n  .columns.is-mobile > .column.is-8 {\n    flex: none;\n    width: 66.66667%; }\n  .columns.is-mobile > .column.is-12 {\n    flex: none;\n    width: 100%; }\n  @media screen and (max-width: 768px) {\n    .column.is-6-mobile {\n      flex: none;\n      width: 50%; } }\n  @media screen and (min-width: 769px), print {\n    .column.is-4 {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-6, .column.is-6-tablet {\n      flex: none;\n      width: 50%; }\n    .column.is-8 {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-12 {\n      flex: none;\n      width: 100%; } }\n  @media screen and (max-width: 1023px) {\n    .column.is-12-touch {\n      flex: none;\n      width: 100%; } }\n\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem; }\n  .columns:last-child {\n    margin-bottom: -0.75rem; }\n  .columns:not(:last-child) {\n    margin-bottom: calc(1.5rem - 0.75rem); }\n  .columns.is-centered {\n    justify-content: center; }\n  .columns.is-mobile {\n    display: flex; }\n  .columns.is-multiline {\n    flex-wrap: wrap; }\n  @media screen and (min-width: 769px), print {\n    .columns:not(.is-desktop) {\n      display: flex; } }\n\n/* Bulma Helpers */\n.has-text-white {\n  color: #ffffff !important; }\n\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important; }\n\n.has-background-white {\n  background-color: #ffffff !important; }\n\n.has-text-light {\n  color: #657786 !important; }\n\na.has-text-light:hover, a.has-text-light:focus {\n  color: #4f5d69 !important; }\n\n.has-text-dark {\n  color: #415B76 !important; }\n\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #2f4255 !important; }\n\n.has-text-primary {\n  color: #344fff !important; }\n\na.has-text-primary:hover, a.has-text-primary:focus {\n  color: #0123ff !important; }\n\n.has-text-info {\n  color: #51527c !important; }\n\na.has-text-info:hover, a.has-text-info:focus {\n  color: #3d3e5d !important; }\n\n.has-text-warning {\n  color: #FDE203 !important; }\n\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #cbb602 !important; }\n\n.has-text-danger {\n  color: #f72e2e !important; }\n\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #e90909 !important; }\n\n.has-background-danger {\n  background-color: #f72e2e !important; }\n\n.is-justify-content-center {\n  justify-content: center !important; }\n\n.is-pulled-left {\n  float: left !important; }\n\n.is-marginless {\n  margin: 0 !important; }\n\n.is-size-1 {\n  font-size: 3rem !important; }\n\n.is-size-2 {\n  font-size: 2.5rem !important; }\n\n.is-size-3 {\n  font-size: 2rem !important; }\n\n.is-size-4 {\n  font-size: 1.5rem !important; }\n\n.is-size-5 {\n  font-size: 1.25rem !important; }\n\n.is-size-6 {\n  font-size: 1rem !important; }\n\n.is-size-7 {\n  font-size: 0.75rem !important; }\n\n.has-text-centered {\n  text-align: center !important; }\n\n.has-text-justified {\n  text-align: justify !important; }\n\n.has-text-left {\n  text-align: left !important; }\n\n.is-capitalized {\n  text-transform: capitalize !important; }\n\n.is-lowercase {\n  text-transform: lowercase !important; }\n\n.is-underlined {\n  text-decoration: underline !important; }\n\n.has-text-weight-light {\n  font-weight: 300 !important; }\n\n.has-text-weight-semibold {\n  font-weight: 600 !important; }\n\n.has-text-weight-bold {\n  font-weight: 700 !important; }\n\n.is-flex {\n  display: flex !important; }\n\n@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: flex !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-flex-touch {\n    display: flex !important; } }\n\n.is-sr-only {\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 0.01em !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 0.01em !important; }\n\n/* Bulma Layout */\n\n.section {\n  padding: 3rem 1.5rem; }\n  @media screen and (min-width: 1024px) {\n    .section {\n      padding: 3rem 3rem; }\n      .section.is-large {\n        padding: 18rem 6rem; } }\n\n.footer {\n  background-color: #fafafa;\n  padding: 3rem 1.5rem 6rem; }\n";
  styleInject(css_248z$3);

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

  function children(element) {
    return Array.from(element.childNodes);
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

  var css_248z$2 = "";
  styleInject(css_248z$2);

  function create_fragment$4(ctx) {
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
      id: create_fragment$4.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$4($$self, $$props, $$invalidate) {
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
      init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Styles",
        options: options,
        id: create_fragment$4.name
      });
      return _this;
    }

    return Styles;
  }(SvelteComponentDev);

  var Object_1$1 = globals.Object;
  var file$3 = "src\\affialiteFormSuperUser\\AffiliatePlans.svelte";

  function get_each_context$1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[8] = list[i];
    child_ctx[10] = i;
    return child_ctx;
  }

  function get_each_context_1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[11] = list[i];
    return child_ctx;
  } // (64:4) {:else}


  function create_else_block(ctx) {
    var t;
    var block = {
      c: function create() {
        t = text("Hay un error con la public key de este usuario");
      },
      m: function mount(target, anchor) {
        insert_dev(target, t, anchor);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(t);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block.name,
      type: "else",
      source: "(64:4) {:else}",
      ctx: ctx
    });
    return block;
  } // (37:0) {#if typeof user.public_key !== "undefined"}


  function create_if_block$2(ctx) {
    var div5;
    var div4;
    var div1;
    var div0;
    var select;
    var t0;
    var div2;
    var input;
    var t1;
    var span;
    var i;
    var t2;
    var div3;
    var button;
    var mounted;
    var dispose;
    var each_value = Object.keys(
    /*memberships*/
    ctx[4]);
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var _i = 0; _i < each_value.length; _i += 1) {
      each_blocks[_i] = create_each_block$1(get_each_context$1(ctx, each_value, _i));
    }

    var block = {
      c: function create() {
        div5 = element("div");
        div4 = element("div");
        div1 = element("div");
        div0 = element("div");
        select = element("select");

        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].c();
        }

        t0 = space();
        div2 = element("div");
        input = element("input");
        t1 = space();
        span = element("span");
        i = element("i");
        t2 = space();
        div3 = element("div");
        button = element("button");
        button.textContent = "Agregar";
        attr_dev(select, "name", "plan");
        attr_dev(select, "class", "formElements");
        add_location(select, file$3, 41, 24, 1171);
        attr_dev(div0, "class", "select is-rounded");
        add_location(div0, file$3, 40, 20, 1114);
        attr_dev(div1, "class", "control");
        set_style(div1, "width", "40%");
        add_location(div1, file$3, 39, 16, 1051);
        attr_dev(input, "type", "number");
        attr_dev(input, "name", "percentPlan");
        input.value =
        /*defaultPercent*/
        ctx[1];
        attr_dev(input, "inputmode", "numeric");
        attr_dev(input, "class", "input is-rounded formElements");
        attr_dev(input, "min", "1");
        attr_dev(input, "max", "99");
        attr_dev(input, "step", "any");
        attr_dev(input, "placeholder", "%");
        add_location(input, file$3, 51, 20, 1796);
        attr_dev(i, "class", "fas fa-percent");
        add_location(i, file$3, 53, 24, 2047);
        attr_dev(span, "class", "icon is-small is-left");
        add_location(span, file$3, 52, 20, 1985);
        attr_dev(div2, "class", "control has-icons-left");
        add_location(div2, file$3, 50, 16, 1738);
        attr_dev(button, "type", "button");
        attr_dev(button, "class", "button is-primary is-outlined is-rounded");
        add_location(button, file$3, 57, 20, 2191);
        attr_dev(div3, "class", "control");
        add_location(div3, file$3, 56, 16, 2148);
        attr_dev(div4, "class", "field has-addons is-justify-content-center");
        add_location(div4, file$3, 38, 12, 977);
        attr_dev(div5, "class", "column is-8");
        add_location(div5, file$3, 37, 8, 938);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div5, anchor);
        append_dev(div5, div4);
        append_dev(div4, div1);
        append_dev(div1, div0);
        append_dev(div0, select);

        for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].m(select, null);
        }

        append_dev(div4, t0);
        append_dev(div4, div2);
        append_dev(div2, input);
        append_dev(div2, t1);
        append_dev(div2, span);
        append_dev(span, i);
        append_dev(div4, t2);
        append_dev(div4, div3);
        append_dev(div3, button);

        if (!mounted) {
          dispose = listen_dev(button, "click",
          /*click_handler*/
          ctx[7], false, false, false);
          mounted = true;
        }
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*Object, memberships, membership_names*/
        48) {
          each_value = Object.keys(
          /*memberships*/
          ctx[4]);
          validate_each_argument(each_value);

          var _i4;

          for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
            var child_ctx = get_each_context$1(ctx, each_value, _i4);

            if (each_blocks[_i4]) {
              each_blocks[_i4].p(child_ctx, dirty);
            } else {
              each_blocks[_i4] = create_each_block$1(child_ctx);

              each_blocks[_i4].c();

              each_blocks[_i4].m(select, null);
            }
          }

          for (; _i4 < each_blocks.length; _i4 += 1) {
            each_blocks[_i4].d(1);
          }

          each_blocks.length = each_value.length;
        }

        if (dirty &
        /*defaultPercent*/
        2) {
          prop_dev(input, "value",
          /*defaultPercent*/
          ctx[1]);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div5);
        destroy_each(each_blocks, detaching);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$2.name,
      type: "if",
      source: "(37:0) {#if typeof user.public_key !== \\\"undefined\\\"}",
      ctx: ctx
    });
    return block;
  } // (44:32) {#each Object.values(memberships)[key].plans as plan}


  function create_each_block_1(ctx) {
    var option;
    var t0_value =
    /*membership_names*/
    ctx[5][
    /*plan*/
    ctx[11].membership_type] + "";
    var t0;
    var t1;
    var t2_value =
    /*plan*/
    ctx[11].name_plan + "";
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
        ctx[11].membership_type);
        option.__value = option_value_value =
        /*plan*/
        ctx[11].__id__;
        option.value = option.__value;
        add_location(option, file$3, 44, 36, 1418);
      },
      m: function mount(target, anchor) {
        insert_dev(target, option, anchor);
        append_dev(option, t0);
        append_dev(option, t1);
        append_dev(option, t2);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*membership_names, memberships*/
        48 && t0_value !== (t0_value =
        /*membership_names*/
        ctx[5][
        /*plan*/
        ctx[11].membership_type] + "")) set_data_dev(t0, t0_value);
        if (dirty &
        /*memberships*/
        16 && t2_value !== (t2_value =
        /*plan*/
        ctx[11].name_plan + "")) set_data_dev(t2, t2_value);

        if (dirty &
        /*memberships*/
        16 && option_data_membership_value !== (option_data_membership_value =
        /*plan*/
        ctx[11].membership_type)) {
          attr_dev(option, "data-membership", option_data_membership_value);
        }

        if (dirty &
        /*memberships*/
        16 && option_value_value !== (option_value_value =
        /*plan*/
        ctx[11].__id__)) {
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
      source: "(44:32) {#each Object.values(memberships)[key].plans as plan}",
      ctx: ctx
    });
    return block;
  } // (43:28) {#each Object.keys(memberships) as membership, key}


  function create_each_block$1(ctx) {
    var each_1_anchor;
    var each_value_1 = Object.values(
    /*memberships*/
    ctx[4])[
    /*key*/
    ctx[10]].plans;
    validate_each_argument(each_value_1);
    var each_blocks = [];

    for (var i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    }

    var block = {
      c: function create() {
        for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
          each_blocks[_i5].c();
        }

        each_1_anchor = empty();
      },
      m: function mount(target, anchor) {
        for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
          each_blocks[_i6].m(target, anchor);
        }

        insert_dev(target, each_1_anchor, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*Object, memberships, membership_names*/
        48) {
          each_value_1 = Object.values(
          /*memberships*/
          ctx[4])[
          /*key*/
          ctx[10]].plans;
          validate_each_argument(each_value_1);

          var _i7;

          for (_i7 = 0; _i7 < each_value_1.length; _i7 += 1) {
            var child_ctx = get_each_context_1(ctx, each_value_1, _i7);

            if (each_blocks[_i7]) {
              each_blocks[_i7].p(child_ctx, dirty);
            } else {
              each_blocks[_i7] = create_each_block_1(child_ctx);

              each_blocks[_i7].c();

              each_blocks[_i7].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }

          for (; _i7 < each_blocks.length; _i7 += 1) {
            each_blocks[_i7].d(1);
          }

          each_blocks.length = each_value_1.length;
        }
      },
      d: function destroy(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching) detach_dev(each_1_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block$1.name,
      type: "each",
      source: "(43:28) {#each Object.keys(memberships) as membership, key}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$3(ctx) {
    var if_block_anchor;

    function select_block_type(ctx, dirty) {
      if (typeof
      /*user*/
      ctx[0].public_key !== "undefined") return create_if_block$2;
      return create_else_block;
    }

    var current_block_type = select_block_type(ctx);
    var if_block = current_block_type(ctx);
    var block = {
      c: function create() {
        if_block.c();
        if_block_anchor = empty();
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx);

          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
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
    validate_slots('AffiliatePlans', slots, []);
    var plans = $$props.plans;
    var user = $$props.user;
    var defaultPercent = $$props.defaultPercent;
    var addPercentage = $$props.addPercentage;
    var form = $$props.form;
    var memberships = {};
    var membership_names = {};
    plans.map(function (plan) {
      if (typeof memberships[plan.membership_type] === "undefined") {
        var type = plan.membership_type;

        switch (type) {
          case "funnels":
            $$invalidate(5, membership_names[type] = "Funnels", membership_names);
            break;

          case "designs":
            $$invalidate(5, membership_names[type] = "Diseño Gráfico", membership_names);
            break;

          case "campaigns":
            $$invalidate(5, membership_names[type] = "Campañas", membership_names);
            break;
        }

        $$invalidate(4, memberships[plan.membership_type] = {
          type: name,
          plans: []
        }, memberships);
      }

      memberships[plan.membership_type].plans.push(plan);
    });
    var writable_props = ['plans', 'user', 'defaultPercent', 'addPercentage', 'form'];
    Object_1$1.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<AffiliatePlans> was created with unknown prop '".concat(key, "'"));
    });

    var click_handler = function click_handler() {
      addPercentage(form);
    };

    $$self.$$set = function ($$props) {
      if ('plans' in $$props) $$invalidate(6, plans = $$props.plans);
      if ('user' in $$props) $$invalidate(0, user = $$props.user);
      if ('defaultPercent' in $$props) $$invalidate(1, defaultPercent = $$props.defaultPercent);
      if ('addPercentage' in $$props) $$invalidate(2, addPercentage = $$props.addPercentage);
      if ('form' in $$props) $$invalidate(3, form = $$props.form);
    };

    $$self.$capture_state = function () {
      return {
        plans: plans,
        user: user,
        defaultPercent: defaultPercent,
        addPercentage: addPercentage,
        form: form,
        memberships: memberships,
        membership_names: membership_names
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('plans' in $$props) $$invalidate(6, plans = $$props.plans);
      if ('user' in $$props) $$invalidate(0, user = $$props.user);
      if ('defaultPercent' in $$props) $$invalidate(1, defaultPercent = $$props.defaultPercent);
      if ('addPercentage' in $$props) $$invalidate(2, addPercentage = $$props.addPercentage);
      if ('form' in $$props) $$invalidate(3, form = $$props.form);
      if ('memberships' in $$props) $$invalidate(4, memberships = $$props.memberships);
      if ('membership_names' in $$props) $$invalidate(5, membership_names = $$props.membership_names);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [user, defaultPercent, addPercentage, form, memberships, membership_names, plans, click_handler];
  }

  var AffiliatePlans = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(AffiliatePlans, _SvelteComponentDev);

    var _super = _createSuper(AffiliatePlans);

    function AffiliatePlans(options) {
      var _this;

      _classCallCheck(this, AffiliatePlans);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
        plans: 6,
        user: 0,
        defaultPercent: 1,
        addPercentage: 2,
        form: 3
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "AffiliatePlans",
        options: options,
        id: create_fragment$3.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*plans*/
      ctx[6] === undefined && !('plans' in props)) {
        console.warn("<AffiliatePlans> was created without expected prop 'plans'");
      }

      if (
      /*user*/
      ctx[0] === undefined && !('user' in props)) {
        console.warn("<AffiliatePlans> was created without expected prop 'user'");
      }

      if (
      /*defaultPercent*/
      ctx[1] === undefined && !('defaultPercent' in props)) {
        console.warn("<AffiliatePlans> was created without expected prop 'defaultPercent'");
      }

      if (
      /*addPercentage*/
      ctx[2] === undefined && !('addPercentage' in props)) {
        console.warn("<AffiliatePlans> was created without expected prop 'addPercentage'");
      }

      if (
      /*form*/
      ctx[3] === undefined && !('form' in props)) {
        console.warn("<AffiliatePlans> was created without expected prop 'form'");
      }

      return _this;
    }

    _createClass(AffiliatePlans, [{
      key: "plans",
      get: function get() {
        throw new Error("<AffiliatePlans>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<AffiliatePlans>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "user",
      get: function get() {
        throw new Error("<AffiliatePlans>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<AffiliatePlans>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "defaultPercent",
      get: function get() {
        throw new Error("<AffiliatePlans>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<AffiliatePlans>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "addPercentage",
      get: function get() {
        throw new Error("<AffiliatePlans>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<AffiliatePlans>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "form",
      get: function get() {
        throw new Error("<AffiliatePlans>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<AffiliatePlans>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return AffiliatePlans;
  }(SvelteComponentDev);

  var css_248z$1 = "";
  styleInject(css_248z$1);

  var file$2 = "src\\components\\Modals\\SimpleModal.svelte";

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

  var get_default_slot_changes = function get_default_slot_changes(dirty) {
    return {};
  };

  var get_default_slot_context = function get_default_slot_context(ctx) {
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
  }; // (200:0) {#if active === true}


  function create_if_block$1(ctx) {
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
    ctx[15], get_default_slot_context);
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
        attr_dev(div0, "class", "overlay_trigger svelte-120ulfb");
        add_location(div0, file$2, 202, 12, 4337);
        attr_dev(button, "class", "modal__close svelte-120ulfb");
        attr_dev(button, "aria-label", "Close modal");
        attr_dev(button, "data-micromodal-close", "");
        add_location(button, file$2, 206, 20, 4774);
        attr_dev(header, "class", header_class_value = "modal__header " +
        /*classesHeader*/
        ctx[4] + " svelte-120ulfb");
        set_style(header, "position", "relative");
        add_location(header, file$2, 204, 16, 4622);
        attr_dev(main, "class", main_class_value = "modal__content " +
        /*classesContent*/
        ctx[3] + " svelte-120ulfb");
        attr_dev(main, "id", main_id_value = "" + (
        /*id*/
        ctx[2] + "-content"));
        add_location(main, file$2, 208, 16, 4954);
        attr_dev(footer, "class", "modal__footer");
        attr_dev(footer, "id", footer_id_value = "" + (
        /*id*/
        ctx[2] + "-footer"));
        add_location(footer, file$2, 212, 16, 5197);
        attr_dev(div1, "style",
        /*styles*/
        ctx[6]);
        attr_dev(div1, "class", div1_class_value = "modal__container animate__animated animate__fadeInUp faster animated custom-scrollbar " +
        /*classesContent*/
        ctx[3] + " svelte-120ulfb");
        attr_dev(div1, "role", "dialog");
        attr_dev(div1, "aria-modal", "true");
        attr_dev(div1, "aria-labelledby", div1_aria_labelledby_value = "" + (
        /*id*/
        ctx[2] + "-title"));
        add_location(div1, file$2, 203, 12, 4410);
        attr_dev(section, "class", "modal__overlay svelte-120ulfb");
        attr_dev(section, "tabindex", "-1");
        attr_dev(section, "data-trigger",
        /*roleOverlay*/
        ctx[10]);
        add_location(section, file$2, 201, 8, 4249);
        attr_dev(div2, "class", div2_class_value = "custom-modal " +
        /*classes*/
        ctx[0] + " micromodal-slide" + " svelte-120ulfb");
        attr_dev(div2, "id",
        /*id*/
        ctx[2]);
        attr_dev(div2, "aria-hidden", "true");
        add_location(div2, file$2, 200, 4, 4139);
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
        ctx[4] + " svelte-120ulfb")) {
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
            ctx[15], dirty, get_default_slot_changes), get_default_slot_context);
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
        ctx[3] + " svelte-120ulfb")) {
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
        ctx[3] + " svelte-120ulfb")) {
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
        ctx[0] + " micromodal-slide" + " svelte-120ulfb")) {
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
      id: create_if_block$1.name,
      type: "if",
      source: "(200:0) {#if active === true}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$2(ctx) {
    var t;
    var a;
    var a_class_value;
    var current;
    var mounted;
    var dispose;
    var if_block =
    /*active*/
    ctx[1] === true && create_if_block$1(ctx);
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
        ctx[5]) + " svelte-120ulfb"));
        set_style(a, "text-decoration", "none");
        attr_dev(a, "href", "# ");
        add_location(a, file$2, 219, 0, 5390);
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
            if_block = create_if_block$1(ctx);
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
        ctx[5]) + " svelte-120ulfb"))) {
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
      id: create_fragment$2.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$2($$self, $$props, $$invalidate) {
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
      init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
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
        id: create_fragment$2.name
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

  var usersTest = [{
    "CreationDate": "2021-12-10",
    "time": "1639150180",
    "FromDB": "stripe_customer",
    "__id__": "yerikmiller56987@gmail.com",
    "id_customer": "oaBFAd",
    "first_name": "Yorman",
    "last_name": "Maricuto",
    "phone": "4267886875",
    "company_phone": "4267886875",
    "dial": "+58",
    "country": "+58",
    "city": "",
    "address": "",
    "zip": "",
    "userFromCampaign": "Campaña de Prueba",
    "type_customer": "1",
    "email": "yerikmiller56987@gmail.com",
    "userFrom": "Campaña de Prueba",
    "public_key": "psoWZeNvxFyO7SgF7b-GxTaEnK4QCq0T",
    "secret_key": "PFKwyXs7iWXrGcmOLJFfsOZxw5dMidx4",
    "referred_by": "mj3l8jy4m7kImhX_pC9uIs8s8DLlyzqj",
    "id_customer_stripe": "cus_KkgQv0VBR6wRwm",
    "subscriptions": "{\"funnels\":{\"platform\":\"stripe\",\"promotion\":false,\"id\":\"sub_1K5B3uB4hl0iUn9Pf94NS100\",\"registered_at_stripe\":true,\"payment_recurring\":true,\"stripe_plan\":\"stripe_plan_pyji\",\"id_plan\":\"pyji\",\"membership_type\":\"funnels\",\"customer_id\":\"cus_KkgQv0VBR6wRwm\",\"downgrade_action\":false,\"is_sub_canceled\":false}}",
    "simvolyWebsiteProjectData": "{\"main_project\":291927,\"from\":\"default-subscription\",\"main_website\":565106}",
    "loginTokenApis": "Vo3t8c3EcVEbF8gSiQtW0m9JecIYhaNb",
    "idAccountingClient": "client_9f1d4fff42357c36f2c988396ed60342",
    "jsonPublicKey": "",
    "AccountBalances": [],
    "full_name": "Yorman Maricuto",
    "total_transactions": 0,
    "referrer": {
      "email": "yerikmiller@gmail.com",
      "first_name": "Yorman",
      "last_name": "Maricuto",
      "public_key": "mj3l8jy4m7kImhX_pC9uIs8s8DLlyzqj"
    }
  }, {
    "CreationDate": "2021-12-10",
    "time": "1639150031",
    "FromDB": "stripe_customer",
    "__id__": "yerikmiller.5545@gmail.com",
    "id_customer": "BD9p-8",
    "first_name": "Yorman",
    "last_name": "Maricuto",
    "phone": "4267886875",
    "company_phone": "4267886875",
    "dial": "+58",
    "country": "+58",
    "city": "",
    "address": "",
    "zip": "",
    "userFromCampaign": "Campaña de Prueba",
    "type_customer": "1",
    "email": "yerikmiller.5545@gmail.com",
    "userFrom": "Campaña de Prueba",
    "public_key": "w5_9lR5nvrnkze4FYt32HKi0Qd77Yu2q",
    "secret_key": "FE_oxtt6WMHnCsAeVtPZpOadjnsfIXVZ",
    "referred_by": "mj3l8jy4m7kImhX_pC9uIs8s8DLlyzqj",
    "id_customer_stripe": "cus_KkgOmcSYpxRFN3",
    "subscriptions": "{\"funnels\":{\"platform\":\"stripe\",\"promotion\":false,\"id\":\"sub_1K5B1RB4hl0iUn9PdcqLavLc\",\"registered_at_stripe\":true,\"payment_recurring\":true,\"stripe_plan\":\"stripe_plan_pyji\",\"id_plan\":\"pyji\",\"membership_type\":\"funnels\",\"customer_id\":\"cus_KkgOmcSYpxRFN3\",\"downgrade_action\":false,\"is_sub_canceled\":false}}",
    "simvolyWebsiteProjectData": "{\"main_project\":291926,\"from\":\"default-subscription\",\"main_website\":565104}",
    "loginTokenApis": "V4obLifWAEtysJsDT5fL8n5FP9kM9DtP",
    "idAccountingClient": "client_c753bc58868a840c4346d68bac8b019a",
    "jsonPublicKey": "",
    "AccountBalances": [],
    "full_name": "Yorman Maricuto",
    "total_transactions": 0,
    "referrer": {
      "email": "yerikmiller@gmail.com",
      "first_name": "Yorman",
      "last_name": "Maricuto",
      "public_key": "mj3l8jy4m7kImhX_pC9uIs8s8DLlyzqj"
    }
  }, {
    "CreationDate": "2021-12-10",
    "time": "1639149946",
    "FromDB": "stripe_customer",
    "__id__": "yerikmiller5251@gmail.com",
    "id_customer": "7yiPu3",
    "first_name": "Yorman",
    "last_name": "Maricuto",
    "phone": "4267886875",
    "company_phone": "4267886875",
    "dial": "+58",
    "country": "+58",
    "city": "",
    "address": "",
    "zip": "",
    "userFromCampaign": "Campaña de Prueba",
    "type_customer": "1",
    "email": "yerikmiller5251@gmail.com",
    "userFrom": "Campaña de Prueba",
    "public_key": "og52SetLGrFlkVSoWQgl2peaE_Fw8ibD",
    "secret_key": "SrQV1QtPodL32nsshjqyDj-_iiH0CIhn",
    "referred_by": "mj3l8jy4m7kImhX_pC9uIs8s8DLlyzqj",
    "id_customer_stripe": "cus_KkgMzfIluzfGgG",
    "subscriptions": "{\"funnels\":{\"platform\":\"stripe\",\"promotion\":false,\"id\":\"sub_1K5B04B4hl0iUn9PY1OZSD0m\",\"registered_at_stripe\":true,\"payment_recurring\":true,\"stripe_plan\":\"stripe_plan_pyji\",\"id_plan\":\"pyji\",\"membership_type\":\"funnels\",\"customer_id\":\"cus_KkgMzfIluzfGgG\",\"downgrade_action\":false,\"is_sub_canceled\":false}}",
    "simvolyWebsiteProjectData": "{\"main_project\":null,\"from\":\"default-subscription\",\"main_website\":null}",
    "loginTokenApis": "hDaLn7na74b49P9k413Yc84FMskptCl_",
    "idAccountingClient": "client_91eb153795cc52afe178b4cfffd39dd7",
    "jsonPublicKey": "",
    "AccountBalances": [],
    "full_name": "Yorman Maricuto",
    "total_transactions": 0,
    "referrer": {
      "email": "yerikmiller@gmail.com",
      "first_name": "Yorman",
      "last_name": "Maricuto",
      "public_key": "mj3l8jy4m7kImhX_pC9uIs8s8DLlyzqj"
    }
  }];

  var plansTest = [{
    "CreationDate": "2021-11-30",
    "time": "1638284560",
    "FromDB": "plans",
    "__id__": "Fa8Z",
    "name_plan": "Start Up",
    "limit_service": "0",
    "membership_type": "funnels",
    "position_plan": "20",
    "price_plan": "20",
    "is_pexels_available": "DEACTIVATED",
    "img_plan": "plan-icon-startup",
    "availableCategories": "[]",
    "type": "PLAN",
    "items": "{\"1 Website\":\"1 Website\",\"Subp\\u00e1ginas ilimitadas\":\"Subp\\u00e1ginas ilimitadas\",\"Almacenamiento ilimitado\":\"Almacenamiento ilimitado\",\"Hasta 60GB ancho de banda\":\"Hasta 60GB ancho de banda\",\"Hasta 1 administradores\":\"Hasta 1 administradores\",\"An\\u00e1lisis y seguimiento\":\"An\\u00e1lisis y seguimiento\",\"Soporte t\\u00e9cnico premium\":\"Soporte t\\u00e9cnico premium\",\"CRM incluido\":\"CRM incluido\",\"Calendario de citas incluido\":\"Calendario de citas incluido\"}",
    "account_group": "",
    "unit_code": "",
    "product_name_siigo": "",
    "unit_coin": "USD",
    "comments": "",
    "doc_code": "",
    "limit_budget": "0",
    "is_recommended": "Default",
    "external_id": "28646",
    "projects_at_same_time": "1",
    "SalesmanIdentification": "",
    "interval_year_price": "15",
    "is_available": "public"
  }, {
    "CreationDate": "2019-09-18",
    "time": "1568830475",
    "FromDB": "plans",
    "__id__": "j3pT",
    "name_plan": "Plan Diseño de embudo",
    "position_plan": "2",
    "price_plan": "180",
    "items": "{\"1 proyecto de embudo o P\\u00e1gina de aterrizaje\":\"1 proyecto de embudo o P\\u00e1gina de aterrizaje\",\"Hasta 3 sub-paginas \":\"Hasta 3 sub-paginas \",\"2 Revisiones con el dise\\u00f1ador\":\"2 Revisiones con el dise\\u00f1ador\",\"Respuesta de 5 d\\u00edas de acuerdo al proyecto.\":\"Respuesta de 5 d\\u00edas de acuerdo al proyecto.\",\"Dise\\u00f1ador dedicado\":\"Dise\\u00f1ador dedicado\",\"Libreria de Fotos gratis\":\"Libreria de Fotos gratis\"}",
    "img_plan": "plan-icon-funnel",
    "stripe_plan": "stripe_plan_j3pT",
    "stripe_product": "stripe_product_j3pT",
    "type": "PLAN",
    "availableCategories": "{\"Dise\\u00f1o personalizado\":\"Dise\\u00f1o personalizado\",\"Embudos & Websites\":\"Embudos & Websites\"}",
    "is_pexels_available": "ACTIVATED",
    "limit_service": "0",
    "membership_type": "designs",
    "account_group": "",
    "unit_code": "",
    "product_name_siigo": "",
    "unit_coin": "USD",
    "comments": "",
    "doc_code": "",
    "SalesmanIdentification": "",
    "limit_budget": "0",
    "projects_at_same_time": "1",
    "is_recommended": "Default",
    "external_id": "",
    "interval_year_price": "",
    "is_available": "public"
  }, {
    "CreationDate": "2021-11-30",
    "time": "1638285057",
    "FromDB": "plans",
    "__id__": "AxY7",
    "name_plan": "Shop",
    "limit_service": "0",
    "membership_type": "funnels",
    "position_plan": "22",
    "price_plan": "35",
    "is_pexels_available": "DEACTIVATED",
    "img_plan": "plan-icon-ecommerce",
    "availableCategories": "[]",
    "type": "PLAN",
    "items": "{\"Hasta 1 E-Commerce.\":\"Hasta 1 E-Commerce.\",\"Subp\\u00e1ginas ilimitadas\":\"Subp\\u00e1ginas ilimitadas\",\"Almacenamiento ilimitado\":\"Almacenamiento ilimitado\",\"Hasta 60GB ancho de banda\":\"Hasta 60GB ancho de banda\",\"Hasta 5 administradores\":\"Hasta 5 administradores\",\"An\\u00e1lisis y seguimiento\":\"An\\u00e1lisis y seguimiento\",\"Soporte t\\u00e9cnico premium\":\"Soporte t\\u00e9cnico premium\",\"E-Commerce incluido\":\"E-Commerce incluido\",\"Hasta to 100 productos\":\"Hasta to 100 productos\",\"Hasta 200 cuentas de usuarios\":\"Hasta 200 cuentas de usuarios\",\"0% de comisi\\u00f3n por ventas!\":\"0% de comisi\\u00f3n por ventas!\",\"CRM incluido\":\"CRM incluido\",\"Calendario de citas incluido\":\"Calendario de citas incluido\"}",
    "account_group": "",
    "unit_code": "",
    "product_name_siigo": "",
    "unit_coin": "USD",
    "comments": "",
    "doc_code": "",
    "limit_budget": "0",
    "is_recommended": "Recomendado",
    "external_id": "28740",
    "projects_at_same_time": "1",
    "SalesmanIdentification": "",
    "interval_year_price": "27",
    "is_available": "public"
  }, {
    "CreationDate": "2019-11-01",
    "time": "1572599483",
    "FromDB": "plans",
    "__id__": "zPLB",
    "name_plan": "Por Servicio",
    "position_plan": "3",
    "price_plan": "20",
    "img_plan": "plan-icon-startup",
    "type": "PRODUCT",
    "items": "{\"\\u00bfNo est\\u00e1 listo para una suscripci\\u00f3n completa?\":\"\\u00bfNo est\\u00e1 listo para una suscripci\\u00f3n completa?\",\"Solicitud de dise\\u00f1o \\u00fanico\":\"Solicitud de dise\\u00f1o \\u00fanico\",\"Excelente atenci\\u00f3n al cliente!\":\"Excelente atenci\\u00f3n al cliente!\",\"Dise\\u00f1ador profesional\":\"Dise\\u00f1ador profesional\"}",
    "stripe_plan": "stripe_plan_zPLB",
    "stripe_product": "stripe_product_zPLB",
    "availableCategories": "{\"Social Media\":\"Social Media\",\"E-commerce\":\"E-commerce\",\" Identidad para tu empresa\":\" Identidad para tu empresa\",\"Art\\u00edculos Promocionales\":\"Art\\u00edculos Promocionales\",\"Dise\\u00f1o de impresi\\u00f3n y materiales de marketing\":\"Dise\\u00f1o de impresi\\u00f3n y materiales de marketing\",\"Dise\\u00f1o digital\":\"Dise\\u00f1o digital\",\"Invitaciones y papeler\\u00eda\":\"Invitaciones y papeler\\u00eda\",\"Dise\\u00f1o personalizado\":\"Dise\\u00f1o personalizado\",\"Para tu E-commerce\":\"Para tu E-commerce\"}",
    "is_pexels_available": "ACTIVATED",
    "limit_service": "0",
    "membership_type": "designs",
    "account_group": "",
    "unit_code": "",
    "product_name_siigo": "",
    "unit_coin": "USD",
    "comments": "",
    "doc_code": "",
    "SalesmanIdentification": "",
    "limit_budget": "0",
    "projects_at_same_time": "1",
    "is_recommended": "Default",
    "external_id": "",
    "interval_year_price": "18",
    "is_available": "public"
  }, {
    "CreationDate": "2021-01-26",
    "time": "1611701568",
    "FromDB": "plans",
    "__id__": "sgHZ",
    "name_plan": "Plan Básico",
    "limit_service": "0",
    "membership_type": "campaigns",
    "position_plan": "7",
    "price_plan": "29.50",
    "is_pexels_available": "DEACTIVATED",
    "img_plan": "plan-icon-startup",
    "availableCategories": "[]",
    "type": "PLAN",
    "items": "{\"Especial para negocios que gasten desde \\u003Cstrong\\u003E$32 USD\\u003C\\/strong\\u003E hasta \\u003Cstrong\\u003E$150 USD\\u003C\\/strong\\u003E en pauta al mes.\":\"Especial para negocios que gasten desde \\u003Cstrong\\u003E$32 USD\\u003C\\/strong\\u003E hasta \\u003Cstrong\\u003E$150 USD\\u003C\\/strong\\u003E en pauta al mes.\",\"Optimizaci\\u00f3n 24\\/7\\/365.\":\"Optimizaci\\u00f3n 24\\/7\\/365.\",\"Reporte de la campa\\u00f1a mensual. \":\"Reporte de la campa\\u00f1a mensual. \",\"Incrementa y mejora tus resultados. \":\"Incrementa y mejora tus resultados. \",\"Soporte y ayuda t\\u00e9cnica para ensamblar tu campa\\u00f1a. \":\"Soporte y ayuda t\\u00e9cnica para ensamblar tu campa\\u00f1a. \",\"Acceso gratis a plantillas de publicidad para redes sociales. \":\"Acceso gratis a plantillas de publicidad para redes sociales. \",\"Acceso a tu paneles de herramientas y anal\\u00edticas,\":\"Acceso a tu paneles de herramientas y anal\\u00edticas,\"}",
    "account_group": "",
    "unit_code": "",
    "product_name_siigo": "",
    "unit_coin": "USD",
    "comments": "",
    "doc_code": "",
    "SalesmanIdentification": "",
    "stripe_plan": "stripe_plan_sgHZ",
    "stripe_product": "stripe_product_sgHZ",
    "limit_budget": "150",
    "projects_at_same_time": "1",
    "is_recommended": "Default",
    "external_id": "",
    "interval_year_price": "28",
    "is_available": "public"
  }, {
    "CreationDate": "2020-08-14",
    "time": "1597381339",
    "FromDB": "plans",
    "__id__": "x_q-",
    "name_plan": "Plan Diseño",
    "limit_service": "0",
    "membership_type": "designs",
    "position_plan": "9",
    "price_plan": "200",
    "is_pexels_available": "DEACTIVATED",
    "img_plan": "plan-icon-ecommerce",
    "availableCategories": "{\"Social Media\":\"Social Media\",\" Identidad para tu empresa\":\" Identidad para tu empresa\",\"Dise\\u00f1o personalizado\":\"Dise\\u00f1o personalizado\",\"E-commerce\":\"E-commerce\",\"Invitaciones y papeler\\u00eda\":\"Invitaciones y papeler\\u00eda\",\"Dise\\u00f1o de impresi\\u00f3n y materiales de marketing\":\"Dise\\u00f1o de impresi\\u00f3n y materiales de marketing\",\"Dise\\u00f1o digital\":\"Dise\\u00f1o digital\"}",
    "type": "PLAN",
    "items": "{\" 1 proyecto activo a la vez\":\" 1 proyecto activo a la vez\",\"Hasta 5 Solicitudes de dise\\u00f1o al mes\":\"Hasta 5 Solicitudes de dise\\u00f1o al mes\",\"Revisiones ilimitadas \":\"Revisiones ilimitadas \",\" Respuesta de 1 - 3 d\\u00edas de acuerdo al proyecto.\":\" Respuesta de 1 - 3 d\\u00edas de acuerdo al proyecto.\",\"Identidad Visual incluida\":\"Identidad Visual incluida\",\"Inicia tu negocio con 3Pod \":\"Inicia tu negocio con 3Pod \"}",
    "account_group": "",
    "unit_code": "",
    "product_name_siigo": "",
    "unit_coin": "USD",
    "comments": "",
    "doc_code": "",
    "SalesmanIdentification": "",
    "limit_budget": "0",
    "projects_at_same_time": "1",
    "stripe_plan": "stripe_plan_x_q-",
    "stripe_product": "stripe_product_x_q-",
    "is_recommended": "Recomendado",
    "external_id": "",
    "interval_year_price": "195",
    "is_available": "public"
  }, {
    "CreationDate": "2021-10-13",
    "time": "1634103576",
    "FromDB": "plans",
    "__id__": "pyji",
    "name_plan": "El Funnel Del Dinero",
    "limit_service": "0",
    "membership_type": "funnels",
    "position_plan": "21",
    "price_plan": "25",
    "is_pexels_available": "DEACTIVATED",
    "img_plan": "plan-icon-funnel",
    "availableCategories": "[]",
    "type": "PLAN",
    "items": "{\"Hasta 1 E-commerce\":\"Hasta 1 E-commerce\",\"Hasta 5 Funnels\":\"Hasta 5 Funnels\",\"P\\u00e1ginas ilimitadas\":\"P\\u00e1ginas ilimitadas\",\"Almacenamiento ilimitado\":\"Almacenamiento ilimitado\",\"Hasta 60GB ancho de banda\":\"Hasta 60GB ancho de banda\",\"Hasta 5 administradores\":\"Hasta 5 administradores\",\"An\\u00e1lisis y seguimiento\":\"An\\u00e1lisis y seguimiento\",\"Soporte t\\u00e9cnico Premium\":\"Soporte t\\u00e9cnico Premium\",\"Hasta 100 Productos\":\"Hasta 100 Productos\",\"A\\/B Testing \":\"A\\/B Testing \",\"1-Click Upsells & Down-sells\":\"1-Click Upsells & Down-sells\",\"Cuentas de usuarios Ilimitadas\":\"Cuentas de usuarios Ilimitadas\",\"0% de comisi\\u00f3n por ventas!\":\"0% de comisi\\u00f3n por ventas!\",\"CRM incluido\":\"CRM incluido\",\"Calendario de citas incluido\":\"Calendario de citas incluido\",\"Funnel Checkouts\":\"Funnel Checkouts\"}",
    "account_group": "",
    "unit_code": "",
    "product_name_siigo": "",
    "unit_coin": "USD",
    "comments": "",
    "doc_code": "",
    "limit_budget": "0",
    "projects_at_same_time": "1",
    "SalesmanIdentification": "",
    "stripe_plan": "stripe_plan_pyji",
    "stripe_product": "stripe_product_pyji",
    "is_recommended": "Default",
    "external_id": "31742",
    "interval_year_price": "20",
    "is_available": "private"
  }, {
    "CreationDate": "2020-11-03",
    "time": "1604417133",
    "FromDB": "plans",
    "__id__": "FJlw",
    "name_plan": "Plan Funnels",
    "limit_service": "0",
    "membership_type": "funnels",
    "position_plan": "8",
    "price_plan": "77",
    "is_pexels_available": "DEACTIVATED",
    "img_plan": "plan-icon-funnel",
    "availableCategories": "[]",
    "type": "PLAN",
    "items": "{\"Hasta 1 Websites\":\"Hasta 1 Websites\",\"P\\u00e1ginas ilimitadas\":\"P\\u00e1ginas ilimitadas\",\"Almacenamiento ilimitado\":\"Almacenamiento ilimitado\",\"Hasta 120GB ancho de banda\":\"Hasta 120GB ancho de banda\",\"Hasta 30 administradores\":\"Hasta 30 administradores\",\"An\\u00e1lisis y seguimiento\":\"An\\u00e1lisis y seguimiento\",\"Soporte t\\u00e9cnico\":\"Soporte t\\u00e9cnico\",\"E-Commerce incluido\":\"E-Commerce incluido\",\"Productos ilimitado\":\"Productos ilimitado\",\"Cuentas de usuarios Ilimitadas\":\"Cuentas de usuarios Ilimitadas\",\"0% de comisi\\u00f3n por ventas!\":\"0% de comisi\\u00f3n por ventas!\",\"CRM incluido\":\"CRM incluido\",\"Hasta 20 Funnels\":\"Hasta 20 Funnels\",\"Calendario de citas incluido\":\"Calendario de citas incluido\"}",
    "stripe_plan": "stripe_plan_FJlw",
    "stripe_product": "stripe_product_FJlw",
    "account_group": "",
    "unit_code": "",
    "product_name_siigo": "",
    "unit_coin": "USD",
    "comments": "",
    "doc_code": "",
    "SalesmanIdentification": "",
    "is_recommended": "Default",
    "limit_budget": "0",
    "external_id": "28942",
    "projects_at_same_time": "1",
    "interval_year_price": "67",
    "is_available": "public"
  }, {
    "CreationDate": "2020-08-10",
    "time": "1597098152",
    "FromDB": "plans",
    "__id__": "Vmew",
    "name_plan": "Plan Emprendedor",
    "limit_service": "6",
    "membership_type": "campaigns",
    "position_plan": "6",
    "price_plan": "79.50",
    "is_pexels_available": "DEACTIVATED",
    "img_plan": "plan-icon-entrepreneur",
    "availableCategories": "[]",
    "type": "PLAN",
    "items": "{\"Especial para negocios que gasten desde \\u003Cstrong\\u003E$151 USD\\u003C\\/strong\\u003E hasta \\u003Cstrong\\u003E$500 USD\\u003C\\/strong\\u003E en pauta al mes.\":\"Especial para negocios que gasten desde \\u003Cstrong\\u003E$151 USD\\u003C\\/strong\\u003E hasta \\u003Cstrong\\u003E$500 USD\\u003C\\/strong\\u003E en pauta al mes.\",\"Optimizaci\\u00f3n 24\\/7\\/365.\":\"Optimizaci\\u00f3n 24\\/7\\/365.\",\"Reporte de la campa\\u00f1a mensual. \":\"Reporte de la campa\\u00f1a mensual. \",\"Incrementa tus resultados. \":\"Incrementa tus resultados. \",\"Soporte y ayuda t\\u00e9cnica para ensamblar tu campa\\u00f1a. \":\"Soporte y ayuda t\\u00e9cnica para ensamblar tu campa\\u00f1a. \",\"Acceso a tu paneles de herramientas.\":\"Acceso a tu paneles de herramientas.\",\"Acceso gratis a plantillas de publicidad para redes sociales.\":\"Acceso gratis a plantillas de publicidad para redes sociales.\"}",
    "stripe_plan": "stripe_plan_Vmew",
    "stripe_product": "stripe_product_Vmew",
    "account_group": "",
    "unit_code": "",
    "product_name_siigo": "",
    "unit_coin": "USD",
    "comments": "",
    "doc_code": "",
    "SalesmanIdentification": "",
    "limit_budget": "500",
    "projects_at_same_time": "1",
    "is_recommended": "Recomendado",
    "external_id": "",
    "interval_year_price": "78",
    "is_available": "public"
  }, {
    "CreationDate": "2020-08-05",
    "time": "1596679810",
    "FromDB": "plans",
    "__id__": "LhV-",
    "name_plan": "Por Campaña",
    "limit_service": "1",
    "membership_type": "campaigns",
    "position_plan": "4",
    "price_plan": "25",
    "is_pexels_available": "DEACTIVATED",
    "img_plan": "plan-icon-campaign",
    "availableCategories": "[]",
    "type": "PRODUCT",
    "items": "{\"Crea 1 campa\\u00f1a en FB o Google\":\"Crea 1 campa\\u00f1a en FB o Google\",\"Optimizaci\\u00f3n 24\\/7\\/365.\":\"Optimizaci\\u00f3n 24\\/7\\/365.\",\"Reporte de tu campa\\u00f1a mensual. \":\"Reporte de tu campa\\u00f1a mensual. \",\"Soporte y ayuda t\\u00e9cnica para ensamblar tu campa\\u00f1a. \":\"Soporte y ayuda t\\u00e9cnica para ensamblar tu campa\\u00f1a. \",\"Acceso a tu paneles de herramientas\":\"Acceso a tu paneles de herramientas\",\"Acceso gratis a plantillas de publicidad para redes sociales.\":\"Acceso gratis a plantillas de publicidad para redes sociales.\"}",
    "account_group": "",
    "unit_code": "",
    "product_name_siigo": "",
    "unit_coin": "USD",
    "comments": "",
    "doc_code": "",
    "SalesmanIdentification": "",
    "limit_budget": "500",
    "projects_at_same_time": "1",
    "is_recommended": "Default",
    "external_id": "",
    "interval_year_price": "24",
    "is_available": "public"
  }, {
    "CreationDate": "2020-08-10",
    "time": "1597097510",
    "FromDB": "plans",
    "__id__": "mL1S",
    "name_plan": "Plan Microempresario",
    "limit_service": "3",
    "membership_type": "campaigns",
    "position_plan": "5",
    "price_plan": "130",
    "is_pexels_available": "DEACTIVATED",
    "img_plan": "plan-icon-business",
    "availableCategories": "[]",
    "type": "PLAN",
    "items": "{\"Empresas que gasten desde \\u003Cstrong\\u003E$501 USD\\u003C\\/strong\\u003E hasta \\u003Cstrong\\u003E$1.000 USD\\u003C\\/strong\\u003E en pauta al mes.\":\"Empresas que gasten desde \\u003Cstrong\\u003E$501 USD\\u003C\\/strong\\u003E hasta \\u003Cstrong\\u003E$1.000 USD\\u003C\\/strong\\u003E en pauta al mes.\",\"Optimizaci\\u00f3n 24\\/7\\/365.\":\"Optimizaci\\u00f3n 24\\/7\\/365.\",\"Reporte de la campa\\u00f1a mensual. \":\"Reporte de la campa\\u00f1a mensual. \",\"Incrementa y mejora tus resultados.\":\"Incrementa y mejora tus resultados.\",\"Soporte y ayuda t\\u00e9cnica para ensamblar tu campa\\u00f1a. \":\"Soporte y ayuda t\\u00e9cnica para ensamblar tu campa\\u00f1a. \",\"Acceso a tu paneles de herramientas.\":\"Acceso a tu paneles de herramientas.\",\"Acceso gratis a plantillas de publicidad para redes sociales.\":\"Acceso gratis a plantillas de publicidad para redes sociales.\",\"Acceso a tu paneles de herramientas y anal\\u00edticas\":\"Acceso a tu paneles de herramientas y anal\\u00edticas\"}",
    "stripe_plan": "stripe_plan_mL1S",
    "stripe_product": "stripe_product_mL1S",
    "account_group": "",
    "unit_code": "",
    "product_name_siigo": "",
    "unit_coin": "USD",
    "comments": "",
    "doc_code": "",
    "SalesmanIdentification": "",
    "limit_budget": "1000",
    "projects_at_same_time": "1",
    "is_recommended": "Default",
    "external_id": "",
    "interval_year_price": "125",
    "is_available": "public"
  }, {
    "CreationDate": "2021-11-30",
    "time": "1638291695",
    "FromDB": "plans",
    "__id__": "lTOW",
    "name_plan": "El funnel (trial)",
    "limit_service": "0",
    "membership_type": "funnels",
    "position_plan": "24",
    "price_plan": "0",
    "is_pexels_available": "DEACTIVATED",
    "img_plan": "plan-icon-startup",
    "availableCategories": "[]",
    "type": "PLAN",
    "items": "{\"TRIAL!\":\"TRIAL!\"}",
    "account_group": "",
    "unit_code": "",
    "product_name_siigo": "",
    "unit_coin": "USD",
    "comments": "",
    "doc_code": "",
    "limit_budget": "0",
    "is_recommended": "Default",
    "external_id": "trial",
    "projects_at_same_time": "1",
    "SalesmanIdentification": "",
    "interval_year_price": "0",
    "is_available": "private"
  }];

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

  var css_248z = "";
  styleInject(css_248z);

  var Object_1 = globals.Object,
      console_1 = globals.console;
  var file$1 = "src\\affialiteFormSuperUser\\CoreAffiliateForm.svelte";

  function get_each_context(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[25] = list[i];
    return child_ctx;
  } // (117:8) <svelte:fragment slot="trigger">


  function create_trigger_slot(ctx) {
    var div;
    var block = {
      c: function create() {
        div = element("div");
        attr_dev(div, "class", "trigger-form");
        add_location(div, file$1, 117, 12, 3730);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        /*div_binding*/

        ctx[17](div);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        /*div_binding*/

        ctx[17](null);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_trigger_slot.name,
      type: "slot",
      source: "(117:8) <svelte:fragment slot=\\\"trigger\\\">",
      ctx: ctx
    });
    return block;
  } // (140:24) {#if public_key !== "default"}


  function create_if_block_2(ctx) {
    var div1;
    var h2;
    var t1;
    var div0;
    var p;
    var t2;
    var br0;
    var br1;
    var t3;
    var t4;
    var affiliateplans;
    var current;
    affiliateplans = new AffiliatePlans({
      props: {
        user:
        /*user*/
        ctx[7],
        addPercentage:
        /*addPercentage*/
        ctx[9],
        plans:
        /*plans*/
        ctx[2],
        form:
        /*form*/
        ctx[1],
        defaultPercent:
        /*defaultPercent*/
        ctx[6]
      },
      $$inline: true
    });
    var block = {
      c: function create() {
        div1 = element("div");
        h2 = element("h2");
        h2.textContent = "Plan de afiliados";
        t1 = space();
        div0 = element("div");
        p = element("p");
        t2 = text("Esteablece un plan de afiliados para este usuario, de manera que cada plan creado en 3Pod y que aparezca aquí disponible, podrá tener un porcenjate de ganancia distinto.\r\n                                        ");
        br0 = element("br");
        br1 = element("br");
        t3 = text("\r\n                                        Busca un plan y establece un porcentaje, el resto de planes adoptarán el porcentaje global del sistema o del usuario (Establecido más arriba)");
        t4 = space();
        create_component(affiliateplans.$$.fragment);
        attr_dev(h2, "class", "has-text-dark is-size-6 fw600 has-text-centered");
        add_location(h2, file$1, 141, 32, 5322);
        add_location(br0, file$1, 147, 40, 5844);
        add_location(br1, file$1, 147, 44, 5848);
        attr_dev(p, "class", "has-text-justified");
        add_location(p, file$1, 145, 36, 5561);
        attr_dev(div0, "class", "explain svelte-17d28mc");
        add_location(div0, file$1, 144, 28, 5502);
        attr_dev(div1, "class", "field column is-8");
        add_location(div1, file$1, 140, 28, 5257);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div1, anchor);
        append_dev(div1, h2);
        append_dev(div1, t1);
        append_dev(div1, div0);
        append_dev(div0, p);
        append_dev(p, t2);
        append_dev(p, br0);
        append_dev(p, br1);
        append_dev(p, t3);
        insert_dev(target, t4, anchor);
        mount_component(affiliateplans, target, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        var affiliateplans_changes = {};
        if (dirty &
        /*user*/
        128) affiliateplans_changes.user =
        /*user*/
        ctx[7];
        if (dirty &
        /*plans*/
        4) affiliateplans_changes.plans =
        /*plans*/
        ctx[2];
        if (dirty &
        /*form*/
        2) affiliateplans_changes.form =
        /*form*/
        ctx[1];
        if (dirty &
        /*defaultPercent*/
        64) affiliateplans_changes.defaultPercent =
        /*defaultPercent*/
        ctx[6];
        affiliateplans.$set(affiliateplans_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(affiliateplans.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(affiliateplans.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div1);
        if (detaching) detach_dev(t4);
        destroy_component(affiliateplans, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2.name,
      type: "if",
      source: "(140:24) {#if public_key !== \\\"default\\\"}",
      ctx: ctx
    });
    return block;
  } // (161:20) {#if user.affiliatePlan.length > 0}


  function create_if_block_1(ctx) {
    var h3;
    var block = {
      c: function create() {
        h3 = element("h3");
        h3.textContent = "Planes con porcentaje personalizado establecidos:";
        attr_dev(h3, "class", "has-text-centered fw600 has-text-info");
        add_location(h3, file$1, 161, 24, 6618);
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
      id: create_if_block_1.name,
      type: "if",
      source: "(161:20) {#if user.affiliatePlan.length > 0}",
      ctx: ctx
    });
    return block;
  } // (166:20) {#if active === true}


  function create_if_block(ctx) {
    var div;
    var each_value = Object.values(
    /*user*/
    ctx[7].affiliatePlan).filter(
    /*func*/
    ctx[14]);
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }

    var block = {
      c: function create() {
        div = element("div");

        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        attr_dev(div, "class", "columns is-multiline is-centered");
        add_location(div, file$1, 166, 24, 6874);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);

        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(div, null);
        }
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*Object, user, selectData, plans, removePercentage*/
        388) {
          each_value = Object.values(
          /*user*/
          ctx[7].affiliatePlan).filter(
          /*func*/
          ctx[14]);
          validate_each_argument(each_value);

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block(child_ctx);

              each_blocks[_i3].c();

              each_blocks[_i3].m(div, null);
            }
          }

          for (; _i3 < each_blocks.length; _i3 += 1) {
            each_blocks[_i3].d(1);
          }

          each_blocks.length = each_value.length;
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        destroy_each(each_blocks, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block.name,
      type: "if",
      source: "(166:20) {#if active === true}",
      ctx: ctx
    });
    return block;
  } // (168:28) {#each Object.values(user.affiliatePlan).filter((plan_added)=>{                                  plan_added.plan_object = selectData(plans, "__id__", plan_added.plan)                                  return plan_added                              }) as plan}


  function create_each_block(ctx) {
    var div5;
    var div4;
    var div0;
    var t0;
    var div3;
    var div1;
    var t1;
    var strong;
    var t2_value =
    /*plan*/
    ctx[25].plan_object.name_plan + "";
    var t2;
    var t3;
    var div2;
    var p;
    var t4;
    var t5_value =
    /*plan*/
    ctx[25].affiliatePercent + "";
    var t5;
    var t6;
    var t7;
    var mounted;
    var dispose;

    function click_handler() {
      return (
        /*click_handler*/
        ctx[15](
        /*plan*/
        ctx[25])
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
        attr_dev(div0, "class", "delete has-background-danger delete-item svelte-17d28mc");
        add_location(div0, file$1, 173, 40, 7380);
        add_location(strong, file$1, 176, 54, 7699);
        attr_dev(div1, "class", "column");
        add_location(div1, file$1, 175, 44, 7623);
        attr_dev(p, "class", "has-text-primary fw600");
        add_location(p, file$1, 181, 48, 8016);
        attr_dev(div2, "class", "column");
        add_location(div2, file$1, 180, 44, 7946);
        attr_dev(div3, "class", "columns is-multiline");
        add_location(div3, file$1, 174, 40, 7543);
        attr_dev(div4, "class", "box box-plans-added svelte-17d28mc");
        add_location(div4, file$1, 172, 36, 7305);
        attr_dev(div5, "class", "column is-8");
        add_location(div5, file$1, 171, 32, 7242);
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
          dispose = listen_dev(div0, "click", click_handler, false, false, false);
          mounted = true;
        }
      },
      p: function update(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty &
        /*user, plans*/
        132 && t2_value !== (t2_value =
        /*plan*/
        ctx[25].plan_object.name_plan + "")) set_data_dev(t2, t2_value);
        if (dirty &
        /*user, plans*/
        132 && t5_value !== (t5_value =
        /*plan*/
        ctx[25].affiliatePercent + "")) set_data_dev(t5, t5_value);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div5);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block.name,
      type: "each",
      source: "(168:28) {#each Object.values(user.affiliatePlan).filter((plan_added)=>{                                  plan_added.plan_object = selectData(plans, \\\"__id__\\\", plan_added.plan)                                  return plan_added                              }) as plan}",
      ctx: ctx
    });
    return block;
  } // (120:8) <svelte:fragment slot="content">


  function create_content_slot(ctx) {
    var section;
    var header;
    var h2;
    var t0;
    var br0;
    var t1;
    var t2;
    var t3;
    var main;
    var form_1;
    var div1;
    var label;
    var t5;
    var div0;
    var input;
    var t6;
    var span;
    var i;
    var t7;
    var t8;
    var t9;
    var t10;
    var p;
    var t12;
    var br1;
    var t13;
    var div2;
    var button;
    var current;
    var mounted;
    var dispose;
    var if_block0 =
    /*public_key*/
    ctx[5] !== "default" && create_if_block_2(ctx);
    var if_block1 =
    /*user*/
    ctx[7].affiliatePlan.length > 0 && create_if_block_1(ctx);
    var if_block2 =
    /*active*/
    ctx[23] === true && create_if_block(ctx);
    var block = {
      c: function create() {
        section = element("section");
        header = element("header");
        h2 = element("h2");
        t0 = text("Establecer porcentaje de referido\r\n                        ");
        br0 = element("br");
        t1 = space();
        t2 = text(
        /*name*/
        ctx[4]);
        t3 = space();
        main = element("main");
        form_1 = element("form");
        div1 = element("div");
        label = element("label");
        label.textContent = "Porcentaje por default";
        t5 = space();
        div0 = element("div");
        input = element("input");
        t6 = space();
        span = element("span");
        i = element("i");
        t7 = space();
        if (if_block0) if_block0.c();
        t8 = space();
        if (if_block1) if_block1.c();
        t9 = space();
        if (if_block2) if_block2.c();
        t10 = space();
        p = element("p");
        p.textContent = "Los planes a los que no se les establezca un porcentaje, mantendrán el porcentaje por default.";
        t12 = space();
        br1 = element("br");
        t13 = space();
        div2 = element("div");
        button = element("button");
        button.textContent = "Guardar";
        add_location(br0, file$1, 124, 24, 4095);
        attr_dev(h2, "class", "has-text-dark is-size-5 fw600 has-text-centered");
        add_location(h2, file$1, 122, 19, 3950);
        attr_dev(header, "class", "svelte-17d28mc");
        add_location(header, file$1, 121, 16, 3921);
        attr_dev(label, "for", "");
        attr_dev(label, "class", "fw600 label-text");
        add_location(label, file$1, 131, 28, 4474);
        attr_dev(input, "type", "number");
        attr_dev(input, "step", "any");
        input.value =
        /*defaultPercent*/
        ctx[6];
        attr_dev(input, "name", "affiliatePercent");
        attr_dev(input, "placeholder", "%");
        attr_dev(input, "class", "input formElements is-rounded is-hovered");
        attr_dev(input, "min", "1");
        attr_dev(input, "max", "99");
        input.required = true;
        add_location(input, file$1, 133, 32, 4693);
        attr_dev(i, "class", "fas fa-percent");
        add_location(i, file$1, 135, 36, 5000);
        attr_dev(span, "class", "icon is-small is-left");
        add_location(span, file$1, 134, 32, 4926);
        attr_dev(div0, "class", "control has-text-centered has-icons-left");
        add_location(div0, file$1, 132, 28, 4573);
        attr_dev(div1, "class", "field column is-6");
        add_location(div1, file$1, 130, 24, 4413);
        attr_dev(form_1, "class", "columns is-multiline is-centered");
        attr_dev(form_1, "action", "POST");
        add_location(form_1, file$1, 129, 20, 4230);
        attr_dev(p, "class", "has-text-centered is-size-7");
        add_location(p, file$1, 191, 20, 8486);
        add_location(br1, file$1, 194, 20, 8693);
        attr_dev(button, "type", "submit");
        attr_dev(button, "class", "button is-success fw600 is-rounded has-text-white");
        add_location(button, file$1, 196, 24, 8778);
        attr_dev(div2, "class", "buttons is-centered");
        add_location(div2, file$1, 195, 20, 8719);
        add_location(main, file$1, 128, 16, 4202);
        attr_dev(section, "class", "CoreAffiliateForm");
        add_location(section, file$1, 120, 12, 3868);
      },
      m: function mount(target, anchor) {
        insert_dev(target, section, anchor);
        append_dev(section, header);
        append_dev(header, h2);
        append_dev(h2, t0);
        append_dev(h2, br0);
        append_dev(h2, t1);
        append_dev(h2, t2);
        append_dev(section, t3);
        append_dev(section, main);
        append_dev(main, form_1);
        append_dev(form_1, div1);
        append_dev(div1, label);
        append_dev(div1, t5);
        append_dev(div1, div0);
        append_dev(div0, input);
        /*input_binding*/

        ctx[11](input);
        append_dev(div0, t6);
        append_dev(div0, span);
        append_dev(span, i);
        append_dev(form_1, t7);
        if (if_block0) if_block0.m(form_1, null);
        /*form_1_binding*/

        ctx[12](form_1);
        append_dev(main, t8);
        if (if_block1) if_block1.m(main, null);
        append_dev(main, t9);
        if (if_block2) if_block2.m(main, null);
        append_dev(main, t10);
        append_dev(main, p);
        append_dev(main, t12);
        append_dev(main, br1);
        append_dev(main, t13);
        append_dev(main, div2);
        append_dev(div2, button);
        current = true;

        if (!mounted) {
          dispose = [listen_dev(form_1, "submit", prevent_default(
          /*submit_handler*/
          ctx[13]), false, true, false), listen_dev(button, "click",
          /*click_handler_1*/
          ctx[16], false, false, false)];
          mounted = true;
        }
      },
      p: function update(ctx, dirty) {
        if (!current || dirty &
        /*name*/
        16) set_data_dev(t2,
        /*name*/
        ctx[4]);

        if (!current || dirty &
        /*defaultPercent*/
        64) {
          prop_dev(input, "value",
          /*defaultPercent*/
          ctx[6]);
        }

        if (
        /*public_key*/
        ctx[5] !== "default") {
          if (if_block0) {
            if_block0.p(ctx, dirty);

            if (dirty &
            /*public_key*/
            32) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_2(ctx);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(form_1, null);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, function () {
            if_block0 = null;
          });
          check_outros();
        }

        if (
        /*user*/
        ctx[7].affiliatePlan.length > 0) {
          if (if_block1) ; else {
            if_block1 = create_if_block_1(ctx);
            if_block1.c();
            if_block1.m(main, t9);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }

        if (
        /*active*/
        ctx[23] === true) {
          if (if_block2) {
            if_block2.p(ctx, dirty);
          } else {
            if_block2 = create_if_block(ctx);
            if_block2.c();
            if_block2.m(main, t10);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block0);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block0);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(section);
        /*input_binding*/

        ctx[11](null);
        if (if_block0) if_block0.d();
        /*form_1_binding*/

        ctx[12](null);
        if (if_block1) if_block1.d();
        if (if_block2) if_block2.d();
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_content_slot.name,
      type: "slot",
      source: "(120:8) <svelte:fragment slot=\\\"content\\\">",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$1(ctx) {
    var section;
    var simplemodal;
    var current;
    simplemodal = new SimpleModal({
      props: {
        styles: "min-width:320px; max-width:1440px; width:90vw;",
        closeOnClickOverlay: false,
        $$slots: {
          content: [create_content_slot, function (_ref) {
            var active = _ref.active,
                activateModal = _ref.activateModal;
            return {
              23: active,
              24: activateModal
            };
          }, function (_ref2) {
            var active = _ref2.active,
                activateModal = _ref2.activateModal;
            return (active ? 8388608 : 0) | (activateModal ? 16777216 : 0);
          }],
          trigger: [create_trigger_slot, function (_ref3) {
            var active = _ref3.active,
                activateModal = _ref3.activateModal;
            return {
              23: active,
              24: activateModal
            };
          }, function (_ref4) {
            var active = _ref4.active,
                activateModal = _ref4.activateModal;
            return (active ? 8388608 : 0) | (activateModal ? 16777216 : 0);
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
        section = element("section");
        create_component(simplemodal.$$.fragment);
        attr_dev(section, "class", "CoreAffiliateForm");
        add_location(section, file$1, 114, 0, 3482);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, section, anchor);
        mount_component(simplemodal, section, null);
        current = true;
      },
      p: function update(ctx, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 1),
            dirty = _ref6[0];

        var simplemodal_changes = {};

        if (dirty &
        /*$$scope, form, user, plans, active, defaultPercent, public_key, inputDefault, name, trigger*/
        276824319) {
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
        if (detaching) detach_dev(section);
        destroy_component(simplemodal);
      }
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
    var _affiliates_config, _affiliates_config2, _affiliates_config3, _affiliates_config4;

    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots('CoreAffiliateForm', slots, []);
    var trigger = null;
    var form = null;
    var affiliates_config = typeof CoreAffiliate === "undefined" ? {} : CoreAffiliate;
    var container = document.querySelector(".form-affiliate-superuser-3pod");
    var triggerElement = container.querySelector(".trigger-form");
    CoreAffiliate.container = container;

    CoreAffiliate.init = function (data) {
      triggerElement.click();
    };

    var users = ((_affiliates_config = affiliates_config) === null || _affiliates_config === void 0 ? void 0 : _affiliates_config.users) === null ? usersTest : (_affiliates_config2 = affiliates_config) === null || _affiliates_config2 === void 0 ? void 0 : _affiliates_config2.users;
    var plans = ((_affiliates_config3 = affiliates_config) === null || _affiliates_config3 === void 0 ? void 0 : _affiliates_config3.plans) === null ? plansTest : (_affiliates_config4 = affiliates_config) === null || _affiliates_config4 === void 0 ? void 0 : _affiliates_config4.plans;
    var inputDefault;
    var name;
    var public_key;
    var defaultPercent;
    var user;
    var post_data = {};

    CoreAffiliate.init = function (data) {
      var _affiliates_config5, _affiliates_config6, _affiliates_config7, _affiliates_config8, _data$name, _data$public_key, _data$defaultPercent, _user$affiliatePlan, _user, _user$affiliatePercen, _user2;

      users = ((_affiliates_config5 = affiliates_config) === null || _affiliates_config5 === void 0 ? void 0 : _affiliates_config5.users) === null ? usersTest : (_affiliates_config6 = affiliates_config) === null || _affiliates_config6 === void 0 ? void 0 : _affiliates_config6.users;
      $$invalidate(2, plans = ((_affiliates_config7 = affiliates_config) === null || _affiliates_config7 === void 0 ? void 0 : _affiliates_config7.plans) === null ? plansTest : (_affiliates_config8 = affiliates_config) === null || _affiliates_config8 === void 0 ? void 0 : _affiliates_config8.plans);
      console.log(users);
      $$invalidate(4, name = (_data$name = data.name) !== null && _data$name !== void 0 ? _data$name : "General");
      $$invalidate(5, public_key = (_data$public_key = data.public_key) !== null && _data$public_key !== void 0 ? _data$public_key : "default");
      $$invalidate(6, defaultPercent = (_data$defaultPercent = data.defaultPercent) !== null && _data$defaultPercent !== void 0 ? _data$defaultPercent : "20");
      $$invalidate(7, user = selectData(users, "public_key", public_key));

      if (typeof user.public_key !== "undefined") {
        $$invalidate(4, name = user.email);
      }

      $$invalidate(7, user.affiliatePlan = (_user$affiliatePlan = (_user = user) === null || _user === void 0 ? void 0 : _user.affiliatePlan) !== null && _user$affiliatePlan !== void 0 ? _user$affiliatePlan : [], user);
      $$invalidate(7, user.affiliatePlan = typeof user.affiliatePlan === "string" ? JSON.parse(user.affiliatePlan) : user.affiliatePlan, user);

      if (user.affiliatePlan === null || user.affiliatePlan === false) {
        $$invalidate(7, user.affiliatePlan = [], user);
      }

      $$invalidate(7, user);
      $$invalidate(7, user.affiliatePercent = (_user$affiliatePercen = (_user2 = user) === null || _user2 === void 0 ? void 0 : _user2.affiliatePercent) !== null && _user$affiliatePercen !== void 0 ? _user$affiliatePercen : defaultPercent, user);
      post_data = {
        affiliatePercent: user.affiliatePercent,
        plans: user.affiliatePlan || {}
      };
      triggerElement.click();
    };

    triggerElement.addEventListener("click", function () {
      trigger.click();
    });

    function removePercentage(id) {
      delete user.affiliatePlan[id];
      $$invalidate(7, user);
    }

    function addPercentage(form) {
      var data = AppForms.retrieve({
        form: form,
        targets: ".formElements"
      });
      var plan = selectData(plans, "__id__", data.plan);
      post_data.affiliatePercent = data.affiliatePercent;
      $$invalidate(7, user.affiliatePercent = data.affiliatePercent, user);

      if (typeof user.affiliatePlan === "string") {
        $$invalidate(7, user.affiliatePlan = JSON.parse(user.affiliatePlan), user);
      }

      post_data.plans[data.plan] = {
        plan: plan.__id__,
        membership_type: plan.membership_type,
        affiliatePercent: data.percentPlan
      };
      post_data.public_key = user.public_key;
      $$invalidate(7, user.affiliatePlan = post_data.plans, user);
      $$invalidate(7, user);
    }

    function submit() {
      CoreAffiliate.submit = CoreAffiliate.submit || function (data) {
        console.log(data);
      };

      var AffiliatePlans = {};
      console.log(user.affiliatePlan);
      Object.values(user.affiliatePlan).map(function (af_plan, key) {
        var id = Object.keys(user.affiliatePlan)[key];
        delete af_plan.plan_object;
        AffiliatePlans[id] = af_plan;
      });
      CoreAffiliate.submit({
        affiliatePercent: inputDefault.value,
        affiliatePlan: AffiliatePlans,
        public_key: user.public_key
      });
    }

    var writable_props = [];
    Object_1.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn("<CoreAffiliateForm> was created with unknown prop '".concat(key, "'"));
    });

    function input_binding($$value) {
      binding_callbacks[$$value ? 'unshift' : 'push'](function () {
        inputDefault = $$value;
        $$invalidate(3, inputDefault);
      });
    }

    function form_1_binding($$value) {
      binding_callbacks[$$value ? 'unshift' : 'push'](function () {
        form = $$value;
        $$invalidate(1, form);
      });
    }

    var submit_handler = function submit_handler(e) {
      submit(e.target);
    };

    var func = function func(plan_added) {
      plan_added.plan_object = selectData(plans, "__id__", plan_added.plan);
      return plan_added;
    };

    var click_handler = function click_handler(plan) {
      removePercentage(plan.plan_object.__id__);
    };

    var click_handler_1 = function click_handler_1() {
      submit();
    };

    function div_binding($$value) {
      binding_callbacks[$$value ? 'unshift' : 'push'](function () {
        trigger = $$value;
        $$invalidate(0, trigger);
      });
    }

    $$self.$capture_state = function () {
      return {
        AffiliatePlans: AffiliatePlans,
        SimpleModal: SimpleModal,
        usersTest: usersTest,
        plansTest: plansTest,
        selectData: selectData,
        AppForms: AppForms,
        trigger: trigger,
        form: form,
        affiliates_config: affiliates_config,
        container: container,
        triggerElement: triggerElement,
        users: users,
        plans: plans,
        inputDefault: inputDefault,
        name: name,
        public_key: public_key,
        defaultPercent: defaultPercent,
        user: user,
        post_data: post_data,
        removePercentage: removePercentage,
        addPercentage: addPercentage,
        submit: submit
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('trigger' in $$props) $$invalidate(0, trigger = $$props.trigger);
      if ('form' in $$props) $$invalidate(1, form = $$props.form);
      if ('affiliates_config' in $$props) affiliates_config = $$props.affiliates_config;
      if ('container' in $$props) container = $$props.container;
      if ('triggerElement' in $$props) triggerElement = $$props.triggerElement;
      if ('users' in $$props) users = $$props.users;
      if ('plans' in $$props) $$invalidate(2, plans = $$props.plans);
      if ('inputDefault' in $$props) $$invalidate(3, inputDefault = $$props.inputDefault);
      if ('name' in $$props) $$invalidate(4, name = $$props.name);
      if ('public_key' in $$props) $$invalidate(5, public_key = $$props.public_key);
      if ('defaultPercent' in $$props) $$invalidate(6, defaultPercent = $$props.defaultPercent);
      if ('user' in $$props) $$invalidate(7, user = $$props.user);
      if ('post_data' in $$props) post_data = $$props.post_data;
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [trigger, form, plans, inputDefault, name, public_key, defaultPercent, user, removePercentage, addPercentage, submit, input_binding, form_1_binding, submit_handler, func, click_handler, click_handler_1, div_binding];
  }

  var CoreAffiliateForm = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(CoreAffiliateForm, _SvelteComponentDev);

    var _super = _createSuper(CoreAffiliateForm);

    function CoreAffiliateForm(options) {
      var _this;

      _classCallCheck(this, CoreAffiliateForm);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "CoreAffiliateForm",
        options: options,
        id: create_fragment$1.name
      });
      return _this;
    }

    return CoreAffiliateForm;
  }(SvelteComponentDev);

  var file = "src\\AffiliateFormSuperUser.svelte";

  function create_fragment(ctx) {
    var div;
    var styles;
    var t;
    var coreaffiliateform;
    var current;
    styles = new Styles({
      $$inline: true
    });
    coreaffiliateform = new CoreAffiliateForm({
      $$inline: true
    });
    var block = {
      c: function create() {
        div = element("div");
        create_component(styles.$$.fragment);
        t = space();
        create_component(coreaffiliateform.$$.fragment);
        attr_dev(div, "class", "svelte-module");
        add_location(div, file, 8, 0, 267);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        mount_component(styles, div, null);
        append_dev(div, t);
        mount_component(coreaffiliateform, div, null);
        current = true;
      },
      p: noop,
      i: function intro(local) {
        if (current) return;
        transition_in(styles.$$.fragment, local);
        transition_in(coreaffiliateform.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(styles.$$.fragment, local);
        transition_out(coreaffiliateform.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        destroy_component(styles);
        destroy_component(coreaffiliateform);
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
    validate_slots('AffiliateFormSuperUser', slots, []);
    var writable_props = [];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<AffiliateFormSuperUser> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$capture_state = function () {
      return {
        Styles: Styles,
        CoreAffiliateForm: CoreAffiliateForm
      };
    };

    return [];
  }

  var AffiliateFormSuperUser = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(AffiliateFormSuperUser, _SvelteComponentDev);

    var _super = _createSuper(AffiliateFormSuperUser);

    function AffiliateFormSuperUser(options) {
      var _this;

      _classCallCheck(this, AffiliateFormSuperUser);

      _this = _super.call(this, options);
      init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "AffiliateFormSuperUser",
        options: options,
        id: create_fragment.name
      });
      return _this;
    }

    return AffiliateFormSuperUser;
  }(SvelteComponentDev);

  // bulma docs https://dev.to/1n0t/creacion-de-un-proyecto-svelte-bulma-sass-1o8i
  var app = document.querySelector(".form-affiliate-superuser-3pod");
  app = new AffiliateFormSuperUser({
    target: app
  }); //export default app;

}());
//# sourceMappingURL=AffiliateFormSuperUser.js.map
