// Javascript loops concept programs
// hard level programs


// Write a program to console below pattern in the console? 
// *
// **
// ***
// ****
// *****
const printPattern = (n) =>{
  for(let i=0;i<n;i++){
    console.log("*".repeat(i+1))
  }
}

const num = 5

printPattern(num)

// Write a program to print the below pattern in the console?
// 123456789
// 12345678
// 1234567
// 123456
// 12345
// 1234
// 123
// 12
// 1

const printNumPattern = (n) =>{
  for(let i=0;i<n;i++){
    let numString = ''
    for(let j=1;j<=n-i;j++){
      numString += j.toString()
    }
    console.log(numString)
  }
}

const number = 9

printNumPattern(number)

// Write a program to print the below pattern in the console?  
//     *
//    * *
//   *   *
//  *     *
// *       *

const printSpacePattern = (n) =>{
  let count = 1
  for(let i=1;i<=n;i++){
    if(i===1){
      console.log(" ".repeat(n-i) + "*")
    } else{
      let startSpace = " ".repeat(n-i)
      let midSpace = " ".repeat(count)
      count += 2
      console.log(startSpace+ "*" + midSpace + "*")
    }
  }
}

const numb = 5

printSpacePattern(numb)

// end time: 5:40pm