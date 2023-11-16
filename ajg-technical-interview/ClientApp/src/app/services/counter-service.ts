import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class counterservice {

  private nn = new BehaviorSubject(0);
  getCounter = this.nn.asObservable();

  setCounter(n: number) {
    this.nn.next(n);      
  }
}
