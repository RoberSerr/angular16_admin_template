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

```