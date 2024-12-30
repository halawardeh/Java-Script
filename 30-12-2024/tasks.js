

/*
task 1 :
let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/

// let x=500;
// if (x >= 4000) {
//     x = x * .025;
//     document.write("Al-zakat of your money is " + x);
// }
// else {
//     document.write("You do not have to pay Al-zakat, you poor man.")
// }



/*
task:2
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]
 ["Str" "alex","moh"
 'the','fox' 'over' lazy, 'dog',  ]

*/

// let numbers = [1, 7, 9, 45, ""];
// let words = ["Str", "alex", "moh", 'the', 'fox', 'over', lazy, 'dog', ""];



/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/

// var fruits = ["Tomato", "Banana", "Watermelon"]
// document.write(fruits.indexOf("Tomato"));
// document.write(fruits.indexOf("Banana"));



/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
// let myFaviotes= ["Stuffed grape leaves","walking","Attack on Titan" ];



/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
// let myFaviotes= ["Stuffed grape leaves","walking","Attack on Titan" ]
//     let x= myFaviotes[0];
//     document.write(x);



/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
// let myFaviotes = ["Stuffed grape leaves", "walking", "Attack on Titan"]
// let x = myFaviotes[myFaviotes.length - 1];
// document.write(x);



/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
// var array = [0,5,7,9]

// array.shift();
// array.shift();
// array.shift();
// array.push(10);
// array.unshift(1,3,4,6,8);
// array.push(22);
// array.pop();
// console.log(array);



/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
// let array2 = []

// array2.unshift(22, 5, 9, -7, 22);
// array2.shift();
// array2.pop();
// array2.push(3.5);
// console.log(array2);



/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// arr1.sort(function(a, b){return a - b});
// document.write(arr1);



// 9.
// Write a JavaScript function that returns rate as text
// less than 50 return ==> Fail
// equal or between 50 and 59 ===> E
// equal or between 60 and 69 ===> D
// equal or between 70 and 79 ===> C
// equal or between 80 and 89 ===> B
// equal or between 90 and 100 ===> A

// let x = 70;
// if (x < 50) {
//     document.write("Fail");
// }
// else if (x >= 50 && x < 60) {
//     document.write(" E");
// }
// else if (x >= 60 && x < 70) {
//     document.write(" D");

// }
// else if (x >= 70 && x < 80) {
//     document.write(" C");

// }
// else if (x >= 80 && x < 90) {
//     document.write(" B");

// }
// else if (x >= 90 && x < 100) {
//     document.write(" A");

// }

// else {
//     document.write("wrong input");

// }


/*
10.
Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/

// let x = 8;
// for (let i = 1; i <= x; i++) {
    
    
//     for (let j = 1; j < i; j++) {
//         document.write(j + " ");

//     }
//     document.write("<br>");
// }