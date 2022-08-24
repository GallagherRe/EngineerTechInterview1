import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount=0;

  constructor(private counterService:CounterService){
    this.currentCount=this.counterService.getCountValue();
  }

  public incrementCounter() {
    this.counterService.setCountValue(++this.currentCount);
  }
}
