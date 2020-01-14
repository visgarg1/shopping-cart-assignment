import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';
import { CartDataService } from 'src/app/services/cart-data.service';
import { reject } from 'q';
import { promise } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private shoppingCartDataService: ShoppingCartDataService,
              private cartData: CartDataService) { }
  addHamburgerCss = false;
  skipLinkPath: string;
  openCartFlag = false;
  totalItems = 0;
  item = 'items';
  promisetest: any;
/*   name = {}; */

  ngOnInit() {
/* this.name.first = 'dsdasdad'; */
    /* var promise = new Promise(function(resolve, reject) { 
      let x = "geeksforgeeks"; 
      let y = "geeksforgeek";
      if(x === y) { 
        resolve(); 
      } else { 
        reject(); 
      } 
    }); 
      
    promise. 
        then(function () { 
            console.log('Success, You are a GEEK'); 
        }). 
        catch(function () { 
            console.log('Some error has occured'); 
        });  */







    this.promise();
 /*    this.test(); */
  /*   this.shoppingCartDataService.urlLocation.subscribe((urlLocation: string) => {
      this.skipLinkPath = urlLocation;
    }); */
    this.cartData.openCloseCart.subscribe(data => this.openCartFlag = data);
    this.cartData.cartDataChange.subscribe(() => {
      this.totalItems = this.cartData.totalCartitems;
    });
  }

/*   test() {
    this.test();
  }
 */
  hamburgerClicked() {
    this.addHamburgerCss = !this.addHamburgerCss;
  }

  openCart() {
    this.openCartFlag = !this.openCartFlag;
    this.cartData.openCloseCart.next(this.openCartFlag);
  }

  promise() {
     this.promisetest = new Promise((resolve, reject) => {
       setTimeout(() => {
        console.log('inside the promise');
        if (this.totalItems > 0) {
        resolve('Welcome! Nice to meet you.');
        } else {
          reject('inside error');
        }
       }, 300);
    });
     this.promisetest.then((data: any) => { 
       console.log(data);
      }, () => {}
      ).catch((err) => {
console.log(err);
      });
    }

  testPromise() {

  }

}
