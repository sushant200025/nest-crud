import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigModule } from '@nestjs/config/dist';

@Injectable()
export class AuthGuard implements CanActivate {
   
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> { 
    const request = context.switchToHttp().getRequest();
    const headers=context.switchToHttp().getRequest().headers;

    // console.log("username  "+ process.env.USER );
    if(headers.username==null ||headers.password==null)return false
    if(headers.username==process.env.USER && headers.password==process.env.PASSWORD)return true;
    
    return false
}
}