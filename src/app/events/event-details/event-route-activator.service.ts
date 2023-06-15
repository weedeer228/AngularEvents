import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { EventService } from "../shared/event.services";
import { Observable } from "rxjs";


@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const eventExist = !!this.eventService.getEvent(route.params['id']);
    if (!eventExist)
      this.router.navigate(['/404'])
    return eventExist;
  }


}

