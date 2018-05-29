import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { TestAuthComponent } from './test-auth/test-auth.component';
import {HttpClientModule} from '@angular/common/http';

const routes = [
  {path: 'index.html', component: TestAuthComponent}
]
;

@NgModule({
  declarations: [
    AppComponent,
    TestAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
