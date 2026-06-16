package com.lanzruiz.book_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lanzruiz.book_service.entity.Author;

public interface AuthorRepository extends JpaRepository<Author, Long> {

}
