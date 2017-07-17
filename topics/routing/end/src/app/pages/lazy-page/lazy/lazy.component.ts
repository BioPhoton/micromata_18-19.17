import { Component, OnInit } from '@angular/core';
import { SharedCounterService } from '../../../my-lib/shared-counter.service';

@Component({
  selector: 'lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  constructor(private gs: SharedCounterService) {
  }

  ngOnInit() {
    console.log(this.gs.increment());
  }

}
