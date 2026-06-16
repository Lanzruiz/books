package com.lanzruiz.book_service.kafka;

import com.lanzruiz.book_service.entity.Book;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class BookProducer {

    private final KafkaTemplate<String, Book> kafkaTemplate;

    public BookProducer(KafkaTemplate<String, Book> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendBook(Book book) {

        kafkaTemplate.send("book-topic", book);

        System.out.println("Book sent: " + book.getTitle());
    }
}