$(function () {
var menuTopOffset = $('.menu').offset().top

$(window).on('scroll', function () {
   var scrollSize = $(window).scrollTop()

   if (scrollSize > menuTopOffset) {
      $('.menu').addClass('menuFixed')
   } else {
      $('.menu').removeClass('menuFixed')
   }

        if(scrollSize < 700){
            $('#backToTop').hide(1000)
        } else {
                $('#backToTop').show(1000)
       }       
   }) 
   
   $('#backToTop').on('click',function () {
      $('html,body').animate({
         scrollTop:0
      },1000)
   })


   //Banner Slider
   $('#banner').slick({
      arrows: false,
      autoplay:true,
      autoplaySpeed: 1000,
      speed:500,
   });

   //Feature slider
   $('.features_slider').slick({
      infinite: true,
      slidesToShow:3,
      slidesToScroll: 2,
      prevArrow:'<i class="fas fa-arrow-left features_slider_left"></i>',
      nextArrow:'<i class="fas fa-arrow-right features_slider_right"></i>',
  })

      //Counter Up
      $('.counter').counterUp ({
         delay: 100,
         time: 1000
     })

     new WOW().init();

     $(window).on('load',function(){
      $('#preloader').fadeOut(1000);
    })
   

//Particles js

particlesJS("particles-js", {
   "particles": {
     "number": {
       "value": 90,
       "density": {
         "enable": true,
         "value_area": 800
           
       }
       
    
     },
     "shape": {
       "type": "circle",
       "stroke": {
         "width": 2,
         "color": "#fff"
       },
       "polygon": {
         "nb_sides": 7
       },
       "image": {
         "src": "img/github.svg",
         "width": 100,
         "height": 100
       }
     },
     "opacity": {
       "value": 1,
       "random": false,
       "anim": {
         "enable": false,
         "speed": 3,
         "opacity_min": 0.1,
         "sync": false
       }
     },
     "size": {
       "value": 3,
       "random": true,
       "anim": {
         "enable": false,
         "speed": 20,
         "size_min": 0.1,
         "sync": false
       }
     },
     "line_linked": {
       "enable": true,
       "distance": 250,
       "color": "fff",
       "opacity": 0.4,
       "width": 1
     },
     "move": {
       "enable": true,
       "speed": 3,
       "direction": "none",
       "random": true,
       "straight": false,
       "out_mode": "out",
       "bounce": false,
       "attract": {
         "enable": false,
         "rotateX": 600,
         "rotateY": 1200
       }
       
     }
   },
   "interactivity": {
     "detect_on": "canvas",
     "events": {
       "onhover": {
         "enable": true,
         "mode": "grab"
       },
       "onclick": {
         "enable": true,
         "mode": "push"
         
       },
       "resize": true
     },
     "modes": {
       "grab": {
         "distance": 140,
         "line_linked": {
           "opacity": 1
         }
       },
       "bubble": {
         "distance": 300,
         "size": 70,
         "duration": 2,
         "opacity": 8,
         "speed": 3
       },
       "repulse": {
         "distance": 500,
         "duration": 0.4
       },
       "push": {
         "particles_nb": 4
       },
       "remove": {
         "particles_nb": 2
       }
     }
   },
   "retina_detect": true
  });

     //Work filterizer

      $('.filter-container').filterizr();

      $('.work_menu ul li').on('click', function () {
      $('.work_menu ul li').removeClass('active')
       $(this).addClass('active')
      }) 


})