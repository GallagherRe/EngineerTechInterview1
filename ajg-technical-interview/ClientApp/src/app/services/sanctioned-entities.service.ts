import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SanctionedEntity } from '../models/sanctioned-entity';
import { Observable } from 'rxjs';
import { CreateSanctiedEntity } from '../models/create-sanctioned-entity';

@Injectable({
  providedIn: 'root'
})
export class SanctionedEntitiesService {

  private readonly apiUrl: string;
  private readonly path = 'sanctioned-entities';

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiUrl = baseUrl + 'api/' + this.path;
  }

  public getSanctionedEntities(): Observable<SanctionedEntity[]> {
    return this.http.get<SanctionedEntity[]>(this.apiUrl);
  }

    public createSanctionedEntity(sanctionedEntity: CreateSanctiedEntity): Observable<CreateSanctiedEntity> {
     return this.http.post<SanctionedEntity>(this.apiUrl, sanctionedEntity);
  }

}
