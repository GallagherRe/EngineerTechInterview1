import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { SanctionedEntity } from "../models/sanctioned-entity";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SanctionedEntitiesService {
  private readonly apiUrl: string;
  private readonly path = "sanctioned-entities";

  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.apiUrl = baseUrl + "api/";
  }

  public getSanctionedEntities(): Observable<SanctionedEntity[]> {
    const url = this.apiUrl + this.path;
    return this.http
      .get<SanctionedEntity[]>(url)
      .pipe(catchError((err) => this.handleError(err)));
  }

  public createSanctionedEntity(
    entity: SanctionedEntity
  ): Observable<SanctionedEntity> {
    const url = this.apiUrl + this.path;
    return this.http
      .post<SanctionedEntity>(url, entity)
      .pipe(catchError((err) => this.handleError(err)));
  }

  handleError(httpError: HttpErrorResponse) {
    return throwError(() => ({
      httpCode: httpError.status,
      message: httpError.error.errorMessage,
    }));
  }
}
