const getEmployees = () => {
    $.ajax({
        type: 'GET',
        headers: { "Accept": "application/json" },
        url: 'http://localhost:8080/rest_war_exploded/employee'
    }).done(res => {
        let listEmployees = res;
        let table = $("#table");

        for(let i = 0; i < listEmployees.length; i++){
            table.append(res[i].firstName + "<br>");
        }
        
    });
};

const save = () => {
    let employee = new Object();
    employee.employeeNumber = "9999";
    employee.lastName = "Muñiz";
    employee.firstName = "Alejandro";
    employee.extension = "x3131";
    employee.email = "alejandro@gmail.com";
    employee.officeCode = "2";
    employee.reportsTo = "1002";
    employee.jobTitle = "Maestro";

    $.ajax({
        type: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'http://localhost:8080/rest_war_exploded/employee/save',
        data: employee
    }).done(res => {
        console.log(res);
    });
}

getEmployees();