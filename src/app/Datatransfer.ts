import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataTransferSubject = new Subject<number[]>()
  dataTransferObservable = this.dataTransferSubject.asObservable();

  push(str: number[]) {
    this.dataTransferSubject.next(str);
  }
}
