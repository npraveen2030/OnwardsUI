import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationDataService {
  private baseUrl = 'https://localhost:7255/api';

  constructor(private http: HttpClient) {}

  getHolidayListByLocation(locationId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/HolidayList/location/${locationId}`);
  }

  getTrainingListByLocation(locationId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Training/location/${locationId}`);
  }
}
