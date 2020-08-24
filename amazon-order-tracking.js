// ==UserScript==
// @name         Amazon Tracking Info in Order List
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Shows the tracking details in the order list page
// @author       Sreevisakh
// @match        https://www.amazon.in/gp/css/order-history*
// @match        https://www.amazon.in/gp/your-account/order-history*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js#sha256=9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=
// ==/UserScript==
$(document).ready(function() {
   $(".shipment:not(shipment-is-delivered)").each(function(index, element){
       const trackLink = $(element).find(".track-package-button span a").attr('href');
       const iframe = document.createElement('iframe');
       iframe.src = trackLink;
       element.append(iframe);
       $(iframe).hide();
       $(iframe).on('load', function(){
           const tracking = $(iframe).contents().find('.milestone-explanation').text();
           $(element).find('.shipment-top-row').append(tracking);
       });
     });
});
