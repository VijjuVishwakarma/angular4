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
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MockyComponent } from './mocky/mocky.component';
import { CustomfilterPipe } from './customfilter.pipe';
import { AccountComponent } from './account/account.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
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
  },
  {
    path:'model_register',
    component:ModelDrivenFormComponent
  },
  {
    path:'mocky',
    component:MockyComponent
  },
  {
    path:'account',
    component:AccountComponent
  }
 ]
@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
	  ActressComponent,
	  HomeComponent,
	  RegisterComponent,
	  ModelDrivenFormComponent,
	  MockyComponent,
	  CustomfilterPipe,
	  AccountComponent,
	  WithdrawComponent,
	  DepositComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
	RouterModule.forRoot(routes)
  ],
  providers: [
    ActorService,
    ActressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
