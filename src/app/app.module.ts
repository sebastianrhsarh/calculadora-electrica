import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './features/index/index.component';
import { HomeComponent } from './features/home/home.component';
import { ServicesModule } from './services/services.module';
import { CalculoPeqComponent } from './features/calculo-peq/calculo-peq.component';
import { CalculoK1k2Component } from './features/calculo-k1k2/calculo-k1k2.component';
import { CalculoRmsComponent } from './features/calculo-rms/calculo-rms.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    CalculoPeqComponent,
    CalculoK1k2Component,
    CalculoRmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ServicesModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
