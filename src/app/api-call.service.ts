import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) { }

  chosenBook = localStorage.getItem('Book');
  chosenEpisode = localStorage.getItem('Episode');

  getSentence(): Observable<any> {
    return this.http.get<any>("https://sefaria.org/api/texts/"+this.chosenBook+"."+this.chosenEpisode);
  }

  getVerses(book:string, chapter: string ): Observable<any> {
    return this.http.get<any>(`https://sefaria.org/api/texts/${book}.${chapter}`);
  }

  getHolidays() {
    return this.http.get('https://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=on&mod=on&nx=on&year=now&month=x&ss=on&mf=on&c=on&geo=zip&zip=90210&m=50&s=on');
  }
}
