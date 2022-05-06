import { InvoicesService } from './services/invoices.service';
import { Component, OnInit } from '@angular/core';
import { Invoice } from './models/invoice';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {
  invoices!: Invoice[];
  filteredInvoices!: Invoice[]
  searchInput!: string;

  constructor(private invoicesService: InvoicesService) {}

  ngOnInit(): void {
    this.fetchAllInvoices();
  }

  fetchAllInvoices() {
    this.invoicesService.getAllInvoices().subscribe((res: any) => {
      this.invoices = res.data.invoices.data;
      this.filteredInvoices = res.data.invoices.data;
    })
  }

  filterInvoices() {
    this.filteredInvoices = this.invoicesService.filterInvoicesByKey(
      this.invoices,
      this.searchInput
    );
  }

  displayInvoiceCreatePopup() {
    document.querySelector('.invoice-create-popup')?.classList.remove('hidden')
    document.querySelector('.invoice-create-button')?.classList.add('hidden')
  }
}
