import { Component, OnInit } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';
import { ProductsResponse } from 'src/app/models/products-res';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.scss']
})
export class PlpComponent implements OnInit {

  constructor(private shoppingCartDataService: ShoppingCartDataService) { }

  productsRes: ProductsResponse[];
  selectedProduts: ProductsResponse[];
  category: string;
  categorySelected = 'all';
  categories = {
    fruits: '5b6899953d1a866534f516e2',
    bakery: '5b6899123d1a866534f516de',
    beverage: '5b675e5e5936635728f9fc30',
    beauty: '5b68994e3d1a866534f516df',
    baby: '5b6899683d1a866534f516e0'
  };

  ngOnInit() {
      this.fetchProducts();
  }

  fetchProducts() {
    this.shoppingCartDataService.getProducts().subscribe((productData: ProductsResponse[]) => {
      this.productsRes = productData;
      this.selectedProduts = productData;
    });
  }

  categorySelect(categoryCode: string) {
   this.categorySelected = categoryCode;
   this.selectedProduts = this.productsRes.filter(element => element.category === categoryCode);
   console.log(this.selectedProduts);

  }
}
