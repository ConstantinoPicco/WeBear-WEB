import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EmailJSResponseStatus} from '@emailjs/browser';
import * as emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {


  formData = {
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: '',
    presupuesto: '',
    mensaje: ''
  };

  sendEmail(event: Event) {
    event.preventDefault();

    emailjs.send(
      'service_erf8jwh',   // Reemplaza con tu SERVICE ID de EmailJS
      'template_t9dmqcn',  // Reemplaza con tu TEMPLATE ID de EmailJS
      this.formData,
      'lb9k0kOGcJPOFtSPd'    // Reemplaza con tu PUBLIC KEY de EmailJS
    ).then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      alert('Mensaje enviado correctamente.');
    }, (error) => {
      console.error(error.text);
      alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
    });
  }



}
