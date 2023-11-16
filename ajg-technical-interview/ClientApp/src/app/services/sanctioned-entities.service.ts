import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SanctionedEntity } from '../models/sanctioned-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SanctionedEntitiesService {

  private readonly apiUrl: string;
  private readonly path = 'api/sanctionedentities';

  constructor(private http: HttpClient/*, @Inject('BASE_URL') baseUrl: string*/) {
    this.apiUrl = 'https://localhost:44352/' + this.path
  }

  public getSanctionedEntities(): Observable<SanctionedEntity[]> {

    return this.http.get<SanctionedEntity[]>(this.apiUrl);
  }

  public addSantionedEntity(newEntity: SanctionedEntity) {

    console.log('addSantionedEntity: ');

    return this.http.post(this.apiUrl, newEntity);

  }
}
