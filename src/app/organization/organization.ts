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
        { nombre: "LinkedIn", url: "#" },
        { nombre: "Twitter", url: "#" },
        { nombre: "GitHub", url: "#" }
      ],
      trabajo: "Desarrollador Full Stack @ Avanade España",
    },
    {
      nombre: "Pablo Oca Galeano",
      cargo: "Presidente de la Asociación ESOLIUPO",
      imagen: "https://images.icon-icons.com/1674/PNG/512/person_110935.png",
      redes: [
        { nombre: "LinkedIn", url: "#" },
        { nombre: "Twitter", url: "#" },
        { nombre: "GitHub", url: "#" }
      ],
      trabajo: "Estudiante en prácticas @ NTT Data",
    },
    // {
    //   nombre: "Daniel Martín Pérez",
    //   cargo: "Vicepresidente de la Asociación ESOLIUPO",
    //   imagen: "https://images.icon-icons.com/1674/PNG/512/person_110935.png",
    //   redes: [
    //     { nombre: "LinkedIn", url: "#" },
    //     { nombre: "Twitter", url: "#" },
    //     { nombre: "GitHub", url: "#" }
    //   ],
    //   trabajo: "Técnico investigador @ Universidad Pablo de Olavide",
    // },
    // {
    //   nombre: "Natalia Bermejo Jiménez",
    //   cargo: "Secretaria de la Asociación ESOLIUPO",
    //   imagen: "https://images.icon-icons.com/1674/PNG/512/person_110935.png",
    //   redes: [
    //     { nombre: "LinkedIn", url: "#" },
    //     { nombre: "Twitter", url: "#" },
    //     { nombre: "GitHub", url: "#" }
    //   ],
    //   trabajo: "Estudiante @ Universidad Pablo de Olavide",
    // },
    // {
    //   nombre: "Antonio Garrido Massé",
    //   cargo: "Tesorero de la Asociación ESOLIUPO",
    //   imagen: "https://images.icon-icons.com/1674/PNG/512/person_110935.png",
    //   redes: [
    //     { nombre: "LinkedIn", url: "#" },
    //     { nombre: "Twitter", url: "#" },
    //     { nombre: "GitHub", url: "#" }
    //   ],
    //   trabajo: "Desarrollador Web @ Sopra Steria",
    // },
    {
      nombre: "Domingo Savio Rodríguez Baena",
      cargo: "Presidente del Club Alumni Ingenieros en la UPO",
      imagen: "https://images.icon-icons.com/1674/PNG/512/person_110935.png",
      redes: [
        { nombre: "LinkedIn", url: "#" },
        { nombre: "Twitter", url: "#" },
        { nombre: "GitHub", url: "#" }
      ],
      trabajo: "Subdirector de Estudiantes y Calidad @ EPS-UPO",
    },
  ];
}
