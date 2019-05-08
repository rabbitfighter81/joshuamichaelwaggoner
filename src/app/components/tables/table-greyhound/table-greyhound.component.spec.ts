import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GreyhoundService } from '../../../core/services/greyhound/greyhound.service';
import { GreyhoundServiceMock } from '../../../core/services/greyhound/greyhound.service.mock';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { TableGreyhoundComponent } from './table-greyhound.component';

describe('TableGreyhoundComponent', () => {

  let component: TableGreyhoundComponent;
  let fixture: ComponentFixture<TableGreyhoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, CoreModule],
      providers: [
        { provide: GreyhoundService, useClass: GreyhoundServiceMock },
      ],
      declarations: [TableGreyhoundComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGreyhoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
