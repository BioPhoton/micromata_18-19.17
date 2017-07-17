import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ILeavePageWarningResult } from './leave-route-warning-result';

@Component({
  selector: 'leave-route-warning',
  templateUrl: './leave-route-warning.component.html',
  styleUrls: ['./leave-route-warning.component.scss']
})
export class LeaveRouteWarningComponent implements OnInit {

  private _subjectName: string;
  @Input()
  get subjectName(): string {
    return this._subjectName || 'this page';
  }

  set subjectName(value: string) {
    this._subjectName = value;
  }

  @Output()
  decision: EventEmitter<ILeavePageWarningResult> = new EventEmitter<ILeavePageWarningResult>();

  constructor() {
  }

  ngOnInit() {

  }

  confirm() {
    this.decision.emit({decision: true});
  }

  cancel() {
    this.decision.emit({decision: false});
  }

}
