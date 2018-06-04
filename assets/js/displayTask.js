//
// /* Possible alternateive method */
// // https://html-cleaner.com/features/replace-html-table-tags-with-divs/
//
// $(document).ready(function() {
//   let typeofKey;
//   let empArry = [];
//   let employee;
//   let myTable = document.getElementById('wholeTable');
//   let colFill = false;
//   let color = null;
//   let firstK = 0;
//   let lastK = 0;
//   let mid = 0;
//   let taskID = 0;
//
//   //cols of the employee names
//   for (var i = 0; i < localStorage.length; i++) {
//     empArry.push(localStorage.key(i));
//   }
//   // loop through the local storage and pull the data
//   for (let j = 0; j < empArry.length; j++) {
//     employee = JSON.parse(localStorage.getItem(empArry[j]));
//     // If employee has any task
//     if ("Task" in employee) {
//       // while employee has task in his array
//       for (let taskIndex = 0; taskIndex < employee.Task.length; taskIndex++) {
//         taskID++;
//         for (let k = 1; k < myTable.rows[0].cells.length; k++) {
//           if (myTable.rows[0].cells[k].innerHTML == employee.Task[taskIndex]["Task Start Date"]) {
//             firstK = k;
//             colFill = true;
//           }
//           if (colFill == true) {
//             myTable.rows[j + 1].cells[k].innerHTML += '<div id="taskID-' + taskID + '" style="background-color:' + employee["Employee Color"] + '; border-style: hidden hidden solid hidden; border-width: 3px;border-color: white ">' + employee.Task[taskIndex]["Task Name"] + '</br></div>';
//             var rgb = employee["Employee Color"];
//             var colr;
//             if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(rgb)) {
//               colr = rgb.substring(1).split('');
//               if (colr.length == 3) {
//                 colr = [colr[0], colr[0], colr[1], colr[1], colr[2], colr[2]];
//               }
//               colr = '0x' + colr.join('');
//               var rgb = [(colr >> 16) & 255, (colr >> 8) & 255, colr & 255].join(',') + ',1'
//             }
//             bgroundColor = Math.round(((parseInt(rgb[0]) * 299) +
//             (parseInt(rgb[1]) * 587) +
//             (parseInt(rgb[2]) * 114)) / 2);
//             var newTextColor = (bgroundColor > 125) ? 'black' : 'white';
//             $('#taskID-' + taskID).css('color', newTextColor);
//           }
//           if (myTable.rows[0].cells[k].innerHTML == employee.Task[taskIndex]["Task End Date"]) {
//             colFill = false;
//             lastK = k;
//           }
//           mid = Math.floor((lastK + firstK) / 2);
//           taskID++;
//         }
//       }
//     }
//   }
// });
