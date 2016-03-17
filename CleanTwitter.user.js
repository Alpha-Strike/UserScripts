// ==UserScript==
// @name         CleanTwitter
// @namespace    https://github.com/Alpha-Strike/UserScripts
// @version      0.1
// @description  Get rid of annoying twitter widgets
// @author       AlphaStrike
// @license      MIT
// @include      *://*.twitter.com/*
// @include      *://twitter.com/*
// @downloadURL  https://raw.githubusercontent.com/Alpha-Strike/UserScripts/master/CleanTwitter.user.js
// @updateURL    https://raw.githubusercontent.com/Alpha-Strike/UserScripts/master/CleanTwitter.user.js
// @grant        none
// ==/UserScript==

document.querySelector(".trends").style.display = "none";
document.querySelector(".wtf-module").style.display = "none";
document.querySelector(".Footer").style.display = "none";
