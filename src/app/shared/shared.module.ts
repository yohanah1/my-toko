import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';

@NgModule({
  declarations: [PageLoaderComponent, PageFooterComponent],
  imports: [CommonModule],
  exports: [PageLoaderComponent, PageFooterComponent],
})
export class SharedModule {}
