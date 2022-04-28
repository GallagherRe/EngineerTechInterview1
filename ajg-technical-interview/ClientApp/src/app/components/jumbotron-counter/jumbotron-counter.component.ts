import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-jumbotron-counter',
  templateUrl: './jumbotron-counter.component.html'
})
export class JumbotronCounterComponent {
  count: number;
  
  constructor(private sharedDataService:SharedDataService){

  }
  ngOnInit() {
    this.sharedDataService.currentCounter.subscribe(count => (this.count= count)); //<= Always get current value!
   }
}
