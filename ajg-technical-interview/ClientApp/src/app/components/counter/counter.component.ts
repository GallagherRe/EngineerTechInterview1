import { Component, Input } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0; 

  constructor(private sharedDataService:SharedDataService){

  }
  ngOnInit() {
   this.sharedDataService.currentCounter.subscribe(count => (this.currentCount= count)); //<= Always get current value!
   }

  public incrementCounter() {
    this.currentCount++;
    this.sharedDataService.changeCount(this.currentCount++);
  }
}
