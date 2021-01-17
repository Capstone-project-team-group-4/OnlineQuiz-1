/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.PhanLam.OnlineQuiz1.controller;

import com.PhanLam.OnlineQuiz1.dal.repository.UserRepository;
import com.PhanLam.OnlineQuiz1.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Phan Lam
 */
@CrossOrigin (origins = "http://localhost:3000")
@RestController
public class UserController {
    
    // Variables declaration:
    private UserRepository userRepository;

    public UserController (UserRepository userRepository){
        this.userRepository = userRepository;
    }
    
    @PostMapping ("/users")
    @ResponseStatus (HttpStatus.CREATED)
    @Transactional (propagation = Propagation.REQUIRES_NEW)
    public void registerUser (@RequestBody User user){
        String userID;
        boolean userAlreadyExist;
        
        userID = user.getUserID ();
        userAlreadyExist = userRepository.existsById (userID);
        if (userAlreadyExist == true){
            throw new RuntimeException ();
        }
        else {
            userRepository.save (user);
        }
    }
}
