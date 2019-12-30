import { Component, OnInit, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CategoriesResponse } from 'src/app/models/categories-res';

@Component({
  selector: 'sb-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() categories: CategoriesResponse[];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  plpPageId(id: string) {
    const navigationExtras: NavigationExtras = {
      state: {
        productId: id
      }
    };
    this.router.navigate(['plp'], navigationExtras);
  }
}
