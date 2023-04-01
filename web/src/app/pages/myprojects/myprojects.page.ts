import { Component } from '@angular/core';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.page.html',
  styleUrls: ['./myprojects.page.scss'],
})
export class MyprojectsPage {
  projects = [
    {
      Id: 12312121,
      Key: '',
      Name: 'Accumulo',
      allIssuesCount: 4745,
      openIssuesCount: 163,
      closeIssuesCount: 94,
      resolvedIssuesCount: 4485,
      reopenedIssuesCount: 2,
      progressIssuesCount: 0,
      averageTime: 1105,
      averageIssuesCount: 0,
    },
    {
      Id: 12312121,
      Key: '',
      Name: 'Accumulo',
      allIssuesCount: 4745,
      openIssuesCount: 163,
      closeIssuesCount: 94,
      resolvedIssuesCount: 4485,
      reopenedIssuesCount: 2,
      progressIssuesCount: 0,
      averageTime: 1105,
      averageIssuesCount: 0,
    },
  ];
}
