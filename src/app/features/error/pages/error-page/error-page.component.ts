import { ErrorCodesConfig } from './../../config/error-codes.config';
import { ErrorCodes } from './../../../../core/models/error-codes.enum';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit, OnDestroy {
  errorCode: ErrorCodes;
  errorCodes = ErrorCodes;
  subscriptions: Subscription[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscriptions = [];
    const errorCodeSubscription = this.route.params.subscribe(param => {
      const { code } = param;
      this.errorCode = ErrorCodesConfig.includes(code) ? code : ErrorCodes.notFound;
    });
    this.subscriptions.push(errorCodeSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
