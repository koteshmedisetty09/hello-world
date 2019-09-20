import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Items } from '../Items';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
/*
export class SearchCustomersComponent implements OnInit {

  age: number;

  
  customers: Customer[];

  constructor(private dataService: CustomerService) { }

  ngOnInit() {
    this.age = 0;
  }

  private searchCustomers() {
    this.customers = [];
    this.dataService.getCustomersByAge(this.age)
      .subscribe(customers => this.customers = customers);
  }

  onSubmit() {
    this.searchCustomers();
  }

}
*/


export class SearchCustomersComponent implements OnInit {

  //age: number;
  name:string;

  
  customers: Customer;
  items : Items;
  //itemsList: Items;

  constructor(private dataService: CustomerService) { }

  ngOnInit() {
    this.name = null;
  }

  private searchCustomers() {
    //this.items= null;
    debugger 
    this.dataService.getItemsByCompanyName(this.name)
      .subscribe(items => this.items = items);
  }

  onSubmit() {
    this.searchCustomers();
  }

}