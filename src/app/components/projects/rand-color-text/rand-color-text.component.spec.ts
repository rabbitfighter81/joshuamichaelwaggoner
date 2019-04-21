import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandColorTextComponent } from './rand-color-text.component';

describe('RandColorTextComponent', () => {
  let component: RandColorTextComponent;
  let fixture: ComponentFixture<RandColorTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandColorTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandColorTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
