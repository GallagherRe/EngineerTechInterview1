import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    private counter = new BehaviorSubject<number>(0);
    currentCounter = this.counter.asObservable();

    increaseCounter = () => this.counter.next(this.counter.value + 1);
}
