import { Routes } from '@angular/router';
import { LoginComponent } from '@modules/auth/pages/login/login.component';
import { HomePageComponent } from '@modules/main/pages/home-page/home-page.component';

export const appRoutes: Routes = [

    {
        path: '',
        component: HomePageComponent,
        loadChildren: () => import('@modules/main/pages/home.routes')
            .then(r => r.homeRoutes)
    },
    {
        path: 'auth',
        component: LoginComponent
    }

];
