import { SpacexCookieService } from './../../../core/services/spacex-cookie/spacex-cookie.service';
import { Subscription } from 'rxjs';
import { FiltersConfig } from './../../config/filters.config';
import { Filters } from './../../../core/models/filters.enum';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  filters = Filters;
  filterConfig = FiltersConfig;
  subscriptions: Subscription[];
  constructor(private router: Router, private spacexCookieService: SpacexCookieService) {}

  ngOnInit(): void {
  }

  updateFilters(filterType: Filters, value: boolean | number) {
    const filters = {};
    switch (filterType) {
      case Filters.launch_year:
        filters[Filters.launch_year] = value;
        break;
      case Filters.launch_success:
        filters[Filters.launch_success] = value;
        break;
      case Filters.land_success:
        filters[Filters.land_success] = value;
        break;
    }
    this.spacexCookieService.setFilters(filterType, filters);
    this.navigateWithFilters();
  }

  navigateWithFilters() {
    const queryParams: any = {};
    const year = this.spacexCookieService.getFilters(Filters.launch_year);
    const land = this.spacexCookieService.getFilters(Filters.land_success);
    const launch = this.spacexCookieService.getFilters(Filters.launch_success);
    if (year && year !== 'undefined') {
      queryParams.year = year;
    }
    if (land && land !== 'undefined') {
      queryParams.land = land;
    }
    if (launch && launch !== 'undefined') {
      queryParams.launch = launch;
    }
    this.router.navigate(['launch-programs'], { queryParams });
  }

  clearFilters() {
    this.spacexCookieService.clearFilters();
    this.router.navigate(['launch-programs'], { queryParams: {} });
  }
}
