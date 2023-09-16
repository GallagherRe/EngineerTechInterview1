import { Component, OnInit } from '@angular/core';
import { CounterService } from './../../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass'],
})
export class CounterComponent implements OnInit {
  public currentCount = 0;
  constructor(private counterService: CounterService) {}

  public incrementCounter() {
    this.counterService.incrementCount();
  }

  ngOnInit() {
    this.counterService.currentCount.subscribe(
      (count) => (this.currentCount = count)
    );
  }
}
