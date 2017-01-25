$(document).ready(function() {


    $('#btnShowModal').on('click', showDialog);

    function showDialog() {
        $('.overlay').fadeIn();
        $('.modal').slideDown();


        $('#btnClose').on('click', hideDialog);
        $('.overlay').on('click', hideDialog);
    }

    function hideDialog() {
        $('.overlay').fadeOut();
        $('.modal').slideUp();

        $('#btnClose').off('click', hideDialog);
        $('.overlay').off('click', hideDialog);

    }

});