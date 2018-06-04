function remove_Emp(form){
    // pull employee to remove from dropdown list
    let employeeToRemove = localStorage.getItem($('#removeEmpDropDown').val());

    employeeToRemove = JSON.parse(employeeToRemove);
    // Remove selected employee from the local storage
    localStorage.removeItem(employeeToRemove["Employee Name"]);

}
