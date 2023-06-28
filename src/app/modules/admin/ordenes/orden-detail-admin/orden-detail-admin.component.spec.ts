import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenDetailAdminComponent } from './orden-detail-admin.component';

describe('OrdenDetailAdminComponent', () => {
  let component: OrdenDetailAdminComponent;
  let fixture: ComponentFixture<OrdenDetailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenDetailAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
