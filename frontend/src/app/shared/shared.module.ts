import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnPaidComponent } from './components/buttons/btn-paid.component';
import { BtnPendingComponent } from './components/buttons/btn-pending.component';
import { BtnDraftComponent } from './components/buttons/btn-draft.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BtnPaidComponent,
    BtnPendingComponent,
    BtnDraftComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BtnPaidComponent,
    BtnPendingComponent,
    BtnDraftComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
