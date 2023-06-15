import { Component } from "@angular/core";
import { EventService } from "./shared/event.services";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared";

declare let toastr: any;


@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventListComponent {
  events!: IEvent[]
  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
  }
  handleThumbnailClick(eventName: string) {
    toastr.success(eventName);
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }
}


