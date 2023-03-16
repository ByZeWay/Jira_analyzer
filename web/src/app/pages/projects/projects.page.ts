import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage {
  projResponse: any = {
    _links: {
      self: { href: 'http://localhost:8000/api/v1/connector/projects' },
    },
    data: [
      {
        Id: 12320221,
        Key: 'ENTMQST',
        Name: 'AMQ Streams',
        Url: 'https://issues.redhat.com//projects/ENTMQST',
        Existence: false,
      },
      {
        Id: 12334426,
        Key: 'AAPRFE',
        Name: 'Ansible Automation Platforms RFEs',
        Url: 'https://issues.redhat.com//projects/AAPRFE',
        Existence: false,
      },
      {
        Id: 12326120,
        Key: 'ACA',
        Name: 'Ansible Cloud Automation',
        Url: 'https://issues.redhat.com//projects/ACA',
        Existence: false,
      },
      {
        Id: 12325823,
        Key: 'ANA',
        Name: 'Ansible Networking \u0026 Security (Content)',
        Url: 'https://issues.redhat.com//projects/ANA',
        Existence: false,
      },
      {
        Id: 12314121,
        Key: 'APIMAN',
        Name: 'apiman (API Management)',
        Url: 'https://issues.redhat.com//projects/APIMAN',
        Existence: false,
      },
      {
        Id: 12333322,
        Key: 'ACRFE',
        Name: 'App Cloud RFE',
        Url: 'https://issues.redhat.com//projects/ACRFE',
        Existence: false,
      },
      {
        Id: 12314558,
        Key: 'AF',
        Name: 'AppFormer',
        Url: 'https://issues.redhat.com//projects/AF',
        Existence: false,
      },
      {
        Id: 10030,
        Key: 'JBAS',
        Name: 'Application Server 3  4  5 and 6',
        Url: 'https://issues.redhat.com//projects/JBAS',
        Existence: false,
      },
      {
        Id: 12311211,
        Key: 'AS7',
        Name: 'Application Server 7',
        Url: 'https://issues.redhat.com//projects/AS7',
        Existence: false,
      },
      {
        Id: 12310885,
        Key: 'ARQ',
        Name: 'Arquillian',
        Url: 'https://issues.redhat.com//projects/ARQ',
        Existence: false,
      },
    ],
    message: 'success',
    name: 'Jira Analyzer REST API Get Projects',
    pageCount: 28,
    pageInfo: { currentPage: 2, pageCount: 28, projectsCount: 276 },
    status: true,
  };

  pageChanged(newPage: number) {
    this.projResponse.pageInfo.currentPage = newPage;
  }
  itemExistenceClicked({ id, existence }: { id: number; existence: boolean }) {
    const newData = this.projResponse.data.map((project: IProject) => {
      return project.Id === id ? { ...project, Existence: existence } : project;
    });

    this.projResponse.data = newData;
  }
}

interface IProject {
  Id: number;
  Key: string;
  Name: string;
  Url: string;
  Existence: boolean;
}
