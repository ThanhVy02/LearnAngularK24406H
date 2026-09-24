import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
  messageFromChild: { name: string; price: number } | null = null;

  handleMessage(message: { name: string; price: number }): void {
    this.messageFromChild = message;
  }
}
