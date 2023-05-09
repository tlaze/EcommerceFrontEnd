import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from 'src/app/pages/registration/registration.component';
import { HomepageComponent } from 'src/app/pages/homepage/homepage.component';
import { CheckoutComponent } from 'src/app/pages/checkout/checkout.component';

const routes: Routes = [
  {path: "registration", component: RegistrationComponent},
  {path: "home", component: HomepageComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "**", component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
