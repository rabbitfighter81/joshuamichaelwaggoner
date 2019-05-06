import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGreyhoundComponent } from './table-greyhound.component';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { GreyhoundService } from 'src/app/core/services/greyhound/greyhound.service';
import { GreyhoundServiceMock } from 'src/app/core/services/greyhound/greyhound.service.mock';

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
