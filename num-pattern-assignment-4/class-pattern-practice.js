// * * * * *       *
//         *       *
//         *       *
//         *       *
// * * * * * * * * *
// *       *
// *       *
// *       *
// *       * * * * *

function patternPrinting1(n){
    for(let i=1;i<=(2*n-1);i++){
        let rowStr = ""
      for(let j=1;j<=(2*n-1);j++){
        if(i===n||j===n||(i===1&&j<n)||(i===(2*n-1)&&j>n)||(i<n&&j===(2*n-1)) || (i>n&&j===1)){
          rowStr += "* "
        }else {
          rowStr += "  "
        }
      }
      console.log(rowStr)
    }
  }

let num1 = 4
patternPrinting1(num1)


// *       * * * * * 
// *       *       
// *       *       
// *       *       
// * * * * * * * * *
//         *       *
//         *       *
//         *       *
// * * * * *       *

function patternPrinting2(n){
    for(let i=1;i<=(2*n-1);i++){
        let rowStr = ""
      for(let j=1;j<=(2*n-1);j++){
        if(i===n||j===n||(j===1&&i<n)||(i===1&&j>n)||(j<n&&i===(2*n-1)) || (i>n&&j===(2*n-1))){
          rowStr += "* "
        }else {
          rowStr += "  "
        }
      }
      console.log(rowStr)
    }
  }

let num2 = 4
patternPrinting2(num2)