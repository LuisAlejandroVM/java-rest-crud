const url = 'http://localhost:8084/rest_war';

/* 
    EMPLOYEE
*/

const getEmployees = () => {
    $.ajax({
        type: 'GET',
        headers: { "Accept": "application/json" },
        url: url + "/employee"
    }).done(res => {
        let listEmployees = res;
        let content = "";

        // select
        let employee = $("#employee");
        employee.append(`<option value="0">Select an Employee...</option>`);

        for(let i = 0; i < listEmployees.length; i++){
            content += `
                <tr>
                    <td>${ i + 1 }</td>
                    <td>${ listEmployees[i].firstName } ${ listEmployees[i].lastName }</td>
                    <td>${ listEmployees[i].employeeNumber }</td>
                    <td>
                        <button class="btn btn-outline-primary"><i class="fa fa-edit"></i> Modificar</button>
                        <button class="btn btn-outline-danger"><i class="fa fa-trash"></i> Eliminar</button>
                    </td>
                </tr>
            `;

            // select
            employee.append(`<option value="${ listEmployees[i].employeeNumber }">${ listEmployees[i].firstName } ${ listEmployees[i].lastName }</option>`);
        }

        $("#table > tbody").html(content);

        $('#table').DataTable();
        
    });
};

const save = e => {
    e.preventDefault();
    console.log("THIS");
    let form = document.getElementById("formSave");
    console.log(form);
    // let employee = new Object();
    // employee.employeeNumber = "9999";
    // employee.lastName = "Muñiz";
    // employee.firstName = "Alejandro";
    // employee.extension = "x3131";
    // employee.email = "alejandro@gmail.com";
    // employee.officeCode = "2";
    // employee.reportsTo = "1002";
    // employee.jobTitle = "Maestro";

    // $.ajax({
    //     type: 'POST',
    //     headers: {
    //         "Accept": "application/json",
    //         "Content-Type": "application/x-www-form-urlencoded"
    //     },
    //     url: url + '/employee/save',
    //     data: employee
    // }).done(res => {
    //     console.log(res);
    // });
}

/* 
    OFFICES
*/

const getOffices = () => {
    $.ajax({
        type: 'GET',
        headers: { "Accept": "application/json" },
        url: url + "/office"
    }).done(res => {
        let listOffices = res;
        let office = $("#office");
        office.append(`<option value="0">Select an Office...</option>`);

        for(let i = 0; i < listOffices.length; i++){
            office.append(`<option value="${ listOffices[i].officeCode }">${ listOffices[i].country } (${ listOffices[i].city })</option>`);
        }
        
    });
};

getEmployees();
getOffices();