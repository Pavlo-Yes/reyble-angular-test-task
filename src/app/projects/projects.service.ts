import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProjectModel } from '@app/projects/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) {}

  getMyProjects(): Observable<ProjectModel[]> {
    return this.httpClient.get<ProjectModel[]>('https://api.github.com/users/Pavlo-Yes/repos');
    // .pipe(catchError(this.handleError))
  }
  // private handleError(errorResponse: HttpErrorResponse){
  //   if (errorResponse.error instanceof ErrorEvent) {
  //     console.error('Error.message from projectService.handleError: ', errorResponse.error.message);
  //   }else {
  //     console.error('Error from projectService.handleError: ', errorResponse);
  //   }
  // }
}
