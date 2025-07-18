import { Component, OnInit } from '@angular/core';
import { Navigation } from "../../components/navigation/navigation";
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs'; 
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Navigation, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  username: string = '';
  showLoginPopup: boolean = false;
  showLogoutPopup: boolean = false;
  showCard: boolean = false;

  todayDate: string = '';
  shiftStartTime: string = '';
  loginTime: string = '';
  logOutTime: string = '';
  totalLoggedInHours: string = '';
   private subscription: Subscription| undefined;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private logoutNotifier: LogoutService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'User';

      // Fetch shift details for login popup
      const now = new Date();
      this.todayDate = now.toLocaleDateString();


      this.shiftStartTime = '9:00 AM';
      this.loginTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // this.showLoginPopup = true;
      this.SHowModelPop(false);
    });

    this.subscription = this.logoutNotifier.logoutClicked$.subscribe(() => {
      // debugger;
      // this.showLogoutPopup = false;
      // this.showLogoutPopup = true;
      this.SHowModelPop(true);
    });
  }

  onPopupOk(): void {
    this.showLoginPopup = false;
  }
  
  SHowModelPop(showLogOut:boolean =false): void {
    this.showLoginPopup = true;
    this.showLogoutPopup = showLogOut;
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  onLogout(): void {
    this.http.get(`https://localhost:7255/api/UserShiftDetails/GetByUserId/1`).subscribe({
      next: (response: any) => {
        this.todayDate = response.date;
        this.shiftStartTime = response.shiftStartTime;
        this.loginTime = response.loginTime;
        this.logOutTime = response.logOutTime;
        this.totalLoggedInHours = response.totalLoggedInHours;
        this.showCard = true;
      },
      error: (error) => {
        console.error('Error fetching shift details on logout:', error);
      }
    });
  }

  closeLogoutPopup(): void {
    this.showCard = false;
    this.router.navigate(['/login']);
  }
}
