import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVegitablesComponent } from './manage-vegitables.component';

describe('ManageVegitablesComponent', () => {
  let component: ManageVegitablesComponent;
  let fixture: ComponentFixture<ManageVegitablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVegitablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageVegitablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
