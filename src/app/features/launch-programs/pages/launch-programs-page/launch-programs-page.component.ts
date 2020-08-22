import { Filters } from './../../../../core/models/filters.enum';
import { SpacexCookieService } from './../../../../core/services/spacex-cookie/spacex-cookie.service';
import { Subscription } from 'rxjs';
import { LaunchProgram } from './../../../../core/models/launch-program';
import { LaunchProgramService } from './../../services/launch-program/launch-program.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-launch-programs-page',
  templateUrl: './launch-programs-page.component.html',
  styleUrls: ['./launch-programs-page.component.scss']
})
export class LaunchProgramsPageComponent implements OnInit, OnDestroy {
  launchProgramList: LaunchProgram[];
  subscriptions: Subscription[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private spacexCookieService: SpacexCookieService,
    private launchProgramService: LaunchProgramService
  ) {}

  ngOnInit(): void {
    this.launchProgramList = [];
    this.subscriptions = [];
    this.addChangeSubscription();
    this.getFiltersLaunchProgram();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  addChangeSubscription() {
    const routeSubscription = this.route.queryParams.subscribe(params => {
      const { year, launch, land } = params;
      if (year && year !== 'undefined') {
        debugger;
        this.spacexCookieService.setFilters(Filters.launch_year, year);
      }
      if (land && land !== 'undefined') {
        debugger;
        this.spacexCookieService.setFilters(Filters.land_success, land);
      }
      if (launch && launch !== 'undefined') {
        debugger;
        this.spacexCookieService.setFilters(Filters.launch_success, launch);
      }
    });

    const routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getFiltersLaunchProgram();
      }
    });
    this.subscriptions.push(...[routeSubscription, routerSubscription]);
  }

  getFiltersLaunchProgram() {
    const year = this.spacexCookieService.getFilters(Filters.launch_year);
    const land = this.spacexCookieService.getFilters(Filters.land_success);
    const launch = this.spacexCookieService.getFilters(Filters.launch_success);
    const filters: any = {};
    if (year && year !== 'undefined') {
      filters[Filters.launch_year] = year;
    }
    if (land && land !== 'undefined') {
      filters[Filters.land_success] = land;
    }
    if (launch && launch !== 'undefined') {
      filters[Filters.launch_success] = launch;
    }
    this.fetchLaunchPrograms(filters);
  }

  fetchLaunchPrograms(filters) {
    this.launchProgramService.getLaunchPrograms(filters).subscribe(
      (res: LaunchProgram[]) => {
        this.launchProgramList = res;
      },
      (err: HttpErrorResponse) => {
        this.launchProgramList = [];
        this.router.navigate([`error/${err.status}`]);
      }
    );
  }
}
