import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../api-call.service';
import gematriya from "gematriya";


@Component({
  selector: 'app-show-sentence',
  templateUrl: './show-sentence.component.html',
  styleUrls: ['./show-sentence.component.css']
})
export class ShowSentenceComponent implements OnInit {

  constructor(private apiService:ApiCallService, private router: Router){ }  

  nameOfTheBook = localStorage.getItem('NameOfTheBook');
  nameOfTheEpisode = localStorage.getItem('NameOfTheEpisode');
  continueArea = localStorage.getItem('Continue-Area');
  numbersOfEpisodes = Number(localStorage.getItem('NumbersOfEpisodes'));
  chosenEpisode = Number(localStorage.getItem('Episode'));
  data:any;
  nextData:any;
  myInterval: any;
  speed = 1;
  upSpeed = 1;
  isScrolling = false;
  clicks = 0;
  book:any;
  episode:any;
  next : any;

  ngOnInit(): void {
    this.createTitle(this.nameOfTheBook, this.nameOfTheEpisode);
    this.apiService.getSentence().subscribe(data=>{
      localStorage['NumbersOfEpisodes'] = data.length;
      let psukim = [...data.he].map(this.removeTags);
          this.data = psukim;
      // console.table(psukim)
    }, (error) => {
      console.log(error)
    })
  }
  
  createTitle(nameOfTheBook:any, nameOfTheEpisode:any){
    this.book = nameOfTheBook;
    this.episode = nameOfTheEpisode;
  }  

  nextEpisode(){
    this.chosenEpisode++;
     let episodeNumber = localStorage['Episode'] = this.chosenEpisode;
     if(episodeNumber <= this.numbersOfEpisodes){
      let part = gematriya(episodeNumber, {punctuate: false})
      let chapter = 'פרק';
      localStorage['NameOfTheEpisode'] = chapter + " " +  part ;
      this.createTitle(this.nameOfTheBook, localStorage['NameOfTheEpisode']);
  
      this.apiService.getSentence().subscribe(data=>{
        let psukim = [...data.he].map(this.removeTags);
            this.data = psukim;
            location.reload();
        // console.table(psukim)
      }, (error) => {
        console.log(error)
      })
     }
     else{
console.log();
     }
    
  }

  removeTags(str: string){
    if((str === null || str === ''))
      return false;
    else
      str = str.toString();
    
    return str.replace(/(<([^>]+)>)/ig, '');
  }

  return(){
    if(this.continueArea != null){
      this.router.navigate(['/home-page']);
    }
    else{
      this.router.navigate(['/show-episode']);
    }
  }

  scroll() {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        clearInterval(this.myInterval);
        this.isScrolling = false;
    } else {
        window.scrollBy({
            top: this.speed,
            left: 0,
            behavior: 'smooth'
        });
    }
  }

  increaseSpeed() {
    if (this.isScrolling) {
      clearInterval(this.myInterval);
      this.isScrolling = false;
    }
    if (!this.isScrolling) {
      this.myInterval = setInterval(() => this.scroll(), 100);
      this.isScrolling = true;
    }
    this.clicks++;
    if (this.clicks >= 5) {
      this.speed = 1;
      this.clicks = 0;
    } else {
      this.speed = this.speed + 1;
    }
  }

  stopScrolling() {
    clearInterval(this.myInterval);
    this.isScrolling = false;
  }

  scrollUp() {
    if (this.isScrolling) {
      clearInterval(this.myInterval);
      this.isScrolling = false;
    }
    this.clicks++;
    if (this.clicks >= 5) {
      this.upSpeed = 1;
      this.clicks = 0;
    } else {
      this.upSpeed = this.upSpeed + 1;
    }
    this.myInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(this.myInterval);
        this.isScrolling = false;
      } else {
        window.scrollBy({
          top: -this.upSpeed,
          left: 0,
          behavior: 'smooth'
        });
      }
    }, 100);
    this.isScrolling = true;
  }


}
