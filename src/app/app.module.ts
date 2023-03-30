import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ToraAreaComponent } from './tora-area/tora-area.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProphetsAreaComponent } from './prophets-area/prophets-area.component';
import { HagiographyAreaComponent } from './hagiography-area/hagiography-area.component';
import { ShowEpisodeComponent } from './show-episode/show-episode.component';
import { ShowSentenceComponent } from './show-sentence/show-sentence.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntranceComponent } from './entrance/entrance.component';

@NgModule({
  declarations: [
    AppComponent,
    ToraAreaComponent,
    HomePageComponent,
    ProphetsAreaComponent,
    HagiographyAreaComponent,
    ShowEpisodeComponent,
    ShowSentenceComponent,
    EntranceComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:"",redirectTo:"entrance",pathMatch:"full"},
      {path:"entrance", component:EntranceComponent},
      {path:"home-page",component:HomePageComponent},
      {path:"tora-area",component:ToraAreaComponent},
      {path:"prophets-area",component:ProphetsAreaComponent},
      {path:"hagiography-area",component:HagiographyAreaComponent},
      {path:"show-episode",component:ShowEpisodeComponent},
      {path:"show-sentence",component:ShowSentenceComponent},
      {path:"*",redirectTo:"home-page"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
