import { Filters } from './../../models/filters.enum';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpacexCookieService {
  constructor(private cookieService: CookieService) {}

  clearFilters() {
    this.cookieService.deleteAll();
  }

  getFilters(filterType: Filters) {
    return this.cookieService.get(filterType);
  }

  setFilters(filterType: Filters, filterValue: any): void {
    switch (filterType) {
      case Filters.launch_year:
        this.cookieService.set(
          Filters.launch_year,
          filterValue[filterType].toString()
        );
        break;
      case Filters.launch_success:
        this.cookieService.set(
          Filters.launch_success,
          filterValue[filterType].toString()
        );
        break;
      case Filters.land_success:
        this.cookieService.set(
          Filters.land_success,
          filterValue[filterType].toString()
        );
        break;
    }
  }
}
