import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navItems = ([] = [
    {
      name: 'Home',
      path: '/home',
      iconTitle: 'cottage',
    },
    {
      name: 'Company',
      path: '/',
      iconTitle: 'description',
    },
    {
      name: 'Perks',
      path: '/',
      iconTitle: 'redeem',
    },
    {
      name: 'Legal',
      path: '/',
      iconTitle: 'gavel',
    },
    {
      name: 'invoices',
      path: '/invoices',
      iconTitle: 'payments',
    },
  ]);

  constructor(public router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
  }
}
