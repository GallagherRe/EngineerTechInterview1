import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
;

@Injectable({
    providedIn: 'root'
})
export class SharedDataService {
    constructor() { }
    // public currentCount: number = 0;
    // public subject = new Subject<number>();
    private counter = new BehaviorSubject(0);
    currentCounter = this.counter.asObservable();

    changeCount(count: number) {
        this.counter.next(count)
    }
}