import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {

  private count = new BehaviorSubject<number>(0);
  public currentCount = this.count.asObservable();

  incrementCount() {
    this.count.next(this.count.value + 1);
  }
}
