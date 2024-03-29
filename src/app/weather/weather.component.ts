import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  createComponent, Type, ViewEncapsulation
} from '@angular/core';
import { HttpClient  } from '@angular/common/http';

import {Observable} from "rxjs";
import {ImageService} from "./image.service";
import {DomSanitizer} from "@angular/platform-browser";
import {WeatherArrayComponent} from "./weather-array/weather-array.component";
import {DataService} from "../Datatransfer";
import {DynamicDirective} from "./weather.directive";
import {DynamicComponent} from "../protected/department/dynamic.component";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  ipAddress: string = 'Ładuję';
  lon: number = 1;
  lat: number = 1;
  weather: string = 'Ładuję';
  weatherDescription: string = 'Ładuję'
  weatherImage: any;
  imageLoaded: boolean = false;
  weatherCity: string = 'Ładuję';
  currentDay: string = '';
  currentDate: string = '';


  weatherPressure: number=1;
  weatherVisibility: number=1;
  weatherHumidity: number=1;
  weatherWindSpeed: number=1;
  weatherWindDeg: number=1;

  tempsPerDay: number[] = [];
  datess: string[] = [];


  temp: number = 0;

  map: any;


  @ViewChild(DynamicDirective, {static: true}) private dynamicHost!: DynamicDirective;
  constructor(private http: HttpClient,
              private imageService: ImageService,
              private sanitizer: DomSanitizer,
              private dataService: DataService,
              private resolver: ComponentFactoryResolver) {

  }

  private messages: { type: Type<DynamicComponent> }=
    { type: WeatherArrayComponent };

  private loadComponent(tempsPerDay: number[]): void {
    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<DynamicComponent>(this.messages.type);
    componentRef.setInput('temps', tempsPerDay);
    componentRef.setInput('dates', this.datess);
  }


  ngOnInit() {
    this.getIPAddress();
    this.getCurrentDay();
    this.getCurrentDate();
    this.uncheckCheckbox();
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
    this.http.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + this.lat + '&lon=' + this.lon
      + '&units=metric' + '&appid=5eca8f996cd6a42c004008c32442acb7')
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
        this.http.post<any>('http://localhost:8080/addWeather',
          {
            "lon": this.lon,
            "lat": this.lat,
            "date": this.getCurrentDate(),
            "sunrise": res.current.sunrise,
            "sunset": res.current.sunset,
            "temp": res.current.temp,
            "humidity": res.current.humidity,
            "pressure": res.current.pressure,
            "main": res.current.weather[0].main,
            "description": res.current.weather[0].description
          }).subscribe();
        this.http.get('http://localhost:8080/getHistoricalWeather?lon=' + this.lon +'&lat='+this.lat).subscribe((res: any) => {
          console.log(res);
          for(let i = 6; i < 11; i++) {
            this.tempsPerDay.push(res[i-6].temp);
            console.log(new Date(res[i-6].date).toString());
            this.datess.push(new Date(res[i-6].date).toString().substring(0, 11));
          }
          this.loadComponent(this.tempsPerDay);
        })
      })
  }

  private getWeatherImage(imageId: string) {
    this.imageService.downloadPDF('https://openweathermap.org/img/w/' + imageId + '.png').subscribe(res => this.createImageFromBlob(res))
  }

  createImageFromBlob(image: Blob) {
    let objectUrl = URL.createObjectURL(image);
    this.weatherImage = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
    this.imageLoaded = true;
  }

  getCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    this.currentDay = days[currentDate.getDay()];
  }

  getCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    this.currentDate = `${day}.${month}.${year}`;
  }

  private capitalizeFirstLetter(string : string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  uncheckCheckbox() {
    var myhref1 = document.getElementById("uncheck1");
    var myhref2 = document.getElementById("uncheck2");
    var myhref3 = document.getElementById("uncheck3");
    var myhref4 = document.getElementById("uncheck4");
    var myfield = document.getElementById("box");
    // @ts-ignore
    myhref1.addEventListener("click", function() {
      // @ts-ignore
      myfield.checked = false;
    });
    // @ts-ignore
    myhref2.addEventListener("click", function() {
      // @ts-ignore
      myfield.checked = false;
    });
    // @ts-ignore
    myhref3.addEventListener("click", function() {
      // @ts-ignore
      myfield.checked = false;
    });
    // @ts-ignore
    myhref4.addEventListener("click", function() {
      // @ts-ignore
      myfield.checked = false;
    });
  }

}
