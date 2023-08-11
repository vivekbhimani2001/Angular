import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';

const routes: Routes = [
  {
    // path:'user/:id',
    path:'user',
    component:UserComponent,
    },
    {
      path:'user/userdetails',
      component:UserDetailsComponent,
    },
    {
      path: 'edituser/:id',
      component:EditUserDetailsComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
