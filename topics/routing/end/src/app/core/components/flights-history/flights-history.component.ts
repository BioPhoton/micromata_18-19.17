import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

function t() {
  console.log('ASDASDASDASDASD');
}

@Component({
  selector: 'flights-history',
  templateUrl: './flights-history.component.html',
  styleUrls: ['./flights-history.component.scss']
})
export class FlightsHistoryComponent implements OnInit {

  id$: Observable<number>;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id$ = this.route.params.pluck('id');
  }

}
