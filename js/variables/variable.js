//create variable
var firstName = "Navod";
var lastName = "Wimalaweera";
var age = 26;
var isOk = true;
var job, height;

//print variable
console.log(firstName);
//print variable with string
console.log("My name is " + firstName + " " + lastName);
//type coercion
console.log("My age is " + age);
console.log("It is " + isOk);
console.log("I am a " + job);

//get variable type
console.log(typeof(lastName));

//define
job = 'Doctor';

//variable Mutation
lastName = 'Fernando';
console.log('I am ' + lastName +' ' +'I am a '+ job);

 //display an alert
 alert('My name is ' + lastName+' '+'I am '+age +' '+'years old.');

 //get user input
 height = prompt('What is your height? ');
 alert('My height is ' + height + ' feet.');