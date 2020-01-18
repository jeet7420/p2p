import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyStatementPage } from './monthly-statement.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyStatementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyStatementPageRoutingModule {}
