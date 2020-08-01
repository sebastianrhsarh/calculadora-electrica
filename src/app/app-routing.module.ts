import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './features/index/index.component';
import { HomeComponent } from './features/home/home.component';
import { CalculoPeqComponent } from './features/calculo-peq/calculo-peq.component';
import { CalculoK1k2Component } from './features/calculo-k1k2/calculo-k1k2.component';
import { CalculoRmsComponent } from './features/calculo-rms/calculo-rms.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'calculo-peq',
        component: CalculoPeqComponent
      },
      {
        path:'calculo-k1k2',
        component: CalculoK1k2Component
      },
      {
        path:'calculo-rms',
        component: CalculoRmsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
