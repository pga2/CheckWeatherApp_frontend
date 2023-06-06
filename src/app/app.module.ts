import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { WeatherComponent } from './weather/weather.component';
import {HttpClientModule} from "@angular/common/http";
import { ImageService } from './weather/image.service';
import {DomSanitizer} from "@angular/platform-browser";
import { WeatherArrayComponent } from './weather/weather-array/weather-array.component';
import { SafePipe } from './safe.pipe';
import {DynamicDirective} from "./weather/weather.directive";


const appRoutes: Routes = [
  { path: 'pogoda', component: WeatherComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherArrayComponent,
    SafePipe,
    DynamicDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} //do debugowania
    ),
    HttpClientModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
