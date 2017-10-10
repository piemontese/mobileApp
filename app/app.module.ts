  // Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

  // Material modules
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';

  // Thirdy part modules
import { FlexLayoutModule } from '@angular/flex-layout';

  // App modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormComponent } from './components/commons/form/form.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ThemesComponent } from './components/themes/themes.component';

  // App service modules
import { LoginService } from "./services/login.service";
import { MenuService } from "./services/menu.service";
import { FormFieldComponent } from './components/commons/form-field/form-field.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    FormComponent,
    SettingsComponent,
    ThemesComponent,
    FormFieldComponent
  ],
  imports: [
      // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
      // Material modules
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatStepperModule,
      // Thirdy part modules
    FlexLayoutModule,
      // App modules
    AppRoutingModule,
  ],
  providers: [
    LoginService,
    MenuService
//    { provide: MethodField, useValue: null }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
