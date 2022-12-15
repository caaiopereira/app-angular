import { Component, Input, OnInit } from '@angular/core';
import { EsportesService } from '../esportes.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})

export class FormularioComponent implements OnInit{


  constructor(private banco: EsportesService){ }

  ngOnInit(){
    }

    submit(valor:any){
      try {
        this.banco.postEsportes(valor.value);
      }
      finally {
        setTimeout(function(){
        window.location.reload();
        }, 900);
      }   
    }

}
