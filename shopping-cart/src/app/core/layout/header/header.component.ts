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
   openCartFlag = false;
  ngOnInit() {
    this.shoppingCartDataService.urlLocation.subscribe((urlLocation: string) => {
      this.skipLinkPath = urlLocation;
    });
    this.shoppingCartDataService.openCloseCart.subscribe(data => this.openCartFlag = data);
    console.log(this.skipLinkPath);
  }
  hamburgerClicked() {
    this.addHamburgerCss = !this.addHamburgerCss;
  }

  openCart() {
    this.openCartFlag = !this.openCartFlag;
    this.shoppingCartDataService.openCloseCart.next(this.openCartFlag);
    
  /*   this.openCartFlag = !this.openCartFlag; */
 /*    console.log(this.openCartFlag); */
  }

}
