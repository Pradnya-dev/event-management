import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user/user.component';
import { VolunteerComponent } from './volunteer/volunteer/volunteer.component';

const routes: Routes = [
  {path: 'user', component : UserComponent},
  {path: 'volunteer', component: VolunteerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
