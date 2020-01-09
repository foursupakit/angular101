import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SectionComponent } from './layout/section/section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MountainComponent } from './home/inside-home/mountain/mountain.component';
import { SeaComponent } from './home/inside-home/sea/sea.component';
import { NaturalComponent } from './home/inside-home/natural/natural.component';
import { GalaxyComponent } from './home/inside-home/galaxy/galaxy.component';
import { Page404Component } from './page404/page404.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { TilesComponent } from './layout/tiles/tiles.component';
import { SliderModule } from 'angular-image-slider';
import { SliderComponent } from './components/slider/slider.component';
import { HeroComponent } from './layout/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StudentsComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    MountainComponent,
    SeaComponent,
    NaturalComponent,
    GalaxyComponent,
    Page404Component,
    ScrollTopComponent,
    TilesComponent,
    SliderComponent,
    HeroComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    SliderModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent,
        children : [
          {path: '', redirectTo: 'mountain', pathMatch: 'full'},
          {path: 'mountain', component: MountainComponent},
          {path: 'sea', component: SeaComponent},
          {path: 'natural', component: NaturalComponent},
          {path: 'galaxy', component: GalaxyComponent},
          /* {path: '', component: MountainComponent} */
        ]
      },
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'student-system', component: StudentsComponent},
      {path: '404page', component: Page404Component},

      { path: '', redirectTo: 'home/mountain', pathMatch: 'full' },
      { path: 'home', component: HomeComponent,
        children: [
          { path: '', redirectTo: 'mountain', pathMatch: 'full' },
          { path: 'mountain', component: MountainComponent }
        ]
      },
      /*
      { path: '', component: HomeComponent,
      children : [
        { path: '', component: MountainComponent},
      ]},*/
      { path: '**', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent,
        children: [
          { path: '', redirectTo: 'mountain', pathMatch: 'full' },
          { path: 'mountain', component: MountainComponent }
        ]
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
