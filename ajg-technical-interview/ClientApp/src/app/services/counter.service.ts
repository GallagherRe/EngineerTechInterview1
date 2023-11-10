import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SanctionedEntity } from '../models/sanctioned-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

    private counter;

    constructor() {
        this.counter = 0;
    }

    public incrementCounter(): void {
        this.counter += 1;
    }

    public getCounter(): number {
        return this.counter;
    }
}
