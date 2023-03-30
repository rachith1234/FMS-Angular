import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingHistoryComponent } from './selling-history.component';

describe('SellingHistoryComponent', () => {
  let component: SellingHistoryComponent;
  let fixture: ComponentFixture<SellingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
