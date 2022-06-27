import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit{
  
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.currentCount = this.counterService.get(); 
  }

  private currentCount = 0;
  key = "counter";

  public incrementCounter() {
    this.currentCount++;
    this.counterService.set(this.currentCount);
  }
}
