import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() properties!: any;
  show = false;

  @Output() updateSettingsClick = new EventEmitter<any>();

  onUpdateSettingsClickClick(event: MouseEvent) {
    this.updateSettingsClick.emit();
    this.show = false;
  }

  onShowClick() {
    this.show = !this.show;
  }
}
