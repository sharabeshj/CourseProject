import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') private counter: boolean;

  constructor(private elRef: ElementRef) {
  }


  @HostListener('document:click', ['$event']) onClickAway(event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.counter = false;
    } else {
      this.counter = !this.counter;
    }
  }

}
