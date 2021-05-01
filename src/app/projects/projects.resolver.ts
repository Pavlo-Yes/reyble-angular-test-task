import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectModel } from '@app/projects/project.model';
import { ProjectsService } from '@app/projects/projects.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsResolver implements Resolve<ProjectModel[]> {
  constructor(private projectService: ProjectsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProjectModel[]> {
    return this.projectService.getMyProjects();
  }
}
