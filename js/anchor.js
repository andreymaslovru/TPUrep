// $('a[href^="#"]').click(function() { 
//     let anchor = $(this).attr('href');  
//     $('html, body').animate ({           
//         scrollTop:  $(anchor).offset().top  
//     }, 600);                           
// });

$(document).ready(function() {
    var margin = 0; 
    $("a").click(function() { 
       $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top+margin+ "px"
       }, {
          duration: 600, 
          easing: "swing"
       });
       return false;
    });
 });