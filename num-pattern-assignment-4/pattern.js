// Q1. Increasing Number Triangle

// Input: 5
// Output: 1
        // 1 2
        // 1 2 3
        // 1 2 3 4
        // 1 2 3 4 5
function numberTriangle(n){
  for(let i=0;i<=n;i++){
    let val = ""
    for(let j=1;j<i+1;j++){
      val += j + " "
    }
    console.log(val)
  }
}

let num = 5
numberTriangle(num)


// Q2. Repeated Row Number Triangle

// Input: 5
// Output: 1
//         2 2
//         3 3 3
//         4 4 4 4
//         5 5 5 5 5

const repeatedNumPrint = (n)=>{
  for (let i=1;i<=n;i++){
    const number = i+ " "
    let val = number.repeat(i)
    console.log(val)
  }
}


let numb = 5
repeatedNumPrint(numb)


// Q3. Continuous Numbers Pattern
// Input: 4
// Output: 1
//         2 3
//         4 5 6
//         7 8 9 10

const continuousNum = (n)=> {
  let count = 0
  for (let i=0;i<n;i++){
    let val = ""
    for (let j=0;j<i+1;j++){
      count++
      val += count + " "
    }
    console.log(val)
  }
}


let input = 6
continuousNum(input)


// Q4. Reverse Row Numbers
// Input: 5
// Output: 1
//         2 1
//         3 2 1
//         4 3 2 1
//         5 4 3 2 1


const reverseNumPattern = (n) => {
  for (let i=0;i<n;i++){
    let array = []
    for(let j=0;j<i+1;j++){
      array.push(j+1)
    }
    let reversed = array.reverse()
    console.log(reversed.join(" "))
  }
}

let numInput = 5
reverseNumPattern(numInput)



// Q5. Descending Triangle from N
// Input: 5
// Output: 5 4 3 2 1
//         5 4 3 2
//         5 4 3
//         5 4
//         5

const descendingPattern = (n)=> {
  for (let i=0;i<n;i++){
    let arr = []
    for (let j=n;j>(0+i);j--){
      arr.push(j)
    }
    console.log(arr.join(" "))
  }
}

let inputNum = 5
descendingPattern(inputNum)