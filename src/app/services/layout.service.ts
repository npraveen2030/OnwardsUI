import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Layout {
   private layoutTitleSource = new BehaviorSubject<string>('');
    layoutTitle$ = this.layoutTitleSource.asObservable();
    setLayoutTitle(title: string) {
      this.layoutTitleSource.next(title);
    }
}
