import { Component, OnInit } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';
import { BannersResponse } from 'src/app/models/banners-res-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slideIndex = 1;
  divStyle1: any;
  divStyle2: any;
  divStyle3: any;
  constructor(private shoppingCartDataService: ShoppingCartDataService) { }
  banners: BannersResponse[];

  ngOnInit() {
    this.showSlides(this.slideIndex);
    this.getBannersData();

  }

  getBannersData() {
    this.shoppingCartDataService.getBanners().subscribe((res: BannersResponse[]) => {
      this.banners = res;
      console.log(this.banners);
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
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      /* console.log(slides[i]); */
      /*   slides[i].style.display = "none";   */
      if (slides[this.slideIndex - 1]) {
        slides[i].className += ' abc';
      }
      /*  this.divStyle1 = 'none'; */

      /*   (document.querySelector('.app-alerts') as HTMLElement).style.top = '150px'; */
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active','');
    }
    /*  slides[this.slideIndex-1].style.display = "block";  */
    if (slides[this.slideIndex - 1]) {
      slides[this.slideIndex - 1].className += ' newBlock';
     /*  slides[this.slideIndex - 1].className.replace(' newBlock', ' abc'); */
    }
    /*  this.divStyle1 = 'block';  */
    if (slides[this.slideIndex - 1]) {
    dots[this.slideIndex - 1].className += ' active';
    }
    /*  this.divStyle2 = 'active'; */

  }
}
/* .abc {
  display: none;
}

.newBlock {
  display: block;
} */