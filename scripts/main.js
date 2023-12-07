$(document).ready(function () {

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

    // go to btn
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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})
const observerBtn = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('showBtn')
        } else {
            entry.target.classList.remove('showBtn')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el => observer.observe(el)))
const hiddenElementsBtn = document.querySelectorAll('.hiddenBtn')
hiddenElementsBtn.forEach((el => observerBtn.observe(el)))