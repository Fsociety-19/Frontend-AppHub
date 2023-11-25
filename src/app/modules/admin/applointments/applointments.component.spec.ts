import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplointmentsComponent } from './applointments.component';

describe('ApplointmentsComponent', () => {
  let component: ApplointmentsComponent;
  let fixture: ComponentFixture<ApplointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
