import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { EventService } from "./event.services";
import { map } from "rxjs/operators";


@Injectable()
export class EventResolver implements Resolve<any>{

  constructor(private eventService: EventService) {

  }

  resolve(route:ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']);
  }

}
