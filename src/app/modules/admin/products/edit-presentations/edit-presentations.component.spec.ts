import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPresentationsComponent } from './edit-presentations.component';

describe('EditPresentationsComponent', () => {
  let component: EditPresentationsComponent;
  let fixture: ComponentFixture<EditPresentationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPresentationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPresentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
