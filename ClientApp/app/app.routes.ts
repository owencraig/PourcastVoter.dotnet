import { RouterConfig } from '@angular/router';
import { Vote } from './vote';
import { Results } from './results';
import { About } from './about';


export const routes : RouterConfig = [
  { path: '', redirectTo: 'vote', pathMatch: 'prefix' },
  { path: 'vote', component: Vote, pathMatch: 'prefix' },
  { path: 'results', component: Results, pathMatch: 'prefix' },
  { path: 'about', component: About, pathMatch: 'prefix' },
  { path: '**', redirectTo: 'vote', pathMatch: 'prefix' }
];
