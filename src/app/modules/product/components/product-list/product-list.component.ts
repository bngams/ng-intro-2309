import { Component, Input, ViewChildren, QueryList } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @ViewChildren(ProductCardComponent) cards!: QueryList<ProductCardComponent>;

  private somePrivate! : string;

  @Input()
  productsInput!: Product[];

  products: Product[] = [
    { title: 'product 1', price: 10 },
    { title: 'product 2', price: 20 },
    { title: 'product 3', price: 30 },
  ]
}
