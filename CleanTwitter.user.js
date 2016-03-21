// ==UserScript==
// @name         CleanTwitter
// @namespace    https://github.com/Alpha-Strike/UserScripts
// @version      0.2
// @description  Get rid of annoying twitter widgets
// @author       AlphaStrike
// @license      MIT
// @downloadURL  https://raw.githubusercontent.com/Alpha-Strike/UserScripts/master/CleanTwitter.user.js
// @updateURL    https://raw.githubusercontent.com/Alpha-Strike/UserScripts/master/CleanTwitter.user.js
// @include      *://*.twitter.com/*
// @include      *://twitter.com/*
// @grant        none
// ==/UserScript==

var modules = [".trends", ".wtf-module", ".has-recap", ".Footer"];

for (var i = 0; i < modules.length; i++) {
    var module = document.querySelector(modules[i]);
    if (module != null) {
        module.style.display = "none";
    }
}
