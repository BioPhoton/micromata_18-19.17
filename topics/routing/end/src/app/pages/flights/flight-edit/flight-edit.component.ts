import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './guards/flight-edit-guard';
import { Observable } from 'rxjs/Observable';
import { ILeavePageWarningResult } from '../../../shared/components/leave-route-warning/leave-route-warning-result';
import { IFlight } from '../../../core/entities/IFlight';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit, CanComponentDeactivate {

  flightId: number;
  flight: IFlight;
  detailMode: boolean;

  exitWarning: any = {
    show: false,
    observer: null
  };

  constructor(private route: ActivatedRoute, private router: Router) {
  }


  decided($event: ILeavePageWarningResult) {
    this.exitWarning.show = false;
    this.exitWarning.observer.next($event.decision);
    this.exitWarning.observer.complete();
  }

  canDeactivate: () => boolean | Observable<boolean> | Promise<boolean> = () => {
    this.exitWarning.show = true;
    return new Observable<boolean>((observer: Observer<boolean>) => {
      this.exitWarning.observer = observer;
    });
  };

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.flightId = params.id;
      this.detailMode = params.detailMode;
    });

    this.route.data.subscribe((data) => {
      this.flight = data.flight;
    })
  }

  navigateToHome() {
    this.router.navigate(['home'])
  }


}
