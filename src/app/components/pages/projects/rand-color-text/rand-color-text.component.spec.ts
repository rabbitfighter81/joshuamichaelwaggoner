import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { CoreModule } from '../../../../core/core.module';
import { SharedModule } from '../../../../core/modules/shared/shared.module';
import { RandColorTextComponent } from './rand-color-text.component';

describe('RandColorTextComponent', () => {
  let component: RandColorTextComponent;
  let fixture: ComponentFixture<RandColorTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, CoreModule],
      providers: [
        {
          provide: MAT_SNACK_BAR_DATA,
          useValue: { feature: 'Random Color Text' },
        },
      ],
      declarations: [RandColorTextComponent],
    }).compileComponents();
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
