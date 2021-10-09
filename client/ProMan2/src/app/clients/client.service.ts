import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientDetails } from './client-details/client-details';
import { ClientItem } from './client-item';
import { NewClient } from './new-client/new-client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<ClientItem[]> {
    return this.http.get<ClientItem[]>('https://localhost:44338/api/client');
  }


  createClient(newClient: NewClient): Observable<number> {
    debugger;
    return this.http.post<number>('https://localhost:44338/api/client', newClient);
  }

  getDetails(id: any): Observable<ClientDetails> {
    return this.http.get<ClientDetails>(`https://localhost:44338/api/client/${id}`);
  }
}
