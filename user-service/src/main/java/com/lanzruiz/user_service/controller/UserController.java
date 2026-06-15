package com.lanzruiz.user_service.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.lanzruiz.user_service.entity.User;
import com.lanzruiz.user_service.service.UserService;


@RestController
@RequestMapping("/api/user")
public class UserController {
	
	private final UserService userService;
	
	// Constructor Injection
	public UserController(UserService userService) {
	    this.userService = userService;
	}
	
	@PostMapping
	public User createBook(@RequestBody User user) {
	    return userService.createUser(user);
	}
	 
	 
}
