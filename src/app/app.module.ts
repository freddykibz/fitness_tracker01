import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { TrainningComponent } from './trainning/trainning.component';
import { CurrentTrainningComponent } from './trainning/current-trainning/current-trainning.component';
import { NewTrainningComponent } from './trainning/new-trainning/new-trainning.component';
import { PastTrainningComponent } from './trainning/past-trainning/past-trainning.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    TrainningComponent,
    CurrentTrainningComponent,
    NewTrainningComponent,
    PastTrainningComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
