/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package session;

import entity.Resource;
import entity.User;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author Melnikov
 */
@Stateless
public class ResourceFacade extends AbstractFacade<Resource> {

    @PersistenceContext(unitName = "JKTVR18PassManagerPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public ResourceFacade() {
        super(Resource.class);
    }

    public List<Resource> findByUser(User user) {
        try {
            return em.createQuery("SELECT r FROM Resource r WHERE r.user = :user")
                    .setParameter("user", user)
                    .getResultList();
        } catch (Exception e) {
            return new ArrayList();
        }
    }
    
}
