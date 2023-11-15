import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabitTrackingPage } from './habit-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: HabitTrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabitTrackingPageRoutingModule {}
