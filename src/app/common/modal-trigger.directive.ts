import { Directive, ElementRef, Inject, Input, OnInit, inject } from "@angular/core";
import * as bootstrap from "bootstrap";
import { JQ_TOKEN } from "./jquery.service";


@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId!: string;
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }
  ngOnInit(): void {
    this.el.addEventListener('click', e => {
      this.$('#' + this.modalId).modal('show');
    });
  }
}
