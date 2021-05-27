import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetFormComponent } from './password-reset/reset-form/reset-form.component';
import { RequestFormComponent } from './password-request/request-form/request-form.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordRequestComponent } from './password-request/password-request.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent, ResetFormComponent, RequestFormComponent, PasswordResetComponent, PasswordRequestComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, SharedModule],
})
export class AuthModule {}
