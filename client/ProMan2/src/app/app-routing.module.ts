import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { RegisterComponent } from './register/register.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '', 
        component: SidenavComponent,
        children: [
          { path: '', component: DashboardComponent },
          { path: 'projects', component: ProjectsListComponent },
          { path: 'new-project', component: NewProjectComponent},
          { path: 'project/:id', component: ProjectDetailsComponent },
          { path: 'clients', component: ClientsListComponent },
          { path: 'new-client', component: NewClientComponent},
          { path: 'client/:id', component: ClientDetailsComponent },
          { path: 'client/:clientId/new-project', component: NewProjectComponent }
        ]
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
