import { Component, Input, ViewChildren, QueryList, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PRODUCTS_MOCK } from '../../mocks/products.mock';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductCardComponent) cards!: QueryList<ProductCardComponent>;

  private somePrivate! : string;

  @Input()
  productsInput!: Product[];

  products: Product[] = [];

  // inject class ProductService
  constructor(private productsService: ProductService) {
    // better to init in ngInit method (lifecycle hooks)
    // this.products = productsService.products;
  }

  // init products
  ngOnInit(): void {
    this.products = this.productsService.products;
  }
}
