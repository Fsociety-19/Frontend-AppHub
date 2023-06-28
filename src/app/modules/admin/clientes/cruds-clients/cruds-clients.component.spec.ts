import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudsClientsComponent } from './cruds-clients.component';

describe('CrudsClientsComponent', () => {
  let component: CrudsClientsComponent;
  let fixture: ComponentFixture<CrudsClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudsClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
