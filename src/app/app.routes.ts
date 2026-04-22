import { Routes } from '@angular/router';
import { LoginPage } from './pages/admin/login-page/login-page';
import { TimeRecords } from './components/time-records/time-records';

export const routes: Routes = [
  {
    path: 'admin/login',
    component: LoginPage,
    title: 'Login admin',
  },
  {
    path: 'home',
    component: TimeRecords,
    title: 'Home',
  },
];
