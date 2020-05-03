import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Constants } from '../common/constants';
import { IDistrictMapper } from '../common/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  GetAllStatesInfo() {
    return this.http.get(Constants.CovidDataUrls.Urls.baseUrl + Constants.CovidDataUrls.Urls.stateUrl);
  }

  GetDistrictInfo(){
    return this.http.get(Constants.CovidDataUrls.Urls.baseUrl + Constants.CovidDataUrls.Urls.districtUrl);
  }
}