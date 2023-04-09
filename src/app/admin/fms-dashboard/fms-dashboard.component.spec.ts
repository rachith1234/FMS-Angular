import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmsDashboardComponent } from './fms-dashboard.component';

describe('FmsDashboardComponent', () => {
  let component: FmsDashboardComponent;
  let fixture: ComponentFixture<FmsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
