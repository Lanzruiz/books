package com.lanzruiz.user_service.service;

import org.springframework.stereotype.Service;


import com.lanzruiz.user_service.entity.User;
import com.lanzruiz.user_service.repository.UserRepository;



@Service
public class UserServiceImpl {
	
	 private final UserRepository userRepository;
	 
	 // Constructor Injection
	 public UserServiceImpl(UserRepository userRepository) {
	     this.userRepository = userRepository;
	 }
	 
	 public User createUser(User user) {
	     return userRepository.save(user);
	 }
}
