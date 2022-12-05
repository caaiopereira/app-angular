import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent implements OnInit{

  
  constructor(){}

  ngOnInit(){
    }

    cadastrar(form:any){
      console.log(form.value);
    }

}
