import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { AppMaterialModule } from '../../../modules/app-material/app-material.module';
import { SearchHighlightPipe } from '../../../pipes/search-highlight/search-highlight.pipe';
import { SearchHighlightComponent } from '../search-highlight/search-highlight.component';
import { ProjectBaseComponent } from './project-base.component';

describe('ProjectBaseComponent', () => {

  let component: ProjectBaseComponent;
  let fixture: ComponentFixture<ProjectBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
      ],
      providers: [
        {
          provide: MAT_SNACK_BAR_DATA,
          useValue: { feature: 'Search' }
        },
      ],
      declarations: [
        ProjectBaseComponent,
        SearchHighlightComponent,
        SearchHighlightPipe,
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
