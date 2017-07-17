import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFlight } from '../../../../entities/IFlight';

@Component({
  selector: 'flight',
  templateUrl: './flight.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class FlightComponent implements OnInit {


  @Input()
  flight: IFlight;

  constructor() {
  }

  ngOnInit() {

  }

  toggleSelected() {

  }

}
