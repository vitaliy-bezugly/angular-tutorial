import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  private filter = new BehaviorSubject<string>('');

  public setFilter(filter: string): void {
    this.filter.next(filter);
  }

  public getFilter(): Observable<string> {
    return this.filter.asObservable();
  }
}
