import {Component} from '@angular/core';
import {CustomerService} from "./customer.service";
import {Country} from "../model/customer.model";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent {

  customers$ = this.customerService.getCustomers(Country.ALL);
  countryEnum = Country;

  constructor(private customerService: CustomerService) {
  }

  changeCountry(country: Country): void {
    this.customers$ = this.customerService.getCustomers(country);
  }
}
