import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePublicnoteComponent } from './invoice-publicnote.component';

describe('InvoicePublicnoteComponent', () => {
  let component: InvoicePublicnoteComponent;
  let fixture: ComponentFixture<InvoicePublicnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicePublicnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePublicnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
