  // Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

  // Material modules
import { MdToolbarModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';

  // Thirdy part modules
import { FlexLayoutModule } from '@angular/flex-layout';

  // App modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

  // App service modules
import { LoginService } from "./services/login.service";
import { MenuComponent } from './components/menu/menu.component';
import { FormComponent } from './components/commons/form/form.component';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    FormComponent,
    SettingsComponent
  ],
  imports: [
      // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
      // Material modules
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdInputModule,
    MdGridListModule,
      // Thirdy part modules
    FlexLayoutModule,
      // App modules
    AppRoutingModule,
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
