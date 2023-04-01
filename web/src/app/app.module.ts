import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparePage } from './pages/compare/compare.page';
import { MyprojectsPage } from './pages/myprojects/myprojects.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, ComparePage, ProjectsPage, MyprojectsPage],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
