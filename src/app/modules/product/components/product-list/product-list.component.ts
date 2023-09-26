import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [
    { title: 'product 1', price: 10 },
    { title: 'product 2', price: 20 },
    { title: 'product 3', price: 30 },
  ]
}
