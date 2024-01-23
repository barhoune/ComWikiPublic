import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
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
    // Check if the request is a GET request
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    // Check if the response is already in the cache
    const cachedResponse = this.cachingService.getFromCache(request.url);
    if (cachedResponse) {
      // Return cached response as an observable
      return of(new HttpResponse({ body: cachedResponse }));
    }

    // If not in the cache, make the API call and cache the response
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cachingService.addToCache(request.url, event.body);
        }
      })
    );
  }
}
