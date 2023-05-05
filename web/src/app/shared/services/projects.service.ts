import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

const response = {
  _links: { self: { href: 'http://localhost:8000/api/v1/connector/projects' } },
  data: [
    {
      Id: 12319320,
      Key: 'WFCC',
      Name: ' WildFly Client Configuration',
      Url: 'https://issues.redhat.com//projects/WFCC',
      Existence: true,
    },
    {
      Id: 12318520,
      Key: 'ENTMQMAAS',
      Name: 'A-MQ Messaging-as-a-Service',
      Url: 'https://issues.redhat.com//projects/ENTMQMAAS',
      Existence: false,
    },
    {
      Id: 12311621,
      Key: 'AEROGEAR',
      Name: 'AeroGear',
      Url: 'https://issues.redhat.com//projects/AEROGEAR',
      Existence: true,
    },
    {
      Id: 12312720,
      Key: 'AESH',
      Name: 'Aesh',
      Url: 'https://issues.redhat.com//projects/AESH',
      Existence: true,
    },
    {
      Id: 12331226,
      Key: 'AGENT',
      Name: 'Agent-based deployment for OpenShift Installer',
      Url: 'https://issues.redhat.com//projects/AGENT',
      Existence: true,
    },
    {
      Id: 12318922,
      Key: 'AG',
      Name: 'Agroal',
      Url: 'https://issues.redhat.com//projects/AG',
      Existence: true,
    },
    {
      Id: 12318422,
      Key: 'ENTMQBR',
      Name: 'AMQ Broker',
      Url: 'https://issues.redhat.com//projects/ENTMQBR',
      Existence: false,
    },
    {
      Id: 12316324,
      Key: 'ENTMQCL',
      Name: 'AMQ Clients',
      Url: 'https://issues.redhat.com//projects/ENTMQCL',
      Existence: true,
    },
    {
      Id: 12316420,
      Key: 'AMQDOC',
      Name: 'AMQ Documentation',
      Url: 'https://issues.redhat.com//projects/AMQDOC',
      Existence: false,
    },
    {
      Id: 12315940,
      Key: 'ENTMQIC',
      Name: 'AMQ Interconnect',
      Url: 'https://issues.redhat.com//projects/ENTMQIC',
      Existence: false,
    },
  ],
  message: 'success',
  name: 'Jira Analyzer REST API Get Projects',
  pageCount: 28,
  pageInfo: { currentPage: 1, pageCount: 28, projectsCount: 280 },
  status: true,
};

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  baseUrl = 'http://localhost:8000/allProjects';
  constructor(private http: HttpClient) {}

  getProjects({
    limit = 10,
    page = 1,
    search = '',
  }: {
    limit?: number;
    page?: number;
    search?: string;
  }) {
    console.log(limit, page, search);
    return this.http
      .get<any>(
        `${this.baseUrl}?page=${page}&limit=${limit}&search=${search}`
        /*`${this.baseUrl}` , {
        params: { limit, page, search },
      } */
      )
      .pipe(
        map((data:any) => ({
          ...data,
          pageInfo: { ...data.pageInfo, currentPage: page },
        }))
      );
  }
}
