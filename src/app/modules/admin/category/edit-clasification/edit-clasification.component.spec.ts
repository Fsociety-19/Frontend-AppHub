import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClasificationComponent } from './edit-clasification.component';

describe('EditClasificationComponent', () => {
  let component: EditClasificationComponent;
  let fixture: ComponentFixture<EditClasificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClasificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditClasificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
