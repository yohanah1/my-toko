import { AuthInfoService } from './../../services/auth-info.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-root',
  templateUrl: './admin-root.component.html',
  styleUrls: ['./admin-root.component.css'],
})
export class AdminRootComponent implements OnInit {
  userName!: string;
  userRole!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private authInfoService: AuthInfoService
  ) {}

  ngOnInit(): void {
    this.userName = this.authInfoService.getDecodedToken().name;
    this.userRole = this.authInfoService.getDecodedToken().role;
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
    Swal.fire({
      icon: 'success',
      title: 'Logout Success',
      showConfirmButton: true,
      timer: 3000,
    });
  }

  isOwner(): boolean {
    return this.authInfoService.getDecodedToken().role === 'OWNER';
  }

  isInventory(): boolean {
    return this.authInfoService.getDecodedToken().role === 'INVENTORY';
  }

  isFinance(): boolean {
    return this.authInfoService.getDecodedToken().role === 'FINANCE';
  }

  isCashier(): boolean {
    return this.authInfoService.getDecodedToken().role === 'CASHIER';
  }
}
