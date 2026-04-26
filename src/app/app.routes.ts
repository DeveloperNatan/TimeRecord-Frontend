import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { LoginPage } from './pages/admin/login-page/login-page';

export const routes: Routes = [
  {
    path: 'admin',
    component: LoginPage,
    title: 'Login',
  },
  {
    path: 'home',
    component: HomePage,
    title: 'Home',
  },
];
