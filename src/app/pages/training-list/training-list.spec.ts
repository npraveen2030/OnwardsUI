import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingList } from './training-list';

describe('TrainingList', () => {
  let component: TrainingList;
  let fixture: ComponentFixture<TrainingList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
