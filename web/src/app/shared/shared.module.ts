import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckboxLabelComponent } from './components/common/checkbox-label/checkbox-label.component';
import { TableComponent } from './components/common/table/table.component';
import { ProjDescrComponent } from './components/project/proj-descr/proj-descr.component';
import { ProjSettingsComponent } from './components/project/proj-settings/proj-settings.component';
import { InputComponent } from './components/common/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
const components = [
  NavbarComponent,
  CheckboxLabelComponent,
  TableComponent,

  ProjDescrComponent,
  ProjSettingsComponent,
  InputComponent,
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
