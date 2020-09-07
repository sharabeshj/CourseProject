import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  templateUrl: 'header.component.html',
  selector: 'app-header'
})
export class HeaderComponent {
  collapsed = true;
  @Output() routeChangeEmitter: EventEmitter<{ route: string }> = new EventEmitter<{route: string}>();
  @Input() currentRoute: string;

  public route(event: any): void {
    this.routeChangeEmitter.emit({ route: event.currentTarget.textContent});
  }
}
