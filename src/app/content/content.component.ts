import { Component, OnInit } from '@angular/core';
import { Esportes } from '../esportes';
import { EsportesService } from '../esportes.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit{

  frase: string = "Lorem Ipsum is simply dummy text of the printing ";
  mostrarFrase: boolean = false;

  cursos: string[] = ["Angular", "React", "Java"];
  mostrarCurso: boolean = false;

  nome: string = '';

  constructor(private _esportesService: EsportesService){}

  public esportes: Esportes[] = [];

  ngOnInit() {
    this._esportesService.getEsportes()
    .subscribe(
      retorno => {
        this.esportes = retorno.map (item =>
          {
            return new Esportes(
              item.id,
              item.nome,
              item.audiencia,
              item.origem
            )
          }
          )
      }
    )
  }

  onMostrarFrase(){
    this.mostrarFrase = !this.mostrarFrase;
  }

  onMostrarCurso(){
    this.mostrarCurso = !this.mostrarCurso;
  }

  botaoClicado(){
    alert('Botão clicado');
  }

  deletar(id: number){
    try {
      this._esportesService.delEsportes(id);
    }
    finally {
      location.reload();
    }  
  }
}
