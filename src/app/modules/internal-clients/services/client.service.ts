import { Client } from '../models/client.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'https://randomuser.me/api/?results=20&page=1';

  constructor(private http: HttpClient) {}

  getClients(): Observable<{ results: Client[] }> {
    return this.http.get<{ results: Client[] }>(this.apiUrl);
  }
}
