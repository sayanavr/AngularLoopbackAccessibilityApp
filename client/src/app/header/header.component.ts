import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { style } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public showContainer: boolean;
  constructor(public breakpointObserver: BreakpointObserver) {}


  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 550px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log("more than 550px");

          let mynavbar = document.getElementsByClassName('mynavbar') as HTMLCollectionOf<HTMLElement>;
        if (mynavbar.length != 0) {
          mynavbar[0].style.width = "100%";
          }

          this.showContainer = true;
        } else {
          console.log("less than 550px");

          let mynavbar = document.getElementsByClassName('mynavbar') as HTMLCollectionOf<HTMLElement>;
        if (mynavbar.length != 0) {
          mynavbar[0].style.width = "550px";
          }

          this.showContainer = false;
        }
      });
  }

}
