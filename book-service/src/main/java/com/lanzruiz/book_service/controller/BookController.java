package com.lanzruiz.book_service.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lanzruiz.book_service.entity.Book;
import com.lanzruiz.book_service.kafka.BookProducer;
import com.lanzruiz.book_service.service.BookService;

@RestController
@RequestMapping("/api/book")
public class BookController {
	
	 private final BookService bookService;

	 
	 // Constructor Injection
	 public BookController(BookService bookService) {
	     this.bookService = bookService;
	     
	 }
	 
	 @GetMapping
	 public List<Book> getAllBooks() {
	     return bookService.getAllBooks();
	 }
	 
	 @GetMapping("/{id}")
		public Book getBookDetails(@PathVariable long id) {
			Optional<Book> book = Optional.of(bookService.getBookById(id));
			if(book.isEmpty()) {
				throw new RuntimeException("Course not found!");
			}
			return book.get();
			
		}

	 
	 @PostMapping
	 public Book createBook(@RequestBody Book book) {
	
	     return bookService.createBook(book);
	 }
	 
	 @PutMapping("/{id}")
	 public Book updateBook(
	            @PathVariable Long id,
	            @RequestBody Book book) {

	    return bookService.updateBook(id, book);
	 }
	 
	 @DeleteMapping("/{id}")
	 public void deleteUser(@PathVariable Long id) {
	    bookService.deleteBook(id);
	 }
}
