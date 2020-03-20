// Change the code shown below to be a String Concat Method

function myFunction () {
    let coffee = "French";
    let flavor = " " + "Vanilla";
    let order = coffee.concat(flavor); 
    alert(order);
    console.log(order); 
}

// Write the proper syntax to have the console.log method show the the following using templating:

let coffee = 3;
let chai = 10; 

console.log(`I have ${coffee}` + " " + "coffees."); 
console.log(`I also have ${chai}` + " " + "chais."); 
console.log(`I have a total of ${coffee + chai}` + " " + "drinks total."); 

// indexOf String Method: Find where 42 occurs

function myFunction() {

    let str = "Can you guess what is the index of 42 is? I am sure you will be surprised!";
    let answer = str.indexOf("42"); 
    console.log(answer);

};

// length method: Find how long the string is!

function myFunction() {

    let str = "Can you guess how long this string is? I am sure you will be surprised! (Hint:It is not 42.)";
    let answer = str + " " + str.length + " " + "characters long";
    console.log(answer);

};


// Replacing values in a string

function myFunction() {

    let str1 = "How you doin?";

    let str2 = str1.replace("doin", "doing"); 

    console.log(str2); 
  
  };

//   Using Trim Method for strings

function myFunction() {

    var str = "         SOCIAL DISTANCING!!!                    ";
  
    alert(str.trim());
  
  };

// toUpperCase

function myFunction() {

    let str = "social distancing!!";
  
    let res = str.toUpperCase;
  
    console.log(res);
  
  };


//   toLowerCase

function myFunction() {

    let str = "QuiEt VoICeS...PLEASE";
  
    let res = str.toLowerCase;
  
    console.log(res);
  
  }









