import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { VolunteerComponent } from './volunteer/volunteer/volunteer.component';
import { EventComponent } from './event/event/event.component';
import { ServiceProviderComponent } from './service-provider/service-provider/service-provider.component';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { RegistrationComponent } from './core/auth/pages/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './core/auth/pages/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    VolunteerComponent,
    EventComponent,
    ServiceProviderComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
