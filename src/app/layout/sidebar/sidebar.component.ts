import { Component, OnInit, Input } from '@angular/core';
import { LocationDataService } from '../../services/location-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  @Input() locationId: number =1;
  holidays: any[] = [];

  constructor(private locationService: LocationDataService) {}

  ngOnInit(): void {
      console.log('📌 Sidebar received locationId:', this.locationId); // Log here

  if (this.locationId) {
    this.locationService.getHolidayListByLocation(this.locationId).subscribe({
      next: (data) => {
        console.log('Holiday API Response:', data);
        console.log('✅ Holiday data:', data);
        this.holidays = data;
      },
      error: (err) => {
        console.error('Holiday API Error:', err);
      }
    });
  }
}
}
