import { Component, Input } from '@angular/core';
import { IDistrictInfo } from '../common/interfaces/interfaces';

@Component({
    selector: 'app-district',
    templateUrl: './state-district.component.html',
    styleUrls:['./state-district.component.css']
  })
  export class StateDistrictComponent {
    @Input() districtsInfo:IDistrictInfo[];

  }