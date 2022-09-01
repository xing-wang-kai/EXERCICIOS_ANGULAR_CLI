import { Router } from '@angular/router';
import { Component, Output, EventEmitter } from '@angular/core';
import { TransferenciasServiceService } from '../service/transferencias-service.service';

@Component({
  selector: 'app-novo-formulario',
  templateUrl: './novo-formulario.component.html',
  styleUrls: ['./novo-formulario.component.scss']
})
export class NovoFormulario
{
  valor: number = 0;
  destino: string = "";

  constructor(private service: TransferenciasServiceService, private router: Router) { }

  transferir()
  {
    const Emitter = {valor: this.valor, destino: this.destino, data: null};
    this.service.adicionar(Emitter).subscribe( transferencia =>{
      console.table(transferencia);
      console.log(transferencia);
      this.limparCampo();
      this.router.navigateByUrl('extrato');
    },
    (error) => {
      console.log(error);
    }
    )
  }


  limparCampo()
  {
    this.valor = null;
    this.destino = null;
  }
}
