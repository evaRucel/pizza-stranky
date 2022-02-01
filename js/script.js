(function($){
  $(function(){
      
      /* Scroll to sections */
      $(".jq--scroll-our-pizza").click(function(){
         $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000);
      });
      
      $(".jq--scroll-about-pizza").click(function(){
         $("html, body").animate({scrollTop: $(".jq--about-pizza").offset().top}, 1500);
      });
      
      $(".jq--scroll-references").click(function(){
         $("html, body").animate({scrollTop: $(".jq--references").offset().top}, 1500);
      });
      
      $(".jq--scroll-photogallery").click(function(){
         $("html, body").animate({scrollTop: $(".jq--photogallery").offset().top}, 1500);
      });
      
      $(".jq--scroll-contact-form").click(function(){
         $("html, body").animate({scrollTop: $(".jq--contact-form").offset().top}, 1500);
      });

          /* Scroll buttons to sections */
          $(".jq--scroll-button-first").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000);
         });
         
         $(".jq--scroll-button-second").click(function(){
            $("html, body").animate({scrollTop: $(".jq--references").offset().top}, 1500);
         });

  //rozbalenie menu
         $(".jq--nav-icon").click(function(){
          $(".nav-background").fadeToggle();
          $(".mobile-nav-back").fadeToggle();
          $("nav ul").fadeToggle();
         });

        /* Change hamburger to cross vice versa */
       $(".jq--image-hamburger").click(function(){
  
        if($(".jq--image-hamburger").attr("src") == "img/hamburgerMenu.png")
        {
            $($(".jq--image-hamburger").attr("src","img/crossMenu.png"));
        } 
        else 
        {
            $($(".jq--image-hamburger").attr("src","img/hamburgerMenu.png"));
        }  
    });

  

      
  }); 
})(jQuery);















