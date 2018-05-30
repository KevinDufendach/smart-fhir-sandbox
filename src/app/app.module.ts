import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { TestAuthComponent } from './test-auth/test-auth.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatSelectModule} from '@angular/material';
import { SmartAuthComponent } from './smart-auth/smart-auth.component';
import { SmartLandingComponent } from './smart-landing/smart-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    TestAuthComponent,
    SmartAuthComponent,
    SmartLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
