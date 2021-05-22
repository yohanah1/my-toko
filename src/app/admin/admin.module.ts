import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { HomeComponent } from './admin-root/home/home.component';
import { UserComponent } from './admin-root/user/user.component';

@NgModule({
  declarations: [AdminRootComponent, HomeComponent, UserComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
