import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service'

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

    public currentCount;
    constructor(private counterService: CounterService) {      
        this.currentCount = 0; 
    }

    ngOnInit() {
        this.currentCount = this.counterService.getCounter();
    }

    public incrementCounter(): void {
        this.counterService.incrementCounter();
        this.currentCount = this.counterService.getCounter();
    }
}
