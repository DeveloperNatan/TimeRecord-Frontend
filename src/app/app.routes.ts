import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { AuthLogin } from './components/auth/login/login';

export const routes: Routes = [
  {
    path: 'admin',
    component: AuthLogin,
    title: 'Login',
  },
  {
    path: 'home',
    component: Home,
    title: 'Home',
  },

];