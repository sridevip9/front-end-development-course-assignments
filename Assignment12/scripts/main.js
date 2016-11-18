
/*document.getElementById("submit").addEventListener('click', function(){
    alert("You clicked submit");
});
 var btnUpdate = function(){
  alert('you clicked submit');

 }

document.getElementById("reset").addEventListener('click',function (){
    alert("You clicked reset");
});
 var btnUpdate1 = function(){
  alert('you clicked reset');

 }

var messages=[];
function update(){
      var firstName = getValue('firstName');
      //var fnam= document.getElementById('firstName').value;
      var lastName =getValue("lastName");
      var emailAddress= getValue('EmailAddress');
      var  password= getValue('password');
      var confirmPassword=getValue('confirmPassword');
     if(firstName !== "" ){
         alert("First Name is filled out");
     }else {
         messages.push("First Name is required");
     }  
    if(lastName !== "" ){
         alert("Last Name is filled out");
     }else {
         messages.push("Last Name is required");
     } 
     if(emailAddress !== "" ){
         alert("EmailAddress is Filled out");
     }else {
         messages.push("EmailAddress is required");
     } 
     if(password !== "" ){
         alert("password is Filled out");
     }else {
         messages.push("password is required");
     } 
     if(confirmpassword !== "" ){
         alert("confirmpassword is Filled out");
     }else {
         messages.push("confirmpassword is required");
     }  
 
   
   var html = "<ul>";
    for( var i = 0; i < messages.length; i++){
        html = html + '<li>' + messages[i] + '</li>'
    }
    html = html + '</ul>';
    document.getElementById("error-list").innerHTML=html;
}

*/
var btn = getElm('btnsubmit');
btn.addEventListener("click", submit);

var btn2 = getElm('btnreset');
btn2.addEventListener("click", reset);

var inputs = ['firstName','lastName','emailAddress','password','confirmPassword'];
var Error_class = "invalid";
function submit(){
    var elm;
    var errorList =[];
    for(var i=0;i<inputs.length;i++){
        elm =getElm(inputs[i]);
        console.log(elm);
        if(elm.value === ""){
        errorList.push(elm.placeholder + " Is required ");
        elm.classList.add(Error_class);
        }else{
         elm.classList.remove(Error_class);
        }
    }
    var password = getElm('password').value;
    var confirmPassword = getElm('confirmPassword').value;
    if(password !== confirmPassword){
        errorList.push('password do not match');
    }
    
    var email =getElm('emailAddress');
    if(email.value.indexOf('@') == -1){
        errorList.push('Enter a Valid emailAddress');
    }

   var html;
   if(errorList.length > 0){
       console.log("errorList > 0")
       html = "<ul class='errors'><li>"+ errorList.join("</li><li>")+"</li></ul>";
       //html = 'hello world';
}else{
       html = "<h1> Thank you for submitting form </h1>";
       reset();
   }
    console.log(html);
    console.log(getElm('messages'))
       getElm('messages').innerHTML = html;
    console.log(getElm('messages').innerHTML)
       

}    

   function reset(){
       console.log('reset')
       for (var i=0;i<inputs.length;i++){
           var elm = getElm(inputs[i]);
           elm.value = "";
           elm.classList.remove(Error_class);
       }
       getElm('messages').innerHTML = "";
   }




//var btn = document.getElementById('btnUpdate');
//btn.addEventListener('click', update);

//function getValue(id) {
//    return getElm(id).value;
//}

function getElm(id) {
    return document.getElementById(id);
}