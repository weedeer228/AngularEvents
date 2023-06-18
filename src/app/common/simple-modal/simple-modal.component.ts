import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { JQ_TOKEN } from '../jquery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent {
  @Input() title!: string;
  @Input() elementId!: string;
  @ViewChild('modalcontainer') containerEl!: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any){}

  closeModal() {
    this.$(this.containerEl.nativeElement).modal('hide');
  }

}
