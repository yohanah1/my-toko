import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
})
export class PasswordResetComponent implements OnInit {
  isLoaded!: boolean;
  routeQueryParamsSubscription!: Subscription;
  resetPasswordUserSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.isLoaded = true;
  }

  ngOnInit(): void {}

  resetPasswordUser(user: { password: string }) {
    this.isLoaded = false;
    this.routeQueryParamsSubscription = this.route.queryParams.subscribe(
      (queryParams) => {
        this.resetPasswordUserSubscription = this.authService
          .resetPasswordUser(queryParams.token, user)
          .subscribe(
            (response) => {
              console.log(response);
              this.routeQueryParamsSubscription.unsubscribe();
              this.resetPasswordUserSubscription.unsubscribe();
              this.isLoaded = true;
              Swal.fire({
                icon: 'success',
                title: 'Reset Password Success',
                showConfirmButton: true,
                timer: 3000,
              });
            },
            (err) => {
              console.log(err);
              this.routeQueryParamsSubscription.unsubscribe();
              this.resetPasswordUserSubscription.unsubscribe();
              this.isLoaded = true;
              Swal.fire({
                icon: 'error',
                title: 'Reset Password Failed',
                text: 'Sorry, your request token was invalid, please do request again',
                showConfirmButton: true,
                timer: 3000,
              });
            }
          );
      }
    );
  }
}
