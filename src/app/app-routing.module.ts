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
    path: 'table',
    pathMatch: 'full',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule)
  },
  <Route>{
    path : '', redirectTo : 'table', pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
