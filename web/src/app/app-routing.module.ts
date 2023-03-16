import { ProjectsPage } from './pages/projects/projects.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparePage } from './pages/compare/compare.page';
import { MyprojectsPage } from './pages/myprojects/myprojects.page';

const routes: Routes = [
  { path: '', component: ProjectsPage },
  { path: 'myprojects', component: MyprojectsPage },
  { path: 'compare', component: ComparePage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
