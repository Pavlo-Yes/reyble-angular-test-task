import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from '@app/projects/projects-component/projects.component';
import { ProjectsResolver } from '@app/projects/projects.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    resolve: { projectsFromResolver: ProjectsResolver },
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProjectsResolver],
})
export class ProjectsRoutingModule {}
