import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'collabsible-well',
  templateUrl: './collabsible-well.component.html',
  styleUrls: ['./collabsible-well.component.css']
})
export class CollabsibleWellComponent {
  @Input() title!: string;
  visible!: boolean;

  toggleContent() {
    this.visible = !this.visible;
  }

}
