import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { CapitalComponent } from './country/pages/capital/capital.component';
import { DetailComponent } from './country/pages/detail/detail.component';
import { RegionComponent } from './country/pages/region/region.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: RegionComponent,
  },
  {
    path: 'capital',
    component: CapitalComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
