// // print the following number pattern
// /*
// 11111
// 00000
// 11111
// 00000
// 11111*/

//       for (let i = 1; i <= 5; i++) {
//         for (let j = 1; j <= 5; j++) {
//           if (i == 1 || i == 3 || i == 5) {
//             console.log("1 ");
//           } else {
//             console.log("0 ");
//           }
//         }
//       }
    
// // print the following number pattern
// /*
// 01010
// 01010
// 01010
// 01010
// 01010 */

//       console.log("program-2");

//       for(i = 1; i <= 5; i++){
//         for(j = 1; j <= 5; j++){
//             if(j == 1 || j == 3 || j == 5){
//                 console.log("0 ");
//             }
//             else{
//                 console.log("1 ");
//             }
//         }
//       }

//       /*
//       11111
//       10001
//       10001
//       10001
//       11111 */
    
//       console.log("program-2");
//       str = "";
//       for(i = 1; i <= 5; i++){
//         for(j = 1; j <= 5; j++){
//             if(i == 1 || j == 1 ||i == 5 || j == 5){
//                 console.log("1 ");
//             }
//             else{
//                 console.log("0 ");
//             }
//         }
//       }


const rows = 5;
const columns = 5;

// Loop through rows
for (let i = 0; i < rows; i++) {
  let row = '';
  
  // Loop through columns
  for (let j = 0; j < columns; j++) {
    // Check if it's an edge or an interior cell
    if (i === 0 || i === rows - 1 || j === 0 || j === columns - 1) {
      row += '1 ';
    } else {
      row += '0 ';
    }
  }
  
  // Print the row to the console
  console.log(row);
}
 

