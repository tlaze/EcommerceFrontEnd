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

  constructor(private productService: ProductService, public authService:AuthService){}

  products: Array<Product> | undefined;

  ngOnInit():void{
    this.getProducts();
  }

  getProducts():void{
    
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    })
  }

  addToCart(accountID:number, product:Product):void{
    this.productService.addToCart(accountID, product).subscribe(data => {
      console.log(data);
    })
  }

}
