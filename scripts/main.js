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

// ripples 
$('#products').ripples({
    resolution: 800,
    dropRadius: 20,
    perturbance: 0.02,
    interactive: true,
    crossOrigin: ''
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        // else {
        //     entry.target.classList.remove('show')
        // }
    })
})
const observerBtn = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showBtn')
        }
        // else {
        //     entry.target.classList.remove('showBtn')
        // }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el => observer.observe(el)))
const hiddenElementsBtn = document.querySelectorAll('.hiddenBtn')
hiddenElementsBtn.forEach((el => observerBtn.observe(el)))


// // code fragment
var data = {
    service_id: 'service_wi7fq3q',
    template_id: 'template_utg7hwg',
    user_id: 'EFN0FJA8S54lsD9h1'
};

// send email with emailjs
const user_id = 'EFN0FJA8S54lsD9h1';
const template_id = 'template_utg7hwg';
const service_id = 'service_wi7fq3q';

(function () {
    emailjs.init(user_id);
})();

$("#contactForm").submit(function (event) {
    event.preventDefault();

    var formData = $(this).serialize();

    emailjs.sendForm(service_id, template_id, this)
        .then(function () {
            alert('Thank you for your message!')
        }, function (error) {
            alert('Error! ', error)
        });
    $(this)[0].reset();

});