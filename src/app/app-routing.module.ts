import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from 'src/app/pages/registration/registration.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { HomepageComponent } from 'src/app/pages/homepage/homepage.component';
import { CheckoutComponent } from 'src/app/pages/checkout/checkout.component';

const routes: Routes = [
  {path: "registration", component: RegistrationComponent},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomepageComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "**", component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
