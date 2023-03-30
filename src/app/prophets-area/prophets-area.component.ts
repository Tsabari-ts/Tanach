import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prophets-area',
  templateUrl: './prophets-area.component.html',
  styleUrls: ['./prophets-area.component.css']
})
export class ProphetsAreaComponent implements OnInit {

  constructor(private router: Router){ }

  area = 'prophets-area';
  data:any;
  buttons:any[]=[
    {text: 'יהושע', value: 'Joshua'},
    {text: 'שופטים', value: 'Judges'},
    {text: 'שמואל א', value: 'I Samuel'},
    {text: 'שמואל ב', value: 'II Samuel'},
    {text: 'מלכים א', value: 'I Kings'},
    {text: 'מלכים ב', value: 'II Kings'},
    {text: 'ישעיהו', value: 'Isaiah'},
    {text: 'ירמיהו', value: 'Jeremiah'},
    {text: 'יחזקאל', value: 'Ezekiel'},
    {text: 'הושע', value: 'Hosea'},
    {text: 'יואל', value: 'Joel'},
    {text: 'עמוס', value: 'Amos'},
    {text: 'עובדיה', value: 'Obadiah'},
    {text: 'יונה', value: 'Jonah'},
    {text: 'מיכה', value: 'Micah'},
    {text: 'נחום', value: 'Nahum'},
    {text: 'חבקוק', value: 'Habakkuk'},
    {text: 'צפניה', value: 'Zephaniah'},
    {text: 'חגי', value: 'Haggai'},
    {text: 'זכריה', value: 'Zechariah'},
    {text: 'מלאכי', value: 'Malachi'}
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
