import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
    selector: 'app-counter-component',
    templateUrl: './counter.component.html'
})
export class CounterComponent {

    public currentCount = 0;

    constructor(private counterservice: CounterService) {
    }

    getCurrentCounter() {
        return this.counterservice.getCurrentCounter();
    }

    public incrementCounter() {
        this.counterservice.incrementCounter();
    }
}