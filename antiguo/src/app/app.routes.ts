import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { TicketsComponent } from './tickets/tickets';
import { LocationComponent } from './location/location';
import { OrganizationComponent } from './organization/organization';
import { DiversityComponent } from './diversity/diversity';
import { CodeOfConductComponent } from './diversity/code-of-conduct/code-of-conduct';
import { SpecialNeedsComponent } from './diversity/special-needs/special-needs';
import { SpeakersComponent } from './speakers/speakers';
import { SponsorsComponent } from './sponsors/sponsors';
import { ScheduleComponent } from './schedule/schedule';

export const routes: Routes = [
  // Ruta de Inicio (la raíz)
  { path: '', component: HomeComponent, title: 'Inicio' },

  // Rutas Principales
  { path: 'tickets', component: TicketsComponent, title: 'Entradas' },
  { path: 'donde', component: LocationComponent, title: 'Cómo llegar' },
  { path: 'organizacion', component: OrganizationComponent, title: 'Organización' },
  // { path: 'ponentes', component: SpeakersComponent, title: 'Ponentes' },
  { path: 'colaboradores', component: SponsorsComponent, title: 'Colaboradores' },
  // { path: 'horario', component: ScheduleComponent, title: 'Horario' },

  // // Rutas Anidadas de Diversidad
  // { 
  //   path: 'diversidad', 
  //   component: DiversityComponent, // Este componente actúa como un layout para las subrutas
  //   title: 'Diversidad y Accesibilidad',
  //   children: [
  //       // La ruta 'diversidad' sola puede redirigir al código de conducta
  //       { path: '', redirectTo: 'codigo-conducta', pathMatch: 'full' }, 
  //       { path: 'codigo-conducta', component: CodeOfConductComponent, title: 'Código de Conducta' },
  //       { path: 'necesidades-especiales', component: SpecialNeedsComponent, title: 'Solicitudes especiales' },
  //   ]
  // },

  // Manejo de Ruta no encontrada (opcional, pero recomendado)
  { path: '**', redirectTo: '' } // Redirige cualquier otra URL a la página de inicio
];