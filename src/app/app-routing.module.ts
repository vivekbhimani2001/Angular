import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { EditUserDetailsComponent } from './users/edit-user-details/edit-user-details.component';
import { AuthGuard } from './auth.guard';
import { AdminDetailsComponent } from './admin-details/admin-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin-details',
    component: AdminDetailsComponent
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'employees',
    loadChildren: () => import('./employee/employee.module').then((m) => m.EmployeeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./user-auth/user-auth.module').then((m) => m.UserAuthModule)

  },
  {
    path: "**",
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
