

// function tellFortune(job_title,geographic_location,parents_name,number_of_children){
//     document.getElementById("demo").innerHTML=
//     "You will be a "+job_title+" in "+geographic_location+", "+" and married to "+parents_name+" with  "+number_of_children+" Kids.";
// }

// tellFortune('software engineer', 'Jordan', 'Alice', 3);





// function calculateDogAge( puppy_age ){
//  document.getElementById("demo").innerHTML=
//  "Your doggie is "+puppy_age*7+" years old in dog years!";
// }

// calculateDogAge(1);




// function calculateSupply(age, amount_per_year) {

//     let total_cups = 100 - age;
//     document.getElementById("demo").innerHTML =
//         "You will need " + total_cups * 365 * amount_per_year + " cups of tea to last you until the ripe old age of 100";
// }
// calculateSupply(30, 3);







// function double(cat) {
//   return 2 * x;
// }
//  // X is Undefined

// function double(7) {
//   return 2 * 7;
// }
// // you cannot give function number, only varibales

// function double('7') {
//   return 2 * 'x';
// }
//  // single cotation '' is not allowed as argument






// function double1(x) {
//     return 2 * x;
// }


// function double2(x) {
//     return 2 * x;
// }

// function double3(x) {
//     return 2 * x;
// }





// function cube(x) {
//     document.getElementById("demo").innerHTML =
//         "Cube(" + x  + ") is "+ x*x*x;
// }

// cube(4)





// function multiply(x, y) {
//     document.getElementById("demo").innerHTML = x * y;
// }
// multiply(3, 4);






// function canIGetADrivingLicense(age) {
//   let left_years=20-age;
//   if (age >= 20) {
//     document.getElementById("demo").innerHTML = "Yes you can";
//   }
//   else {
//     document.getElementById("demo").innerHTML = "Please come back after " + left_years + " years to get one";
//   }

// }

// canIGetADrivingLicense(21);
// canIGetADrivingLicense(17);





// function sameLength(srt1, str2) {
//   if (srt1.length == str2.length)
//     document.getElementById("demo").innerHTML = "True";
//   else
//     document.getElementById("demo").innerHTML = "False";

// }
// sameLength("tree","clue");
// sameLength("tree","car");



// function largerNubmer(x, y) {
//   let maximum = Math.max(x, y);
//   document.getElementById("demo").innerHTML = maximum;
// }
// largerNubmer(5,6);
// largerNubmer(5,3)






// function smallerNubmer(x, y, z) {

//   let first_smaller = x;

//   if (y < first_smaller)
//     first_smaller = y;

//   else if (z < first_smaller)
//     first_smaller = z;

//   document.getElementById("demo").innerHTML = first_smaller;
// }
// smallerNubmer(8,6,7);
// smallerNubmer(5, 99, 34);
// smallerNubmer(5,99,3)
// smallerNubmer(5,3,3)




// function shorterString(str1, str2, str3, str4, str5) {
//   let first_shorter = str1;

//   if (str2.length < first_shorter.length)
//     first_shorter = str2;

//   else if (str3.length < first_shorter.length)
//     first_shorter = str3;

//   else if (str4.length < first_shorter.length)
//     first_shorter = str4;

//   else if (str5.length < first_shorter.length)
//     first_shorter = str5;

//   document.getElementById("demo").innerHTML = first_shorter;
// }

// shorterString("air", "tr", "car", "github", "by");
// shorterString("air","tr","by","car","github");





// function longerString(str1, str2, str3, str4) {
//   let first_longer = str1;

//   if (str2.length > first_longer.length)
//     first_longer = str2;

//   if (str3.length > first_longer.length)
//     first_longer = str3;

//   if (str4.length > first_longer.length)
//     first_longer = str4;

//   document.getElementById("demo").innerHTML = first_longer;
// }

// longerString("air","schoo","car","github");



// function isEven(x) {
//   if (x % 2 == 0)
//     document.getElementById("demo").innerHTML = "true";
//   else
//     document.getElementById("demo").innerHTML = "false";
// }
// isEven(1);




// function isOdd(x) {
//   if (x % 2 != 0)
//     document.getElementById("demo").innerHTML = "true";
//   else
//     document.getElementById("demo").innerHTML = "false";
// }

// isOdd(1);



// function positive(x) {
//   if (x > 0)
//     document.getElementById("demo").innerHTML = x;
//   else
//     document.getElementById("demo").innerHTML = -x;
// }

// positive(-4);



// function fullName(firstName, lastName) {
//   document.getElementById("demo").innerHTML = firstName + " " + lastName;

// }
// fullName("Alex", "Mercer");



// function average(x1, x2, x3, x4, x5) {
//   let avg = (x1 + x2 + x3 + x4 + x5) / 5;
//   document.getElementById("demo").innerHTML = avg;
// }

// average(5, 7, 9, 3, 5);




// function randomNumber() {
//   document.getElementById("demo").innerHTML = Math.random();
// }

// randomNumber();



// function randomBetweenNumbers(x,y){
//   document.getElementById("demo").innerHTML = Math.random() * (y-x) + x;
// }
// randomBetweenNumbers(3,100);



// function scoreInUniversty(x) {
//   if (x >= 0 && x < 50)
//     document.getElementById("demo").innerHTML = "F";

//   else if (x >= 50 && x < 70)
//     document.getElementById("demo").innerHTML = "D";

//   else if (x >= 70 && x < 85)
//     document.getElementById("demo").innerHTML = "C";

//   else if (x >= 85 && x < 95)
//     document.getElementById("demo").innerHTML = "B";

//   else if (x >= 95 && x < 101)
//     document.getElementById("demo").innerHTML = "A";

// }

// scoreInUniversty(96);



/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/


// let counter1 = 0;
// function counter() {

//   document.getElementById("demo").innerHTML = ++counter1;

// }

// counter();
// counter();
// counter();







// function resetCounter() {
  
//   document.getElementById("demo").innerHTML = counter1 + " and the counter reset now";

//   counter1=0;
// }
// resetCounter();

// counter();