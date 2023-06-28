import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPresentationsComponent } from './crud-presentations.component';

describe('CrudPresentationsComponent', () => {
  let component: CrudPresentationsComponent;
  let fixture: ComponentFixture<CrudPresentationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPresentationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudPresentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
