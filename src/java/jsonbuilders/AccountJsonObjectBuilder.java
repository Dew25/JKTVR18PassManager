/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jsonbuilders;

import entity.Resource;
import entity.User;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;

/**
 *
 * @author Melnikov
 */
public class AccountJsonObjectBuilder {
    public JsonObject createAccountJsonObject(Resource resource){
        JsonObjectBuilder job = Json.createObjectBuilder();
        job.add("id", resource.getId())
                .add("resourceUrl", resource.getResourceUrl())
                .add("login", resource.getLogin())
                .add("password", resource.getPassword())
                .add("description", resource.getDescription());
        return job.build();
    }
}
