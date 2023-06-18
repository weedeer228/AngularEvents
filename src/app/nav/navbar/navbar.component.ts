import { Component, OnInit } from '@angular/core';
import { EventService, ISession } from 'src/app/events';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';
import { AuthService } from 'src/app/user/auth.service';
import { trigger } from '@angular/animations';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchTerm: string = '';

  constructor(public auth: AuthService, private eventService: EventService) {

  }

  onSearch(){
    $('#id').modal()
  }

  foundSessions!: ISession[]
  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
        this.foundSessions = sessions;
        console.log(this.foundSessions);
      }
    )
  }
}
