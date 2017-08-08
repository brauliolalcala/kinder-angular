import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

    console.log( this.form );
  }

  submit(){
    console.log( "Se ha enviado tus datos", this.form );
  }
}
