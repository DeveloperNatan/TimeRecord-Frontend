import { Component } from '@angular/core';
import { Login } from '../../../components/auth/login/login';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [Login],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {}
