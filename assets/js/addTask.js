

function submit_json(form){

//console.log(form.emplName.value);

// pull from the local storage
//let employee = JSON.parse(localStorage.getItem(form.emplName.value);
let employee = localStorage.getItem($('#empDropDown').val());

employee = JSON.parse(employee);


// add task to the end of the task array for chosen employee
if('Task' in employee){
employee.Task.push({
  "Task Name"             : form.tskname.value,
  "Task Start Date"       : form.tskstart.value,
  "Task End Date"         : form.tskend.value,
  "Task Status"           : form.tskStatus.value,
});
}

// overwrite the employee JSON in the local storage with the newly updated task array
localStorage.setItem(form.emplName.value, JSON.stringify(employee));





//console.log(employee);

}
