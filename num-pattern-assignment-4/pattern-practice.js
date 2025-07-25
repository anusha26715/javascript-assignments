// start time:- 12:33 am

// 1) pattern printing

function input1Pattern(n){          // i/p: 5
  let space = "  "                  // o/p:    5
  for(let i=n;i>0;i--){             //       5 4 5
    let subArray1 = []              //     5 4 3 4 5
    for(let j=0;j<n-i+1;j++){       //   5 4 3 2 3 4 5
      subArray1.push(n-j)           // 5 4 3 2 1 2 3 4 5
    }
    let subArray2 = []
    for(let k=0;k<n-i;k++){
      if(subArray1.length > 1) subArray2.push(n-k);
    }
    let input1Array = [...subArray1,...subArray2.reverse()]
    console.log(space.repeat(i-1)+input1Array.join(" "))
  }
}

let input1 = 5
input1Pattern(input1)


// 2) pattern printing

function input2Pattern(n){          // i/p: 5
  let space = "  "
  let nestedArray = []              // o/p: 5 4 3 2 1 2 3 4 5
  for(let i=n;i>0;i--){             //        5 4 3 2 3 4 5
    let subArray1 = []              //          5 4 3 4 5
    for(let j=0;j<n-i+1;j++){       //            5 4 5
      subArray1.push(n-j)           //              5
    }                               
    let subArray2 = []              
    for(let k=0;k<n-i;k++) if(subArray1.length > 1) subArray2.push(n-k);
    let input2Array = [...subArray1,...subArray2.reverse()]
    nestedArray.push(input2Array)
  }
  nestedArray.reverse()
  for(let l=0;l<n;l++) console.log(space.repeat(l)+nestedArray[l].join(" "));
}

let input2 = 5
input2Pattern(input2)


// 3) pattern printing

function input3Pattern(n){          // i/p: 5
  let space = "  "
  let nestedArray = []              // o/p: 5 4 3 2 1 2 3 4 5
  for(let i=n;i>0;i--){             //        4 3 2 1 2 3 4
    let subArray1 = []              //          3 2 1 2 3
    for(let j=0;j<n-i+1;j++){       //            2 1 2 
      subArray1.push(j+1)           //              1
    }                               
    let subArray2 = []              
    for(let k=0;k<n-i;k++) if(subArray1.length > 1) subArray2.push(k+2);
    let input3Array = [...subArray1.reverse(),...subArray2]
    nestedArray.push(input3Array)
  }
  nestedArray.reverse()
  for(let l=0;l<n;l++) console.log(space.repeat(l)+nestedArray[l].join(" "));
}

let input3 = 5
input3Pattern(input3)


// 4) pattern printing

function input4Pattern(n){          // i/p: 5
  let space = "  "
  let nestedArray = []              // o/p: 1 2 3 4 5 4 3 2 1
  for(let i=n;i>0;i--){             //        1 2 3 4 3 2 1
    let subArray1 = []              //          1 2 3 2 1
    for(let j=0;j<n-i+1;j++){       //            1 2 1 
      subArray1.push(j+1)           //              1
    }                               
    let subArray2 = []              
    for(let k=0;k<n-i;k++) if(subArray1.length > 1) subArray2.push(k+1);
    let input4Array = [...subArray1,...subArray2.reverse()]
    nestedArray.push(input4Array)
  }
  nestedArray.reverse()
  for(let l=0;l<n;l++) console.log(space.repeat(l)+nestedArray[l].join(" "));
}

let input4 = 5
input4Pattern(input4)


// 5) pattern printing

function input5Pattern(n){          // i/p: 5
  let space = "  "
  let nestedArray = []              // o/p: 1 2 3 4 5 4 3 2 1
  for(let i=n;i>0;i--){             //        2 3 4 5 4 3 2
    let subArray1 = []              //          3 4 5 4 3
    for(let j=0;j<n-i+1;j++){       //            4 5 4
      subArray1.push(n-j)           //              5
    }                               
    let subArray2 = []              
    for(let k=0;k<n-i;k++) if(subArray1.length > 1) subArray2.push(n-k-1);
    let input5Array = [...subArray1.reverse(),...subArray2]
    nestedArray.push(input5Array)
  }
  nestedArray.reverse()
  for(let l=0;l<n;l++) console.log(space.repeat(l)+nestedArray[l].join(" "));
}

let input5 = 5
input5Pattern(input5)

// end time:- 2:34 am (24 july 2025)

// start time:- 12:19 pm (24 july 2025)

// 6) Descending Triangle from N
// Input: 5
// Output: 5 4 3 2 1
//           5 4 3 2
//             5 4 3
//               5 4
//                 5

const input6Pattern = (n)=> {
  for (let i=0;i<n;i++){
    let arr = []
    let space = "  "
    for (let j=n;j>(0+i);j--){
      arr.push(j)
    }
    console.log(space.repeat(i)+arr.join(" "))
  }
}

let input6 = 5
input6Pattern(input6)


// 7) Triangle pattern from N
// Input: 5
// Output: 5 4 3 2 1
//           4 3 2 1
//             3 2 1
//               2 1
//                 1

const input7Pattern = (n)=> {
  for (let i=0;i<n;i++){
    let arr = []
    let space = "  "
    for (let j=n-i;j>0;j--){
      arr.push(j)
    }
    console.log(space.repeat(i)+arr.join(" "))
  }
}

let input7 = 5
input7Pattern(input7)

// 8) Triangle Pattern from N
// Input: 5
// Output: 1 2 3 4 5
//           1 2 3 4
//             1 2 3
//               1 2
//                 1

const input8Pattern = (n)=> {
  for (let i=0;i<n;i++){
    let arr = []
    let space = "  "
    for (let j=n-i;j>0;j--){
      arr.push(j)
    }
    console.log(space.repeat(i)+arr.reverse().join(" "))
  }
}

let input8 = 5
input8Pattern(input8)

// 9) Triangle Pattern from N
// Input: 5
// Output: 1 2 3 4 5
//           2 3 4 5
//             3 4 5
//               4 5
//                 5

const input9Pattern = (n)=> {
  for (let i=0;i<n;i++){
    let arr = []
    let space = "  "
    for (let j=i+1;j<=n;j++){
      arr.push(j)
    }
    console.log(space.repeat(i)+arr.join(" "))
  }
}

let input9 = 5
input9Pattern(input9)


// 10) Triangle Pattern from N
// Input: 5
// Output: A B C D E
//           A B C D
//             A B C
//               A B
//                 A

function input10Pattern(n) {
  for (let i = 0; i < n; i++) {
    let rowStr = [];
    let space = "  "
    for (let j=0;j<n-i;j++){
      rowStr.push(String.fromCharCode(65+j))
    }
    console.log(space.repeat(i)+rowStr.join(" "));
  }
}

let input10 = 5
input10Pattern(input10)

// 11) Triangle Pattern from N
// Input: 5
// Output: A B C D E
//           B C D E
//             C D E
//               D E
//                 E

function input11Pattern(n) {
  for (let i = 0; i < n; i++) {
    let rowStr = [];
    let space = "  "
    for (let j=0;j<n-i;j++){
      rowStr.push(String.fromCharCode(65+i+j))
    }
    console.log(space.repeat(i)+rowStr.join(" "));
  }
}

let input11 = 5
input11Pattern(input11)


// 12) Triangle Pattern from N

function input12Pattern(n) {      // Input: 5
  let space = "  "                // Output:        1 
  for (let i=0;i<n;i++){          //              2 1 2
    let subArray1 = []            //            3 2 1 2 3
    for(let j=1;j<=i+1;j++){      //          4 3 2 1 2 3 4
      subArray1.push(j)           //        5 4 3 2 1 2 3 4 5
    }
    let subArray2 = []
    for(let k=1;k<i+1;k++) subArray2.push(k+1);
    let nestedArray = [...subArray1.reverse(),...subArray2]
    console.log(space.repeat(n-i)+nestedArray.join(" "))
  }
}

let input12 = 5
input12Pattern(input12)

// 13) Triangle Pattern from N

function input13Pattern(n) {      // Input: 5
  let space = "  "                // Output:        1 
  for (let i=0;i<n;i++){          //              1 2 1
    let subArray1 = []            //            1 2 3 2 1
    for(let j=1;j<=i+1;j++){      //          1 2 3 4 3 2 1
      subArray1.push(j)           //        1 2 3 4 5 4 3 2 1
    }
    let subArray2 = []
    for(let k=1;k<i+1;k++) subArray2.push(k);
    let nestedArray = [...subArray1,...subArray2.reverse()]
    console.log(space.repeat(n-i)+nestedArray.join(" "))
  }
}

let input13 = 5
input13Pattern(input13)

// 14) Triangle Pattern from N

function input14Pattern(n) {      // Input: 5
  let space = "  "                // Output:        5 
  for (let i=0;i<n;i++){          //              4 5 4
    let subArray1 = []            //            3 4 5 4 3 
    for(let j=1;j<=i+1;j++){      //          2 3 4 5 4 3 2 
      subArray1.push(n-j+1)       //        1 2 3 4 5 4 3 2 1
    }
    let subArray2 = []
    for(let k=1;k<i+1;k++) subArray2.push(n-k);
    let nestedArray = [...subArray1.reverse(),...subArray2]
    console.log(space.repeat(n-i)+nestedArray.join(" "))
  }
}

let input14 = 5
input14Pattern(input14)

// end time- 11:36 pm(24 july 2025)