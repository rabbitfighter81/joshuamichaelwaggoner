import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { SearchHighlightComponent } from './search-highlight.component';
import { CoreModule } from '../../../../core/core.module';
import { SharedModule } from '../../../../core/modules/shared/shared.module';

describe('SearchHighlightComponent', () => {

  let component: SearchHighlightComponent;
  let fixture: ComponentFixture<SearchHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        CoreModule,
      ],
      providers: [
        {
          provide: MAT_SNACK_BAR_DATA,
          useValue: { feature: 'Search' }
        },
      ],
      declarations: [ SearchHighlightComponent ],
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
