import { Injectable } from '@angular/core';
import _books from "./db/bookList.json";
import { Book } from "./models/Book";

@Injectable({
  providedIn: 'root'
})

export class BookService {

  bookDictionary: {[key:string] : Book} = {};

  constructor() {
    console.log("init book map");
    
    let books = _books as Book[];

    books.forEach((b, i) => {
      b.id = i;
      this.bookDictionary[b.title] = b;
    });
  }

  getAllBooks(): Book[] {
    return Object.values(this.bookDictionary).sort((a,b)=> a.id - b.id );
  }

  getBook(bookTitle: string): Book | null {
    if (bookTitle != null) {
      return this.bookDictionary[bookTitle];
    }
    return null;
  }
}