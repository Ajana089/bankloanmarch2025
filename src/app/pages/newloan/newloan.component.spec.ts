import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewloanComponent } from './newloan.component';

describe('NewloanComponent', () => {
  let component: NewloanComponent;
  let fixture: ComponentFixture<NewloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewloanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
