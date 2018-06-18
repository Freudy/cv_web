import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvensysComponent } from './avensys.component';

describe('AvensysComponent', () => {
  let component: AvensysComponent;
  let fixture: ComponentFixture<AvensysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvensysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvensysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
