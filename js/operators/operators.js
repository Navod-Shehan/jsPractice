//--------------------------
//---Arithmatic Operators---
//--------------------------

//single operator
var myAge, yourAge, year, result;
myAge = 26;
yourAge = 20;
year = 2021;

//substraction
result= year - myAge;
console.log('I was born in '+result);

//Addition
result = year +10;
console.log('After 10 years, it will be '+result);

//multiplication
result = myAge * yourAge;
console.log('product of our ages is '+ result);

//division
console.log('division of ages '+ (myAge/yourAge));
// --------------------------------
// ------Arithmetic Operators------
// --------------------------------

// --Single Operators--
var myAge, yourAge, year, result;
myAge = 26;
yourAge = 20;
year = 2021;

// Substraction
result = year - myAge;
console.log('I was born in '+result);

// Addition
result = year + 10;
console.log('After 10 years, It will be '+result);

// Multiplication
result = myAge * yourAge;
console.log('Product of our ages '+result);

// Division
console.log('Division of our ages '+(myAge/yourAge));

// Modulus
console.log('Modulus of our ages '+(myAge%yourAge));

// Exponentiation
console.log('Exponent of my age '+(myAge**2));

// Increment
console.log(myAge++);
console.log('Post Increment of my age '+myAge);

console.log(++myAge);
console.log('Pre Increment of my age '+myAge);

// Decrement
console.log(myAge--);
console.log('Post Decrement of my age '+myAge);

console.log(--myAge);
console.log('Pre Decrement of my age '+myAge);


// --Operator Precedence--
var cal = (20+30)/10+4.5-2*4**2;
console.log(cal);

// --Multiple Operators--
var ans1, ans2;
ans1 = ans2 = (((30+40-29)*2)/8)**4; // Assignment operator | right to left
console.log(ans1+' | '+ans2);
//modules
console.log('modules of ages '+ (myAge%yourAge));

//exponent
console.log('exponent of my age '+ (myAge**3));

//Increment
console.log(myAge++);

// Equal
var myName = 'Kasun';
console.log(myName);

// Addition with equal
var age = 24;
age += 10; // age = age + 10
console.log(age);

// Substraction with equal
age -= 10;
console.log(age);

// Multiplication with equal
age *= 10;
console.log(age);

// Division with equal
age /= 4;
console.log(age);

// Modulus with equal
age %= 13;
console.log(age);

// Exponentiation with equal
age **= 2;
console.log(age);

// --------------------------------
// -----Comparison Operators-------
// --------------------------------

var a = 20;
var b = '20';
var c = 5;
var d = 15;

// Equal to
if(a == b){
    // Equal value and equal type
    if(a === b){
        console.log('Both value and type of a is equal to b');
    }
    // Not equal value or not equal type
    else if(a !== b){
        console.log('Only value or type of a is equal to b');
    }
}
// Greater than or equal to
else if(a >= 10){
    // Greater than
    if(a > 10){
        console.log('a is greater than 10');
    }
    // Equal to
    else if(a == 10){
        console.log('a is equal to 10');
    }
}
// Not equal
else if(a != c){
    // Less than
    if(a < c){
        console.log('a is less than c');
    }
    else{
        console.log('a is greater than c');
    }
}
else{
    // Less than or equal to
    if(c <= d){
        // if(c <= 5){
        //     console.log('c is less than or equal to 5');
        // }
        // else{
        //     console.log('c is greater than to 5');
        // }
        
        // Ternary operator
        c <= 5 ? console.log('c is less than or equal to 5') : console.log('c is greater than to 5');
    }
    else{
        console.log('c is greater d');
    }
}


var e = 20;
var f = 10;
var g = 5;

// And
if(e == 10 && e == f){
    console.log('It is good');
}
// Or
else if(e > 10 || g > f){
    console.log('It is ok');
}
// Not
else if(e != g){
    console.log('It is normal');
}
else{
    console.log("It is bad");
}