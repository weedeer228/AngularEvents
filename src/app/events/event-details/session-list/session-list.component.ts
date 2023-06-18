import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISession } from '../../shared';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from '../voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnChanges {
  @Input() sessions!: ISession[];
  @Input() filterBy: string = 'all';
  @Input() sortBy: string = 'voters';
  visibleSessions: ISession[] = []

  constructor(public  authService: AuthService, private voterService: VoterService) {

  }

  filterSessions(filter: string) {
    filter === 'all' ? this.visibleSessions = this.sessions.slice(0)
      : this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filter);
  }

  sortByNameAsc(firsrSession: ISession, secondSession: ISession) {
    if (firsrSession.name > secondSession.name)
      return 1;
    if (firsrSession.name === secondSession.name)
      return 0;
    return -1;
  }

  sortByVotesDesc(firsrSession: ISession, secondSession: ISession) {
    return secondSession.voters.length - firsrSession.voters.length;
  }

  toggleVote(session: ISession) {
    var currentUserName = this.authService.currentUser.userName;
    if (this.userHasVoted(session, currentUserName)) this.voterService.deleteVoter(session, currentUserName);
    else this.voterService.addVoter(session, currentUserName);

    if (this.sortBy === 'votes')
      this.visibleSessions.sort(this.sortByVotesDesc);

  }

  userHasVoted(session: ISession, currentUserName: string) {
    return this.voterService.userHasVoted(session, currentUserName);

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.sessions) return;
    this.filterSessions(this.filterBy)
    this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDesc);
  }
}
