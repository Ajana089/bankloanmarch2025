import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicatonlistComponent } from './loan-applicatonlist.component';

describe('LoanApplicatonlistComponent', () => {
  let component: LoanApplicatonlistComponent;
  let fixture: ComponentFixture<LoanApplicatonlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanApplicatonlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanApplicatonlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
