$(document).ready(function(){

     // Affichage etudes




     $("#b1").click(function(){
      $("#display").show();
      $("#display2").show();
      $("#b5").css({display:"block"});
      $("#b2").css({display:"block"});
      $("#other").css({display:"block"});
      $("#logo2").css({display:"block"});

    });


    $("#b2").click(function(){
      $("#display").hide();
      $("#display2").hide();
      $("#b2").css({display:"none"});
      $("#b5").css({display:"none"});
      $("#logo2").css({display:"none"});
      $("#other").css({display:"none"});


    });


    $("#b5").click(function(){
      $("#display3").toggle();
      $("#adresse").css({display:"block"});
      $("#logo2").animate({top:"5150px"},0);
      $("#b6").css({display:"block"});

    });


});
