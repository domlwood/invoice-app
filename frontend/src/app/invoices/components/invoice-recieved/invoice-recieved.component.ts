import { Component, Input } from '@angular/core';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoice-recieved',
  templateUrl: './invoice-recieved.component.html',
  styleUrls: ['./invoice-recieved.component.scss'],
})
export class InvoiceRecievedComponent {
  @Input() invoices!: Invoice[];
  constructor() {}

  calculateTotalInvoices(requestedPaymentStatus: string) {
    let total: number = 0;
    for (let invoice of this.invoices) {
      for (let invoiceTotal of invoice.attributes.itemsList) {
        if (invoice.attributes.status === requestedPaymentStatus) {
          total = total + invoiceTotal.total;
        }
      }
    }
    return total;
  }
}
