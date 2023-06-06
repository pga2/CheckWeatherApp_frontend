import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription, takeWhile} from "rxjs";
import {DataService} from "../../Datatransfer";
import {DynamicComponent} from "../../protected/department/dynamic.component";

@Component({
  selector: 'app-weather-array',
  templateUrl: './weather-array.component.html',
  styleUrls: ['./weather-array.component.css']
})
export class WeatherArrayComponent implements DynamicComponent{
  @Input() temps: number[] = [];

  days: string[] =[];
  constructor() { }


  getCurrentDay(pos: number) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    return days[currentDate.getDay() + pos];
  }
}
