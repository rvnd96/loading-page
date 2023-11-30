$(document).ready(function () {

    // let sections = document.querySelectorAll('section');
    // let navLinks = document.querySelectorAll('header nav a');
    window.onscroll = () => {
        scrollFunction();

    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
        ) {
            $('.navbar').addClass('navbar-dropshadow');
        } else {
            $('.navbar').removeClass('navbar-dropshadow');
        }
    }

});

//ripples 
// $('.content-wrapper').ripples({
//     resolution: 512,
//     dropRadius: 20,
//     perturbance: 0.04,
// })
