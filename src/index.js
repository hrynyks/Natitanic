import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import './assets/styles/main.scss';


const owl = $('.owl-carousel');
let items = 1;


$(document).ready(function(){
    owl.owlCarousel({
        loop: true,
        items,
        nav: false,
        dots: false,
    });
});

$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})