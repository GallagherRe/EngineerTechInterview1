import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../../services/counter.service';

@Component({
    selector: 'app-counter-component',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;

    constructor(private counterservice: CounterService) {

    }

    public incrementCounter() {
        this.counterservice.incrementCounter();
    }

    getCounter(){
        return this.counterservice.getCounter();
    }
}
