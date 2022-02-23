$(function(){

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      console.log("value = " + $(this).scrollTop());
      $("#navCustom").css("position", "fixed");
      $("#navCustom").css("background-color", "#333");
    }
    else if($(this).scrollTop() == 0) {
      console.log("value = " + $(this).scrollTop());
      $("#navCustom").css("position", "relative");
      $("#navCustom").css("background-color", "#3333333");

    }
  })

$("#open-menu").click(function(){
  $("#sidebar-menu").animate({right:'0px'},100);
})

$("#close-icon").click(function(){
  $("#sidebar-menu").animate({right:'-240px'},100);
})






})