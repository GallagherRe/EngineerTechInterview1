import { Component, OnInit } from "@angular/core";
import { CounterService } from "../../services/counter.service";

@Component({
  selector: "app-jumbotron-counter",
  templateUrl: "./jumbotron-counter.component.html",
})
export class JumbotronCounterComponent implements OnInit {
  constructor(private counterService: CounterService) {}
  counterValue = "";

  ngOnInit(): void {
    this.counterValue = this.counterService.get();
  }
}
