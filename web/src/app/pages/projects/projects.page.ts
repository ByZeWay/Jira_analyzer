import { DestroyService } from 'src/app/shared/services/destroy.service';
import { takeUntil } from 'rxjs';
import { ProjectsService } from './../../shared/services/projects.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  providers: [DestroyService],
})
export class ProjectsPage implements OnInit, OnDestroy {
  projResponse!: any;
  search = '';
  limit = 10;
  page = 1;
  constructor(
    private projectService: ProjectsService,
    private destroyService: DestroyService
  ) {}

  ngOnInit() {
    this.getProjects();
  }
  ngOnDestroy() {
    this.destroyService.destroySubscriptions();
  }
  getProjects() {
    console.log(this.limit, this.page, this.search);
    this.projectService
      .getProjects({ limit: this.limit, page: this.page, search: this.search })
      .pipe(takeUntil(this.destroyService.destory$$))
      .subscribe((res: any) => {
        console.log(res);
        this.projResponse = res;
      });
  }

  searchChanged({ search }: { search: string }) {
    this.search = search;
    this.getProjects();
  }
  pageChanged(newPage: number) {
    this.page = newPage;
    this.getProjects();
  }
  itemExistenceClicked({ id, existence }: { id: number; existence: boolean }) {
    const newData = this.projResponse.Projects.map((project: IProject) => {
      return project.Id === id ? { ...project, Existence: existence } : project;
    });

    this.projResponse.Projects = newData;
  }
}

interface IProject {
  Id: number;
  Key: string;
  Name: string;
  Url: string;
  Existence: boolean;
}
