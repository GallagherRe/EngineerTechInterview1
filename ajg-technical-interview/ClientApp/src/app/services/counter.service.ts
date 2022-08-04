import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    private _count: number = 0;

    public incrementCount(): number {
        this._count++;
        return this._count;
    }

    public get count(): number {
        return this._count;
    }
}
