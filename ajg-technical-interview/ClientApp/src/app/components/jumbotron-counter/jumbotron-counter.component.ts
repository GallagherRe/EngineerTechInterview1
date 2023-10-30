import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
    selector: 'app-jumbotron-counter',
    templateUrl: './jumbotron-counter.component.html'
})
export class JumbotronCounterComponent {
    public currentCount: number;
    constructor(private localStorageService: LocalStorageService) {
        this.currentCount = +localStorageService.getItem('counter');
    }
}
