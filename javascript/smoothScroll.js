$(".music").click(function() {
    $('html, body').animate({
        scrollTop: $("#music").offset().top-180
    }, 500);
});

$(".discography").click(function() {
    $('html, body').animate({
        scrollTop: $("#discography").offset().top-180
    }, 500);
});

$('.events').click(function() {
    $('html, body').animate({
        scrollTop: $("#events").offset().top-180
    }, 500);
});

$('.about').click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top-180
    }, 500);
});

$('#title').click(function(event) {
    event.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 0);
});