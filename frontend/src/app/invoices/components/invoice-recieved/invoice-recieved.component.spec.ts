import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceRecievedComponent } from './invoice-recieved.component';

describe('InvoiceRecievedComponent', () => {
  let component: InvoiceRecievedComponent;
  let fixture: ComponentFixture<InvoiceRecievedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceRecievedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceRecievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
