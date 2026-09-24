import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: false,
  styleUrl: './child-component.css',
  templateUrl: './child-component.html',
})
export class ChildComponent {
  @Input() receivedData: string = 'Default data from parent';

  @Output() notifyParent = new EventEmitter<{ name: string; price: number }>();

  sendToParent(): void {
    const beerInfo = {
      name: 'HENIKEN',
      price: 19000,
    };

    this.notifyParent.emit(beerInfo);
  }
}
