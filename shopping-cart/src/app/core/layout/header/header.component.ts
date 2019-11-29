import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private shoppingCartDataService: ShoppingCartDataService) { }
   addHamburgerCss = false;
   skipLinkPath: string;
  ngOnInit() {
    this.shoppingCartDataService.urlLocation.subscribe((urlLocation: string) => {
      this.skipLinkPath = urlLocation;
    });
    console.log(this.skipLinkPath);
  }
  hamburgerClicked() {
    this.addHamburgerCss = !this.addHamburgerCss;
  }

}
