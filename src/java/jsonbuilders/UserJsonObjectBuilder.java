/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jsonbuilders;

import entity.User;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;

/**
 *
 * @author Melnikov
 */
public class UserJsonObjectBuilder {
    public JsonObject createUserJsonObject(User user){
        JsonObjectBuilder job = Json.createObjectBuilder();
        job.add("id", user.getId())
                .add("firstname", user.getFirstname())
                .add("surname", user.getSurname())
                .add("email", user.getEmail())
                .add("login", user.getLogin())
                .add("active", user.isActive());
        return job.build();
    }
}
