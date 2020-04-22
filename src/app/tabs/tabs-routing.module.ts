import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'nosotros',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../nosotros/nosotros.module').then(m => m.NosotrosPageModule)
          }
        ]
      },
      {
        path: 'bot',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../bot/bot.module').then(m => m.BotPageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
