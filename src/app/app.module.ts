import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventService } from './events/shared/event.services';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
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
  DurationPipe,
  UpvoteComponent,
  VoterService,
} from './events/index'
import { AuthService } from './user/auth.service';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import {
  CollabsibleWellComponent,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective,
} from './common/index';


declare let toastr: Toastr;
declare let jQuery: any;
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
    SimpleModalComponent,
    UpvoteComponent,

    ModalTriggerDirective,
    DurationPipe,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    EventService,
    VoterService,
    AuthService,
    EventListResolver,
    EventRouteActivator,

    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    }
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.IsDirty)
    return window.confirm('You have not saved this event do you really want to cancel?')
  return true;
}
