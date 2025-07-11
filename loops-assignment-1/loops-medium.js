// Javascript loops concept programs
// medium level programs


// Write a program that takes an array of strings and returns the total number of
// characters across all strings using a for...of loop.

const countChar = function(arr){
  for(let i of arr){
    console.log(`Character count for ${i} is ${i.length}.`)
  }
}

let stringArray = ["Chintu","Mey","Bujji","Tara","Sonu","Monu","Bunny","Chinni","Princy","Lusy"]


countChar(stringArray)

// Define and assign a constant variable with any number between 1 to 100, then
// use a do...while loop to simulate guessing that number until correct between 1 to 100.

const guessNumber = function(num){
  let guess = 1
  do{
    if(guess === num){
      console.log(`Guessing...the Number is ${guess}`)
      break
    }
    guess++
  } while (guess <= 100);
}


const variable = 10

guessNumber(variable)


// Write a program which prints 1 to 100 numbers. but will not print or skip the
// numbers which are divisible by 3 and 5;

const printNondivisibles = function(){
  for (let i=1;i<=100;i++){
    if(i%3===0 && i%5===0){
      continue
    } else{
      console.log(`Number is ${i}`)
    }
  }
}


printNondivisibles()


// Create an array of fruits (const fruits = [“Apple”, “Banana”, “Mango"]) and another
// array of (prices = [120, 30, 90]). Now console sentences with fruit name and its
// price in format using for loop “Fruit Name : price”.

const printFruits = function(fruits,price){
  for (let i=0;i< fruits.length;i++){
    console.log(`${fruits[i]} : ${prices[i]}/-`)
  }
}


const fruitArray = ["Banana","Apple","Mango","Custard Apple","Peach","Strawberry"]
const prices = [60,200,70,100,250,80]

printFruits(fruitArray,prices)

//  Create two arrays of numbers for example number1 = [2,3,4,87], and number2
// = [3,5,7,4,3]; now console the numbers which are present in both arrays using any loop.



const printCommonNum = function(arr1,arr2){
  let mergedArray = arr1.concat(arr2)
  const uniqueArray = new Set(mergedArray)
  for( let i of uniqueArray){
    if(arr1.includes(i) && arr2.includes(i)){
      console.log(i)
    }
  }
}


const numArray1 = [60,6,8,17,1,20]
const numArray2 = [60,20,7,10,25,8,5,17,1]

printCommonNum(numArray1,numArray2)