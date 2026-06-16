package com.lanzruiz.book_service.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Author {
	
	@Id
	private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String biography;
    
    public Author() {}
    
	public Author(String id, String firstName, String lastName, String email, String biography) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.biography = biography;
	}

	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getBiography() {
		return biography;
	}
	
	public void setBiography(String biography) {
		this.biography = biography;
	}

	@Override
	public String toString() {
		return "Author [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", biography=" + biography + "]";
	}
	
	
    
    


}
