import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User.model';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public seePassword: boolean = false;

  constructor(private authService: AuthService, public router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  login(): void {
    this.authService
      .login(new User(this.loginForm.value.username, this.loginForm.value.password))
      .subscribe((resp: boolean) => resp && this.router.navigate(['/page']));
  }

  handleSeePassword(): void {
    this.seePassword = !this.seePassword;
  }
}
