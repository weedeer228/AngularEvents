import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.services';
import { ActivatedRoute } from '@angular/router';
import { ISession } from '../shared';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;
  addMode!: boolean;

  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null,this.event.session.map((s: { id: any; })=>s.id))
  }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(this.route.snapshot.params['id']);
  }

}
