import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {LoginService} from './login/login.service';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NgxAdminLteModule } from 'ngx-admin-lte';

// const routerConfig: Routes = [
//   {path: 'login', component: LoginComponent}
// ];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // FormsModule,
    // ReactiveFormsModule,
    AppRoutingModule,
    NgxAdminLteModule
    // RouterModule.forRoot(routerConfig)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
