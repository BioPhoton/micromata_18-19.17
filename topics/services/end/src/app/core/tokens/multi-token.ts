import { InjectionToken } from "@angular/core";  // Angular 2: OpaqueToken

export const COUNT_FUNCTIONS = new InjectionToken<number>("COUNT_FUNCTIONS");

export function CountOne(value:number):number {
  return value+1;
}

export function CountTwo(value:number):number {
  return value+2;
}
