import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './invoices.component';
import { SharedModule } from '../shared/shared.module';
import { invoiceRoutes } from './invoices.routes';
import { InvoiceRecievedComponent } from './components/invoice-recieved/invoice-recieved.component';
import { InvoiceCreateComponent } from './components/invoice-create/invoice-create.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceSearchComponent } from './components/invoice-search/invoice-search.component';
import { InvoicePublicnoteComponent } from './components/invoice-publicnote/invoice-publicnote.component';
import { InvoiceStatusComponent } from './components/invoice-status/invoice-status.component';
import { FormsModule } from '@angular/forms';
import { InvoiceCreateContainerComponent } from './containers/invoice-create-container/invoice-create-container.component';

@NgModule({
  declarations: [
    InvoicesComponent,
    InvoiceRecievedComponent,
    InvoiceCreateComponent,
    InvoiceListComponent,
    InvoiceSearchComponent,
    InvoicePublicnoteComponent,
    InvoiceStatusComponent,
    InvoiceCreateContainerComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(invoiceRoutes), FormsModule],
})
export class InvoicesModule {}
