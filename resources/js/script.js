/*eslint-env jquery*/ //чтобы brackets понял что дальше идёт jquery
 $(document).ready(function() {

     /*for sticky navigation*/
     $('.js--section-features').waypoint(function(direction) { /*direction - if user scrolls up or scrolls down*/
        if (direction == "down") {
            $('nav').addClass('sticky'); /*if user scrols down, sticky class will be added to nav element*/
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
  offset: '60px;'
     });


     /*scroll on buttons*/
     $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 2000);
     });

     $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
     });

     /* Navigation scroll */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


     /*Animations on scroll*/

     $('.js--wp-1').waypoint(function(direction) { /*$('. ... выбираем*/
         $('.js--wp-1').addClass('animated fadeIn');
     }, {
         offset: '50%'
     });

     $('.js--wp-2').waypoint(function(direction) { /*$('. ... выбираем*/
         $('.js--wp-2').addClass('animated fadeInUp');
     }, {
         offset: '50%'
     });

     $('.js--wp-3').waypoint(function(direction) { /*$('. ... выбираем*/
         $('.js--wp-3').addClass('animated fadeIn');
     }, {
         offset: '50%'
     });

     $('.js--wp-4').waypoint(function(direction) { /*$('. ... выбираем*/
         $('.js--wp-4').addClass('animated pulse');
     }, {
         offset: '50%'
     });

     $('.js--wp-5').waypoint(function(direction) { /*$('. ... выбираем*/
         $('.js--wp-5').addClass('animated swing');
     }, {
         offset: '50%'
     });

     /*MOBILE NAVIGATION*/

     $('.js--nav-icon').click(function() {
         var nav = $('.js--main-nav');
         var icon = $('.js--nav-icon i');

         nav.slideToggle(200); /*slideToggle - open and close box method*/

         if (icon.hasClass('ion-navicon-round')) {
             icon.addClass('ion-close-round');
             icon.removeClass('ion-navicon-round');
         } else {
             icon.addClass('ion-navicon-round');
             icon.removeClass('ion-close-round');
         }

     });

 });



/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window')
}, {
  offset: '25%'
})

*/



/*
$(document).ready(function() {

   $('h1').click(function() {
      $(this).css('background-color', '#ff0000');//this means h1
   })


});
*/
