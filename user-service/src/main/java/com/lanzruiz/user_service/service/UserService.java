package com.lanzruiz.user_service.service;

import java.util.List;

import com.lanzruiz.user_service.entity.User;



public interface UserService {
	
	 User createUser(User user);
     
	 User getUserById(Long id);
	  
	 List<User> getAllUser();
	  
	 User updateUser(Long id, User user);
	  
	 void deleteUser(Long id);
}
