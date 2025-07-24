import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService, LoginResponse } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html'
})
export class Login {
  loginForm: FormGroup;
  errorMessage: string = '';
  username: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
  if (this.loginForm.valid) {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.loginService.login(username, password).subscribe({
      next: (response: LoginResponse) => {
        if (response.message === 'Login successful') {
          this.username = response.username;

          localStorage.setItem('loginTime', new Date().toISOString());

          this.router.navigate(['/dashboard'], {
            //queryParams: { username: response.username }
            queryParams: { username: this.loginForm.value.username }
          });
        } else {
          this.errorMessage = 'Unexpected login response.';
        }
      },
      error: (err) => {
        if (err.status === 401) {
          this.errorMessage = 'Invalid username or password.';
        } else {
          this.errorMessage = 'An error occurred. Please try again.';
        }
        console.error('Login error:', err);
      }
    });
  }
}
}
