import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule, Routes} from "@angular/router";
import { WeatherComponent } from './weather/weather.component';
import { DateComponent } from './date/date.component';
import { DropdownComponent } from './navigation/dropdown/dropdown.component';
import {HttpClientModule} from "@angular/common/http";
import { ImageService } from './weather/image.service';
import {DomSanitizer} from "@angular/platform-browser";


const appRoutes: Routes = [
  { path: 'pogoda', component: WeatherComponent},
  { path: 'data', component: DateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WeatherComponent,
    DateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} //do debugowania
    ),
    DropdownComponent,
    HttpClientModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
