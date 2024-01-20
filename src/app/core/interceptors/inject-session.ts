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
        console.log(request)
        let newRequest = request;
        newRequest = request.clone({
            setHeaders: {
                autorization: `Bearer ${token}`
            }
        })
        console.log(newRequest)
        return next(newRequest)
    } catch (e) {
        console.log('error sessionInterceptor:', e)
        return next(request)
    }
}