import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { RecordCardComponent } from './record-card.component';

describe('RecordCardComponent', () => {

  let component: RecordCardComponent;
  let fixture: ComponentFixture<RecordCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, CoreModule, RouterTestingModule],
      declarations: [RecordCardComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
