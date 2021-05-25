import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { HomeComponent } from './admin-root/home/home.component';
import { UserComponent } from './admin-root/user/user.component';
import { BrandComponent } from './admin-root/brand/brand.component';
import { ProductComponent } from './admin-root/product/product.component';
import { ProfitLossComponent } from './admin-root/profit-loss/profit-loss.component';
import { SuplierComponent } from './admin-root/suplier/suplier.component';
import { ProductEffectivenessComponent } from './admin-root/product-effectiveness/product-effectiveness.component';
import { PurchaseOrderComponent } from './admin-root/purchase-order/purchase-order.component';
import { DeliveryOrderComponent } from './admin-root/delivery-order/delivery-order.component';
import { InvoiceComponent } from './admin-root/invoice/invoice.component';
import { PayableComponent } from './admin-root/payable/payable.component';
import { ReceivableComponent } from './admin-root/receivable/receivable.component';
import { OrderComponent } from './admin-root/order/order.component';
import { OrderReceiptComponent } from './admin-root/order-receipt/order-receipt.component';
import { JumbotronComponent } from './admin-root/home/jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AdminRootComponent,
    HomeComponent,
    UserComponent,
    BrandComponent,
    ProductComponent,
    ProfitLossComponent,
    SuplierComponent,
    ProductEffectivenessComponent,
    PurchaseOrderComponent,
    DeliveryOrderComponent,
    InvoiceComponent,
    PayableComponent,
    ReceivableComponent,
    OrderComponent,
    OrderReceiptComponent,
    JumbotronComponent
    ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
