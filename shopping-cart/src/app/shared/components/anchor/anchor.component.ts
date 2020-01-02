import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent implements OnInit {

  @Input() href: string;
  @Input() title: string;
  @Input() routerlink: string;
  @Input() class: string;
  /* @Input() href: string;
  @Input() href: string;
  @Input() href: string; */


  constructor() { }

  ngOnInit() {
  }

}
