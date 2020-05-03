import { Component, OnInit } from '@angular/core'
import { HttpService } from '../services/http.service'
import { IStatewiseInfo, IDistrictMapper } from '../common/interfaces/interfaces';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
  })
  export class DashboardComponent implements OnInit {
      
    statesInfoList:IStatewiseInfo[]=[];

    districtInfoList:IDistrictMapper[]=[];
    selectedState:string;
    isDistrictDataVisible:boolean;

    constructor(private _http: HttpService) { 
      this.isDistrictDataVisible=false;
    }
  
    ngOnInit() {
      this.getAllStatesInfo();
    }

    getAllStatesInfo()
    {
        this._http.GetAllStatesInfo().subscribe((data:any)=>{
            this.statesInfoList=data.statewise;
        });
    }

    getStateDistrictInfo(stateName: string)
    {
        this.isDistrictDataVisible=!this.isDistrictDataVisible;
        this.selectedState=stateName;
        // this.districtInfoList=this._http.GetDistrictInfo(stateName);
        // console.log(this.districtInfoList);
        this._http.GetDistrictInfo().subscribe((data:any)=>{
            if(data[stateName]!=null)
            {
                this.districtInfoList=data[stateName]["districtData"];
            }            
        });
        if(!this.isDistrictDataVisible)
        {
            this.districtInfoList=[];
        } 
    }
}

