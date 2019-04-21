import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineContainerComponent } from './pipeline-container.component';

describe('PipelineContainerComponent', () => {
  let component: PipelineContainerComponent;
  let fixture: ComponentFixture<PipelineContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
