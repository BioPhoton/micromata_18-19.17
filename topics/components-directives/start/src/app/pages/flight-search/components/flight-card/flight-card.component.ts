import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFlight } from '../../../../entities/IFlight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent {
  @Input()
  flight: IFlight;

  @Input()
  selected: boolean;

  @Output()
  selectedChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.next(this.flight.id);
  }

}
