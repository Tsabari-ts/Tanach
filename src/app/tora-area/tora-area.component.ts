import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tora-area',
  templateUrl: './tora-area.component.html',
  styleUrls: ['./tora-area.component.css']
})
export class ToraAreaComponent implements OnInit {
  constructor(private router: Router){ }

  area = 'tora-area';
  data: any;
  buttons:any[]=[
    {text: 'בראשית', value: 'Genesis'},
    {text: 'שמות', value: 'Exodus'},
    {text: 'ויקרא', value: 'Leviticus'},
    {text: 'במדבר', value: 'Numbers'},
    {text: 'דברים', value: 'Deuteronomy'}
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
