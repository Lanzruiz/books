package com.lanzruiz.book_service.service;

import java.util.List;

import com.lanzruiz.book_service.entity.Book;

public interface BookService {
	
	  Book createBook(Book book);

	  Book getBookById(Long id);
	  
	  List<Book> getAllBooks();
	  
	  void deleteBook(Long id);
	  
	 
}
