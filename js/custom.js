$(document).ready(function () {
    $(".search-click").click(function () {

        //$( ".show-search" ).toggleClass( "d-block" );
        $(".show-search").fadeToggle("fast", "linear");
    })

    $(".navbar-toggler").click(function () {
        $("body").addClass("open-sidebar-nav");
    })

    $("#close-sidebar-nav").click(function () {
        $("body").removeClass("open-sidebar-nav");
    })

    $('.menu li ul').parent().addClass('hasChild');
    $(".hasChild ul").hide();
    $(".hasChild").click(function(){
        $(this).children("ul").stop(true,true).slideToggle("fast"),
        $(this).toggleClass("dropdown-active");
    }); 


    $('.owl-slider').owlCarousel({
        items: 1,
        loop: true,
        lazyLoad: true,
        autoplay: true,
        autoplayHoverPause: true,
        dots: false,
        smartSpeed: 1000,
        
    });

    $('body').on('mouseenter mouseleave','.dropdown',function(e){
        var _d=$(e.target).closest('.dropdown');
        if (e.type === 'mouseenter')_d.addClass('show');
        setTimeout(function(){
          _d.toggleClass('show', _d.is(':hover'));
          $('[data-toggle="dropdown"]', _d).attr('aria-expanded',_d.is(':hover'));
        },300);
      });
      
      /* this is not needed, just prevents page reload when a dd link is clicked */
      $('.dropdown a').on('click tap', e => e.preventDefault())



		// grab the initial top offset of the navigation 
        var stickyNavTop = $('.navbar').offset().top;
		   	
        // our function that decides weather the navigation bar should have "fixed" css position or not.
        var stickyNav = function(){
         var scrollTop = $(window).scrollTop(); // our current vertical position from the top
              
         // if we've scrolled more than the navigation, change its position to fixed to stick to top,
         // otherwise change it back to relative
         if (scrollTop > stickyNavTop) { 
             $('.navbar').addClass('sticky');
         } else {
             $('.navbar').removeClass('sticky'); 
         }
     };

     stickyNav();
     // and run it again every time you scroll
     $(window).scroll(function() {
         stickyNav();
     });


     
     $(document).on('click', '#pills-tab a', function(e) {
        otherTabs = $(this).attr('data-secondary').split(',');
        for(i= 0; i<otherTabs.length;i++) {
          nav = $('<ul class="nav d-none" id="tmpNav"></ul>');
          nav.append('<li class="nav-item"><a href="#" data-toggle="tab" data-target="' + otherTabs[i] + '">nav</a></li>"');
          nav.find('a').tab('show');
        }
      });

      $('.owl-testimonial').owlCarousel({
        items: 1,
        loop: true,
        lazyLoad: true,
        autoplay: true,
        autoplayHoverPause: false,
        smartSpeed: 1000,
        dots:false,
        
        
    });
    $('.owl-favourite').owlCarousel({
        
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 3
            }
        },
        
        loop: true,
        lazyLoad: true,
        autoplay: true,
        autoplayHoverPause: false,
        smartSpeed: 1000,
        dots:false,
        
        
    });
});



	