console.log("------#1------");
console.log("Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.");
let ages = [3,9,23,64,2,8,28,93]; // initialized ages array
console.log(ages);

console.log("\n");


console.log("------#1a------");
console.log("Programmatically subtract the value of the first element in the array from the value in the last element of the array");
console.log("First Element - Last Element of the array: " + ages.slice(-1) + " - " + ages[0] + " =");
console.log(ages.slice(-1) - ages.slice(0,1));

// slice(-1) negative index counts backwards
// slice(0,1) - start at position 0, end at position 1

console.log("\n");
console.log("------#1b------");
console.log("Add a new age to your array and repeat the step above to ensure it is dynamic.");

ages.push(33);
console.log("First Element - New Last Element of the array: " + ages.slice(-1) + " - " + ages[0] + " =");
console.log(ages.slice(-1) - ages.slice(0,1));

console.log("\n");
console.log("------#1c------");
console.log("Use a loop to iterate through the array and calculate the average age. ")

var sum = 0
for (let i = 0; i < ages.length; i++){
    sum += ages[i]; // adds each array item to sum
}
var avg = sum/ages.length;

console.log("Average age of the ages[ "+ ages +"]" + " array: ");
console.log(avg.toFixed(2)); // toFixed(2) rounds age to 2 decimal places

console.log("\n");

console.log("------#2------");
console.log("Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.");
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; // initialized names array

console.log(names);

console.log("\n");
console.log("------#2a------");
console.log("Use a loop to iterate through the array and calculate the average number of letters per name.*/");

let total = 0;
for (let i = 0; i < names.length; i++) {
    total += names[i].length; // adds each names array item length to total
}
console.log("Average length of names in names ["+names+"] array:");
console.log((total/names.length).toFixed(2)); // round average to 2 decimal places

console.log("\n");
console.log("------#2b------");
console.log("Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.");

for (let i = 0; i < names.length; i++){
   console.log(names.join(" ")); // use join method to concatenate
}

console.log("\n");
console.log("------#3------");
console.log("How do you access the last element of any array?");

//------EXAMPLES 
let numbers = [0,1,2,3,4,5];

console.log("To access the last element of an array we use array.slice(-1) to return the negative index of the array.\nOr we can also return the last element of the length of the array using array.length-1")
console.log(numbers.slice(-1) + " Using the array.slice method");
console.log(numbers.length-1 + " Using the array.length-1 method");


console.log("\n");
console.log("------#4------");
console.log("How do you access the first element of any array?")

console.log("To access the first element of an array, we use array[0] or array.slice(0,1)");
console.log(numbers[0]);
console.log(numbers.slice(0,1));


console.log("\n");
console.log("------#5------");
console.log("Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.\nFor example:\nnamesArray = ['Kelly', 'Sam', 'Kate'] //given this array\nnameLengths = [5, 3, 4] //create this new array");

let nameLengths = [];

for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length); // push method stores each name length to nameLengths array
}
console.log(names);
console.log(nameLengths);


console.log("\n");
console.log("------#6------");
console.log("Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.");

var sum = 0;

for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i]; // adds each nameLength array item length to sum
}
console.log(nameLengths);
console.log("The sum of all the elements in the nameLengths array is: \n" + sum);


console.log("\n");
console.log("------#7------");
console.log("Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).");

function wordMultiplier(word, n) {
    console.log(word + " repeated " + n + " times:");
    return console.log(word.repeat(n)); // word.repeat(n) - repeat method, concatenates word to itself n times
}

// test wordMultiplier function 
wordMultiplier("Test", 5);


console.log("\n");
console.log("------#8------");
console.log("Write a function that takes two parameters, firstName and lastName, and returns a full name.\nThe full name should be the first and the last name separated by a space.");

function getFullName(firstName, lastName) {
    return console.log("Full Name: " + firstName + " " + lastName); // concatenate firstname, space, lastname
}

// test getFullName function 
getFullName("Joenele", "Young");


console.log("\n");
console.log("------#9------");
console.log("Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");

function isGreaterThan100(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++){
         sum += array[i]; //adds each array item to sum
    }
    return console.log(sum > 100);
}

// test isGreaterThan100 function 
isGreaterThan100([2,99]);

console.log("\n");
console.log("------#10------");
console.log("Write a function that takes an array of numbers and returns the average of all the elements in the array.");

function arrayAvg(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i]; // adds each array item to sum
    }
    return console.log(sum/array.length); // calculate average
}

// test arrayAvg function 
arrayAvg([10, 20, 30]);

console.log("\n");
console.log("------#11------");
console.log("Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");

function isFirstArrayAvgGreater(array1, array2) {
    var sum1 = 0;
    var sum2 = 0;
    for (var i = 0; i < array1.length; i++){
        sum1 += array1[i]; // adds each array1 item to sum1
    }
    for (var j = 0; j < array2.length; j++){
        sum2 += array2[j];  // adds each array2 item to sum2
    }
    return console.log((sum1/array1.length) > (sum2/array2.length)); // compare averages
}

// test isFirstArrayAvgGreater function 
isFirstArrayAvgGreater([2,2,2], [3,3,3]);

console.log("\n");
console.log("------#12------");
console.log("Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");

function willBuyDrink(isHotOutside, moneyInPocket){
    return console.log((isHotOutside == true) && (moneyInPocket > 10.50));
}
console.log("Will I buy a drink?")

// test willBuyDrink function
willBuyDrink(true, 10.51); 


console.log("\n");
console.log("------#13------");
console.log("Create a function of your own that solves a problem.\nIn comments, write what the function does and why you created it.")

/*This function takes the price of each item purchased in an array, and the % discount to be applied. 
It adds all the prices up to a total and calculates the new balance after the discount has been applied.
This function solves the problem of manually calculating these totals, discounts and balances, and it is a real world application of how a Point of Sale system will work for store transactions.
*/
function discountOnTotal(itemPrices, discountPercentage){
    var sum = 0;
    
    for (var i = 0; i < itemPrices.length; i++){
        sum += itemPrices[i]; // adds each item price to sum
    }
    console.log("You just received " + discountPercentage + "% off $" + sum);
    console.log("New balance: $" + (sum - sum * (discountPercentage/100)));
}

// test discountOnTotal function 
discountOnTotal([50, 100, 50], 50);
