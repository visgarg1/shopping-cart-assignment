import { Directive, HostBinding, ElementRef, Renderer2, HostListener } from '@angular/core';


@Directive({
  selector: '[sbTest]'
})
export class TestDirective {

  @HostBinding('class.card-outline-primary') private ishovering: boolean;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(part, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(part, 'display', 'none');
    this.ishovering = false;
  }
}


/* <div class="card card-block" ccCardHover>
  <h4 class="card-title">{{data.setup}}</h4>
  <p class="card-text"
     [style.display]="'none'">{{data.punchline}}</p> (1)
  (2)
</div> */
