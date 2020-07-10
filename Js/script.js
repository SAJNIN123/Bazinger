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
})