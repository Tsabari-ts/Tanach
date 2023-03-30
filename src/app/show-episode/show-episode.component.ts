import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-episode',
  templateUrl: './show-episode.component.html',
  styleUrls: ['./show-episode.component.css']
})
export class ShowEpisodeComponent implements OnInit {

  constructor(private router: Router){ }

  data:any;
  chosenArea = localStorage.getItem('Area');
  buttons:any[]=[
    {text: 'פרק א', value: 1},
    {text: 'פרק ב', value: 2},
    {text: 'פרק ג', value: 3},
    {text: 'פרק ד', value: 4},
    {text: 'פרק ה', value: 5},
    {text: 'פרק ו', value: 6},
    {text: 'פרק ז', value: 7},
    {text: 'פרק ח', value: 8},
    {text: 'פרק ט', value: 9},
    {text: 'פרק י', value: 10},
    {text: 'פרק יא', value: 11},
    {text: 'פרק יב', value: 12},
    {text: 'פרק יג', value: 13},
    {text: 'פרק יד', value: 14},
    {text: 'פרק טו', value: 15},
    {text: 'פרק טז', value: 16},
    {text: 'פרק יז', value: 17},
    {text: 'פרק יח', value: 18},
    {text: 'פרק יט', value: 19},
    {text: 'פרק כ', value: 20},
    {text: 'פרק כא', value: 21},
    {text: 'פרק כב', value: 22},
    {text: 'פרק כג', value: 23},
    {text: 'פרק כד', value: 24},
    {text: 'פרק כה', value: 25},
    {text: 'פרק כו', value: 26},
    {text: 'פרק כז', value: 27},
    {text: 'פרק כח', value: 28},
    {text: 'פרק כט', value: 29},
    {text: 'פרק ל', value: 30},
    {text: 'פרק לא', value: 31},
    {text: 'פרק לב', value: 32},
    {text: 'פרק לג', value: 33},
    {text: 'פרק לד', value: 34},
    {text: 'פרק לה', value: 35},
    {text: 'פרק לו', value: 36},
    {text: 'פרק לז', value: 37},
    {text: 'פרק לח', value: 38},
    {text: 'פרק לט', value: 39},
    {text: 'פרק מ', value: 40},
    {text: 'פרק מא', value: 41},
    {text: 'פרק מב', value: 42},
    {text: 'פרק מג', value: 43},
    {text: 'פרק מד', value: 44},
    {text: 'פרק מה', value: 45},
    {text: 'פרק מו', value: 46},
    {text: 'פרק מז', value: 47},
    {text: 'פרק מח', value: 48},
    {text: 'פרק מט', value: 49},
    {text: 'פרק נ', value: 50},
  ];

  ngOnInit(): void {
    if(this.chosenArea == 'tora-area'){
      this.customizeButtonByToraArea();
    }
    if(this.chosenArea == 'prophets-area'){
      this.customizeButtonByProphetsArea();
    }
    if(this.chosenArea == 'hagiography-area'){
      this.customizeButtonByHagiographyArea();
    }
  }

  returnToHomePage(){
    this.router.navigate(['/' + this.chosenArea + '']);
  }

  getTheSentence(button:any){
    localStorage['NameOfTheEpisode'] = button.text;
    localStorage['Episode'] = button.value;
    this.router.navigate(['/show-sentence']);
  }

  customizeButtonByToraArea(){
    if(localStorage.getItem('Book') == 'Exodus'){
      this.buttons.splice(this.buttons.length - 10, 10);
    }
    if(localStorage.getItem('Book') == 'Leviticus'){
      this.buttons.splice(this.buttons.length - 23, 23);
    }
    if(localStorage.getItem('Book') == 'Numbers'){
      this.buttons.splice(this.buttons.length - 14, 14);
    }
    if(localStorage.getItem('Book') == 'Deuteronomy'){
      this.buttons.splice(this.buttons.length - 16, 16);
    }
  }

  customizeButtonByProphetsArea(){
    if(localStorage.getItem('Book') == 'Joshua'){
      this.buttons.splice(this.buttons.length - 26, 26);
    }
    if(localStorage.getItem('Book') == 'Judges'){
      this.buttons.splice(this.buttons.length - 29, 29);
    }
    if(localStorage.getItem('Book') == 'I Samuel'){
      this.buttons.splice(this.buttons.length - 19, 19);
    }
    if(localStorage.getItem('Book') == 'II Samuel'){
      this.buttons.splice(this.buttons.length - 26, 26);
    }
    if(localStorage.getItem('Book') == 'I Kings'){
      this.buttons.splice(this.buttons.length - 28, 28);
    }
    if(localStorage.getItem('Book') == 'II Kings'){
      this.buttons.splice(this.buttons.length - 25, 25);
    }
    if(localStorage.getItem('Book') == 'Ezekiel'){
      this.buttons.splice(this.buttons.length - 2, 2);
    }
    if(localStorage.getItem('Book') == 'Hosea'){
      this.buttons.splice(this.buttons.length - 36, 36);
    }
    if(localStorage.getItem('Book') == 'Joel'){
      this.buttons.splice(this.buttons.length - 46, 46);
    }
    if(localStorage.getItem('Book') == 'Amos'){
      this.buttons.splice(this.buttons.length - 41, 41);
    }
    if(localStorage.getItem('Book') == 'Obadiah'){
      this.buttons.splice(this.buttons.length - 49, 49);
    }
    if(localStorage.getItem('Book') == 'Jonah'){
      this.buttons.splice(this.buttons.length - 46, 46);
    }
    if(localStorage.getItem('Book') == 'Micah'){
      this.buttons.splice(this.buttons.length - 43, 43);
    }
    if(localStorage.getItem('Book') == 'Nahum'){
      this.buttons.splice(this.buttons.length - 47, 47);
    }
    if(localStorage.getItem('Book') == 'Habakkuk'){
      this.buttons.splice(this.buttons.length - 47, 47);
    }
    if(localStorage.getItem('Book') == 'Zephaniah'){
      this.buttons.splice(this.buttons.length - 47, 47);
    }
    if(localStorage.getItem('Book') == 'Haggai'){
      this.buttons.splice(this.buttons.length - 48, 48);
    }
    if(localStorage.getItem('Book') == 'Zechariah'){
      this.buttons.splice(this.buttons.length - 36, 36);
    }
    if(localStorage.getItem('Book') == 'Malachi'){
      this.buttons.splice(this.buttons.length - 47, 47);
    }
    if(localStorage.getItem('Book') == 'Isaiah'){
      this.buttons.push({text: 'פרק נא', value: 51});
      this.buttons.push({text: 'פרק נב', value: 52});
      this.buttons.push({text: 'פרק נג', value: 53});
      this.buttons.push({text: 'פרק נד', value: 54});
      this.buttons.push({text: 'פרק נה', value: 55});
      this.buttons.push({text: 'פרק נו', value: 56});
      this.buttons.push({text: 'פרק נז', value: 57});
      this.buttons.push({text: 'פרק נח', value: 58});
      this.buttons.push({text: 'פרק נט', value: 59});
      this.buttons.push({text: 'פרק ס', value: 60});
      this.buttons.push({text: 'פרק סא', value: 61});
      this.buttons.push({text: 'פרק סב', value: 62});
      this.buttons.push({text: 'פרק סג', value: 63});
      this.buttons.push({text: 'פרק סד', value: 64});
      this.buttons.push({text: 'פרק סה', value: 65});
      this.buttons.push({text: 'פרק סו', value: 66});
    }
    if(localStorage.getItem('Book') == 'Jeremiah'){
      this.buttons.push({text: 'פרק נא', value: 51});
      this.buttons.push({text: 'פרק נב', value: 52});
    }
  }

  customizeButtonByHagiographyArea(){
    if(localStorage.getItem('Book') == 'Proverbs'){
      this.buttons.splice(this.buttons.length - 21, 21);
    }
    if(localStorage.getItem('Book') == 'Job'){
      this.buttons.splice(this.buttons.length - 8, 8);
    }
    if(localStorage.getItem('Book') == 'Song of Songs'){
      this.buttons.splice(this.buttons.length - 42, 42);
    }
    if(localStorage.getItem('Book') == 'Ruth'){
      this.buttons.splice(this.buttons.length - 46, 46);
    }
    if(localStorage.getItem('Book') == 'Lamentations'){
      this.buttons.splice(this.buttons.length - 45, 45);
    }
    if(localStorage.getItem('Book') == 'Ecclesiastes'){
      this.buttons.splice(this.buttons.length - 38, 38);
    }
    if(localStorage.getItem('Book') == 'Esther'){
      this.buttons.splice(this.buttons.length - 40, 40);
    }
    if(localStorage.getItem('Book') == 'Daniel'){
      this.buttons.splice(this.buttons.length - 38, 38);
    }
    if(localStorage.getItem('Book') == 'Ezra'){
      this.buttons.splice(this.buttons.length - 40, 40);
    }
    if(localStorage.getItem('Book') == 'Nehemiah'){
      this.buttons.splice(this.buttons.length - 37, 37);
    }
    if(localStorage.getItem('Book') == 'I Chronicles'){
      this.buttons.splice(this.buttons.length - 21, 21);
    }  
    if(localStorage.getItem('Book') == 'II Chronicles'){
      this.buttons.splice(this.buttons.length - 14, 14);
    }
    if(localStorage.getItem('Book') == 'Psalms'){
      this.buttons.push({text: 'פרק נא', value: 51});
      this.buttons.push({text: 'פרק נב', value: 52});
      this.buttons.push({text: 'פרק נג', value: 53});
      this.buttons.push({text: 'פרק נד', value: 54});
      this.buttons.push({text: 'פרק נה', value: 55});
      this.buttons.push({text: 'פרק נו', value: 56});
      this.buttons.push({text: 'פרק נז', value: 57});
      this.buttons.push({text: 'פרק נח', value: 58});
      this.buttons.push({text: 'פרק נט', value: 59});
      this.buttons.push({text: 'פרק ס', value: 60});
      this.buttons.push({text: 'פרק סא', value: 61});
      this.buttons.push({text: 'פרק סב', value: 62});
      this.buttons.push({text: 'פרק סג', value: 63});
      this.buttons.push({text: 'פרק סד', value: 64});
      this.buttons.push({text: 'פרק סה', value: 65});
      this.buttons.push({text: 'פרק סו', value: 66});
      this.buttons.push({text: 'פרק סז', value: 67});
      this.buttons.push({text: 'פרק סח', value: 68});
      this.buttons.push({text: 'פרק סט', value: 69});
      this.buttons.push({text: 'פרק ע', value: 70});
      this.buttons.push({text: 'פרק עא', value: 71});
      this.buttons.push({text: 'פרק עב', value: 72});
      this.buttons.push({text: 'פרק עג', value: 73});
      this.buttons.push({text: 'פרק עד', value: 74});
      this.buttons.push({text: 'פרק עה', value: 75});
      this.buttons.push({text: 'פרק עו', value: 76});
      this.buttons.push({text: 'פרק עז', value: 77});
      this.buttons.push({text: 'פרק עח', value: 78});
      this.buttons.push({text: 'פרק עט', value: 79});
      this.buttons.push({text: 'פרק פ', value: 80});
      this.buttons.push({text: 'פרק פא', value: 81});
      this.buttons.push({text: 'פרק פב', value: 82});
      this.buttons.push({text: 'פרק פג', value: 83});
      this.buttons.push({text: 'פרק פד', value: 84});
      this.buttons.push({text: 'פרק פה', value: 85});
      this.buttons.push({text: 'פרק פו', value: 86});
      this.buttons.push({text: 'פרק פז', value: 87});
      this.buttons.push({text: 'פרק פח', value: 88});
      this.buttons.push({text: 'פרק פט', value: 89});
      this.buttons.push({text: 'פרק צ', value: 90});
      this.buttons.push({text: 'פרק צא', value: 91});
      this.buttons.push({text: 'פרק צב', value: 92});
      this.buttons.push({text: 'פרק צג', value: 93});
      this.buttons.push({text: 'פרק צד', value: 94});
      this.buttons.push({text: 'פרק צה', value: 95});
      this.buttons.push({text: 'פרק צו', value: 96});
      this.buttons.push({text: 'פרק צז', value: 97});
      this.buttons.push({text: 'פרק צח', value: 98});
      this.buttons.push({text: 'פרק צט', value: 99});
      this.buttons.push({text: 'פרק ק', value: 100});
      this.buttons.push({text: 'פרק קא', value: 101});
      this.buttons.push({text: 'פרק קב', value: 102});
      this.buttons.push({text: 'פרק קג', value: 103});
      this.buttons.push({text: 'פרק קד', value: 104});
      this.buttons.push({text: 'פרק קה', value: 105});
      this.buttons.push({text: 'פרק קו', value: 106});
      this.buttons.push({text: 'פרק קז', value: 107});
      this.buttons.push({text: 'פרק קח', value: 108});
      this.buttons.push({text: 'פרק קט', value: 109});
      this.buttons.push({text: 'פרק קי', value: 110});
      this.buttons.push({text: 'פרק קיא', value: 111});
      this.buttons.push({text: 'פרק קיב', value: 112});
      this.buttons.push({text: 'פרק קיג', value: 113});
      this.buttons.push({text: 'פרק קיד', value: 114});
      this.buttons.push({text: 'פרק קטו', value: 115});
      this.buttons.push({text: 'פרק קטז', value: 116});
      this.buttons.push({text: 'פרק קיז', value: 117});
      this.buttons.push({text: 'פרק קיח', value: 118});
      this.buttons.push({text: 'פרק קיט', value: 119});
      this.buttons.push({text: 'פרק קכ', value: 120});
      this.buttons.push({text: 'פרק קכא', value: 121});
      this.buttons.push({text: 'פרק קכב', value: 122});
      this.buttons.push({text: 'פרק קכג', value: 123});
      this.buttons.push({text: 'פרק קכד', value: 124});
      this.buttons.push({text: 'פרק קכה', value: 125});
      this.buttons.push({text: 'פרק קכו', value: 126});
      this.buttons.push({text: 'פרק קכז', value: 127});
      this.buttons.push({text: 'פרק קכח', value: 128});
      this.buttons.push({text: 'פרק קכט', value: 129});
      this.buttons.push({text: 'פרק קל', value: 130});
      this.buttons.push({text: 'פרק קלא', value: 131});
      this.buttons.push({text: 'פרק קלב', value: 132});
      this.buttons.push({text: 'פרק קלג', value: 133});
      this.buttons.push({text: 'פרק קלד', value: 134});
      this.buttons.push({text: 'פרק קלה', value: 135});
      this.buttons.push({text: 'פרק קלו', value: 136});
      this.buttons.push({text: 'פרק קלז', value: 137});
      this.buttons.push({text: 'פרק קלח', value: 138});
      this.buttons.push({text: 'פרק קלט', value: 139});
      this.buttons.push({text: 'פרק קמ', value: 140});
      this.buttons.push({text: 'פרק קמא', value: 141});
      this.buttons.push({text: 'פרק קמב', value: 142});
      this.buttons.push({text: 'פרק קמג', value: 143});
      this.buttons.push({text: 'פרק קמד', value: 144});
      this.buttons.push({text: 'פרק קמה', value: 145});
      this.buttons.push({text: 'פרק קמו', value: 146});
      this.buttons.push({text: 'פרק קמז', value: 147});
      this.buttons.push({text: 'פרק קמח', value: 148});
      this.buttons.push({text: 'פרק קמט', value: 149});
      this.buttons.push({text: 'פרק קנ', value: 150});
    }
  }

}

