import { Routes, RouterModule } from '@angular/router';

import { MyAccountComponent } from './myaccount';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { AboutComponent } from './about';
import { HomeComponent } from './home';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'myaccount', component: MyAccountComponent, canActivate: [AuthGuard] },
    { path: 'about', component: AboutComponent },

    // otherwise redirect to home
    // { path: '**', redirectTo: '' },
    { path: '**', redirectTo: 'home' }
];

export const appRoutingModule = RouterModule.forRoot(routes);