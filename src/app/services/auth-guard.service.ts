import { AuthInfoService } from './auth-info.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authInfoService: AuthInfoService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (!this.authInfoService.isAuthenticated()) {
      this.router.navigate(['/auth/login']);
      Swal.fire({
        icon: 'warning',
        title: 'Access Denied',
        text: 'You need do login first',
        showConfirmButton: true,
        timer: 3000,
      });
      return false;
    }
    return true;
  }
}
