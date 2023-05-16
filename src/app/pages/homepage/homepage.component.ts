import { Component} from '@angular/core';
import { Product } from 'src/app/models/products';
import { Account } from 'src/app/models/accounts';
import { ProductService } from 'src/app/services/productService';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  products: Array<Product> | undefined;

  constructor(private productService: ProductService, public authService:AuthService){}

  ngOnInit():void{
    this.getProducts();
  }

  // Displays all products on the homepage
  getProducts():void{
    
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    })
  }

  // Sends a post request to the backend to add item to specified user's card
  addToCart(accountID:number, product:Product):void{
    this.productService.addToCart(accountID, product).subscribe(data => {
      console.log(data);
    })
  }
}
