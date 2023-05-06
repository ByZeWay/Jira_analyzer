import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProject } from 'src/app/shared/services/projects.service';
interface IPageInfo {
  currentPage: number;
  pageCount: number;
  projectsCount: number;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() collection: IProject[] = [];
  @Input() pageInfo!: IPageInfo;
  @Output() pageChange = new EventEmitter<number>();
  @Output() itemExistenceClick = new EventEmitter<{
    id: string;
    active: boolean;
  }>();

  onItemExistenceClick(id: string, active: boolean) {
    this.itemExistenceClick.emit({ id, active });
  }
  onPageChange(newPage: number) {
    this.pageChange.emit(newPage);
  }
}
