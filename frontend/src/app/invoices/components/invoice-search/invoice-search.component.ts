import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-invoice-search',
  templateUrl: './invoice-search.component.html',
  styleUrls: ['./invoice-search.component.scss']
})
export class InvoiceSearchComponent implements OnInit {
  @Input() inputModel!: string;
  @Output() inputModelChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
