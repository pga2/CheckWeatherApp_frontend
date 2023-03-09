import {Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  openSidenavFlag = false;
  public innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    console.log();
    if ((<Window> event.target).innerWidth < 600) {
      this.openSidenavFlag = true;
    } else {
      this.openSidenavFlag = false;
    }
  }

  ngOnInit(): void {
    this.openSidenavFlag = true;
    if (window.innerWidth < 600) {
      this.openSidenavFlag = true;
    } else {
      this.openSidenavFlag = false;
    }

  }


}
