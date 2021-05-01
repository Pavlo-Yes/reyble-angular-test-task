import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects-component/projects.component';
import { ProjectsService } from '@app/projects/projects.service';
import { ShellModule } from '@app/shell/shell.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, ShellModule],
  providers: [ProjectsService],
})
export class ProjectsModule {}
