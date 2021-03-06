/*
Gradebook from Names and Scores
I worked on this challenge [by myself, with:]
This challenge took me [#] hours.
You will work with the following two variables.  The first, students, holds the names of four students.
The second, scores, holds groups of test scores.  The relative positions of elements within the two
variables match (i.e., 'Joseph' is the first element in students; his scores are the first value in scores.).
Do not alter the students and scores code.
*/
var students = ["Joseph", "Susan", "William", "Elizabeth"]

var scores = [ [80, 70, 70, 100],
               [85, 80, 90, 90],
               [75, 70, 80, 75],
               [100, 90, 95, 85] ]

// __________________________________________
// Write your code below.

// var gradebook = new Object();

// gradebook.Joseph = new Object();
// gradebook.Susan = new Object();
// gradebook.William = new Object();
// gradebook.Elizabeth = new Object();

// gradebook.Joseph.testScores = scores[0];
// gradebook.Susan.testScores = scores[1];
// gradebook.William.testScores = scores[2];
// gradebook.Elizabeth.testScores = scores[3];


// gradebook.addScore = function(name, score) {
//   var student = gradebook[name];
//   student.testScores.push(score);
//   return student.testScores;
// }

// gradebook.getAverage = function(name) {
//   var student = gradebook[name];
//   return average(student.testScores);
// }

// // // SET variable total to 0
// // // FOR each number in the array
// // //   total equals total plus number
// // //   variable average = total divided by length of the array
// // //   RETURN average

// function average(array) {
//   var total = 0;
//   array.forEach(function(number) {
//     total += number;
//   });
//   var average = total/array.length;
//   return average;
// }


// __________________________________________
// Refactored Solution

var gradebook = new Object();

for (var i = 0; i < students.length; i++) {
  gradebook[students[i]] = new Object();
  gradebook[students[i]].testScores = scores[i];
}

gradebook.addScore = function(name, score) {
  return gradebook[name].testScores.push(score);
}

gradebook.getAverage = function(name) {
  return average(gradebook[name].testScores);
}

// // SET variable total to 0
// // FOR each number in the array
// //   total equals total plus number
// //   variable average = total divided by length of the array
// //   RETURN average

function average(array) {
  var total = array.reduce(function(a, b) {
    return a + b;
  });
  return total/array.length;
}





// __________________________________________
// Reflect

// What did you learn about iterating over nested objects in JavaScript?
  // The Rules of iterating over the hash are not as felexable, so it makes it a bit easier I feel. You just have to remember the the rules and try to apply them to your problem.
// Were you able to find useful methods to help you with this?
  // I did not know that we could use .notation on [] functions
  // Also using a for loop in a hash like this.
// What concepts were solidified in the process of working through this challenge? I always
  // Doing more iteration is very helpful for me. Also it gave me a better understanding of not hard coding a interation.


// __________________________________________
// Test Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}



assert(
  (gradebook instanceof Object),
  "The value of gradebook should be an Object.\n",
  "1. "
)

assert(
  (gradebook["Elizabeth"] instanceof Object),
  "gradebook's Elizabeth property should be an object.",
  "2. "
)

assert(
  (gradebook.William.testScores === scores[2]),
  "William's testScores should equal the third element in scores.",
  "3. "
)

assert(
  (gradebook.addScore instanceof Function),
  "The value of gradebook's addScore property should be a Function.",
  "4. "
)

gradebook.addScore("Susan", 80)

assert(
  (gradebook.Susan.testScores.length === 5
   && gradebook.Susan.testScores[4] === 80),
  "Susan's testScores should have a new score of 80 added to the end.",
  "5. "
)

assert(
  (gradebook.getAverage instanceof Function),
  "The value of gradebook's getAverage property should be a Function.",
  "6. "
)

assert(
  (average instanceof Function),
  "The value of average should be a Function.\n",
  "7. "
)
assert(
  average([1, 2, 3]) === 2,
  "average should return the average of the elements in the array argument.\n",
  "8. "
)

assert(
  (gradebook.getAverage("Joseph") === 80),
  "gradebook's getAverage should return 80 if passed 'Joseph'.",
  "9. "
)




