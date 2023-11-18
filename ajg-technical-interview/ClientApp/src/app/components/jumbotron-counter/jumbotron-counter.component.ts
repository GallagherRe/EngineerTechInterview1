import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jumbotron-counter',
  templateUrl: './jumbotron-counter.component.html'
})
export class JumbotronCounterComponent implements OnInit, OnDestroy {
    public currentCount: number;
    public counterSubscription: Subscription;

    constructor(private counterService: CounterService) { }

    ngOnInit() {
        this.counterSubscription = this.counterService.currentCounter.subscribe(value => {
            this.currentCount = value;
        });
    }

    ngOnDestroy() {
        this.counterSubscription.unsubscribe();
    }
}
