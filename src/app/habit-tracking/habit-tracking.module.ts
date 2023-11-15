import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabitTrackingPageRoutingModule } from './habit-tracking-routing.module';

import { HabitTrackingPage } from './habit-tracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitTrackingPageRoutingModule
  ],
  declarations: [HabitTrackingPage]
})
export class HabitTrackingPageModule {}
