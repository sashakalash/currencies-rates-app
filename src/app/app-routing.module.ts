import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RateListComponent } from './components/rate-list/rate-list.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'rates',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: ContentWrapperComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'rates',
        component: RateListComponent
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
