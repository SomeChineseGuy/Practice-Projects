// const wordSearch2 = function(arr, word) {
//   for (let row = 0; row < arr.length; row++) {
//     let emptyArr = [];
//     // emptyArr.push(arr[row][row])
    
//     for(let col = 0; col < arr[row].length - 1; col++) {
//       if(row >= 0 && col === 0) {
//         emptyArr.push(arr[row][row]);
//       } else {
//         for(let i = 0; i < col; i++) { 
//           console.log(col, i)       
//           if(arr[i][col]) {
//             emptyArr.push(arr[i][col])
//           }  
//           if(arr[col][i]) {
//             emptyArr.push(arr[col][i])
//           }
          
//         }
//       }
//       // console.log(arr[row][0]);
//     }
//     console.log(emptyArr);     
//   }
// }

var findDiagonalOrder = function(mat) {
  let row=mat.length; let colm=mat[0].length;
  let len=row*colm;      let ans=[];      let[i,j]=[0,0];
  
  while(true){
     while(i>=0 && j<colm){
       ans.push(mat[i][j]);  
       i--; j++; len--;
     }
     if(len===0){ break; }
     if(j===colm){ j--; i+=2; }
     else{ i++; }
    
     while(j>=0 && i<row){
       ans.push(mat[i][j]); 
       i++; j--;  len--;
     }

     if(len===0){ break; }
     if(i===row){ i--; j+=2; }
     else{ j++; }
  }    
  return ans; 
}; 

// console.log(findDiagonalOrder([
//   ["A", "B", "C", "D"],
//   ["E", "F", "G", "H"],
//   ["I", "J", "K", "L"]
// ]))

// const result = wordSearch2(
//  [
//    ["A", "B", "C", "D"],
//    ["E", "F", "G", "H"],
//    ["I", "J", "K", "L"]
//  ],
//  "ARIELLE"
// );

// console.log(result);

/*
arr rows = 3, i range [0, 1, 2]
arr cols = 4, j range [0, 1, 2, 3]

                        arr[0][0]   1 element
            arr[1][0],  arr[0][1]   2
arr[2][0],  arr[1][1],  arr[0][2]   3
arr[2][1],  arr[1][2],  arr[0][3]   3
arr[2][2],  arr[1][1]               2
arr[2][3]                           1

*/


var array = ["ABCD","EFGH","IJKL"];

var Ylength = array.length;
var Xlength = array[0].length;
var maxLength = Math.max(Xlength, Ylength);
var temp;
for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
    temp = [];
    for (var y = Ylength - 1; y >= 0; --y) {
        var x = k - y;
        console.log(x)
        if (x >= 0 && x < Xlength) {
            temp.push(array[y][x]);
        }
    }
    console.log(temp)
    // if(temp.length > 0) {
    //     document.body.innerHTML += temp.join('') + '<br>';
    // }
}