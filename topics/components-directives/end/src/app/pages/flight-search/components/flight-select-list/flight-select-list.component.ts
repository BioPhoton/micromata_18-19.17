import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import { FlightSelectionService } from '../../../../services/flight-selection.service';
import { IFlight } from '../../../../entities/IFlight';
import { FlightCardComponent } from '../flight-card/flight-card.component';

@Component({
  selector: 'flight-select-list',
  templateUrl: './flight-select-list.component.html',
  styleUrls: ['./flight-select-list.component.scss']
})
export class FlightSelectListComponent implements OnChanges, OnInit,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @ViewChildren(FlightCardComponent)
  cards: QueryList<FlightCardComponent>;

  lastSelection = 0;

  get flights(): IFlight[] {
    return this.fss.flights;
  }

  get selectedFlightIds(): any {
    return this.fss.selectedFlightIds;
  }

  constructor(private fss: FlightSelectionService, private cd: ChangeDetectorRef) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('List ngOnChanges', changes);
  }

  ngOnInit(): void {
    // console.log('List ngOnInit');
  }

  ngAfterViewInit(): void {
    // console.log('List ngAfterViewInit');
    this.lastSelection = 0;
    this.cd.detectChanges();
    this.subToFlightSelectionChange()
  }

  ngAfterViewChecked(): void {
    // console.log('List ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    // console.log('List ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // console.log('List ngAfterContentChecked');
  }

  ngOnDestroy() {
    // console.log('List ngOnDestroy');
  }

  toggleSelected(id) {
    this.fss.toggleSelected(id);
  }

  toggleAll() {
    this.fss.toggleAll();
  }

  subToFlightSelectionChange() {
    this.lastSelection = this.cards.filter(c => c.selected).map(c => c.flight.id)[0];
    this.cd.detectChanges();

    this.cards.forEach((card) => {
      card.selectedChange
        .subscribe((v) => {
          this.lastSelection = v;
        })
    })
  }
  
}
