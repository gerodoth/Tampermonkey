// ==UserScript==
// @author       gerodoth
// @description  Avito remove other cities
// @include      *avito.ru/volgograd
// @name         Avito remove other cities
// @namespace    https://github.com/gerodoth
// @supportURL   https://github.com/gerodoth/Avito-remove-other-cities/blob/master/Avito%20remove%20other%20cities.user.js
// @version      0.2
// ==/UserScript==

(function () {
    var interval = setInterval(hideListings, 1000);
    function hideListings() {
        var spans = document.querySelectorAll('[class^="geo-address"]');
        var len = spans.length;
        for (var i = 0; i < len; i++) {
            if (!(/Волжский|Волгоград/.test (spans[i].innerText)))
            {
                spans[i].parentNode.parentNode.parentNode.remove();
            }
        }
    }
})();
