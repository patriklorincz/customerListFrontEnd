import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../customer.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerSearch: string;

  customers: Customer[];

  constructor( private customerService : CustomerService, private router: Router) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
    .subscribe(customers => this.customers = customers);
  }

  createCustomer(): void{
    this.router.navigate(['/customercreation']);
  };

  customerDetails(customerId: string): void{
    this.router.navigate(['/customerdetails', customerId]);
  }

}
