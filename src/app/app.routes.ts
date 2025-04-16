import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  // { path: 'about', component: AboutComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'contact/:id/:name', component: ContactComponent }, id and name we have define the properties
  // {path: '**', component: PageNotFountComponent},  it means that the url is wrong then we will go that page. And it is always written in the last of the routes
  // { path: 'admin', component: AdminComponent },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then((c) => c.AdminComponent),
  },
];
