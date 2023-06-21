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
var mySVG_design = document.getElementById('wrapper_main__arrow_icon')

var wrapper = document.getElementById('wrapper--one')


button_design.addEventListener('mouseover', switchToDesign);
button_pr.addEventListener('mouseover', switchToPr);
button_design.addEventListener('mouseout', switchToDivMain);
button_pr.addEventListener('mouseout', switchToDivMain);


function switchToDesign() {
    // divMain.classList.add('hidden');
    divMain.setAttribute("hidden", "hidden");
    div_design.classList.add('visible');
    mySVG_design.classList.remove("hidden");
    wrapper.classList.remove('undisplay');


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
    mySVG_design.classList.add("hidden");
}


// window.addEventListener('scroll', disableElementOnTop);

// function disableElementOnTop() {
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

//     if (scrollTop === 0) {

//         wrapper.classList.add('undisplay');

//     }
// }

window.addEventListener('scroll', function() {


    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop === 0) {

        wrapper.classList.add('undisplay');
    }


    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var triggerPosition = (4 / 5) * window.innerHeight;

    if (scrollPosition >= triggerPosition) {
        document.querySelector('.collapsed-menu').classList.add('active');
    } else {
        document.querySelector('.collapsed-menu').classList.remove('active');

    }
});