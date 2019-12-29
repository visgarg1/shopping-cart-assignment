import { Component, OnInit, Input } from '@angular/core';
import { BannersResponse } from 'src/app/models/banners-res-model';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';

@Component({
  selector: 'sb-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() banners: BannersResponse[];
  slideIndex = 1;
  bannerStyle: any[] = [];
  

  constructor() { }

  ngOnInit() {
   
    setInterval(() => {
      this.slideIndex = this.slideIndex + 1;
      this.showSlides(this.slideIndex);
    }, 4000);
    this.showSlides(this.slideIndex);
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
    if (dots[this.slideIndex - 1] && dots[this.slideIndex - 1].className) {
      dots[this.slideIndex - 1].className += ' active';
    }
  }
}
