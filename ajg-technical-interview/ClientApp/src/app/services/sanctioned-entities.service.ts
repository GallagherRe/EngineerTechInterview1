import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SanctionedEntity } from '../models/sanctioned-entity';
import { Observable } from 'rxjs';
import { AddSanctionedEntityRequest } from '../models/requests/add-sanctioned-entity-request';

@Injectable({
  providedIn: 'root'
})
export class SanctionedEntitiesService {

  private readonly apiUrl: string;
  private readonly path = 'sanctioned-entities';

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiUrl = baseUrl + 'api/';
  }

  public getSanctionedEntities(): Observable<SanctionedEntity[]> {
    const url = this.apiUrl + this.path;
    return this.http.get<SanctionedEntity[]>(url);
  }

  public addSanctionedEntity(entity : AddSanctionedEntityRequest): Observable<any> {
    const url = this.apiUrl + this.path;

    return this.http.post<any>(url, entity);
  }
}
