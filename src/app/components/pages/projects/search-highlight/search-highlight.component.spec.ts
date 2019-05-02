import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMaterialModule } from '../../../../core/modules/app-material/app-material.module';
import { SearchHighlightPipe } from '../../../../core/pipes/search-highlight/search-highlight.pipe';
import { SearchHighlightComponent } from './search-highlight.component';

describe('SearchHighlightComponent', () => {

  let component: SearchHighlightComponent;
  let fixture: ComponentFixture<SearchHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        RouterTestingModule,
        FormsModule,
      ],
      providers: [
        {
          provide: MAT_SNACK_BAR_DATA,
          useValue: { feature: 'Search' }
        },
      ],
      declarations: [
        SearchHighlightComponent,
        SearchHighlightPipe,
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
