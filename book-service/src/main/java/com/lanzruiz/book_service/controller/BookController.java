package com.lanzruiz.book_service.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lanzruiz.book_service.entity.Book;
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

	 
	 @PostMapping
	 public Book createBook(@RequestBody Book book) {
	     return bookService.createBook(book);
	 }
}
