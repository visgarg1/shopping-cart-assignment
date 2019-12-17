import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

   openCart = false;
  constructor(private shoppingCartDataService: ShoppingCartDataService) { }

  ngOnInit() {
this.shoppingCartDataService.openCloseCart.subscribe(data => this.openCart = data);
  }
  closeCart() {
    this.shoppingCartDataService.openCloseCart.next(false);
  }
}
