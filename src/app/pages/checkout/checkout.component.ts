import { Component } from '@angular/core';
import { Product } from 'src/app/models/products';
import { Account } from 'src/app/models/accounts';
import { ProductService } from 'src/app/services/productService';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cart: Array<Product> | undefined;
  account: Account = {
    id:0,
    username:'',
    password:'',
    balance: 0,
    isLoggedIn:true,
    cart:[]
  }

  checkoutMessage:Boolean = false;
  constructor(private productService:ProductService, public authService:AuthService){}

  // displays each item in user's cart
  ngOnInit():void{
    this.authService.getCartByID(this.authService.loginID).subscribe(data => {
      console.log(data);
      this.account = data as Account;
      this.cart = this.account.cart;
      console.log(this.account.cart);
    })
  }

  // Sends patch request to the backend to clear the user's cart and set their
  // balance to 0. Message is shown to say order is complete
  checkout(accountID:number):void{
    this.productService.checkout(accountID).subscribe(data => {
      console.log(data);
      this.ngOnInit();
      this.checkoutMessage = true;
    })
  }

}
