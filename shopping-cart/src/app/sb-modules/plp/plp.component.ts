import { Component, OnInit } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';
import { ProductsResponse } from 'src/app/models/products-res';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
import { CartDataService } from 'src/app/services/cart-data.service';

@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.scss']
})
export class PlpComponent implements OnInit {

  constructor(private shoppingCartDataService: ShoppingCartDataService, 
              private router: Router, private cartData: CartDataService) {

    if (this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras &&
    this.router.getCurrentNavigation().extras.state &&
     this.router.getCurrentNavigation().extras.state.productId) {
      this.homeproductId = this.router.getCurrentNavigation().extras.state.productId;
      }
  }

  productsRes: ProductsResponse[];
  selectedProduts: ProductsResponse[];
  category: string;
  categorySelected : string;
  categories = [{ name: 'Fruits & Vegitables' , value: '5b6899953d1a866534f516e2' },
  { name: 'Backery Cakes and Dairy' , value: '5b6899123d1a866534f516de' },
  { name: 'Beverages' , value: '5b675e5e5936635728f9fc30' },
  { name: 'Beauty and Hygiene' , value: '5b68994e3d1a866534f516df' },
  { name: 'Baby Care' , value: '5b6899683d1a866534f516e0' }];

  homeproductId: string;
 
  ngOnInit() {
    this.shoppingCartDataService.urlLocation.next(`${window.location.pathname}#main-content`);
    this.fetchProducts();
  }


  fetchProducts() {
    this.shoppingCartDataService.getProducts().subscribe((productData: ProductsResponse[]) => {
      this.productsRes = productData;
      this.selectedProduts = productData;

      if (this.homeproductId) {
        this.categorySelect(this.homeproductId);
      }
    });
  }

  categorySelect(categoryCode: string) {
   this.categorySelected = categoryCode;
   this.selectedProduts = this.productsRes.filter(element => element.category === categoryCode);
   console.log(this.selectedProduts);

  }

  buyNow(product: ProductsResponse) {
    this.cartData.addProduct(product);
  }
}
