import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country, Customer} from "../model/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getCustomers(country: Country): Observable<Customer[]> {
    if (country !== Country.ALL) {
      return this.httpClient.get<Customer[]>("http://localhost:8080/api/customers?country=" + Country[country]);
    }
    return this.httpClient.get<Customer[]>("http://localhost:8080/api/customers");
  }
}
