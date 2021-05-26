import { AuthInfoService } from './../../services/auth-info.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginErrorMessage!: string;
  isLoaded!: boolean;
  loginUserSubscription!: Subscription;

  constructor(
    private authService: AuthService,
    private authInfoService: AuthInfoService,
    private router: Router
  ) {
    this.isLoaded = true;
  }

  ngOnInit(): void {}

  loginUser(user: { email: string; password: string }) {
    this.isLoaded = false;
    this.loginUserSubscription = this.authService.loginUser(user).subscribe(
      (response) => {
        console.log(response);
        this.authInfoService.setAuth(response.body!.data!.Authorization!);
        this.loginUserSubscription.unsubscribe();
        this.isLoaded = true;
        this.router.navigate(['/admin']);
        Swal.fire({
          icon: 'success',
          title: 'Login Success',
          showConfirmButton: true,
          timer: 3000,
        });
      },
      (err) => {
        console.log(err);
        this.loginErrorMessage = err.error.message;
        this.loginUserSubscription.unsubscribe();
        this.isLoaded = true;
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: this.loginErrorMessage.split(':')[1].trim(),
          showConfirmButton: true,
          timer: 3000,
        });
      }
    );
  }
}
