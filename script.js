var myNav = document.getElementById('nav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 ) {
        alert("hello");
        myNav.style.boxShadow = "0px 2px 4px 0px #ccc";
    } 
    else {
        myNav.style.boxShadow = "none";
    }
};