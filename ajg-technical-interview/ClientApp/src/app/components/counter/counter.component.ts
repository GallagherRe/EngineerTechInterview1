import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

    constructor(private localStorageService: LocalStorageService) {
    }

    public incrementCounter() {
        var currentCount = this.getCurrentCount();
        currentCount++;
        this.localStorageService.setItem('counter', currentCount.toString());
    }

    public getCurrentCount(): number {
        return +this.localStorageService.getItem('counter');
    }
}
