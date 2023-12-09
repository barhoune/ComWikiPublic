import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SafeHtmlPipe } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { IssuesComponent } from './components/issues/issues.component';
import { VolumesComponent } from './components/volumes/volumes.component';
import { DockModule } from 'primeng/dock';
import { DockheaderComponent } from './components/dockheader/dockheader.component';
import { RadioButtonModule } from 'primeng/radiobutton';

import { MoviesComponent } from './components/movies/movies.component';
import { CharacterDetailComponent,  } from './components/character-detail/character-detail.component';
import { SeriesComponent } from './components/series/series.component';
import { VolumeDetailComponent } from './components/volume-detail/volume-detail.component';
import { IssueDetailsComponent } from './components/issue-details/issue-details.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

import { SerieDetailComponent } from './components/serie-detail/serie-detail.component';
import { FormsModule } from '@angular/forms';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    IssuesComponent,
    VolumesComponent,
    DockheaderComponent,
    MoviesComponent,
    CharacterDetailComponent,
    SeriesComponent,
    VolumeDetailComponent,
    IssueDetailsComponent,
    MovieDetailComponent,
    SerieDetailComponent,
    SafeHtmlPipe,
    AdvancedSearchComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    RippleModule,
    DockModule,
    RadioButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
