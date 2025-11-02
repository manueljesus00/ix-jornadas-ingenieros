import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-organization',
  imports: [CommonModule],
  templateUrl: './organization.html',
  styleUrl: './organization.scss'
})
export class OrganizationComponent {
  perfiles = [
    {
      nombre: "Manuel Jesús Flores Montaño",
      cargo: "Coordinador del evento y webmaster",
      imagen: "https://2025.es.pycon.org/theme/images/organizers/manueljesus.jpeg",
      redes: [
        { nombre: "LinkedIn", url: "https://www.linkedin.com/in/manueljesus00/" },
        { nombre: "Twitter", url: "https://x.com/_manueljesus00" },
      ],
      trabajo: "Desarrollador Full Stack @ Avanade España",
    },
    {
      nombre: "Pablo Oca Galeano",
      cargo: "Presidente de la Asociación ESOLIUPO",
      imagen: "https://images.icon-icons.com/1674/PNG/512/person_110935.png",
      redes: [
        { nombre: "LinkedIn", url: "https://www.linkedin.com/in/pablo-oca/" },
      ],
      trabajo: "Estudiante en prácticas @ NTT Data",
    },
    {
      nombre: "Domingo Savio Rodríguez Baena",
      cargo: "Presidente del Club Alumni Ingenieros en la UPO",
      imagen: "assets/img/domingo.jpg",
      redes: [
        { nombre: "LinkedIn", url: "https://www.linkedin.com/in/domingo-savio-rodriguez-baena-3b68899/" },
      ],
      trabajo: "Subdirector de Estudiantes y Calidad @ EPS-UPO",
    },
  ];
}
