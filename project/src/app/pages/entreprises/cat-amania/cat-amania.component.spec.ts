import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAmaniaComponent } from './cat-amania.component';

describe('CatAmaniaComponent', () => {
  let component: CatAmaniaComponent;
  let fixture: ComponentFixture<CatAmaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatAmaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatAmaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
