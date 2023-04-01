import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DestroyService {
  private destroy$ = new Subject<void>();
  destory$$ = this.destroy$.asObservable();

  destroySubscriptions(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
