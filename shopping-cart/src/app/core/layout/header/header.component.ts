import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';
import { CartDataService } from 'src/app/services/cart-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private shoppingCartDataService: ShoppingCartDataService,
              private cartData: CartDataService) { }
   addHamburgerCss = false;
   skipLinkPath: string;
   openCartFlag = false;
   totalItems = 0;
  ngOnInit() {
    this.shoppingCartDataService.urlLocation.subscribe((urlLocation: string) => {
      this.skipLinkPath = urlLocation;
    });
    this.cartData.openCloseCart.subscribe(data => this.openCartFlag = data);
    console.log(this.skipLinkPath);
    this.cartData.cartDataChange.subscribe(() => {
      this.totalItems = this.cartData.totalCartitems;
     /*  this.cartData.products.forEach(product => this.totalItems = this.totalItems + product.number); */
    });
  }
  hamburgerClicked() {
    this.addHamburgerCss = !this.addHamburgerCss;
  }

  openCart() {
    this.openCartFlag = !this.openCartFlag;
    this.cartData.openCloseCart.next(this.openCartFlag);

  /*   this.openCartFlag = !this.openCartFlag; */
 /*    console.log(this.openCartFlag); */
  }

}
