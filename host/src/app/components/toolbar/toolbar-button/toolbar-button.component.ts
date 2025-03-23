import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar-button.component.html',
  styleUrls: ['./toolbar-button.component.scss']

})
export class ToolbarButtonComponent {
  @Input() buttonIcon: string | undefined;

  constructor() {}
}
