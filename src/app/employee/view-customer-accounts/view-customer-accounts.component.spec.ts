import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerAccountsComponent } from './view-customer-accounts.component';

describe('ViewCustomerAccountsComponent', () => {
  let component: ViewCustomerAccountsComponent;
  let fixture: ComponentFixture<ViewCustomerAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCustomerAccountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCustomerAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
