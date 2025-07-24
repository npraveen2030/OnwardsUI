import { Component, OnInit, Input } from '@angular/core';
import { LocationDataService } from '../../services/location-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training-list.html',
  styleUrl: './training-list.css'
})
export class TrainingListComponent implements OnInit {
  @Input() locationId: number = 1;
  trainings: any[] = [];

  constructor(private locationService: LocationDataService) {
  }

  ngOnInit(): void {
    if (this.locationId) {
      this.locationService.getTrainingListByLocation(this.locationId).subscribe(data => {
      console.log("Training list data:", data);  // Add this line
        this.trainings = data;
      });
    }
  }
}
