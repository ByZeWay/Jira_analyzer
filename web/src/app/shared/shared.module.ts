import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckboxLabelComponent } from './components/common/checkbox-label/checkbox-label.component';
import { TableComponent } from './components/table/table.component';
import { InputComponent } from './components/common/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProjectComponent } from './components/project/project.component';

const components = [
  NavbarComponent,
  CheckboxLabelComponent,
  TableComponent,
  InputComponent,
  ProjectComponent,
];
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports: [...components],
})
export class SharedModule {}
