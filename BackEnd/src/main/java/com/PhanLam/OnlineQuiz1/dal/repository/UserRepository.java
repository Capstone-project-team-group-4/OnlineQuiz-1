/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.PhanLam.OnlineQuiz1.dal.repository;

import com.PhanLam.OnlineQuiz1.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Phan Lam
 */
public interface UserRepository extends JpaRepository <User, String> {

    @Override
    public User save (User user); 

    @Override
    public boolean existsById (String userID);
}
