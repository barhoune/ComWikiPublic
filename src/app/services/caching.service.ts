// caching.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CachingService {
  private cache: { [key: string]: any } = {};

  getFromCache(key: string): any {
    const cachedData = localStorage.getItem(key);
    return cachedData ? JSON.parse(cachedData) : null;
  }

  addToCache(key: string, value: any): void {
    this.cache[key] = value;
    localStorage.setItem(key, JSON.stringify(value));
  }

  clearCache(): void {
    this.cache = {};
    localStorage.clear();
  }
}
