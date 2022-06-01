import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CounterService {

    private counter = 0;

    private counter$ = new BehaviorSubject(this.counter);


    public getCurrentCounter() {
        return this.counter;
    }

    public incrementCounter() {
        this.counter++;
        this.counter$.next(this.counter);
    }
}