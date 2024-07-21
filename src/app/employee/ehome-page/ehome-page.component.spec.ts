import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EHomePageComponent } from './ehome-page.component';

describe('EHomePageComponent', () => {
  let component: EHomePageComponent;
  let fixture: ComponentFixture<EHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
