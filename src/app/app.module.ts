import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActorComponent } from './actor/actor.component';
import { ActressComponent } from './actress/actress.component';
import { HomeComponent } from './home/home.component';
import { ActorService } from './service/actor.service';
import { ActressService } from './service/actress.service';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
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
  {
    path: 'register',
    component: RegisterComponent
  }
 ]
@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
	  ActressComponent,
	  HomeComponent,
	  RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	RouterModule.forRoot(routes)
  ],
  providers: [
    ActorService,
    ActressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
