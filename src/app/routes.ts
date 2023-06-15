import { Error404Component } from "./errors/404/404.component";
import { Routes } from '@angular/router';

import {
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListComponent,
  EventListResolver,
  CreateSessionComponent
} from './events/index'
export const appRoutes: Routes = [
  {
    path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  { path: 'events', component: EventListComponent, resolve: { events: EventListResolver } },
  {
    path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(x => x.userModule)
  },
  {    path:'events/session/new', component:CreateSessionComponent},


]
