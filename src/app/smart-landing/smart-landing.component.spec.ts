import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartLandingComponent } from './smart-landing.component';

describe('SmartLandingComponent', () => {
  let component: SmartLandingComponent;
  let fixture: ComponentFixture<SmartLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
