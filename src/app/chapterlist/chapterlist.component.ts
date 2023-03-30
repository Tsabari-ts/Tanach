import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from "../models/Book";
import { Router } from '@angular/router';
import gematriya from "gematriya";
import { BookService } from '../book.service';

@Component({
  selector: 'app-chapterlist',
  templateUrl: './chapterlist.component.html',
  styleUrls: ['./chapterlist.component.css']
})

export class ChapterlistComponent implements OnInit {

  book: Book | undefined | null;
  bookTitle: string | null = "";
  chapters: number[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      this.bookTitle = p['book'];

      if (this.bookTitle != null) {
        this.book = this.bookService.getBook(this.bookTitle);
      }
    })
  }

  getChapterName(chapterNumber: number): string {
    return gematriya(chapterNumber, { punctuate: false });
  }

  goToChapter(chapterNumber: number): void {
    if (this.book) {
      this.router.navigate([`/books/${this.book.title}/${chapterNumber}`]);
    }
  }
}