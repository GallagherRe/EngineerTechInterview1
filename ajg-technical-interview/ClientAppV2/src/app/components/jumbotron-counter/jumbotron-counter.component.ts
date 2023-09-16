import { Component, OnInit } from '@angular/core';
import { CounterService } from './../../services/counter.service';

@Component({
  selector: 'app-jumbotron-counter',
  templateUrl: './jumbotron-counter.component.html',
  styleUrls: ['./jumbotron-counter.component.sass'],
})
export class JumbotronCounterComponent implements OnInit {
  count: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.currentCount.subscribe((count) => (this.count = count));
  }
}
