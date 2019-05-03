import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { PasswordGeneratorComponent } from './password-generator.component';

describe('PasswordGeneratorComponent', () => {

  let component: PasswordGeneratorComponent;
  let fixture: ComponentFixture<PasswordGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        CoreModule,
      ],
      providers: [
        {
          provide: MAT_SNACK_BAR_DATA,
          useValue: { feature: 'Password Generator' }
        },
      ],
      declarations: [ PasswordGeneratorComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
