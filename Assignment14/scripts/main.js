var btn = getE("btnsubmit");
btn.addEventListener('click', submit);

var btn2 = getE("btnreset");
btn2.addEventListener("click",reset);

var inputs = ["firstName","lastName","emailAddress","password","confirmPassword","About"];
var Error_class = "invalid";
function submit(){
  var elm;
  var errorList =[];

  for (var i=0;i<inputs.length;i++){
      elm = getE(inputs[i]);
//      console.log(elm);
    if( elm.value === ""){
        errorList.push(elm.placeholder + 'is required');
        elm.classList.add(Error_class);
    }else{
         elm.classList.remove(Error_class);
    }

  }
    var password = getE('password').value;
    var confirmPassword = getE('confirmPassword').value;
    if(password !== confirmPassword){
      errorList.push('passwords do not match');
    }

    var email = getE('emailAddress');

    if(email.value.indexOf('@') == -1){
       errorList.push('Enter a valid email');
    }

    var time = getE('Timezone');
    if( time.value === ''){
      time.classList.add(Error_class);
      errorList.push('Timezone is rquired');
    }else{
      time.classList.remove(Error_class);
    }

    var terms = getE('terms');
    if(terms.checked === false){
      errorList.push('You must accept terms and conditions')
    }


    var html;
    if(errorList.length > 0){
      html = " <ul class='errors'><li>" + errorList.join("</li><li>") + " </li></ul>"
    }else{
      html = "<h1> Thank you for registering form</h1>"
      reset();
    }
    getE('messages').innerHTML = html;
    
}
     
     function reset(){
    for(var i = 0;i < inputs.length;i++){
      var elm = getE(inputs[i]);
      elm.value = " ";
      elm.classList.remove(Error_class);
    }


   getE('messages').innerHTML = "";
   getE('Timezone').vaue = "";
   getE('terms').checked = false;

     }



function getE(id){
   return  document.getElementById(id);
}