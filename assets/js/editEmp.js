function edit_Emp(form){
    // pull employee to remove from dropdown list
    let employeeToEdit = localStorage.getItem($('#editEmpDropDown').val());


    employeeToEdit = JSON.parse(employeeToEdit);
    $("#empColor").attr("value", employeeToEdit["Employee Color"]);

    employeeToEdit["Employee Color"] = form.empColor.value;
    // add task to the end of the task array for chosen employee
    // create a employee object to store the employee's name and taks info

  
    if(form.tskname != null && form.tskname.value != ""){
      for(let taskIndex = 0; taskIndex < employee.Task.length; taskIndex++){
      if(employeeToEdit.Task[taskIndex]["Task Name"] == $('#editTaskDropDown').val()){
        employeeToEdit.Task[taskIndex]["Task Name"] = form.tskname.value;
        break;
      }
        }

      }
      if(form.tskstart !=null && form.tskstart.value != ""  && form.tskend != null && form.tskend.value != ""){
        for(let taskIndex = 0; taskIndex < employee.Task.length; taskIndex++){
        if(employeeToEdit.Task[taskIndex]["Task Name"] == $('#editTaskDropDown').val()){
          employeeToEdit.Task[taskIndex]["Task Start Date"] = form.tskstart.value;
          employeeToEdit.Task[taskIndex]["Task End Date"] = form.tskend.value;
          break;
        }
      }
    }
  localStorage.setItem($('#editEmpDropDown').val(), JSON.stringify(employeeToEdit));



}
