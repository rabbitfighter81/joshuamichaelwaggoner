import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AppMaterialModule } from './../../../modules/app-material/app-material.module';
import { ReducerModule } from './../../../modules/reducer/reducer.module';
import { SearchHighlightPipe } from './../../../pipes/search-highlight/search-highlight.pipe';
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
        ReducerModule,
        StoreModule
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
