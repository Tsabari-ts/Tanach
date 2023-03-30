import { Component, OnInit } from '@angular/core';
import { Book } from "../models/Book";
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books: Book[] = [];

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getAllBooks();
  }

  goToBook(book: Book): void {
    this.router.navigate([`/books/${book.title}`]);
  }
}