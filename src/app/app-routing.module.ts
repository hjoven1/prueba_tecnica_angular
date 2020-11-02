import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import { GuardianGuestGuard } from './guards/guardian-guest.guard';
import {GuardianUserGuard} from './guards/guardian-user.guard';
import {HomeComponent} from './home/home.component';
import {PeliculasComponent} from './peliculas/peliculas.component';
import {PeliculasIndexComponent} from './peliculas-index/peliculas-index.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [GuardianGuestGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuardianGuestGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [GuardianUserGuard]
  },
  {
    path: 'movies',
    component: PeliculasIndexComponent,
    canActivate: [GuardianUserGuard]
  },
  {
    path: 'movies-create',
    component: PeliculasComponent,
    canActivate: [GuardianUserGuard]
  },
  {
    path: 'movies-edit/:id',
    component: PeliculasComponent,
    canActivate: [GuardianUserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
