$(document).ready(function () {

    // let sections = document.querySelectorAll('section');
    // let navLinks = document.querySelectorAll('header nav a');
    window.onscroll = () => {
        scrollFunction();
        buttonScrollFunc();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 60 ||
            document.documentElement.scrollTop > 60
        ) {
            $('.navbar').addClass('navbar-dropshadow');
        } else {
            $('.navbar').removeClass('navbar-dropshadow');
        }
    }
    const gotoTopBtn = $('#topBtn');
    const buttonScrollFunc = () => {
        if (
            document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 300
        ) {
            gotoTopBtn.addClass('show')
        } else {
            gotoTopBtn.removeClass('show')
        }
    }

    
    const topBtnClick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    gotoTopBtn.click(topBtnClick)

});

//ripples 
// $('.content-wrapper').ripples({
//     resolution: 512,
//     dropRadius: 20,
//     perturbance: 0.04,
// })

// go to btn



