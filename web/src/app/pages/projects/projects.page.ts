import { DestroyService } from 'src/app/shared/services/destroy.service';
import { takeUntil } from 'rxjs';
import {
  IProject,
  IProjectsResponse,
  ProjectsService,
} from './../../shared/services/projects.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  providers: [DestroyService],
})
export class ProjectsPage implements OnInit, OnDestroy {
  projectsResponse!: IProjectsResponse;
  searchName = '';
  searchKey = '';
  searchMode: 'key' | 'name' = 'name';
  itemsPerPage = 10;
  currentPage = 1;

  constructor(
    private projectService: ProjectsService,
    private destroyService: DestroyService
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  ngOnDestroy(): void {
    this.destroyService.destroySubscriptions();
  }

  private createSearchOptions(): {
    limit: number;
    page: number;
    name: string;
    key: string;
  } {
    return {
      limit: this.itemsPerPage,
      page: this.currentPage,
      name: this.searchName,
      key: this.searchKey,
    };
  }

  getProjects(): void {
    this.projectService
      .getProjects(this.createSearchOptions())
      .pipe(takeUntil(this.destroyService.destory$$))
      .subscribe((response: IProjectsResponse) => {
        this.projectsResponse = response;
      });
  }

  onSearchNameChange({ search }: { search: string }): void {
    this.searchName = search;
    this.searchKey = '';
    this.getProjects();
  }

  onSearchKeyChange({ search }: { search: string }): void {
    this.searchKey = search;
    this.searchName = '';
    this.getProjects();
  }

  onSearchButtonClick(): void {
    this.searchName = '';
    this.searchKey = '';
    this.currentPage = 1;

    this.projectService
      .getProjects(this.createSearchOptions())
      .pipe(takeUntil(this.destroyService.destory$$))
      .subscribe((response: IProjectsResponse) => {
        this.projectsResponse = response;
        this.searchMode = this.searchMode === 'key' ? 'name' : 'key';
      });
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.getProjects();
  }

  onItemExistenceClick({ id, active }: { id: string; active: boolean }): void {
    const newData = this.projectsResponse.Projects.map((project: IProject) => {
      return project.id === id
        ? { ...project, lead: { ...project.lead, active } }
        : project;
    });
    this.projectsResponse.Projects = newData;
  }
}
