import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SanctionedEntity } from '../models/sanctioned-entity';
import { Observable } from 'rxjs';

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

    public getSanctionedEntity(id): Observable<SanctionedEntity> {
        const url = this.apiUrl + this.path + '/' + id;
        return this.http.get<SanctionedEntity>(url);
    }

    public createSantionedEntity(entity): Observable<any> {
        const url = this.apiUrl + this.path;
        return this.http.post(url, entity);
    }
}
