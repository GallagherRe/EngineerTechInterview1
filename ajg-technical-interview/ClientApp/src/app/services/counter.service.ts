import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SanctionedEntity } from '../models/sanctioned-entity';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

    private counter = 0;
    private counter$ = new BehaviorSubject(this.counter);

    constructor() { }

    public getCounter() {
        return this.counter;
    }

    public getCounterAsync() {
        return this.counter$.asObservable();
    }

    public incrementCounter() {
        this.counter++;
        this.counter$.next(this.counter);
    }
}
