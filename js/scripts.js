$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            428:{
                items:2
            },

            768:{
                items:3
            },

            1000:{
                items:5
            }

        }
    });
});