import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Customer} from './models/customer'
import { Guid } from 'guid-typescript';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, `Operation: ${operation}`);

      return of(result as T);
    }
  }

  getCustomers(): Observable<Customer[]> {
      return this.http.get<Customer[]>('http://localhost:4005/api/Customer/')
        .pipe(
          tap(customers => console.log('Getting customers succeeded'+ customers[0].name)),
          catchError(this.handleError('getCustomers', []))
        );
  }

  createCustomer(customer : Customer){
    return this.http.post('http://localhost:4005/api/Customer/',customer, httpOptions);
  }

  getCustomer(customerGuid : string): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:4005/api/Customer/' + customerGuid);
  }
}
