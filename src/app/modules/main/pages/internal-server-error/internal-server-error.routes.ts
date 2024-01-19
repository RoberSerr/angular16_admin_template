import { Routes } from '@angular/router';
import { InternalServerErrorComponent } from '@modules/main/pages/internal-server-error/internal-server-error.component';

export const internalServerErrorRoutes: Routes = [
    {
        path: '',
        component: InternalServerErrorComponent
    }
]