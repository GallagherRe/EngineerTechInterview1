import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-jumbotron-counter',
  templateUrl: './jumbotron-counter.component.html'
})
export class JumbotronCounterComponent {
    public currentCount = 0;

    constructor(counterService: CounterService) {
        counterService.getCounter().subscribe(count => { this.currentCount = count; });
    }
}
