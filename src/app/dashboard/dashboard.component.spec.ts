import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HttpService } from '../services/http.service';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [DashboardComponent],
      providers:[HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should contain data for Total', inject([HttpService], (_httpService) => {

    _httpService.GetAllStatesInfo().subscribe((data:any)=>{
      expect(data.statewise[0].state).toContain("Total");    
    })    
  }));

  it('should contain text for Delhi', inject([HttpService], (_httpService) => {

    _httpService.GetDistrictInfo().subscribe((data:any)=>{
      expect(data["Delhi"]["statecode"]).toContain("DL");
    });
  }));
});
