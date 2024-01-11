import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchrounousObservablesComponent } from './asynchrounous-observables.component';

describe('AsynchrounousObservablesComponent', () => {
  let component: AsynchrounousObservablesComponent;
  let fixture: ComponentFixture<AsynchrounousObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynchrounousObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynchrounousObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
