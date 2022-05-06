import { Component, Input } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoicesService } from '../../services/invoices.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss'],
})
export class InvoiceListComponent {
  @Input() invoices!: Invoice[];
  constructor() {}


  calcTotalPrice(listItems: any) {
    let total: number = 0;
    for (let item of listItems) {
      total = total + item.total;
    }
    return total;
  }
}
