import { Component } from '@angular/core';
import { AuthLogin } from '../../../components/auth/login/login';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [AuthLogin],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {}
