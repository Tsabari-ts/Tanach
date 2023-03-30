import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})

export class ChapterComponent implements OnInit {

  chapter: string | null = "";
  book: string | null = "";
  data: any;

  constructor(private router: ActivatedRoute, private apiService: ApiCallService) { }

  ngOnInit(): void {
    this.router.params.subscribe(p => {
      this.book = p['book'];
      this.chapter = p['chapter'];
      
      if (this.chapter != null && this.book != null) {
        this.apiService.getVerses(this.book, this.chapter).subscribe(data => {
          if (data.error) {
            alert(data.error);
            return;
          }

          let psukim = [...data.he].map(this.removeTags);
          this.data = psukim;
        }, (error) => {
          console.log(error)
        })
      }
    })
  }

  removeTags(str: string) {
    if ((str === null || str === ''))
      return false;
    else
      str = str.toString();

    return str.replace(/(<([^>]+)>)/ig, '');
  }
}