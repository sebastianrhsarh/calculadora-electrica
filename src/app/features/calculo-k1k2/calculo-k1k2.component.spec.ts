import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoK1k2Component } from './calculo-k1k2.component';

describe('CalculoK1k2Component', () => {
  let component: CalculoK1k2Component;
  let fixture: ComponentFixture<CalculoK1k2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculoK1k2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoK1k2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
