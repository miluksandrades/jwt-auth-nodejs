import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconfiguredComponent } from './unconfigured.component';

describe('UnconfiguredComponent', () => {
  let component: UnconfiguredComponent;
  let fixture: ComponentFixture<UnconfiguredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnconfiguredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnconfiguredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
