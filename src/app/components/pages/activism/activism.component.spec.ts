import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivismComponent } from './activism.component';

describe('ActivismComponent', () => {
  let component: ActivismComponent;
  let fixture: ComponentFixture<ActivismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
