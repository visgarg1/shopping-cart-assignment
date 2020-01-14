import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-skip-to-main',
  templateUrl: './skip-to-main.component.html',
  styleUrls: ['./skip-to-main.component.scss']
})
export class SkipToMainComponent implements OnInit {

  constructor() { }

  skipLinkPath: string;

  ngOnInit() {
 this.skipLinkPath = `${window.location.pathname}#main-content`;
  }

}
