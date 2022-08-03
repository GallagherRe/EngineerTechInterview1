import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

    private counter: number;

    private readonly counterSubject: BehaviorSubject<number>;

    constructor() {
        this.counter = 0;
        this.counterSubject = new BehaviorSubject(this.counter);
    }

    public increment(): void {
        this.counter += 1;
        this.counterSubject.next(this.counter);
    }

    public getCounter() : Observable<number> {
        return this.counterSubject.asObservable();
    }
}
