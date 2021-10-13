$(function(){    
      // mixitup
    var containerEl = document.querySelector('.project-main');
    var mixer = mixitup(containerEl);
              
      //counter
      $('.counter').counterUp({
        delay: 10,
        time: 2000
      });
      $('.counter').addClass('animated fadeInDownBig');
      $('h3').addClass('animated fadeIn');
      //counter slide
      // $('.counter-main').slick({
      //   infinite: true,
      //   autoplay:true,
      //   slidesToShow: 3,
      //   speed: 300,
      //   slidesToScroll: 1,
      //   arrows:false,
      // });
      $('.testimonials-main').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
        ]
      });
      new WOW().init();
    
    });