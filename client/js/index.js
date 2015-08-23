$(document).ready(function() {
    $("select").select2({
        minimumResultsForSearch: Infinity,
        width: 'resolve'
    });

    $('.slow-scroll a[href*=#]').on('click', function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 300);
    });
});

$(function() {
    $('.navbar-nav').on('click', function(){
        if($('.navbar-header .navbar-toggle').css('display') !='none'){
            $(".navbar-header .navbar-toggle").trigger( "click" );
        }
    });
});


