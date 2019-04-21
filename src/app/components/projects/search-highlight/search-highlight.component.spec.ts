import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHighlightComponent } from './search-highlight.component';

describe('SearchHighlightComponent', () => {
  let component: SearchHighlightComponent;
  let fixture: ComponentFixture<SearchHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHighlightComponent ]
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
