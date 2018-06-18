import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiiComponent } from './sii.component';

describe('SiiComponent', () => {
  let component: SiiComponent;
  let fixture: ComponentFixture<SiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
