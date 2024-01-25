import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CachingService } from './caching.service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cachingService: CachingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const cachedResponse = this.cachingService.getFromCache(request.url);
    if (cachedResponse) {
      return of(new HttpResponse({ body: cachedResponse }));
    }

    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.cachingService.addToCache(request.url, event.body);
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse && !this.isErrorResponseExcluded(error)) {
            console.log("error saving data, no respose to save")
          }
        }
      )
    );
  }

  private isSuccessfulResponse(response: HttpResponse<any>): boolean {
    return response.status >= 200 && response.status < 300;
  }

  private isErrorResponseExcluded(error: HttpErrorResponse): boolean {
    return true;
  }
}
