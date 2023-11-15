import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalPagePage } from './modal-page/modal-page.page';
import { HomePage } from './home/home.page';
import { TabsPageModule } from './tabs/tabs.module';

@NgModule({
  declarations: [AppComponent, ModalPagePage, HomePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, TabsPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
