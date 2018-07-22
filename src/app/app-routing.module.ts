import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { Routes, RouterModule } from '@angular/router';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
const routerConfig: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'wellcome', component: WellcomeComponent}
  ];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routerConfig)
    ],
    declarations: [
        LoginComponent,
        WellcomeComponent
    ]
})

export class AppRoutingModule{}