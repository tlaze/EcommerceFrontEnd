import { Component} from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/productService';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private productService: ProductService){}

  products: Array<Product> | undefined;

  ngOnInit():void{
    this.getProducts();
  }

  getProducts():void{
    
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }

}
