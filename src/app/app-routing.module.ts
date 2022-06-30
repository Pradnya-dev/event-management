import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './core/auth/pages/forgot-password/forgot-password.component';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { RegistrationComponent } from './core/auth/pages/registration/registration.component';
import { UserComponent } from './user/user/user.component';
import { VolunteerComponent } from './volunteer/volunteer/volunteer.component';

const routes: Routes = [
  {path: 'user', component : UserComponent},
  {path: 'volunteer', component: VolunteerComponent },
  {path: 'login', component : LoginComponent},
  {path: 'registration', component: RegistrationComponent },
  {path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
