import { Component } from '@angular/core';
import { AppService } from '../../../app/services/appService.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  constructor(private appsevice: AppService) {
  }

  public ngOnInit() {
    this.appsevice.count.subscribe(c => {
      this.currentCount = c;
    });
  }

  public incrementCounter() {
    this.appsevice.nextCount();
  }
}
