package com.lanzruiz.book_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lanzruiz.book_service.entity.Book;


public interface BookRepository extends JpaRepository<Book, Long> {

}
