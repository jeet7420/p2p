import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyStatementPageRoutingModule } from './monthly-statement-routing.module';

import { MonthlyStatementPage } from './monthly-statement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlyStatementPageRoutingModule
  ],
  declarations: [MonthlyStatementPage]
})
export class MonthlyStatementPageModule {}
