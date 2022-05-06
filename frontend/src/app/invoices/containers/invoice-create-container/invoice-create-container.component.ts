import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-create-container',
  templateUrl: './invoice-create-container.component.html',
  styleUrls: ['./invoice-create-container.component.scss']
})
export class InvoiceCreateContainerComponent implements OnInit {
  amountOfItems = [1];
  constructor() { }

  ngOnInit(): void {
  }

  hideInvoiceCreatePopup() {
    document.querySelector('.invoice-create-popup')?.classList.add('hidden')
    document.querySelector('.invoice-create-button')?.classList.remove('hidden')
  }

  implementAmountByOne() {
    this.amountOfItems.push(1)
  }
}
