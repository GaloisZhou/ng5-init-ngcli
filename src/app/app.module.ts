/**
 * Created by Galois Zhou on 20/12/2017 15:15.
 */

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HttpAuthInterceptor} from './providers/http/http-auth.interceptor';
import {HttpService} from './providers/http/http.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserService} from './providers/user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    HttpService,
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
