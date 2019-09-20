import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
 // { path: '', redirectTo: 'customer', pathMatch: 'full' },
 
 //{ path: '', redirectTo: 'login', pathMatch: 'full' },



 
// { path: '', redirectTo: 'customer', pathMatch: 'full' },
{ path: '', redirectTo: 'userlogin', pathMatch: 'full' },
{ path: 'userlogin', component: UserLoginComponent },


{ path: 'userlogin/login', component: LoginComponent },

 { path: 'customer', component: CustomersListComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'findbyitemname', component: SearchCustomersComponent },
  { path: 'edit/:id', component: CreateCustomerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
