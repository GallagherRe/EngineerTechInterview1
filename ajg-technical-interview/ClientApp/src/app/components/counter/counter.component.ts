import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;
    private readonly counterService: CounterService;

    constructor(counterService: CounterService) {
        this.counterService = counterService;
        this.counterService.getCounter().subscribe(count => { this.currentCount = count; });
    }

  public incrementCounter() {
    this.counterService.increment();
  }
}
