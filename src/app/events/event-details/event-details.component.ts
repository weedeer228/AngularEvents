import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.services';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;
  addMode!: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';
  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map((s: { id: any; }) => s.id)) + 1;
    session.id = nextId;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;

  }

  cancelAddSession() {
    this.addMode = false;
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.event = this.route.snapshot.data['event']
      console.log(this.route.snapshot.data)
      console.log(this.event);
      this.addMode = false;
    })
  }

}
