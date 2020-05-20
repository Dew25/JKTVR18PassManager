/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import entity.User;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;
import javax.ejb.EJB;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.json.JsonReader;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import jsonbuilders.UserJsonObjectBuilder;
import session.UserFacade;

/**
 *
 * @author Melnikov
 */
@WebServlet(name = "LoginController", urlPatterns = {
    "/login",
    "/createUser"
})
public class LoginController extends HttpServlet {

    @EJB UserFacade userFacade;
    
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
        JsonObject jsonObject = null;
        JsonObjectBuilder job = Json.createObjectBuilder();
        String path = request.getServletPath();
        switch (path) {
            case "/login":
                
                break;
            case "/createUser":
                JsonReader jsonReader = Json.createReader(request.getReader());
                JsonObject jsonObjectFromForm = jsonReader.readObject();
                String firstname = jsonObjectFromForm.getString("firstname");
                String surname = jsonObjectFromForm.getString("surname");
                String email = jsonObjectFromForm.getString("email");
                String login = jsonObjectFromForm.getString("login");
                String password = jsonObjectFromForm.getString("password");
                if(firstname == null || "".equals(firstname)
                        || surname == null || "".equals(surname)
                        || email == null || "".equals(email)
                        || login == null || "".equals(login)
                        || password == null || "".equals(password)
                        ){
                    job.add("authStatus", "false")
                            .add("user", "null")
                            .add("data", "null");
                    jsonObject = job.build();
                    break;
                }
                String salts = "";
                User user = new User(firstname, surname, email, login, password, salts, true);
                userFacade.create(user);
                HttpSession session = request.getSession(true);
                session.setAttribute("user", user);
                UserJsonObjectBuilder ujob = new UserJsonObjectBuilder();
                job.add("authStatus", "true")
                   .add("user", ujob.createUserJsonObject(user))
                   .add("data", "null");
                jsonObject = job.build();
                break;
            
        }
        if(jsonObject != null){
            try (PrintWriter out = response.getWriter()) {
                try (Writer writer = new StringWriter()){
                    Json.createWriter(writer).write(jsonObject);
                    out.println(writer.toString());
                }
            }
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
