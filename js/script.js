 /*--------preloader-------- */
 setTimeout(function(){
   $('#preloader').fadeOut()
 },2500)
 
 

 


 /*--------nav bar-------- */

 $(window).on('scroll',function(){
   var scrollamount = $(window).scrollTop()
   if(scrollamount > 100){
     $('.navbar').addClass('fixed')
   }else{
    $('.navbar').removeClass('fixed')
   }
 })


$(document).ready(function(){
    $(".nav-item").on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
})



 /*--------search part-------- */


 $(".abi").on('click',function(){
  $(".search-overlay").fadeIn()
})

$(".jabi").on('click',function(){
 $(".search-overlay").fadeOut()
})




/*---------banner slider----------- */


$('.slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span><i class="fas fa-long-arrow-alt-left prv"></i></span>',
    nextArrow: '<span><i class="fas fa-long-arrow-alt-right nxt"></i></span>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });




  /*--------mixitup-------- */

  var mixer = mixitup('.main');




  $(document).ready(function(){
    $('.tap').on('click',function(){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    })
  })


  $(".snake").snakeify();



  /*--------counter-------- */

  $('.counter').counterUp();



  /*--------scroll top-------*/

  $('.top-button').on('click',function(){
    $('html, body').animate({
      scrollTop: 0
    },1000)
  })


  /*----------top-button-invisible-----------*/
  $(window).on('scroll', function(){
    var scrollPos = $(window).scrollTop();

    if (scrollPos > 100) {
      $(".top-button").fadeIn(100);
    }else{
      $(".top-button").fadeOut(100);
    }
  });
    