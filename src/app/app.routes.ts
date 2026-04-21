import { Routes } from '@angular/router';
import { LoginPage } from './pages/admin/login-page/login-page';

export const routes: Routes = [
  {
    path: 'admin/login',
    component: LoginPage,
    title: 'Login admin',
  },
];
