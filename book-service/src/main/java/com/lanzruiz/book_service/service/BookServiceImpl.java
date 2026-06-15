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
	  
	  @Override
	  public Book updateBook(Long id, Book updatedBook) {

	        Book existingBook = bookRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("Book not found"));

	        existingBook.setTitle(updatedBook.getTitle());
	        existingBook.setAuthor(updatedBook.getAuthor());

	        return bookRepository.save(existingBook);
	    }
	  
//	  @Override
//	  public void updateBook(Long id, Book updatedBook) {
//		  
//		  Book existingBook = bookRepository.findById(id)
//	                .orElseThrow(() ->
//	                        new RuntimeException("Book not found with id: " + id));
//
//	        existingBook.setTitle(updatedBook.getTitle());
//	        existingBook.setAuthor(updatedBook.getAuthor());
//
//	        bookRepository.save(existingBook);
//
//	        // Publish update event to Kafka
//	        BookEvent event = new BookEvent(
//	                savedBook.getId(),
//	                savedBook.getTitle(),
//	                savedBook.getAuthor()
//	        );
//
//	        bookProducer.publishBook(event);
//
//	        
//	  }

	  
	  @Override
	  public void deleteBook(Long id) {
	      bookRepository.deleteById(id);
	  }

}
