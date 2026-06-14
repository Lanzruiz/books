package com.lanzruiz.book_service.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.lanzruiz.book_service.entity.Book;
import com.lanzruiz.book_service.repository.BookRepository;

@Service
public class BookServiceImpl implements BookService {
	
	  private final BookRepository bookRepository;

	  
	  // Constructor Injection
	  public BookServiceImpl(BookRepository bookRepository) {
	      this.bookRepository = bookRepository;
	  }
	  
	  @Override
	  public Book createBook(Book book) {
	      return bookRepository.save(book);
	  }
	  
	  @Override
	  public Book getBookById(Long id) {
	      return bookRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("Book not found"));
	  }
	  
	  @Override
	  public List<Book> getAllBooks() {
	      return bookRepository.findAll();
	  }

}
