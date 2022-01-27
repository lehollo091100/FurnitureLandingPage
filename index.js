$( document ).ready(function() {
    $(function(){
        $('.product__type-item').click(function() { // when a .myDiv is clicked
            $('.product__type-item').not(this).removeClass('active')
            $(this).addClass('active')
        })
    });
    $(function(){
        $('.mobile__icon').click( function(){
            $(this).addClass('change')
            $('.mobile__list').addClass('active')
            $('.close__icon').removeClass('active')
        })
    })
    $(function(){
        $('.close__icon').click(function(){
            $(this).addClass('active')
            $('.mobile__list').removeClass('active')
            $('.mobile__icon').removeClass('change')
        })
    })
    $('.owl-carousel.owl1').owlCarousel({
        loop:true,
        margin:10,
        // dots:true,
        autoHeight:false,
        nav:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })
    $('.owl-carousel.owl2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});
window.onscroll = function() {myFunction()};

// Get the header
var header = document.querySelector(".header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
