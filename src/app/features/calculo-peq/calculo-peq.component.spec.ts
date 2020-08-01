import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoPeqComponent } from './calculo-peq.component';

describe('CalculoPeqComponent', () => {
  let component: CalculoPeqComponent;
  let fixture: ComponentFixture<CalculoPeqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculoPeqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoPeqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
