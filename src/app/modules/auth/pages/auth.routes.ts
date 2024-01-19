import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const authRoutes: Routes = [

    {
        path: '',
        component: LoginComponent,
        loadChildren: () => import('@modules/auth/pages/login/login.routes')
            .then(r => r.loginRoutes)
    },
    {
        path: 'login',
        loadChildren: () => import('@modules/auth/pages/login/login.routes')
            .then(r => r.loginRoutes)
    },
    {
        path: 'register',
        loadChildren: () => import('@modules/auth/pages/register/register.routes')
            .then(r => r.registerRoutes)
    },
    {
        path: 'password',
        loadChildren: () => import('@modules/auth/pages/password/password.routes')
            .then(r => r.passwordRoutes)
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];