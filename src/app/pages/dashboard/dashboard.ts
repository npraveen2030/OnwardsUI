import { Component, OnInit } from '@angular/core';
import { Navigation } from "../../components/navigation/navigation";
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Navigation, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  username: string = '';
  showLoginPopup: boolean = true;
logOutTime: any;
totalLoggedInHours: any;
todayDate: any;
shiftStartTime: any;
loginTime: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'User';
      this.showLoginPopup = true;
    });
  }

  onPopupOk(): void {
    this.showLoginPopup = false;
  }
}