import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter-component',
    templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {

    public currentCount = 0;

    ngOnInit(): void {
        const storedCounter = sessionStorage.getItem('storedCounter');
        if (storedCounter) {
            this.currentCount = parseInt(storedCounter);
        }
    }

    public incrementCounter() {
        this.currentCount++;
        sessionStorage.setItem('storedCounter', this.currentCount.toString());
    }
}