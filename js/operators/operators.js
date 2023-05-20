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