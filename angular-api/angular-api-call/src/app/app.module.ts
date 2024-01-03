import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [AppComponent, UserFormComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
