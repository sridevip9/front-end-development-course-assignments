$(document).ready(function() {
    console.log('working');
    $('.dropbtn').on('click', function() {
        var btn = $(this);
        var nav = btn.closest('nav');
        nav.find('.dropdown-content').slideToggle();
    });
    $('.mobile-collapse-toggle').on('click', function() {
        var btn = $(this);
        var nav = btn.closest('nav');
        nav.find('.mobile-collapse').slideToggle();
    });
});