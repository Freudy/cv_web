import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWebComponent } from './first-web.component';

describe('FirstWebComponent', () => {
  let component: FirstWebComponent;
  let fixture: ComponentFixture<FirstWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
