import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventService } from './events/shared/event.services';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404/404.component';

import { EventsAppComponent } from './events-app.component';
import {
  EventThumbnailComponent,
  EventListComponent,
  EventListResolver,
  EventRouteActivator,
  CreateSessionComponent,
  EventDetailsComponent,
} from './events/index'
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollabsibleWellComponent } from './common/collabsible-well/collabsible-well.component';


@NgModule({
  declarations: [
    SessionListComponent,
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    EventDetailsComponent,
    CollabsibleWellComponent,
    SessionListComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EventService,
    ToastrService,
    AuthService,
    EventListResolver,
    EventRouteActivator,

    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.IsDirty)
    return window.confirm('You have not saved this event do you really want to cancel?')
  return true;
}
