var messages=[];
function update(){
      var firstName = getValue('firstName');
      var lastName =getValue("lastName");
      var emailAddress = getValue('emailAddress');
        
     if(firstName === "" ){
         messages.push("FirstName is required");
     }     

     if(lastName === "" ){
         messages.push("lastName is required");
     } 

     if(emailAddress === "" ){
          messages.push("emailAddress is required");
     } 

    // for(var i=0;i<messages.length;i++){
     var html = "<ul>";
    for( var i = 0; i < messages.length; i++){
        html = html + '<li>' + messages[i] + '</li>'
    }
    html = html + '</ul>';
   
  //   var nomessages="";
   //   nomessages+=messages[i];
console.log(html);
       document.getElementById("error-list").innerHTML=html;
}
var user ={
    firstname:"sridevi",
    lastname:" devi",
    email:"abcd@yahoo.com",
    fullname: function(){
        this.firstname+ " "+lastname
    }
};
document.getElementById("firstName").innerHTML=user.firstname;
document.getElementById("lastName").innerHTML=user.lastname;
document.getElementById("emailAddress").innerHTML=user.email;
console.log(user.fullname());
// /////////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}