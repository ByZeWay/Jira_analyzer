import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() collection!: any[];
  @Input() pageInfo!: IPageInfo;
  @Output() pageChange = new EventEmitter<number>();
  @Output() itemExistenceClick = new EventEmitter<{
    id: number;
    existence: boolean;
  }>();

  onItemExistenceClick(id: number, existence: boolean) {
    this.itemExistenceClick.emit({ id, existence });
  }
  onPageChange(newPage: number) {
    this.pageChange.emit(newPage);
  }
}
