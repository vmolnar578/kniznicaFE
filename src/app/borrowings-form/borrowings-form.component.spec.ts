import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingsFormComponent } from './borrowings-form.component';

describe('BorrowingsFormComponent', () => {
  let component: BorrowingsFormComponent;
  let fixture: ComponentFixture<BorrowingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
