import { Component } from '@angular/core';
import { counterservice } from '../../services/counter-service';

@Component({
  selector: 'app-jumbotron-counter',
  templateUrl: './jumbotron-counter.component.html'
})
export class JumbotronCounterComponent {
  counter: number = 0;

  constructor(private counterSvc: counterservice) {
    counterSvc.getCounter.subscribe(c => this.counter = c);
  }
}
