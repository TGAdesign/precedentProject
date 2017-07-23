function initializeBxSlider() {
    $('.bxslider').bxSlider({
        pager: false
    });
}

function menuPin() {
    $('header').on('click','.menu-pin', function () {
        $(this).toggleClass('active');
        $('#menu').toggleClass('active');
    });
}


$(document).ready(function() {
    
    initializeBxSlider();
    menuPin();
    
});