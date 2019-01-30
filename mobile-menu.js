$(function(){
    "use strict"
    
    let isMenuShown = false;

    $('.mobile-menu-button').click(function(){
        if(!isMenuShown){
            $('#showedClickable').show("slow");
            $('main').css('padding-top', '0px')
            isMenuShown = true;
        }else{
            $('#showedClickable').hide("slow");
            $('main').css('padding-top', '68px')
            isMenuShown = false;
        }

    })
})