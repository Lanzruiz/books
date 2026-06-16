package com.lanzruiz.book_service.kafka;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.lanzruiz.book_service.entity.Book;

@Service
public class BookConsumer {
	@KafkaListener(
	        topics = "author-topic",
	        groupId = "author-group"
	    )
	public void consume(Book book) {

	        System.out.println("Received Book:");
	        System.out.println(book.getTitle());
	}
}
