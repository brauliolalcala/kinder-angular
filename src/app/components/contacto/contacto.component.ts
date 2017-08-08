import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent {


  form: any;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  enviarFormulario() {
    console.log(this.form);
  }

  createForm() {
    this.form = this.fb.group({
      tutor: ['', Validators.required],
      alumno: ['', Validators.required],
      esalumno: ['', Validators.required],
      correo: ['', Validators.email],
      telefono: [''],
      asunto: [''],
      mensaje: ['', Validators.required]
    });

  }

}
