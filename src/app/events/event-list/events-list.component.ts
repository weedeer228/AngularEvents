import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService, IEvent } from "../shared";

declare let toastr: any;


@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventListComponent {
  events!: IEvent[]
  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.events = this.route.snapshot.data['events']
    console.log(this.events);
  }
}


