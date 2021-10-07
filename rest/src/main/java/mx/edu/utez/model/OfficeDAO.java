package mx.edu.utez.model;

import mx.edu.utez.service.ConnectionMySQL;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class OfficeDAO {
    private Connection con;
    private CallableStatement cstm;
    private ResultSet rs;

    public List<Office> findAll(){
        List<Office> listOffices = new ArrayList<>();

        try{
            con = ConnectionMySQL.getConnection();
            cstm = con.prepareCall("SELECT * FROM offices;");
            rs = cstm.executeQuery();

            while(rs.next()){
                Office office = new Office();

                office.setOfficeCode(rs.getString("officeCode"));
                office.setCity(rs.getString("city"));
                office.setCountry(rs.getString("country"));

                listOffices.add(office);
            }
        }catch(SQLException e){
            System.out.printf("Ha sucedido algún error: %s", e.getMessage());
        }finally{
            ConnectionMySQL.closeConnections(con, cstm, rs);
        }
        return listOffices;
    }
}
