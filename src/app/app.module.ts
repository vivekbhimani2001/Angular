import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { ToastrModule } from 'ngx-toastr';
import { EmployeeModule } from './employee/employee.module';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from './material/material.module';
import { ServiceInterceptorInterceptor } from './service-interceptor.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    AdminDetailsComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ToastrModule.forRoot(),
    FormsModule,
    ProductsModule,
    UsersModule,
    EmployeeModule,
    MaterialModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, useClass:ServiceInterceptorInterceptor , multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
