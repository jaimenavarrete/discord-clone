import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './pages/login/components/form-login/form-login.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, FormLoginComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
