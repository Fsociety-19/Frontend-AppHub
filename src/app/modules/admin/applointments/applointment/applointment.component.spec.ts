import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplointmentComponent } from './applointment.component';

describe('ApplointmentComponent', () => {
  let component: ApplointmentComponent;
  let fixture: ComponentFixture<ApplointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
