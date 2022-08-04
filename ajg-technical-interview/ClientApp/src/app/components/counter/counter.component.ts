import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit{
  public currentCount = 0;

  constructor(private _counterService: CounterService) { }

  ngOnInit(): void {
    this.currentCount = this._counterService.count;
  }

  public incrementCounter() {
    //this.currentCount++;
    this.currentCount = this._counterService.incrementCount();
  }
}
