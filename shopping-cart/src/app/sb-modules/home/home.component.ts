import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';
import { BannersResponse } from 'src/app/models/banners-res-model';
import { CategoriesResponse } from 'src/app/models/categories-res';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  slideIndex = 1;
  bannerStyle: any[] = [];
  divStyle1: any;
  divStyle2: any;
  divStyle3: any;
  constructor(private shoppingCartDataService: ShoppingCartDataService, private router: Router ) { }
  banners: BannersResponse[];
  categories: CategoriesResponse[];

  ngOnInit() {
    this.getBannersData();
    this.getCategories();
    this.showSlides(this.slideIndex);
  }

  ngAfterViewInit() {
  }

  getBannersData() {
    this.shoppingCartDataService.getBanners().subscribe((res: BannersResponse[]) => {
      this.banners = res;
    });
  }

  getCategories() {
    this.shoppingCartDataService.getCategories().subscribe((res: CategoriesResponse[]) => {
      this.categories = res;
      console.log(this.categories);
    });
  }



  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        this.bannerStyle[i] = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    this.bannerStyle[this.slideIndex - 1] = 'block';
    dots[this.slideIndex - 1].className += ' active';

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

