import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService implements OnDestroy {

  counterSubscription:Subscription;
  private counterBehaviorSubject: BehaviorSubject<number>= new BehaviorSubject(0);
  count$:Observable<number> = this.counterBehaviorSubject.asObservable();
  private count:number;

  constructor() { }

  getCountValue():number{
    this.count$.subscribe(countValue=>this.count=countValue.valueOf())  
    return this.count;
  }

  setCountValue(newCount:number){
    this.counterBehaviorSubject.next(newCount);
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
