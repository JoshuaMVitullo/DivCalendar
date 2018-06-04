$(document).ready(function() {

let today = new Date();
let dd = today.getDate()-1;
let mm = today.getMonth()+1; //January is 0!
let mmN = mm;
let yyyy = today.getFullYear();
let empArray = [];
if(dd < 10) {
  dd = '0'+ dd;
}
if(mm < 10) {
  mm = '0' + mm;
}
let todayDate  = yyyy.toString() + mm.toString() + dd.toString();
todayDate = parseInt(todayDate);


  for (var i = 0; i < localStorage.length; i++){
      empArray.push(localStorage.key(i));
  }
  // loop through the local storage and pull the data
  for(let j = 0; j < empArray.length; j++){
    employees = JSON.parse(localStorage.getItem(empArray[j]));
    // If employee has any task
  if("Task" in employee){
    for(let taskIndex = 0; taskIndex < employees.Task.length; taskIndex++){

      if (todayDate >=  parseInt(employees.Task[taskIndex]["Task End Date"].replace(/-/g,""))) {
          let indexToRemove = taskIndex;
          let removed = employees.Task.splice(indexToRemove, 1);
          localStorage.setItem(employees["Employee Name"], JSON.stringify(employees));
        }

      }

    }
  }

  return true;
});
