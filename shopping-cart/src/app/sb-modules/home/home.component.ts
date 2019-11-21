import { Component, OnInit } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';
import { BannersResponse } from 'src/app/models/banners-res-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private shoppingCartDataService: ShoppingCartDataService) { }
  banners: BannersResponse[];

  ngOnInit() {
this.getBannersData();

  }

  getBannersData() {
    this.shoppingCartDataService.getBanners().subscribe((res:BannersResponse[])=>{
      this.banners = res;
      console.log(this.banners);
    });
  }


}
