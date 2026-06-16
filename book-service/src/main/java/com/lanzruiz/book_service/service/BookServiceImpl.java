package com.lanzruiz.book_service.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.lanzruiz.book_service.entity.Book;
import com.lanzruiz.book_service.kafka.BookProducer;
import com.lanzruiz.book_service.repository.BookRepository;

@Service
public class BookServiceImpl implements BookService {
	
	  private final BookRepository bookRepository;
	  private final BookProducer bookProducer;

	  
	  // Constructor Injection
	  public BookServiceImpl(BookRepository bookRepository, BookProducer bookProducer) {
	      this.bookRepository = bookRepository;
	      this.bookProducer = bookProducer;
	  }
	  
	  @Override
	  public Book createBook(Book book) {
		  // Save to database
	      Book savedBook = bookRepository.save(book);

	      // Publish to Kafka
	      bookProducer.sendBook(savedBook);

	      return savedBook;
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
	  
	  @Override
	  public Book updateBook(Long id, Book updatedBook) {

	        Book existingBook = bookRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("Book not found"));

	        existingBook.setTitle(updatedBook.getTitle());
	        existingBook.setAuthor(updatedBook.getAuthor());
	        existingBook.setDescription(updatedBook.getDescription());
	        existingBook.setIsbn(updatedBook.getIsbn());

	        return bookRepository.save(existingBook);
	    }
	  

	  
	  @Override
	  public void deleteBook(Long id) {
	      bookRepository.deleteById(id);
	  }

}
