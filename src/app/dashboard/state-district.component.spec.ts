import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '../services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { StateDistrictComponent } from './state-district.component';

describe('StateDistrictComponent', () => {
  let component: StateDistrictComponent;
  let fixture: ComponentFixture<StateDistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [StateDistrictComponent],
      providers:[HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create state-district component', () => {
      expect(component).toBeTruthy();
  });
});
