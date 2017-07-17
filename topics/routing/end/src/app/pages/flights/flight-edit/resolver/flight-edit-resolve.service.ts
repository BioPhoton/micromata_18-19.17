import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IFlight } from '../../../../core/entities/IFlight';
import { Observable } from 'rxjs/Observable';
import { FlightService } from '../../services/flight.service';

@Injectable()
export class FlightEditResolveService implements Resolve<IFlight> {

  constructor(private flightService: FlightService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IFlight> | Promise<IFlight> | IFlight {
    console.log('route', route.params);
    const id = route.params.id || 0;
    return this.flightService.findById(id);
  }

}
