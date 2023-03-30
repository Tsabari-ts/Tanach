import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../api-call.service';



@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {
  holidays:any;
isHolidayOrShabat = false;
property = true;

  constructor(private apiService:ApiCallService, private ngZone: NgZone, private router: Router, private cdr: ChangeDetectorRef) { 
    this.apiService.getHolidays().subscribe(data => {
      this.holidays = data;
      console.log(this.holidays)
    });

    setInterval(() => {
      this.isHolidayOrShabat = this.isHoliday() || this.isShabbat();
      this.cdr.detectChanges();
    }, 10);
  }
  
  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        if (this.isHoliday() || this.isShabbat()) {
          console.log('is shabes');
          this.isHolidayOrShabat;
        }
        else{
          this.isHolidayOrShabat;
        this.ngZone.run(() => {
          this.router.navigate(['/home-page']);
        });}
      }, 5000);
    });

  }
  isShabbat() {
return false;
  }

  isHoliday() {
return false;
  }

  // isShabbat() {
  //   const currentDate = new Date();
  //   return this.holidays.items.some((date: { date: string | number | Date; category: string; }) => {
  //     const eventDate = new Date(date.date)
  //     return eventDate.getTime() === currentDate.getTime() && date.category === "shabbat";
  //   });
  // }

  // isHoliday() {
  //   const currentDate = new Date();
  //   return this.holidays.items.some((date: { date: string | number | Date; category: string; }) => {
  //     const eventDate = new Date(date.date)
  //     return eventDate.getTime() === currentDate.getTime() && 
  //     (date.category === "rosh_hashana" || date.category === "yom_kippur" || date.category === "sukkot" ||
  //     date.category === "simchat_torah" || date.category === "pesach" || date.category === "shavuot")
  //   });
  // }
}

