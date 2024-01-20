# Plantilla Administración API Rest

Partiendo de un proyecto nuevo todos los pasos que he seguido

>> ### Añadir ficheros visual studio code a .gitignore

```bash
### VisualStudioCode ###
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets

# Local History for Visual Studio Code
.history/

# Built Visual Studio Code Extensions
*.vsix

### VisualStudioCode Patch ###
# Ignore all local history of files
.history
.ionide
```

>> ### Instalar Bootstrap, Popper, FontsAwesome

```bash
### Bootstrap
ng add @ng-bootstrap/ng-bootstrap

### Popper
npm i angular-popper

### Fonts Awesome
npm i @fortawesome/angular-fontawesome@0.13.0
npm i @fortawesome/free-solid-svg-icons i @fortawesome/free-brands-svg-icons i @fortawesome/free-regular-svg-icons
```

>> ### tsconfig.json Configuración previa de PATHS  y trabajo con json

```json
// tsconfig.json

"compilerOptions": {
    "resolveJsonModule": true,
    "paths": {
      "@core/*": [
        "src/app/core/*"
      ],
      "@modules/*": [
        "src/app/modules/*"
      ],
      "@shared/*": [
        "src/app/shared/*"
      ]
    },
}
```

>> ### angular.json Autmatizar la creación de componentes standalone

```json
// angular.json

{
  "proyects": {
    "proyect": {

      "schematics": {
        "@schematics/angular:component": {
          "standalone": true
        },
        "@schematics/angular:directive": {
          "standalone": true
        },
        "@schematics/angular:pipe": {
          "standalone": true
        }
      },

    }
  }
}
```

## FIRST COMMIT

>> ### SCAFOLDING

```bash
 app| 
    |
    |_____core|
    |         |___ models
    |
    |____data
    |
    |____modules| 
    |           |____auth|
    |           |        |___pages
    |           |        |___layout
    |           |        |___components
    |           |        |___pipes   
    |           |        |___services       
    |           |
    |           |
    |           |_____main|
    |                     |___pages
    |                     |___layout
    |                     |___components
    |                     |___pipes   
    |                     |___services       
    | 
    |_____shared|
                |___components
                |___pies
                |___services
```

>> ### Pasada la hoja de estilos

## FIRST COMMIT

>> ### Terminadas las rutas, empezamos con los layouts

>> ### Manejador de cookies NGX Cookie-service

#### Instalación

```bash
npm i ngx-cookie-service@16.1.0 -S
```

#### inyectar servicio en la app (app.config.ts)

```typescript 
import { CookieService } from 'ngx-cookie-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes),
    CookieService
  ]
};
```

#### Escribir datos en la cookie (componente)

```typescript
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

constructor(
    private _AuthService: AuthService,
    private cookie: CookieService
  ) {}

sendLogin(): void {
const { email, password } = this.formLogin.value
this._AuthService.sendLogin(email, password)
  .subscribe({
    next: response => {
      this.errorSession = false
      const { token, user } = response.data
      this.cookie.set('token', token, 4, '/')
      this._router.navigate(['/','dashboard'])
    },
    error: error => {
      const err = error.error.error
      this.errorSession = true
      this.errorSessionText = err
    }
  })
}
```

#### Escribir datos en la cookie (servicio)

```typescript
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  sendLogin( email:string, password: string ): Observable<any> {
    const body = { email , password }
    return this.http.post(`${this.URL}/auth/login`, body)
      .pipe(
        tap((response: any) => {
          const { token, user } = response.data
          this.cookie.set('token_servicio', token, 4, '/')
        })
      )
  }
}
```

>> ### GUARDS (protección de rutas

#### Generar el guard

```bash
ng g g core/guards/session
? Which type of guard would you like to create? (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
❯◉ CanActivate    <======
 ◯ CanActivateChild
 ◯ CanDeactivate
 ◯ CanMatch
```

#### guard

```typescript
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


export const SessionGuard = (): boolean => {
  const cookieService = inject(CookieService)
  const router = inject(Router)
  try {
    
    const token: boolean = cookieService.check('token')
    if (!token){
      router.navigate(['/auth/', 'login'])
    }
    console.log(token)
    return token

  } catch (e) {
    console.log('error con la cookie', e)
    return false
  }
};
```

#### Activar el guard en las rutas

```typescript
import { SessionGuard } from '@core/guards/session.guard';

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
```

>> ### INTERCEPTORS enviar datos por el req.headers

#### Interceptor

```typescript
export interface InjectSession {
}
import { HttpHandlerFn, HttpRequest } from '@angular/common/http'
import { inject } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'

export const sessionInterceptor = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {

    try {
        const cookieService = inject(CookieService)
        const token = cookieService.get('token')
        const user_roles = cookieService.get('user_roles')

        let newRequest = request;
        newRequest = request.clone({
            setHeaders: {
                autorization: `Bearer ${token}`
            }
        })
        console.log(request)
        console.log(newRequest)
        return next(newRequest)
    } catch (e) {
        console.log('error sessionInterceptor:', e)
        return next(request)
    }
}
```

#### app.config.ts

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { sessionInterceptor } from '@core/interceptors/inject-session';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient( withInterceptors([sessionInterceptor]) ),
    provideRouter(appRoutes),
    CookieService
  ]
};
```