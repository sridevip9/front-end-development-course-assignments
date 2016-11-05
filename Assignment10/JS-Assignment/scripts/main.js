  var array =[];
 
 function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);

    var myName=getElm("p1_fullName");
    myName.innerHTML = "p1_fullName";
   
    var p1_fullName = firstName+lastName;
   
   getElm('p1_fullName').innerHTML= p1_fullName;
    if(firstName!=='' && lastName!==''){      
        getElm('p1_valid').innerHTML = true;
    }else {
        getElm('p1_valid').innerHTML = false;
    }
     var fnlength = p1_fullName.length;
     getElm("p1_fullNameLength").innerHTML=fnlength;

    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
    var email=getElm("p2_email");
      email.innerHTML = "p2_email";
    var email=emailAddress;
    getElm("p2_email").innerHTML=email;
    if((email.indexOf('@') > -1) === true){
        getElm('p2_valid').innerHTML = true;
    }else{
        getElm('p2_valid').innerHTML = false;
    }
    var emaillength =email.length;
    getElm('p2_emailLength').innerHTML=emaillength;
    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
    var num =getElm("p3_number");
    num.innerHTML= "p3_number";
    var num = randomNumber;
    
    getElm("p3_number").innerHTML=num;
    console.log(num);
    console.log(parseInt(num) !== NaN);

//var numb = parseInt(num);


   if(num > 0){
    getElm('p3_valid').innerHTML = true;
   }else{
       getElm('p3_valid').innerHTML = false;
   }
    // Part 4
    //var array =[];
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
    array.push(arrayInput);
    //var array=getElm('arrayValue');
    //array.innerHTML='arrayValue';
   //var array = arrayValue.length;
   getElm('p4_valid').innerHTML=array;
   getElm('p4_arraylength').innerHTML= array.length;








    ////////////////////////Youre code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}