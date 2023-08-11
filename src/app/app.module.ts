import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { ProductsModule } from './products/products.module';
import { EditUserDetailsComponent } from './users/edit-user-details/edit-user-details.component';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
   // UserComponent,
    PageNotFoundComponent,
   // UserDetailsComponent,
    AdminDetailsComponent,
    //EditUserDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ProductsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
