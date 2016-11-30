$(document).ready(function(){

     ///// Code goes here
//part-1
$('#btnOne').on('click', update);
function update(){
  alert('hello');

}
//part-2
$('#btnTwo').on('click', function(){
    $('.update-html').html('New HTML')
    alert('Hello World');
});
//part-3
$('#btnThree').on('click', function(){
    $('#text-update').val('Hello World')
});

//part-4

$('#btnCopyHtml').on('click', function(){
    //$('.copy-html').html()
    var copiedHtml =   $('.copy-html').html()
    $('.paste-html').html(copiedHtml)
});
// part-5

$('#btnCopyValues').on('click',function(){
    var copiedValue = $('#copy-text').val()
    $('#paste-text').val(copiedValue)
});


});