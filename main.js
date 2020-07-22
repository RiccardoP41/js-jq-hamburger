// $(".header-right>a:last").click(function(){
//     $(".hamburger-menu").show("fast");
// });
// $(".close>.fa-times").click(function(){
//     $(".hamburger-menu").hide("fast");
// });


// ***CON add/removeClass***
$(".header-right>a:last").click(function(){
    $(".hamburger-menu").addClass("active");
});
$(".close>.fa-times").click(function(){
    $(".hamburger-menu").removeClass("active");
});
