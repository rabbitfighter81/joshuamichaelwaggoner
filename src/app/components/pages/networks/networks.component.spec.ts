import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { NetworksComponent } from './networks.component';

describe('NetworksComponent', () => {
  let component: NetworksComponent;
  let fixture: ComponentFixture<NetworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, CoreModule],
      declarations: [NetworksComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
