/*******Part 1***********/
//Place all of your part 1 code here
var myName = 'sridevi';
document.getElementById("partOne").innerHTML = myName;

/*******Part 2***********/
var foo = "This is a String";
foo = "This is not an integer";
document.getElementById("partTwo").innerHTML = foo;

/*******Part 3***********/

var partThree = 5;
partThree +=10;
partThree *= 14;
partThree -= 25;
document.getElementById("partThree").innerHTML = partThree;
/*******Part 4***********/
var fName = "John"
var lName = "Doe"
var fullName = fName + " "+lName;

document.getElementById("partFour").innerHTML = fullName;

/*******Part 5***********/

var myHtml = ' ';
 var h2 = "<h2>Title</h2>";
var p ="<p>Lorem ipsum dolor</p>";
var h3 = "<h3>Pellentesque habitant morbi</h3>";
var p2 = "<p>Morbi in sem quis dui placerat ornare. </p>"
myHtml += h2+p+h3+p2;
document.getElementById("partFive").innerHTML = myHtml;

/*******Part 6***********/
var part6Number = getRandomNumber();
var part6Result;
if(part6Number > 50){
  part6Result ='Above 50';
}else{
  part6Result ='Below or equal to 50';
}
document.getElementById("part6Number").innerHTML =part6Number;
document.getElementById("part6Result").innerHTML =part6Result;

/**
 *      Part 7
 */
var part7Number = getRandomNumber();
var part7Result;
if(part7Number<25){
  part7Result ='Below 25';
}else if(part7Number >= 25 && part7Number < 50){
  part7Result ="Between 25 and 50";
}else if(part7Number >= 50 && part7Number < 75){
  part7Result = 'Between 50 and 75';
}else{
 part7Result = "Above 75";
}
document.getElementById("part7Number").innerHTML =part7Number;
document.getElementById("part7Result").innerHTML =part7Result;

////////////////////////////////////////////////////////////////
//////Ignore everything below this line////////////////////////

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}
/**
 *      Part 8
 */
 var array = [1,2,3,4,5,6,7,8,9,10];
 console.log(array);

/**
 *      Part 9
 */
 for (var i=0;i<=10;i++){
   console.log(i);
 }