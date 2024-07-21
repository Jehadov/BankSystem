import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUsersComponen } from './login-users.component';

describe('LoginUsersComponent', () => {
  let component: LoginUsersComponen;
  let fixture: ComponentFixture<LoginUsersComponen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginUsersComponen]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginUsersComponen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
