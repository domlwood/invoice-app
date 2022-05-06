import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-paid',
  template: `
    <div class="btn">
      <span class="btn-bullet-point"></span>
      <p class="btn-text">Paid</p>
    </div>
  `,
  styles: [
    `
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(51, 214, 159, 0.0571);
        border: none;
        border-radius: 5px;
        height: 2rem;
        width: 6rem;
        gap: 0.5rem;
        &-text {
          font-size: 16px;
          font-weight: 700;
          color: var(--green-color);
        }

        &-bullet-point {
          width: 0.5rem;
          height: 0.5rem;
          background-color: var(--green-color);
          border-radius: 50%;
        }
      }
    `,
  ],
})
export class BtnPaidComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
