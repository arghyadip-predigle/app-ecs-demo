import { HttpInterceptorFn } from '@angular/common/http';

// @Injectable()
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: {},
  });
  return next(authReq);
};
