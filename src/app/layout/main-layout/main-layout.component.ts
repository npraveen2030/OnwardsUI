import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import { AsyncPipe, CommonModule } from '@angular/common';
import { LogoutService } from '../../services/logout.service';
import { Layout } from '../../services/layout.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule,  CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  layoutTitle: string = '';
  constructor(private router:Router, public layoutService:Layout, public logoutService:LogoutService){}

onLogout() {
  const userId = 1;
  // this.logoutService.showLogoutPopup(1);
  this.logoutService.notifyLogoutClicked();
    // Optionally, call your DashboardService here to show logout details pop-up
    // this.router.navigate(['/login']);
  }

  // constructor(private logoutNotifier: LogoutNotificationService) {}

  // onLogout(): void {
  //   this.logoutNotifier.notifyLogoutClicked();
  //   // Optionally perform other logout logic
  // }
  ngOnInit() {
    this.layoutService.layoutTitle$.subscribe(title => {
      this.layoutTitle = title;
    });
  }
}
