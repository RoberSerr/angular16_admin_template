import { inject } from "@angular/core"
import { CookieService } from "ngx-cookie-service"

export const currentUser = (): { token:string } => {

    const cookieService = inject(CookieService)
    const token = cookieService.get('token') as string

    return { 
        token: token
     }
}