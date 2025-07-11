
// Javascript loops concept programs
// easy level programs

// Write a simple for loop that prints numbers from 1 to 5 to the console

function printNumbers(){
  for(let i=1;i<6;i++){
    console.log(i)
  }
}

printNumbers()

// Create a while loop that counts down from 5 to 20 and displays each number.

function displayNumbers(){
  let count = 5;
  while(count<21){
    console.log(count)
    count++
  }
}

displayNumbers()

// Use a do...while loop to run and continuously print the word “Hello” for 15times.

function showNumbers(){
  let count = 1;
  do{
    console.log("Hello-"+count)
    count++
  }
  while(count<=15);
}

showNumbers()

// Given an object with student names as property and their scores as values, use
// a for...in loop to display each student's name and score.
// Sample object: {
// Ram: 30,
// Shyam: 29
// }


function displayObjValues(obj){
  for(let i in obj){
    console.log(`Name is ${i} and Score is ${obj[i]}.`)
  }
}

let object = {
  Ram:30,
  Shyam:29
}


displayObjValues(object)


// Create an array of fruits, then use a for...of loop to display each fruit's name

function displayFruits(arr){
  for(let i of arr){
    console.log(`Fruit name is ${i}.`)
  }
}

let array = ["Apple","Mango","Banana","Guava","Pineapple","Watermelon"]


displayFruits(array)



