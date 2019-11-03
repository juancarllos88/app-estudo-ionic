import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { DetalhamentoComponent } from './detalhamento/detalhamento.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      },
      {
        path:'detalhamento/:id',
        component: DetalhamentoComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [ListPage,DetalhamentoComponent]
})
export class ListPageModule {}
