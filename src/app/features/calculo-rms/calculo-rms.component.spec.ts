import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoRmsComponent } from './calculo-rms.component';

describe('CalculoRmsComponent', () => {
  let component: CalculoRmsComponent;
  let fixture: ComponentFixture<CalculoRmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculoRmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoRmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
