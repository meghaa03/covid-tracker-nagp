import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { StateDistrictComponent } from './dashboard/state-district.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { NewsService } from './services/news.services';
import { NewsDisplayComponent } from './news/news-display/news-display.component';
import { NewsUpdateComponent } from './news/news-update/news-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CredentialService } from './services/credentials.service';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { Routing } from './common/route';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StateDistrictComponent,
    PrecautionsComponent,
    NewsDisplayComponent,
    NewsUpdateComponent,
    LoginComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    Routing,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [HttpService, NewsService, CredentialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
