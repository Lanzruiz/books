package com.lanzruiz.book_service.kafka;

import com.lanzruiz.book_service.entity.Author;
import com.lanzruiz.book_service.repository.AuthorRepository;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class AuthorConsumer {
	
	private final AuthorRepository authorRepository;
	
	public AuthorConsumer(AuthorRepository authorRepository) {
	    this.authorRepository = authorRepository;
	}
	  

    @KafkaListener(
        topics = "author-topic",
        groupId = "author-group"
    )
    public void consume(Author author) {

        System.out.println("Author Received");
        System.out.println("ID: " + author.getId());
        System.out.println("Firstname: " + author.getFirstName());
        System.out.println("Lastname: "+ author.getLastName());
        System.out.println("Email: " + author.getEmail());
        System.out.println("Biography: " + author.getBiography());

        // Save to database if needed
        authorRepository.save(author);
    }
}