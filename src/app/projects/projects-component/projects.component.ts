import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '@app/projects/project.model';
import { ActivatedRoute } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-my-github',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: ProjectModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((value) => (this.projects = value.projectsFromResolver));
    // this.activatedRoute.data.pipe(map((response: any) => {
    //   if (!response) {
    //     throw new Error('Error while fetching projects from github api')
    //   }
    //   console.log(response);
    //   return this.projects = response.projectsFromResolver
    // }))
  }

  //   const apiData = ajax('/api/data').pipe(
  //   map((res: any) => {
  //     if (!res.response) {
  //       throw new Error('Value expected!');
  //     }
  //     return res.response;
  //   }),
  //   catchError(err => of([]))
  // );

  ngOnInit(): void {}
}
