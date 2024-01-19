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
    },
    // {
    //     path: 'layout-static',
    //     loadChildren: () => import('@modules/main/pages/layout-static/layout-static.routes')
    //         .then(r => r.layoutStaticRoutes)
    // },
    // {
    //     path: 'layout-sidenav-light',
    //     loadChildren: () => import('@modules/main/pages/layout-sidenav-light/layout-sidenav-light.routes')
    //         .then(r => r.layoutSidenavLightRoutes)
    // },
    // {
    //     path: '401-page',
    //     loadChildren: () => import('@modules/main/pages/unauthorized/unauthorized.routes')
    //         .then(r => r.unauthorizedRoutes)
    // },
    // {
    //     path: '404-page',
    //     loadChildren: () => import('@modules/main/pages/urlnotfound/urlnotfound.routes')
    //         .then(r => r.urlnotfoundRoutes)
    // },
    // {
    //     path: '500-page',
    //     loadChildren: () => import('@modules/main/pages/internal-server-error/internal-server-error.routes')
    //         .then(r => r.internalServerErrorRoutes)
    // },
    // {
    //     path: 'charts',
    //     loadChildren: () => import('@modules/main/pages/charts/charts.routes')
    //         .then(r => r.chartsRoutes)
    // },
    // {
    //     path: 'tables',
    //     loadChildren: () => import('@modules/main/pages/tables/tables.routes')
    //         .then(r => r.tablesRoutes)
    // },
    // {
    //     path: 'copyright',
    //     loadChildren: () => import('@modules/main/pages/copyright/copyright.routes')
    //         .then(r => r.copyrightRoutes)
    // },
    // {
    //     path: 'terms-and-conditions',
    //     loadChildren: () => import('@modules/main/pages/terms-and-conditions/terms-and-conditions.routes')
    //         .then(r => r.termsAndConditionsRoutes)
    // },
    // {
    //     path: 'privacy-policy',
    //     loadChildren: () => import('@modules/main/pages/privacy-policy/privacy-policy.routes')
    //         .then(r => r.privacyPolicyRoutes)
    // },
    // {
    //     path: '**',
    //     redirectTo: '/404-page'
    // }
];