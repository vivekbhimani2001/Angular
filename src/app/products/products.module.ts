import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,ProductsRoutingModule
  ],
  exports:[ProductDetailsComponent]
})
export class ProductsModule { }
