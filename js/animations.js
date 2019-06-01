$(window).on("load", function() {
  $('#b1-1').toggleClass('animate');
  $('#b2-1').toggleClass('animate');
  $('#b3-1').toggleClass('animate');

  setInterval(function(){
     // toggle immediately
     $('#b1-1').toggleClass('animate');
     $('#b2-1').toggleClass('animate');
     $('#b3-1').toggleClass('animate');


     setTimeout(function(){
       // toggle after 0.6 seconds
       $('#b1-2').toggleClass('animate');
       $('#b2-2').toggleClass('animate');
       $('#b3-2').toggleClass('animate');
     },300);

     setTimeout(function(){
       // toggle after 0.6 seconds
       $('#b2-3').toggleClass('animate');
     },600);
  },2000);
});

$(".navbar-toggle").click(function() {
  $(".nav-items").toggleClass("active");
});
