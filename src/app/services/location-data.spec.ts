import { TestBed } from '@angular/core/testing';

import { LocationData } from './location-data';

describe('LocationData', () => {
  let service: LocationData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
