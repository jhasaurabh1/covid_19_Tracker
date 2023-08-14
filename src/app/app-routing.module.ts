import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  <Route>{
    path: 'form',
    pathMatch: 'full',
    loadChildren: () => import('./form/form.module').then(m => m.FormModule)
  },
  <Route>{
    path: 'graph',
    pathMatch: 'full',
    loadChildren: () => import('./graph/graph.module').then(m => m.GraphModule)
  },
  <Route>{
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  <Route>{
    path: 'table',
    pathMatch: 'full',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule)
  },
  <Route>{
    path : '', redirectTo : 'home', pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
