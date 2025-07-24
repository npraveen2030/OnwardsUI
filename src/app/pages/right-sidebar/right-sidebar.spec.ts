import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSidebar } from './right-sidebar';

describe('RightSidebar', () => {
  let component: RightSidebar;
  let fixture: ComponentFixture<RightSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
