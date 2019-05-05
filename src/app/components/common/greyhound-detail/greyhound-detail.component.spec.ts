import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GreyhoundDetailComponent } from './greyhound-detail.component';
import { GreyhoundService } from '../../../core/services/greyhound/greyhound.service';
import { GreyhoundServiceMock } from '../../../core/services/greyhound/greyhound.service.mock';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TableGreyhoundModule } from '../../tables/table-greyhound/table-greyhound.module';

describe('GreyhoundDetailComponent', () => {

  let component: GreyhoundDetailComponent;
  let fixture: ComponentFixture<GreyhoundDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        CoreModule,
        RouterTestingModule,
        TableGreyhoundModule
      ],
      providers: [
        { provide: GreyhoundService, useClass: GreyhoundServiceMock }
      ],
      declarations: [ GreyhoundDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreyhoundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
