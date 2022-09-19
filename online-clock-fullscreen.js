// ==UserScript==
// @name         Full screen Clock
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Show a fullscreen online clcok
// @match        https://dayspedia.com/time/online/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        document.getElementById('analog_online').click()
        $('.clockonly').addClass('_dark');
        $(".clockonly,.column--12,.wrapper,.locality,.countdown,.stopwatch,.timer").addClass("_fullscreen"),
        $("header").css("z-index", 0),
        $("#fullscreen").removeClass("on").addClass("off"),
        $("#fullscreen").text($("#fullscreen").attr("exitfull")),
        $(".locality").length && (self.defaultClock = $("div.time,div.time--night"),
        self.defaultOption = $("#digit_online"),
        $("div.clock,div.clock--night").is(":visible") && (self.defaultClock = $("div.clock,div.clock--night"),
        self.defaultOption = $("#analog_online")))
    },2000)
    // Your code here...
})();
