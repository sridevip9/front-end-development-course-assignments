$(document).ready(function(){

$('.error').hide();

 $('.input-group').filter(":even").addClass('even');

$('#firstName').on('blur', function(){
	var input = $(this);
  
	if(input.val() === ''){
  	$(this).closest('div').find('span').fadeIn('error requiredMsg');
  }else{
  		$(this).closest('div').find('span').fadeOut('error requiredMsg');
  }
})
$('#lastName').on('blur', function(){
	var input1 = $(this);
  
	if(input1.val() === ''){
  	$(this).closest('div').find('span').fadeIn('error requiredMsg');
  }else{
  		$(this).closest('div').find('span').fadeOut('error requiredMsg');
  }
})

$('#emailAddress').on('blur', function(){
	var input2 = $(this);
  
	if(input2.val().indexOf('@') === -1 || input2.val().indexOf('.com')=== -1){
  	$(this).closest('div').find('span').fadeIn('error emailMsg');
  }else{
  		$(this).closest('div').find('span').fadeOut('error emailMsg');
  }
})
});