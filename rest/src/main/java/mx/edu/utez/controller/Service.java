package mx.edu.utez.controller;

import mx.edu.utez.model.Employee;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

@Path("/employee")
public class Service {

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Employee> getEmployees(){
        List<Employee> employees = new ArrayList<>();

        Employee employee = new Employee();
        employee.setEmployeeNumber(1);
        employee.setFirstName("Luis");
        employees.add(employee);

        employee = new Employee();
        employee.setEmployeeNumber(2);
        employee.setFirstName("Alejandro");
        employees.add(employee);
        return employees;
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Employee getEmployee(@PathParam("id") int employeeNumber){
        Employee employee = new Employee();
        if(employeeNumber != 0)
            employee.setFirstName("Alejandro");
        return employee;
    }
}
