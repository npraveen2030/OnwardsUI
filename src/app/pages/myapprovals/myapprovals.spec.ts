import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myapprovals } from './myapprovals';

describe('Myapprovals', () => {
  let component: Myapprovals;
  let fixture: ComponentFixture<Myapprovals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myapprovals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myapprovals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
