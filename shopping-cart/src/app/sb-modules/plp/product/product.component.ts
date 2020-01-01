import { Component, OnInit, Input } from '@angular/core';
import { ProductsResponse } from 'src/app/models/products-res';
import { CartDataService } from 'src/app/services/cart-data.service';

@Component({
  selector: 'sb-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product : ProductsResponse;
  constructor(private cartData: CartDataService) { }

  ngOnInit() {
  }

  buyNow(product: ProductsResponse) {
    this.cartData.addProduct(product);
  }

}
