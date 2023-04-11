import { BehaviorSubject, Observable } from 'rxjs';

import { Client } from '../models/client.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = `${environment.apiUrl}?results=20&page=1`;
  public clients$ = new BehaviorSubject<Client[]>([]);
  private selectedClient$ = new BehaviorSubject<Client | null>(null);

  constructor(private http: HttpClient) {
    this.loadClients();
  }

  public loadClients(): void {
    this.getClients()
      .pipe(take(1))
      .subscribe((clients) => {
        this.clients$.next(clients.results);
      });
  }

  getClients(): Observable<{ results: Client[] }> {
    return this.http.get<{ results: Client[] }>(this.apiUrl);
  }

  get clients(): Client[] {
    return this.clients$.getValue();
  }

  set selectedClient(client: Client | null) {
    this.selectedClient$.next(client);
  }

  get selectedClient(): Client | null {
    return this.selectedClient$.getValue();
  }
}
