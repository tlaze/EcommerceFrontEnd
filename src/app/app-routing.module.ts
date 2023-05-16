import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from 'src/app/pages/registration/registration.component';
import { HomepageComponent } from 'src/app/pages/homepage/homepage.component';
import { CheckoutComponent } from 'src/app/pages/checkout/checkout.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AuthService } from 'src/app/services/authService';

const routes: Routes = [
  {path: "registration", component: RegistrationComponent},
  {path: "home", component: HomepageComponent, canActivate:[AuthGuard]},
  {path: "checkout", component: CheckoutComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard]
})
export class AppRoutingModule { }
