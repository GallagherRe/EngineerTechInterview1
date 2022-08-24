import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SanctionedEntity } from '../models/sanctioned-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SanctionedEntitiesService {

  private readonly apiUrl: string;
  
  private readonly path = 'sanctioned-entities';
  public sanctionedEntities$:Observable<SanctionedEntity[]>;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiUrl =`${baseUrl}api/${this.path}`;
    this.sanctionedEntities$=this.http.get<SanctionedEntity[]>(this.apiUrl);
  }

  createSanctionedEntity(newSanctionedEntity:SanctionedEntity){
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }
    this.http.post(this.apiUrl, JSON.stringify(newSanctionedEntity), httpOptions).subscribe(c=>console.log(c));
  }

}
