import { Component } from '@angular/core';
import { counterservice } from '../../services/counter-service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  constructor(private counterSvc: counterservice) {
    counterSvc.getCounter.subscribe(c => this.currentCount = c)
  }

  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;

    this.counterSvc.setCounter(this.currentCount);  
  }
}
