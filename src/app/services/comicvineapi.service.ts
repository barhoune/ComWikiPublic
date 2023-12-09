import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Characters } from '../interfaces/characters';
import { ApiResponse } from '../interfaces/api-response';
import { Issues } from '../interfaces/issues';
import { Volumes } from '../interfaces/volumes';
import { Movies } from '../interfaces/movies';
import { Character } from '../interfaces/character';
import { Series } from '../interfaces/series';
import { SearchResponse } from '../interfaces/search-response';

@Injectable({
  providedIn: 'root'
})
export class ComicvineapiService {
  baseURL: string ='https://comicvine.gamespot.com/api/';
  apiKey: string = '93e0e3a95dfa3f9745ccb9c24ca06d49ceec360f'

  constructor(private http: HttpClient) {}

  // hadi d characters
  getCharactes(): Observable<Characters[]> {
    //console.log(`${this.baseURL}characters?api_key=${this.apiKey}&format=json&limit=2`);
    // return this.http.get<ApiResponse>(`${this.baseURL}characters?api_key=${this.apiKey}&format=json`)
    return this.http.get<ApiResponse>(`${this.baseURL}characters?api_key=${this.apiKey}&format=json&offset=146`)
    .pipe(map((response: ApiResponse)=> response.results as Characters[]));
  }
  getCharacterDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseURL}character/4005-${data}?api_key=${this.apiKey}&format=json`)
  }


  //hadi d Issues
  getIssues(): Observable<Issues[]> {
    return this.http.get<ApiResponse>(`${this.baseURL}issues?api_key=${this.apiKey}&format=json&sort=name:asc`)
    .pipe(map((response: ApiResponse)=> response.results as Issues[]));
  }
  getIssueDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseURL}issue/4000-${data}?api_key=${this.apiKey}&format=json`)
  }


  //hadi d volumes
  getVolumes(): Observable<Volumes[]> {
    return this.http.get<ApiResponse>(`${this.baseURL}volumes?api_key=${this.apiKey}&sort=count_of_issues:desc&format=json`)
    .pipe(map((response: ApiResponse)=> response.results as Volumes[]));
  }
  getVolumeDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseURL}volume/4050-${data}?api_key=${this.apiKey}&format=json`)
  }

  //hadi d movies
  getMovies(): Observable<Movies[]> {
    return this.http.get<ApiResponse>(`${this.baseURL}movies?api_key=${this.apiKey}&sort=count_of_issues:desc&format=json`)
    .pipe(map((response: ApiResponse)=> response.results as Movies[]));
  }
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseURL}movie/4025-${data}?api_key=${this.apiKey}&format=json`)
  }

  //hadi d series
  getSeries(): Observable<Series[]> {
    return this.http.get<ApiResponse>(`${this.baseURL}series_list?api_key=${this.apiKey}&format=json`)
      .pipe(map((response: ApiResponse) => response.results as Series[]));
  }
  getSerieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseURL}series/4075-${data}?api_key=${this.apiKey}&format=json`)
  }
  searchData(query: string,resources:any, offset: number): Observable<SearchResponse[]> {
    console.log(`${this.baseURL}search/?api_key=${this.apiKey}&query=${query}&resources=${resources}&offset=${offset}&format=json`);
    return this.http.get<ApiResponse>(`${this.baseURL}search/?api_key=${this.apiKey}&query=${query}&resources=${resources}&offset=${offset}&format=json`)
    .pipe(map((response: ApiResponse)=> response.results as SearchResponse[]));
  }
}
