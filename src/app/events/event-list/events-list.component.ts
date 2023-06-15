import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService, IEvent } from "../shared";
import { ToastrService } from "src/app/common/toastr.service";

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


