import { BadRequestException, NestMiddleware, UnauthorizedException} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import {Request, Response, NextFunction} from 'express';



export class CheckTypeUser implements NestMiddleware{

        jwt = new JwtService({secret:'esn3E3bJCtx88gFj9XrGJvd9YuXKkJVQ'});

       async use(req: Request, res: Response, next:NextFunction) {
            
            if(req.headers.authorization){
                const [bearer,token] = req.headers.authorization.split(' ');
                try {
                    const data = this.jwt.verify(token);
                   
                    if(data.admin === 1){
                        res.locals.id = data.sub
                        next();
                    }else{
                        throw new UnauthorizedException('You do not have permission to access this route');
                    }
                    
                    
                } catch (error) {
                    throw new BadRequestException(error);
                }
    
            }else{
                throw new UnauthorizedException('no token');
            }
        }
    
}