import { Component, OnInit } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';
import { BannersResponse } from 'src/app/models/banners-res-model';
import { CategoriesResponse } from 'src/app/models/categories-res';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: CategoriesResponse[];
  skipLinkPath: string;
  banners: BannersResponse[];

  constructor(private shoppingCartDataService: ShoppingCartDataService, private router: Router) { }
  
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
      console.log(res);
    });
  }

  plpPageId(id: string) {
    const navigationExtras: NavigationExtras = {
      state: {
        productId: id
      }
    };
    this.router.navigate(['plp'], navigationExtras);
    /* this.router.navigate(['action-selection'], { state: { example: 'bar' } }); */
  }
}

