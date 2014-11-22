// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        *://*/*
// @grant        none
// @require      https://code.jquery.com/jquery-2.1.1.min.js
// ==/UserScript==

$(function(){
    var classes = {};
    $("*").each(function(index, item){
        classes[item] = $(item).attr("class");
        if (!$(item).attr("title")) {
            $(item).attr("title", classes[item])
        };
    });
})
