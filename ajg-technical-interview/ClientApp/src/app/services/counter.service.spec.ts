import { first } from 'rxjs/operators';
import { CounterService } from './counter.service';


function getCount(counterService: CounterService): number {
    let testCount: number;
    counterService.getCounter().pipe(first()).subscribe(count => testCount = count);
    return testCount;
}  

describe('CounterService', () => {
    let counterService: CounterService;


    beforeEach(() => {
        counterService = new CounterService();
    });

    it('inital count', () => {
        expect(getCount(counterService)).toBe(0);
    });

    it('increment count', () => {
        counterService.increment();
        expect(getCount(counterService)).toBe(1);
    });

    it('increment count twice', () => {
        counterService.increment();
        counterService.increment();
        expect(getCount(counterService)).toBe(2);
    });
});
