package mx.edu.utez.controller;

import mx.edu.utez.model.Office;
import mx.edu.utez.model.OfficeDAO;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/office")
public class OfficeService {
    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Office> getOffices(){
        return new OfficeDAO().findAll();
    }
}
