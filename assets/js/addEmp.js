function create_employee(form){

let LocalData = localStorage.getItem(form.empName.value);


if(form.empName.value in localStorage){
  alert(form.empName.value + " already exsits. To add a task to " + form.empName.value + " use the addTask button.");
}else {
  // create a employee object to store the employee's name and taks info
  let employee = {
    "Employee Name"                 : form.empName.value,
    "Employee Id"                   : form.empId.value,
    "Employee Color"                : form.empColor.value,
    "Task" : [],

        };

  // set the local storage to the new employee array
  localStorage.setItem(form.empName.value, JSON.stringify(employee));
}






}
