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