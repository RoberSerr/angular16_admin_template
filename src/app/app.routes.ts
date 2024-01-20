import { Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { AuthComponent } from '@modules/auth/pages/auth/auth.component';

import { HomePageComponent } from '@modules/main/pages/home-page/home-page.component';

export const appRoutes: Routes = [

    {
        path: '',
        component: HomePageComponent,
        loadChildren: () => import('@modules/main/pages/home.routes')
            .then(r => r.homeRoutes),
        canActivate: [SessionGuard]
    },
    {
        path: 'auth',
        component: AuthComponent,
        loadChildren: () => import('@modules/auth/pages/auth.routes')
            .then(r => r.authRoutes)
    }

];
