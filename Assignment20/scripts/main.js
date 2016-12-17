$(document).ready(function () {
    $('.error').hide();
    $('#yourname').on('blur', function () {
        var input = $(this);

        if (input.val() === '') {
            $(this).closest('div').find('span').fadeIn('error');
        } else {
            $(this).closest('div').find('span').fadeOut('error');
        }
    })
    $('#youranswer').on('blur', function () {
        var input = $(this);

        if (input.val() === '') {
            $(this).closest('div').find('span').fadeIn('error');
        } else {
            $(this).closest('div').find('span').fadeOut('error');
        }
    })
    
    $('#btnSubmit').on('click', function () {
        console.log('click');
        validateAllInputs();
    });

    $('#btnReset').on('click', function () {
        var allInputs = $('input, textarea')
       // consle.log(allInputs);
        allInputs.val('');
        allInputs.removeClass('invalid');
        $('.error,#messages,#successmsg').hide();
      //  $('#messages').hide();
      //  $('#successmsg').hide();
    });
});
   
    function validateRequiredInput(input) {
    var val = input.val();
    console.log(input);

    //Find the required input span.
    var msgSpan = input.closest('.input1').find('.error');
    if (val === '') {
        msgSpan.show();
        input.addClass('invalid');
    } else {
        msgSpan.fadeOut();
        input.removeClass('invalid');
    }
}

    function validateAllInputs() {

        var allInputs = $('input, textarea');


        for (var i = 0; i < allInputs.length; i++) {
            var currentInput = allInputs.eq(i);

            validateRequiredInput(currentInput);
        }

        var invalidInputCount = $('.invalid').length;

        if (invalidInputCount > 0) {
            $('#messages').html('Form is Invalid');
        } else {
            //$('.form-elements').fadeOut('slow', function () {

                updateAnswers();

                $('#successmsg').fadeIn().remove(allInputs.val(''));
            //});
        }
    }

    function updateAnswers(){
        //Reselect values;
        var html = '';
        /*
          html+='  <div class="answer3" >';
         html+='      <p> ' + ansewr + '</p>';
               <img src='images/man-159847_1280.png'alt='image'style="width:100px;height:100px;"/> </img>
               <div class="clear">
               </div>
               <h5> Joseph Doe </h5>
            </div>


        */




    }


   /* $('#btnSubmit').on('click', function () {
        validateAllInputs();
    });

    $('#btnReset').on('click', function () {
        var allInputs = $('input, textarea')
       // consle.log(allInputs);
        allInputs.val('');
        allInputs.removeClass('invalid');
        $('.error').hide();
        $('#messages').html('');
    });
    
*/