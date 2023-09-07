import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './pages/login/login-form/login-form.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
