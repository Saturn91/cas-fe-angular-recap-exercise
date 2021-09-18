import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewToDoComponent } from './add-new-to-do.component';

describe('AddNewToDoComponent', () => {
  let component: AddNewToDoComponent;
  let fixture: ComponentFixture<AddNewToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
