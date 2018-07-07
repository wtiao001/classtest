function tabs(){

$('.tab').click(function(){
$(this).addClass('active');
    
      
    if ($('#about').hasClass('active') ){
        $('#tab1').css("display", "block");
        $('#tab2').css("display", "none");
        $('#tab3').css("display", "none");
        $('#tab4').css("display", "none");
        $('#about').removeClass('active');
    }
    if ($('#photos').hasClass('active') ){
        $('#tab1').css("display", "none");
        $('#tab2').css("display", "block");
        $('#tab3').css("display", "none");
        $('#tab4').css("display", "none");
        $('#photos').removeClass('active');
    }
    if ($('#projects').hasClass('active') ){
        $('#tab1').css("display", "none");
        $('#tab2').css("display", "none");
        $('#tab3').css("display", "block");
        $('#tab4').css("display", "none");
        $('#projects').removeClass('active');
    }
    if ($('#contact').hasClass('active') ){
        $('#tab1').css("display", "none");
        $('#tab2').css("display", "none");
        $('#tab3').css("display", "none");
        $('#tab4').css("display", "block");
        $('#contact').removeClass('active');
    }
    
    
    

});

}