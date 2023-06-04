$(window).on('load', function() {
    $('#coverScreen').hide();
});

$(document).ready(function() {


    var type_options = new Typed('.type', {
        strings: [
            'Hello! Whan can we do for you? '
        ],
        typeSpeed: 75,
        backDelay: 7000,
        backSpeed: 7,
        loop: false,
    });

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        },
    };

});
var button_design = document.getElementById('wrapper_main__button--design');
var button_pr = document.getElementById('wrapper_main__button--pr');
var div_design = document.getElementById('background_layer--design');
var div_pr = document.getElementById('background_layer--pr');
var divMain = document.getElementById('particles-js');

button_design.addEventListener('mouseover', switchToDesign);
button_pr.addEventListener('mouseover', switchToPr);
button_design.addEventListener('mouseout', switchToDivMain);
button_pr.addEventListener('mouseout', switchToDivMain);

function switchToDesign() {
    // divMain.classList.add('hidden');
    divMain.setAttribute("hidden", "hidden");
    div_design.classList.add('visible');
}

function switchToPr() {
    divMain.setAttribute("hidden", "hidden");
    div_pr.classList.add('visible');
}

function switchToDivMain() {
    // divMain.classList.remove('hidden');
    divMain.removeAttribute("hidden")
    div_design.classList.remove('visible');
    div_pr.classList.remove('visible');
}