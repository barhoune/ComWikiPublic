import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolumesComponent } from './components/volumes/volumes.component';
import { CharactersComponent } from './components/characters/characters.component';
import { IssuesComponent } from './components/issues/issues.component';
import { SeriesComponent } from './components/series/series.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { MoviesComponent } from './components/movies/movies.component';
import { VolumeDetailComponent } from './components/volume-detail/volume-detail.component';
import { IssueDetailsComponent } from './components/issue-details/issue-details.component';
import { SerieDetailComponent } from './components/serie-detail/serie-detail.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'volumes', component: VolumesComponent },
  { path: 'volumes/volume/:id', component: VolumeDetailComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'issues/issue/:id', component: IssueDetailsComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'series/serie/:id', component: SerieDetailComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/movie/:id', component: MovieDetailComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/character/:id', component: CharacterDetailComponent },
  { path: 'search', component: AdvancedSearchComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
