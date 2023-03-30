import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hagiography-area',
  templateUrl: './hagiography-area.component.html',
  styleUrls: ['./hagiography-area.component.css']
})
export class HagiographyAreaComponent implements OnInit {

  constructor(private router: Router){ }

  area = 'hagiography-area';
  data:any;
  buttons:any[]=[
    {text: 'תהילים', value: 'Psalms'},
    {text: 'משלי', value: 'Proverbs'},
    {text: 'איוב', value: 'Job'},
    {text: 'שיר השירים', value: 'Song of Songs'},
    {text: 'רות', value: 'Ruth'},
    {text: 'איכה', value: 'Lamentations'},
    {text: 'קהלת', value: 'Ecclesiastes'},
    {text: 'אסתר', value: 'Esther'},
    {text: 'דניאל', value: 'Daniel'},
    {text: 'עזרא', value: 'Ezra'},
    {text: 'נחמיה', value: 'Nehemiah'},
    {text: 'דברי הימים א', value: 'I Chronicles'},
    {text: 'דברי הימים ב', value: 'II Chronicles'}
  ];

  ngOnInit(): void {
  }

  returnToHomePage(){
    this.router.navigate(['/home-page']);
  }


  getTheEpisodes(button:any){
    localStorage['NameOfTheBook'] = button.text;
    localStorage['Book'] = button.value;
    localStorage['Area'] = this.area;
    this.router.navigate(['/show-episode']);
  }
}
