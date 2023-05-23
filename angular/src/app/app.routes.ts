import { Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { UpdateComponent } from './pages/update/update.component';

export const routes: Routes = [

  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component : ListComponent
  },
  {
    path: 'detail/:id',
    component: DetailsComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  },

];
