import { Subscription } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password-request',
  templateUrl: './password-request.component.html',
  styleUrls: ['./password-request.component.css'],
})
export class PasswordRequestComponent implements OnInit {
  isLoaded!: boolean;
  resetRequestPasswordUserSubscription!: Subscription;

  constructor(private authService: AuthService) {
    this.isLoaded = true;
  }

  ngOnInit(): void {}

  resetRequestPasswordUser(user: { email: string }) {
    this.isLoaded = false;
    this.resetRequestPasswordUserSubscription = this.authService
      .resetRequestPasswordUser(user)
      .subscribe(
        (response) => {
          console.log(response);
          this.resetRequestPasswordUserSubscription.unsubscribe();
          this.isLoaded = true;
          Swal.fire({
            icon: 'success',
            title: 'Request Reset Password Success',
            text: `Please check Your email's inbox, to get the reset password link`,
            showConfirmButton: true,
            timer: 3000,
          });
        },
        (err) => {
          console.log(err);
          this.resetRequestPasswordUserSubscription.unsubscribe();
          this.isLoaded = true;
          Swal.fire({
            icon: 'error',
            title: 'Request Reset Password Failed',
            text: 'Sorry, Your email not registered',
            showConfirmButton: true,
            timer: 3000,
          });
        }
      );
  }
}
