import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-jumbotron-counter',
  templateUrl: './jumbotron-counter.component.html'
})
export class JumbotronCounterComponent {
    constructor(private counterservice: CounterService) {

    }

    public getCounter() {
        return this.counterservice.getCounter();
    }

    public getCounterAsync() {
        return this.counterservice.getCounterAsync();
    }
}
