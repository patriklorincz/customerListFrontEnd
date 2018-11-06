import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../models/customer'
import {CustomerService} from '../customer.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-customercreation',
  templateUrl: './customercreation.component.html',
  styleUrls: ['./customercreation.component.css']
})
export class CustomercreationComponent implements OnInit {

  public createCustomer: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.createCustomer = this.formBuilder.group({
    name:['', Validators.required],
    website:[''],
    phone:['', Validators.required],
    email:[''],
    addresses: this.formBuilder.array([
      this.initAddress(),
    ])
    });
  }

  initAddress() {
    return this.formBuilder.group({
      street: [''],
      number: [''],
      postcode: ['', Validators.required],
      city: [''],
      country: ['', Validators.required],
      isPostalAddress : [true]
    });
  } 

  addAddress() {
    const control = <FormArray>this.createCustomer.controls['addresses'];
    control.push(
      this.formBuilder.group({
      street: [''],
      number: [''],
      postcode: ['', Validators.required],
      city: [''],
      country: ['', Validators.required],
      isPostalAddress : [false]})
    );
  }

  save() {
    console.log(this.createCustomer.value);
    this.customerService.createCustomer(this.createCustomer.value)
    .subscribe( data => {
      this.router.navigate(['customers']);
    });
}

}
