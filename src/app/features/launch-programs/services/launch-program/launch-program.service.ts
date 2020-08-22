import { Filters } from './../../../../core/models/filters.enum';
import { environment } from './../../../../../environments/environment';
import { ApiServiceService } from './../../../../core/services/api-service/api-service.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaunchProgramService extends ApiServiceService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  getLaunchPrograms(filters: Filters) {
    const url = `${environment.baseAPIUrl}launches`;
    const land = filters[Filters.land_success];
    if (land) {
      this.params = this.params.set(Filters.land_success, land);
    }
    const launch = filters[Filters.launch_success];
    if (launch) {
      this.params = this.params.set(Filters.launch_success, launch);
    }
    const year = filters[Filters.launch_year];
    if (year) {
      this.params = this.params.set(Filters.launch_year, year);
    }
    return this.get(url);
  }
}
