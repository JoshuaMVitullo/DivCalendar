function remove_task(form){



    let employee = localStorage.getItem($('#removeDropDown').val());

    employee = JSON.parse(employee);



    let indexToRemove = $("#taskDropDown").prop('selectedIndex')
    var removed = employee.Task.splice(indexToRemove, 1);




  // overwrite the employee JSON in the local storage with the newly updated task array
  localStorage.setItem($(removeDropDown).val(), JSON.stringify(employee));


}
