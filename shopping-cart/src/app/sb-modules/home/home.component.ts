import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';
import { BannersResponse } from 'src/app/models/banners-res-model';
import { CategoriesResponse } from 'src/app/models/categories-res';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
/*   encapsulation: ViewEncapsulation.None */
})
export class HomeComponent implements OnInit {

  categories: CategoriesResponse[];
  skipLinkPath: string;
  banners: BannersResponse[];

  constructor(private shoppingCartDataService: ShoppingCartDataService) { }

  ngOnInit() {
    this.shoppingCartDataService.urlLocation.next(`${window.location.pathname}#main-content`);
    this.getBannersData();
    this.getCategories();
  }

  getBannersData() {
    this.shoppingCartDataService.getBanners().subscribe((res: BannersResponse[]) => {
      this.banners = res;
    });
  }

  getCategories() {
    this.shoppingCartDataService.getCategories().subscribe((res: CategoriesResponse[]) => {
      this.categories = res;
      this.categories = this.categories.filter(a => a.order > 0);
      this.categories.sort((a, b) => a.order - b.order);
      console.log(this.categories);
    });
  }
}

