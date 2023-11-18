import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../../services/counter.service';

@Component({
    selector: 'app-counter-component',
    templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit, OnDestroy {
    public currentCount: number;
    private counterSubscription: Subscription;

    constructor(private counterService: CounterService) { }

    ngOnInit() {
      this.counterSubscription = this.counterService.currentCounter.subscribe(value => {
        this.currentCount = value;
      });
    }

    ngOnDestroy() {
      this.counterSubscription.unsubscribe();
    }

    public incrementCounter() {
      this.counterService.increaseCounter();
    }
}
