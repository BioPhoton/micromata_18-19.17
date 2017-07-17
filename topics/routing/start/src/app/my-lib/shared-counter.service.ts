import { Injectable } from '@angular/core';

@Injectable()
export class SharedCounterService {

  nr = 0;

  constructor() {

  }

  increment(): string {
    return 'incremented to:' + this.nr++
  }

}
