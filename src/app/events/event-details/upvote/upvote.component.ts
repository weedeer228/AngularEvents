import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  @Input() count!: number;
  @Output() vote = new EventEmitter();

  @Input() set voted(val: boolean) {
    this.iconColor = val ? 'red' : 'white';
  }
  iconColor!: string;

  onClick() {
    this.vote.emit({});
  }

}
