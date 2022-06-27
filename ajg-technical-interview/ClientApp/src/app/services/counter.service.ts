import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0;
  get(): any {
      return this.counter;
  }

  set(value: any): void {
      this.counter = value;
  }
}