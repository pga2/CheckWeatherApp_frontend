import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

import {Observable} from "rxjs";
import {ImageService} from "./image.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

  ipAddress: string = 'Ładuję';
  lon: number = 1;
  lat: number = 1;
  weather: string = 'Ładuję';
  weatherDescription: string = 'Ładuję'
  weatherImage: any;
  imageLoaded: boolean = false;
  constructor(private http:HttpClient,
              private imageService: ImageService,
              private sanitizer: DomSanitizer) {

  }


  ngOnInit() {
    this.getIPAddress();
  }

  private getIPAddress() {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res: any) => {
      this.ipAddress = res.ip;
      this.getLonAndLat();
    });
  }

  private getLonAndLat() {
    this.http.get('http://ip-api.com/json/' + this.ipAddress).subscribe((res: any) => {
      this.lon = res.lon;
      this.lat = res.lat;
      this.getWeather();
    })
  }

  private getWeather() {
    this.http.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + this.lat + '&lon=' + this.lon +
      '&appid=5eca8f996cd6a42c004008c32442acb7')
      .subscribe((res: any) => {
      this.weather = res.current.weather[0].main;
      this.weatherDescription = res.current.weather[0].description;
      this.getWeatherImage(res.current.weather[0].icon);
      console.log(res);
    })
  }

  private getWeatherImage(imageId: string) {
    this.imageService.downloadPDF('https://openweathermap.org/img/w/' + imageId + '.png').subscribe(res =>  this.createImageFromBlob(res))
  }

  createImageFromBlob(image: Blob) {
    let objectUrl = URL.createObjectURL(image);
    this.weatherImage = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
    this.imageLoaded = true;
  }

}
