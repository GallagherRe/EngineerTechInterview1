import { TestBed } from '@angular/core/testing';
import { CounterService } from './counter.service';
import { take } from 'rxjs/operators';

describe('CounterService', () => {
    let service: CounterService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.get(CounterService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should increase counter value', (done: DoneFn) => {
        service.currentCounter.pipe(take(1)).subscribe(value => {
            expect(value).toBe(0);
        });

        service.increaseCounter();

        service.currentCounter.pipe(take(1)).subscribe(value => {
            expect(value).toBe(1);
            done();
        });
    });
});
