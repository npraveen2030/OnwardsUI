import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  // todayDate = new BehaviorSubject<string>('');
  // shiftStartTime = new BehaviorSubject<string>('');
  // loginTime = new BehaviorSubject<string>('');
  // logOutTime = new BehaviorSubject<string>('');
  // totalLoggedInHours = new BehaviorSubject<string>('');
  // showCard = new BehaviorSubject<boolean>(false);

 private logoutClickedSource = new Subject<void>();

  // Observable to subscribe to
  logoutClicked$ = this.logoutClickedSource.asObservable();

  // Method to call when logout is clicked
  notifyLogoutClicked(): void {
    this.logoutClickedSource.next();
  }
  // constructor(private http: HttpClient, private router: Router) {}

  // showLogoutPopup(userId: number): void {
  // this.http.get<any>(`/api/UserShiftDetails/GetByUserId/${userId}`).subscribe({
  //   next: (data: any) => {
  //     this.todayDate.next(data.todayDate);
  //     this.shiftStartTime.next(data.shiftStartTime);
  //     this.loginTime.next(data.loginTime);
  //     this.logOutTime.next(data.logoutTime);
  //     this.totalLoggedInHours.next(data.totalLoggedInHours);
  //     this.showCard.next(true);
  //   },
  //   error: (err) => {
  //     console.error('Logout API error:', err);
  //   }
  // });
}

  // closePopup(shouldLogout: boolean): void {
  //   this.showCard.next(false);
  //   if (shouldLogout) {
  //     this.router.navigate(['/login']);
  //   }
  // }
// }