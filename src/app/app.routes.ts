import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // ✅ IMPORTACIÓN CORRECTA

export const routes: Routes = [
  { path: '', component: HomeComponent } // ✅ Ruta principal
];
