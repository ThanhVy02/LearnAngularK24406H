import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _url = 'assets/data/customers.json';

  constructor(private _http: HttpClient) { }

  getCustomers() {
    return this._http.get<any[]>(this._url);
  }
}