import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGreyhoundComponent } from './table-greyhound.component';
import { AppMaterialModule } from 'src/app/core/modules/app-material/app-material.module';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';

describe('TableGreyhoundComponent', () => {
  let component: TableGreyhoundComponent;
  let fixture: ComponentFixture<TableGreyhoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        CoreModule
      ],
      declarations: [ TableGreyhoundComponent ]
    })
    .compileComponents();
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
