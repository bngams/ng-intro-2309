import { Component, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { PRODUCTS_MOCK } from '../../mocks/products.mock';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent {

  // @ViewChildren
  @ViewChild(ProductListComponent)
  productList!: ProductListComponent;

  products: Product[] = PRODUCTS_MOCK;

  addProduct(product: Product): void {
    // add product to list
    console.log(product);

    // with input
    this.products.push(product);

    // with view child
    this.productList.products.push(product);
  }
}
