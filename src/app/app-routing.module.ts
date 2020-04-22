import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "register",
    loadChildren: () =>
      import("./register/register.module").then(m => m.RegisterPageModule)
  },
  {
    path: "add-post",
    loadChildren: () =>
      import("./add-post/add-post.module").then(m => m.AddPostPageModule)
  },
  {
    path: "edit-post/:id",
    loadChildren: () =>
      import("./edit-post/edit-post.module").then(m => m.EditPostPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'bot',
    loadChildren: () => import('./bot/bot.module').then( m => m.BotPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
