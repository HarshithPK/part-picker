import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
    { path: '', redirectTo: '/build-system', pathMatch: 'full' },
    {
        path: 'products',
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('./products/products.module').then((m) => m.ProductsModule),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
