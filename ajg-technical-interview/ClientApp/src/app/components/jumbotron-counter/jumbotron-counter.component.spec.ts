import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterService } from '../../services/counter.service';
import { of } from 'rxjs';
import { JumbotronCounterComponent } from './jumbotron-counter.component';

describe('JumbotronCounterComponent', () => {
    let component: JumbotronCounterComponent;
    let fixture: ComponentFixture<JumbotronCounterComponent>;
    let counterService: CounterService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [JumbotronCounterComponent],
            providers: [
                {
                    provide: CounterService,
                    useValue: {
                        currentCounter: of(5),
                        increaseCounter: () => { }
                    }
                }
            ]
        });

        fixture = TestBed.createComponent(JumbotronCounterComponent);
        component = fixture.componentInstance;
        counterService = TestBed.get(CounterService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set currentCount to 5', () => {
        component.ngOnInit();
        expect(component.currentCount).toBe(5);
    });

 });
