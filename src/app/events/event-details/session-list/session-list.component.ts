import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISession } from '../../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnChanges {
  @Input() sessions!: ISession[];
  @Input() filterBy: string = 'all';
  visibleSessions: ISession[] = []


  filterSessions(filter: string) {
    filter === 'all' ? this.visibleSessions = this.sessions.slice(0)
      : this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filter);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.sessions) return;
    this.filterSessions(this.filterBy)
  }
}
