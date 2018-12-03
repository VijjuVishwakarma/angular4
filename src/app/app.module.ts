import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActorComponent } from './actor/actor.component';
import { ActressComponent } from './actress/actress.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'actor',
    component: ActorComponent
  },
  {
    path: 'actress',
    component: ActressComponent
  },
 ]
@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
	ActressComponent,
	HomeComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
