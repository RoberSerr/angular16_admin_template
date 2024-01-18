import { Routes } from '@angular/router';

export const homeRoutes: Routes = [

    {
        path: '',
        loadChildren: () => import('@modules/main/pages/dashboard/dashboard.routes')
            .then(r => r.homeRoutes)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('@modules/main/pages/dashboard/dashboard.routes')
            .then(r => r.homeRoutes)
    }

];