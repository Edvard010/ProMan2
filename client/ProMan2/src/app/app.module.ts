import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrentTasksListComponent } from './dashboard/current-tasks-list/current-tasks-list.component';
import { ProjectTasksChartComponent } from './dashboard/project-tasks-chart/project-tasks-chart.component';
import { ProjectTasksComponent } from './dashboard/project-tasks-chart/project-tasks/project-tasks.component';
import { ChartsModule } from 'ng2-charts';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientProjectsListComponent } from './clients/client-details/projects-list/client-projects-list.component';
import { CommentsListComponent } from './projects/project-details/comments-list/comments-list.component';
import { TasksListComponent } from './projects/project-details/tasks-list/tasks-list.component';
import { NewTaskDialogComponent } from './projects/project-details/new-task-dialog/new-task-dialog.component';
import { NewCommentDialogComponent } from './projects/project-details/new-comment-dialog/new-comment-dialog.component';
import { FinishProjectDialogComponent } from './projects/project-details/finish-project-dialog/finish-project-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LoginComponent,
    RegisterComponent,
    ProjectsListComponent,
    NewProjectComponent,
    ClientsListComponent,
    NewClientComponent,
    DashboardComponent,
    CurrentTasksListComponent,
    ProjectTasksChartComponent,
    ProjectTasksComponent,
    ProjectDetailsComponent,
    ClientDetailsComponent,
    ClientProjectsListComponent,
    CommentsListComponent,
    TasksListComponent,
    NewTaskDialogComponent,
    NewCommentDialogComponent,
    FinishProjectDialogComponent
  ],
  entryComponents: [
    NewTaskDialogComponent,
    NewCommentDialogComponent,
    FinishProjectDialogComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
