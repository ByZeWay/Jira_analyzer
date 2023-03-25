import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() properties!: any;
  show = true;
  texts = [
    {
      id: 1,
      text: 'Гистограмма, отражающая время, которое задачи провели в открытом состоянии',
    },
    {
      id: 2,
      text: 'Диаграммы, которые показывают распределение времени по состоянием задач',
    },
    { id: 3, text: 'График активности по задачам' },
    { id: 4, text: 'График сложности задач' },
    { id: 5, text: 'График, отражающий приоритетность всех задач' },
    { id: 6, text: 'График, отражающий приоритетность закрытых задач' },
  ];

  @Output() updateSettingsClick = new EventEmitter<any>();

  onUpdateSettingsClickClick(event: MouseEvent) {
    this.updateSettingsClick.emit();
    this.show = false;
  }

  onShowClick() {
    this.show = !this.show;
  }
}
