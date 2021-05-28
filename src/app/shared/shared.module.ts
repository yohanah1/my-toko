import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { PageAdminLoaderComponent } from './components/page-admin-loader/page-admin-loader.component';

@NgModule({
  declarations: [
    PageLoaderComponent,
    PageFooterComponent,
    PageErrorComponent,
    PageAdminLoaderComponent,
  ],
  imports: [CommonModule],
  exports: [
    PageLoaderComponent,
    PageFooterComponent,
    PageErrorComponent,
    PageAdminLoaderComponent,
  ],
})
export class SharedModule {}
