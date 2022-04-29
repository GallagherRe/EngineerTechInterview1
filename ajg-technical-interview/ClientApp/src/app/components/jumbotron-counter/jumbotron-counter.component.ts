import { Component } from '@angular/core';
import { AppService } from '../../../app/services/appService.service';

@Component({
  selector: 'app-jumbotron-counter',
  templateUrl: './jumbotron-counter.component.html'
})
export class JumbotronCounterComponent {

  public currentCount: number;
  constructor(private appsevice: AppService) {
  }
  public ngOnInit() {
    this.appsevice.count.subscribe(c => {
      this.currentCount = c;
    });
  }

}
