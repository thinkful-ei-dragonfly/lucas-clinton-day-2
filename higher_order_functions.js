'use strict';

// Repeat Drill

function repeat(fn, n) {
  let i = 0;
  while (i < n) {
    fn();
    i++;
  }
}
function hello() {
  console.log('Hello world');
}
function goodbye() {
  console.log('Goodbye world');
}
// repeat(hello, 6);
// repeat(goodbye, 5);


// Functions as Arguments

function filter(arr, fn) {
  // TASK: Define your function here
  let newArray = [],
    i = 0;
  while (i < arr.length) {
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
    i++;
  }

  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that
  // only returns a boolean
  return name[0] === 'R';
});

// console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


// Function as return value

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return (function(location){
    warningCounter++;
    // console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    // console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    if (warningCounter === 1) {
      console.log(`DANGER! There is ${typeOfWarning} hazard at ${location}`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    }
    else {
      console.log(`DANGER! There is ${typeOfWarning} hazard at ${location}`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }

  });
}
const rocksWarning = hazardWarningCreator('Rocks on the road');
const rainWarning = hazardWarningCreator('Road is slippery');
const fogWarning = hazardWarningCreator('Low visibility');

fogWarning('2nd Avenue');
fogWarning('PCH');
fogWarning('El Camino Real');
rainWarning('34th street');
rocksWarning('everywhere');
// ^^^ This somehow passed in the second 'location' argument, but not sure how it works exactly


// forEach, filter, and Map

function turtleSteps(arr){
  let steps = arr.filter(move => ((move[0] >= 0) && (move[1] >= 0)))
    .map(move => move[0] + move[1])
    .forEach(function(key, i){
      // console.log(`Movement #${i+1}: ${key} Steps`);
    });
}
turtleSteps([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);


// Reduce
function constructWords(sentence, word){
  if (word.length === 3) {
    return sentence += ' ';
  } else {
    let newWord = word[word.length-1].toUpperCase();
    return sentence += newWord;
  }
}

function decodeSentence(string){
  let wordArray = string.split(' ');

  return wordArray.reduce(constructWords, '');
}
let decodedResult = decodeSentence('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest');
console.log(decodedResult);
