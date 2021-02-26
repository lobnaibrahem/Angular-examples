import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductRFormComponent } from './addproduct-rform.component';

describe('AddproductRFormComponent', () => {
  let component: AddproductRFormComponent;
  let fixture: ComponentFixture<AddproductRFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductRFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductRFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
