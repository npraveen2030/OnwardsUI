import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../../services/logout.service';
import { Layout } from '../../services/layout.service';

@Component({
  selector: 'app-right-sidebar',
  imports: [],
  templateUrl: './right-sidebar.html',
  styleUrl: './right-sidebar.css'
})
export class RightSidebar {
  // constructor ( private router: Router) {}
  constructor(private router:Router, public layoutService:Layout){}
gotoApprovals() {
  //  this.logoutService.mainLayoutValue = 'Updated from OneComponent';
  //  this.logoutService.setLayoutTitle('MY APPROVALS');
   this.layoutService.setLayoutTitle('MY APPROVALS');
    // this.router.navigate(['/two']);
    this.router.navigate(['/myapprovals']);
}

}
