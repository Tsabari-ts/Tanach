import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router){ }

  
  
  ngOnInit(): void {
    localStorage.removeItem('Continue-Area');
  }
  
  buttons:any[]=[
    {text: 'תורה', value: 'tora-area'},
    {text: 'נביאים', value: 'prophets-area'},
    {text: 'כתובים', value: 'hagiography-area'},
    {text: 'המשך מהפרק האחרון', value: 'show-sentence'},
    {text: 'הגדרות', value: 'settings'}
  ]  
  
  goTo(path:any){
    if(path.value === 'show-sentence'){
      localStorage['Continue-Area'] = path.value;
    }
    this.router.navigate(['/' + path.value + '']);
  }

  // goTo(path:any){
  //   if(path.value === 'show-sentence'){
  //     localStorage['Continue-Area'] = path.value;
  //   }
  //   this.router.navigate(['/' + path.value + '']);
  // }





}
