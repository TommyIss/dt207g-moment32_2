import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { AboutComponent } from './pages/about/about.component';
import { EditComponent } from './pages/edit/edit.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'add', component: AddComponent},
    {path: 'about', component: AboutComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'edit/:_id', component: EditComponent}
];
