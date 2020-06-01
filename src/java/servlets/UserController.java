/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import entity.Resource;
import entity.User;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;
import java.math.BigDecimal;
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
import session.ResourceFacade;
import session.UserFacade;
import util.EncryptPass;

/**
 *
 * @author Melnikov
 */
@WebServlet(name = "UserController", urlPatterns = {
    "/changeProfile",
    "/createResource",

})
public class UserController extends HttpServlet {
    @EJB UserFacade userFacade;
    @EJB ResourceFacade resourceFacade;
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
        EncryptPass ep = new EncryptPass();
        JsonObject jsonObject = null;
        JsonObjectBuilder job = Json.createObjectBuilder();
        User user = null;
        HttpSession session  = request.getSession();
        if(session != null){
            user = (User) session.getAttribute("user");
        }
        if(user == null){
            job.add("authStatus", "false") // false
                .add("actionStatus", "false")// "null"
                .add("user", "null")// "null"
                .add("data", "null");
            try (Writer writer = new StringWriter()){
                Json.createWriter(writer).write(job.build());
                try (PrintWriter out = response.getWriter()) {
                    out.println(jsonObject);  
                    out.flush();
                    return;
                }
            }
            
        }
        String path = request.getServletPath();
        switch (path) {
            case "/changeProfile":
                JsonReader jsonReader = Json.createReader(request.getReader());
                JsonObject jsonObjectFromForm = jsonReader.readObject();
                Integer id = jsonObjectFromForm.getInt("id");
                String firstname = jsonObjectFromForm.getString("firstname");
                String surname = jsonObjectFromForm.getString("surname");
                String email = jsonObjectFromForm.getString("email");
                String login = jsonObjectFromForm.getString("login");
                String password = jsonObjectFromForm.getString("password");
                if(firstname == null || "".equals(firstname)
                        || surname == null || "".equals(surname)
                        || email == null || "".equals(email)
                        || login == null || "".equals(login)
                        ){
                    job.add("authStatus", "false")
                            .add("user", "null")
                            .add("data", "null");
                    jsonObject = job.build();
                    break;
                }
                User userProfile = userFacade.find(Long.parseLong(id.toString()));
                userProfile.setFirstname(firstname);
                userProfile.setSurname(surname);
                userProfile.setEmail(email);
                userProfile.setLogin(login);
                if(password != null && !"".equals(password)){
                   password = ep.setEncryptPass(password, userProfile.getSalts());
                   userProfile.setPassword(password);
                }
                try {
                    userFacade.edit(user);
                } catch (Exception e) {
                    job.add("authStatus", "true")
                        .add("user", "null")
                        .add("data", "null")
                        .add("actionStatus", "false");
                    jsonObject = job.build();
                    break;
                }
                session = request.getSession(false);
                session.setAttribute("user", userProfile);
                UserJsonObjectBuilder ujob = new UserJsonObjectBuilder();
                job.add("authStatus", "true")
                        .add("user", ujob.createUserJsonObject(userProfile))
                        .add("data", "null")
                        .add("actionStatus", "true");
                    jsonObject = job.build();
                break;
            case "/createResource":
                jsonReader = Json.createReader(request.getReader());
                jsonObjectFromForm = jsonReader.readObject();
                String resourceUrl = jsonObjectFromForm.getString("resourceUrl");
                login = jsonObjectFromForm.getString("login");
                password = jsonObjectFromForm.getString("password");
                String description = jsonObjectFromForm.getString("description");
                if(resourceUrl == null || "".equals(resourceUrl)
                        || description == null || "".equals(description)
                        || password == null || "".equals(password)
                        || login == null || "".equals(login)
                        ){
                    job.add("actionStatus", "false")
                            .add("user", "null")
                            .add("data", "null");
                    jsonObject = job.build();
                    break;
                }
                Resource resource = new Resource(
                    resourceUrl, 
                    login, 
                    password, 
                    description,
                    user
                );
                resourceFacade.create(resource);
                job.add("actionStatus", "true")
                            .add("user", "null")
                            .add("data", "null");
                    jsonObject = job.build();
                break;
        }
        //Преобразование json объекта в строку и отправка строки клиенту
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
