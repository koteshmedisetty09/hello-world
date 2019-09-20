import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';




@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Observable<Customer[]>;
 
  @Input() customer: Customer;
  _router: any;


  constructor(private customerService: CustomerService ) { }

  ngOnInit() {
    this.reloadData();
    

  }

  updateActive(isActive: boolean, id: any , name: string  ) {
    this.customerService.updateCustomer(id, name)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  editButtonClick(id: any, value: any){

  
    this.customerService.editCustomer(id,value).subscribe(
    data =>{
      console.log(data);
      this.reloadData();
    }  
    );
  }


  deleteCustomers() {
    this.customerService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  deleteCustomer(id:any) {
    
    this.customerService.deleteCustomer(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }



  reloadData() {


  
    
  //  this.customers = this.customerService.getCustomersList();

  this.customerService.getCustomersList()
  .subscribe(
    customers =>{ this.customers=customers;
      console.log(this.customers);

    },
  );





  }

}
