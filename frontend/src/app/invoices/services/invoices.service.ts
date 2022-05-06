import { Invoice } from './../models/invoice';
import { getAllInvoices } from './../graphql/invoices';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class InvoicesService {
  constructor(private apollo: Apollo) {}

  getAllInvoices() {
    return this.apollo.watchQuery({
      query: getAllInvoices,
    }).valueChanges;
  }

  filterInvoicesByKey(invoices: Invoice[], key: string) {
    console.log(invoices)
      return invoices.filter(invoice => invoice.attributes.key.toLowerCase().includes(key.toLowerCase()));
  }
}