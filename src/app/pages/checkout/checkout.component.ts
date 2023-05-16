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
  constructor(private productService:ProductService, private authService:AuthService){}

  ngOnInit():void{
    this.authService.getCartByID(this.authService.loginID).subscribe(data => {
      console.log(data);
      this.account = data as Account;
      this.cart = this.account.cart;
      console.log(this.account.cart);
    })
  }

  checkout():void{
    console.log("checkout");
    // console.log(this.authService.loginID);
    this.authService.getCartByID(this.authService.loginID).subscribe(data => {
      console.log(data);
    })
  }

}
