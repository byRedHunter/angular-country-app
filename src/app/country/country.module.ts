import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CapitalComponent } from './pages/capital/capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { DetailComponent } from './pages/detail/detail.component';
import { RegionComponent } from './pages/region/region.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    ByCountryComponent,
    CapitalComponent,
    DetailComponent,
    RegionComponent,
    TableComponent,
    SearchComponent,
  ],
  exports: [
    ByCountryComponent,
    CapitalComponent,
    DetailComponent,
    RegionComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class CountryModule {}
