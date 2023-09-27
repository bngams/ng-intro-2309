import { Component, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent {

  // @ViewChildren
  @ViewChild(ProductListComponent)
  productList!: ProductListComponent;

  products: Product[] = [
    { title: 'product 1', price: 10 },
    { title: 'product 2', price: 20 },
    { title: 'product 3', price: 30 },
  ]

  addProduct(product: Product): void {
    // add product to list
    console.log(product);

    // with input
    this.products.push(product);

    // with view child
    this.productList.products.push(product);
  }
}
