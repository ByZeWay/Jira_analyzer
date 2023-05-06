import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  baseUrl = 'http://localhost:8000/allProjects';
  constructor(private http: HttpClient) {}

  getProjects({
    limit = 10,
    page = 1,
    name = '',
    key = '',
  }: {
    limit?: number;
    page?: number;
    name?: string;
    key?: string;
  }) {
    console.log(limit, page, name);
    let params: {
      limit?: number;
      page?: number;
      search?: string;
      Key?: string;
    } = { limit, page };

    if (name) params.search = name;
    if (key) params.search = key;
    return this.http
      .get<IProjectsResponse>(`${this.baseUrl}`, {
        params,
      })
      .pipe(
        map((data: IProjectsResponse) => ({
          ...data,
          pageInfo: { ...data.PageInfo },
        }))
      );
  }
}

//types

export interface IProjectsResponse {
  Projects: IProject[];
  PageInfo: IPageInfo;
}

export interface IProject {
  self: string;
  id: string;
  key: string;
  lead: ILead;
  name: string;
  projectTypeKey: string;
}

export interface ILead {
  self: string;
  name: string;
  key: string;
  displayName: string;
  active: boolean;
}

export interface IPageInfo {
  currentPage: number;
  pageCount: number;
  projectsCount: number;
}
