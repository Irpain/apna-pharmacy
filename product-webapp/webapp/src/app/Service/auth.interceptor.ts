import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginAdvancedService } from "./login-advanced.service";




@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private login:LoginAdvancedService){}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        //add the jwt token (LocalStorage) request
        let authReq = req;
        const token = this.login.getToken();
        console.log('inside interceptor');
      
        
        
        
        if(token!=null){
            authReq = authReq.clone({
                setHeaders: { Authorization: 'Bearer ' + token  }, 
            });
        }
        return next.handle(authReq);
        
        

    }
    
}


export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    },
]