import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { NewsDisplayComponent } from '../news/news-display/news-display.component';
import { NewsUpdateComponent } from '../news/news-update/news-update.component';
import { PrecautionsComponent } from '../precautions/precautions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CredentialService } from '../services/credentials.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'newsdisplay',
        component:NewsDisplayComponent
    },
    {
        path:'newsupdate',
        component:NewsUpdateComponent,
        canActivate: [CredentialService]
    },
    {
        path:'precautions',
        component:PrecautionsComponent
    },
    {
        path:'**',
        component:PageNotFoundComponent
    },
];

export const Routing = RouterModule.forRoot(routes);