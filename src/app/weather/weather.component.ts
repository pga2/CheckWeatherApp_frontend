import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient  } from '@angular/common/http';

import {Observable} from "rxjs";
import {ImageService} from "./image.service";
import {DomSanitizer} from "@angular/platform-browser";
import {WeatherArrayComponent} from "./weather-array/weather-array.component";
import {DataService} from "../Datatransfer";

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
  weatherCity: string = 'Katowice';
  currentDay: string = '';
  currentDate: string = '';

  weatherPressure: number=1;
  weatherVisibility: number=1;
  weatherHumidity: number=1;
  weatherWindSpeed: number=1;
  weatherWindDeg: number=1;

  tempsPerDay: number[] = [];


  temp: number = 0;

  map: any;

  constructor(private http: HttpClient,
              private imageService: ImageService,
              private sanitizer: DomSanitizer,
              private dataService: DataService) {

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
      this.getMap();
      this.weatherCity = res.city;
      console.log(res);
    })
  }

  private getMap() {
    this.http.get('https://maps.google.com/maps?q='+this.lat+','+this.lon+'&t=&z=15&ie=UTF8&iwloc=&output=embed').subscribe((res: any) => {
      this.map = res;
    })
  }

  private getWeather() {
    this.http.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + this.lat + '&lon=' + this.lon +
      '&appid=5eca8f996cd6a42c004008c32442acb7')
      .subscribe((res: any) => {
        this.weather = res.current.weather[0].main;
        this.weatherDescription = res.current.weather[0].description;
        this.weatherPressure = res.current.pressure;
        this.weatherHumidity = res.current.humidity;
        this.weatherVisibility = res.current.visibility;
        this.weatherWindSpeed = res.current.wind_speed;
        this.weatherWindDeg = res.current.wind_deg;
        this.weatherDescription = this.capitalizeFirstLetter(this.weatherDescription);
        this.temp = res.current.temp;
        this.getWeatherImage(res.current.weather[0].icon);
        for(let i = 1; i < 6; i++) {
          this.tempsPerDay.push(res.daily[i].temp.day);
        }
        this.dataService.push(this.tempsPerDay);
        console.log(this.tempsPerDay)
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
