let links = document.querySelectorAll('.scroll');
let targetID;
links.forEach(function (element){
    element.addEventListener('click', function (event){
        event.preventDefault(); // Замените "preventDefaul" на "preventDefault"
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

let condition = true

let start = 0
let end = 0

function forward (){
    anime({
        targets: '.menu-small',
        translateX: ['300%', '150%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = false
}

function backward(){
    anime({
        targets: '.menu-small',
        translateX: ['150%', '300%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    condition = true
}

$('.menu_small_icon').click(function(){
    if (condition) {
        forward ()
    }
    else {
        backward()
    }
})

$(document).ready(function () {
    $('.slider').bxSlider({
        captions: true, 
        nextText: '',
        prevText: '',
        easing: 'jswing',
    });
});