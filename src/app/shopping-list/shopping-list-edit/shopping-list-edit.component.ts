import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() addEmiiter: EventEmitter<{ name: string; amount: number }> = new EventEmitter<{ name: string; amount: number }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.addEmiiter.emit({name: this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value as number});
  }

}
