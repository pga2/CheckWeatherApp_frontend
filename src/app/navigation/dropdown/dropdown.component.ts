import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  standalone: true,
  imports: [NgbDropdownModule, RouterLink],
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

}
