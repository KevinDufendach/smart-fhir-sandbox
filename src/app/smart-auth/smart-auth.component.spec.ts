import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartAuthComponent } from './smart-auth.component';

describe('SmartAuthComponent', () => {
  let component: SmartAuthComponent;
  let fixture: ComponentFixture<SmartAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
