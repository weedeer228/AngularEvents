import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { EventService } from "./event.services";
import { map } from "rxjs/operators";


@Injectable()
export class EventListResolver implements Resolve<any>{

  constructor(private eventService: EventService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventService.getEvents().pipe(map(events => events))
  }

}
