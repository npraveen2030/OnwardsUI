import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  showLogInAndLogOutPopup: boolean = false;
  showLogOutDetails: boolean = false; 
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
    private logoutNotifier: LogoutService,
    private cdr: ChangeDetectorRef // 👈 ADD THIS
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'User';
      this.SHowModelPop(false);
    });

    this.subscription = this.logoutNotifier.logoutClicked$.subscribe(() => {
      this.SHowModelPop(true);
    });
  }

  onPopupOk(): void {
    this.showLogInAndLogOutPopup = false;
  }
  
  SHowModelPop(showLogOut:boolean =false): void {

     this.http.get(`https://localhost:7255/api/UserShiftDetails/GetByUserId/1`).subscribe({
      next: (response: any) => {
        this.todayDate = response.date;
        this.shiftStartTime = response.shiftStartTime;
        this.loginTime = response.loginTime;
        this.logOutTime = response.logOutTime;
        this.totalLoggedInHours = response.totalLoggedInHours;
        this.showLogInAndLogOutPopup = true;
        this.showLogOutDetails = showLogOut;
        this.cdr.detectChanges(); 
      },
      error: (error) => {
        console.error('Error fetching shift details on logout:', error);
      }
    });

    
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
   

  closeLogoutPopup(): void {
    this.router.navigate(['/login']);
  }
}
