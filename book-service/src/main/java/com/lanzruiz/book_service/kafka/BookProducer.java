package com.lanzruiz.book_service.kafka;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.lanzruiz.book_service.entity.Book;

@Service
public class BookProducer {
	
	 private final KafkaTemplate<String, Book> kafkaTemplate;

	 public BookProducer(KafkaTemplate<String, Book> kafkaTemplate) {
	     this.kafkaTemplate = kafkaTemplate;
	 }

	 public void publish(Book book) {
	     kafkaTemplate.send("book-topic", book);
	 }
	        
}
