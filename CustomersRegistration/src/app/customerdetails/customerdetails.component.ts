import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  private sub: any;
  private id: string;

  customer : Customer;

  constructor( private customerService : CustomerService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.getCustomer(this.id);
      }
    )
  }

  getCustomer(customerGuid): void {
    this.customerService.getCustomer(customerGuid)
    .subscribe( customer => this.customer = customer);
  }

}
