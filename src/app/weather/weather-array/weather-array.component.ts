import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription, takeWhile} from "rxjs";
import {DataService} from "../../Datatransfer";

@Component({
  selector: 'app-weather-array',
  templateUrl: './weather-array.component.html',
  styleUrls: ['./weather-array.component.css']
})
export class WeatherArrayComponent implements OnInit{
  fruits: number[] = [1, 1, 4];
  constructor(private dataService: DataService) { }



  ngOnInit() {
    interval(1000)
      .pipe(takeWhile(() => !stop))
      .subscribe(() => {
        this.dataService.dataTransferObservable.subscribe(str => {
          this.fruits=str;
        });
      });
  }

}
